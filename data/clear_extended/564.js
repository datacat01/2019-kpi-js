<!-- service=7 -->
var p_top = 0;
var p_left = 0;

var ad_id = "287514";
var ad_id = (ad_id == "\$\{adid\}") ? "" : ad_id;
var ad_pop = ""

ad_pop = window.open('', 'ad_pop' + ad_id, 'top=' + p_top + ',left=' + p_left + ',location=no,toolbar=no,directories=no,menubar=no,resizable=no,scrollbars=no,status=no,width=740,height=520');
if (ad_pop != "" && ad_pop != null) {
    document.onload = ad_pop;
    ad_pop.blur();
    ad_pop.document.open();
    ad_pop.document.write('<html><head><title>�����-���</title></head>\n');
    ad_pop.document.write('<body marginwidth="0" marginheight="0" leftmargin="0" topmargin="0">\n');
    ad_pop.document.write('<SCRIPT LANGUAGE=JavaScript><!--\n self.moveTo(0,0);\n self.resizeTo(screen.availWidth,screen.availHeight);\n document.write(\'<center><div><a href="https://g.163.com/c?AID=287514&FlightID=686&Values=2264235804&Redirect=http://ecare.unicef.cn/campaign/201904cws/index.php?utm_source=Netease_DG191&utm_campaign=hp-JQBA_kanhou_740*520&utm_medium=DSPC-JQBA-S" target="_blank"><img src="http://img1.126.net/channel7/cover.gif" style="position:absolute; width:740px; height:520px; margin:0px; padding:0px; border:0px;" /><OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0" ID=flashad WIDTH="740" HEIGHT="520" ><param name="wmode" value="opaque"><PARAM NAME=movie VALUE="https://yt-adp.ws.126.net/myzhang/amtd_20190403.SWF"><PARAM NAME=quality VALUE=autohigh><EMBED SRC="https://yt-adp.ws.126.net/myzhang/amtd_20190403.SWF" wmode="Opaque" WIDTH="740" HEIGHT="520" TYPE="application/x-shockwave-flash"   PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></EMBED></OBJECT></div>\');\n--></\SCRIPT>\n');
    ad_pop.document.write('</body></html>');
    ad_pop.document.close();
}