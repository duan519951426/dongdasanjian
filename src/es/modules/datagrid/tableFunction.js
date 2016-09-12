/**
 * 操作表格数据的方法
 * @url<string>：ajax或者iframe的地址
 * @ctrl<string>：执行方法，有ajax和openWindow
 * @dataFun<object>：数据以及获取的方法
 * @callback<function>：事件执行完的回调函数
 */

define((require, exports, module)=>{
    const data2 = require("data2");

    /* 各种操作方法 */
    const fun = {};

    // ajax
    // options.success  操作成功的提示
    // options.fail     操作失败的提示
    // options.confirm  提示信息
    fun["ajax"] = (url, dataFun, options, callback)=>{
        $.messager.confirm("提示", options.confirm ? options.confirm : " ", (result)=>{
            if(result){
                $.ajax({
                    type: "GET",
                    url: url, // 地址
                    async: false, // 异步
                    cache: false, // 缓存
                    data: dataFun != null ? data2.object(dataFun) : {}, // 数据
                    dataType: "json", // 返回数据类型
                    error: (request, error, object)=>{
                        console.log(request, error, object);
                        if(error == "timeout"){
                            $.messager.alert("", "请求超时。", "error");
                        }else{
                            $.messager.alert("", options && options.fail ? options.fail  : "发生错误，操作失败。", "error");
                        }
                    },
                    success: (result)=>{
                        $.messager.alert("", options && options.success ? options.success : "操作成功。", "info");
                        callback();
                    }
                });
            }
        });
    };

    // 打开新窗口，用于查看和编辑
    // options.width  窗口的宽度
    // options.height 窗口的高度
    // options.title  窗口的标题
    fun["openWindow"] = (url, dataFun, options, callback)=>{
        const $window = $(`<div style="position: relative;"><iframe src="${(dataFun != null ? data2.string(dataFun, url) : url)}" style="width: 100%;height: 100%;border: none;overflow: auto;"></iframe></div>`)
            .appendTo("body")
            .window({
                width: options && options.width ? options.width : 600,
                height: options && options.height ? options.height : 400,
                modal: true,
                title: options && options.title ? options.title : " ",
                onClose: ()=>{
                    callback();
                    $(".window, .window-shadow, .window-mask").remove();
                }
            });
    };

    // 跳转新链接
    fun["newHref"] = (url, dataFun)=>{
        window.location.href = dataFun != null ? data2.string(dataFun, url) : url;
    };

    // 模块主函数，对外接口
    const main = (url, ctrl, data, options, callback)=>{
        fun[ctrl](url, data, options, callback);
    };

    module.exports = main;
});