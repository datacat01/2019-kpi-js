"use strict";
var zd = zd || {};
zd.core = zd.core || {}, zd.core.pageData = zd.core.pageData || {}, zd.core.userData = zd.core.userData || {}, zd.core.run = zd.core.run || {
    count: 0,
    loaded: !1
}, zd.core.config = zd.core.config || {}, zd.core.config.List = function() {
    function e() {
        var r = Object.create(Array.prototype);
        return r = Array.apply(r, arguments) || r, e.injectClassMethods(r), r
    }
    return e.injectClassMethods = function(r) {
        for (var t in e.prototype) e.prototype.hasOwnProperty(t) && (r[t] = e.prototype[t]);
        return r
    }, e.fromArray = function(r) {
        var t = e.apply(null, r);
        return t
    }, e.isArray = function(e) {
        var r = Object.prototype.toString.call(e);
        return "[object array]" === r.toLowerCase()
    }, e.prototype = {
        belongs: function(e) {
            return zd.core.utilities.itemInArray(e, this)
        },
        on: function() {
            return this.belongs(zd.core.pageData.rootDomain)
        },
        onExecute: function(e, r) {
            r = r || [], this.on() && e.apply(null, r)
        }
    }, e
}.call({}), zd.core.config.eu = !1, zd.core.config.waitAdditionalTags = new zd.core.config.List("ign.com"), zd.core.config.defaultDomains = {
    logger: "https://zdbb.net",
    gurgle: "https://gurgle.zdbb.net",
    static: "https://cdn.static.zdbb.net"
}, zd.core.config.gurleDomains = new zd.core.config.List("offers.com", "ign.com"), zd.core.config.loggerDomains = new zd.core.config.List, zd.core.config.bbstaticDomains = new zd.core.config.List("pcmag.com", "geek.com", "extremetech.com", "computershopper.com", "ign.com"), zd.core.config.ignMetaDomains = new zd.core.config.List("ign.com"), zd.core.config.blackFridayDomains = new zd.core.config.List("blackfriday.com"), zd.core.config.bestBlackFridayDomains = new zd.core.config.List("bestblackfriday.com"), zd.core.config.toolboxDomains = new zd.core.config.List("it.toolbox.com", "assets.toolbox.com", "toolbox.com", "hr.toolbox.com", "finance.toolbox.com", "marketing.toolbox.com", "config.toolbox.com"), zd.core.config.evdyAdzoneDomains = new zd.core.config.List("everydayhealth.com", "whattoexpect.com", "medpagetoday.com"), zd.core.config.kilogramDomains = new zd.core.config.List("mashable.com"), zd.core.config.evdyProDomains = new zd.core.config.List("medpagetoday.com", "kevinmd.com", "doctordirectory.com"), zd.core.config.evdyConsumerDomains = new zd.core.config.List("everydayhealth.com", "whattoexpect.com"), zd.core.config.ignMetaInteresting = new zd.core.config.List("categories", "genres", "platforms", "pagetype", "resource", "object_ids", "tags", "zdid"), zd.core.config.cookieSwapCodes = {
    evdyProDomains: {
        swappedCookie: "zdbb_swap_mu_id",
        signalCode: "esvcdsybftoapjxorcmuid",
        parser: function() {
            return zd.core.utilities.getCookie("MU_ID") || zd.core.utilities.getCookie("MP_U")
        }
    },
    evdyConsumerDomains: {
        swappedCookie: "zdbb_swap_ew_id",
        parser: function() {
            var e = window.utp || "";
            return (";" + e).split(";u=").pop().split(";").shift()
        },
        signalCodeRegex: [{
            regex: /^[0-9]{1,12}$/,
            signalCode: "esvcdsybftolginxorcmuid"
        }, {
            regex: /^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/,
            signalCode: "esvcdsybftonolnorcmuid"
        }]
    },
    kilogramDomains: {
        swappedCookie: "zdbb_swap_mash_id",
        signalCode: "msadjflkjopepytriuwowis",
        parser: function() {
            return mashKit.analytics.kilogram.viewerID()
        }
    }
}, zd.core.config.signalLib = JSON.parse("{\"Widget Tracking\": \"ij9Pksj_EeSUDxIxPSpF6g\", \"Email Unsubscribe New\": \"Zlx5JiflEeS0LCIACh-JyA\", \"Conversion\": \"MzE2NjYzNjQtMzEzMS02NQ\", \"Third Party Cookie Sync\": \"qI109lRAEeGCiBIxORcFRw\", \"Taboola Tracking\": \"gC3ekw7UEeWRqiIAC39GJQ\", \"Demand Base\": \"aolwBudQEeO0LCIACh-JyA\", \"Email Subscription\": \"KRlw-jBMEeOsSCIACh-JyA\", \"Page Type\": \"6nIQpCqYEeedTxLztpOojw\", \"Page View with Search and Domain\": \"zd5za3lsZXJza3lsZXJzaw\", \"Mobile Installed Apps\": \"HAQ_kmRuEeSaxSIACh-JyA\", \"Augur\": \"-J0pC9WZEeW8qSIAC9smjg\", \"Creative Tracking\": \"NgsNS1MyEeWRqiIAC39GJQ\", \"IGN Tag Tracking\": \"BFHCvtF8EeO0LCIACh-JyA\", \"Ad Block Tracking\": \"d0miMsgbEeSUDxIxPSpF6g\", \"AdBlock Proxy\": \"4hyF_kHoEeWRqiIAC39GJQ\", \"Header Bidding\": \"EBd3N5GSEeWA3CIAC7Ppng\", \"Page View\": \"rbV5sh0-EeGLoxIxOQVEwQ\", \"Conversion Tracking\": \"1UaykBcxEeOBTBIxOxAUTQ\", \"Just URLs from Henrik\": \"RkubPF3dEeGI7xIxOScFEQ\", \"Redirect Tracking\": \"tsJ18kr0EeKPYBIxOxAUTQ\", \"Page View Proxy\": \"7hJiiEHoEeWRqiIAC39GJQ\", \"Device Match\": \"9ZjqrHMHEeedTxLztpOojw\", \"App Scout Tracking\": \"iqfFllMVEeS0LCIACh-JyA\", \"Impression Tracking\": \"bE-C1BpNEeOBTBIxOxAUTQ\", \"Pixel Tracking\": \"PP5ytO2ZEeK8mRIxOxAUTQ\", \"Page View with Search\": \"z0WVjCBSEeGLoxIxOQVEwQ\", \"ImpressionTest2\": \"QoBDkzbxEeWRqiIAC39GJQ\", \"SpeedTest Mobile\": \"uzgSvsHUEeSUDxIxPSpF6g\", \"Price Alerts Tracking\": \"nzCIfJWNEeOsSCIACh-JyA\", \"Email Subscription New\": \"X2BxciflEeS0LCIACh-JyA\", \"Offers Clicks\": \"rYIsKh3FEeaS7iIAC7Ppng\", \"Cookie Sync Alone\": \"eAAAAAAAAAAAAAAAAAAAAA\", \"AdBlock Generic Tracking\": \"rsBjlnHLEeW_6SIAC39GJQ\", \"Viewability Tracking\": \"JZN0Nsy8EeSUDxIxPSpF6g\", \"Group Post\": \"evAxTD6sEeS0LCIACh-JyA\", \"Ad Load Tracking\": \"WU2TPsgLEeSUDxIxPSpF6g\", \"Short URL Tracking\": \"Le4VYlazEeOsSCIACh-JyA\", \"Taboola Proxy\": \"51BEjEHoEeWRqiIAC39GJQ\", \"Default\": \"AAAAAAAAAAAAAAAAAAAAAA\", \"Device Match Mobile\": \"ZSfabnMIEeedTxLztpOojw\", \"ImpressionTest1\": \"PvjNjzbxEeWRqiIAC39GJQ\", \"Email Unsubscribe Tracking\": \"fufD-tuDEeO0LCIACh-JyA\", \"Click Tracking\": \"MzAzMTY1MzktMzY2Ni02Mw\", \"Mobile Tracking\": \"0rCecLBaEeO0LCIACh-JyA\", \"Ad Tracking\": \"YUg4yMmcEeO0LCIACh-JyA\", \"Campaign Conversion Pixel\": \"9xgRJHgXEeWA3CIAC7Ppng\", \"TechBargains Click Tracking\": \"fO9vJBmmEeS0LCIACh-JyA\", \"Email Open Tracking\": \"vUl_mG-rEeK8mRIxOxAUTQ\", \"Sony User Sync\": \"4xzePLytEeK8mRIxOxAUTQ\", \"AdOps Viewability\": \"Roz9_sNjEeSUDxIxPSpF6g\", \"Content Click Tracking\": \"NDgzOWJiYWMtMDJhMy0xMQ\", \"Provider ID Sync\": \"stCjLhSdEeOBTBIxOxAUTQ\", \"landing_page\": \"DzwD5m5GEeedTxLztpOojw\", \"BIZO Data\": \"uGuKtJMMEeK8mRIxOxAUTQ\", \"AskMen Malware Tracking\": \"QbTPVA6SEeS0LCIACh-JyA\", \"Video Quartile Tracking\": \"rcGeUB35EeOBTBIxOxAUTQ\", \"Redirect Reporting\": \"JoSF6UUoEeai8iIAC9smjg\", \"SpeedTest Tracking\": \"Wfa1TnvgEeSaxSIACh-JyA\", \"Moat Segment Tracking\": \"H4jyvsy8EeSUDxIxPSpF6g\", \"GDPR Events\": \"epEcehjdEeimkhKdKQ3KqA\", \"Generic Tracking\": \"cHOD_gaQEeO8mRIxOxAUTQ\", \"Generic KV Tracking\": \"Pl3mp6IiEeimkhKdKQ3KqA\"}"), zd.core.config.cmsPageIdExtractors = {
    "everydayhealth.com": function() {
        return document.body.getAttribute("data-page-id")
    },
    "whattoexpect.com": function() {
        try {
            var e = zd.core.pageData.url.split(".")[0].split("/");
            return e = e[e.length - 1].split("/"), e = e[e.length - 1], "community" == e ? document.getElementById("topicMessageBox").getAttribute("data-message-id") : JSON.parse(document.body.getAttribute("data-config")).pageId
        } catch (r) {
            console.log("alert: no page id for zdcore"), console.log(r)
        }
    }
}, zd.core.config.additionalInformation = {
    "everydayhealth.com": function() {
        return JSON.stringify({
            zone: document.body.dataset.zone,
            conditionName: document.body.dataset.conditionName,
            mediaType: document.body.dataset.mediaType,
            topicTag1: document.body.dataset["topicTag-1"],
            topicTag2: document.body.dataset["topicTag-2"]
        })
    }
}, zd.core.blobs = zd.core.blobs || {}, zd.core.blobs.lzmaWorker = "var LZMA=function(){\"use strict\";function e(e,s){postMessage({action:3,cbn:s,result:e})}function s(e){var s=[];return s[e-1]=void 0,s}function t(e,s){return o(e[0]+s[0],e[1]+s[1])}function r(e,s){return i(~~ws(Fs(e[1]/4294967296,2147483647),-2147483648)&~~ws(Fs(s[1]/4294967296,2147483647),-2147483648),n(e)&n(s))}function _(e,s){var t,r;return e[0]==s[0]&&e[1]==s[1]?0:(t=0>e[1],r=0>s[1],t&&!r?-1:!t&&r?1:0>f(e,s)[1]?-1:1)}function o(e,s){var t,r;for(s%=18446744073709552e3,e%=18446744073709552e3,t=s%4294967296,r=4294967296*ys(e/4294967296),s=s-t+r,e=e-r+t;0>e;)e+=4294967296,s-=4294967296;for(;4294967295<e;)e-=4294967296,s+=4294967296;for(s%=18446744073709552e3;9223372032559809e3<s;)s-=18446744073709552e3;for(;-9223372036854776e3>s;)s+=18446744073709552e3;return[e,s]}function c(e,s){return e[0]==s[0]&&e[1]==s[1]}function a(e){return 0<=e?[e,0]:[e+4294967296,-4294967296]}function n(e){return 2147483648<=e[0]?~~ws(Fs(e[0]-4294967296,2147483647),-2147483648):~~ws(Fs(e[0],2147483647),-2147483648)}function i(e,s){var t,r;return t=4294967296*e,r=s,0>s&&(r+=4294967296),[r,t]}function m(e){return 30>=e?1<<e:m(30)*m(e-30)}function d(e,s){var t,r,_,o;if(s&=63,c(e,xs))return s?Ns:e;if(0>e[1])throw new Error(\"Neg\");return o=m(s),r=e[1]*o%18446744073709552e3,_=e[0]*o,t=_-_%4294967296,r+=t,_-=t,9223372036854776e3<=r&&(r-=18446744073709552e3),[_,r]}function p(e,s){var t;return s&=63,t=m(s),o(ys(e[0]/t),e[1]/t)}function u(e,s){var r;return s&=63,r=p(e,s),0>e[1]&&(r=t(r,d([2,0],63-s))),r}function f(e,s){return o(e[0]-s[0],e[1]-s[1])}function P(e,s){return e.buf=s,e.pos=0,e.count=s.length,e}function h(e){return e.pos>=e.count?-1:255&e.buf[e.pos++]}function B(e,s,t,r){return e.pos>=e.count?-1:(r=Fs(r,e.count-e.pos),v(e.buf,e.pos,s,t,r),e.pos+=r,r)}function l(e){return e.buf=s(32),e.count=0,e}function S(e){var s=e.buf;return s.length=e.count,s}function g(e,s){e.buf[e.count++]=s<<24>>24}function k(e,s,t,r){v(s,t,e.buf,e.count,r),e.count+=r}function R(e,s,t,r,_){var o;for(o=s;o<t;++o)r[_++]=e.charCodeAt(o)}function v(e,s,t,r,_){for(var o=0;o<_;++o)t[r+o]=e[s+o]}function D(e,s){Oe(s,1<<e.s),s._numFastBytes=e.f,Ae(s,e.m),s._numLiteralPosStateBits=0,s._numLiteralContextBits=3,s._posStateBits=2,s._posStateMask=3}function M(e,s,t,r,o){var a,c;if(0>_(r,Is))throw new Error(\"invalid length \"+r);for(e.length_0=r,a=De({}),D(o,a),a._writeEndMark=\"undefined\"==typeof LZMA.disableEndMark,He(a,t),c=0;64>c;c+=8)g(t,255&n(p(r,c)));e.chunker=(a._needReleaseMFStream=0,a._inStream=s,a._finished=0,ve(a),a._rangeEncoder.Stream=t,Fe(a),be(a),Me(a),a._lenEncoder._tableSize=a._numFastBytes+1-2,Qe(a._lenEncoder,1<<a._posStateBits),a._repMatchLenEncoder._tableSize=a._numFastBytes+1-2,Qe(a._repMatchLenEncoder,1<<a._posStateBits),a.nowPos64=Ns,$({},a))}function b(e,s,t){return e.output=l({}),M(e,P({},s),e.output,a(s.length),t),e}function C(e,s,t){var _,o,i,r,n=\"\",c=[];for(o=0;5>o;++o){if(i=h(s),-1==i)throw new Error(\"truncated input\");c[o]=i<<24>>24}if(_=oe({}),!ae(_,c))throw new Error(\"corrupted input\");for(o=0;64>o;o+=8){if(i=h(s),-1==i)throw new Error(\"truncated input\");i=i.toString(16),1==i.length&&(i=\"0\"+i),n=i+\"\"+n}/^0+$|^f+$/i.test(n)?e.length_0=Is:(r=parseInt(n,16),e.length_0=4294967295<r?Is:a(r)),e.chunker=re(_,s,t,e.length_0)}function L(e,s){return e.output=l({}),C(e,P({},s),e.output),e}function E(e,t,r,_){var o;e._keepSizeBefore=t,e._keepSizeAfter=r,o=t+r+_,(null==e._bufferBase||e._blockSize!=o)&&(e._bufferBase=null,e._blockSize=o,e._bufferBase=s(e._blockSize)),e._pointerToLastSafePosition=e._blockSize-r}function y(e,s){return e._bufferBase[e._bufferOffset+e._pos+s]}function w(e,s,t,r){var _,o;for(e._streamEndWasReached&&e._pos+s+r>e._streamPos&&(r=e._streamPos-(e._pos+s)),++t,o=e._bufferOffset+e._pos+s,_=0;_<r&&e._bufferBase[o+_]==e._bufferBase[o+_-t];++_);return _}function F(e){return e._streamPos-e._pos}function z(e){var s,t,r;for(r=e._bufferOffset+e._pos-e._keepSizeBefore,0<r&&--r,t=e._bufferOffset+e._streamPos-r,s=0;s<t;++s)e._bufferBase[s]=e._bufferBase[r+s];e._bufferOffset-=r}function I(e){var s;++e._pos,e._pos>e._posLimit&&(s=e._bufferOffset+e._pos,s>e._pointerToLastSafePosition&&z(e),x(e))}function x(e){var s,t,r;if(!e._streamEndWasReached)for(;;){if(r=-e._bufferOffset+e._blockSize-e._streamPos,!r)return;if(s=B(e._stream,e._bufferBase,e._bufferOffset+e._streamPos,r),-1==s)return e._posLimit=e._streamPos,t=e._bufferOffset+e._posLimit,t>e._pointerToLastSafePosition&&(e._posLimit=e._pointerToLastSafePosition-e._bufferOffset),void(e._streamEndWasReached=1);e._streamPos+=s,e._streamPos>=e._pos+e._keepSizeAfter&&(e._posLimit=e._streamPos-e._keepSizeAfter)}}function N(e,s){e._bufferOffset+=s,e._posLimit-=s,e._pos-=s,e._streamPos-=s}function O(e,t,r,_,o){var i,a,n;1073741567>t&&(e._cutValue=16+(_>>1),n=~~((t+r+_+o)/2)+256,E(e,t+r,_+o,n),e._matchMaxLen=_,i=t+1,e._cyclicBufferSize!=i&&(e._son=s(2*(e._cyclicBufferSize=i))),a=65536,e.HASH_ARRAY&&(a=t-1,a|=a>>1,a|=a>>2,a|=a>>4,a|=a>>8,a>>=1,a|=65535,16777216<a&&(a>>=1),e._hashMask=a,++a,a+=e.kFixHashSize),a!=e._hashSizeSum&&(e._hash=s(e._hashSizeSum=a)))}function A(e,s){var t,r,_,o,i,a,n,c,m,d,p,u,f,P,h,B,l,S,g,k,R;if(e._pos+e._matchMaxLen<=e._streamPos)P=e._matchMaxLen;else if(P=e._streamPos-e._pos,P<e.kMinMatchCheck)return G(e),0;for(l=0,h=e._pos>e._cyclicBufferSize?e._pos-e._cyclicBufferSize:0,r=e._bufferOffset+e._pos,B=1,c=0,m=0,e.HASH_ARRAY?(R=As[255&e._bufferBase[r]]^255&e._bufferBase[r+1],c=1023&R,R^=(255&e._bufferBase[r+2])<<8,m=65535&R,d=(R^As[255&e._bufferBase[r+3]]<<5)&e._hashMask):d=255&e._bufferBase[r]^(255&e._bufferBase[r+1])<<8,_=e._hash[e.kFixHashSize+d]||0,e.HASH_ARRAY&&(o=e._hash[c]||0,i=e._hash[1024+m]||0,e._hash[c]=e._pos,e._hash[1024+m]=e._pos,o>h&&e._bufferBase[e._bufferOffset+o]==e._bufferBase[r]&&(s[l++]=B=2,s[l++]=e._pos-o-1),i>h&&e._bufferBase[e._bufferOffset+i]==e._bufferBase[r]&&(i==o&&(l-=2),s[l++]=B=3,s[l++]=e._pos-i-1,o=i),0!=l&&o==_&&(l-=2,B=1)),e._hash[e.kFixHashSize+d]=e._pos,g=(e._cyclicBufferPos<<1)+1,k=e._cyclicBufferPos<<1,u=f=e.kNumHashDirectBytes,0!=e.kNumHashDirectBytes&&_>h&&e._bufferBase[e._bufferOffset+_+e.kNumHashDirectBytes]!=e._bufferBase[r+e.kNumHashDirectBytes]&&(s[l++]=B=e.kNumHashDirectBytes,s[l++]=e._pos-_-1),t=e._cutValue;;){if(_<=h||0==t--){e._son[g]=e._son[k]=0;break}if(n=e._pos-_,a=(n<=e._cyclicBufferPos?e._cyclicBufferPos-n:e._cyclicBufferPos-n+e._cyclicBufferSize)<<1,S=e._bufferOffset+_,p=u<f?u:f,e._bufferBase[S+p]==e._bufferBase[r+p]){for(;++p!=P&&e._bufferBase[S+p]==e._bufferBase[r+p];);if(B<p&&(s[l++]=B=p,s[l++]=n-1,p==P)){e._son[k]=e._son[a],e._son[g]=e._son[a+1];break}}(255&e._bufferBase[S+p])<(255&e._bufferBase[r+p])?(e._son[k]=_,k=a+1,_=e._son[k],f=p):(e._son[g]=_,g=a,_=e._son[g],u=p)}return G(e),l}function H(e){e._bufferOffset=0,e._pos=0,e._streamPos=0,e._streamEndWasReached=0,x(e),e._cyclicBufferPos=0,N(e,-1)}function G(e){var s;++e._cyclicBufferPos>=e._cyclicBufferSize&&(e._cyclicBufferPos=0),I(e),1073741823==e._pos&&(s=e._pos-e._cyclicBufferSize,W(e._son,2*e._cyclicBufferSize,s),W(e._hash,e._hashSizeSum,s),N(e,s))}function W(e,s,t){var r,_;for(r=0;r<s;++r)_=e[r]||0,_<=t?_=0:_-=t,e[r]=_}function T(e,s){e.HASH_ARRAY=2<s,e.HASH_ARRAY?(e.kNumHashDirectBytes=0,e.kMinMatchCheck=4,e.kFixHashSize=66560):(e.kNumHashDirectBytes=2,e.kMinMatchCheck=3,e.kFixHashSize=0)}function Y(e,s){var t,r,_,o,i,a,n,c,m,d,p,u,f,P,h,B,l;do{if(e._pos+e._matchMaxLen<=e._streamPos)u=e._matchMaxLen;else if(u=e._streamPos-e._pos,u<e.kMinMatchCheck){G(e);continue}for(f=e._pos>e._cyclicBufferSize?e._pos-e._cyclicBufferSize:0,r=e._bufferOffset+e._pos,e.HASH_ARRAY?(l=As[255&e._bufferBase[r]]^255&e._bufferBase[r+1],a=1023&l,e._hash[a]=e._pos,l^=(255&e._bufferBase[r+2])<<8,n=65535&l,e._hash[1024+n]=e._pos,c=(l^As[255&e._bufferBase[r+3]]<<5)&e._hashMask):c=255&e._bufferBase[r]^(255&e._bufferBase[r+1])<<8,_=e._hash[e.kFixHashSize+c],e._hash[e.kFixHashSize+c]=e._pos,h=(e._cyclicBufferPos<<1)+1,B=e._cyclicBufferPos<<1,d=p=e.kNumHashDirectBytes,t=e._cutValue;;){if(_<=f||0==t--){e._son[h]=e._son[B]=0;break}if(i=e._pos-_,o=(i<=e._cyclicBufferPos?e._cyclicBufferPos-i:e._cyclicBufferPos-i+e._cyclicBufferSize)<<1,P=e._bufferOffset+_,m=d<p?d:p,e._bufferBase[P+m]==e._bufferBase[r+m]){for(;++m!=u&&e._bufferBase[P+m]==e._bufferBase[r+m];);if(m==u){e._son[B]=e._son[o],e._son[h]=e._son[o+1];break}}(255&e._bufferBase[P+m])<(255&e._bufferBase[r+m])?(e._son[B]=_,B=o+1,_=e._son[B],p=m):(e._son[h]=_,h=o,_=e._son[h],d=m)}G(e)}while(0!=--s)}function j(e,s,t){var r=e._pos-s-1;for(0>r&&(r+=e._windowSize);0!=t;--t)r>=e._windowSize&&(r=0),e._buffer[e._pos++]=e._buffer[r++],e._pos>=e._windowSize&&Z(e)}function V(e,t){(null==e._buffer||e._windowSize!=t)&&(e._buffer=s(t)),e._windowSize=t,e._pos=0,e._streamPos=0}function Z(e){var s=e._pos-e._streamPos;s&&(k(e._stream,e._buffer,e._streamPos,s),e._pos>=e._windowSize&&(e._pos=0),e._streamPos=e._pos)}function K(e,s){var t=e._pos-s-1;return 0>t&&(t+=e._windowSize),e._buffer[t]}function U(e,s){e._buffer[e._pos++]=s,e._pos>=e._windowSize&&Z(e)}function X(e){Z(e),e._stream=null}function Q(e){return e-=2,4>e?e:3}function J(e){return 4>e?0:10>e?e-3:e-6}function $(e,s){return e.encoder=s,e.decoder=null,e.alive=1,e}function q(e,s){return e.decoder=s,e.encoder=null,e.alive=1,e}function ee(e){if(!e.alive)throw new Error(\"bad state\");return e.encoder?te(e):se(e),e.alive}function se(e){var s=_e(e.decoder);if(-1==s)throw new Error(\"corrupted input\");e.inBytesProcessed=Is,e.outBytesProcessed=e.decoder.nowPos64,(s||0<=_(e.decoder.outSize,Ns)&&0<=_(e.decoder.nowPos64,e.decoder.outSize))&&(Z(e.decoder.m_OutWindow),X(e.decoder.m_OutWindow),e.decoder.m_RangeDecoder.Stream=null,e.alive=0)}function te(e){Re(e.encoder,e.encoder.processedInSize,e.encoder.processedOutSize,e.encoder.finished),e.inBytesProcessed=e.encoder.processedInSize[0],e.encoder.finished[0]&&(Ne(e.encoder),e.alive=0)}function re(e,s,t,r){return e.m_RangeDecoder.Stream=s,X(e.m_OutWindow),e.m_OutWindow._stream=t,ie(e),e.state=0,e.rep0=0,e.rep1=0,e.rep2=0,e.rep3=0,e.outSize=r,e.nowPos64=Ns,e.prevByte=0,q({},e)}function _e(e){var s,r,o,i,c,m;if(m=n(e.nowPos64)&e.m_PosStateMask,!Bs(e.m_RangeDecoder,e.m_IsMatchDecoders,(e.state<<4)+m))s=Pe(e.m_LiteralDecoder,n(e.nowPos64),e.prevByte),e.prevByte=7>e.state?Be(s,e.m_RangeDecoder):le(s,e.m_RangeDecoder,K(e.m_OutWindow,e.rep0)),U(e.m_OutWindow,e.prevByte),e.state=J(e.state),e.nowPos64=t(e.nowPos64,Os);else{if(Bs(e.m_RangeDecoder,e.m_IsRepDecoders,e.state))o=0,Bs(e.m_RangeDecoder,e.m_IsRepG0Decoders,e.state)?(Bs(e.m_RangeDecoder,e.m_IsRepG1Decoders,e.state)?(Bs(e.m_RangeDecoder,e.m_IsRepG2Decoders,e.state)?(r=e.rep3,e.rep3=e.rep2):r=e.rep2,e.rep2=e.rep1):r=e.rep1,e.rep1=e.rep0,e.rep0=r):!Bs(e.m_RangeDecoder,e.m_IsRep0LongDecoders,(e.state<<4)+m)&&(e.state=7>e.state?9:11,o=1),o||(o=de(e.m_RepLenDecoder,e.m_RangeDecoder,m)+2,e.state=7>e.state?8:11);else if(e.rep3=e.rep2,e.rep2=e.rep1,e.rep1=e.rep0,o=2+de(e.m_LenDecoder,e.m_RangeDecoder,m),e.state=7>e.state?7:10,c=as(e.m_PosSlotDecoder[Q(o)],e.m_RangeDecoder),!(4<=c))e.rep0=c;else if(i=(c>>1)-1,e.rep0=(2|1&c)<<i,14>c)e.rep0+=cs(e.m_PosDecoders,e.rep0-c-1,e.m_RangeDecoder,i);else if(e.rep0+=ls(e.m_RangeDecoder,i-4)<<4,e.rep0+=ns(e.m_PosAlignDecoder,e.m_RangeDecoder),0>e.rep0)return-1==e.rep0?1:-1;if(0<=_(a(e.rep0),e.nowPos64)||e.rep0>=e.m_DictionarySizeCheck)return-1;j(e.m_OutWindow,e.rep0,o),e.nowPos64=t(e.nowPos64,a(o)),e.prevByte=K(e.m_OutWindow,0)}return 0}function oe(e){e.m_OutWindow={},e.m_RangeDecoder={},e.m_IsMatchDecoders=s(192),e.m_IsRepDecoders=s(12),e.m_IsRepG0Decoders=s(12),e.m_IsRepG1Decoders=s(12),e.m_IsRepG2Decoders=s(12),e.m_IsRep0LongDecoders=s(192),e.m_PosSlotDecoder=s(4),e.m_PosDecoders=s(114),e.m_PosAlignDecoder=is({},4),e.m_LenDecoder=pe({}),e.m_RepLenDecoder=pe({}),e.m_LiteralDecoder={};for(var t=0;4>t;++t)e.m_PosSlotDecoder[t]=is({},6);return e}function ie(e){e.m_OutWindow._streamPos=0,e.m_OutWindow._pos=0,gs(e.m_IsMatchDecoders),gs(e.m_IsRep0LongDecoders),gs(e.m_IsRepDecoders),gs(e.m_IsRepG0Decoders),gs(e.m_IsRepG1Decoders),gs(e.m_IsRepG2Decoders),gs(e.m_PosDecoders),he(e.m_LiteralDecoder);for(var s=0;4>s;++s)gs(e.m_PosSlotDecoder[s].Models);ue(e.m_LenDecoder),ue(e.m_RepLenDecoder),gs(e.m_PosAlignDecoder.Models),Ss(e.m_RangeDecoder)}function ae(e,s){var t,r,_,o,i,a,n;if(5>s.length)return 0;for(n=255&s[0],_=n%9,a=~~(n/9),o=a%5,i=~~(a/5),t=0,r=0;4>r;++r)t+=(255&s[1+r])<<8*r;return 99999999<t||!ce(e,_,o,i)?0:ne(e,t)}function ne(e,s){return 0>s?0:(e.m_DictionarySize!=s&&(e.m_DictionarySize=s,e.m_DictionarySizeCheck=ws(e.m_DictionarySize,1),V(e.m_OutWindow,ws(e.m_DictionarySizeCheck,4096))),1)}function ce(e,s,t,r){if(8<s||4<t||4<r)return 0;fe(e.m_LiteralDecoder,t,s);var _=1<<r;return me(e.m_LenDecoder,_),me(e.m_RepLenDecoder,_),e.m_PosStateMask=_-1,1}function me(e,s){for(;e.m_NumPosStates<s;++e.m_NumPosStates)e.m_LowCoder[e.m_NumPosStates]=is({},3),e.m_MidCoder[e.m_NumPosStates]=is({},3)}function de(e,s,t){if(!Bs(s,e.m_Choice,0))return as(e.m_LowCoder[t],s);var r=8;return r+=Bs(s,e.m_Choice,1)?8+as(e.m_HighCoder,s):as(e.m_MidCoder[t],s),r}function pe(e){return e.m_Choice=s(2),e.m_LowCoder=s(16),e.m_MidCoder=s(16),e.m_HighCoder=is({},8),e.m_NumPosStates=0,e}function ue(e){gs(e.m_Choice);for(var s=0;s<e.m_NumPosStates;++s)gs(e.m_LowCoder[s].Models),gs(e.m_MidCoder[s].Models);gs(e.m_HighCoder.Models)}function fe(e,t,r){var _,o;if(null==e.m_Coders||e.m_NumPrevBits!=r||e.m_NumPosBits!=t)for(e.m_NumPosBits=t,e.m_PosMask=(1<<t)-1,e.m_NumPrevBits=r,o=1<<e.m_NumPrevBits+e.m_NumPosBits,e.m_Coders=s(o),_=0;_<o;++_)e.m_Coders[_]=Se({})}function Pe(e,s,t){return e.m_Coders[((s&e.m_PosMask)<<e.m_NumPrevBits)+((255&t)>>>8-e.m_NumPrevBits)]}function he(e){var s,t;for(t=1<<e.m_NumPrevBits+e.m_NumPosBits,s=0;s<t;++s)gs(e.m_Coders[s].m_Decoders)}function Be(e,s){var t=1;do t=t<<1|Bs(s,e.m_Decoders,t);while(256>t);return t<<24>>24}function le(e,s,t){var r,_,o=1;do if(_=1&t>>7,t<<=1,r=Bs(s,e.m_Decoders,(1+_<<8)+o),o=o<<1|r,_!=r){for(;256>o;)o=o<<1|Bs(s,e.m_Decoders,o);break}while(256>o);return o<<24>>24}function Se(e){return e.m_Decoders=s(768),e}function ge(e,s){var t,r,_,o;e._optimumEndIndex=s,_=e._optimum[s].PosPrev,r=e._optimum[s].BackPrev;do e._optimum[s].Prev1IsChar&&(_s(e._optimum[_]),e._optimum[_].PosPrev=_-1,e._optimum[s].Prev2&&(e._optimum[_-1].Prev1IsChar=0,e._optimum[_-1].PosPrev=e._optimum[s].PosPrev2,e._optimum[_-1].BackPrev=e._optimum[s].BackPrev2)),o=_,t=r,r=e._optimum[o].BackPrev,_=e._optimum[o].PosPrev,e._optimum[o].BackPrev=t,e._optimum[o].PosPrev=s,s=o;while(0<s);return e.backRes=e._optimum[0].BackPrev,e._optimumCurrentIndex=e._optimum[0].PosPrev,e._optimumCurrentIndex}function ke(e){e._state=0,e._previousByte=0;for(var s=0;4>s;++s)e._repDistances[s]=0}function Re(e,s,r,o){var m,d,p,u,P,h,i,B,l,S,g,k,R,v,D;if(s[0]=Ns,r[0]=Ns,o[0]=1,e._inStream&&(e._matchFinder._stream=e._inStream,H(e._matchFinder),e._needReleaseMFStream=1,e._inStream=null),!e._finished){if(e._finished=1,v=e.nowPos64,c(e.nowPos64,Ns)){if(!F(e._matchFinder))return void Ce(e,n(e.nowPos64));Ie(e),R=n(e.nowPos64)&e._posStateMask,ks(e._rangeEncoder,e._isMatch,(e._state<<4)+R,0),e._state=J(e._state),p=y(e._matchFinder,-e._additionalOffset),es($e(e._literalEncoder,n(e.nowPos64),e._previousByte),e._rangeEncoder,p),e._previousByte=p,--e._additionalOffset,e.nowPos64=t(e.nowPos64,Os)}if(!F(e._matchFinder))return void Ce(e,n(e.nowPos64));for(;;){if(i=Le(e,n(e.nowPos64)),S=e.backRes,R=n(e.nowPos64)&e._posStateMask,d=(e._state<<4)+R,1==i&&-1==S)ks(e._rangeEncoder,e._isMatch,d,0),p=y(e._matchFinder,-e._additionalOffset),D=$e(e._literalEncoder,n(e.nowPos64),e._previousByte),7>e._state?es(D,e._rangeEncoder,p):(l=y(e._matchFinder,-e._repDistances[0]-1-e._additionalOffset),ss(D,e._rangeEncoder,l,p)),e._previousByte=p,e._state=J(e._state);else{if(ks(e._rangeEncoder,e._isMatch,d,1),!(4>S)){for(ks(e._rangeEncoder,e._isRep,e._state,0),e._state=7>e._state?7:10,Ke(e._lenEncoder,e._rangeEncoder,i-2,R),S-=4,k=We(S),B=Q(i),ds(e._posSlotEncoder[B],e._rangeEncoder,k),4<=k&&(P=(k>>1)-1,m=(2|1&k)<<P,g=S-m,14>k?Ps(e._posEncoders,m-k-1,e._rangeEncoder,P,g):(Rs(e._rangeEncoder,g>>4,P-4),us(e._posAlignEncoder,e._rangeEncoder,15&g),++e._alignPriceCount)),u=S,h=3;1<=h;--h)e._repDistances[h]=e._repDistances[h-1];e._repDistances[0]=u,++e._matchPriceCount}else if(ks(e._rangeEncoder,e._isRep,e._state,1),S?(ks(e._rangeEncoder,e._isRepG0,e._state,1),1==S?ks(e._rangeEncoder,e._isRepG1,e._state,0):(ks(e._rangeEncoder,e._isRepG1,e._state,1),ks(e._rangeEncoder,e._isRepG2,e._state,S-2))):(ks(e._rangeEncoder,e._isRepG0,e._state,0),1==i?ks(e._rangeEncoder,e._isRep0Long,d,0):ks(e._rangeEncoder,e._isRep0Long,d,1)),1==i?e._state=7>e._state?9:11:(Ke(e._repMatchLenEncoder,e._rangeEncoder,i-2,R),e._state=7>e._state?8:11),u=e._repDistances[S],0!=S){for(h=S;1<=h;--h)e._repDistances[h]=e._repDistances[h-1];e._repDistances[0]=u}e._previousByte=y(e._matchFinder,i-1-e._additionalOffset)}if(e._additionalOffset-=i,e.nowPos64=t(e.nowPos64,a(i)),!e._additionalOffset){if(128<=e._matchPriceCount&&be(e),16<=e._alignPriceCount&&Me(e),s[0]=e.nowPos64,r[0]=vs(e._rangeEncoder),!F(e._matchFinder))return void Ce(e,n(e.nowPos64));if(0<=_(f(e.nowPos64,v),[4096,0]))return e._finished=0,void(o[0]=0)}}}}function ve(e){var s,t;e._matchFinder||(s={},t=4,!e._matchFinderType&&(t=2),T(s,t),e._matchFinder=s),Je(e._literalEncoder,e._numLiteralPosStateBits,e._numLiteralContextBits),e._dictionarySize==e._dictionarySizePrev&&e._numFastBytesPrev==e._numFastBytes||(O(e._matchFinder,e._dictionarySize,4096,e._numFastBytes,274),e._dictionarySizePrev=e._dictionarySize,e._numFastBytesPrev=e._numFastBytes)}function De(e){var t;for(e._repDistances=s(4),e._optimum=[],e._rangeEncoder={},e._isMatch=s(192),e._isRep=s(12),e._isRepG0=s(12),e._isRepG1=s(12),e._isRepG2=s(12),e._isRep0Long=s(192),e._posSlotEncoder=[],e._posEncoders=s(114),e._posAlignEncoder=ms({},4),e._lenEncoder=Ue({}),e._repMatchLenEncoder=Ue({}),e._literalEncoder={},e._matchDistances=[],e._posSlotPrices=[],e._distancesPrices=[],e._alignPrices=s(16),e.reps=s(4),e.repLens=s(4),e.processedInSize=[Ns],e.processedOutSize=[Ns],e.finished=[0],e.properties=s(5),e.tempPrices=s(128),e._longestMatchLength=0,e._matchFinderType=1,e._numDistancePairs=0,e._numFastBytesPrev=-1,e.backRes=0,t=0;4096>t;++t)e._optimum[t]={};for(t=0;4>t;++t)e._posSlotEncoder[t]=ms({},6);return e}function Me(e){for(var s=0;16>s;++s)e._alignPrices[s]=fs(e._posAlignEncoder,s);e._alignPriceCount=0}function be(e){var s,t,r,_,o,i,a,n;for(_=4;128>_;++_)i=We(_),r=(i>>1)-1,s=(2|1&i)<<r,e.tempPrices[_]=hs(e._posEncoders,s-i-1,r,_-s);for(o=0;4>o;++o){for(t=e._posSlotEncoder[o],a=o<<6,i=0;i<e._distTableSize;++i)e._posSlotPrices[a+i]=ps(t,i);for(i=14;i<e._distTableSize;++i)e._posSlotPrices[a+i]+=(i>>1)-1-4<<6;for(n=128*o,_=0;4>_;++_)e._distancesPrices[n+_]=e._posSlotPrices[a+_];for(;128>_;++_)e._distancesPrices[n+_]=e._posSlotPrices[a+We(_)]+e.tempPrices[_]}e._matchPriceCount=0}function Ce(e,s){xe(e),Ge(e,s&e._posStateMask);for(var t=0;5>t;++t)Ms(e._rangeEncoder)}function Le(e,s){var r,_,o,a,n,c,m,d,p,i,u,f,P,h,B,l,S,g,k,R,v,D,M,b,C,L,E,z,I,x,N,O,A,H,G,W,T,Y,j,V,Z,K,U,X,Q,t,$,q,ee,se;if(e._optimumEndIndex!=e._optimumCurrentIndex)return P=e._optimum[e._optimumCurrentIndex].PosPrev-e._optimumCurrentIndex,e.backRes=e._optimum[e._optimumCurrentIndex].BackPrev,e._optimumCurrentIndex=e._optimum[e._optimumCurrentIndex].PosPrev,P;if(e._optimumCurrentIndex=e._optimumEndIndex=0,e._longestMatchWasFound?(f=e._longestMatchLength,e._longestMatchWasFound=0):f=Ie(e),E=e._numDistancePairs,C=F(e._matchFinder)+1,2>C)return e.backRes=-1,1;for(273<C&&(C=273),V=0,p=0;4>p;++p)e.reps[p]=e._repDistances[p],e.repLens[p]=w(e._matchFinder,-1,e.reps[p],273),e.repLens[p]>e.repLens[V]&&(V=p);if(e.repLens[V]>=e._numFastBytes)return e.backRes=V,P=e.repLens[V],ze(e,P-1),P;if(f>=e._numFastBytes)return e.backRes=e._matchDistances[E-1]+4,ze(e,f-1),f;if(m=y(e._matchFinder,-1),S=y(e._matchFinder,-e._repDistances[0]-1-1),2>f&&m!=S&&2>e.repLens[V])return e.backRes=-1,1;if(e._optimum[0].State=e._state,H=s&e._posStateMask,e._optimum[1].Price=Gs[e._isMatch[(e._state<<4)+H]>>>2]+rs($e(e._literalEncoder,s,e._previousByte),7<=e._state,S,m),_s(e._optimum[1]),g=Gs[2048-e._isMatch[(e._state<<4)+H]>>>2],j=g+Gs[2048-e._isRep[e._state]>>>2],S==m&&(Z=j+we(e,e._state,H),Z<e._optimum[1].Price&&(e._optimum[1].Price=Z,os(e._optimum[1]))),u=f>=e.repLens[V]?f:e.repLens[V],2>u)return e.backRes=e._optimum[1].BackPrev,1;e._optimum[1].PosPrev=0,e._optimum[0].Backs0=e.reps[0],e._optimum[0].Backs1=e.reps[1],e._optimum[0].Backs2=e.reps[2],e._optimum[0].Backs3=e.reps[3],i=u;do e._optimum[i--].Price=268435455;while(2<=i);for(p=0;4>p;++p)if(Y=e.repLens[p],!(2>Y)){W=j+ye(e,p,e._state,H);do a=W+Xe(e._repMatchLenEncoder,Y-2,H),N=e._optimum[Y],a<N.Price&&(N.Price=a,N.PosPrev=0,N.BackPrev=p,N.Prev1IsChar=0);while(2<=--Y)}if(b=g+Gs[e._isRep[e._state]>>>2],i=2<=e.repLens[0]?e.repLens[0]+1:2,i<=f){for(z=0;i>e._matchDistances[z];)z+=2;for(;;++i)if(d=e._matchDistances[z+1],a=b+Ee(e,d,i,H),N=e._optimum[i],a<N.Price&&(N.Price=a,N.PosPrev=0,N.BackPrev=d+4,N.Prev1IsChar=0),i==e._matchDistances[z]&&(z+=2,z==E))break}for(r=0;;){if(++r,r==u)return ge(e,r);if(k=Ie(e),E=e._numDistancePairs,k>=e._numFastBytes)return e._longestMatchLength=k,e._longestMatchWasFound=1,ge(e,r);if(++s,A=e._optimum[r].PosPrev,e._optimum[r].Prev1IsChar?(--A,e._optimum[r].Prev2?(U=e._optimum[e._optimum[r].PosPrev2].State,U=4>e._optimum[r].BackPrev2?7>U?8:11:7>U?7:10):U=e._optimum[A].State,U=J(U)):U=e._optimum[A].State,A==r-1?e._optimum[r].BackPrev?U=J(U):U=7>U?9:11:(e._optimum[r].Prev1IsChar&&e._optimum[r].Prev2?(A=e._optimum[r].PosPrev2,O=e._optimum[r].BackPrev2,U=7>U?8:11):(O=e._optimum[r].BackPrev,U=4>O?7>U?8:11:7>U?7:10),x=e._optimum[A],4>O?O?1==O?(e.reps[0]=x.Backs1,e.reps[1]=x.Backs0,e.reps[2]=x.Backs2,e.reps[3]=x.Backs3):2==O?(e.reps[0]=x.Backs2,e.reps[1]=x.Backs0,e.reps[2]=x.Backs1,e.reps[3]=x.Backs3):(e.reps[0]=x.Backs3,e.reps[1]=x.Backs0,e.reps[2]=x.Backs1,e.reps[3]=x.Backs2):(e.reps[0]=x.Backs0,e.reps[1]=x.Backs1,e.reps[2]=x.Backs2,e.reps[3]=x.Backs3):(e.reps[0]=O-4,e.reps[1]=x.Backs0,e.reps[2]=x.Backs1,e.reps[3]=x.Backs2)),e._optimum[r].State=U,e._optimum[r].Backs0=e.reps[0],e._optimum[r].Backs1=e.reps[1],e._optimum[r].Backs2=e.reps[2],e._optimum[r].Backs3=e.reps[3],c=e._optimum[r].Price,m=y(e._matchFinder,-1),S=y(e._matchFinder,-e.reps[0]-1-1),H=s&e._posStateMask,_=c+Gs[e._isMatch[(U<<4)+H]>>>2]+rs($e(e._literalEncoder,s,y(e._matchFinder,-2)),7<=U,S,m),D=e._optimum[r+1],R=0,_<D.Price&&(D.Price=_,D.PosPrev=r,D.BackPrev=-1,D.Prev1IsChar=0,R=1),g=c+Gs[2048-e._isMatch[(U<<4)+H]>>>2],j=g+Gs[2048-e._isRep[U]>>>2],S!=m||D.PosPrev<r&&!D.BackPrev||(Z=j+(Gs[e._isRepG0[U]>>>2]+Gs[e._isRep0Long[(U<<4)+H]>>>2]),Z<=D.Price&&(D.Price=Z,D.PosPrev=r,D.BackPrev=0,D.Prev1IsChar=0,R=1)),L=F(e._matchFinder)+1,L=4095-r<L?4095-r:L,C=L,!(2>C)){if(C>e._numFastBytes&&(C=e._numFastBytes),!R&&S!=m&&(Q=Fs(L-1,e._numFastBytes),B=w(e._matchFinder,0,e.reps[0],Q),2<=B)){for(X=J(U),G=s+1&e._posStateMask,M=_+Gs[2048-e._isMatch[(X<<4)+G]>>>2]+Gs[2048-e._isRep[X]>>>2],I=r+1+B;u<I;)e._optimum[++u].Price=268435455;a=M+(t=Xe(e._repMatchLenEncoder,B-2,G),t+ye(e,0,X,G)),N=e._optimum[I],a<N.Price&&(N.Price=a,N.PosPrev=r+1,N.BackPrev=0,N.Prev1IsChar=1,N.Prev2=0)}for(K=2,T=0;4>T;++T)if(h=w(e._matchFinder,-1,e.reps[T],C),!(2>h)){l=h;do{for(;u<r+h;)e._optimum[++u].Price=268435455;a=j+($=Xe(e._repMatchLenEncoder,h-2,H),$+ye(e,T,U,H)),N=e._optimum[r+h],a<N.Price&&(N.Price=a,N.PosPrev=r,N.BackPrev=T,N.Prev1IsChar=0)}while(2<=--h);if(h=l,T||(K=h+1),h<L&&(Q=Fs(L-1-h,e._numFastBytes),B=w(e._matchFinder,h,e.reps[T],Q),2<=B)){for(X=7>U?8:11,G=s+h&e._posStateMask,o=j+(q=Xe(e._repMatchLenEncoder,h-2,H),q+ye(e,T,U,H))+Gs[e._isMatch[(X<<4)+G]>>>2]+rs($e(e._literalEncoder,s+h,y(e._matchFinder,h-1-1)),1,y(e._matchFinder,h-1-(e.reps[T]+1)),y(e._matchFinder,h-1)),X=J(X),G=s+h+1&e._posStateMask,v=o+Gs[2048-e._isMatch[(X<<4)+G]>>>2],M=v+Gs[2048-e._isRep[X]>>>2],I=h+1+B;u<r+I;)e._optimum[++u].Price=268435455;a=M+(ee=Xe(e._repMatchLenEncoder,B-2,G),ee+ye(e,0,X,G)),N=e._optimum[r+I],a<N.Price&&(N.Price=a,N.PosPrev=r+h+1,N.BackPrev=0,N.Prev1IsChar=1,N.Prev2=1,N.PosPrev2=r,N.BackPrev2=T)}}if(k>C){for(k=C,E=0;k>e._matchDistances[E];E+=2);e._matchDistances[E]=k,E+=2}if(k>=K){for(b=g+Gs[e._isRep[U]>>>2];u<r+k;)e._optimum[++u].Price=268435455;for(z=0;K>e._matchDistances[z];)z+=2;for(h=K;;++h)if(n=e._matchDistances[z+1],a=b+Ee(e,n,h,H),N=e._optimum[r+h],a<N.Price&&(N.Price=a,N.PosPrev=r,N.BackPrev=n+4,N.Prev1IsChar=0),h==e._matchDistances[z]){if(h<L&&(Q=Fs(L-1-h,e._numFastBytes),B=w(e._matchFinder,h,n,Q),2<=B)){for(X=7>U?7:10,G=s+h&e._posStateMask,o=a+Gs[e._isMatch[(X<<4)+G]>>>2]+rs($e(e._literalEncoder,s+h,y(e._matchFinder,h-1-1)),1,y(e._matchFinder,h-(n+1)-1),y(e._matchFinder,h-1)),X=J(X),G=s+h+1&e._posStateMask,v=o+Gs[2048-e._isMatch[(X<<4)+G]>>>2],M=v+Gs[2048-e._isRep[X]>>>2],I=h+1+B;u<r+I;)e._optimum[++u].Price=268435455;a=M+(se=Xe(e._repMatchLenEncoder,B-2,G),se+ye(e,0,X,G)),N=e._optimum[r+I],a<N.Price&&(N.Price=a,N.PosPrev=r+h+1,N.BackPrev=0,N.Prev1IsChar=1,N.Prev2=1,N.PosPrev2=r,N.BackPrev2=n+4)}if(z+=2,z==E)break}}}}}function Ee(e,s,t,r){var _,o=Q(t);return _=128>s?e._distancesPrices[128*o+s]:e._posSlotPrices[(o<<6)+Te(s)]+e._alignPrices[15&s],_+Xe(e._lenEncoder,t-2,r)}function ye(e,s,t,r){var _;return s?(_=Gs[2048-e._isRepG0[t]>>>2],1==s?_+=Gs[e._isRepG1[t]>>>2]:(_+=Gs[2048-e._isRepG1[t]>>>2],_+=bs(e._isRepG2[t],s-2))):(_=Gs[e._isRepG0[t]>>>2],_+=Gs[2048-e._isRep0Long[(t<<4)+r]>>>2]),_}function we(e,s,t){return Gs[e._isRepG0[s]>>>2]+Gs[e._isRep0Long[(s<<4)+t]>>>2]}function Fe(e){ke(e),Ds(e._rangeEncoder),gs(e._isMatch),gs(e._isRep0Long),gs(e._isRep),gs(e._isRepG0),gs(e._isRepG1),gs(e._isRepG2),gs(e._posEncoders),qe(e._literalEncoder);for(var s=0;4>s;++s)gs(e._posSlotEncoder[s].Models);Ve(e._lenEncoder,1<<e._posStateBits),Ve(e._repMatchLenEncoder,1<<e._posStateBits),gs(e._posAlignEncoder.Models),e._longestMatchWasFound=0,e._optimumEndIndex=0,e._optimumCurrentIndex=0,e._additionalOffset=0}function ze(e,s){0<s&&(Y(e._matchFinder,s),e._additionalOffset+=s)}function Ie(e){var s=0;return e._numDistancePairs=A(e._matchFinder,e._matchDistances),0<e._numDistancePairs&&(s=e._matchDistances[e._numDistancePairs-2],s==e._numFastBytes&&(s+=w(e._matchFinder,s-1,e._matchDistances[e._numDistancePairs-1],273-s))),++e._additionalOffset,s}function xe(e){e._matchFinder&&e._needReleaseMFStream&&(e._matchFinder._stream=null,e._needReleaseMFStream=0)}function Ne(e){xe(e),e._rangeEncoder.Stream=null}function Oe(e,s){e._dictionarySize=s;for(var t=0;s>1<<t;++t);e._distTableSize=2*t}function Ae(e,s){var t=e._matchFinderType;e._matchFinderType=s,e._matchFinder&&t!=e._matchFinderType&&(e._dictionarySizePrev=-1,e._matchFinder=null)}function He(e,s){e.properties[0]=9*(5*e._posStateBits+e._numLiteralPosStateBits)+e._numLiteralContextBits<<24>>24;for(var t=0;4>t;++t)e.properties[1+t]=e._dictionarySize>>8*t<<24>>24;k(s,e.properties,0,5)}function Ge(e,s){if(e._writeEndMark){ks(e._rangeEncoder,e._isMatch,(e._state<<4)+s,1),ks(e._rangeEncoder,e._isRep,e._state,0),e._state=7>e._state?7:10,Ke(e._lenEncoder,e._rangeEncoder,0,s);var t=Q(2);ds(e._posSlotEncoder[t],e._rangeEncoder,63),Rs(e._rangeEncoder,67108863,26),us(e._posAlignEncoder,e._rangeEncoder,15)}}function We(e){return 2048>e?Hs[e]:2097152>e?Hs[e>>10]+20:Hs[e>>20]+40}function Te(e){return 131072>e?Hs[e>>6]+12:134217728>e?Hs[e>>16]+32:Hs[e>>26]+52}function Ye(e,s,t,r){8>t?(ks(s,e._choice,0,0),ds(e._lowCoder[r],s,t)):(t-=8,ks(s,e._choice,0,1),8>t?(ks(s,e._choice,1,0),ds(e._midCoder[r],s,t)):(ks(s,e._choice,1,1),ds(e._highCoder,s,t-8)))}function je(e){e._choice=s(2),e._lowCoder=s(16),e._midCoder=s(16),e._highCoder=ms({},8);for(var t=0;16>t;++t)e._lowCoder[t]=ms({},3),e._midCoder[t]=ms({},3);return e}function Ve(e,s){gs(e._choice);for(var t=0;t<s;++t)gs(e._lowCoder[t].Models),gs(e._midCoder[t].Models);gs(e._highCoder.Models)}function Ze(e,s,t,r,_){var o,a,n,c,m;for(o=Gs[e._choice[0]>>>2],a=Gs[2048-e._choice[0]>>>2],n=a+Gs[e._choice[1]>>>2],c=a+Gs[2048-e._choice[1]>>>2],m=0,m=0;8>m;++m){if(m>=t)return;r[_+m]=o+ps(e._lowCoder[s],m)}for(;16>m;++m){if(m>=t)return;r[_+m]=n+ps(e._midCoder[s],m-8)}for(;m<t;++m)r[_+m]=c+ps(e._highCoder,m-8-8)}function Ke(e,s,t,r){Ye(e,s,t,r),0==--e._counters[r]&&(Ze(e,r,e._tableSize,e._prices,272*r),e._counters[r]=e._tableSize)}function Ue(e){return je(e),e._prices=[],e._counters=[],e}function Xe(e,s,t){return e._prices[272*t+s]}function Qe(e,s){for(var t=0;t<s;++t)Ze(e,t,e._tableSize,e._prices,272*t),e._counters[t]=e._tableSize}function Je(e,t,r){var _,o;if(null==e.m_Coders||e.m_NumPrevBits!=r||e.m_NumPosBits!=t)for(e.m_NumPosBits=t,e.m_PosMask=(1<<t)-1,e.m_NumPrevBits=r,o=1<<e.m_NumPrevBits+e.m_NumPosBits,e.m_Coders=s(o),_=0;_<o;++_)e.m_Coders[_]=ts({})}function $e(e,s,t){return e.m_Coders[((s&e.m_PosMask)<<e.m_NumPrevBits)+((255&t)>>>8-e.m_NumPrevBits)]}function qe(e){var s,t=1<<e.m_NumPrevBits+e.m_NumPosBits;for(s=0;s<t;++s)gs(e.m_Coders[s].m_Encoders)}function es(e,s,t){var r,_,o=1;for(_=7;0<=_;--_)r=1&t>>_,ks(s,e.m_Encoders,o,r),o=o<<1|r}function ss(e,s,t,r){var _,o,i,a,n=1,c=1;for(o=7;0<=o;--o)_=1&r>>o,a=c,n&&(i=1&t>>o,a+=1+i<<8,n=i==_),ks(s,e.m_Encoders,a,_),c=c<<1|_}function ts(e){return e.m_Encoders=s(768),e}function rs(e,s,t,r){var _,o,a=1,n=7,i=0;if(s)for(;0<=n;--n)if(o=1&t>>n,_=1&r>>n,i+=bs(e.m_Encoders[(1+o<<8)+a],_),a=a<<1|_,o!=_){--n;break}for(;0<=n;--n)_=1&r>>n,i+=bs(e.m_Encoders[a],_),a=a<<1|_;return i}function _s(e){e.BackPrev=-1,e.Prev1IsChar=0}function os(e){e.BackPrev=0,e.Prev1IsChar=0}function is(e,t){return e.NumBitLevels=t,e.Models=s(1<<t),e}function as(e,s){var t,r=1;for(t=e.NumBitLevels;0!=t;--t)r=(r<<1)+Bs(s,e.Models,r);return r-(1<<e.NumBitLevels)}function ns(e,s){var t,r,_=1,o=0;for(r=0;r<e.NumBitLevels;++r)t=Bs(s,e.Models,_),_<<=1,_+=t,o|=t<<r;return o}function cs(e,s,t,r){var _,o,i=1,a=0;for(o=0;o<r;++o)_=Bs(t,e,s+i),i<<=1,i+=_,a|=_<<o;return a}function ms(e,t){return e.NumBitLevels=t,e.Models=s(1<<t),e}function ds(e,s,t){var r,_,o=1;for(_=e.NumBitLevels;0!=_;)--_,r=1&t>>>_,ks(s,e.Models,o,r),o=o<<1|r}function ps(e,s){var t,r,_=1,o=0;for(r=e.NumBitLevels;0!=r;)--r,t=1&s>>>r,o+=bs(e.Models[_],t),_=(_<<1)+t;return o}function us(e,s,t){var r,_,o=1;for(_=0;_<e.NumBitLevels;++_)r=1&t,ks(s,e.Models,o,r),o=o<<1|r,t>>=1}function fs(e,s){var t,r,_=1,o=0;for(r=e.NumBitLevels;0!=r;--r)t=1&s,s>>>=1,o+=bs(e.Models[_],t),_=_<<1|t;return o}function Ps(e,s,t,r,_){var o,a,i=1;for(a=0;a<r;++a)o=1&_,ks(t,e,s+i,o),i=i<<1|o,_>>=1}function hs(e,s,t,r){var _,o,i=1,a=0;for(o=t;0!=o;--o)_=1&r,r>>>=1,a+=Gs[(2047&(e[s+i]-_^-_))>>>2],i=i<<1|_;return a}function Bs(e,s,t){var r,_=s[t];return r=(e.Range>>>11)*_,(-2147483648^e.Code)<(-2147483648^r)?(e.Range=r,s[t]=_+(2048-_>>>5)<<16>>16,-16777216&e.Range||(e.Code=e.Code<<8|h(e.Stream),e.Range<<=8),0):(e.Range-=r,e.Code-=r,s[t]=_-(_>>>5)<<16>>16,-16777216&e.Range||(e.Code=e.Code<<8|h(e.Stream),e.Range<<=8),1)}function ls(e,s){var r,_,t=0;for(r=s;0!=r;--r)e.Range>>>=1,_=e.Code-e.Range>>>31,e.Code-=e.Range&_-1,t=t<<1|1-_,-16777216&e.Range||(e.Code=e.Code<<8|h(e.Stream),e.Range<<=8);return t}function Ss(e){e.Code=0,e.Range=-1;for(var s=0;5>s;++s)e.Code=e.Code<<8|h(e.Stream)}function gs(e){for(var s=e.length-1;0<=s;--s)e[s]=1024}function ks(e,s,_,o){var i,n=s[_];i=(e.Range>>>11)*n,o?(e.Low=t(e.Low,r(a(i),[4294967295,0])),e.Range-=i,s[_]=n-(n>>>5)<<16>>16):(e.Range=i,s[_]=n+(2048-n>>>5)<<16>>16),-16777216&e.Range||(e.Range<<=8,Ms(e))}function Rs(e,s,r){for(var _=r-1;0<=_;--_)e.Range>>>=1,1==(1&s>>>_)&&(e.Low=t(e.Low,a(e.Range))),-16777216&e.Range||(e.Range<<=8,Ms(e))}function vs(e){return t(t(a(e._cacheSize),e._position),[4,0])}function Ds(e){e._position=Ns,e.Low=Ns,e.Range=-1,e._cacheSize=1,e._cache=0}function Ms(e){var s,o=n(u(e.Low,32));if(0!=o||0>_(e.Low,[4278190080,0])){e._position=t(e._position,a(e._cacheSize)),s=e._cache;do g(e.Stream,s+o),s=255;while(0!=--e._cacheSize);e._cache=n(e.Low)>>>24}++e._cacheSize,e.Low=d(r(e.Low,[16777215,0]),8)}function bs(e,s){return Gs[(2047&(e-s^-s))>>>2]}function Cs(e){for(var s,t,r,_=String.fromCharCode,o=0,i=0,a=e.length,n=[],c=[];o<a;++o,++i){if(s=255&e[o],!(128&s)){if(!s)return e;c[i]=s}else if(192==(224&s)){if(o+1>=a)return e;if(t=255&e[++o],128!=(192&t))return e;c[i]=(31&s)<<6|63&t}else if(224==(240&s)){if(o+2>=a)return e;if(t=255&e[++o],128!=(192&t))return e;if(r=255&e[++o],128!=(192&r))return e;c[i]=(15&s)<<12|(63&t)<<6|63&r}else return e;16383==i&&(n.push(_.apply(String,c)),i=-1)}return 0<i&&(c.length=i,n.push(_.apply(String,c))),n.join(\"\")}function Ls(e){var s,t,r,_=[],o=0,i=e.length;if(\"object\"==typeof e)return e;for(R(e,0,i,_,0),r=0;r<i;++r)s=_[r],1<=s&&127>=s?++o:!s||128<=s&&2047>=s?o+=2:o+=3;for(t=[],o=0,r=0;r<i;++r)s=_[r],1<=s&&127>=s?t[o++]=s<<24>>24:!s||128<=s&&2047>=s?(t[o++]=(192|31&s>>6)<<24>>24,t[o++]=(128|63&s)<<24>>24):(t[o++]=(224|15&s>>12)<<24>>24,t[o++]=(128|63&s>>6)<<24>>24,t[o++]=(128|63&s)<<24>>24);return t}function Es(e){return e[1]+e[0]}var ys=Math.floor,ws=Math.max,Fs=Math.min,zs=\"function\"==typeof setImmediate?setImmediate:setTimeout,Is=[4294967295,-4294967296],xs=[0,-9223372036854776e3],Ns=[0,0],Os=[1,0],As=function(){var e,s,t,r=[];for(e=0;256>e;++e){for(t=e,s=0;8>s;++s)0==(1&t)?t>>>=1:t=-306674912^t>>>1;r[e]=t}return r}(),Hs=function(){var e,s,t,r=2,_=[0,1];for(t=2;22>t;++t)for(s=1<<(t>>1)-1,e=0;e<s;++e,++r)_[r]=t<<24>>24;return _}(),Gs=function(){var e,s,t,r,_=[];for(s=8;0<=s;--s)for(r=1<<9-s-1,e=1<<9-s,t=r;t<e;++t)_[t]=(s<<6)+(e-t<<6>>>9-s-1);return _}(),Ws=function(){var e=[{s:16,f:64,m:0},{s:20,f:64,m:0},{s:19,f:64,m:1},{s:20,f:64,m:1},{s:21,f:128,m:1},{s:22,f:128,m:1},{s:23,f:128,m:1},{s:24,f:255,m:1},{s:25,f:255,m:1}];return function(s){return e[s-1]||e[6]}}();return\"undefined\"!=typeof onmessage&&(\"undefined\"==typeof window||\"undefined\"==typeof window.document)&&function(){onmessage=function(s){s&&s.data&&(s.data.action==2?LZMA.decompress(s.data.data,s.data.cbn):s.data.action==1&&LZMA.compress(s.data.data,s.data.mode,s.data.cbn))}}(),{compress:function(s,t,r,_){function o(){try{for(var e,s=new Date().getTime();ee(n.c.chunker);)if(i=Es(n.c.chunker.inBytesProcessed)/Es(n.c.length_0),200<new Date().getTime()-s)return _(i),zs(o,0),0;_(1),e=S(n.c.output),zs(r.bind(null,e),0)}catch(e){r(null,e)}}var i,a,n={},c=\"undefined\"==typeof r&&\"undefined\"==typeof _;if(\"function\"!=typeof r&&(a=r,r=_=0),_=_||function(s){return\"undefined\"==typeof a?void 0:e(s,a)},r=r||function(e,s){return\"undefined\"==typeof a?void 0:postMessage({action:1,cbn:a,result:e,error:s})},c){for(n.c=b({},Ls(s),Ws(t));ee(n.c.chunker););return S(n.c.output)}try{n.c=b({},Ls(s),Ws(t)),_(0)}catch(e){return r(null,e)}zs(o,0)},decompress:function(s,t,r){function _(){try{for(var e,s=0,i=new Date().getTime();ee(c.d.chunker);)if(0==++s%1e3&&200<new Date().getTime()-i)return a&&(o=Es(c.d.chunker.decoder.nowPos64)/n,r(o)),zs(_,0),0;r(1),e=Cs(S(c.d.output)),zs(t.bind(null,e),0)}catch(e){t(null,e)}}var o,i,a,n,c={},m=\"undefined\"==typeof t&&\"undefined\"==typeof r;if(\"function\"!=typeof t&&(i=t,t=r=0),r=r||function(s){return\"undefined\"==typeof i?void 0:e(a?s:-1,i)},t=t||function(e,s){return\"undefined\"==typeof i?void 0:postMessage({action:2,cbn:i,result:e,error:s})},m){for(c.d=L({},s);ee(c.d.chunker););return Cs(S(c.d.output))}try{c.d=L({},s),n=Es(c.d.length_0),a=-1<n,r(0)}catch(e){return t(null,e)}zs(_,0)}}}();this.LZMA=this.LZMA_WORKER=LZMA;", zd.core.utilities = zd.core.utilities || {}, zd.core.utilities.generateUUID = function() {
    var e = new Date().getTime();
    return "undefined" != typeof performance && "function" == typeof performance.now && (e += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
        var o = 0 | (e + 16 * Math.random()) % 16;
        return e = Math.floor(e / 16), ("x" === t ? o : 8 | 3 & o).toString(16)
    })
}, zd.core.utilities.generateZDBB = function() {
    return zd.core.utilities.generateUUID().replace(/-/g, "")
}, zd.core.utilities.hashCode = function(e) {
    e = e.toString();
    var r, t = 0;
    if (0 == e.length) return t;
    for (var o = 0; o < e.length; o++) r = e.charCodeAt(o), t = (t << 5) - t + r, t &= t;
    return t
}, zd.core.utilities.getQSV = function(e) {
    var r = window.location.href;
    e = e.replace(/[\[\]]/g, "\\$&");
    var t = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
        o = t.exec(r);
    return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : null
}, zd.core.utilities.getCookie = function(e) {
    var r = "; " + document.cookie,
        t = r.split("; " + e + "=");
    if (1 < t.length) return t.pop().split(";").shift()
}, zd.core.utilities.setMonthCookie = function(e, r) {
    var t = new Date;
    t.setMonth(t.getMonth() + 1), document.cookie = e + "=" + r + ";expires=" + t + ";domain=." + zd.core.pageData.rootDomain + ";path=/"
}, zd.core.utilities.setCookie = function(e, r, t) {
    var o = "";
    if (t) {
        var s = new Date;
        s.setTime(s.getTime() + 1e3 * (60 * (60 * (24 * t)))), o = "; expires=" + s.toUTCString()
    }
    document.cookie = e + "=" + (r || "") + o + "; path=/"
}, zd.core.utilities.eraseCookie = function(e) {
    document.cookie = e + "=; Max-Age=-99999999;"
}, zd.core.utilities.getRootDomain = function() {
    var e = window.location.hostname || window.location.host,
        r = e.split(".");
    if (2 <= r.length) return "co" === r[r.length - 2] && 3 < r.length ? r.slice(r.length - 3).join(".") : r.slice(r.length - 2).join(".")
}, zd.core.utilities.itemInArray = function(e, r) {
    return -1 < r.lastIndexOf(e)
}, zd.core.utilities.objectToQueryString = function(e, r) {
    var t, o = [];
    for (t in e)
        if (e.hasOwnProperty(t)) {
            var s = r ? r + "[" + t + "]" : t,
                i = e[t];
            o.push(null !== i && "object" == typeof i ? zd.core.utilities.objectToQueryString(i, s) : encodeURIComponent(s) + "=" + encodeURIComponent(i))
        } return "?" + o.join("&")
}, zd.core.utilities.callPixel = function(e) {
    var r = new Image;
    r.src = e;
    try {
        document.body.appendChild(r)
    } catch (e) {}
}, zd.core.utilities.callScript = function(e, r) {
    r = r || null;
    var t = document.createElement("script");
    if (t.setAttribute("src", e), t.type = "text/javascript", r && "object" == typeof r && !Array.isArray(r))
        for (var o in r) r.hasOwnProperty(o) && ("async" == o ? !0 == r[o] && (t.async = !0) : "id" == o ? t.id = r[o] : t.dataset[o] = r[o]);
    document.head.appendChild(t)
}, zd.core.utilities.callAPI = function(e, r, t, o) {
    r = r || null, t = t || null, o = o || "GET";
    var s = new XMLHttpRequest;
    s.withCredentials = !0, "POST" == o && t ? s.setRequestHeader("Content-type", "application/x-www-form-urlencoded") : "GET" == o && t ? e += zd.core.utilities.objectToQueryString(t) : o = "GET", s.open(o, e, !0), s.onreadystatechange = function() {
        4 == s.readyState && r && r(s.responseText)
    }, s.onerror = function() {
        console.log("CORE: API Fail")
    }, s.send({
        data: JSON.stringify(t)
    })
}, zd.core.utilities.getCMSPageId = function() {
    return zd.core.pageData.rootDomain in zd.core.config.cmsPageIdExtractors ? zd.core.config.cmsPageIdExtractors[zd.core.pageData.rootDomain]() || "" : ""
}, zd.core.utilities.getLocalUId = function() {
    for (let e in zd.core.config.cookieSwapCodes)
        if (zd.core.config[e].on()) return zd.core.config.cookieSwapCodes[e].parser() || "";
    return ""
}, zd.core.utilities.getAdditionalInformation = function() {
    return zd.core.pageData.rootDomain in zd.core.config.additionalInformation ? zd.core.config.additionalInformation[zd.core.pageData.rootDomain]() || "" : ""
}, zd.core.utilities.getReferrer = function() {
    return document.referrer || ""
}, zd.core.utilities.getThirdPartyConsent = function() {
    return this.CookieConsent && this.CookieConsent.consented ? "cookiebot" : ""
}, zd.core.utilities.domready = function() {
    var e = [],
        r = /^loaded|^i|^c/.test(document.readyState),
        t = function() {
            for (document.removeEventListener("DOMContentLoaded", t), r = 1; t;) t = e.shift(), "undefined" != typeof t && t()
        };
    return r || document.addEventListener("DOMContentLoaded", t),
        function(t) {
            r ? t() : e.push(t)
        }
}(), zd.core.utilities.LZMA = function() {
    var r = {},
        e = new Worker(window.URL.createObjectURL(new Blob([zd.core.blobs.lzmaWorker])));
    return e.onmessage = function(t) {
            3 === t.data.action ? r[t.data.cbn] && "function" == typeof r[t.data.cbn].on_progress && r[t.data.cbn].on_progress(t.data.result) : r[t.data.cbn] && "function" == typeof r[t.data.cbn].on_finish && (r[t.data.cbn].on_finish(t.data.result, t.data.error), delete r[t.data.cbn])
        }, e.onerror = function(e) {
            var t = new Error(e.message + " (" + e.filename + ":" + e.lineno + ")");
            for (var o in r) r[o].on_finish(null, t);
            console.error("Uncaught error in lzma_worker", t)
        },
        function() {
            function t(t, o, s, i, n) {
                var a;
                do a = Math.floor(1e7 * Math.random()); while ("undefined" != typeof r[a]);
                r[a] = {
                    on_finish: i,
                    on_progress: n
                }, e.postMessage({
                    action: t,
                    cbn: a,
                    data: o,
                    mode: s
                })
            }
            return {
                compress: function(e, r, o, s) {
                    t(1, e, r, o, s)
                },
                decompress: function(e, r, o) {
                    t(2, e, !1, r, o)
                },
                worker: function() {
                    return e
                }
            }
        }()
}, zd.core.taxonomy = zd.core.taxonomy || {}, zd.core.walker = zd.core.walker || {}, zd.core.walker.config = {
    checkUrl: "//walker.zdbb.net/check?href=",
    postUrl: "//walker.zdbb.net/receive_uint8",
    skipNodes: ["ABBR", "META", "NOSCRIPT", "NAV", "IMG", "HEADER", "FOOTER", "SCRIPT", "LINK", "STYLE", "FORM", "INPUT", "SELECT", "BUTTON"],
    skipAttributes: ["outbrain", "header", "disqus", "sponsor", "sponsors", "branding", "advertise", "navigation", "masthead", "ad", "nav", "footer", "header", "navigation", "advertising", "advertisement", "menu", "copyright"],
    harmlessNodes: ["A", "I", "B", "STRONG", "EM", "FONT", "P", "SPAN"],
    interestingMeta: ["keywords", "description", "zdid", "canonical", "live_date", "type_of", "tags", "zd_ptax"],
    snippets: {},
    domainSpecificMeta: {
        "pcmag.com": ["primary-section-id", "section-id"]
    }
}, zd.core.walker.executeWalker = function() {
    var e = new XMLHttpRequest,
        r = zd.core.walker.config.checkUrl + encodeURIComponent(zd.core.pageData.url);
    e.onreadystatechange = function() {
        4 == e.readyState && "TRUE" == e.responseText && zd.core.walker.doIndexing()
    }, e.open("GET", r, !0), e.send(null)
}, zd.core.walker.doIndexing = function() {
    for (var e in zd.core.walker.config.domainSpecificMeta) e == zd.core.pageData.rootDomain && (zd.core.walker.config.interestingMeta = zd.core.walker.config.interestingMeta.concat(zd.core.walker.config.domainSpecificMeta[e]));
    var r = new zd.core.utilities.LZMA;
    zd.core.utilities.domready(function() {
        var e = [],
            t = document.body;
        zd.core.walker.getText(t, e), e = e.reverse();
        for (var o = e[0], s = [o], n = 1; n < e.length; n++) try {
            if (-1 == o.indexOf(e[n])) {
                var i = e[n] + "";
                s[s.length] = i, o = i + "\n" + o
            }
        } catch (r) {
            console.log("zd.core.walker error:" + r)
        }
        s = s.reverse();
        var a = s.join(" -$BREAK$- "),
            c = zd.core.walker.getMetas(),
            d = document.title,
            _ = document.location.toString(),
            u = _.replace(/\?.*/gi, ""),
            f = !!document.getElementById("canonical-meta") && document.getElementById("canonical-meta").href,
            p = JSON.stringify({
                url: _,
                canonical_url: u,
                metas: c,
                title: d,
                page_text: a,
                m_to_w_canonical: f
            });
        r.compress(p, 5, function(e) {
            var r = a.length,
                t = e.length,
                o = new Uint8Array(e),
                s = new XMLHttpRequest;
            s.open("POST", zd.core.walker.config.postUrl, !0), s.setRequestHeader("Cache-Control", "no-cache"), s.setRequestHeader("Content-Type", "application/octet-stream"), s.send(o)
        })
    })
}, zd.core.walker.getText = function(e, r) {
    if (!e) return !1;
    for (var t = e.firstChild; t; t = t.nextSibling) zd.core.walker.validNode(t) && zd.core.walker.getText(t, r);
    if (zd.core.walker.validNode(e) && "undefined" != typeof e.children && (0 == e.children.length || zd.core.walker.harmlessKids(e))) {
        var o = e.innerText;
        if ("undefined" == typeof o && (o = e.textContent), "undefined" == typeof o) return !1;
        if (-1 < o.toLowerCase().indexOf("ads by google")) return !1;
        if ("undefined" != typeof e.id && -1 < e.id.toLowerCase().indexOf("google_ads")) return !1
    }
    if ("undefined" != typeof o) {
        var o = zd.core.walker.cleanse(o),
            s = zd.core.walker.getSentences(o);
        return o && null != s && "" != o && (!zd.core.walker.config.snippets[o] || "undefined" == typeof zd.core.walker.config.snippets[o]) ? (zd.core.walker.config.snippets[o] = 1, r.push(o), !0) : null != s && (zd.core.walker.config.snippets[o] += 1, !0)
    }
    return !1
}, zd.core.walker.superReplace = function(e, r, t) {
    t = "undefined" == typeof t ? " " : t;
    for (var o = 0; o < r.length; o++) e = (e + "").replace(r[o], t);
    return e
}, zd.core.walker.validNode = function(e) {
    if (!e || "undefined" == typeof e || "undefined" != typeof e.tagName && zd.core.utilities.itemInArray(e.tagName, zd.core.walker.config.skipNodes)) return !1;
    if ("undefined" != typeof e.style && "none" == e.style.display) return !1;
    if ("undefined" == typeof e.children) return !1;
    var r = !0;
    if ("undefined" != typeof e.attributes)
        for (var t, o = 0, s = e.attributes, i = s.length; o < i; o++)
            if (t = s.item(o), t) {
                var n = e.className;
                "undefined" == typeof n && (n = "");
                var a = e.id;
                "undefined" == typeof a && (a = ""), n = n + " " + a;
                var c = t.value;
                if ("undefined" == typeof c) continue;
                for (var d in c += " " + n, c = c.toLowerCase(), c = zd.core.walker.superReplace(c, [",", /\./gi, /-/gi, /_/gi]), c = c.split(" "), c) try {
                    var _ = zd.core.walker.superReplace(c[d], [/^[ ]+/gi, /[ ]$/gi], "");
                    if (zd.core.utilities.itemInArray(_, zd.core.walker.config.skipAttributes)) {
                        r = !1;
                        break
                    } else if (-1 < _.indexOf("disqus") || -1 < _.indexOf("twitter") || -1 < _.indexOf("pintrest") || -1 < _.indexOf("fb-") || -1 < _.indexOf("facebook")) {
                        r = !1;
                        break
                    } else if (-1 < _.indexOf("main")) break
                } catch (r) {
                    console.log("zd.core.walker error:" + r)
                }
            } return r
}, zd.core.walker.cleanse = function(e) {
    return e = zd.core.walker.superReplace(e, [/[\r\n]/gi, /\t/gi, /[ ]+/gi, /[\r\n]/gi, /[ ]+/, /^[\t\s ]+/gi]), e = zd.core.walker.superReplace(e, [/^[ ]+/gi, /[ ]+$/gi, /<[^>]*>/gi], ""), e = zd.core.walker.superReplace(e, [/\"/gi], "'"), e
}, zd.core.walker.getSentences = function(e) {
    var r = e.match(/([A-Za-z][^.!?]+[A-Za-z]{2,}[.!?])/gi);
    return null == r && (r = e.match(/([A-Z][a-z]+[ ]){2,}/gi)), r
}, zd.core.walker.harmlessKids = function(e) {
    if (!zd.core.walker.validNode(e)) return !1;
    if ("undefined" == typeof e.children) return !1;
    if (0 == e.children.length) return !0;
    for (var r = !0, t = 0; t < e.children.length; t++) 3 != e.children[t].nodeType && (r = !1);
    if (r) return !0;
    for (var o, t = 0; t < e.children.length; t++)
        if (o = e.children[t], "undefined" == typeof o.tagName || !zd.core.utilities.itemInArray(o.tagName, zd.core.walker.config.harmlessNodes)) return !1;
    return !0
}, zd.core.walker.getMetas = function() {
    for (var e = document.getElementsByTagName("meta"), r = {}, t = 0; t < e.length; t++) {
        var o = e[t].getAttribute("name"),
            s = e[t].getAttribute("content");
        zd.core.utilities.itemInArray(o, zd.core.walker.config.interestingMeta) && (r[o] = s)
    }
    var i = /^http[s]{0,1}:\/\/[^\/]*ign..*/;
    if (i.test(document.location.toString()) && "undefined" != typeof ChessKit && ChessKit.data) {
        var n = ChessKit.data,
            a = [];
        n.object1_id && (a = a.concat(n.object1_id)), n.tags && (a = a.concat(n.tags)), n.categories && (a = a.concat(n.categories)), n.genre && (a = a.concat(n.genre)), n.article_types && (a = a.concat(n.article_types)), a = a.join(","), "" != a && (r.zd_ptax = a)
    } else if (i.test(document.location.toString()) && "undefined" !== SugarAds && SugarAds.adsData) {
        var n = SugarAds.adsData,
            a = [];
        n.object1_id && (a = a.concat(n.object1_id)), n.tags && (a = a.concat(n.tags)), n.categories && (a = a.concat(n.categories)), n.genre && (a = a.concat(n.genre)), n.article_types && (a = a.concat(n.article_types)), a = a.join(","), "" != a && (r.zd_ptax = a)
    }
    try {
        var c = document.location.href,
            d = /(?:http)(?:s)?(?:\:\/\/)(?:www\.)?([^\/]*)([\/]*)(.*)/g,
            _ = d.exec(c);
        if (-1 < ["creditcards.offers.com", "offers.com", "couponcodes.com"].indexOf(_[1])) {
            var u, f = [],
                p = {
                    "offers.com": "offerscat",
                    "couponcodes.com": "couponcodescat",
                    "creditcards.offers.com": "offerscc"
                },
                m = _[3];
            p = p[_[1]], 0 == m.indexOf("c/") ? (m = m.substring(2).split("/")[0].split("?")[0], f.push(p + ":" + m)) : 0 == m.indexOf("types/") ? (m = m.substring(6).split("/")[0].split("?")[0], f.push(p + ":" + m)) : 0 == m.indexOf("cards-for/") ? (m = m.substring(10).split("/")[0].split("?")[0], f.push(p + ":" + m)) : 0 == m.indexOf("issuers/") ? (m = m.substring(8).split("/")[0].split("?")[0], f.push("offersbrand:" + m)) : (u = m.split("/")[0].split("?")[0], "" != u && f.push("offersbrand:" + u)), r.zd_ptax = f
        }
    } catch (r) {}
    return r
}, zd.core.injection = zd.core.injection || {}, zd.core.injection.injectWalker = function() {
    var e = zd.core.signals.staticDomain + "/js/walker.min.js?v=5";
    zd.core.utilities.callScript(e)
}, zd.core.injection.injectOCT = function() {
    var e = zd.core.signals.staticDomain + "/js/zd-core-olt.min.js?v=5";
    zd.core.utilities.callScript(e)
}, zd.core.injection.injectCore20 = function() {
    if (!document.getElementById("zdcore-js") || !0) {
        var e = zd.core.signals.staticDomain + "/js/zd-core.min.js?v=5";
        zd.core.utilities.callScript(e, {
            id: "zdcore-js",
            async: !0,
            analyticsDomain: "a.zdbb.net",
            analyticsAccount: "legacy:" + zd.core.pageData.rootDomain
        })
    }
}, zd.core.injection.injectScripts = function() {
    zd.core.injection.injectOCT()
}, zd.core.thirdparty = zd.core.thirdparty || {}, zd.core.thirdparty.bluekai = zd.core.thirdparty.bluekai || {
    phintArray: []
}, zd.core.thirdparty.krux = zd.core.thirdparty.krux || {}, zd.core.thirdparty.bluekai.offers = function() {
    try {
        var e, r, t = {
                "offers.com": "offerscat",
                "couponcodes.com": "couponcodescat",
                "creditcards.offers.com": "offerscc"
            },
            o = document.location.href,
            s = /(?:http)(?:s)?(?:\:\/\/)(?:www\.)?([^\/]*)([\/]*)(.*)/g,
            i = s.exec(o); - 1 < ["creditcards.offers.com", "offers.com", "couponcodes.com"].indexOf(i[1]) && (e = i[3], t = t[i[1]], 0 == e.indexOf("c/") ? (e = e.substring(2).split("/")[0].split("?")[0], bk_addPageCtx(t, e)) : 0 == e.indexOf("types/") ? (e = e.substring(6).split("/")[0].split("?")[0], bk_addPageCtx(t, e)) : 0 == e.indexOf("cards-for/") ? (e = e.substring(10).split("/")[0].split("?")[0], bk_addPageCtx(t, e)) : 0 == e.indexOf("issuers/") ? (e = e.substring(8).split("/")[0].split("?")[0], bk_addPageCtx("offersbrand", e)) : (r = e.split("/")[0].split("?")[0], "" != r && bk_addPageCtx("offersbrand", r)))
    } catch (r) {}
    return null
}, zd.core.thirdparty.bluekai.ign = function() {
    return "undefined" != typeof _sf_async_config && ("undefined" != typeof _sf_async_config.authors && bk_addPageCtx("authors", _sf_async_config.authors), "undefined" != typeof _sf_async_config.sections && bk_addPageCtx("sections", _sf_async_config.sections), "undefined" != typeof _sf_async_config.path && bk_addPageCtx("path", _sf_async_config.path)), null
}, zd.core.thirdparty.bluekai.pcmag = function() {
    "undefined" != typeof __PCMAG && "undefined" != typeof __PCMAG.storedGaVars && ("undefined" != typeof __PCMAG.storedGaVars[1].reportValue && bk_addPageCtx("sections", __PCMAG.storedGaVars[1].reportValue), "undefined" != typeof __PCMAG.storedGaVars[5].reportValue && bk_addPageCtx("authors", __PCMAG.storedGaVars[5].reportValue)), "undefined" != typeof userType && bk_addPageCtx("userType", userType)
}, zd.core.thirdparty.bluekai.askmen = function() {
    "undefined" != typeof AM && ("undefined" != typeof AM.Meta && ("undefined" != typeof AM.Meta.get("channel") && bk_addPageCtx("channel", AM.Meta.get("channel")), "undefined" != typeof AM.Meta.get("subchannel") && bk_addPageCtx("subchannel", AM.Meta.get("subchannel")), "undefined" != typeof AM.Meta.get("title") && bk_addPageCtx("title", AM.Meta.get("title")), "undefined" != typeof AM.Meta.get("description") && bk_addPageCtx("description", AM.Meta.get("description"))), "undefined" != typeof AM.One && "undefined" != typeof AM.One.isLoggedIn() && bk_addPageCtx("member", AM.One.isLoggedIn()))
}, zd.core.thirdparty.bluekai.callTag = function() {
    try {
        if ("undefined" != typeof __ZD_SEG_)
            for (var e = 0; e < __ZD_SEG_.length; e++) bk_addPageCtx("bbseg", __ZD_SEG_[e])
    } catch (r) {}
    return bk_doJSTag(30629, 10), null
}, zd.core.thirdparty.bluekai.processPhints = function() {
    var e = /(?:http)(?:s)?(?:\:\/\/)(?:www\.|preview\.|qa\.|qa2\.|stage\.|appscout\.|forwardthinking\.|securitywatch\.|goodcleantech\.|m\.)?([^\/]*)([\/]*)(.*)/g,
        r = e.exec(document.location.href);
    bk_addPageCtx("site", r[1]), bk_addPageCtx("referer", document.location.href), window.bk_addPageCtx = function(e, r) {
        return zd.core.thirdparty.bluekai.phintArray.push([e, r]), BKTAG.addParam("phint", e, r), BKTAG
    };
    try {
        -1 < ["creditcards.offers.com", "offers.com", "couponcodes.com"].lastIndexOf(r[1]) ? zd.core.thirdparty.bluekai.offers() : -1 < ["ign.com", "m.ign.com"].lastIndexOf(r[1]) ? zd.core.thirdparty.bluekai.ign() : -1 < ["pcmag.com"].lastIndexOf(r[1]) ? zd.core.thirdparty.bluekai.pcmag() : -1 < ["askmen.com"].lastIndexOf(r[1]) && zd.core.thirdparty.bluekai.askmen()
    } catch (r) {}
    return zd.core.thirdparty.bluekai.callTag(), null
}, zd.core.thirdparty.bluekai.execute = function() {
    var e = zd.core.pageData.rootDomain,
        r = document.createElement("iframe");
    r.setAttribute("name", "__bkframe"), r.setAttribute("height", "0"), r.setAttribute("width", "0"), r.setAttribute("frameborder", "0"), r.setAttribute("style", "display:none;position:absolute;clip:rect(0px 0px 0px 0px)"), r.setAttribute("src", "about:blank"), document.body.appendChild(r);
    var t = document.createElement("script");
    t.setAttribute("type", "text/javascript");
    var o = "tags.bkrtx.com"; - 1 < ["pcmag.com", "geek.com", "extremetech.com", "computershopper.com"].lastIndexOf(e) && (o = "bbstatic." + e), t.onload = function() {
        zd.core.thirdparty.bluekai.processPhints()
    }, t.readyState && (t.onreadystatechange = function() {
        ("loaded" === t.readyState || "complete" === t.readyState) && (t.onreadystatechange = null, zd.core.thirdparty.bluekai.processPhints())
    }), t.setAttribute("src", "//" + o + "/js/bk-coretag.js"), document.body.appendChild(t)
}, zd.core.thirdparty.krux.swapCookie = function() {
    var e = localStorage.getItem("kxziffdavis_kuid");
    "1" != zd.core.utilities.getCookie("zdbb_swap_krux_id") && null != e && (zd.core.signals.sendSignal("Cookie Sync Alone", {
        tp: "kiepsdfhasdkdlfsliw7",
        tpc: e
    }, "logger", !1), zd.core.utilities.setMonthCookie("zdbb_swap_krux_id", "1"))
}, zd.core.thirdparty.krux.execute = function() {
    if ("1" != zd.core.utilities.getCookie("zdbb_swap_krux_id")) {
        var e = document.createElement("script");
        e.setAttribute("type", "text/javascript"), e.setAttribute("class", "kxct"), e.setAttribute("data-id", "spgdj7g8u"), e.setAttribute("data-timing", "async"), e.setAttribute("data-version", "3.0"), e.onload = function() {
            zd.core.thirdparty.krux.swapCookie()
        }, e.readyState && (e.onreadystatechange = function() {
            ("loaded" === e.readyState || "complete" === e.readyState) && (e.onreadystatechange = null, zd.core.thirdparty.krux.swapCookie())
        }), e.setAttribute("src", zd.core.signals.staticDomain + "/js/krux-coretag.js"), document.body.appendChild(e)
    }
}, zd.core.thirdparty.execute = function() {
    zd.core.thirdparty.bluekai.execute(), zd.core.thirdparty.krux.execute()
}, zd.core.signals = zd.core.signals || {}, zd.core.signals.sendSignal = function(e, r, t, o) {
    t = t || "logger", !1 !== o && (o = !0);
    var s, i, r = r || {};
    "gurgle" === t ? (s = zd.core.gurgle.gurgleDomain, i = e) : "logger" === t ? (s = zd.core.signals.loggerDomain, i = (o ? "/l/" : "/n/") + zd.core.config.signalLib[e], r.zd_pagview_id = zd.core.pageData.pageViewId, r.zd_location = zd.core.pageData.url, r.evidon_consent = zd.core.utilities.getCookie("_evidon_consent_cookie"), r.third_party_consent = zd.core.utilities.getThirdPartyConsent()) : (s = zd.core.signals.loggerDomain, i = "/l/", r.zd_pagview_id = zd.core.pageData.pageViewId, r.zd_location = zd.core.pageData.url, r.evidon_consent = zd.core.utilities.getCookie("_evidon_consent_cookie"), r.third_party_consent = zd.core.utilities.getThirdPartyConsent());
    var n = s + i + zd.core.utilities.objectToQueryString(r);
    zd.core.utilities.callPixel(n)
}, zd.core.signals.mainPageViewSignal = function() {
    zd.core.signals.sendSignal("Page View with Search", {
        additionalInformation: zd.core.utilities.getAdditionalInformation(),
        cms_page_id: zd.core.pageData.cmsPageId,
        local_uid: zd.core.pageData.local_uid,
        referrer: zd.core.pageData.referrer
    })
}, zd.core.signals.IgnMeta = function() {
    if ("undefined" != typeof ChessKit && ChessKit.data) {
        for (var e, r, t = [], o = [], s = 0; s < zd.core.config.ignMetaInteresting.length; s++) e = zd.core.config.ignMetaInteresting[s], r = ChessKit.data[e], r && (Array.isArray(r) && (r = r.join()), t.push(e), o.push(r));
        if (1 > t.length) return null;
        zd.core.signals.sendSignal("IGN Tag Tracking", {
            t: t.join("|"),
            v: o.join("|")
        })
    }
}, zd.core.signals.BlackFridayMeta = function() {
    var e = window.location.pathname,
        r = /^(.+?)-black-friday$/i,
        t = null,
        o = null,
        s = null;
    try {
        if (e = e.toLowerCase().split("/").slice(1), 1 === e.length) {
            var i = r.exec(e[0]);
            i && (o = "store_merchant", t = i[1])
        } else "ads" === e[0] ? ("black-friday" === e[1] && (o = "ads_merchant", t = e[2]), "cyber-monday" === e[1] && (o = "cm_ads_merchant", t = e[2])) : "categories" === e[0] && (s = e[1]);
        t && o && zd.core.signals.sendSignal("Generic KV Tracking", {
            namespace: "black_friday_merchant",
            key: o,
            value: t
        }), s && zd.core.signals.sendSignal("Generic KV Tracking", {
            namespace: "black_friday_category",
            key: "category",
            value: s
        })
    } catch (r) {}
}, zd.core.signals.BestBlackFridayMeta = function() {
    var e = window.location.pathname,
        r = /^(.+?)-black-friday$/i,
        t = null,
        o = null,
        s = null;
    try {
        if (e = e.toLowerCase().split("/").slice(1), "ads" === e[0]) {
            var i = r.exec(e[1]);
            i && (o = "ads_merchant", t = i[1])
        } else "store" === e[0] ? (o = "store_merchant", t = e[1]) : "category" === e[0] && (s = e[1]);
        t && o && zd.core.signals.sendSignal("Generic KV Tracking", {
            namespace: "best_black_friday_merchant",
            key: o,
            value: t
        }), s && zd.core.signals.sendSignal("Generic KV Tracking", {
            namespace: "best_black_friday_category",
            key: "category",
            value: s
        })
    } catch (r) {}
}, zd.core.signals.ToolboxTaxcats = function() {
    var e, r;
    try {
        r = document.querySelector("meta[name='news_keywords']").getAttribute("content").split(",").map(function(e) {
            return "tb_ptax_meta_news_keywords_" + e.trim()
        }), zd.core.signals.sendSignal("Generic Tracking", {
            id: r.join("|"),
            multi: "|"
        })
    } catch (e) {}
    try {
        e = document.querySelector("meta[name='zd_ptax_version']").getAttribute("content").trim(), r = document.querySelector("meta[name='zd_ptax']").getAttribute("content").split(",").map(function(r) {
            return "tb_ptax_" + e + "_" + r.trim()
        }), zd.core.signals.sendSignal("Generic Tracking", {
            id: r.join("|"),
            multi: "|"
        })
    } catch (e) {}
}, zd.core.signals.evdyAdzone = function() {
    let e = function() {
        "undefined" != typeof EH && "undefined" != typeof EH.Global && "undefined" != typeof EH.Global.data && "undefined" != typeof EH.Global.data.zone && "" != EH.Global.data.zone ? new Image().src = "//zdbb.net/l/6nIQpCqYEeedTxLztpOojw?page_type=" + encodeURIComponent(EH.Global.data.zone) : "undefined" != typeof WTE && "undefined" != typeof WTE.AdParams && typeof("undefined" !== WTE.AdParams.zone) ? new Image().src = "//zdbb.net/l/6nIQpCqYEeedTxLztpOojw?page_type=" + encodeURIComponent(WTE.AdParams.zone) : null == JSON.parse(document.body.getAttribute("data-config")) ? "undefined" != typeof window.MPT && "undefined" != typeof window.MPT.adZone ? new Image().src = "//zdbb.net/l/6nIQpCqYEeedTxLztpOojw?page_type=" + encodeURIComponent(window.MPT.adZone) : setTimeout(e, 2e3) : new Image().src = "//zdbb.net/l/6nIQpCqYEeedTxLztpOojw?page_type=" + encodeURIComponent(JSON.parse(document.body.getAttribute("data-config")).ads.adZone)
    };
    e()
}, zd.core.signals.executeDomainSpecificSignals = function() {
    zd.core.config.ignMetaDomains.onExecute(zd.core.signals.IgnMeta), zd.core.config.evdyAdzoneDomains.onExecute(zd.core.signals.evdyAdzone), zd.core.config.blackFridayDomains.onExecute(zd.core.signals.BlackFridayMeta), zd.core.config.bestBlackFridayDomains.onExecute(zd.core.signals.BestBlackFridayMeta)
}, zd.core.signals.executePartnerSwaps = function() {}, zd.core.signals.executeInternalSwaps = function() {
    for (var e in zd.core.config.cookieSwapCodes)
        if (zd.core.config[e].on()) {
            var r = zd.core.config.cookieSwapCodes[e].swappedCookie,
                t = zd.core.utilities.getCookie(r),
                o = zd.core.config.cookieSwapCodes[e].parser();
            if ((t == void 0 || "" == t) && o && o != void 0) {
                if (zd.core.config.cookieSwapCodes[e].signalCode != void 0) var s = zd.core.config.cookieSwapCodes[e].signalCode;
                else if (zd.core.config.cookieSwapCodes[e].signalCodeRegex != void 0)
                    for (let r = 0; r < zd.core.config.cookieSwapCodes[e].signalCodeRegex.length; r++) {
                        var i = zd.core.config.cookieSwapCodes[e].signalCodeRegex[r];
                        if (i.regex.test(o)) {
                            var s = i.signalCode;
                            continue
                        }
                    } else continue;
                s && (zd.core.signals.sendSignal("Cookie Sync Alone", {
                    tp: s,
                    tpc: o
                }, "logger", !1), zd.core.utilities.setMonthCookie(r, "1"))
            }
        }
}, zd.core.signals.GDPRoptin = function(e) {
    e = e || ""
}, zd.core.signals.GDPRoptout = function(e) {
    e = e || "", zd.core.signals.sendSignal("GDPR Events", {
        local_uid: e,
        event: "gdpr optout",
        scope: "global"
    }), zd.core.utilities.callAPI("https://zdbb.net/optout")
}, zd.core.signals.executeCookieSwaps = function() {
    zd.core.signals.executePartnerSwaps(), zd.core.signals.executeInternalSwaps()
}, zd.core.gurgle = zd.core.gurgle || {}, zd.core.gurgle.placeZdbbOnLocal = function() {
    zd.core.config.gurleDomains.onExecute(zd.core.signals.sendSignal, ["/", {
        domain: zd.core.pageData.rootDomain
    }, "gurgle"])
}, zd.core.gurgle.getPageSegments = function() {
    if ("speedtest.net" == zd.core.pageData.rootDomain) window.__ZD_SEG_ = [6830], window.__ZD_CPID_ = "10a515ca045c7fa3d65ecae419bc5a61";
    else {
        var e = zd.core.gurgle.gurgleDomain + "/segments.js" + zd.core.utilities.objectToQueryString({
            url: zd.core.pageData.url
        });
        zd.core.utilities.callScript(e)
    }
}, zd.core.gurgle.complete = 0, zd.core.gurgle.info = function() {
    1 != zd.core.gurgle.complete && (!window.googletag && (window.googletag = {}, window.googletag.cmd = []), googletag = googletag || {}, googletag.cmd = googletag.cmd || [], zd.core.utilities.callAPI("https://gurgle.zdbb.net/info", function(e) {
        var r = JSON.parse(e);
        for (var t in r) switch (t) {
            case "zdbb":
                zd.core.userData.zdbb = r[t] + "", googletag.cmd.push(function() {
                    try {
                        zd.core.config.waitAdditionalTags.on() || googletag.pubads().setTargeting("zdbb", zd.core.userData.zdbb)
                    } catch (e) {
                        console.log(e)
                    }
                }), zd.core.utilities.setCookie("h_zdbb", zd.core.userData.zdbb, 180);
                break;
            case "zdid":
                zd.core.pageData.zdid = r[t] + "", googletag.cmd.push(function() {
                    try {
                        zd.core.config.waitAdditionalTags.on() || googletag.pubads().setTargeting("zdid", zd.core.pageData.zdid)
                    } catch (e) {
                        console.log(e)
                    }
                    try {
                        dataLayer = window.dataLayer = window.dataLayer || [], dataLayer.push({
                            zdid: zd.core.pageData.zdid,
                            event: "zdid"
                        })
                    } catch (e) {
                        console.log(e)
                    }
                }), window.__ZD_CPID_ = zd.core.pageData.zdid;
                break;
            case "p":
                if (zd.core.pageData.pageSegments = Array(r[t]), "speedtest.net" == zd.core.pageData.rootDomain) var o = "p";
                else var o = "p2";
                googletag.cmd.push(function() {
                    try {
                        zd.core.config.waitAdditionalTags.on() || googletag.pubads().setTargeting(o, zd.core.pageData.pageSegments)
                    } catch (e) {
                        console.log(e)
                    }
                    try {
                        dataLayer = window.dataLayer = window.dataLayer || [], dataLayer.push({
                            pValues: zd.core.pageData.pageSegments,
                            event: "pValues"
                        })
                    } catch (e) {
                        console.log(e)
                    }
                }), window.__ZD_SEG_ = zd.core.pageData.pageSegments;
                break;
            case "s":
                break;
            default:
        }
        zd.core.gurgle.complete = 1
    }, {
        url: zd.core.pageData.url
    }))
}, zd.core.gurgle.execute = function() {
    zd.core.gurgle.info()
}, zd.core.run.top = function() {
    zd.core.pageData.url = window.location.href, zd.core.pageData.pageViewId = zd.core.utilities.generateUUID(), zd.core.pageData.rootDomain = zd.core.utilities.getRootDomain(), zd.core.pageData.cmsPageId = zd.core.utilities.getCMSPageId(), zd.core.pageData.local_uid = zd.core.utilities.getLocalUId(), zd.core.pageData.referrer = zd.core.utilities.getReferrer(), zd.core.gurgle.gurgleDomain = zd.core.config.gurleDomains.on() ? "https://zdbb." + zd.core.pageData.rootDomain : zd.core.config.defaultDomains.gurgle, zd.core.signals.loggerDomain = zd.core.config.loggerDomains.on() ? "https://logger." + zd.core.pageData.rootDomain : zd.core.config.defaultDomains.logger, zd.core.signals.staticDomain = zd.core.config.bbstaticDomains.on() ? "https://bbstatic." + zd.core.pageData.rootDomain : zd.core.config.defaultDomains.static, zd.core.gurgle.execute(), zd.core.signals.mainPageViewSignal(), zd.core.run.watchAsyncBuffer()
}, zd.core.run.main = function() {
    zd.core.signals.executeDomainSpecificSignals(), zd.core.signals.executeCookieSwaps()
}, zd.core.run.finally = function() {
    zd.core.walker.executeWalker(), zd.core.injection.injectScripts(), zd.core.thirdparty.execute()
}, zd.core.run.watchAsyncBuffer = function() {
    if (window.zdcoreSignalBuffer)
        for (let e, r = 0; r < window.zdcoreSignalBuffer.length; r++) e = window.zdcoreSignalBuffer[r], zd.core.signals.sendSignal(e[0], e[1]);
    let e = [];
    e.push = function(e) {
        return zd.core.signals.sendSignal(e[0], e[1])
    }, window.zdcoreSignalBuffer = e
}, zd.core.run.loaded || (zd.core.run.loaded = !0, zd.core.run.top(), "complete" == document.readyState ? (zd.core.run.main(), zd.core.run.finally()) : document.addEventListener("readystatechange", function(e) {
    zd.core.utilities.itemInArray(e.target.readyState, ["loading", "interactive", "complete"]) && 1 > zd.core.run.count && (zd.core.run.count = 1), zd.core.utilities.itemInArray(e.target.readyState, ["interactive", "complete"]) && 2 > zd.core.run.count && (zd.core.run.main(), zd.core.run.count = 2), "complete" == e.target.readyState && 3 > zd.core.run.count && (zd.core.run.finally(), zd.core.run.count = 3)
}, !1, !1, !0));