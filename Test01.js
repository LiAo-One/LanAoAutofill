// @name            奥蓝防疫动态调查自动填充
// @description     自动填充防疫动态问卷
// @require         www.jq22.com/jquery/jquery-1.7.1.js
// @match           http://121.248.70.227:866/txxm/default.aspx?dfldm=02
(function () {
    setTimeout(function () {
        /**
         * value 值为2 == 否
         * value 值为1 == 是
         * 开头那个   知道开学时间要等候学校通知   要手动勾选
         * @type {string}
         */
        // 是否在校
        // window.frames["r_3_3"].document.getElementById("sfzxdm").value="2";

        // 健康状况
        window.frames["r_3_3"].document.getElementById("jkqkdm").value="1";
        // 是否发热呼吸困难
        var idList = ['sfzxdm','sffkfdm','sfysdm','brsfqzdm','brsfgldm','sfdhbdm','sfbljcdm',
            'sfjchbdm','sfjtqzdm','sfjtbldm','sfczmbjtdm','sfjtgldm'];
        for (let i = 0; i <idList.length ; i++) {
            window.frames["r_3_3"].document.getElementById(idList[i]).value="2";
        }
        /*// window.frames["r_3_3"].document.getElementById("sffkfdm").value="2";
        // 是否疑似病例
        // window.frames["r_3_3"].document.getElementById("sfysdm").value="2";
        // 是否疑确诊
        // window.frames["r_3_3"].document.getElementById("brsfqzdm").value="2";
        // 是否疑隔离
        // window.frames["r_3_3"].document.getElementById("brsfgldm").value="2";
        // 1月24日后是否到访过或途经湖北
        // window.frames["r_3_3"].document.getElementById("sfdhbdm").value="2";
        // 是否与疑似病例接触
        // window.frames["r_3_3"].document.getElementById("sfbljcdm").value="2";
        // 是否接触湖北来访人员
        // window.frames["r_3_3"].document.getElementById("sfjchbdm").value="2";
        // 家庭主要成员是否确诊
        // window.frames["r_3_3"].document.getElementById("sfjtqzdm").value="2";
        // 家庭主要成员是否疑似
        // window.frames["r_3_3"].document.getElementById("sfjtbldm").value="2";
        // 是否乘坐密闭交通
        // window.frames["r_3_3"].document.getElementById("sfczmbjtdm").value="2";
        // 主要成员是否隔离
        // window.frames["r_3_3"].document.getElementById("sfjtgldm").value="2";*/

        // 是否实习
        window.frames["r_3_3"].document.getElementById("sfsxdm").value="1";

        // 获取是否实习
        var practice = window.frames["r_3_3"].document.getElementById("sfsxdm");
        if (practice == 1){
            // 实习开始日期
            window.frames["r_3_3"].document.getElementById("sxksrq").value="2019-12-19";
            // 实习单位名称
            window.frames["r_3_3"].document.getElementById("sxdwmc").value="南京龙渊微电子科技有限公司";
            // 实习单位地址
            window.frames["r_3_3"].document.getElementById("sxdwdz").value="江苏省 南京市 江宁区 秣陵街道 南佑路7号千人创业大厦4009";
            // 实习单位联络人
            window.frames["r_3_3"].document.getElementById("dwllr").value="陈勇";
            // 实习单位联系电话
            window.frames["r_3_3"].document.getElementById("dwlxdh").value="18115193106";
            // 实习单位环境是否良好
            window.frames["r_3_3"].document.getElementById("sfhjlhdm").value="1";
        }
        alert('执行完毕');

    },5000)

})