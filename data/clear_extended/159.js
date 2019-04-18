var issuuCookieConsent = function(i) {
    "use strict";
    var e = ".icc-Root{min-width:320px;position:fixed;background:#f9f9f9;width:100%;padding:18px;bottom:0;border-top:3px solid #006fe9;transition:transform 250ms ease-out;transition-delay:200ms;z-index:3}.icc-Root.is-dismissed{transform:scaleY(0);transform-origin:bottom}.icc-Root.is-dismissed>*{transition:opacity 250ms ease-in-out;opacity:0}.icc-WidthLimiter{max-width:1300px;margin:0 auto}@media (min-width: 750px){.icc-WidthLimiter{display:flex;align-items:center;justify-content:space-between}}.icc-Message{display:flex;align-items:flex-start}.icc-Actions{display:flex;justify-content:center;flex-shrink:0}@media (min-width: 400px){.icc-Actions{justify-content:flex-start;margin-left:50px}}@media (max-width: 750px){.icc-Actions{margin-top:12px}}@media (max-width: 350px){.icc-Actions{flex-wrap:wrap-reverse}}.icc-Icon{border:2px solid #006fe9;border-radius:100%;width:20px;color:#006fe9;height:20px;display:flex;justify-content:center;font-weight:bold;align-items:center;font-size:0.9em;box-shadow:0px 0px 0px 6px rgba(0,111,233,0.25);margin:6px 24px 6px 6px;flex-shrink:0}\n",
        t = function() {
            try {
                return localStorage.getItem("fe-microservice-cookie-consent/dismissed")
            } catch (i) {
                return !1
            }
        },
        s = function() {
            try {
                localStorage.setItem("fe-microservice-cookie-consent/dismissed", !0)
            } catch (i) {}
        },
        n = function() {
            return document.cookie.match(/^(.*;)?\s*site.model.token\s*=\s*[^;]+(.*)?$/)
        };
    var o = function() {
        if (!t() && !n()) {
            var i = document.createElement("style");
            i.appendChild(document.createTextNode("")), i.innerHTML = e, document.head.appendChild(i);
            var o = document.createElement("div");
            o.className = "icc-Root ixu-cascading-base ixu-cascading-typography ixu-cascading-fluid-typography", o.innerHTML = '\n        <div class="icc-WidthLimiter">\n            <div class="icc-Message">\n                <span class="icc-Icon" aria-hidden="true">i</span>\n                <p class="ixu-paragraph ixu-paragraph--bold">\n                    Our website uses cookies to store your settings, recommend content, target ads and gather statistics. This information is shared with 3rd parties. By using our site, you agree to our use of cookies.\n                </p>\n            </div>\n            <div class="icc-Actions">\n                <a class="ixu-button ixu-button--discreet" href="/legal/cookies">Learn More</a>\n                <button class="ixu-button js-icc-dismiss" style="white-space: nowrap;">I understand</button>\n            </div>\n        </div>\n    ', document.body.appendChild(o);
            var c = function() {
                s(), o.classList.add("is-dismissed"), o.addEventListener("transitionend", function(i) {
                    i.target === o && document.body.removeChild(o)
                }, !1)
            };
            return document.querySelector(".js-icc-dismiss").addEventListener("click", c, !1), {
                dismissConsent: c
            }
        }
    }();
    return i.PUBLIC_API = o, i
}({});