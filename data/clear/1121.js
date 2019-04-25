  ! function(e) {
      var n = {};

      function t(r) {
          if (n[r]) return n[r].exports;
          var o = n[r] = {
              i: r,
              l: !1,
              exports: {}
          };
          return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
      }
      t.m = e, t.c = n, t.d = function(e, n, r) {
          t.o(e, n) || Object.defineProperty(e, n, {
              enumerable: !0,
              get: r
          })
      }, t.r = function(e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module"
          }), Object.defineProperty(e, "__esModule", {
              value: !0
          })
      }, t.t = function(e, n) {
          if (1 & n && (e = t(e)), 8 & n) return e;
          if (4 & n && "object" == typeof e && e && e.__esModule) return e;
          var r = Object.create(null);
          if (t.r(r), Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
              }), 2 & n && "string" != typeof e)
              for (var o in e) t.d(r, o, function(n) {
                  return e[n]
              }.bind(null, o));
          return r
      }, t.n = function(e) {
          var n = e && e.__esModule ? function() {
              return e.default
          } : function() {
              return e
          };
          return t.d(n, "a", n), n
      }, t.o = function(e, n) {
          return Object.prototype.hasOwnProperty.call(e, n)
      }, t.p = "", t(t.s = 13)
  }([function(e, n, t) {
      e.exports = t(5)
  }, function(e, n, t) {
      e.exports = t(4)
  }, , , function(e, n, t) {
      "use strict";
      t.r(n), t.d(n, "default", function() {
          return m
      });
      var r = t(0),
          o = "https://itunes.apple.com/cn/app/a-li-ba-ba/id507097717",
          i = "http://a.app.qq.com/o/simple.jsp?pkgname=com.alibaba.wireless",
          a = "https://m.1688.com/d.html",
          c = r.isIOS ? "wireless1688://" : "wireless1688://ma.m.1688.com/fromwap?tonative=",
          l = null,
          s = null,
          u = null != r.appInfo ? r.appInfo.appCode : "wap",
          p = function() {
              var e, n, t = {
                  hidden: "visibilitychange",
                  webkitHidden: "webkitvisibilitychange",
                  mozHidden: "mozvisibilitychange",
                  msHidden: "msvisibilitychange"
              };
              for (e in t)
                  if (e in document) {
                      n = t[e];
                      break
                  } return function(t) {
                  return t && document.addEventListener(n, t), !document[e]
              }
          }();
      var d = function(e, n) {
          var t = function(e) {
                  var n, t = e.split("?"),
                      r = t[0],
                      o = t[1] || "";
                  (o = decodeURIComponent(o)).indexOf("spm=") > -1 ? (n = (n = o.match(/spm=([^&=]*)/)) && n[1], o = o.replace("spm=" + n, ""), n = (n || "").split(".")) : (n = ["a262eq", "9014029"], window.goldlog && (n = window.goldlog.spm_ab.slice(0)));
                  var i = u;
                  n[1] += (n[1].indexOf("/") > -1 ? "" : "/") + "@applink_" + i;
                  for (var a = n.length; a < 4; a++) n.push(0);
                  return e = r + "?" + o + "&spm=" + n.join(".")
              }(e || "home.m.1688.com/index.htm"),
              o = "".concat(-1 == t.indexOf("?") ? "?" : "&", "tracelog=fromwap");
          if (t += o, r.isIOS) return "".concat(c).concat(t);
          t = "http://" + t;
          var i = "".concat(c).concat(encodeURIComponent(t));
          return n.useAndroidIntent && (i = i.replace("wireless1688://", "intent://")), i
      };
      var f = 1e3;

      function m() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (r.isWeChat) location.href = i;
          else if (e = e.replace(/^https?:\/\//, ""), !(r.is1688 && document.URL.indexOf(e) >= 0)) {
              var t = !1,
                  c = setTimeout(function() {
                      var e;
                      if (!n.skipDownload && !t) {
                          var i = function() {
                              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                              return r.isIOS ? o : e.androidDownloadUrl || a
                          }(n);
                          e = i, location.href = e
                      }
                  }, f);
              p(function() {
                  null != c && (clearTimeout(c), c = null, t = !0)
              });
              var u = d(e, n);
              if (r.isIOS && r.iOSVersion >= 9) return null == l && ((l = document.createElement("a")).style.display = "none", document.body.appendChild(l)), l.href = u, void l.click();
              if (null == s && ((s = document.createElement("iframe")).style.display = "none", document.body.appendChild(s)), s.setAttribute("src", u), n.forceTryLink) try {
                  null == l && ((l = document.createElement("a")).style.display = "none", document.body.appendChild(l)), l.href = u, l.click()
              } catch (e) {}
          }
      }
  }, function(e, n, t) {
      "use strict";
      t.r(n),
          function(e) {
              function r(e) {
                  return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                      return typeof e
                  } : function(e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                  })(e)
              }
              t.d(n, "isWeb", function() {
                  return o
              }), t.d(n, "isNode", function() {
                  return i
              }), t.d(n, "isWeex", function() {
                  return a
              }), t.d(n, "isReactNative", function() {
                  return c
              }), t.d(n, "isAndroid", function() {
                  return u
              }), t.d(n, "isIOS", function() {
                  return p
              }), t.d(n, "isWeChat", function() {
                  return d
              }), t.d(n, "iOSVersion", function() {
                  return f
              }), t.d(n, "detect", function() {
                  return g
              }), t.d(n, "appInfo", function() {
                  return h
              }), t.d(n, "is", function() {
                  return y
              }), t.d(n, "appEnvConstantsMap", function() {
                  return w
              }), t.d(n, "isQN", function() {
                  return v
              }), t.d(n, "is1688", function() {
                  return b
              }), t.d(n, "isTaoBao", function() {
                  return _
              }), t.d(n, "isTMall", function() {
                  return T
              }), t.d(n, "isDingTalk", function() {
                  return k
              }), t.d(n, "isAlipayMercant", function() {
                  return A
              }), t.d(n, "isAlipay", function() {
                  return E
              }), t.d(n, "isAlibabaBuyer", function() {
                  return S
              }), t.d(n, "isAlibabaSeller", function() {
                  return O
              }), t.d(n, "isRetailTrader", function() {
                  return x
              });
              var o = "object" === ("undefined" == typeof navigator ? "undefined" : r(navigator)) && ("Mozilla" === navigator.appCodeName || "Gecko" === navigator.product),
                  i = void 0 !== e && !(!e.versions || !e.versions.node),
                  a = "function" == typeof callNative,
                  c = "undefined" != typeof __fbBatchedBridgeConfig,
                  l = function(e) {
                      return null == e && "undefined" != typeof window && (e = window.navigator.userAgent), e
                  },
                  s = l(),
                  u = !1,
                  p = !1,
                  d = !1,
                  f = null;
              if (s) {
                  u = /[Aa]ndroid/.test(s), p = /iPhone|iPad|iPod/.test(s), d = /MicroMessenger/.test(s);
                  var m = /\(i[^;]+;( U;)? CPU.+Mac OS X.+Version\/(\d+)/.exec(s);
                  f = m && m[2]
              }
              var g = function(e) {
                      e = l(e);
                      var n = /-PD$/;
                      if (a) {
                          var t = navigator.appName,
                              r = navigator.appVersion,
                              o = n.test(t);
                          return {
                              appCode: t,
                              version: r,
                              isPhone: !o,
                              isPad: o
                          }
                      }
                      var i = /AliApp\(([^\/]+)\/([^\/]+)\)/.exec(e);
                      if (i && i[1] && i[2]) {
                          var c = i[1],
                              s = i[2],
                              u = n.test(c);
                          return {
                              appCode: c,
                              version: s,
                              isPhone: !u,
                              isPad: u
                          }
                      }
                      return null
                  },
                  h = g(),
                  y = function(e, n) {
                      return null == n && (n = s), !!h && h.appCode === e
                  },
                  w = {
                      QN: "isQN",
                      1688: "is1688",
                      TB: "isTaoBao",
                      TM: "isTMall",
                      DingTalk: "isDingTalk",
                      AM: "isAlipayMercant",
                      AP: "isAlipay",
                      EA: "isAlibabaBuyer",
                      AS: "isAlibabaSeller",
                      RetailTrader: "isRetailTrader"
                  },
                  v = y("QN"),
                  b = y("1688"),
                  _ = y("TB"),
                  T = y("TM"),
                  k = y("DingTalk"),
                  A = y("AM"),
                  E = y("AP"),
                  S = y("EA"),
                  O = y("AS"),
                  x = y("RetailTrader")
          }.call(this, t(6))
  }, function(e, n) {
      var t, r, o = e.exports = {};

      function i() {
          throw new Error("setTimeout has not been defined")
      }

      function a() {
          throw new Error("clearTimeout has not been defined")
      }

      function c(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
          try {
              return t(e, 0)
          } catch (n) {
              try {
                  return t.call(null, e, 0)
              } catch (n) {
                  return t.call(this, e, 0)
              }
          }
      }! function() {
          try {
              t = "function" == typeof setTimeout ? setTimeout : i
          } catch (e) {
              t = i
          }
          try {
              r = "function" == typeof clearTimeout ? clearTimeout : a
          } catch (e) {
              r = a
          }
      }();
      var l, s = [],
          u = !1,
          p = -1;

      function d() {
          u && l && (u = !1, l.length ? s = l.concat(s) : p = -1, s.length && f())
      }

      function f() {
          if (!u) {
              var e = c(d);
              u = !0;
              for (var n = s.length; n;) {
                  for (l = s, s = []; ++p < n;) l && l[p].run();
                  p = -1, n = s.length
              }
              l = null, u = !1,
                  function(e) {
                      if (r === clearTimeout) return clearTimeout(e);
                      if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                      try {
                          r(e)
                      } catch (n) {
                          try {
                              return r.call(null, e)
                          } catch (n) {
                              return r.call(this, e)
                          }
                      }
                  }(e)
          }
      }

      function m(e, n) {
          this.fun = e, this.array = n
      }

      function g() {}
      o.nextTick = function(e) {
          var n = new Array(arguments.length - 1);
          if (arguments.length > 1)
              for (var t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
          s.push(new m(e, n)), 1 !== s.length || u || c(f)
      }, m.prototype.run = function() {
          this.fun.apply(null, this.array)
      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function(e) {
          return []
      }, o.binding = function(e) {
          throw new Error("process.binding is not supported")
      }, o.cwd = function() {
          return "/"
      }, o.chdir = function(e) {
          throw new Error("process.chdir is not supported")
      }, o.umask = function() {
          return 0
      }
  }, , , , , , , function(e, n, t) {
      "use strict";
      t.r(n);
      var r = /__debug_1688_wap__/.test(location.href) ? {
              log: console.log.bind(console),
              info: console.info.bind(console),
              warn: console.warn.bind(console),
              error: console.error.bind(console)
          } : {
              log: function() {},
              info: function() {},
              warn: function() {},
              error: function() {}
          },
          o = t(1),
          i = t.n(o),
          a = "";

      function c() {
          return a
      }

      function l(e, n, t) {
          return n in e ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[n] = t, e
      }
      a = /offer\/\d*\.html/.test(location.href) ? "offer_detail" : /com\/offer_search\/[^\/]*\.html/.test(location.href) ? "offer_search" : /com\/winport\/[^\/]*\.html/.test(location.href) ? "shop" : /winport\/company/i.test(location.href) ? "winport-company" : /com\/$|com\/[^a-zA-Z]/.test(location.href) ? "wap-home" : /com\/shengyijing/.test(location.href) ? "shengyijing" : "unknown-other";
      var s = c();

      function u(e) {
          for (var n = e.split("|"), t = 0; t < n.length; t++) {
              var r = document.querySelector(n[t]);
              if (r) return r
          }
      }
      var p = function(e) {
              try {
                  return e.banners.map(function(e) {
                      return function(e) {
                          for (var n = 1; n < arguments.length; n++) {
                              var t = null != arguments[n] ? arguments[n] : {},
                                  r = Object.keys(t);
                              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                                  return Object.getOwnPropertyDescriptor(t, e).enumerable
                              }))), r.forEach(function(n) {
                                  l(e, n, t[n])
                              })
                          }
                          return e
                      }({}, e, {
                          start: new Date(e.start).getTime(),
                          end: new Date(e.end).getTime()
                      })
                  })
              } catch (e) {
                  console.log(e)
              }
              return null
          },
          d = function(e) {
              var n = "";
              return /MicroMessenger/i.test(navigator.userAgent) && (n = "&from=wechat"), "https://show.1688.com/unilink/common.html?go=".concat(encodeURIComponent(e)).concat(n)
          },
          f = function(e, n) {
              r.log("handleSingleBanner", e, n);
              var t = document.createElement("a");
              if (t.className = "banner-and-poplayer", t.innerHTML = "\n    <img src=".concat(n.image, ' style="width: 100%;" />\n  '), n.openInUnilink ? (goldlog.record("/1688-wireless.wap_call_app.wap_banner", "EXP", "type=unilink&sence=".concat(s), "GET"), t.href = d(n.link || location.href)) : n.openInApp ? (goldlog.record("/1688-wireless.wap_call_app.wap_banner", "EXP", "type=openapp&sence=".concat(s), "GET"), t.onclick = function() {
                      return i()(n.link || location.href, {
                          forceTryLink: /android/i.test(navigator.userAgent) && /chrome/i.test(navigator.userAgent)
                      })
                  }) : (goldlog.record("/1688-wireless.wap_call_app.wap_banner", "EXP", "type=link&sence=".concat(s), "GET"), t.href = n.link || "javascript:;"), t.setAttribute("style", "width: 100%; display: block;line-height: 0;"), n.linkStyle) {
                  var o = document.createElement("style");
                  o.innerHTML = n.linkStyle, document.body.appendChild(o)
              }
              n.insertScript ? (r.log("custom script", t, e, n), new Function("a", "container", "banner", "transToUnilink", n.insertScript)(t, e, n, d)) : (e.parentNode || e.parentElement).insertBefore(t, e)
          };

      function m(e, n, t) {
          return n in e ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[n] = t, e
      }
      var g, h = function(e) {
              try {
                  return e.poplayer.map(function(e) {
                      return function(e) {
                          for (var n = 1; n < arguments.length; n++) {
                              var t = null != arguments[n] ? arguments[n] : {},
                                  r = Object.keys(t);
                              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                                  return Object.getOwnPropertyDescriptor(t, e).enumerable
                              }))), r.forEach(function(n) {
                                  m(e, n, t[n])
                              })
                          }
                          return e
                      }({}, e, {
                          start: new Date(e.start).getTime(),
                          end: new Date(e.end).getTime()
                      })
                  })
              } catch (e) {
                  console.log(e)
              }
              return null
          },
          y = {
              times: null,
              getTimes: function(e) {
                  if (!y.times) {
                      var n = null;
                      (n = (n = (" " + document.cookie).match(/[; ]?popTimes=([^;]*)/)) && n[1]) ? (y.times = n && n.split(",") || [], y.times = y.times.map(function(e) {
                          var n = e.split(":");
                          return {
                              id: n[0],
                              times: +n[1]
                          }
                      })) : y.times = []
                  }
                  for (var t = 0; t < y.times.length; t++)
                      if (y.times[t].id == e) return y.times[t].times;
                  return 0
              },
              count: function(e) {
                  y.getTimes();
                  for (var n = !1, t = 0; t < y.times.length; t++)
                      if (y.times[t].id == e) {
                          y.times[t].times = y.times[t].times + 1, n = !0;
                          break
                      } n || y.times.push({
                      id: e,
                      times: 1
                  });
                  var r = y.times.map(function(e) {
                          return "".concat(e.id, ":").concat(e.times)
                      }).join(","),
                      o = new Date,
                      i = new Date(o.getFullYear(), o.getMonth(), o.getDate() + 1, 0, 0, 0);
                  document.cookie = "popTimes=".concat(r, "; domain=.1688.com; path=/; expires=").concat(i.toUTCString())
              }
          },
          w = function(e) {
              if (window.cookieHelper = y, !(e.times <= y.getTimes(e.id))) {
                  y.count(e.id);
                  var n = document.createElement("div"),
                      t = document.createElement("div");
                  t.innerHTML = '\n    <img src="https://gw.alicdn.com/tfs/TB1q0IgvTmWBKNjSZFBXXXxUFXa-55-55.png" style="width: 30px;height: 30px; position: fixed; right: 30px; top: 30px;" />\n    <a style="display: block;">\n      <img src="'.concat(e.image, '" style="width: 100%;" />\n    </a>\n  ');
                  var r, o = t.querySelector("a"),
                      i = c();
                  e.openInUnilink ? (goldlog.record("/1688-wireless.wap_call_app.wap_poplayer", "EXP", "type=unilink&sence=".concat(i), "GET"), o.href = (r = e.link || location.href, "https://show.1688.com/unilink/common.html?go=".concat(encodeURIComponent(r)))) : e.openInApp ? (goldlog.record("/1688-wireless.wap_call_app.wap_poplayer", "EXP", "type=openapp&sence=".concat(i), "GET"), o.onclick = function() {
                      return appJump(e.link || location.href)
                  }) : (goldlog.record("/1688-wireless.wap_call_app.wap_poplayer", "EXP", "type=link&sence=".concat(i), "GET"), o.href = e.link || "javascript:;"), e.top = e.top || "30%", e.width = e.width || "50%";
                  var a = +/\d*/.exec(e.width)[0],
                      l = "margin-left: -".concat(a / 2).concat(/%/.test(e.width) ? "%" : "px", ";");
                  t.style = "\n    display: block;\n    top: ".concat(e.top, ";\n    width: ").concat(e.width, ";\n    position: relative;\n    left: 50%;\n    ").concat(l, "\n  "), n.style = "\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 99999;\n  ", n.onclick = function() {
                      n.remove()
                  }, n.appendChild(t), document.body.appendChild(n)
              }
          };
      if (/INJECT_ERUDA/.test(location.href)) try {
          var v = document.createElement("script");
          v.type = "text/javascript", v.innerHTML = "var script = document.createElement('script');script.type = 'text/javascript';script.src = '//cdn.jsdelivr.net/npm/eruda';script.onload = function () { eruda.init() };document.body.appendChild(script);", document.body.appendChild(v)
      } catch (e) {}
      window.wap_banner_jsonp_callback = function(e) {
          try {
              e = JSON.parse(e.content.data[0].versionContent), window.WAP_BANNER_AND_POPLAYER_JSON = e,
                  function(e) {
                      if (/AffApp/i.test(navigator.userAgent)) goldlog.record("/1688-wireless.wap_call_app.wap_banner", "EXP", "type=UA_AffApp&sence=".concat(s), "GET");
                      else {
                          /UCBrowser/i.test(navigator.userAgent) ? goldlog.record("/1688-wireless.wap_call_app.wap_banner", "EXP", "type=UA_UCBrowser&sence=".concat(s), "GET") : /MicroMessenger/i.test(navigator.userAgent) ? goldlog.record("/1688-wireless.wap_call_app.wap_banner", "EXP", "type=UA_Wechat&sence=".concat(s), "GET") : /AliApp/i.test(navigator.userAgent) ? goldlog.record("/1688-wireless.wap_call_app.wap_banner", "EXP", "type=UA_AliApp&sence=".concat(s), "GET") : goldlog.record("/1688-wireless.wap_call_app.wap_banner", "EXP", "type=UA_Other&sence=".concat(s), "GET");
                          var n, t, o = p(e);
                          if (o) {
                              r.log(JSON.stringify(o, null, 2)), o.sort(function(e, n) {
                                  return e.url === n.url ? e.querySelector === n.querySelector ? e.index < n.index : e.querySelector < n.querySelector : e.url > n.url
                              }), r.log("---- AFTER SORT -----"), r.log(JSON.stringify(o, null, 2));
                              for (var i = {}, a = 0; a < o.length; a++) {
                                  var c = o[a],
                                      l = u(c.querySelector),
                                      d = Date.now();
                                  if (l && c.image && c.start < d && d < c.end && (n = c.ua, t = void 0, 0 === (t = n.split("||")).length || t.some(function(e) {
                                          return new RegExp(e, "i").test(navigator.userAgent)
                                      })) && new RegExp(c.url || ".*").test(location.href) && new RegExp(c.cookie || ".*").test(document.cookie)) {
                                      var m = c.url + "^" + c.querySelector;
                                      if (i[m]) {
                                          r.log("banner skip: ", c);
                                          continue
                                      }
                                      r.log("banner insert: ", c), i[m] = !0, f(l, c)
                                  } else r.log("banner else: ", c)
                              }
                          }
                      }
                  }(e),
                  function(e) {
                      var n = h(e);
                      if (n) {
                          r.log(JSON.stringify(n, null, 2)), n.sort(function(e, n) {
                              return e.url === n.url ? e.index < n.index : e.url > n.url
                          }), r.log("---- AFTER SORT -----"), r.log(JSON.stringify(n, null, 2));
                          for (var t = {}, o = 0; o < n.length; o++) {
                              var i = n[o],
                                  a = Date.now();
                              if (i.image && i.start < a && a < i.end && new RegExp(i.ua || ".*").test(navigator.userAgent) && new RegExp(i.url || ".*").test(location.href) && new RegExp(i.cookie || ".*").test(document.cookie)) {
                                  var c = i.url;
                                  if (t[c]) {
                                      r.log("pop skip: ", i);
                                      continue
                                  }
                                  return r.log("pop insert: ", i), t[c] = !0, void w(i)
                              }
                              r.log("pop else: ", i)
                          }
                      }
                  }(e),
                  function(e) {
                      for (var n = e.scripts, t = 0; t < n.length; t++)
                          if (new RegExp(n[t].regexp || ".*").test(location.href)) {
                              var r = document.createElement("script");
                              r.src = n[t].url, document.body.appendChild(r)
                          }
                  }(e)
          } catch (e) {
              console.log(e)
          }
      }, (g = document.createElement("script")).async = !0, /__debug_1688_wap_GRAY__/.test(location.href) ? g.src = "https://dcms.1688.com/open/query.json?app=DCMS&dataId=236&resourceId=634157&callback=wap_banner_jsonp_callback" : g.src = "https://dcms.1688.com/open/query.json?app=DCMS&dataId=236&resourceId=633298&callback=wap_banner_jsonp_callback", setTimeout(function() {
          document.body.appendChild(g)
      }, 100)
  }]);