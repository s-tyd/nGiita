let url = location.href;
url = url.replace($(location).attr('search'), '');
switch (url) {
    case 'https://qiita.com/':
        // 記事非表示
        hideFunc('trends');
        window.onload = function () {
            // ランキング非表示
            hideFunc('ranking');
        };
        break;

    case 'https://qiita.com/timeline':
        //おすすめユーザー非表示
        hideFunc('timeline');
        break;

    case 'https://qiita.com/tag-feed':
        //タグフィード非表示
        hideFunc('tag-feed');
        break;

    case 'https://qiita.com/milestones':
        //マイルストーン非表示
        hideFunc('milestone');
        window.onload = function () {
            // ランキング非表示
            hideFunc(itemGet('ranking'), 'ranking');
        };
        break;

    default:
        //上記以外の場合でURLにitemが含まれている場合
        if (url.indexOf('item') !== -1) {
            //コメントの非表示処理
            hideFunc(itemGet('comment'), 'comment');
        }
        break;
}

//ランキングのタブクリック処理
$('.ra-UserList_tab').click(function () {
    let ranking_id = $(".ra-UserList").find(".ra-User_screenname").find("a").text();
    let timerId = setInterval(function () {
        let monitor_id = $(".ra-UserList").find(".ra-User_screenname").find("a").text();
        if (ranking_id !== monitor_id) {
            hideFunc('ranking');
            clearInterval(timerId);
        }
    }, 100);
});

// リストにブロックリストのIDがあればmuchListに追加
function muchCheck(id_list, blockList) {
    let muchList = [];
    for (let id of blockList) {
        if (id_list.indexOf(id) >= 0) {
            muchList.unshift(id);
        }
    }

    return muchList;
}

//非表示処理
function hideFunc(hide_type) {
    chrome.storage.sync.get("data", function (items) {
        // chrome storageからブロックリストの取得
        let blockList = items.data;
        if (!Array.isArray(blockList)) {
            blockList = [items.data];
        }

        let item_id = [];
        let muchList = [];
        //タイプごとに非表示処理を分岐
        switch (hide_type) {
            case 'ranking':
                item_id = $(".ra-UserList").find(".ra-User_screenname").find("a").text().split('@');
                muchList = muchCheck(item_id, blockList);
                for (let id of muchList) {
                    $(".ra-UserList").find(`a:contains(${'@' + id})`).parents('.ra-UserList_content').hide();
                }
                break;

            case 'trends':
                $(".p-home_main").find(".tr-Item_author").each(function () {
                    item_id.unshift($(this).text());
                });
                muchList = muchCheck(item_id, blockList);
                for (let id of muchList) {
                    $(".tr-Item").find(`a:contains(${id})`).parents('.tr-Item').remove();
                }
                break;

            case 'comment':
                $(".commentList").find(".commentHeader_creator").find("a").each(function () {
                    item_id.unshift($(this).text());
                });
                muchList = muchCheck(item_id, blockList);
                for (let id of muchList) {
                    $(".commentList").find(`a:contains(${id})`).parents('.comment').hide();
                }
                break;

            case 'timeline':
                item_id = $(".tl-RecommendedUserList").find(".tl-RecommendedUser_screenname").text().split('@');
                for (let id of muchList) {
                    muchList = muchCheck(item_id, blockList);
                    $(".tl-RecommendedUserList").find(`a:contains(${'@' + id})`).parents('.tl-RecommendedUserList_item').hide();
                }
                break;

            case 'tag-feed':
                $(".tf-Item.tf-Item-tagFiltered").find(".tf-ItemContent_author").each(function () {
                    item_id.unshift($(this).text());
                });
                muchList = muchCheck(item_id, blockList);
                for (let id of muchList) {
                    $(".tf-Item.tf-Item-tagFiltered").find(`a:contains(${id})`).parents('.tf-Item.tf-Item-tagFiltered').hide();
                }
                break;

            case 'milestone':
                $(".ms-Item").find(".ms-ItemContent_author").each(function () {
                    item_id.unshift($(this).text());
                });
                muchList = muchCheck(item_id, blockList);
                for (let id of muchList) {
                    $(".ms-Item").find(`.ms-ItemContent_author:contains(${id})`).parents('.ms-Item').hide();
                }
                break;
        }
    });
}

