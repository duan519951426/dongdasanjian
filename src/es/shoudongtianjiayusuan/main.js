/**
 * 手动添加预算
 */

define((require, exports, module)=>{
    /* 数据 */
    const _DATA = window._DATA || [];

    // -----------------------------------------------------------------
    // 添加预算时记录点击的索引和标题
    window._note = {
        I1: null,
        I2: null,
        title: null
    };
    // -----------------------------------------------------------------
    // 预算成本选择
    const Checkdata = require("./checkdata.js"),
        checkdata = new Checkdata(_DATA);
    // 预算明细及说明
    const Details = require("./details.js"),
        details = new Details(_DATA);
    // 添加预算
    const AddYusuan = require("./addYusuan.js"),
        addYusuan = new AddYusuan(_DATA);
    // -----------------------------------------------------------------
    /* 主函数 */
    const main = ()=>{
        checkdata.init(); // 预算成本选择
        details.init();   // 预算明细及说明
        addYusuan.init();
    };
    module.exports = main;
});