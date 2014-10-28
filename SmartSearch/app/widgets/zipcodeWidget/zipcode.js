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
            var div = "<div class='widget'>邮编：<input type='input' value='214000'><button id='sbtn'>查询</button><div >江苏 无锡</div></div>";
            dom.append($(div));
            var btn=$("#sbtn").on("click",function(){
                alert("车辆查询.");
            });
        }};
    return Widget;
});







