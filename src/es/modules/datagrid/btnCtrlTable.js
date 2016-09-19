/**
 * 按钮操作表格的数据
 * @$btnElement<$selector>：按钮的$DomElement
 * @$tableElement<Array|Null|$selector>：需要刷新的表格的数组或单个对象，如果不刷新就传null
 * @url<String>：地址
 * @ctrl<String>：执行方法，有ajax、openWindow、newHref
 * @dataFun<Object|Null>：数据以及获取的方法
 * @options<Object>：其他的可选择的配置选项
 */

define((require, exports, module)=>{
    // require
    const tableFunction = require("tableFunction");
    // 判断是否是数组
    const isArray = obj => Object.prototype.toString.call(obj) === "[object Array]";

    // 模块主函数，对外接口
    const main = ($btnElement, $tableElement, url, ctrl, dataFun, options)=>{
        // 执行完后刷新
        const callback = ()=>{
            // 执行完后刷新表格
            if($tableElement != null){
                if(isArray($tableElement)){
                    $.each($tableElement, function(index){
                        try{
                            this.datagrid("reload");
                        }catch(error){}
                    });
                }else{
                    try{
                        $tableElement.datagrid("reload");
                    }catch(error){}
                }
            }
        };
        // 按钮点击事件
        function btnFun(event){
            if($(this).hasClass("l-btn-plain-disabled") === false){
                tableFunction(url, ctrl, dataFun, options, callback);
            }
        }
        $btnElement.on("click", btnFun);
    };

    module.exports = main;
});