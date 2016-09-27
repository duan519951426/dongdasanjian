/**
 * 延迟执行
 * 防止某些事件在easyui未初始化完毕之前就执行
 * @param fun{function}：需要延迟执行的事件
 */

define((require, exports, module)=>{
    const main = (fun)=>{
        let set;
        const deferr = ()=>{
            window._renderedFlag_ ? fun() : clearTimeout(set);
        };
        set = setTimeout(deferr, 5);
    };
    module.exports = main;
});
