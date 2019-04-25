(window.webpackJsonp = window.webpackJsonp || []).push([
    [135], {
        2587: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = r(a(1)),
                n = r(a(0)),
                d = r(a(80));

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = a(2290),
                u = function(e) {
                    var t = e.slotMethod,
                        a = e.dataId;
                    return o.default.createElement("div", {
                        className: l.container
                    }, o.default.createElement(d.default, {
                        id: a,
                        slot: "promo-breaker-cnbc",
                        clsName: l.container,
                        slotMethod: t
                    }))
                };
            u.propTypes = {
                slotMethod: n.default.string,
                dataId: n.default.oneOfType([n.default.string, n.default.number]).isRequired
            }, u.defaultProps = {
                slotMethod: "insertComponent"
            }, t.default = u
        }
    }
]);