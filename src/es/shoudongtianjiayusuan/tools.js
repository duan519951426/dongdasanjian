define((require, exports, module)=>{
    const tools = {};

    // 新数组，用于触发vue的重新渲染
    tools["newArray"] = (data, index, k)=>{
        const x = {};
        x[k] = [];
        $.each(data[index], function(key, value){
            x[key] = value;
        });
        data.splice(index, 1, x);
    };

    // 格式化价格
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
