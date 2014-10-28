/**
 * Created by zhangyongn on 14-10-15.
 */
define([], function () {
    function Widget() {
        this.key = "";
    };

    Widget.prototype =
    {
        init: function (keyword) {
            this.key = keyword;
        },
        render: function (dom) {
            var div = "<div class='widget' style='height:400px;'><img src='http://pica.nipic.com/2008-07-14/20087149249437_2.jpg' width='150px' height='200px'/><div >驾驶员：XX</div><div >车型：大众</div><div >年龄：40</div><div >司龄：3年</div></div>";
            dom.append($(div))
        }};
    return Widget;
});







