## treeRefreshTable.js

点击树，根据树的内容刷新表格。
```html
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
	require(["common", "treeRefreshTable"], function (common, treeRefreshTable) {
		treeRefreshTable($tree, $table, url, dataFun);
	});
</script>
```
* $tree&lt;$selector&gt;：点击的树
* $table&lt;$selector&gt;：刷新的表格
* url&lt;String&gt;：刷新地址
* dataFun&lt;Object&gt;：参数和方法