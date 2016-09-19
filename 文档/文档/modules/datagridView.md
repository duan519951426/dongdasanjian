## datagridView.js

数据网格扩展，点击加号显示更多。   
```html
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
	require(["common", "datagridView"], function (common, datagridView) {
		datagridView($element, callback);
	});
</script>
```
* $element&lt;$selector&gt;：表格
* callback&lt;Function&gt;：执行成功的回调函数，传递参数为获取的json数据

<b>后台数据的state字段，state.url为点击加号后的ajax地址</b>