var pollClosed58250 = false;
var PDV_POLLRAND58250 = false;
var PDV_a58250 = '';
var PDV_o58250 = '';
var PDV_id58250 = 10293113;
var PDV_pt58250 = 0;
var PDV_po58250 = 0;
var PDV_b58250 = 1;
var PDV_pr58250 = 1;
var PDV_l58250 = 0;
var PDV_s58250 = 173306;
var PDV_h58250 = 'bbdcb9078ec7a43deb3a7ab519915d4f';
var PDV_w58250 = 58250;
var PDV_share58250 = 0;
var PDV_expire58250 = 604800;
var PDV_version58250 = 0;
var PDV_def58250 = '#PDI_container58250 .pds-box{background-color:#D0D8DE;border:0 none;width:100%;text-align:left;margin:9px 0 18px;padding:5px} #PDI_container58250 .pds-question-top{font:normal normal bold 14px/20px Arial;color:#333;text-align:left;border:0 none #eee;width:100%;margin:0 0 15px;padding:0} #PDI_container58250 .pds-answer-group{display:block;padding:5px 0} #PDI_container58250 .pds-feedback-group{padding:4px 0 8px} #PDI_container58250 .pds-answer-input{display:block;float:left;width:25px;padding:0} #PDI_container58250 .pds-input-label{font:normal normal bold 12px/18px Arial;color:#333;text-align:left;width:180px;cursor:pointer;display:block;float:left;padding:0} #PDI_container58250 .pds-feedback-label{font:normal normal bold 12px/18px Arial;color:#333;text-align:left;display:block;padding:0} #PDI_container58250 .pds-other-label{font:normal normal bold 12px/18px Arial;color:#333;text-align:left;width:180px;padding:0} #PDI_container58250 .pds-textfield{font:normal normal normal 12px/12px Arial;color:#B1BEC7;text-align:left;background-color:#fff;border:1px solid #d1d1d1;width:160px;margin:4px 0 0 25px;padding:2px} #PDI_container58250 .pds-vote-button{font:normal normal bold 14px/24px Arial;color:#333;text-align:left;background-color:#CFEFFC;border:1px solid #80D6F7;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;display:block;float:left;text-decoration:none;margin:0 0 0 6px;padding:0 24px} #PDI_container58250 .pds-vote-button-load{font:normal normal bold 14px/24px Arial;color:#333;text-align:left;background-color:#CFEFFC;border:1px solid #80D6F7;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;display:block;float:left;text-decoration:none;background:#eee url(\"https://polldaddy.com/polls/vote-loader-eeeeee.gif\") no-repeat scroll 50% 50%;margin:0 0 0 6px;padding:0 24px} #PDI_container58250 .pds-answer-feedback{background-color:#f1f1f1;border:1px solid #d1d1d1;width:200px;margin:5px 0 0;padding:0} #PDI_container58250 .pds-answer-feedback-bar{background-color:#0989BB;border:0 none #4D6382;height:18px;margin:0;padding:0} #PDI_container58250 .pds-total-votes{font:normal normal normal 12px/12px Arial;color:#333;text-align:left;border:0 solid #F0F0F0;margin:10px 0 0;padding:0} #PDI_container58250 .pds-clear{clear:both;display:block} #PDI_container58250 .pds-box A{outline:none;display:block;float:left} #PDI_container58250 .pds-answer-other{clear:left;display:block} #PDI_container58250 .pds-link{display:block;float:left} #PDI_container58250 .pds-vote{padding:10px 0} #PDI_container58250 .pds-vote-button-load SPAN{visibility:hidden} #PDI_container58250 .pds-links{display:block;float:left;padding:10px 0 0 15px} #PDI_container58250 .pds-view-results,.pds-comments,.pds-return-poll,.pds-pd-link,.pds-share{font:normal normal normal 11px/11px Arial;color:#006990;text-align:left;padding:8px 10px 0 0} #PDI_container58250 .pds-question A,.pds-answer A{float:none} #PDI_container58250 .pds-answer-group BR,.pds-answer-other BR,.pds-vote BR{display:none} #PDI_container58250 div {margin:0;padding:0;}';

