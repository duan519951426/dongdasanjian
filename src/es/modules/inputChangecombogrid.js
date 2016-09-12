/**
 * 新增返库
 * @$input：input(type='text')表单
 * @$combogrid：组合表格
 * @url<string>：url地址
 * @dataFun<object>：数据以及获取的方法
 * @options<object>：配置
 *   idField
 *   textField
 *   columns
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
