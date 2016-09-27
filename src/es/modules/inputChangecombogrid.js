/**
 * // 新增返库
 * @param $input{$selector}：input(type='text')表单
 * @param $combogrid{$selector}：组合表格
 * @param url{string}：url地址
 * @param dataFun{object}：数据以及获取的方法
 * @param options{object}：配置
 *   idField{string}：定义标识树节点的键名字段。必需。
 *   textField{string}：定义树节点的字段。必需。
 *   columns{array}：数据网格（datagrid）的列（column）的配置对象
 */

define((require, exports, module)=>{
    const data2 = require("data2");

    const width = (columns)=>{
        let w = 25;
        $.each(columns[0], function(index){
            w += this.width ? this.width : 100;
        });
        return w;
    };

    const main = ($input, $combogrid, url, dataFun, options)=>{
        $combogrid.combogrid({
            panelWidth: width(options.columns),
            idField: options.idField,
            textField: options.textField,
            columns: options.columns
        });

        function inputChange(){
            $combogrid.combogrid({
                url: data2.string(dataFun, url)
            });
        }
        $input.textbox({
            onChange: inputChange
        });
    };
    module.exports = main;
});
