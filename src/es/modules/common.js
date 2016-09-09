
/* 公共的js引入 */

define((require, exports, module)=>{
    const main = ()=>{
        /* jquery */
        require("jquery");
        /* easyui */
        require("easyui");
        /* 脚本，easyui延迟加载 */
        (()=>{
            function parse(){
                if($.parser && $.fn.slider && !window._renderedFlag_){
                    clearInterval(_9203);
                    $.parser.parse();
                    window._renderedFlag_ = true;
                }
            }
            const _9203 = setInterval(parse, 5);
        })();
        // 汉化
        require("zh_CN");
    };

    module.exports = main();
});