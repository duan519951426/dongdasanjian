## fileGetName.js

文件上传后自动给input添加文件名。   
依赖模块：[deferr](./deferr.md)
```html
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
    require(["common", "fileGetName"], function (common, fileGetName) {
        fileGetName($filebox, $input);
    });
</script>
```
##### 传递参数：
* **$filebox** &lt;$selector&gt;：上传控件
* **$input** &lt;$selector&gt;：input表单