/**
 * 表格追加联系人和删除联系人
 */

define((require, exports, module)=>{
    const main = ()=>{
        // $formAdd：添加按钮
        // $formTable：布局表格
        const [$formAdd, $formTable] = [$("#formAdd"), $("#formTable")];
        const classname = ["easyui-linkbutton", "contacInformation"];
        const text = $formTable.find(`.${classname[1]}`).html();
        // 添加
        function add(event){
            const $tbody = $(`<tbody class="${classname[1]}">${text}</tbody>`).appendTo($formTable);
            $tbody.find(`.${classname[0]}`).on("click", del);
            $.parser.parse($tbody);
        }
        // 删除
        function del(event){
            $(this).parents(`.${classname[1]}`).remove();
        }
        // 初始化
        $formAdd.on("click", add);
        $formTable.find(`.${classname[1]}`).find(`.${classname[0]}`).on("click", del);
    };
    module.exports = main;
});
