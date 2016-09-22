/**
 * 预算成本选择
 */

define((require, exports, module)=>{
    /MSIE [6|7|8]\.0/ig.test(window.navigator.appVersion) ? require("es5") : null;
    const Vue = require("vue");

    const $vueApp1 = $("#vue-app-1");
    const main = function(_DATA){
        this._DATA = _DATA;
        // 数据
        this.data = [
            {"type": "A00", "name": "总体"},
            {"type": "B00", "name": "基础"},
            {"type": "C00", "name": "基础附带金属结构"},
            {"type": "E00", "name": "其他炉本体"},
            {"type": "E10", "name": "固熔炉"},
            {"type": "E11", "name": "保持室"},
            {"type": "E12", "name": "熔化室"},
            {"type": "E13", "name": "铝屑熔化室"},
            {"type": "E14", "name": "塔部"},
            {"type": "E20", "name": "保温炉本体"},
            {"type": "E30", "name": "兼用炉本体"},
            {"type": "E31", "name": "兼用炉保持室"},
            {"type": "E32", "name": "兼用炉熔化室"},
            {"type": "E34", "name": "兼用炉塔部"},
            {"type": "E50", "name": "铝屑炉本体"},
            {"type": "F00", "name": "操作台"},
            {"type": "F20", "name": "炉体操作台"},
            {"type": "G33", "name": "兼用熔化炉室小炉门"},
            {"type": "F40", "name": "前处理操作台"},
            {"type": "G00", "name": "其他炉门或盖及开闭装置"},
            {"type": "G10", "name": "熔化炉门及开闭装置"},
            {"type": "G11", "name": "熔化炉保持室门及开闭装置"},
            {"type": "G12", "name": "熔化炉熔化室大炉门及开闭装置"},
            {"type": "G13", "name": "熔化炉熔化室小炉门"},
            {"type": "G14", "name": "熔化炉塔盖及开闭装置"},
            {"type": "G20", "name": "保温炉门及开闭装置"},
            {"type": "G30", "name": "中间炉门"},
            {"type": "G31", "name": "兼用炉保持室门及开闭装置"},
            {"type": "G32", "name": "建永路熔化室大炉门及开闭装置"},
            {"type": "G34", "name": "兼用炉塔盖及开闭装置"},
            {"type": "G50", "name": "铝屑炉门及开闭装置"},
            {"type": "H10", "name": "固溶炉循环风机"},
            {"type": "H20", "name": "时效炉循环风机"},
            {"type": "J10", "name": "固溶炉炉内输送装置"},
            {"type": "J20", "name": "时效炉炉内输送装置"},
            {"type": "K10", "name": "投料机"},
            {"type": "K11", "name": "固溶炉炉前进料辊道"},
            {"type": "K20", "name": "固溶炉出料装置"},
            {"type": "K21", "name": "固溶炉、时效炉转移辊道"},
            {"type": "K30", "name": "时效炉进料装置"},
            {"type": "K31", "name": "时效炉炉前出料辊道"},
            {"type": "K40", "name": "行车装置"},
            {"type": "K41", "name": "中转台车"},
            {"type": "K50", "name": "淬火转移装置"},
            {"type": "K60", "name": "装料或升降平台"},
            {"type": "K61", "name": "进出料台"},
            {"type": "K62", "name": "移料台"},
            {"type": "K63", "name": "料筐拉出装置"},
            {"type": "K81", "name": "上料装置"},
            {"type": "K82", "name": "投料机"},
            {"type": "K83", "name": "带铁回炉料投料装置"},
            {"type": "K90", "name": "底开投料机"},
            {"type": "M10", "name": "料筐/台车"},
            {"type": "M20", "name": "铝包"},
            {"type": "M30", "name": "司炉工具"},
            {"type": "N10", "name": "出铝槽"},
            {"type": "N20", "name": "除渣装置"},
            {"type": "N40", "name": "涡流循环系统"},
            {"type": "N50", "name": "出铝装置"},
            {"type": "N60", "name": "除气机"},
            {"type": "N71", "name": "受料斗"},
            {"type": "N72", "name": "贮料斗/分料斗"},
            {"type": "N73", "name": "计量出料斗"},
            {"type": "N74", "name": "刮板输送机"},
            {"type": "N75", "name": "IDEX用S-C"},
            {"type": "N76", "name": "干燥装置"},
            {"type": "N77", "name": "斗提"},
            {"type": "N78", "name": "螺旋输送机"},
            {"type": "N79	", "name": "脱油机架台及进料螺旋"},
            {"type": "N80", "name": "铝包预热装置"},
            {"type": "Q00", "name": "其他炉燃烧装置"},
            {"type": "Q10", "name": "熔化炉燃烧装置"},
            {"type": "Q20", "name": "保温炉燃烧装置"},
            {"type": "Q30	", "name": "兼用炉燃烧装置"},
            {"type": "Q50", "name": "铝屑炉燃烧装置"},
            {"type": "R00", "name": "排烟管道（总）"},
            {"type": "R10", "name": "固溶炉排烟管道"},
            {"type": "R20", "name": "排烟管道"},
            {"type": "R30	", "name": "集尘管道"},
            {"type": "S10", "name": "现场安装"},
            {"type": "T00", "name": "其他炉配管"},
            {"type": "T10", "name": "熔化炉配管"},
            {"type": "T20", "name": "保温炉配管"},
            {"type": "T30", "name": "兼用炉配管"},
            {"type": "T50", "name": "铝屑炉配管"},
            {"type": "T70", "name": "轴承注油配管"},
            {"type": "U00", "name": "控制装置"},
            {"type": "U10", "name": "控制系统"},
            {"type": "Y00", "name": "其他备件"},
            {"type": "Z00", "name": "其它"}
        ];
    };
    // 重置数据
    main.prototype.resetCheckbox = function(){
        $.each(this.data, function(index){
            if(this._check && this._check === true){
                this._check = null
            }
        });
    };
    // 渲染checkbox列表
    main.prototype.vue_checkbox = function(){
        const _this = this;
        new Vue({
            el: '#vue-app-1',
            data: {
                checkdata: _this.data
            },
            methods: {
                checkCk: function(index, event){
                    let r = true;
                    $.each(_this._DATA, function(_index){
                        if(this.type === _this.data[index].type){
                            r = false;
                            return false;
                        }
                    });
                    if(r === true){
                        _this.data[index]._check = _this.data[index]._check ? null : true;
                    }else{
                        event.target.checked = false;
                        $.messager.alert("提示", "此项已存在于预算中，无法重复添加。");
                    }
                },
                queren: function(){
                    $.each(_this.data, function(index){
                        if(this._check && this._check === true){
                            _this._DATA.push(this);
                        }
                    });
                    _this.resetCheckbox();
                    $vueApp1.form("reset");
                }
            }
        });
    };
    // 初始化
    main.prototype.init = function(){
        this.vue_checkbox();

        $("#reset1").on("click", ()=>{
            this.resetCheckbox();
        });
    };

    module.exports = main;
});
