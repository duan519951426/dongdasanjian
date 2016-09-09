/**
 * 手动添加预算
 */

define((require, exports, module)=>{
    const [assignTableChecked, addChildrenClass, addBudget] = [
        require("./extend/assignTableChecked.js"), // 确认选择
        require("./extend/addChildrenClass.js"),   // 添加子类
        require("./extend/addBudget.js")            // 添加预算
    ];

    let [$tableChoice, $tableDnd] = [null, null];

    /* 判断按钮是否禁用 */
    const btnDisable = ($element, btn, rowData)=>{
        const data = rowData != null ? rowData : null;
        $.each(btn, function(key, value){
            value.linkbutton({
                "disabled": data == null ? true : (data[key] ? false : true)
            });
        });
    };
    const initBtnDisable = ($tableDnd, $btn)=>{
        btnDisable($tableDnd, $btn);
        $tableDnd.treegrid({
            onSelect: function(rowData){
                btnDisable($tableDnd, $btn, rowData);
            }
        });
    };

    const main = ()=>{
        [$tableChoice, $tableDnd] = [$("#tableChoice"), $("#tableDnd")];
        const $btn = {
            "addZilei": $("#toolbar-addZilei"),
            "addYusuan": $("#toolbar-addYusuan")
        };

        /* 初始化按钮事件 */
        assignTableChecked($("#assignTableChecked"), $tableChoice, $tableDnd, "f3"); // 确认选择
        addChildrenClass($btn.addZilei, $tableChoice, $tableDnd); // 添加子类
        addBudget($btn.addYusuan, $tableChoice, $tableDnd);       // 添加预算

        initBtnDisable($tableDnd, $btn);
    };
    module.exports = main;
});
