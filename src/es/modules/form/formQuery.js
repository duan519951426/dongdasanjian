/**
 * 表单查询
 * @$queryBtnElement：查询按钮（$(selector)）
 * @$tableElement：表格（$(selector)）
 * @url<string>：请求的地址
 * @obj<object>：参数和方法
 *   key：参数名
 *   value：方法或者字符串
 */

define((require, exports, module)=>{
    // 将object拼接成字符串
    const data = (obj, url)=>{
        let [x, i] = ["", 0];
        const m = /^.+\?.*$/.test(url) === true ? (/^.+\?$/.test(url) ? "" : "&") : "?";
        $.each(obj, function(key, value){
            x += `${i++ != 0 ? "&" : m}${key}=${typeof value === "function" ? value() : value}`;
        });
        return x;
    };

    const main = ($queryBtnElement, $tableElement, url, obj)=>{
        function query(event){
            const ud = url + data(obj, url);
            $tableElement.datagrid({
                url: ud
            });
        }

        $queryBtnElement.on("click", query);

    };

    module.exports = main;
});