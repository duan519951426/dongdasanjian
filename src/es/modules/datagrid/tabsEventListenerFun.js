/**
 * 选项卡绑定事件
 * @$element<$selector>：选项卡的$DomElement
 * @fun<Array>：各个索引执行的事件
 * @more<Boolean>：执行次数，true 多次，false 一次
 * @index<Number>：初始化执行的函数，默认不执行
 */

define((require, exports, module)=>{
    // 模块主函数，对外接口
    const main = ($element, fun, more, index)=>{
        const f = fun;
        const selectFun = (title, _index)=>{
            // 判断数组内是否有对应的事件，如果有，执行相应的函数
            if(f[_index]){
                f[_index]();
                // 执行一次的话，就销毁该函数
                if(more === false){
                    f[_index] = null;
                }
            }
        };
        $element.tabs({
            onSelect: selectFun
        });
        // 判断初始化执行的函数
        if(index >= 0 && f[index]){
            f[index]();
            if(more === false){
                f[index] = null;
            }
        }
    };

    module.exports = main;
});