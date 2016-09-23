/**
 * 表单验证
 */

define((require, exports, module)=>{
    const type = {};
    // 验证固定电话电话号码
    type["tel"] = {
        validator: (value, param)=> /^\d{3,4}-\d{7,8}$/.test(value),
        message: '固定电话号码格式不正确。'
    };
    // 验证手机号码
    type["phone"] = {
        validator: (value, param)=> /^1[34578]\d{9}$/.test(value),
        message: '手机号码格式不正确。'
    };
    // 验证邮箱
    type["email"] = {
        validator: (value, param)=> /^\w+@\w+\.\w+(\.\w+)?$/i.test(value),
        message: '邮箱格式不正确。'
    };
    // 大于等于0的数字
    type["num"] = {
        validator: (value, param)=> /^\d+(\.\d+)?$/.test(value),
        message: '请输入大于0的数字。'
    };

    const main = ()=>{
        $.extend($.fn.validatebox.defaults.rules, type);
    };
    module.exports = main();
});

