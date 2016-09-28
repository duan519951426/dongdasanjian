/**
 * 平台框架
 */

define((require, exports, module)=>{
    const deferr = require("deferr");
    const navs = require("./navs.js");
    const tabs = require("./tabs.js");

    const main = ()=>{

        const m = ()=>{
            const $navs = $("#master-navs");
            const $tabs = $("#master-tabs");

            navs($navs, $tabs);
            tabs($tabs);
        };
        deferr(m);
    };
    module.exports = main;
});
