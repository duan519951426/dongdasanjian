/**
 * 表单查询
 * @param $queryBtnElement{$selector}：查询按钮
 * @param $tableElement{$selector}：表格
 * @param url{string}：请求的地址
 * @param dataFun{object|null}：参数和方法
 *   key：参数名
 *   value：方法或者字符串
 */

define((require, exports, module)=>{
    const data2 = require("data2");

    const main = ($queryBtnElement, $tableElement, url, dataFun)=>{
        function query(event){
            $tableElement.datagrid({
                url: data2.string(dataFun, url)
            });
        }

        $queryBtnElement.on("click", query);

    };

    module.exports = main;
});