var PDV_sl58250 = 0;
var PDV_lnk58250 = 0;
var PDV_va58250 = 16;
var PDV_POLL_q58250 = 'Should GPs be at the forefront of defining diseases to limit overdiagnosis?';


var PDV_POLL_medType58250 = '0';
var PDV_POLL_medID58250 = '';

var PDV_A58250 = new Array();

PDV_A58250[0] = new Array(4);
PDV_A58250[0][0] = '47357002';
PDV_A58250[0][1] = 'Yes';
PDV_A58250[0][2] = '0';
PDV_A58250[0][3] = '';


PDV_A58250[1] = new Array(4);
PDV_A58250[1][0] = '47357003';
PDV_A58250[1][1] = 'No';
PDV_A58250[1][2] = '0';
PDV_A58250[1][3] = '';


var PDV_l1_58250 = 'View Results';
var PDV_l2_58250 = 'Other:';
var PDV_l3_58250 = 'Vote';
var PDV_l4_58250 = 'Please choose an answer first!';

var PDV_l12_58250 = 'Share This';
var PDV_audio_58250 = 0;

//v3.35 2019-03-27
function Sanitize() {
    var B, C, A;
    A = arguments[0] || {};
    this.config = {};
    this.config.elements = A.elements ? A.elements : [];
    this.config.attributes = A.attributes ? A.attributes : {};
    this.config.attributes[Sanitize.ALL] = this.config.attributes[Sanitize.ALL] ? this.config.attributes[Sanitize.ALL] : [];
    this.config.allow_comments = A.allow_comments ? A.allow_comments : false;
    this.allowed_elements = {};
    this.config.protocols = A.protocols ? A.protocols : {};
    this.config.add_attributes = A.add_attributes ? A.add_attributes : {};
    this.dom = A.dom ? A.dom : document;
    for (B = 0; B < this.config.elements.length; B++) {
        this.allowed_elements[this.config.elements[B]] = true
    }
    this.config.remove_element_contents = {};
    this.config.remove_all_contents = false;
    if (A.remove_contents) {
        if (A.remove_contents instanceof Array) {
            for (B = 0; B < A.remove_contents.length; B++) {
                this.config.remove_element_contents[A.remove_contents[B]] = true
            }
        } else {
            this.config.remove_all_contents = true
        }
    }
    this.transformers = A.transformers ? A.transformers : []
}
Sanitize.REGEX_PROTOCOL = /^([A-Za-z0-9\+\-\.\&\;\*\s]*?)(?:\:|&*0*58|&*x0*3a)/i;
Sanitize.RELATIVE = "__RELATIVE__";
Sanitize.ALL = "__ALL__";
Sanitize.prototype.clean_node = function(C) {
    var D = this.dom.createDocumentFragment();
    this.current_element = D;
    this.whitelist_nodes = [];

    function G(J, I) {
        var H;
        for (H = 0; H < I.length; H++) {
            if (I[H] == J) {
                return H
            }
        }
        return -1
    }

    function B() {
        var H = [];
        var K = {};
        var J, I;
        for (J = 0; J < arguments.length; J++) {
            if (!arguments[J] || !arguments[J].length) {
                continue
            }
            for (I = 0; I < arguments[J].length; I++) {
                if (K[arguments[J][I]]) {
                    continue
                }
                K[arguments[J][I]] = true;
                H.push(arguments[J][I])
            }
        }
        return H
    }

    function F(H) {
        var I;
        switch (H.nodeType) {
            case 1:
                E.call(this, H);
                break;
            case 3:
                I = H.cloneNode(false);
                this.current_element.appendChild(I);
                break;
            case 5:
                I = H.cloneNode(false);
                this.current_element.appendChild(I);
                break;
            case 8:
                if (this.config.allow_comments) {
                    I = H.cloneNode(false);
                    this.current_element.appendChild(I)
                }
                break;
            default:
                if (console && console.log) {
                    console.log("unknown node type", H.nodeType)
                }
                break
        }
    }

    function E(L) {
        var N, M, P, U, H, K, O, V, I, R, T, Q;
        var J = A.call(this, L);
        L = J.node;
        H = L.nodeName.toLowerCase();
        U = this.current_element;
        if (this.allowed_elements[H] || J.whitelist) {
            this.current_element = this.dom.createElement(L.nodeName);
            U.appendChild(this.current_element);
            var S = this.config.attributes;
            K = B(S[H], S[Sanitize.ALL], J.attr_whitelist);
            for (N = 0; N < K.length; N++) {
                V = K[N];
                O = L.attributes[V];
                if (O) {
                    Q = true;
                    if (this.config.protocols[H] && this.config.protocols[H][V]) {
                        R = this.config.protocols[H][V];
                        T = O.value.toLowerCase().match(Sanitize.REGEX_PROTOCOL);
                        if (T) {
                            Q = (G(T[1], R) != -1)
                        } else {
                            Q = (G(Sanitize.RELATIVE, R) != -1)
                        }
                    }
                    if (Q) {
                        I = document.createAttribute(V);
                        I.value = O.value;
                        this.current_element.setAttributeNode(I)
                    }
                }
            }
            if (this.config.add_attributes[H]) {
                for (V in this.config.add_attributes[H]) {
                    I = document.createAttribute(V);
                    I.value = this.config.add_attributes[H][V];
                    this.current_element.setAttributeNode(I)
                }
            }
        } else {
            if (G(L, this.whitelist_nodes) != -1) {
                this.current_element = L.cloneNode(true);
                while (this.current_element.childNodes.length > 0) {
                    this.current_element.removeChild(this.current_element.firstChild)
                }
                U.appendChild(this.current_element)
            }
        }
        if (!this.config.remove_all_contents && !this.config.remove_element_contents[H]) {
            for (N = 0; N < L.childNodes.length; N++) {
                F.call(this, L.childNodes[N])
            }
        }
        if (this.current_element.normalize) {
            this.current_element.normalize()
        }
        this.current_element = U
    }

    function A(L) {
        var H = {
            attr_whitelist: [],
            node: L,
            whitelist: false
        };
        var K, J, I;
        for (K = 0; K < this.transformers.length; K++) {
            I = this.transformers[K]({
                allowed_elements: this.allowed_elements,
                config: this.config,
                node: L,
                node_name: L.nodeName.toLowerCase(),
                whitelist_nodes: this.whitelist_nodes,
                dom: this.dom
            });
            if (I == null) {
                continue
            } else {
                if (typeof I == "object") {
                    if (I.whitelist_nodes && I.whitelist_nodes instanceof Array) {
                        for (J = 0; J < I.whitelist_nodes.length; J++) {
                            if (G(I.whitelist_nodes[J], this.whitelist_nodes) == -1) {
                                this.whitelist_nodes.push(I.whitelist_nodes[J])
                            }
                        }
                    }
                    H.whitelist = I.whitelist ? true : false;
                    if (I.attr_whitelist) {
                        H.attr_whitelist = B(H.attr_whitelist, I.attr_whitelist)
                    }
                    H.node = I.node ? I.node : H.node
                } else {
                    throw new Error("transformer output must be an object or null")
                }
            }
        }
        return H
    }
    for (i = 0; i < C.childNodes.length; i++) {
        F.call(this, C.childNodes[i])
    }
    if (D.normalize) {
        D.normalize()
    }
    return D
};
if (typeof define === "function") {
    define("sanitize", [], function() {
        return Sanitize
    })
}
var a2a_track_pub = "polldaddy";
var a2a_no_3p = 1;
var PD_ck58250 = 0;
var PD_ck_name58250 = "PD_poll_" + PDV_id58250;
var PDV_n58250 = "";
var PD_button58250;
var PDV_nurl58250 = "https://polldaddy.com/n/" + (typeof PDV_h58250 !== "undefined" ? PDV_h58250 : PDV_id58250) + "/" + PDV_id58250 + (PDV_w58250 != PDV_id58250 ? "/" + PDV_w58250 : "");

