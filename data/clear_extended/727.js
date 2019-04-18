(window.webpackJsonp = window.webpackJsonp || []).push([
    [131], {
        2573: function(e, a, r) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.FourUp = void 0;
            var t = i(r(3)).default || function(e) {
                    for (var a = 1; a < arguments.length; a++) {
                        var r = arguments[a];
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
                    }
                    return e
                },
                o = i(r(1)),
                u = i(r(0)),
                d = i(r(21)),
                n = i(r(376)),
                l = i(r(699));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = r(2267),
                c = function(e) {
                    var a = e.data,
                        r = e.dataId,
                        u = e.isProUser;
                    if (!a || !Array.isArray(a.assets)) return o.default.createElement(d.default, {
                        data: {
                            error: "FourUp query came back as null"
                        },
                        errorSource: "FourUp"
                    });
                    var i = a.assets.map(function(e) {
                        var a = {
                            id: e.id,
                            title: e.headline,
                            type: e.type,
                            brand: e.brand,
                            isPro: Boolean(e.premium),
                            image: (e.promoImage || {}).url,
                            url: e.url,
                            formattedTimeStamp: e.dateLastPublishedSixHr
                        };
                        return "webresource" === e.type ? a : t({}, a, {
                            eyebrow: (e.section || {}).eyebrow || "",
                            eyebrowUrl: (e.section || {}).url
                        })
                    });
                    return o.default.createElement("div", {
                        id: r,
                        className: s.container
                    }, o.default.createElement("div", {
                        className: s.contentContainer
                    }, o.default.createElement(n.default, {
                        brand: a.brand,
                        cards: i,
                        layoutType: "four-up",
                        dataId: "FourUp-Layout-" + r
                    })), !u && o.default.createElement(l.default, {
                        dataId: "BoxInline-" + r,
                        className: s.adContainer
                    }))
                };
            c.defaultProps = {
                dataId: 0
            }, c.propTypes = {
                data: u.default.object.isRequired,
                dataId: u.default.oneOfType([u.default.string, u.default.number]),
                isProUser: u.default.bool.isRequired
            }, a.FourUp = c, a.default = c
        }
    }
]);