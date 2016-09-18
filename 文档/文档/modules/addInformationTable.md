## addInformationTable.js

表格追加和删除。
```html
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
	require(["addInformationTable"], function (addInformationTable) {
		addInformationTable();
	});
</script>
```
```html
<table id="formTable">
	<tr>
		<button id="formAdd">添加</button>
	</tr>
	<tbody class="information">
		...
		<a class="easyui-linkbutton">删除</a>
	</tbody>
	<tr>
		...
	</tr>
```
* 添加按钮id：#formAdd
* 布局表格id：#formTable
