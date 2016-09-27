## formQuery.js

表单查询。
```html
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
    require(["common", "formQuery"], function (common, formQuery) {
        formQuery($queryBtnElement, $tableElement, url, dataFun);
    });
</script>
```
* **$queryBtnElement** &lt;$selector&gt;：查询按钮
* **$tableElement** &lt;$selector&gt;：表格
* **url** &lt;string&gt;：请求的地址
* **dataFun** &lt;object|null&gt;：参数和方法
```javascript
formQuery($queryBtnElement, $tableElement, url, {
	"data1": function(){
		return ...
	},
	"data2": "String"
});
```