## formReset.js

表单重置。
```html
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
    require(["common", "formReset"], function (common, formReset) {
        formSubmit($save, $form, url, text);
    });
</script>
```
* **$resetBtnElement** &lt;$selector&gt;：重置按钮
* **$formElement** &lt;$selector&gt;：表单