/**
 * 点击树，根据树的内容刷新表格
 * @param $tree{$selector}：点击的树
 * @param $table{$selector}：刷新的表格
 * @param url{string}：刷新地址
 * @param dataFun{object}：参数和方法
 *   key：参数名
 *   value：方法或者字符串
 */

define((require, exports, module)=>{
    const data2 = require("data2");
    const main = ($tree, $table, url, dataFun)=>{
        function resTable(node){
            if(!node.children){
                // 获取点击树的id和text
                dataFun.nodeId = node.id ? node.id : "";
                dataFun.nodeText = node.text ? node.text : "";
                // 刷新datagrid
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
