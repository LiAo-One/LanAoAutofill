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
            var val= window.frames["r_3_3"].document.getElementById(idList[i]);
            console.log(val.value);
        }

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
