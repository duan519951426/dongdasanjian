/**
 * 生成二维码
 * @e<String|Object|Array>：
 *   类型为String时：传入id
 *   类型为Object时：传入对象，id -> 传入id，l -> 二维码长度和宽度，url -> 二维码地址
 *   类型为Array时：传入Object数组
 * @l<Number>：二维码长度和宽度
 * @url<String>：二维码地址
 */

define((require, exports, module)=>{
    const QRCode = require("_QRCode");

    // 单个生成二维码
    const qrcode = (id, l, url)=>{
        const ele = document.getElementById(id);
        const q = new QRCode(ele, {
            width: l,
            height: l
        });
        q.makeCode(url);
    };

    // 传递object生成二维码
    const objectQrcode = (obj)=>{
        qrcode(obj.id, obj.l, obj.url);
    };

    // 传递数组生成二维码
    const arrayQrcode = (array)=>{
        for(let i = array.length - 1; i >= 0; i--){
            objectQrcode(array[i]);
        }
    };

    const main = (e, l, url)=>{
        if(typeof e === "string"){
            qrcode(e, l, url);
        }else{
            e.length ? arrayQrcode(e) : objectQrcode(e);
        }
    };

    module.exports = main;
});