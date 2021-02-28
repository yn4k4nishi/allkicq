window.onload = function() {
    // ラジオボタンの要素を取得
    var inputs = document.getElementsByTagName("input");
    
    // すべてをチェックする
    Array.prototype.forEach.call(inputs, function(t){
        t.checked = true;
    });
};