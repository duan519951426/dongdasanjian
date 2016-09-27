## formSubmit.js

表单ajax提交。
```html
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
    require(["common", "formSubmit"], function (common, formSubmit) {
        formSubmit($save, $form, url, text);
    });
</script>
```
* **$save**&lt;object&gt;：提交按钮的$DomElement
* **$form** &lt;object&gt;：表单的$DomElement
* **url** &lt;string&gt;：表单提交地址
* **text** &lt;object&gt;：提交成功或失败的提示文字
	* text.success 提交成功文字
	* text.fail 提交失败文字