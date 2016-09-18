## inputChangeCombogrid.js

当input的值改变时刷新combogrid的数据。   
依赖模块：[data2](./data2.md)
```html
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
	require(["inputChangeCombogrid"], function (inputChangeCombogrid) {
		inputChangeCombogrid($input, $selector, url, dataFun, options);
	});
</script>
```
##### 传递参数：
* $input&lt;$selector&gt;：表单
* $combogrid&lt;$selector&gt;：easyui组合表格
* url&lt;String&gt;：url地址
* dataFun&lt;Object&gt;：数据以及获取的方法
* options&lt;Object&gt;：配置
	* idField&lt;String&gt;：定义标识树节点的键名字段。必需。
	* textField&lt;String&gt;：定义树节点的字段。必需。
	* columns&lt;Array&gt;：数据网格（datagrid）的列（column）的配置对象