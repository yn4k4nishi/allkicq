window.onload = function() {
    // ラジオボタンの要素を取得
    var inputs = document.getElementsByTagName("input");
    
    // すべて4をチェックする
    Array.prototype.forEach.call(inputs, function(t){
        if (t.value == "4"){
            t.checked = true;
        }
    });
};