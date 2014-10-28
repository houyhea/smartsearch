require.config({
    baseUrl: "./",
    paths: {
        "App": "./",
        "Lib": "../lib",
        "text": "../lib/require/require.text",
        "css": "../lib/require/require.css",
        "Widgets": "./widgets"
    },
    packages: [
        {
            name: "jquery",
            location: "../lib/jquery",
            main: "jquery-1.11.1"
        }
    ]

});
require([
    "jquery",
    "App/results"
], function (jquery, results) {
    jquery(function () {
        window.widgets = [];
        console.log("loaded.");
        initUI();
    });
    function initUI() {
        $("#btn").on("click", function () {
            submit();
        });
        $("#keyword").on("keypress", function () {
            if (event.keyCode == "13") {
                submit();
            }
        });
    }

    function submit() {
        var keyword = $("#keyword").val();
        results.search(keyword).done(function (data) {
            console.log(data);
            renderResults(data.data);

        });
    }


    function renderResults(data) {
        var dom = $("#sr");
        dom.html("");
        for (var i = 0; i < data.data.length; i++) {
            var itemDom = $("<div class='item'></div>");
            dom.append(itemDom);
            var item = data.data[i];
            if (item.resultType == 1) {
                renderWidget(itemDom, item);
            }
            else if (item.resultType == 0) {
                renderNormalSearchResult(itemDom, item);
            }

        }
    }

    function renderWidget(dom, item) {
        if (item.appType == 1) {
            var iframe = "<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' scrolling='no' width='400px'' height='250px' src='" + item.url + "'></iframe></div";
            dom.append($(iframe));
        }
        else if (item.appType == 2) {


            require([item.url], function (Widget) {
                var w = new Widget();
                w.init(item.keyword);
                w.render(dom);
                window.widgets.push(w);
            });
        }

    }

    function renderNormalSearchResult(dom, item) {
        var div = "<div class='item'><a href='" + item.url + "'>" + item.title + "</a><p>" + item.summary + "</p></div>";
        dom.append($(div));
    }

})