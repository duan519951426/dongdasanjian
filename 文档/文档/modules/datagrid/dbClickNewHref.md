## dbClickNewHref.js

datagrid双击跳转页面。
```html
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
    require(["common", "dbClickNewHref"], function (common, dbClickNewHref) {
        dbClickNewHref($table, url, dataFun);
    });
</script>
```
 * **$table** &lt;$selector&gt;：treegrid
 * **url** &lt;string&gt;：url地址
 * **dataFun** &lt;object&gt;：数据参数