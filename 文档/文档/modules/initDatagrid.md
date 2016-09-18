## initDatagrid.js

初始化分页数据处理的表格。
```html
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
	require(["initDatagrid"], function (initDatagrid) {
		// initDatagrid($element, btn);
		initDatagrid($element, {
			"del": $del,
			"open": $open
		});
	});
</script>
```
* $element<$selector>：表格
* btn<Object>：key 字段，value 对应的按钮DomElement，如果没有该字段，则对应的按钮为禁止使用状态，有该字段，则对应的按钮为可用状态