function _$(A) {
    return document.getElementById(A)
}

function is_secure() {
    return "https:" === document.location.protocol
}

function getHead() {
    return document.getElementsByTagName("head").item(0)
}
if (pollClosed58250 == false) {
    var PDV_server58250 = "https://polls.polldaddy.com";
    var AA58250 = new Array();
    var PDV_html58250 = '<div style="margin-bottom: 0px; margin-top: 0px;" name="PDI_form58250" id="PDI_form58250"><div class="css-box pds-box"><div class="css-box-outer pds-box-outer"><div class="css-box-inner pds-box-inner"><div class="css-box-top pds-box-top"><div class="css-question pds-question"><div class="css-question-outer pds-question-outer"><div class="css-question-inner pds-question-inner"><div class="css-question-top pds-question-top">' + PDV_POLL_medID58250 + " " + prepare_HTML_58250(PDV_POLL_q58250) + '</div></div></div></div><div class="css-answer pds-answer"><span id="pds-answer58250"></span>';
    if (PDV_po58250 == 1) {
        PDV_html58250 += '<span class="css-answer-group pds-answer-group">';
        if (PDV_pt58250 == 0) {
            PDV_html58250 += '<span class="css-answer-input pds-answer-input"><input type="radio" name="PDI_answer58250" id="PDI_answerOther58250" value="other" class="css-radiobutton pds-radiobutton"/></span>'
        }
        PDV_html58250 += '<label for="PDI_answerOther58250" class="css-other-label pds-other-label"><span class="css-answer-span pds-answer-span">' + PDV_l2_58250 + '</span></label><span class="css-answer-other pds-answer-other"><br/><input class="css-textfield pds-textfield" type="text" maxlength="80" id="PDI_OtherText58250" name="PDI_OtherText58250" onclick="PDF_checkOther58250();" onchange="PDF_checkOther58250(true);" /></span>';
        PDV_html58250 += '<span class="css-clear pds-clear"></span>';
        PDV_html58250 += "</span>"
    }
    PDV_html58250 += '</div><div class="css-vote pds-vote"><div class="css-votebutton-outer pds-votebutton-outer">';
    if (PDV_l3_58250 == "") {
        PDV_l3_58250 = "Vote"
    }
    if (PDV_s58250 < 99 || PDV_def58250.indexOf("input.pds-votebutton") != -1) {
        if (PDV_l3_58250 == "Vote" || PDV_l3_58250 == "") {
            PDV_html58250 += '<input id="pd-vote-button58250" type="button" class="css-votebutton pds-votebutton" style="border:none;cursor: pointer;" src="https://polldaddy.com/polls/spacer.gif">'
        } else {
            PDV_html58250 += '<input id="pd-vote-button58250" type="button" class="css-votebutton-pack pds-votebutton-pack" value="' + PDV_l3_58250 + '" />'
        }
    } else {
        PDV_html58250 += '<a id="pd-vote-button58250" class="css-vote-button pds-vote-button"><span>' + PDV_l3_58250 + "</span></a>"
    }
    PDV_html58250 += '<span class="css-links pds-links">';
    if (PDV_pr58250 == 2) {
        PDV_html58250 += "<br/>"
    } else {
        PDV_html58250 += '<a href="javascript:PD_vote58250(1);" class="css-view-results pds-view-results">' + PDV_l1_58250 + "</a><br/>"
    }
    if (PDV_lnk58250 == 1) {
        PDV_html58250 += '<a href="https://crowdsignal.com/pricing/?ad=poll-front" target="_blank" class="css-pd-link pds-pd-link">Crowdsignal.com</a>'
    }
    PDV_html58250 += '<span class="css-clear pds-clear"></span>';
    PDV_html58250 += '</span><span class="css-clear pds-clear"></span>';
    PDV_html58250 += "</div></div></div></div></div></div></div>";
    for (PDV_x = 0; PDV_x < PDV_A58250.length; PDV_x++) {
        if (PDV_pt58250 == 0) {
            AA58250[PDV_x] = '<span class="css-answer-group pds-answer-group"><span class="css-answer-input pds-answer-input"><input class="css-radiobutton pds-radiobutton" type="radio" id="PDI_answer' + PDV_A58250[PDV_x][0] + '" value="' + PDV_A58250[PDV_x][0] + '" name="PDI_answer58250" /></span><label for="PDI_answer' + PDV_A58250[PDV_x][0] + '" class="css-input-label pds-input-label"><span class="css-answer-span pds-answer-span">' + prepare_HTML_58250(PDV_A58250[PDV_x][1]) + "</span></label>" + PDV_A58250[PDV_x][3] + '<span class="css-clear pds-clear"></span><br/></span>'
        } else {
            AA58250[PDV_x] = '<span class="css-answer-group pds-answer-group"><span class="css-answer-input pds-answer-input"><input class="css-checkbox pds-checkbox" type="checkbox" id="PDI_answer' + PDV_A58250[PDV_x][0] + '" value="' + PDV_A58250[PDV_x][0] + '" name="PDI_answer' + PDV_A58250[PDV_x][0] + '" onclick="javascript:PDF_mc58250(this);" /></span><label for="PDI_answer' + PDV_A58250[PDV_x][0] + '" class="css-input-label pds-input-label"><span class="css-answer-span pds-answer-span">' + prepare_HTML_58250(PDV_A58250[PDV_x][1]) + "</span></label>" + PDV_A58250[PDV_x][3] + '<span class="css-clear pds-clear"></span><br/></span>'
        }
    }
}

