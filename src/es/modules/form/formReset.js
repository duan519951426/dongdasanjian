/**
 * 表单重置
 * @$resetBtnElement：重置按钮（$(selector)）
 * @$formElement：表单（$(selector)）
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