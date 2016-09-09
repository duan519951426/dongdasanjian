/**
 * 点击树，根据树的内容刷新表格
 * @$tree：点击的树
 * @$table：刷新的表格
 * @url<string>：刷新地址
 * @obj<object>：参数和方法
 *   key：参数名
 *   value：方法或者字符串
 */

define((require, exports, module)=>{
    const main = ($tree, $table, url, obj)=>{
        const data = (obj, url)=>{
            let [x, i] = ["", 0];
            const m = /^.+\?.*$/.test(url) === true ? (/^.+\?$/.test(url) ? "" : "&") : "?";
            $.each(obj, function(key, value){
                x += `${i++ != 0 ? "&" : m}${key}=${typeof value === "function" ? value() : value}`;
            });
            return x;
        };
        function resTable(node){
            if(!node.children){
                obj.nodeId = node.id ? node.id : "";
                obj.nodeText = node.text ? node.text : "";
                $table.datagrid({
                    url: url + data(obj, url)
                });
            }
        }
        $tree.tree({
            onClick: resTable
        });
    };
    module.exports = main;
});