function PDF_mc58250(C) {
    if (PDV_pt58250 > 1) {
        var B = 0;
        for (i = 0; i < AA58250.length; i++) {
            r = _$(AA58250[i].substring(AA58250[i].indexOf("id=") + 4, AA58250[i].indexOf('"', AA58250[i].indexOf("id=") + 4)));
            if (r.type == "checkbox" && r.checked) {
                B += 1
            }
        }
        if (PDV_po58250 == 1) {
            var A = _$("PDI_OtherText58250").value;
            if (A.length > 0) {
                B += 1
            }
        }
        if (B > PDV_pt58250) {
            C.checked = false;
            C.disabled = true
        }
        if (B >= PDV_pt58250) {
            for (i = 0; i < AA58250.length; i++) {
                r = _$(AA58250[i].substring(AA58250[i].indexOf("id=") + 4, AA58250[i].indexOf('"', AA58250[i].indexOf("id=") + 4)));
                if (r.type == "checkbox" && !r.checked) {
                    r.disabled = true
                }
            }
        } else {
            if (PDV_po58250 == 1) {
                _$("PDI_OtherText58250").disabled = false
            }
            for (i = 0; i < AA58250.length; i++) {
                r = _$(AA58250[i].substring(AA58250[i].indexOf("id=") + 4, AA58250[i].indexOf('"', AA58250[i].indexOf("id=") + 4)));
                if (r.type == "checkbox" && !r.checked) {
                    r.disabled = false
                }
            }
        }
    }
}

