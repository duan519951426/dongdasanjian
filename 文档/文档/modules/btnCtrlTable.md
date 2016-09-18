## btnCtrlTable.js

按钮操作表格的数据。
依赖模块：[tableFunction](./tableFunction.md)
```html
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
	require(["btnCtrlTable"], function (btnCtrlTable) {
		btnCtrlTable($btnElement, $tableElement, url, ctrl, dataFun, options);
	});
</script>
```
* $btnElement<$selector>：按钮的$DomElement
* $tableElement<Array|Null|$selector>：需要刷新的表格的数组或单个对象，如果不刷新就传null
* url<String>：地址
* ctrl<String>：执行方法，有ajax、openWindow、newHref
* dataFun<Object|Null>：数据以及获取的方法
* options<Object>：其他的可选择的配置选项