/**
 * 表单重置
 * @param $resetBtnElement{$selector}：重置按钮
 * @param $formElement{$selector}：表单
 */

define((require, exports, module)=>{
    const main = ($resetBtnElement, $formElement)=>{
        function reset(event){
            $formElement.form("reset");
        }
        $resetBtnElement.on("click", reset);
    };

    module.exports = main;
});