function PDF_a58250() {
    PDF_o58250();
    var A;
    if (PDV_pt58250 == 0) {
        for (var B = 0; B < AA58250.length; B++) {
            A = _$(AA58250[B].substring(AA58250[B].indexOf("id=") + 4, AA58250[B].indexOf('"', AA58250[B].indexOf("id=") + 4)));
            if (A.checked) {
                return A.value + ","
            }
        }
        A = _$("PDI_answerOther58250");
        if (A) {
            if (A.checked) {
                return A.value + ","
            } else {
                return ""
            }
        } else {
            return ""
        }
    } else {
        for (B = 0; B < AA58250.length; B++) {
            A = _$(AA58250[B].substring(AA58250[B].indexOf("id=") + 4, AA58250[B].indexOf('"', AA58250[B].indexOf("id=") + 4)));
            if (A.type == "checkbox" && A.checked) {
                PDV_a58250 = PDV_a58250 + A.value + ","
            }
        }
        return PDV_a58250
    }
}

function PDF_o58250(A) {
    if (PDV_po58250 == 1) {
        PDV_o58250 = _$("PDI_OtherText58250").value
    }
}

function PDF_checkOther58250(B) {
    var C = false;
    if (B) {
        var D = _$("PDI_OtherText58250").value;
        if (D.length == 0) {
            C = true
        }
    }
    if (PDV_pt58250 == 0) {
        if (B && C) {
            _$("PDI_answerOther58250").checked = false
        } else {
            _$("PDI_answerOther58250").checked = true
        }
    } else {
        if (PDV_pt58250 > 1) {
            var A = 1;
            obj = _$("PDI_OtherText58250");
            if (B && C) {
                A = 0
            }
            for (i = 0; i < AA58250.length; i++) {
                r = _$(AA58250[i].substring(AA58250[i].indexOf("id=") + 4, AA58250[i].indexOf('"', AA58250[i].indexOf("id=") + 4)));
                if (r.type == "checkbox" && r.checked) {
                    A += 1
                }
            }
            if (A > PDV_pt58250) {
                obj.disabled = true;
                obj.value = "";
                for (i = 0; i < AA58250.length; i++) {
                    r = _$(AA58250[i].substring(AA58250[i].indexOf("id=") + 4, AA58250[i].indexOf('"', AA58250[i].indexOf("id=") + 4)));
                    if (r.type == "checkbox" && !r.checked) {
                        r.disabled = true
                    }
                }
            } else {
                if (A < PDV_pt58250) {
                    obj.disabled = false;
                    for (i = 0; i < AA58250.length; i++) {
                        r = _$(AA58250[i].substring(AA58250[i].indexOf("id=") + 4, AA58250[i].indexOf('"', AA58250[i].indexOf("id=") + 4)));
                        if (r.type == "checkbox" && !r.checked) {
                            r.disabled = false
                        }
                    }
                }
            }
        }
    }
}

