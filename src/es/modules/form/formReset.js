/**
 * 表单重置
 * @$resetBtnElement<$selector>：重置按钮
 * @$formElement<$selector>：表单
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