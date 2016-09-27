/**
 * 查询资材和修改技术指标
 */

define((require, exports, module)=>{
    const btnCtrlTable = require("btnCtrlTable");

    // 查询
    const $searchZicai = $(".search-zicai");
    // 修改技术指标
    const $editJishuzhibiao = {
        caigoucailiao: $("#editJishuzhibiao-caigoucailiao"),
        caigoufeiyong: $("#editJishuzhibiao-caigoufeiyong"),
        gongwucailiao: $("#editJishuzhibiao-gongwucailiao"),
        gongwufeiyong: $("#editJishuzhibiao-gongwufeiyong")
    };
    // 配置
    const options = {
        op: {
            title: "资材详细",
            width: 900,
            height: 300
        },
        url: "./引合管理-引合预算-手动添加预算-资材详细.html"
    };
    const main = ()=>{
        btnCtrlTable($searchZicai, null, "./引合管理-引合预算-手动添加预算-查询资材.html", "openWindow", null, {
            title: "选择资材",
            width: 1000,
            height: 700
        });

        // 修改技术指标
        btnCtrlTable($editJishuzhibiao.caigoucailiao, null, options.url, "openWindow", null, options.op);
        btnCtrlTable($editJishuzhibiao.caigoufeiyong, null, options.url, "openWindow", null, options.op);
        btnCtrlTable($editJishuzhibiao.gongwucailiao, null, options.url, "openWindow", null, options.op);
        btnCtrlTable($editJishuzhibiao.gongwufeiyong, null, options.url, "openWindow", null, options.op);
    };

    module.exports = main;
});