function PD_prevote58250(C) {
    var A;
    var D;
    if (C.pageX) {
        A = C.pageX;
        D = C.pageY
    } else {
        A = C.clientX;
        D = C.clientY
    }
    if (A == 0 && D == 0) {
        return false
    }
    if (PDV_def58250.indexOf("input.pds-votebutton") == -1) {
        PD_button58250.className = "css-vote-button-lead pds-vote-button-load"
    }
    var B = document.createElement("SCRIPT");
    B.charset = "utf-8";
    B.src = PDV_nurl58250 + "?" + (new Date).getTime();
    getHead().appendChild(B)
}

function PD_vote58250(A) {
    var D = PDF_getTags58250();
    var E = PDV_server58250 + "/vote-js.php?p=" + PDV_id58250 + (PDV_w58250 != PDV_id58250 ? "&w=" + PDV_w58250 : "");
    var C = false;
    if (A != 1) {
        PDV_a58250 = "";
        PDV_a58250 = PDF_a58250(_$("PDI_form58250"));
        if (PDV_a58250.length == 0 && PDV_o58250.length == 0) {
            C = true;
            alert(PDV_l4_58250);
            if (PDV_def58250.indexOf("input.pds-votebutton") == -1) {
                PD_button58250.className = "css-vote-button pds-vote-button"
            }
        } else {
            if (PDV_b58250 > 0) {
                if (PDF_getCookie58250(PD_ck_name58250)) {
                    PD_ck58250 = 1
                } else {
                    PDF_setCookie58250(PD_ck_name58250)
                }
            }
            E += "&b=" + PDV_b58250 + "&a=" + PDV_a58250 + "&o=" + PDF_urlEncode58250(PDV_o58250) + "&va=" + PDV_va58250 + "&cookie=" + PD_ck58250 + (D.length > 0 ? "&tags=" + D : "") + (PDV_n58250.length > 0 ? "&n=" + PDV_n58250 : "") + "&url=" + escape(location.href)
        }
    }
    if (!C) {
        var B = document.createElement("SCRIPT");
        B.charset = "utf-8";
        B.src = E;
        getHead().appendChild(B)
    }
}

