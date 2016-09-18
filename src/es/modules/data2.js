/**
 * 处理请求url和请求数据
 * @dataFun<Object|Null>：数据以及获取的方法
 * @url<String>：地址
 */

define((require, exports, module)=>{
    const data2 = {};

    // 转换成对象
    data2["object"] = (dataFun)=>{
        const x = {};
        $.each(dataFun, function(key, value){
            x[key] = typeof value === "function" ? value() : value;
        });
        return x;
    };

    // 拼接地址
    data2["string"] = (dataFun, url)=>{
        let [x, i] = [url, 0];
        const m = /^.+\?.*$/.test(url) === true ? (/^.+\?$/.test(url) ? "" : "&") : "?";
        $.each(dataFun, function(key, value){
            x += `${i++ != 0 ? "&" : m}${key}=${typeof value === "function" ? value() : value}`;
        });
        return x;
    };

    const main = ()=>{
        return data2;
    };
    module.exports = main();
});
