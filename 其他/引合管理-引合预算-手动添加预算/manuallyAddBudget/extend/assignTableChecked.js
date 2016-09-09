/**
 * 确认选择
 * @$assignTableChecked：确认选择按钮
 * @$tableChoice：选择项所在的表格
 * @$tableDnd：选择后添加到的表格
 * @key<string>：给id赋值的数据键值
 */

define((require, exports, module)=>{
    const makeData = require("./makeData.js"); // 处理获取的data数据

    /* 确认选择 */
    const main = ($assignTableChecked, $tableChoice, $tableDnd, key)=>{
        // 确认选择点击事件
        function assign(event){
            // 获取已选择的table的值
            const oldData = $tableDnd.treegrid("getData"); // 旧数据
            const newData = makeData($tableChoice.treegrid("getSelections"), key, oldData); // 新数据，与旧数据进行了对比
            $tableDnd.treegrid({
                data: oldData.concat(newData) // 将新数据合并到旧数据的炒作中
            });
        }
        $assignTableChecked.on("click", assign);
    };

    module.exports = main;
});
