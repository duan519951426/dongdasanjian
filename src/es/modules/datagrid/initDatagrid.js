/**
 * 初始化分页数据处理的表格
 * @param $element{$selector}：表格的$DomElement
 * @param btn{object}：如果没有该字段，则对应的按钮为禁止使用状态，有该字段，则对应的按钮为可用状态
 *   key：字段
 *   value：对应的按钮$selector
 */

define((require, exports, module)=>{

    // 默认的配置项
    const datagridOptions = {
        singleSelect: true,    // 只允许选中一行
        autoRowHeight: false,  // 是否设置基于该行内容的行高度
        method: "GET",
        pagination: true,      // 显示分页工具栏
        pageSize: 30
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
    const main = ($element, btn)=>{
        const o = datagridOptions;
        // 将新参数加入到配置中
        o["onSelect"] = (rowIndex, rowData)=>{
            btnDisable($element, btn, rowIndex, rowData);
        };
        // 初始化表格
        $element.datagrid(o);
        if(btn){
            btnDisable($element, btn, null, null);
        }
    };

    module.exports = main;
});