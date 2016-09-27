define((require, exports, module)=>{
    const tools = {};

    /**
     * 给数组内的某个对象添加一个新对象，用于触发vue的重新渲染
     * @param data{array}：数组
     * @param index{number}：需要添加新对象的数组的索引
     * @param k{string}：新对象的键值名
     */
    tools["newArray"] = (data, index, k)=>{
        const x = {};
        x[k] = [];
        $.each(data[index], function(key, value){
            x[key] = value;
        });
        data.splice(index, 1, x); // 新对象替换数组内的旧对象
    };

    /**
     * 格式化价格
     * @param money{string|number}：价格
     * @return {string}：格式化后的价格
     */
    tools["formatMoney"] = (money)=>{
        const x = (()=>{
            const q = typeof money;
            if(q === "string"){
                return money.split(".")
            }else if(q === "number"){
                return String(money).split(".")
            }
        })();
        // 小数点前
        const n = x[0].split("");
        let p = "";
        for(let i = n.length - 1; i >=0; i = i - 3 ){
            if(i <= 2){
                p =  `${n[i - 2] ? n[i - 2] : ""}${n[i - 1] ? n[i - 1] : ""}${n[i]}` + p;
            }else{
                p = `,${n[i - 2]}${n[i - 1]}${n[i]}` + p;
            }
        }
        // 小数点后
        let r = "";
        if(x[1]){
            r = x[1].length > 2 ? `.${x[1].match(/^\d{2}/ig)[0]}` : `.${x[1]}0`;
        }else{
            r = ".00";
        }
        return String(p) + r;
    };

    module.exports = tools;
});
