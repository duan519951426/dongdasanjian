/**
 * 手动添加预算
 */

define((require, exports, module)=>{
    if(/MSIE [6|7|8]\.0/ig.test(window.navigator.appVersion)){
        require("es5");
    }
    const Vue = require("vue");
    /* 可选择的项目 */
    const checkdata = require("./checkdata.js");

    /* 数据为核心 */
    const _DATA = window._DATA || [];

    /* checkbox的相关事件 */
    // 重置数据
    const resetCheckbox = ()=>{
        $.each(checkdata, function(index){
            if(this._check && this._check === true){
                this._check = null
            }
        });
    };
    // 渲染checkbox列表
    const vue_checkbox = ()=>{
        new Vue({
            el: '#vue-app-1',
            data: {
                checkdata: checkdata
            },
            methods: {
                checkCk: function(index){
                    checkdata[index]._check = checkdata[index]._check ? null : true;
                },
                queren: function(){
                    $.each(checkdata, function(index){
                        if(this._check && this._check === true){
                            _DATA.push(this);
                        }
                    });
                }
            }
        });
    };
    const initCheckbox = ()=>{
        vue_checkbox();
        $("#reset").on("click", resetCheckbox);
    };

    /* 主函数 */
    const main = ()=>{
        initCheckbox();


    };
    module.exports = main;
});