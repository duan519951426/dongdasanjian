## validForm.js

表单验证插件。
```html
<input class="easyui-textbox" type="text" data-options="validType: 'phone'">
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
	require(["common", "vaildForm"], function (common, vaildForm) {
		vaildForm();
	});
</script>
```
tel：验证电话号格式   
phone：验证手机号格式   
email：验证电子邮箱格式