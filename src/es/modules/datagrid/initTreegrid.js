/**
 * 初始化树形表格
 * @$element<$selector>：表格的$DomElement
 * @treeField<String>：定义树节点的字段
 * @btn<Object>：key->字段，value->对应的按钮$selector，如果没有该字段，则对应的按钮为禁止使用状态，有该字段，则对应的按钮为可用状态
 */

define((require, exports, module)=>{

    // 默认的配置项
    const treegridOptions = {
        rownumbers: false,      // 行号
        fitColumns: false,      // 自动扩大或缩小列的尺寸以适应网格的宽度
        singleSelect: true,    // 只允许选中一行
        autoRowHeight: false,  // 是否设置基于该行内容的行高度
        method: "GET",
        pagination: true,      // 显示分页工具栏
        pageSize: 30,
        idField: "id"
    };

    // 判断按钮是否禁用
    const btnDisable = ($element, btn, rowIndex, rowData)=>{
        const data = rowData != null ? rowData : null;
        $.each(btn, function(key, value){
            value.linkbutton({
                "disabled": data == null ? true : (data[key] ? false : true)
            });
        });
    };

    // 模块主函数，对外接口
    const main = ($element, treeField, btn)=>{
        const o = treegridOptions;
        // 将新参数加入到配置中
        o["onSelect"] = (rowIndex, rowData)=>{
            btnDisable($element, btn, rowIndex, rowData);
        };
        o["treeField"] = treeField;
        // 初始化表格
        $element.treegrid(o);
        if(btn){
            btnDisable($element, btn, null, null);
        }
    };

    module.exports = main;
});