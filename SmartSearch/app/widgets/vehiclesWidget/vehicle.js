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
            var div = "<div class='widget'>车牌号<input type='input' value='"+this.key+"'><button id='sbtn'>查询</button><div >车牌号：苏BXXXXX</div><div >车型：大众</div><div >承载人数：5</div><div >司机：xxx</div></div>";
            dom.append($(div));
            var btn=$("#sbtn").on("click",function(){
                alert("车辆查询.");
            });
        }};
    return Widget;
});







