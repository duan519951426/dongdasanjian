/**
 * 清除选择项
 * @$btn：清除按钮
 * @$table：清除的表格
 */

define((require, exports, module)=>{
    // 清空选择
    const main = ($btn, $table)=>{
        function clearTable(event){
            $table.datagrid("unselectAll");
        }
        $btn.on("click", clearTable);
    };
    module.exports = main;
});