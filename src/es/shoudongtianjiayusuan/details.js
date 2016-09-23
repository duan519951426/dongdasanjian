/**
 * 预算明细及说明
 */

define((require, exports, module)=>{
    /MSIE [6|7|8]\.0/ig.test(window.navigator.appVersion) ? require("es5") : null;
    const Vue = require("vue");
    const newArray = require("./newArray.js");

    const $addYusuanWindow = $("#addYusuanWindow");

    const main = function(_DATA){
        this._DATA = _DATA;
    };
    // 渲染表格
    main.prototype.vue_dataBox = function(){
        const _this = this;
        this._vue = new Vue({
            el: '#vue-app-2',
            data: {
                DATA: _this._DATA
            },
            methods: {
                // 清空预算明细
                clearDATA: function(){
                    _this._DATA.splice(0, _this._DATA.length);
                },
                // 格式化价格
                formatMoney: function(money){
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
                },
                /* 删除 */
                // 删除大项
                delAll: function(i1){
                    _this._DATA.splice(i1, 1);
                },
                // 删除预算
                delYusuan: function(i1, i2){
                    _this._DATA[i1].yusuan.splice(i2, 1);
                },
                // 删除子类
                delChildren: function(i1, i2){
                    _this._DATA[i1].children.splice(i2, 1);
                },
                // 删除子类预算
                delChildrenYusuan: function(i1, i2, i3){
                    _this._DATA[i1].children[i2].yusuan.splice(i3, 1);
                },
                // 添加子类
                addChildren: function(i1){
                    $.messager.prompt("添加子类", "子类名称：", (text)=>{
                        if(text){
                            if(!_this._DATA[i1].children){
                                newArray(_this._DATA, i1, "children");
                            }
                            _this._DATA[i1].children.push({
                                "name": text
                            });
                        }
                    });
                },
                // 添加预算
                addYusuan: function(i1){
                    window._note.I1 = i1;
                    window._note.I2 = null;
                    window._note.title = _this._DATA[i1].name;
                    $addYusuanWindow.window("open");
                },
                // 添加子类预算
                addChildrenYusuan: function(i1, i2){
                    window._note.I1 = i1;
                    window._note.I2 = i2;
                    window._note.title = _this._DATA[i1].children[i2].name;
                    $addYusuanWindow.window("open");
                },
                /* 计算项目合计金额 */
                // 计算预算
                computeYusuan: function(array){
                    let m = 0;
                    $.each(array, function(index){
                        m += this.danjia * this.shuliang;
                    });
                    return m;
                },
                // 计算子类
                computeChildren: function(array){
                    const _this2 = this;
                    let m = 0;
                    $.each(array, function(index){
                        m += _this2.computeYusuan(this.yusuan);
                    });
                    return m;
                }
            }
        });
    };
    // 初始化
    main.prototype.init = function(){
        this.vue_dataBox();
    };

    module.exports = main;
});
