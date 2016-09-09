/**
 * 添加子类
 * @$addZilei：添加子类按钮
 * @$tableChoice：选择项所在的表格
 * @$tableDnd：选择后添加到的表格
 */

define((require, exports, module)=>{
    let id = 1;
    /* 添加子类 */
    const main = ($addZilei, $tableChoice, $tableDnd)=>{
        // 添加子类点击事件
        function addChildrenClass(event){
            const gs = $tableDnd.treegrid("getSelected");
            // 如果允许添加子类，就执行添加子类事件
            if(gs.addZilei){
                $.messager.prompt("添加子类", "子类名称：", (text)=>{
                    if(text){
                        // 添加子类
                        $tableDnd.treegrid("append", {
                            parent: /* gs._parentId ? gs._parentId : */ gs.id,
                            data: [{
                                "id": id++,
                                "f2": text,
                                "addZilei": true, // 允许添加子类
                                "addYusuan": true // 允许添加预算
                            }]
                        });
                    }
                });
            }
        }
        $addZilei.on("click", addChildrenClass);
    };

    module.exports = main;
});