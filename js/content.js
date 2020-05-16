let url = location.href;
url = url.replace($(location).attr('search'), '');

//block icon base64
const blockIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAABICAYAAACeNle5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2OTMzOTcxOThFNTJFNzExOTQwMUUxOTRFMjk5OUQ4OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMzdCMzRBQjUyOTExMUU3QTRCNjgzRTg5MDI1OTg3NyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMzdCMzRBQTUyOTExMUU3QTRCNjgzRTg5MDI1OTg3NyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5MzM5NzE5OEU1MkU3MTE5NDAxRTE5NEUyOTk5RDg4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY5MzM5NzE5OEU1MkU3MTE5NDAxRTE5NEUyOTk5RDg4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1btqcgAABDNJREFUeNrsmElIVVEcxt/T1MzQKLDUpkXUoszSiiYaXPWsZ5PRtpAkpGgRYQUZ4aKSgkgRGoyWkZnh2C5bZJDlVC1qE5oaDQRGFj5T+w58Nw63O5x73xOl7oEfR8+775zvnXuG///zj42N+SZTifJNsuIJ8gSFW6ZofxScPD9hIq5fOPW3IAclFewFm0A6mAOSwAD4DDrBY1AN+l3PkEJZAc6CIIg2+DyJLKLgK6AWnAMdkVxDU8FV8ALsAiPgITgMMsAM4GedwXbx+S8+L75Xxn7CFpQPPoCjYBTcBAtBAFwDXXxVPtZdbA/wuRv83hHwFKSFIyifHYpfPgg2gEMUqFLEcwVgDXjLV/4EzHUjKB5c5qsQJQGcBrEuNkE7WAdawQJQz/4dCSrlAh2U2naCKpeivoIc8IbrrNSJoExQCIZBNmiSPssNQ9QXsJ/9FnIcJUFn2C52xjPuFL2oey5FdbLfKI5jKyiNAw6Bi2wLGYgKhiGqlP3nGu06vaDdbKsDn6R2TVRjBER9ZP9RHM9S0BbWjQYdhdiBXlS1C1ENrLfaCVrG+rlJR5qoBqlthwtRWv9L7QSlsO6x6EyI2mMg6r4DUe9145kKSpSuAZ9DUdsdiBrQjWcq6Jt0c/vGUVSSbjxTQdo9NV9x6jVR9TpRNTai5unGMxX0inWWgwUaYvwji8qxEbWK9Ws7Qc3Sr/S5EFWnE/XARFQO60d2gmoYv4jzJdmFqDydqICBqGSe0qP8zFJQH8POOFDk4lqwEhXH/0/wbzFOr8rlWkL1IkpcHkFRNVw7x9h/iept3wYqQAy4C2aFIapWJ6qZ/VZwHOUArYihwhLe8jNditqnE5XAQ7HIacT4g9dBN1gNWhgTuxElXs13/i+8n+Ps33GQ38vAvosz1cqMIkVRTAqfF9nGdM6MSBIqw0mDxK5bC8r5rMgi3jGMPcDMNVG6l9LZXsXnCvi9cma8lZHIXH9yx90CxTyj8ohV0c6ZErMFHG4q3c5YSMvtN0u5fSIvShFlvuQJPO65vVb6GaiXjYcT4vdMT0/QP+sxtvj9EyZivbSxJp3H+GfbK8yQncdodFIreYzyDE06j9FuhoStd4mDiQFu8z5TsfVSODsHuTQ6GNL0Wc2QlSDNY/TTScumX+S0rAR3wGLGVxv1sbTKK/M8Rs9jVPUY9Ys6jd7QMA0HzdaLZfQXkL5bx6gx5FDUbC7uGI7RZ7WoPY/R8xg9j9HzGP97j1H1pFYtsTwsg1JbEw/VkOQx9vCkFrd/r9VJPeEeo1GAlsnYZYTvusuFMLOZKqb5FU0jrE0lQJtQj9EshJ3GX5LB2drGIMvNTFUxZJEPxVTZ1lMJYT2P0UmiGM8YuJA/YIi7qIE5VzevgERu4yyeY0HuplGumSKzmVFNg4zSmWIXmautx+hWkD63j5jHKAv6LcAANVWyl69h+iIAAAAASUVORK5CYII=';

switch (url) {
    case 'https://qiita.com/':
        $(".tr-Item_author").each(function () {
            $(this).after('<a id=' + $(this).text() + ' class="blockIcon" style="background-image:url(' + blockIcon + ')" ></>');
        });
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
        $(".tf-ItemContent_author").each(function () {
            $(this).after('<a id=' + $(this).text() + ' class="blockIcon" style="background-image:url(' + blockIcon + ')" ></>');
        });
        hideFunc('tag-feed');
        break;

    case 'https://qiita.com/milestones':
        //マイルストーン非表示
        $(".ms-ItemContent_author").each(function () {
            $(this).after('<a id=' + $(this).text() + ' class="blockIcon" style="background-image:url(' + blockIcon + ')" ></>');
        });
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

$('.blockIcon').on('click', function () {
    const id = $(this).attr('id');
    addBlockID(id);
    $(".ra-UserList").find(`a:contains(${'@' + id})`).parents('.ra-UserList_content').hide();
    $(".tr-Item").find(`a:contains(${id})`).parents('.tr-Item').hide();
    $(".ms-Item").find(`.ms-ItemContent_author:contains(${id})`).parents('.ms-Item').hide();
    $(".tf-Item.tf-Item-tagFiltered").find(`a:contains(${id})`).parents('.tf-Item.tf-Item-tagFiltered').hide();

});

function addBlockID(userId) {
    chrome.storage.sync.get("data", function (items) {
        if (!chrome.runtime.error) {
            //追加データ取得
            // storageに保存されているListを取り出す
            let blockList;
            if (items.data === undefined) {
                items.data = [];
                blockList = [];
            } else {
                blockList = items.data.slice(0, items.data.length);
            }

            //データ結合
            blockList.unshift(userId);

            // 重複、空削除、ソート
            blockList = blockList.filter((x, i, self) => self.indexOf(x) === i);
            blockList = blockList.filter(v => v);
            blockList.sort();

            //データ保存
            chrome.storage.sync.set({"data": blockList}, function () {
                if (chrome.runtime.error) {
                    console.log("Runtime error.");
                }
            });
        }
    });
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

