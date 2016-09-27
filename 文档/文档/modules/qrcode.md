## qrcode.js

生成二维码。   
依赖模块：_QRCode。
```html
<script src='../../js/common/require.2.2.0.min.js'></script>
<script src='../../js/common/require.config.js'></script>
<script>
    require(["common", "qrcode"], function (common, qrcode) {
        qrcode(e, l, url);
        // 或
        qrcode({});
        // 或
        qrcode([]);
    });
</script>
```
* **e** &lt;string|object|array&gt;：
    * 类型为string时：传入id
    * 类型为object时：传入对象，id -> 传入id，l -> 二维码长度和宽度，url -> 二维码地址
    * 类型为array时：传入object数组
* **l** &lt;number&gt;：二维码长度和宽度
* **url** &lt;string&gt;：二维码地址