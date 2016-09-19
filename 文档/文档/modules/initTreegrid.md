## initTreegrid.js

初始化树形表格。
```html
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
	require(["common", "initTreegrid"], function (common, initTreegrid) {
		initTreegrid($element, treeField, btn);
	});
</script>
```
* $element&lt;$selector&gt;：表格的$DomElement
* treeField&lt;String&gt;：定义树节点的字段
* btn&lt;Object&gt;：key -> 字段，value -> 对应的按钮$selector，如果没有该字段，则对应的按钮为禁止使用状态，有该字段，则对应的按钮为可用状态
```javascript
initTreegrid($element, treeField, {
	"del": $del,
	"open": $open,
	...
});
```