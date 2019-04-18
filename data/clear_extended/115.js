/* common */
(function(a) {
    function c(a, b, c) {
        var d = a.val().trim().toLowerCase(),
            f, g = a[0];
        a.unbind("blur").blur(function() {
            if (context.ieVersion) {
                this.validity = {
                    valid: !0
                };
                return
            }
            var g = a.val().trim(),
                i = this.validity;
            i.valid || d && g == d ? b && g != d && (c || !c && g != f) ? b() : h(a) : g != f && (i.valueMissing ? e(a, a.attr("data-err-req-message"), !0, null, !0) : i.patternMismatch ? e(a, a.attr("data-err-patn-message"), !0, null, !0) : i.customError && (b ? b() : h(a))), f = g
        })
    }

    function d(b, c, f) {
        if (b.hasClass("processing")) return;
        if (context.ieVersion) return c && c();
        var g = b[0].elements,
            h = g.length,
            i = 0,
            j, k, l, m;
        for (; i < h; i++) {
            l = g[i], m = a(l), j = l.validity;
            if (!l.disabled && l.willValidate && !j.valid) {
                k = m.attr("data-err-req-message");
                if (j.valueMissing) {
                    e(m, k, !0);
                    return
                }
                if (j.patternMismatch) {
                    e(m, m.attr("data-err-patn-message") || k, !0);
                    return
                }
                if (j.typeMismatch) {
                    e(m, m.attr("data-err-type-message") || k, !0);
                    return
                }
                if (j.stepMismatch) {
                    e(m, m.attr("data-err-step-message") || k, !0);
                    return
                }
                if (j.rangeOverflow) {
                    e(m, m.attr("data-err-overflow-message") || k, !0);
                    return
                }
                if (j.rangeUnderflow) {
                    e(m, m.attr("data-err-underflow-message") || k, !0);
                    return
                }
                if (l.validity.customError) {
                    f ? f(m, function() {
                        d(b, c)
                    }) : m.focus();
                    return
                }
            }
        }
        c && c()
    }

    function e(a, c, d, e, f) {
        var h = a[0];
        e = e || a.siblings(".tipHolder"), !d && h.setCustomValidity && h.setCustomValidity(c || a.attr("data-err-req-message")), a.addClass("error"), f || a.focus(), b = c, e && e.length && g(e).tip("show")
    }

    function f() {
        return b
    }

    function g(a) {
        return a.tip({
            title: f,
            trigger: "manual",
            classes: "error",
            placement: "inside top",
            allowHtml: !0
        })
    }

    function h(a, b) {
        var c = a.removeClass("error")[0];
        c.setCustomValidity && c.setCustomValidity(""), b = b || a.siblings(".tipHolder"), b && b.length && b.find(".tip").remove()
    }

    function i(a, b, c) {
        c = c || a.serialize(), c == b ? (a.removeClass("dirty updated"), a.find("button[type=submit]").attr("disabled", "disabled")) : (a.addClass("dirty"), a.find("button[type=submit]").removeAttr("disabled"))
    }

    function j(b, c, d) {
        var f = b.serialize(),
            g = b[0].elements,
            h, i = 0;
        len = g.length;
        for (; i < len; i++) h = g[i], h.disabled ? h.setAttribute("orgDisabled", "1") : g[i].setAttribute("disabled", "disabled");
        a.ajax({
            url: b.attr("action"),
            type: "POST",
            data: f,
            success: function(a) {
                k(g);
                var d = c && c(a);
                d != 0 && l(b, d)
            },
            error: function(c) {
                var f, h;
                try {
                    f = a.parseJSON(c.responseText) || {}
                } catch (i) {
                    f = {}
                }
                b.find("button[type=submit]").removeAttr("disabled"), k(g), d ? (h = d(f), h && h.length ? e(h, f.message) : h === !1 && m(b, f.message)) : m(b, f.message)
            },
            complete: function() {
                b.removeClass("processing")
            }
        }), b.addClass("processing").removeClass("updated error"), b.find("button[type=submit]").attr("disabled", "disabled")
    }

    function k(a) {
        var b, c, d = a.length;
        for (c = 0; c < d; c++) b = a[c], b.getAttribute("orgDisabled") === "1" ? b.removeAttribute("orgDisabled") : a[c].removeAttribute("disabled")
    }

    function l(a, b) {
        a.addClass("updated").removeClass("dirty").find("button[type=submit]").attr("disabled", "disabled"), b = b || "Your settings successfully saved.", Myspace.successDialog(b)
    }

    function m(a, b) {
        b = b || "An unknown error has occurred, please try again.", a.addClass("error").find(".errorMessage").text(b)
    }

    function n(b) {
        var c = b.elements,
            d = c.length,
            e = 0,
            f = a(b);
        f.removeClass("dirty error").find("button[type=submit]").attr("disabled", "disabled"), f.find(".errorMessage").text("");
        for (; e < d; e++) h(a(c[e]))
    }
    var b = "";
    Myspace.formHelper = {
        html5ValidationOnChange: c,
        validateOnSubmit: d,
        setErrorMessage: e,
        clearError: h,
        checkDataModified: i,
        doSubmit: j,
        reset: n
    }
})(jQuery);
(function(a) {
    function c() {
        b || (b = new Myspace.termsOfService), b.getTermsOfServiceData()
    }

    function d() {
        return context.features.isGDPRDialogEnabled
    }

    function e() {
        d() ? (!Cookies.eucookie || !Cookies.eucookie.values.v) && ["pagesvideoprivacypolicy", "pagestermsofservice", "pageseeaprivacypolicy"].indexOf(context.pfc) === -1 && (comm.send("showSiteAlert", {
            text: 'As a result of a server migration project, any photos, videos, and audio files you uploaded more than three years ago may no longer be available on or from Myspace. We apologize for the inconvenience. If you would like more information, please contact our Data Protection Officer at <a href="mailto:DPO@myspace.com" target="_blank">DPO@myspace.com</a>.',
            action: "cookieNotice",
            label: "eucookie",
            "class": "eucookie"
        }), c()) : context.termsOfService && context.termsOfService.showTOSBOX && c()
    }
    var b;
    Myspace.termsOfService = function() {
        function h() {
            var b = d() ? "/ajax/euTermsOfService" : "/ajax/termsOfService";
            g ? i(g) : a.ajax({
                url: b,
                type: "POST",
                dataType: "json"
            }).done(function(b) {
                b.html ? (a(e).remove(), g = b.html, i(g)) : comm.stopListening("spaceway.page.complete", c)
            }).fail(function() {
                console.log("Error occurred, while getting privacy policy."), comm.stopListening("spaceway.page.complete", c)
            })
        }

        function i(b, c) {
            a(e) && a(e).remove(), a(b).appendTo("body"), f.addClass("scrollLocked"), a("#noConfirm", a(e)).click(function() {
                a("#noticeBoard", a(e)).addClass("confirmNotAcceptTOS");
                var b = d() ? "/pages/eeaprivacy" : "/pages/privacy";
                Myspace.Confirm({
                    text: '<h4 class="confirmNotAcceptTOS">Are you sure?</h4><p class="confirmNotAcceptTOS">You must agree to the new <a href="/pages/terms" target="_blank">Terms of Use Agreement</a>, <a href="' + b + '" target="_blank">Privacy Policy</a> and <a href="/pages/videoprivacy" target="_blank">Video Privacy Policy</a> to use the Myspace Services.</p>',
                    no: {
                        text: "Go Back",
                        onClick: function() {
                            a("#noticeBoard", a(e)).removeClass("confirmNotAcceptTOS")
                        }
                    },
                    yes: {
                        text: "Sign Out",
                        onClick: function() {
                            window.location.href = "/signout"
                        }
                    }
                })
            }), a('input[type="checkbox"] + span, input[type="checkbox"]', a(e)).click(function() {
                setTimeout(function() {
                    k() ? a("#confirm", a(e)).removeClass("disabled") : a("#confirm", a(e)).addClass("disabled")
                })
            }), a("#confirm", a(e)).click(function() {
                k() ? (d() && (Cookies.eucookie = new Cookie("eucookie"), Cookies.eucookie.values = {
                    shown: "true",
                    v: 1
                }, Cookies.save(Cookies.eucookie, document.domain, (new Date).addDays(180)), a(e).hide()), (c || context.loginId > -1) && l("yes", c)) : j()
            })
        }

        function j() {
            Myspace.Confirm({
                text: "You must agree to the terms by clicking the checkboxes.",
                yes: {
                    text: "OK"
                },
                no: !1
            })
        }

        function k() {
            var b = a('input[type="checkbox"]', a(e)).map(function(b, c) {
                return a(c).prop("checked")
            });
            return a.makeArray(b).every(function(a) {
                return a
            })
        }

        function l(b, d) {
            a.ajax({
                url: "/ajax/acceptTermsOfService",
                type: "POST",
                data: {
                    confirm: b
                },
                dataType: "json"
            }).done(function(b) {
                f.removeClass("scrollLocked"), b.success ? (a(e).remove(), d ? comm.send("signin") : comm.stopListening("spaceway.page.complete", c)) : d ? comm.send("signin") : (a(e).hide(), comm.stopListening("spaceway.page.complete", c))
            }).fail(function() {
                f.removeClass("scrollLocked"), d ? comm.send("signin") : (a(e).hide(), comm.stopListening("spaceway.page.complete", c))
            })
        }
        var e = "#termsOfService",
            f = a("body"),
            g;
        return {
            showTermsOfService: i,
            getTermsOfServiceData: h
        }
    }, comm.listen("spaceway.page.complete", function() {
        e()
    }, !0), e()
})(jQuery);
(function(a) {
    function c(a) {
        return a = (a || "").toLowerCase(), b[a] || {
            width: 800,
            height: 800
        }
    }

    function d(b, d) {
        function j() {
            if (!h || h.closed) {
                d.onClick();
                var b = "/thirdpartyauth/" + f + "/" + d.action + "?ssi=" + (a("#staySignedIn").prop("checked") ? 1 : 0),
                    e = c(f);
                h = k(b, e.width, e.height, "Third Party Authentication")
            }
            return !1
        }

        function k(a, b, c, d) {
            var e = screen.width / 2 - b / 2,
                f = screen.height / 2 - c / 2;
            return window.open(a, context.ieVersion ? "" : d, "menubar=no,toolbar=no,status=no,width=" + b + ",height=" + c + ",toolbar=no,left=" + e + ",top=" + f)
        }
        var e = {
            action: "login",
            onClick: a.noop
        };
        d = a.extend({}, e, d);
        var f = b.data("provider"),
            h = null;
        if (f === "myspaceoriginal") {
            var i = b.data("onBack");
            b.click(function() {
                d.onClick(), g(i)
            });
            return
        }
        b.click(j)
    }

    function g(b) {
        f = b;
        var c, d, g;
        e ? (c = e.$root.addClass("checking"), c.find("input").val(""), c.children(".tipHolder").tip("hide")) : (c = a("<div class='lightbox checking' id='myspaceoriginal'><p class='tipHolder'></p></div>"), d = a("<form action='/thirdpartyauth/myspaceoriginal/login' method='POST' name='myspaceoriginal_login' id='myspaceoriginal_login'>").append(a("<p><label for='myspaceoriginal_email'>Email</label><input type='email' id='myspaceoriginal_email' name='email' required='required' /></p>")).append(a("<p><label for='myspaceoriginal_password'>Password</label><input type='password' id='myspaceoriginal_password' name='password' required='required' /></p>")).append(a('<p><a href="https://myspace.zendesk.com/hc/en-us/requests/new?ticket_form_id=27660" target="_blank">Forgot password?</a></p>')).appendTo(c), g = a("<footer><span class='postingIcon'></span><button type='button' class='noStyle cancel'>Back</button><button type='submit' form='myspaceoriginal_login' class='primary'>Sign In with Classic Myspace</button></footer>"), c.append(g), g.on("click", "button.cancel", function() {
            return f && comm.send(f), !1
        }), d.submit(function() {
            return a.ajax({
                url: "/ajax/thirdpartyauth/myspaceoriginal/login",
                type: "POST",
                data: d.serialize(),
                success: function(a) {
                    a.isAuthenticated ? comm.send("thirdParty.login", a) : comm.send("thirdParty.signup", a.user)
                },
                error: function(a) {
                    var b;
                    try {
                        b = JSON.parse(a.responseText), c.children(".tipHolder").tip({
                            title: b.message,
                            classes: "error myspaceoriginal_tip",
                            placement: "inside top"
                        }).tip("show")
                    } catch (d) {}
                },
                complete: function() {
                    c.removeClass("processing").find("button").removeAttr("disabled")
                }
            }), c.addClass("processing").find("button").attr("disabled", "disabled"), !1
        }), a(document.body).append(c), e = new Myspace.Dialog(c)), e.show()
    }
    var b = {
            facebook: {
                width: 600,
                height: 350
            },
            "twitter:": {
                width: 600,
                height: 600
            }
        },
        e, f;
    Myspace.ThirdPartyAuthPopup = d
})(jQuery);
(function(a) {
    function d(a) {
        if (!a) return;
        var b = a.split("_")[0];
        return c[b] || b
    }

    function e(a, c) {
        var e = b[a],
            f = d(c);
        if (e && f) {
            var g = require("ejs");
            return g.render(e, {
                type: f
            })
        }
    }

    function f(b) {
        function g(a, b) {
            Myspace.User.authContext = {
                pfc: window.context.pfc,
                action: a || "",
                object: b || ""
            }
        }

        function h() {
            function e(a) {
                return setTimeout(function() {
                    if (a.privacyHtml) {
                        a.hashMashter && (context.hashMashter = a.hashMashter);
                        var b = new Myspace.termsOfService;
                        b.showTermsOfService(a.privacyHtml, !0)
                    } else comm.send("signin", a)
                }, 100), !1
            }

            function g(a) {
                Myspace.formHelper.setErrorMessage(f, a.message, !0, f.children(".tipHolder"), !0), f.find(".email input").focus()
            }
            c = new Myspace.Dialog(b, {
                onShow: i,
                onHide: function() {
                    setTimeout(i, 500)
                }
            }), d = b.find(".promptText"), f = b.find("form"), b.find(".help").click(function() {
                return comm.send("login.help"), !1
            }), b.find(".signUp").click(function() {
                return comm.send("signup.show", {
                    reset: !0
                }), !1
            }), b.find(".thirdParty button[data-provider]").each(function() {
                new Myspace.ThirdPartyAuthPopup(a(this), {
                    action: "login"
                })
            }), b.find(".thirdParty button.emaillogin").click(function() {
                b.addClass("showSignin").find('.emailSignin form input[name="email"]').focus()
            }), f.submit(function() {
                return Myspace.formHelper.clearError(f, f.find(".tipHolder")), Myspace.formHelper.validateOnSubmit(f, function() {
                    Myspace.formHelper.doSubmit(f, e, g)
                }), !1
            }).attr("novalidate", "novalidate")
        }

        function i() {
            Myspace.formHelper.clearError(f, f.find(".tipHolder")), Myspace.formHelper.clearError(f.find(".email input")), Myspace.formHelper.clearError(f.find(".password input")), b.removeClass("showSignin"), f.get(0).reset()
        }

        function j(a) {
            a = a || {}, g(a.action, a.object), k();
            var f = a.message || e(a.action, a.object) || b.data("defaultMessage");
            d.html(f), c.show()
        }

        function k() {
            var a = {
                pfc: "loginPrompt",
                overlayId: "loginPrompt"
            };
            comm.send("beacon.v3.overlay", a)
        }
        var c, d, f;
        return h(), {
            show: j,
            hide: c.hide
        }
    }
    var b = {
            connect: "Sign in to connect to this <%= locals.type %>.",
            play: "Sign in to play this <%= locals.type %>.",
            share: "Sign in to share this <%= locals.type %>.",
            addToMix: "Sign in to add this <%= locals.type %> to a mix.",
            comment: "Sign in to comment on this <%= locals.type %>.",
            message: "Sign in to send this user a message.",
            sendAsMessage: "Sign in to send this <%= locals.type %> in a message.",
            playRadio: "Sign in to play this radio station.",
            makeProfileSong: "Sign in to make this your profile song."
        },
        c = {
            image: "photo",
            playlist: "mix",
            status: "post",
            musicalbum: "album",
            blog: "article"
        },
        g = null;
    comm.listen("login.prompt", function(b) {
        g = g || new f(a("#loginPrompt")), g.show(b)
    }, !0), comm.listen("login.hidePrompt", function() {
        g && g.hide()
    }, !0)
})(jQuery);
(function(a) {
    function b(b) {
        function g(a) {
            return setTimeout(function() {
                if (a.privacyHtml) {
                    a.hashMashter && (context.hashMashter = a.hashMashter);
                    var b = new Myspace.termsOfService;
                    b.showTermsOfService(a.privacyHtml, !0)
                } else comm.send("signin", a)
            }, 100), !1
        }

        function h(a) {
            Myspace.formHelper.setErrorMessage(d, a.message, !0, d.find(".genericError"), !0), d.find(".email input").focus()
        }

        function i(a, b) {
            Myspace.User.authContext = {
                pfc: window.context.pfc,
                action: a || "",
                object: b || ""
            }
        }

        function j(a) {
            f.val(a)
        }
        var c = a(b),
            d = c.find("form"),
            e = "#privacyPolicy",
            f = d.find('input[name="pageId"]');
        return d.attr("novalidate", "novalidate"), d.submit(function() {
            return Myspace.formHelper.clearError(d, d.find(".tipHolder")), Myspace.formHelper.validateOnSubmit(d, function() {
                Myspace.formHelper.doSubmit(d, g, h)
            }), !1
        }), c.find(".thirdParty button").each(function() {
            new Myspace.ThirdPartyAuthPopup(a(this), {
                action: "login"
            })
        }), d.find(".help").click(function(a) {
            return comm.send("login.help"), !1
        }), c.find("header .signup a").click(function() {
            return comm.send("signup.show"), !1
        }), {
            reset: function() {
                Myspace.formHelper.clearError(d, d.find(".tipHolder")), d.find(".email input, .password input").val("")
            },
            setPageId: j,
            setAuthContext: i
        }
    }
    Myspace.LoginForm = b
})(jQuery);
(function() {
    function f() {
        var b = "/signin";
        location.pathname !== b && (a = location.href, history.replaceState && history.replaceState({}, "", b), _gaq.push(["_trackPageview", b]))
    }

    function g() {
        a && (history.replaceState && history.replaceState(null, "", a), a = null), $(document.body).focus()
    }

    function h() {
        var a = {
            pfc: "signin",
            overlayId: "loginDialog"
        };
        comm.send("beacon.v3.overlay", a)
    }

    function i(a) {
        return a && d.setAuthContext(a.action, a.object), a
    }

    function j(a) {
        var b = document.createElement("a"),
            c;
        b.href = a, c = b.hostname, c.indexOf("askmyspace.com") > -1 ? window.location.href = "/help?referrer=" + a : window.location.href = a
    }
    var a, b = $("#loginDialog"),
        c, d = new Myspace.LoginForm(b),
        e = new Myspace.Dialog(b, {
            onShow: f,
            onHide: g
        });
    comm.listen("login.show", function(b) {
        if (!window.context.features.isSignInEnabled) {
            Myspace.genericDialog({
                html: '<section><h1>Please Excuse Our Mess.</h1><p>We busted our sign in. We\'re smoothing out the technical stuff right now and should be back in no time.<br /><a href="http://www.askmyspace.com">Ask Myspace</a> has the latest updates while <a href="https://www.myspace.com">Discover</a> has plenty to keep you occupied.</p></section>',
                classes: "disabledLogin",
                buttons: [{
                    text: "Ok",
                    classes: "primary",
                    click: function() {
                        comm.send("location.href", "/")
                    },
                    setFocus: !0
                }]
            });
            return
        }
        b = b || {}, d.reset(), c = Myspace.Utils.guid(), d.setPageId(c), i(b.context), e.show(), h();
        var f = document.querySelector("#loginDialog .leaderboard");
        Myspace.Ads.HeaderBidding.renderAdInContainer("SignIn_Desktop_728x90", f, !0)
    }, !0), comm.listen("signin", function(b) {
        b = b || {};
        var c = b.url || a || window.location.href;
        j(c)
    }, !0), comm.listen("thirdParty.login", function(a) {
        a = a || {}, setTimeout(function() {
            comm.send("signin", a)
        }, 100)
    }, !0), comm.listen("thirdParty.loginFailed", function() {
        Myspace.Error({
            text: "There was a problem logging you in. Please try again later.",
            no: !1,
            yes: {
                text: "OK"
            },
            closeAll: !1
        })
    }, !0)
})();
(function() {
    function a(a) {
        function i(a) {
            return comm.send("login.help.success", a), !1
        }

        function j(a) {
            if (a.code === "email") return c;
            if (a.code === "username") return d;
            if (a.code === "captcha") return o(), f.reset(), e;
            Myspace.formHelper.setErrorMessage(b, a.message, !0, b.find(".genericError"), !0)
        }

        function k() {
            d.prop("disabled", !1), c.prop("disabled", !1)
        }

        function l() {
            Myspace.formHelper.clearError(b, b.find(".genericError")), Myspace.formHelper.clearError(d), Myspace.formHelper.clearError(c), Myspace.formHelper.clearError(e), k(), b.get(0).reset()
        }

        function m() {
            h.show()
        }

        function n(a) {
            g.prop("disabled", !1), Myspace.formHelper.clearError(e)
        }

        function o() {
            g.prop("disabled", !0)
        }

        function p() {
            b = a.find("form"), d = b.find('input[name="username"]'), c = b.find('input[name="email"]'), e = b.find(".captcha-container"), f = new Myspace.Captcha(e, {
                callback: n,
                resetCallback: o
            }), g = b.find('.formFooter button[type="submit"]'), h = new Myspace.Dialog(a, {
                onShow: l
            }), b.find(".email .msRadio label").click(function() {
                c.focus()
            }), b.find('input[name="email"]').on("focus", function() {
                b.find('.email input[type="radio"]').prop("checked", !0)
            }), b.find(".username .msRadio label").click(function() {
                d.focus()
            }), b.find('input[name="username"]').on("focus", function() {
                b.find('.username input[type="radio"]').prop("checked", !0)
            }), a.find("footer .back").click(function() {
                return comm.send("login.show"), !1
            }), b.submit(function() {
                var a = Myspace.formHelper;
                return a.clearError(b, b.find(".genericError")), b.find('input[name="remindoption"]:checked').val() === "em" ? d.prop("disabled", !0) : c.prop("disabled", !0), a.validateOnSubmit(b, function() {
                    a.doSubmit(b, i, j)
                }, function(b, c) {
                    a.clearError(b), c()
                }), k(), !1
            }).attr("novalidate", "novalidate"), $(".recovery-link").click(function() {
                comm.send("location.href", "/account/recovery")
            })
        }
        var b, c, d, e, f, g, h;
        p(), this.show = m
    }
    var b;
    comm.listen("login.help", function() {
        var c = "/forgotpassword";
        b = b || new a($("#loginHelpDialog")), b.show();
        var d = document.querySelector("#loginHelpDialog .leaderboard");
        Myspace.Ads.HeaderBidding.renderAdInContainer("SignIn_Desktop_728x90", d, !0), comm.send("location.href", {
            replaceState: !0,
            loadState: function() {
                return !0
            },
            url: c
        }), _gaq.push(["_trackPageview", c])
    }, !0);
    var c, d;
    comm.listen("login.help.success", function() {
        c || (c = $("#loginHelpSuccessDialog"), d = new Myspace.Dialog(c), c.find("footer button.primary").click(function() {
            return comm.send("login.show"), !1
        })), d.show()
    }, !0)
})();
(function(a) {
    function b(b, c, d) {
        return a.ajax({
            url: "/ajax/account/signup",
            type: "POST",
            data: b,
            success: c,
            error: d
        })
    }

    function c(b, c, d, e, f) {
        return c = c || "", d = d || "", a.ajax({
            url: "/ajax/account/validateusername",
            type: "POST",
            data: {
                username: b,
                email: c,
                fullName: d,
                classicMyspaceId: e
            },
            success: f
        })
    }

    function d(b, c) {
        return a.ajax({
            url: "/ajax/account/validateemail",
            type: "POST",
            data: {
                email: b
            },
            success: c
        })
    }

    function e(b, c, d, e, f) {
        return c = c || "", d = d || "", e = e || "", a.ajax({
            url: "/ajax/account/validatepassword",
            type: "POST",
            data: {
                password: b,
                email: c,
                username: d,
                fullName: e
            },
            success: f
        })
    }

    function f(b, c) {
        return b = b || "", a.ajax({
            url: "/ajax/account/validatezipcode",
            type: "POST",
            data: {
                zipcode: b
            },
            success: c
        })
    }
    Myspace.signupProvider = {
        signup: b,
        validateUsername: c,
        validateEmail: d,
        validatePassword: e,
        validateZipcode: f
    }
})(jQuery);
(function(a) {
    function e(a) {
        b.clearError(d)
    }

    function f(a) {
        b.clearError(d)
    }

    function g(a) {
        function i() {
            g.attr("novalidate", "novalidate"), b.html5ValidationOnChange(h.fullName), b.html5ValidationOnChange(h.email, function() {
                n(h.email, h.username, h.fullName)
            }), b.html5ValidationOnChange(h.password, function() {
                p(h.password, h.username, h.email)
            }), b.html5ValidationOnChange(h.birthMonth), b.html5ValidationOnChange(h.birthDay), b.html5ValidationOnChange(h.birthYear), b.html5ValidationOnChange(h.username, function() {
                l(h.username, h.email, h.fullName)
            }), h.zipcode && b.html5ValidationOnChange(h.zipcode, function() {
                o(h.zipcode, h.residencePostalCodeLocationId, h.residenceCityLocationId)
            }), r(g)
        }

        function m(a) {
            return t(a, h), !1
        }

        function s(a) {
            u(a, g, h)
        }

        function v() {
            g.submit(function() {
                return b.validateOnSubmit(g, function() {
                    q(g), b.doSubmit(g, m, s)
                }), !1
            })
        }

        function w() {
            d = g.find(".captcha-container"), c = new Myspace.Captcha(d, {
                callback: e,
                resetCallback: f
            }), i(), v()
        }
        var g = a.find("form"),
            h = k(g);
        w(), this.fillFormData = function(a) {
            j(h, a)
        }
    }

    function h(a) {
        function i() {
            g.attr("novalidate", "novalidate"), b.html5ValidationOnChange(h.fullName), b.html5ValidationOnChange(h.email, function() {
                n(h.email, h.username, h.fullName)
            }), b.html5ValidationOnChange(h.password, function() {
                p(h.password, h.username, h.email)
            }), b.html5ValidationOnChange(h.username, function() {
                l(h.username, h.email, h.fullName)
            }), h.zipcode && b.html5ValidationOnChange(h.zipcode, function() {
                o(h.zipcode, h.residencePostalCodeLocationId, h.residenceCityLocationId)
            }), r(g)
        }

        function m() {
            d = g.find(".captcha-container"), c = new Myspace.Captcha(d, {
                callback: e,
                resetCallback: f
            }), i(), w()
        }

        function s(a) {
            return t(a, h), !1
        }

        function v(a) {
            u(a, g, h)
        }

        function w() {
            g.submit(function() {
                return b.validateOnSubmit(g, function() {
                    q(g), b.doSubmit(g, s, v)
                }, function() {}), !1
            })
        }
        var g = a.find("form"),
            h = k(g);
        m(), this.fillFormData = function(a) {
            j(h, a), l(h.username, h.email, h.fullName)
        }
    }

    function i(a) {
        function i() {
            g.attr("novalidate", "novalidate"), b.html5ValidationOnChange(h.fullName), b.html5ValidationOnChange(h.email, function() {
                n(h.email, h.username, h.fullName)
            }), b.html5ValidationOnChange(h.password, function() {
                p(h.password, h.username, h.email)
            }), b.html5ValidationOnChange(h.birthMonth), b.html5ValidationOnChange(h.birthDay), b.html5ValidationOnChange(h.birthYear), b.html5ValidationOnChange(h.username, function() {
                l(h.username, h.email, h.fullName)
            }), h.zipcode && b.html5ValidationOnChange(h.zipcode, function() {
                o(h.zipcode, h.residencePostalCodeLocationId, h.residenceCityLocationId)
            }), r(g)
        }

        function m() {
            d = g.find(".captcha-container"), c = new Myspace.Captcha(d, {
                callback: e,
                resetCallback: f
            }), i(), w()
        }

        function s(a) {
            return t(a, h), !1
        }

        function v(a) {
            u(a, g, h)
        }

        function w() {
            g.submit(function() {
                return b.validateOnSubmit(g, function() {
                    q(g), b.doSubmit(g, s, v)
                }, function() {}), !1
            })
        }
        var g = a.find("form"),
            h = k(g);
        m(), this.fillFormData = function(a) {
            j(h, a), l(h.username, h.email, h.fullName)
        }
    }

    function j(a, b) {
        b = b || {};
        for (var c in a) b[c] !== undefined && a[c].val(b[c])
    }

    function k(b) {
        var c = {},
            d = b.get(0).elements;
        for (var e = 0; e < d.length; ++e) {
            var f = d[e];
            f.name && (c[f.name] = a(f))
        }
        return c
    }

    function l(a, b, c) {
        function g(b) {
            m(a, b, b.message, !1)
        }
        var d = a.val(),
            e = b.val(),
            f = c.val();
        d && Myspace.signupProvider.validateUsername(d, e, f, "", g)
    }

    function m(a, c, d, e) {
        if (!c && d) b.setErrorMessage(a, d, !1, null, !e);
        else if (c && (!c.isAvailable || !c.isValid)) {
            var f = c.suggestions && c.suggestions[0];
            f && a.val(f), b.setErrorMessage(a, d, !1, null, !e)
        } else b.clearError(a)
    }

    function n(a, c, d) {
        function f(e) {
            if (e.validationResult !== "Success") b.setErrorMessage(a, e.message, !1, null, !0);
            else {
                b.clearError(a);
                var f = c.val();
                f && l(c, a, d)
            }
        }
        var e = a.val();
        Myspace.signupProvider.validateEmail(e, f)
    }

    function o(a, c, d) {
        function f(e) {
            e.validationResult !== "Success" ? b.setErrorMessage(a, e.message, !1, null, !0) : (b.clearError(a), c.val(e.geoData.residencePostalCodeLocationId), d.val(e.geoData.residenceCityLocationId))
        }
        var e = a.val();
        Myspace.signupProvider.validateZipcode(e, f)
    }

    function p(a, c, d) {
        function h(c) {
            c.meetsRequirements ? b.clearError(a) : b.setErrorMessage(a, c.message, !1, null, !0)
        }
        var e = a.val(),
            f = d.val(),
            g = c.val();
        Myspace.signupProvider.validatePassword(e, f, g, null, h)
    }

    function q(c) {
        c.find(".error").each(function() {
            b.clearError(a(this))
        }), b.clearError(c, c.find(".genericError"))
    }

    function r(a) {
        a.find('input[name="agreeTOS"]').on("change", function() {
            a.find('button[type="submit"]').prop("disabled", !this.checked)
        })
    }

    function s(a) {
        Myspace.Confirm({
            text: a,
            no: !1,
            yes: {
                text: "OK"
            },
            onHide: function() {
                window.location = "/"
            }
        })
    }

    function t(a, b) {
        return comm.send("signup", a), setTimeout(function() {
            window.location.href = a.url
        }, 100), !1
    }

    function u(a, e, f) {
        var g, h;
        c.reset();
        switch (a.code) {
            case "dob":
                g = e.find(".control.dob"), b.setErrorMessage(g, a.message, !0, g.children(".tipHolder"), !0);
                break;
            case "age":
                s(a.message);
                break;
            case "captcha":
                b.setErrorMessage(d, a.message);
                break;
            case "username":
                m(f.username, a.data, a.message, !0);
                break;
            default:
                h = f[a.code], h && h.attr("type") !== "hidden" ? b.setErrorMessage(h, a.message) : b.setErrorMessage(e, a.message, !0, e.find(".genericError"))
        }
    }
    var b = Myspace.formHelper,
        c, d;
    Myspace.SignupEmailForm = g, Myspace.SignupFacebookForm = h, Myspace.SignupTwitterForm = i
})(jQuery);
(function() {
    function d() {
        var b = "/signup" + (a === "" ? "" : "/" + a.name);
        location.pathname !== b && (c = location.href, history.replaceState && history.replaceState({}, "", b), _gaq.push(["_trackPageview", b])), $("#footer").addClass("signupFooter")
    }

    function e() {
        c && (history.replaceState && history.replaceState(null, "", c), c = null), $(document.body).focus(), $("#footer").removeClass("signupFooter")
    }

    function f(a) {
        a = (a || "email").toLowerCase();
        var c = b[a];
        return c.dialog = c.dialog || new Myspace.Dialog(c.$elem, {
            onShow: d,
            onHide: e
        }), c.form = c.form || new c.Class(c.$elem), c
    }

    function g(b) {
        a = f(b.type), b.data && a.form.fillFormData(b.data), a.dialog.show()
    }
    var a = "",
        b = {
            facebook: {
                name: "facebook",
                $elem: $("#signupFacebookDialog"),
                Class: Myspace.SignupFacebookForm
            },
            twitter: {
                name: "twitter",
                $elem: $("#signupTwitterDialog"),
                Class: Myspace.SignupTwitterForm
            },
            email: {
                name: "email",
                $elem: $("#signupEmailDialog"),
                Class: Myspace.SignupEmailForm
            }
        },
        c = null;
    comm.listen("signupform.show", g, !0)
})();
(function(a) {
    function b(b) {
        function e(a, b) {
            Myspace.User.authContext = {
                pfc: window.context.pfc,
                action: a || "",
                object: b || ""
            }
        }

        function f(a) {
            d = a
        }

        function g() {
            c.find("button.facebook, button.twitter").each(function() {
                new Myspace.ThirdPartyAuthPopup(a(this), {
                    action: "login"
                })
            }), c.find("button.emaillogin").click(function() {
                return comm.send("signupform.show", {
                    type: "email"
                }), !1
            }), c.find(".signIn a").click(function() {
                return comm.send("login.show"), !1
            }), comm.listen("thirdParty.signup", function(a) {
                comm.send("signupform.show", {
                    type: a.provider,
                    data: a
                })
            }, !0)
        }
        var c = a(b),
            d = null;
        g(), this.setAuthContext = e, this.setPageId = f
    }
    Myspace.SignupTypes = b
})(jQuery);
(function() {
    function f() {
        var a = "/signup";
        location.pathname !== a && (e = location.href, history.replaceState && history.replaceState({}, "", a), _gaq.push(["_trackPageview", a]))
    }

    function g() {
        e && (history.replaceState && history.replaceState(null, "", e), e = null)
    }

    function h(a) {
        a && c.setAuthContext(a.action, a.object)
    }

    function i() {
        var a = {
            pfc: "signup",
            overlayId: "signupTypesDialog"
        };
        comm.send("beacon.v3.overlay", a)
    }

    function j(a) {
        if (!window.context.features.isSignUpEnabled) {
            Myspace.genericDialog({
                html: "<section><h1>Please Excuse Our Mess.</h1><p>We busted our sign up. We're smoothing out the technical stuff right now and should be back in no time.<br /><a href='http://www.askmyspace.com'>Ask Myspace</a> has the latest updates while <a href='https://www.myspace.com'>Discover</a> has plenty to keep you occupied.</p></section>",
                classes: "disabledLogin",
                buttons: [{
                    text: "Ok",
                    classes: "primary",
                    click: function() {
                        window.location.href = "/"
                    },
                    setFocus: !0
                }]
            });
            return
        }
        a = a || {}, b = Myspace.Utils.guid(), c.setPageId(b), h(a.context), d.show(), i()
    }
    var a = $("#signupTypesDialog"),
        b, c = new Myspace.SignupTypes(a),
        d = new Myspace.Dialog(a, {
            onShow: f,
            onHide: g
        }),
        e;
    comm.listen("signup.show", j, !0)
})();