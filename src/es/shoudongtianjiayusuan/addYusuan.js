/**
 * 添加预算
 */

define((require, exports, module)=>{
    /MSIE [6|7|8]\.0/ig.test(window.navigator.appVersion) ? require("es5") : null;
    const Vue = require("vue");
    const tools = require("./tools.js");

    const $addYusuanWindow = $("#addYusuanWindow"); // 添加预算的弹出窗口

    /* -------------------------- 各种数据 -------------------------- */
    // 采购材料
    const caigoucailiao = (function(){
        const _this = {};
        _this.guige = $("#caigoucailiao-guige");   // 规格
        _this.num = $("#caigoucailiao-num");        // 数量
        _this.bili = $("#caigoucailiao-bili");      // 比例
        _this.beizhu = $("#caigoucailiao-beizhu");  // 备注
        _this.data = {     // 存储已输入的数据
            guige: null,  // 规格
            danwei: null, // 单位
            danjia: 0,     // 单价
            num: 0,         // 数量
            bili: 1,        // 比例
            beizhu: ""     // 备注
        };
        return _this;
    })();
    // 采购费用
    const caigoufeiyong = (function(){
        const _this = {};
        _this.guige = $("#caigoufeiyong-guige");
        _this.danwei = $("#caigoufeiyong-danwei"); // 单位
        _this.num = $("#caigoufeiyong-num");
        _this.bili = $("#caigoufeiyong-bili");
        _this.beizhu = $("#caigoufeiyong-beizhu");
        _this.data = {
            guige: null,
            danwei: _this.danwei.val(),
            danjia: 0,
            num: 0,
            bili: 1,
            beizhu: ""
        };
        return _this;
    })();
    // 工务材料
    const gongwucailiao = (function(){
        const _this = {};
        _this.guige = $("#gongwucailiao-guige");
        _this.num = $("#gongwucailiao-num");
        _this.bili = $("#gongwucailiao-bili");
        _this.beizhu = $("#gongwucailiao-beizhu");
        _this.data = {
            guige: null,
            danwei: null,
            danjia: 0,
            num: 0,
            bili: 1,
            beizhu: ""
        };
        return _this;
    })();
    // 工务费用
    const gongwufeiyong = (function(){
        const _this = {};
        _this.guige = $("#gongwufeiyong-guige");
        _this.danwei = $("#gongwufeiyong-danwei");
        _this.num = $("#gongwufeiyong-num");
        _this.bili = $("#gongwufeiyong-bili");
        _this.beizhu = $("#gongwufeiyong-beizhu");
        _this.data = {
            guige: null,
            danwei: _this.danwei.val(),
            danjia: 0,
            num: 0,
            bili: 1,
            beizhu: ""
        };
        return _this;
    })();

    // form表单
    const $form = {
        caigoucailiao: $("#formCaigoucailiao"), // 采购材料
        caigoufeiyong: $("#formCaigoufeiyong"), // 采购费用
        gongwucailiao: $("#formGongwucailiao"), // 工务材料
        gongwufeiyong: $("#formGongwufeiyong")  // 工务费用
    };

    const main = function(_DATA, details){
        this._DATA = _DATA;         // 数据
        this.note = details.note;   // [details.js]记录点击
    };
    // vue
    main.prototype.vue_addYusuanWindow = function(){
        const _this = this;
        this._vue = new Vue({
            el: "#addYusuanWindow",
            data: {
                title: _this.note.title, // 当前选择的类别
                DATA: _this._DATA,        // 数据
                view: {
                    // 采购材料
                    caigoucailiao: {
                        danwei: caigoucailiao.data.danwei, // 单位
                        danjia: caigoucailiao.data.danjia, // 单价
                        num: caigoucailiao.data.num,        // 数量
                        bili: caigoucailiao.data.bili       // 比例
                    },
                    // 采购费用
                    caigoufeiyong: {
                        danjia: caigoufeiyong.data.danjia, // 单价
                        num: caigoufeiyong.data.num,        // 数量
                        bili: caigoufeiyong.data.bili       // 比例
                    },
                    // 工务材料
                    gongwucailiao: {
                        danwei: gongwucailiao.data.danwei, // 单位
                        danjia: gongwucailiao.data.danjia, // 单价
                        num: gongwucailiao.data.num,        // 数量
                        bili: gongwucailiao.data.bili       // 比例
                    },
                    // 工务费用
                    gongwufeiyong: {
                        danjia: gongwufeiyong.data.danjia, // 单价
                        num: gongwufeiyong.data.num,        // 数量
                        bili: gongwufeiyong.data.bili       // 比例
                    }
                }
            },
            methods: {
                // 计算小计
                xiaoji: function(danjia, num, bili){ // 单价，数量，比例
                    return "*** 占位 ***";
                },
                /* 保存 */
                // 返回要保存的项
                getYusuan: function(){
                    if(_this.note.I2 === null){
                        // 添加到预算
                        if(!_this._DATA[_this.note.I1].yusuan){
                            tools.newArray(_this._DATA, _this.note.I1, "yusuan");
                        }
                        return _this._DATA[_this.note.I1].yusuan;
                    }else{
                        // 添加到子类的预算
                        if(!_this._DATA[_this.note.I1].children[_this.note.I2].yusuan){
                            tools.newArray(_this._DATA[_this.note.I1].children, _this.note.I2, "yusuan");
                        }
                        return _this._DATA[_this.note.I1].children[_this.note.I2].yusuan;
                    }
                },
                // 保存
                save: function(data, type, name){
                    // 要求必须有
                    // 规格，规格不能位空
                    // 单位
                    // 数量，大于等于0
                    // 比例，大于等于0
                    if(data.guige && data.guige != "" && data.danwei && data.num >= 0 && data.bili >= 0){
                        const d = this.getYusuan();
                        d.push({
                            "type": type,
                            "danjia": data.danjia,
                            "danwei": data.danwei,
                            "guige": data.guige,
                            "num": data.num,
                            "bili": data.bili,
                            "beizhu": data.beizhu
                        });
                        // 保存后重置表单
                        $form[name].form("reset");
                    }else{
                        $.messager.alert("提示", "请确认数据的有效性。");
                    }
                },
                // 保存采购材料
                saveCaigoucailiao: function(){
                    const data = caigoucailiao.data;
                    this.save(data, "采购材料", "caigoucailiao");
                },
                // 保存采购费用
                saveCaigoufeiyong: function(){
                    const data = caigoufeiyong.data;
                    this.save(data, "采购费用", "caigoufeiyong");
                },
                // 保存工务材料
                saveGongwucailiao: function(){
                    const data = gongwucailiao.data;
                    this.save(data, "工务材料", "gongwucailiao");
                },
                // 保存工务费用
                saveGongwufeiyong: function(){
                    const data = gongwufeiyong.data;
                    this.save(data, "工务费用", "gongwufeiyong");
                }
            }
        });
    };
    // form的change事件
    main.prototype.formChange = function(){
        const _this = this;

        // 数字的正则表达式
        const numReg = /^\d+(\.\d+)?$/;

        // 给x赋值，并且返回赋的值
        const return01 = (x, m)=>{
            const n = String(m);
            x.textbox("setValue", n);
            return n; // {string}
        };

        // onchange事件
        // 采购材料
        caigoucailiao.guige.combobox({ // 采购材料规格
            onChange: function(newValue, oldValue){
                caigoucailiao.data.guige = newValue;
                // 赋值并重新渲染
                caigoucailiao.data.danjia = 400;
                _this._vue.view.caigoucailiao.danjia = 400;
            }
        });
        caigoucailiao.num.textbox({ // 采购材料数量
            onChange: function(newValue, oldValue){
                caigoucailiao.data.num = numReg.test(newValue) ? newValue : return01(caigoucailiao.num, 0);
            }
        });
        caigoucailiao.bili.textbox({ // 采购材料比例
            onChange: function(newValue, oldValue){
                caigoucailiao.data.bili = numReg.test(newValue) ? newValue : return01(caigoucailiao.bili, 1);
            }
        });
        caigoucailiao.beizhu.textbox({ // 采购材料备注
            onChange: function(newValue, oldValue){
                caigoucailiao.data.beizhu = newValue;
            }
        });
        // 采购费用
        caigoufeiyong.guige.combobox({ // 采购费用规格
            onChange: function(newValue, oldValue){
                caigoufeiyong.data.guige = newValue;
            }
        });
        caigoufeiyong.danwei.combobox({ // 采购费用单位
            onChange: function(newValue, oldValue){
                caigoufeiyong.data.danwei = newValue;
            }
        });
        caigoufeiyong.num.textbox({ // 采购费用数量
            onChange: function(newValue, oldValue){
                caigoufeiyong.data.num = numReg.test(newValue) ? newValue : return01(caigoufeiyong.num, 0);
            }
        });
        caigoufeiyong.bili.textbox({ // 采购费用比例
            onChange: function(newValue, oldValue){
                caigoufeiyong.data.bili = numReg.test(newValue) ? newValue : return01(caigoufeiyong.bili, 1);
            }
        });
        caigoufeiyong.beizhu.textbox({ // 采购费用备注
            onChange: function(newValue, oldValue){
                caigoufeiyong.data.beizhu = newValue;
            }
        });
        // 工务材料
        gongwucailiao.guige.combobox({ // 工务材料规格
            onChange: function(newValue, oldValue){
                gongwucailiao.data.guige = newValue;
            }
        });
        gongwucailiao.num.textbox({ // 工务材料数量
            onChange: function(newValue, oldValue){
                gongwucailiao.data.num = numReg.test(newValue) ? newValue : return01(gongwucailiao.num, 0);
            }
        });
        gongwucailiao.bili.textbox({ // 工务材料比例
            onChange: function(newValue, oldValue){
                gongwucailiao.data.bili = numReg.test(newValue) ? newValue : return01(gongwucailiao.bili, 1);
            }
        });
        gongwucailiao.beizhu.textbox({ // 工务材料备注
            onChange: function(newValue, oldValue){
                gongwucailiao.data.beizhu = newValue;
            }
        });
        // 工务费用
        gongwufeiyong.guige.combobox({ // 工务费用规格
            onChange: function(newValue, oldValue){
                gongwufeiyong.data.guige = newValue;
            }
        });
        gongwufeiyong.danwei.combobox({ // 工务费用单位
            onChange: function(newValue, oldValue){
                gongwufeiyong.data.danwei = newValue;
            }
        });
        gongwufeiyong.num.textbox({ // 工务费用数量
            onChange: function(newValue, oldValue){
                gongwufeiyong.data.num = numReg.test(newValue) ? newValue : return01(gongwufeiyong.num, 0);
            }
        });
        gongwufeiyong.bili.textbox({  // 工务费用比例
            onChange: function(newValue, oldValue){
                gongwufeiyong.data.bili = numReg.test(newValue) ? newValue : return01(gongwufeiyong.bili, 1);
            }
        });
        gongwufeiyong.beizhu.textbox({  // 工务费用备注
            onChange: function(newValue, oldValue){
                gongwufeiyong.data.beizhu = newValue;
            }
        });
    };
    // 当窗口第一次打开时渲染select
    main.prototype.initSelect = function(){
        const _this = this;
        $addYusuanWindow.window({
            onBeforeOpen: function(){
                _this._vue.title = _this.note.title; // 赋值

                $addYusuanWindow.window({ // 修改onBeforeOpen函数的值
                    onBeforeOpen: function(){
                        _this._vue.title = _this.note.title;
                    }
                }).find(".easyui-combobox").each(function(index){ // 初始化combobox
                    const $this = $(this);
                    $this.combobox({
                        url: $this.attr("data-url")
                    });
                });
                // 获取规格
                caigoucailiao.data.guige = caigoucailiao.guige.combobox("getValue");
                caigoufeiyong.data.guige = caigoufeiyong.guige.combobox("getValue");
                gongwucailiao.data.guige = gongwucailiao.guige.combobox("getValue");
                gongwufeiyong.data.guige = gongwufeiyong.guige.combobox("getValue");
            }
        });
    };
    // 初始化
    main.prototype.init = function(){
        this.vue_addYusuanWindow();
        this.formChange();
        this.initSelect();
    };
    module.exports = main;
});