/**
 * 文件上传后自动给input添加文件名
 * @param $filebox{$selector}：上传控件的DomElement
 * @param $input{$selector}：input的DomElement
 */

define((require, exports, module)=>{
    const deferr = require("deferr");

    // 模块主函数，对外接口
    const main = ($filebox, $input)=>{
        // 延时加载
        const x = ()=>{
            const prompt = $filebox.filebox("options").prompt;
            const $file = $filebox.next(".filebox").find("input[type='file']");

            $file.on("change", function(event){
                const value = $filebox.filebox("options").value;
                $input.textbox("setValue", value)
            });
        };
        deferr(x);
    };

    module.exports = main;
});