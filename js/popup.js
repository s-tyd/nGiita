//ブロックリストのビジュアライズ
function visualizeBlocklist() {
    chrome.storage.sync.get("data", function (items) {
        let blockList = items.data;
        let htmlBlockList = '';
        if (!Array.isArray(blockList)) {
            blockList = [items.data];
            return
        }
        for (let i = 0; i < blockList.length; i++) {
            htmlBlockList += `<li><input type="checkbox" class="id_check" value="${blockList[i]}">${blockList[i]}</input></li>`;
        }
        document.getElementById('block_list').innerHTML = htmlBlockList;
    });
}

window.onload = function () {
    visualizeBlocklist()
};


// Enterキー処理
$('#text').keypress(function (e) {
    if (e.which === 13) {
        $('#set').click();
    }
});

// 追加ボタン
$('#set').on('click', function () {
    addBlockID();
});

// ブロックリストに追加
function addBlockID() {
    chrome.storage.sync.get("data", function (items) {
        if (!chrome.runtime.error) {
            //追加データ取得
            // let addData = document.getElementById("text").value;
            let addData = $('#text');
            console.log(items.data);
            // storageに保存されているListを取り出す
            let blockList;
            if (items.data === undefined) {
                items.data = [];
                blockList = [];
            } else {
                blockList = items.data.slice(0, items.data.length);
            }

            //データ結合
            blockList.unshift(addData.val());

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

            // データの表示
            if (items.data.length === blockList.length) {
                if (addData.val() !== '') {
                    $('#data').text(`「@${addData.val()}」は既に追加されています。`);
                }
            } else if (addData.val() !== '') {
                $('#data').text(`「@${addData.val()}」を追加しました。`);
            }

            addData.val("");
            visualizeBlocklist()
        }
    });
}


// ブロックリストの表示設定
let tag_view_block_list = $('#view_block_list');
let tag_block_list = $('#block_list_div');
tag_view_block_list.on('click', function () {
    if (tag_block_list.css('display') === 'block') {
        // 表示されている場合の処理
        tag_view_block_list.text("▼ ブロックリスト");
        tag_block_list.css("display", "none");
    } else {
        // 表示されていない場合の処理
        tag_view_block_list.text("▲ 非表示");
        tag_block_list.css("display", "block");
    }
});

// 削除
$('#delete').on('click', function () {
    chrome.storage.sync.get("data", function (items) {
        if (!chrome.runtime.error) {
            // storageに保存されているListを取り出す
            let blockList = items.data;
            if (!Array.isArray(blockList)) {
                blockList = [items.data];
            }

            //チェックボックス選択リスト取得
            let checkList = $('[class="id_check"]:checked').map(function () {
                return $(this).val();
            }).get();

            //差分抽出
            let re = blockList.filter(itemA => checkList.indexOf(itemA) === -1);

            //データ保存
            chrome.storage.sync.set({"data": re}, function () {
                if (chrome.runtime.error) {
                    console.log("Runtime error.");
                }
            });
            visualizeBlocklist()
        }
    });
});
