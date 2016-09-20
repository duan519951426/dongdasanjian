/**
 * 员工动静板js
 * @$table<$selector>：treegrid
 * @url<String>：url地址
 * @dataFun<Object>：数据参数
 */

define((require, exports, module)=>{
    const data2 = require("data2");

    const main = ($table, url, dataFun)=>{
        // 双击事件
        function dbclickfun(field, row){
            window.location.href = data2["string"](dataFun, url);
        }
        // 为表格添加点击事件
        $table.datagrid({
            onDblClickCell: dbclickfun
        });
    };

    module.exports = main;
});