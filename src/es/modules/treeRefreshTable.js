/**
 * 点击树，根据树的内容刷新表格
 * @$tree：点击的树
 * @$table：刷新的表格
 * @url<string>：刷新地址
 * @dataFun<object>：参数和方法
 *   key：参数名
 *   value：方法或者字符串
 */

define((require, exports, module)=>{
    const data2 = require("data2");
    const main = ($tree, $table, url, dataFun)=>{
        function resTable(node){
            if(!node.children){
                dataFun.nodeId = node.id ? node.id : "";
                dataFun.nodeText = node.text ? node.text : "";
                $table.datagrid({
                    url: data2.string(dataFun, url)
                });
            }
        }
        $tree.tree({
            onClick: resTable
        });
    };
    module.exports = main;
});
