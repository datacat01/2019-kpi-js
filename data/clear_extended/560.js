//--- 画像切り替えを判定
function isEventDay() {
    if (isWcup()) {
        //Wcup
        return "wcup";
    }
    if (isMarineDay()) {
        //海の日
        return "marineDay";
    }
    if (isHalloween()) {
        //ハロウィン
        return "halloween";
    }
    if (isXmas()) {
        //クリスマス
        return "xmas";
    }
    return "";
}

//--- Wcup画像対応用
function isWcup() {
    // システム日付取得
    var todayDate = new Date();
    todayDate.setMilliseconds(0);
    var todayTime = (new Date(todayDate)).getTime();

    var startDatetime = new Array();
    startDatetime[0] = "2014/06/15 00:00:00";
    startDatetime[1] = "2014/06/20 00:00:00";
    startDatetime[2] = "2014/06/25 00:00:00";

    var endDatetime = new Array();
    endDatetime[0] = "2014/06/15 23:59:59";
    endDatetime[1] = "2014/06/20 23:59:59";
    endDatetime[2] = "2014/06/25 23:59:59";

    return isJudgDay(todayTime, startDatetime, endDatetime);
}

//--- 海の日画像対応用
function isMarineDay() {
    // システム日付取得
    var todayDate = new Date();
    todayDate.setMilliseconds(0);
    var todayTime = (new Date(todayDate)).getTime();

    var startDatetime = new Array();
    startDatetime[0] = "2014/07/21 00:00:00";

    var endDatetime = new Array();
    endDatetime[0] = "2014/07/21 23:59:59";

    return isJudgDay(todayTime, startDatetime, endDatetime);
}
//--- ハロウィン画像対応用
function isHalloween() {
    // システム日付取得
    var todayDate = new Date();
    todayDate.setMilliseconds(0);
    var todayTime = (new Date(todayDate)).getTime();

    var startDatetime = new Array();
    startDatetime[0] = "2014/10/08 00:00:00";

    var endDatetime = new Array();
    endDatetime[0] = "2014/10/31 23:59:59";

    return isJudgDay(todayTime, startDatetime, endDatetime);
}
//--- クリスマス画像対応用
function isXmas() {
    // システム日付取得
    var todayDate = new Date();
    todayDate.setMilliseconds(0);
    var todayTime = (new Date(todayDate)).getTime();

    var startDatetime = new Array();
    startDatetime[0] = "2014/12/01 00:00:00";

    var endDatetime = new Array();
    endDatetime[0] = "2014/12/25 23:59:59";

    return isJudgDay(todayTime, startDatetime, endDatetime);
}
//-- 日付判定結果を返す
function isJudgDay(todayTime, startDatetime, endDatetime) {
    var ret = false;
    for (var i = 0; i < startDatetime.length; i++) {
        var start = (new Date(startDatetime[i])).getTime();
        var end = (new Date(endDatetime[i])).getTime();
        if (start <= todayTime && todayTime <= end) {
            return true;
        }
    }
    return ret;
}