function PDF_getTags58250() {
    if (typeof pd_tags == "undefined") {
        return ""
    }
    var B = "";
    for (var A in pd_tags) {
        B += PDF_urlEncode58250(A) + ":" + PDF_urlEncode58250(pd_tags[A]) + ";"
    }
    return B.slice(0, -1)
}

function PDF_urlEncode58250(A) {
    return encodeURIComponent(A).replace(/\%20/g, "+").replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/\~/g, "%7E")
}

function PDF_rand58250(B) {
    var C = B.length;
    if (C == 0) {
        return false
    }
    while (--C) {
        var D = Math.floor(Math.random() * (C + 1));
        var E = B[C];
        var A = B[D];
        B[C] = A;
        B[D] = E
    }
    return B
}

function PDF_loadStyleSheet58250() {
    var A = document.createElement("style");
    A.setAttribute("type", "text/css");
    A.setAttribute("id", "poll_style58250");
    if (A.styleSheet) {
        A.styleSheet.cssText = PDV_def58250
    } else {
        A.appendChild(document.createTextNode(PDV_def58250))
    }
    getHead().appendChild(A)
}

function PDV_go58250() {
    if (!_$("poll_style58250")) {
        PDF_loadStyleSheet58250()
    }
    if (typeof load_audioLibrary_58250 == "function" && typeof PDV_audio_58250 !== "undefined" && PDV_audio_58250 > 0) {
        load_audioLibrary_58250()
    }
    if (!_$("PDI_container58250")) {
        document.write('<a name="pd_a_58250" style="display: inline; padding: 0px; margin: 0px;"></a><div class="CSS_Poll PDS_Poll" id="PDI_container58250"></div>')
    }
    if (typeof supercookie !== "undefined" && typeof sc !== "object") {
        sc = new supercookie()
    }
    _$("PDI_container58250").innerHTML = PDV_html58250;
    if (PDV_POLLRAND58250) {
        AA58250 = PDF_rand58250(AA58250)
    }
    y58250 = "";
    for (x58250 = 0; x58250 < AA58250.length; x58250++) {
        y58250 = y58250 + AA58250[x58250]
    }
    _$("pds-answer58250").innerHTML = y58250;
    PD_button58250 = _$("pd-vote-button58250");
    PD_addEventListener58250();
    if (typeof PDF_callback58250 == "function") {
        PDF_callback58250('{"id":' + PDV_id58250 + ',"result":"load"}')
    }
}

function PDF_setCookie58250(C) {
    var E = new Date();
    var D = E.getTime();
    var B = 60 * 60 * 24 * 30 * 1000;
    if (typeof(PDV_expire58250) !== "undefined") {
        B = 1000 * parseInt(PDV_expire58250)
    }
    var A = new Date(D + B);
    if (typeof PDV_version58250 !== "undefined") {
        C += (PDV_version58250 > 0 ? "_" + PDV_version58250 : "")
    }
    PDF_log58250("Cookie Name: " + C);
    if (typeof sc == "object" && typeof sc.set == "function") {
        PDF_log58250("SET supercookie");
        sc.set(C, escape(D))
    } else {
        PDF_log58250("SET standard cookie");
        document.cookie = C + "=" + escape(D) + ";expires=" + A.toGMTString() + ";path=/;domain="
    }
}

