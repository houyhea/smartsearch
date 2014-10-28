/**
 * Created by zhangyongn on 14-10-15.
 */
define([], function () {
    var registerWidgets = [
        {keywords: [
            {keyType: 0, value: "车辆"},//keyType:0,字符串常量，1：正则表达式
            {keyType: 1, value: /[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/}
        ],
            widget: {appType: 2, url: 'App/widgets/vehiclesWidget/vehicle', objectType:"vehicle",author: "zy"}},
        {keywords: [
            {keyType: 0, value: "司机"},//keyType:0,字符串常量，1：正则表达式
            {keyType: 0, value: "司机：小红"}//keyType:0,字符串常量，1：正则表达式
        ],
            widget: {appType: 2, url: 'App/widgets/driversWidget/driver', objectType:"driver",author: "zy"}},
        {keywords: [
            {keyType: 0, value: "邮编"}//keyType:0,字符串常量，1：正则表达式

        ],
            widget: {appType: 2, url: 'App/widgets/zipcodeWidget/zipcode', objectType:"zipcode",author: "zy"}},
        {keywords: [
            {keyType: 0, value: "博客园"}
        ],
            widget: {appType: 1, url: 'http://www.cnblogs.com', objectType:"other",author: "zc"}}
    ];

    function resolve(key) {
        var data = {code: 1, data: {count: 3, data: []}};

        for (var i = 0; i < registerWidgets.length; i++) {
            var item = registerWidgets[i];
            var match = checkKeywords(item, key);
            if (match) {
                var r = {resultType: 1, url: item.widget.url, appType: item.widget.appType, keyword: key,objectType:item.widget.objectType};
                data.data.data.push(r);
            }

        }
        data.data.data.push({resultType: 0, title: '一般搜索结果', summary: '这里是摘要', url: 'http://www.cnblogs.com'});
        return data;
    }

    function checkKeywords(item, key) {
        for (var i = 0; i < item.keywords.length; i++) {
            var k = item.keywords[i];
            if (k.keyType == 0) {
                if (k.value == key)
                    return true;
            }
            else if (k.keyType == 1) {
                if (k.value.test(key))
                    return true;
            }

        }
    }

    var d = {search: function (key) {
        var dtd = $.Deferred();


        setTimeout(function () {
            console.log(key);
            var normalr = {resultType: 0, title: '一般搜索结果', summary: '这里是摘要', url: 'http://www.cnblogs.com'};
            var data = resolve(key);

            dtd.resolve(data);
        }, 500);
        return dtd.promise();
    }};
    return d;
});