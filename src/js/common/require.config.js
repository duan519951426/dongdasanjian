/* requirejs配置文件 */
// 文件名后面不需要加".js"
// 里面定义的都是经常用到的文件

require.config({
    baseUrl: '/js/',
    paths: {
        /* 基本的js文件 */
        "jquery": "./common/jquery.1.12.4.min", // jquery
        "easyui": "./common/jquery.easyui.min", // easyui
        "zh_CN": "./common/easyui-lang-zh_CN",  // 汉化文件
        "common": "./modules/common",            // 基本的打包文件，将每页需要的公用文件打包进来

        /* 插件 */
        "deferr": "./modules/deferr",            // 延时加载
        "data2": "./modules/data2",               // 数据处理
        "fileGetName": "./modules/fileGetName", // 文件上传
        "inputChangeCombogrid": "./modules/inputChangeCombogrid", // 当input的值改变时刷新combogrid的数据

        /* 数据网格的操作 */
        "initDatagrid": "./modules/datagrid/initDatagrid",                   // 初始化分页数据处理的表格
        "initTreegrid": "./modules/datagrid/initTreegrid",                   // 初始化树形表格
        "tabsEventListenerFun": "./modules/datagrid/tabsEventListenerFun", // 选项卡绑定事件
        "btnCtrlTable": "./modules/datagrid/btnCtrlTable",                   // 按钮操作表格的数据
        "tableFunction": "./modules/datagrid/tableFunction",                 // 操作表格数据的方法
        "datagridView": "./modules/datagrid/datagridView",                   // 数据网格扩展，点击加号显示

        /* 表单相关 */
        "formSubmit": "./modules/form/formSubmit", // 表单提交
        "formQuery": "./modules/form/formQuery",   // 查询
        "formReset": "./modules/form/formReset",   // 表单重置
        "validForm": "./modules/form/validForm"    // 表单验证
    },
    // 依赖
    shim: {
        "easyui": {
            deps: ["jquery"]
        },
        "zh_CN": {
            deps: ["jquery", "easyui"]
        },
        "validForm": {
            deps:["jquery", "easyui", "zh_CN"]
        }
    }
});