function PDF_getCookie58250(D) {
    var C = "",
        A = "",
        H = "";
    var B = 0;
    if (typeof PDV_version58250 !== "undefined") {
        D += (PDV_version58250 > 0 ? "_" + PDV_version58250 : "")
    }
    if (typeof(PDV_expire58250) !== "undefined") {
        B = 1000 * parseInt(PDV_expire58250)
    }
    PDF_log58250("Cookie Name: " + D);
    if (typeof sc == "object" && typeof sc.get == "function") {
        PDF_log58250("GET supercookie");
        H = sc.get(D)
    } else {
        PDF_log58250("GET standard cookie");
        var G = document.cookie.split(";");
        for (i = 0; i < G.length; i++) {
            C = G[i].split("=");
            A = C[0].replace(/^\s+|\s+$/g, "");
            if (A == D) {
                if (C.length > 1) {
                    H = unescape(C[1].replace(/^\s+|\s+$/g, ""))
                }
                break
            }
            C = null;
            A = ""
        }
    }
    PDF_log58250("Cookie Value: " + H);
    if (H == "true") {
        return true
    }
    var E = new Date();
    var F = E.getTime();
    cookie_time = parseInt(H);
    expire_time = cookie_time + B;
    if (B > 0 && cookie_time > 0) {
        if (F < expire_time) {
            return true
        }
    }
    return false
}

function PDF_callback58250(A) {
    if (typeof pd_callback == "function") {
        pd_callback(A)
    } else {
        if (typeof pd_callback_58250 == "function") {
            pd_callback_58250(A)
        }
    }
}

function get_sanitizer_58250() {
    return new Sanitize({
        elements: ["a", "b", "blockquote", "br", "cite", "code", "dd", "dl", "dt", "em", "i", "li", "ol", "p", "pre", "q", "small", "strike", "strong", "sub", "sup", "u", "ul", "img", ],
        attributes: {
            a: ["href"],
            blockquote: ["cite"],
            q: ["cite"],
            img: ["align", "alt", "height", "src", "title", "width"],
        },
        add_attributes: {
            a: {
                rel: "nofollow"
            }
        },
        protocols: {
            a: {
                href: ["ftp", "http", "https", "mailto", Sanitize.RELATIVE]
            },
            blockquote: {
                cite: ["http", "https", Sanitize.RELATIVE]
            },
            q: {
                cite: ["http", "https", Sanitize.RELATIVE]
            },
            img: {
                src: ["http", "https", Sanitize.RELATIVE]
            },
        }
    })
}

function sanitize_HTML_58250(C) {
    var E = document.createElement("div");
    E.innerHTML = C;
    var D = get_sanitizer_58250();
    var B = D.clean_node(E);
    var A = document.createElement("div");
    A.appendChild(B);
    return A.innerHTML
}

function unescape_HTML_58250(B) {
    var A = document.createElement("DIV");
    A.innerHTML = B;
    if (A.innerText !== undefined) {
        return A.innerText
    }
    return A.textContent
}

function prepare_HTML_58250(A) {
    return sanitize_HTML_58250(unescape_HTML_58250(A))
}

function PD_addEventListener58250() {
    if (typeof PD_button58250 != "undefined") {
        if (PD_button58250.addEventListener) {
            PD_button58250.addEventListener("click", PD_prevote58250, false)
        } else {
            if (PD_button58250.attachEvent) {
                PD_button58250.attachEvent("onclick", PD_prevote58250)
            }
        }
    }
}

function PDF_log58250(A) {
    if (typeof(_debug) !== "undefined" && _debug) {
        if (typeof(console) !== "undefined" && console != null) {
            console.log(A)
        }
    }
}
if (pollClosed58250 == false) {
    PDV_go58250()
};