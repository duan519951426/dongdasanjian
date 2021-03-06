/**
 * 表单ajax提交
 * @param $save{$selector}：提交按钮
 * @param $form{$selector}：表单
 * @param url{string}：表单提交地址
 * @param text{object}：提交成功或失败的提示文字，success 成功，fail 失败
 */

define((require, exports, module)=>{
    const options = {}; // 配置

    // 提交
    function submit(){
        const isValid = $(this).form("validate");
        if(isValid === true){
            $.messager.progress({
                text: "正在提交中，请稍后..."
            });
        }
        return isValid;
    }
    // 成功
    function success(data){
        $.messager.progress("close");
    }

    const main = ($save, $form, url, text)=>{
        // 配置
        options["url"] = url;
        options["onSubmit"] = submit;
        options["success"] = success;
        $save.on("click", function(event){
            $form.form("submit", options);
        });
    };

    module.exports = main;
});