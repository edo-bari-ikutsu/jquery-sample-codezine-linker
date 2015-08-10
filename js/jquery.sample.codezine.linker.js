(function($){
    $.fn.codezine = function() {
        // マッチした要素それぞれに対して実行 ...（1）
        this.each(function(){
            var $this = $(this);
            // HTML内容を書き換え ...（2）
            $this.html("<a href='http://www.codezine.jp'>Go to Codezine!!</a>");
        })
    };
})(jQuery);