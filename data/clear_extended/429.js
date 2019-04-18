! function(e, t) {
    var n = "undefined" != typeof t.jQuery && t.jQuery;
    t.ReactRailsUJS = {
        CLASS_NAME_ATTR: "data-react-class",
        PROPS_ATTR: "data-react-props",
        findDOMNodes: function(i) {
            var o, r;
            switch (typeof i) {
                case "undefined":
                    o = "[" + t.ReactRailsUJS.CLASS_NAME_ATTR + "]", r = e;
                    break;
                case "object":
                    o = "[" + t.ReactRailsUJS.CLASS_NAME_ATTR + "]", r = i;
                    break;
                case "string":
                    o = i + "[" + t.ReactRailsUJS.CLASS_NAME_ATTR + "], " + i + " [" + t.ReactRailsUJS.CLASS_NAME_ATTR + "]", r = e
            }
            return n ? n(o, r) : r.querySelectorAll(o)
        },
        getConstructor: function(e) {
            var n;
            return n = t[e], n || (n = eval.call(t, e)), n && n["default"] && (n = n["default"]), n
        },
        mountComponents: function(e) {
            for (var n = t.ReactRailsUJS.findDOMNodes(e), i = 0; i < n.length; ++i) {
                var o = n[i],
                    r = o.getAttribute(t.ReactRailsUJS.CLASS_NAME_ATTR),
                    s = this.getConstructor(r),
                    a = o.getAttribute(t.ReactRailsUJS.PROPS_ATTR),
                    l = a && JSON.parse(a);
                if ("undefined" == typeof s) {
                    var c = "Cannot find component: '" + r + "'";
                    console && console.log && console.log("%c[react-rails] %c" + c + " for element", "font-weight: bold", "", o);
                    var u = new Error(c + ". Make sure your component is globally available to render.");
                    throw u
                }
                ReactDOM.render(React.createElement(s, l), o)
            }
        },
        unmountComponents: function(e) {
            for (var n = t.ReactRailsUJS.findDOMNodes(e), i = 0; i < n.length; ++i) {
                var o = n[i];
                ReactDOM.unmountComponentAtNode(o)
            }
        }
    }
}(document, window),
function(e, t) {
    t.ReactRailsUJS.Turbolinks = {
        setup: function() {
            ReactRailsUJS.handleEvent("turbolinks:load", function() {
                t.ReactRailsUJS.mountComponents()
            }), ReactRailsUJS.handleEvent("turbolinks:before-render", function() {
                t.ReactRailsUJS.unmountComponents()
            })
        }
    }
}(document, window),
function(e, t) {
    t.ReactRailsUJS.TurbolinksClassic = {
        setup: function() {
            ReactRailsUJS.handleEvent(Turbolinks.EVENTS.CHANGE, function() {
                t.ReactRailsUJS.mountComponents()
            }), ReactRailsUJS.handleEvent(Turbolinks.EVENTS.BEFORE_UNLOAD, function() {
                t.ReactRailsUJS.unmountComponents()
            })
        }
    }
}(document, window),
function(e, t) {
    t.ReactRailsUJS.TurbolinksClassicDeprecated = {
        setup: function() {
            Turbolinks.pagesCached(0), ReactRailsUJS.handleEvent("page:change", function() {
                t.ReactRailsUJS.mountComponents()
            }), ReactRailsUJS.handleEvent("page:receive", function() {
                t.ReactRailsUJS.unmountComponents()
            })
        }
    }
}(document, window),
function(e, t) {
    t.ReactRailsUJS.pjax = {
        setup: function() {
            ReactRailsUJS.handleEvent("ready", function() {
                t.ReactRailsUJS.mountComponents()
            }), ReactRailsUJS.handleEvent("pjax:end", function(e) {
                t.ReactRailsUJS.mountComponents(e.target)
            }), ReactRailsUJS.handleEvent("pjax:beforeReplace", function(e) {
                t.ReactRailsUJS.unmountComponents(e.target)
            })
        }
    }
}(document, window),
function(e, t) {
    var n = "undefined" != typeof t.jQuery && t.jQuery;
    t.ReactRailsUJS.Native = {
        setup: function() {
            n ? n(function() {
                t.ReactRailsUJS.mountComponents()
            }) : "addEventListener" in t ? e.addEventListener("DOMContentLoaded", function() {
                t.ReactRailsUJS.mountComponents()
            }) : t.attachEvent("onload", function() {
                t.ReactRailsUJS.mountComponents()
            })
        }
    }
}(document, window),
function(e, t) {
    var n = "undefined" != typeof t.jQuery && t.jQuery;
    n ? ReactRailsUJS.handleEvent = function(t, i) {
        n(e).on(t, i)
    } : ReactRailsUJS.handleEvent = function(t, n) {
        e.addEventListener(t, n)
    }, "undefined" != typeof Turbolinks && Turbolinks.supported ? "undefined" != typeof Turbolinks.EVENTS ? ReactRailsUJS.TurbolinksClassic.setup() : "undefined" != typeof Turbolinks.controller ? ReactRailsUJS.Turbolinks.setup() : ReactRailsUJS.TurbolinksClassicDeprecated.setup() : n && "function" == typeof n.pjax ? ReactRailsUJS.pjax.setup() : ReactRailsUJS.Native.setup()
}(document, window);