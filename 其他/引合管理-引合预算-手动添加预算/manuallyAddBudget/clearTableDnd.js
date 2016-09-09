/**
 * 清空预算明细
 * @$btn：清除按钮
 * @$table：清除的表格
 */

define((require, exports, module)=>{
    // 清空选择
    const main = ($btn, $table)=>{
        function clearTable(event){
            $table.treegrid({
                data: []
            });
        }
        $btn.on("click", clearTable);
    };
    module.exports = main;
});
