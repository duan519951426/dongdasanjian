/**
 * 预算明细及说明
 */

define((require, exports, module)=>{
    /MSIE [6|7|8]\.0/ig.test(window.navigator.appVersion) ? require("es5") : null;
    const Vue = require("vue");
    const tools = require("./tools.js");

    const $addYusuanWindow = $("#addYusuanWindow");

    const main = function(_DATA){
        this.note = {
            I1: null,
            I2: null,
            title: null
        };
        this._DATA = _DATA;
    };
    // 渲染表格
    main.prototype.vue_dataBox = function(){
        const _this = this;
        this._vue = new Vue({
            el: '#vue-app-2',
            data: {
                DATA: _this._DATA,
                money: {
                    caigoucailiao: 0,
                    caigoufeiyong: 0,
                    gongwucailiao: 0,
                    gongwufeiyong: 0
                }
            },
            methods: {
                // 清空预算明细
                clearDATA: function(){
                    _this._DATA.splice(0, _this._DATA.length);
                },
                // 格式化价格
                formatMoney: tools.formatMoney,
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
                                tools.newArray(_this._DATA, i1, "children");
                            }
                            _this._DATA[i1].children.push({
                                "name": text
                            });
                        }
                    });
                },
                // 添加预算
                addYusuan: function(i1){
                    _this.note.I1 = i1;
                    _this.note.I2 = null;
                    _this.note.title = _this._DATA[i1].type + " " + _this._DATA[i1].name;
                    $addYusuanWindow.window("open");
                },
                // 添加子类预算
                addChildrenYusuan: function(i1, i2){
                    _this.note.I1 = i1;
                    _this.note.I2 = i2;
                    _this.note.title = _this._DATA[i1].children[i2].name;
                    $addYusuanWindow.window("open");
                },
                /* 计算项目合计金额 */
                // 计算预算
                computeYusuan: function(array){
                    let m = 0;
                    $.each(array, function(index){
                        m += this.danjia * this.num;
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
                },
                // 计算
                computeType: function(type){
                    let m = 0;
                    $.each(this.DATA, function(index){
                        if(this.yusuan){
                            // 计算预算
                            $.each(this.yusuan, function(index2){
                                if(this.type === type){
                                    m += this.danjia * this.num;
                                }
                            });
                        }else if(this.children){
                            // 计算子类的预算
                            $.each(this.children, function(index){
                                if(this.yusuan){
                                    $.each(this.yusuan, function(index2){
                                        if(this.type === type){
                                            m += this.danjia * this.num;
                                        }
                                    });
                                }
                            });
                        }
                    });
                    return m;
                },
                // 计算采购材料
                computeCaigoucailiao: function(){
                    this.money.caigoucailiao = this.computeType("采购材料");
                    return this.money.caigoucailiao;
                },
                // 计算采购费用
                computeCaigoufeiyong: function(){
                    this.money.caigoufeiyong = this.computeType("采购费用");
                    return this.money.caigoufeiyong;
                },
                // 计算工务材料
                computeGongwucailiao: function(){
                    this.money.gongwucailiao = this.computeType("工务材料");
                    return this.money.gongwucailiao;
                },
                // 计算工务费用
                computeGongwufeiyong: function(){
                    this.money.gongwufeiyong = this.computeType("工务费用");
                    return this.money.gongwufeiyong;
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
