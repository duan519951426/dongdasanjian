/**
 * 组合树，添加一个新选项
 * @$combotree：组合树
 * @$input：输入名字的input
 * @$add：添加按钮
 */

define((require, exports, module)=>{
    const deferr = require("deferr");
    /**
     * 分割名字字符串
     * @text<string>：填写了一堆人名的字符串
     * @return<array>：字符串被","或"，"分割后的数组
     */
    const getName = text => text.split(/(?:,|，)/);
    /**
     * 删除每组开头和结尾的空格和空字符串
     * @array<string>：数组，组内为字符串
     * @return<array>：去掉空数组，首位有空格的删除掉首位的空格，返回字符串数组
     */
    const geshihua = (array)=>{
        const a = [];
        $.each(array, function(index){
            const b = this.match(/([^\s]*[^\s]+[^\s]*)/ig);
            if(b){
                a.push(b[0]);
            }
        });
        return a;
    };
    const main = ($combotree, $input, $add)=>{
        const x = ()=>{
            const $combo = $combotree.next(".combo");
            const $ipt = $combo.find(".textbox-text");
            const $tree = $combotree.combotree("tree");
            let value = "";

            function addName(event){
                if(/^([\s])*$/ig.test(this)){
                    const valueArray = geshihua(getName($input.val()));

                    if(valueArray.length != 0){
                        let text = "";
                        const data = [];
                        $.each(valueArray, function(index){
                            data.push({
                                checked: true,
                                id: this,
                                text: this
                            });
                            text += `${this},`;
                            $combo.append(`<input type="hidden" class="textbox-value" name="${$combotree.prop("name")}" value="${this}">`);
                        });
                        // 先赋值后插入节点保证点击的时候文字不能消失
                        value = ($ipt.val() == "" ? "" : $ipt.val() + ",") + text;
                        $tree.tree("append", {
                            data: data
                        });
                         if($ipt.val(value).hasClass("textbox-prompt")){
                            $ipt.removeClass("textbox-prompt")
                         }
                        $input.textbox("setValue", "");
                    }
                }
            }
            function setValue(event){
                $ipt.val(value);
            }

            $add.on("click", addName);
            $combo.on("click", setValue);
        };
        deferr(x);
    };
    module.exports = main;
});
