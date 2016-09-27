## initDatagrid.js

初始化分页数据处理的表格。
```html
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
    require(["common", "initDatagrid"], function (common, initDatagrid) {
        // initDatagrid($element, btn);
        initDatagrid($element, {
            "del": $del,
            "open": $open
        });
    });
</script>
```
* **$element** &lt;$selector&gt;：表格
* **btn** &lt;object&gt;：如果没有该字段，则对应的按钮为禁止使用状态，有该字段，则对应的按钮为可用状态
    * key：字段
    * value：对应的按钮$selector