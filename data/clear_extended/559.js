function MM_swapImgRestore() { //v3.0
    var i, x, a = document.MM_sr;
    for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}

function MM_preloadImages() { //v3.0
    var d = document;
    if (d.images) {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length,
            a = MM_preloadImages.arguments;
        for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) {
                d.MM_p[j] = new Image;
                d.MM_p[j++].src = a[i];
            }
    }
}

function smartRollover() {
    if (document.getElementsByTagName) {
        var images = document.getElementsByTagName("img");

        for (var i = 0; i < images.length; i++) {
            if (images[i].getAttribute("src").match("_off.")) {
                images[i].onmouseover = function() {
                    this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
                }
                images[i].onmouseout = function() {
                    this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
                }
            }
        }
    }
}

if (window.addEventListener) {
    window.addEventListener("load", smartRollover, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", smartRollover);
}

new function() {

    function heightLine() {

        this.className = "heightLine";
        this.parentClassName = "heightLineParent"
        reg = new RegExp(this.className + "-([a-zA-Z0-9-_]+)", "i");
        objCN = new Array();
        var objAll = document.getElementsByTagName ? document.getElementsByTagName("*") : document.all;
        for (var i = 0; i < objAll.length; i++) {
            var eltClass = objAll[i].className.split(/\s+/);
            for (var j = 0; j < eltClass.length; j++) {
                if (eltClass[j] == this.className) {
                    if (!objCN["main CN"]) objCN["main CN"] = new Array();
                    objCN["main CN"].push(objAll[i]);
                    break;
                } else if (eltClass[j] == this.parentClassName) {
                    if (!objCN["parent CN"]) objCN["parent CN"] = new Array();
                    objCN["parent CN"].push(objAll[i]);
                    break;
                } else if (eltClass[j].match(reg)) {
                    var OCN = eltClass[j].match(reg)
                    if (!objCN[OCN]) objCN[OCN] = new Array();
                    objCN[OCN].push(objAll[i]);
                    break;
                }
            }
        }

        //check font size
        var e = document.createElement("div");
        var s = document.createTextNode("S");
        e.appendChild(s);
        e.style.visibility = "hidden"
        e.style.position = "absolute"
        e.style.top = "0"
        document.body.appendChild(e);
        var defHeight = e.offsetHeight;

        changeBoxSize = function() {
            for (var key in objCN) {
                if (objCN.hasOwnProperty(key)) {
                    //parent type
                    if (key == "parent CN") {
                        for (var i = 0; i < objCN[key].length; i++) {
                            var max_height = 0;
                            var CCN = objCN[key][i].childNodes;
                            for (var j = 0; j < CCN.length; j++) {
                                if (CCN[j] && CCN[j].nodeType == 1) {
                                    CCN[j].style.height = "auto";
                                    max_height = max_height > CCN[j].offsetHeight ? max_height : CCN[j].offsetHeight;
                                }
                            }
                            for (var j = 0; j < CCN.length; j++) {
                                if (CCN[j].style) {
                                    var stylea = CCN[j].currentStyle || document.defaultView.getComputedStyle(CCN[j], '');
                                    var newheight = max_height;
                                    if (stylea.paddingTop) newheight -= stylea.paddingTop.replace("px", "");
                                    if (stylea.paddingBottom) newheight -= stylea.paddingBottom.replace("px", "");
                                    if (stylea.borderTopWidth && stylea.borderTopWidth != "medium") newheight -= stylea.borderTopWidth.replace("px", "");
                                    if (stylea.borderBottomWidth && stylea.borderBottomWidth != "medium") newheight -= stylea.borderBottomWidth.replace("px", "");
                                    CCN[j].style.height = newheight + "px";
                                }
                            }
                        }
                    } else {
                        var max_height = 0;
                        for (var i = 0; i < objCN[key].length; i++) {
                            objCN[key][i].style.height = "auto";
                            max_height = max_height > objCN[key][i].offsetHeight ? max_height : objCN[key][i].offsetHeight;
                        }
                        for (var i = 0; i < objCN[key].length; i++) {
                            if (objCN[key][i].style) {
                                var stylea = objCN[key][i].currentStyle || document.defaultView.getComputedStyle(objCN[key][i], '');
                                var newheight = max_height;
                                if (stylea.paddingTop) newheight -= stylea.paddingTop.replace("px", "");
                                if (stylea.paddingBottom) newheight -= stylea.paddingBottom.replace("px", "");
                                if (stylea.borderTopWidth && stylea.borderTopWidth != "medium") newheight -= stylea.borderTopWidth.replace("px", "")
                                if (stylea.borderBottomWidth && stylea.borderBottomWidth != "medium") newheight -= stylea.borderBottomWidth.replace("px", "");
                                objCN[key][i].style.height = newheight + "px";
                            }
                        }
                    }
                }
            }
        }

        checkBoxSize = function() {
            if (defHeight != e.offsetHeight) {
                changeBoxSize();
                defHeight = e.offsetHeight;
            }
        }
        changeBoxSize();
        setInterval(checkBoxSize, 1000)
        window.onresize = changeBoxSize;
    }

    function addEvent(elm, listener, fn) {
        try {
            elm.addEventListener(listener, fn, false);
        } catch (e) {
            elm.attachEvent("on" + listener, fn);
        }
    }
    addEvent(window, "load", heightLine);
}

function backToTop() {
    var x1 = x2 = x3 = 0;
    var y1 = y2 = y3 = 0;
    if (document.documentElement) {
        x1 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }
    if (document.body) {
        x2 = document.body.scrollLeft || 0;
        y2 = document.body.scrollTop || 0;
    }
    x3 = window.scrollX || 0;
    y3 = window.scrollY || 0;
    var x = Math.max(x1, Math.max(x2, x3));
    var y = Math.max(y1, Math.max(y2, y3));
    window.scrollTo(Math.floor(x / 2), Math.floor(y / 2));
    if (x > 0 || y > 0) {
        window.setTimeout("backToTop()", 25);
    }
}