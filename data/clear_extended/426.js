function closePrototips() {
    $$(".prototip").each(function(e) {
        e.hide()
    })
}

function commentFormSubmitting(e) {
    e && ($j("#comment_form_error").hide(), $j("#errorExplanation").hide()), $j("#comment_form_saving").toggle(e), $j("#comment_form_saving2").toggle(e)
}

function commentFormSaveError(e) {
    var t = e.responseText ? e.responseText : "";
    commentFormSubmitting(!1), $j("#comment_form_error_detail").text(t), $j("#comment_form_error").show()
}

function shareOnTwitter(e) {
    Lightbox.showBoxByID("publishTwitterReview_" + e)
}

function submitShelfButton(e, t, i, o, n, s) {
    var a = new SubmitShelfButtonHandler(e, t, i, o, n, s);
    a.sendRequest()
}

function onVote(e, t) {
    document.getElementById("yes_link" + e).style.color = 1 == t ? "#d7d7d7" : "#006699"
}

function checkAll(form, uncheck) {
    for (form = eval("document." + form), i = 0; i < form.length; i++) "checkbox" == form[i].type && (form[i].checked = uncheck ? "" : "checked")
}

function onInviteChooseSubmit(e) {
    var t = countChecked("scraperInvites", !0),
        i = countChecked("scraperInvites", !1);
    if (t > e || 0 == i) {
        try {
            Element.show("inviteConfirm"), Element.update("inviteConfirmCount", t + " ")
        } catch (o) {
            return confirm("Are you sure you would like to invite all the checked contacts?")
        }
        return !1
    }
    return !0
}

function countChecked(form, countChecked) {
    null == countChecked && (countChecked = !0);
    var count = 0;
    for (form = eval("document." + form), i = 0; i < form.length; i++) "checkbox" == form[i].type && (form[i].checked && countChecked || !form[i].checked && !countChecked) && count++;
    return count
}

function countChars(e, t) {
    var i = Event.element(e),
        o = parseInt(i.getAttribute("maxlength")) - i.value.length;
    t = t || "characterCount";
    var n = t.match(/^[#\.]/) ? $$(t)[0] : $(t);
    n.innerHTML = o + " characters left"
}

function chopChars(e) {
    var t = Event.element(e),
        i = parseInt(t.getAttribute("maxlength"));
    return 0 >= i ? void alert("maxlength was not defined!") : (t.value = t.value.slice(0, i - 1), !0)
}

function onTableRowClick(checkbox_name, row_id) {
    element = eval(checkbox_name), element.checked = element.checked ? "" : "checked", row = document.getElementById(row_id);
    for (var i = 0; i < row.cells.length; i++) row.cells[i].style.backgroundColor = element.checked ? "#EBE8D5" : "white"
}

function onTableRowHover(checkbox_name, row_id, over) {
    if (element = eval(checkbox_name), !element.checked) {
        row = document.getElementById(row_id);
        for (var i = 0; i < row.cells.length; i++) row.cells[i].style.backgroundColor = over ? "#EBE8D5" : "white"
    }
}

function setReadAt(e) {
    var e = e || {};
    if (e.field_id_prefix = e.field_id_prefix || "review_read_at", !e.parent && e.link && (e.parent = $(e.link).up(".formField") || $(e.link).up("form")), e.parent) var t = $(e.parent).down("#" + e.field_id_prefix + "_1i"),
        i = $(e.parent).down("#" + e.field_id_prefix + "_2i"),
        o = $(e.parent).down("#" + e.field_id_prefix + "_3i");
    else var t = $(e.field_id_prefix + "_1i"),
        i = $(e.field_id_prefix + "_2i"),
        o = $(e.field_id_prefix + "_3i");
    if (e.clear) t.setValue(0), i.setValue(0), o.setValue(0);
    else {
        if (e.date && "string" == typeof e.date) {
            var n = e.date.match(/(\d+)-(\d+)-(\d+)/);
            if (n) {
                var s = parseInt(n[1]),
                    a = parseInt(n[2].replace(/^0+/, "")) - 1,
                    r = parseInt(n[3].replace(/^0+/, ""));
                e.date = new Date(s, a, r)
            } else e.date = new Date(e.date)
        }
        var l = e.date ? e.date : new Date;
        t.setValue(l.getYear() + (l.getYear() < 1900 ? 1900 : 0)), i.setValue(l.getMonth() + 1), o.setValue(l.getDate())
    }
    t.down(t.selectedIndex).setAttribute("selected", "selected"), i.down(i.selectedIndex).setAttribute("selected", "selected"), o.down(o.selectedIndex).setAttribute("selected", "selected")
}

function readingProgressChanged() {
    var e = document.user_status_form,
        t = e.user_status_book_id;
    e.user_status_body.value = "", e.user_status_body.className = "", e.user_status_page.value = "", e.user_status_percent.value = "", t && "0" == t.value ? (Element.hide("user_status_page_container"), Element.hide("user_status_percent_container")) : (Element.show("user_status_page_container"), Element.hide("user_status_percent_container"))
}

function keyPressWithoutSubmit(e, t, i) {
    var o;
    return window.event ? o = t.keyCode : t.which && (o = t.which), o == Event.KEY_RETURN ? ("function" == typeof i && i(e, t), !1) : !0
}

function addSortable(e, t) {
    Event.observe(window, "load", function() {
        Sortable.create(e, {
            onUpdate: function(i) {
                new Ajax.Request(t, {
                    parameters: Sortable.serialize(e),
                    onLoading: function() {
                        $$(".sortable_controls input").invoke("hide"), $$(".sortable_controls .position_loading").invoke("show")
                    },
                    onComplete: function() {
                        $$(".sortable_controls input").invoke("show"), $$(".sortable_controls .position_loading").invoke("hide")
                    }
                })
            }
        }), window.originalSequence = Sortable.sequence(e)
    })
}

function commaFormatted(e) {
    e = e.toString();
    var t = ",",
        i = e.split(".", 2),
        o = i[1],
        n = parseInt(i[0]);
    if (isNaN(n)) return "";
    var s = "";
    0 > n && (s = "-"), n = Math.abs(n);
    for (var a = new String(n), i = []; a.length > 3;) {
        var r = a.substr(a.length - 3);
        i.unshift(r), a = a.substr(0, a.length - 3)
    }
    return a.length > 0 && i.unshift(a), a = i.join(t), e = !o || o.length < 1 ? a : a + "." + o, e = s + e
}

function luhn_check(e) {
    var e = e.replace(/\D/g, ""),
        t = e.length,
        o = t % 2,
        n = 0;
    for (i = 0; i < t; i++) {
        var s = e.charAt(i);
        i % 2 == o && (s = 2 * s, s > 9 && (s -= 9)), n += parseInt(s)
    }
    return n % 10 == 0 ? !0 : !1
}

function toggleRadioExtras(e, t, i) {
    if ("undefined" == typeof t) var t = "radioExtra";
    "undefined" == typeof i ? $$("." + t).invoke("hide") : i.descendants().each(function(e) {
        e.match("." + t) && e.hide()
    });
    var o = $(e).next("." + t);
    "undefined" != typeof o && o.show()
}

function toShelfName(e) {
    var t = e.toLowerCase().replace(/\W/g, "-");
    return t = t.replace(/\-+$/, "").slice(0, 35)
}

function saveShelfPosition(e) {
    var t = $("positions_" + e).value;
    new Ajax.Request("/shelf/move_to_position/", {
        parameters: {
            id: e,
            position: t
        },
        onLoading: function() {
            $("position_loading_" + e).show(), $("positions_" + e).hide(), Tips.hideAll()
        },
        onComplete: function(t) {
            $("moveToPosEdit" + e).hide(), Tips.hideAll()
        },
        onFailure: function() {
            alert("Something went wrong re-ordering those shelves.")
        }
    })
}

function renderRatingGraph(e, t) {
    if (Prototype.Browser.IE) return null;
    var i = 16,
        o = 15,
        n = $A(e).max(),
        s = (new pv.Panel).width(i).height(o);
    return t && s.canvas(t), s.add(pv.Bar).data(e).top(function() {
        return 3 * this.index
    }).width(function(e) {
        return i * e / n
    }).height(2).left(0).fillStyle("#215625"), s.render(), s
}

function afterShelfSave(e, t, i, o) {
    document.getElementById(e);
    Element.update(t, o), Element.hide("add_button_" + i), Element.show("added_message_" + i), "function" == typeof afterShelfSaveCallback && afterShelfSaveCallback.apply(this, arguments)
}

function refreshGroupBoxComplete(e, t) {
    Element.update("addGroupBooks" + t, e.responseText)
}

function addShelfRequest(e, t) {
    var i = "/shelf/add_to_shelf/?book_id=" + t;
    return _shelfRequest(i, "name", t, e)
}

function newShelfRequest(e, t, i) {
    var o = "/user_shelf" + e;
    return _shelfRequest(o, "user_shelf[name]", t, i || e)
}

function _shelfRequest(e, t, i, o) {
    var n = $("addShelfAjaxForm" + i);
    return n || (n = $("addShelfForm" + o)), new Ajax.Request(e, {
        asynchronous: !0,
        evalScripts: !0,
        onComplete: function(e) {
            n && n.update("refreshing shelves..."), updateShelfSelect(o, i)
        },
        onLoading: function(e) {
            n && n.update("saving...")
        },
        parameters: t + "=" + $("newShelfField" + o).value
    }), !1
}

function isShowingBuyableFeatures() {
    return source = Cookies.get("source"), -1 == $j.inArray(source, sourcesToHideBuyFeatures)
}

function showBuyableFeatures() {
    isShowingBuyableFeatures() && $j(".buyableFeature").removeClass("buyableFeature")
}

function swapContent(e) {
    var t = $j(e).data("text-id"),
        i = $j(e).siblings("#freeTextContainer" + t),
        o = $j(e).siblings("#freeText" + t);
    "none" == i.css("display") ? swapElements(i, o, e) : "none" == o.css("display") && swapElements(o, i, e)
}

function swapElements(e, t, i) {
    e.show(), t.hide(), "...more" == $j(i).text() ? $j(i).text("(less)") : $j(i).text("...more")
}

function select_all_suspicious_users() {
    alert("Careful. You are about to select every suspicious user on this page."), $j("#usersCreatedRecently .userDeleteCheckbox.suspicious").each(function(e) {
        e.writeAttribute("checked", !0), e.up("tr").highlight()
    })
}

function deselect_all_users() {
    $j("#usersCreatedRecently .userDeleteCheckbox").each(function(e) {
        e.writeAttribute("checked", !1), e.up("tr").highlight()
    })
}

function updateSpamResultItemStyling() {
    $j(".spamResultItemCheckbox").each(function() {
        this.checked ? $j(this).closest("li").first().addClass("selectedItem") : $j(this).closest("li").first().removeClass("selectedItem")
    })
}

function disable_subcategories() {
    $j("#subcategories").hide(), $j("#subcategories select").hide().attr("disabled", "disabled")
}

function set_subcategory_for_category(e) {
    var t = e.replace(/[^a-z0-9]/gi, ""),
        i = $j("#book_blog_subcategory_" + t);
    disable_subcategories(), "" != i.html().strip() && (i.removeAttr("disabled").show(), $j("#subcategories").show())
}

function update_page_after_vote(e, t) {
    var i = $j(e),
        o = i.attr("data-category"),
        n = $j('img[data-category="' + o + '"]');
    if (i.next("img").hide(), t) {
        i.html("Vote").removeClass("changeVote").addClass("castVote"), i.attr("href", i.attr("href").gsub("/unvote", "/vote")), i.prev(".voted").remove(), n.hide();
        var s = 1
    } else {
        i.html("Change Your Vote").removeClass("castVote").addClass("changeVote"), i.attr("href", i.attr("href").gsub("/vote", "/unvote")), $j("<p>").addClass("voted").html("You voted for this " + o.replace(/&/g, "&amp;") + " blog.").insertBefore(i), n.show();
        var s = -1
    }
    var a = $j('a.castVote[data-category="' + o + '"]');
    t ? a.removeClass("disabled") : a.addClass("disabled");
    var r = $j("#voteCount"),
        l = parseInt(r.html()) + s;
    r.html(String(l) + " vote" + (1 == l ? "" : "s"))
}

function handle_vote_click(e, t) {
    e.preventDefault();
    var i = e.target;
    $j(i).hasClass("disabled") || ($j(i).next("img").show(), $j.post("/book_blogger_award/" + (t ? "un" : "") + "vote", {
        entry_id: $j(i).attr("data-id")
    }, function(e) {
        update_page_after_vote(i, t)
    }, "script"))
}

function enableAll(e) {
    $$(e).each(function(e) {
        e.enableButtons()
    })
}

function changeQuote() {
    var e = $j("#quotes");
    if (null != e) {
        var t = e.children();
        null != t && (t.eq(selected_quote).fadeOut(), selected_quote = (selected_quote + 1) % t.size(), setTimeout(function() {
            t.eq(selected_quote).fadeIn()
        }, 900))
    }
}

function submitMetadataAnswer(e, t) {
    link_text = $("submit_" + e).innerHTML, iVote = parseInt(link_text), new Ajax.Request(t, {
        parameters: {
            wm: e
        },
        onSuccess: function(t) {
            acText = $("answer_counter_" + e).innerHTML, newText = (parseInt(acText) + iVote).toString(), $("answer_counter_" + e).innerHTML = newText, "0" == newText && $("answer_line_" + e).hide(), newLink = -1 == iVote ? "+1" : "-1", $("submit_" + e).innerHTML = newLink, t.responseText.length > 0 && (old_id = parseInt(t.responseText), oldLink = -1 == iVote ? "-1" : "+1", $("submit_" + old_id).innerHTML = oldLink, oldText = (parseInt($("answer_counter_" + old_id).innerHTML) + -1 * iVote).toString(), $("answer_counter_" + old_id).innerHTML = oldText, "0" == oldText && $("answer_line_" + old_id).hide())
        }
    })
}

function quizFriendInviteSuccess(e) {
    e.replaceWith("<span class=friendInviteSuccess>invite sent</span>")
}

function getGenre() {
    var e = location.hash.replace("#", "");
    return "" == e ? null : e
}

function setGenre(e) {
    location.hash = e
}

function activateRateBooksMoreGenreLnk() {
    var e = $("rateBooksMoreGenreLnk");
    null != e && e.observe("click", function(t) {
        e.hide(), $("moreGenreLoading").show(), new Ajax.Request(e.href, {
            method: "GET"
        }), t.stop()
    })
}

function rateBooksToGenre(e, t) {
    new Ajax.Request(t, {
        method: "GET",
        onLoading: function() {
            setGenre(e), window.scroll(0, 0), $("rateBooksList").update("<div class='loadingPageImage'></div>"), $$(".navRow a").each(function(e) {
                e.removeClassName("selected")
            }), $("nav_to_" + e).addClassName("selected")
        },
        onComplete: function() {
            activateRateBooksMoreGenreLnk(), "amazon_purchase_import" === e && updateAmazonPurchaseImportUI(), WantToRead.resetShelfMenuStored()
        }
    })
}

function activateUndoNoRecsLink(e) {
    e.observe("click", function(t) {
        e.hide(), e.up("div").down("img.loading").show(), e.up("form").request(), t.stop()
    })
}

function showRenameForm(e) {
    var t = e.closest(".displayShelfName"),
        i = t.parent(),
        o = i.find(".renameUserShelf");
    t.hide(), o.show()
}

function hideRenameForm(e) {
    var t = e.closest(".renameUserShelf"),
        i = t.parent(),
        o = i.find(".displayShelfName");
    t.hide(), o.show()
}

function submitRenameShelf(e) {
    var t = e.find(".renameUserShelfTxt"),
        i = t.val();
    null != i && "" != i && jQuery.post(e.attr("action"), e.serialize(), function() {
        hideRenameForm(e)
    })
}

function activateExpandDetailsLinks() {
    $$(".workEditions .detailsLink").each(function(e) {
        e.observe("click", function(t) {
            return editionDataElem = e.up(".editionData"), moreDetailsElem = editionDataElem.down(".moreDetails"), moreDetailsElem.hasClassName("hideDetails") ? (moreDetailsElem.removeClassName("hideDetails"), e.update("less detail")) : (moreDetailsElem.addClassName("hideDetails"), e.update("more detail")), t.stop(), !1
        })
    })
}
var kindleCloudReaderAutoResize = function() {
        var e = .9 * $j(window).width(),
            t = .9 * $j(window).height();
        Lightbox.setLightboxDimensions(e, t), $j("#box .kindleCloudReader iframe").css("height", t - 40 + "px"), Lightbox.center("box")
    },
    kindleCloudReaderOpen = function(e) {
        e.preventDefault();
        var t = $j(this).data("book-id"),
            i = "kindleCloudReaderBook" + t;
        Lightbox.showBoxByID(i, 970, 400, !0);
        var o = $j("#boxContents"),
            n = $j("#close"),
            s = {
                padding: o.css("padding"),
                margin: o.css("margin")
            };
        o.css("padding", "0px").css("margin", "0px"), n.css("top", "13px").css("right", "15px");
        var a = $j("#box .kindleCloudReader iframe"),
            r = $j(this).attr("href");
        a.attr("src", r).css({
            width: "100%",
            border: "none"
        }).show(), $j(window).resize(_.debounce(kindleCloudReaderAutoResize, 300)), $("box").observe("Lightbox:hideBox", function() {
            $j(window).off("resize"), setTimeout(function() {
                o.css(s), n.css("top", "5px").css("right", "5px")
            }, 1e3)
        });
        for (var l = location.pathname.split("/"), h = "", c = 0; c < l.length - 1; c++) h += l[c];
        $j.post("/track/track", {
            tid: "preview_button--" + h + "--click"
        }), kindleCloudReaderAutoResize()
    },
    showWrongBookKindlePreviewScreen = function(e) {
        e.preventDefault();
        var t = $j(this).data("book-id");
        Lightbox.showBoxByID("wrongBookKindlePreviewScreenBook" + t, 500, 150, !0)
    },
    hideWrongBookKindlePreviewScreen = function(e) {
        Lightbox.hideBox(), Lightbox.showBoxByID("js-wrongBookKindlePreviewScreenConfirmation")
    },
    hideWrongBookReportConfirmation = function() {
        Lightbox.hideBox()
    };
$j(document).on("click", "#js-kcrPreviewButton", kindleCloudReaderOpen).on("click", ".js-wrongBookKindlePreview", showWrongBookKindlePreviewScreen).on("click", "#js-wrongBookKindlePreviewScreenCancelLink", hideWrongBookReportConfirmation).on("click", "#js-wrongBookKindlePreviewScreenConfirmationDismiss", hideWrongBookReportConfirmation).on("submit", ".new_kindle_book_mapping_flag", hideWrongBookKindlePreviewScreen).on("click", ".syncPreviewButton", function() {
    $j.post("/track/track_click", {
        feature: "SyncPreviewButton"
    })
}).on("click", ".asyncPreviewButton", function() {
    $j.post("/track/track_click", {
        feature: "AsyncPreviewButton"
    })
});
var InlineFlash = {
        _templateString: '<div id="header_#{message_type}_container"><div class="box noticeBox #{extra_classes}"><a href="#" onclick="$(this).up().up().hide()" class="right"><img src=\'/assets/layout/delete.png\' alt=\'Dismiss\' /></a>#{message}</div><br/></div>',
        showNotice: function(e) {
            this._showFlash({
                message_type: "notice",
                message: e
            })
        },
        showError: function(e) {
            this._showFlash({
                message_type: "error",
                extra_classes: "errorBox",
                message: e
            })
        },
        hideFlash: function() {
            this.flashContainer || (this.flashContainer = $("flashContainer")), this.flashContainer || (this.flashContainer = $("flashMessageContainer")), this.flashContainer.update("")
        },
        _showFlash: function(e) {
            this.flashContainer || (this.flashContainer = $("flashContainer")), this.flashContainer || (this.flashContainer = $("flashMessageContainer")), this._template || (this._template = new Template(this._templateString)), this.flashContainer.update(this._template.evaluate(e))
        }
    },
    SignedOutExperiment = function(e) {
        var t, i = e,
            o = .04,
            n = [],
            s = !0,
            a = function(e) {
                o = e
            },
            r = function(e, t) {
                if (void 0 === l(e)) {
                    var i = {};
                    i.name = e, i.callback = t, n.push(i)
                }
            },
            l = function(e) {
                return $j.grep(n, function(t) {
                    return t.name === e
                })[0]
            },
            h = function() {
                var e = Math.floor(Math.random() * n.length);
                return n[e]
            },
            c = function() {
                Cookies.set(i + "Cell", t.name, o)
            },
            d = function() {
                if (t = l(Cookies.get(i + "Cell")), void 0 !== t) c();
                else if (s) return t = h(), $j.post("/track/track", {
                    tid: i + "_cell_" + t.name
                }, null, "script").done(function() {
                    c()
                });
                return jQuery.Deferred().resolve().promise()
            },
            u = function() {
                s = !1
            },
            f = function() {
                d().done(function() {
                    void 0 !== t && t.callback()
                })
            },
            p = function() {
                return void 0 !== t ? t.name : void 0
            };
        return {
            setDurationDays: a,
            addCell: r,
            runExperiment: f,
            preventNewCookie: u,
            getAssignedCellName: p
        }
    },
    gr = {};
reverseMerge = function(e, t) {
    for (var i in t) void 0 == e[i] && (e[i] = t[i])
}, Element.parent = function(e) {
    return e.ancestors()[0]
}, Element.addMethods({
    parent: Element.parent
}), $j(document).on("click", ".brown_comment .unblock", function(e) {
    var t = $j(this).parents(".xhr_blocked");
    t.next("span").show(), t.hide(), e.preventDefault()
}), $j(document).on("change", ".sharingToggle.twitter", function() {
    $j(this).toggleClass("checked", $j(this).children("input[type=checkbox]").is(":checked"))
}), $j(document).on("click", ".acceptMessage", function(e) {
    $j("#comment_form").show(), $j(".author_warning_message").hide(), e.preventDefault()
}), $j(document).on("click", ".jsShowSpoiler", function(e) {
    var t = $j(e.target);
    e.preventDefault(), t.next(".spoilerContainer").show(), t.siblings(".spoilerWarning").hide(), t.hide()
}), $j(document).on("click", ".jsHideSpoiler", function(e) {
    var t = $j(e.target);
    e.preventDefault(), t.parent().prev(".jsShowSpoiler").show(), t.parent().siblings(".spoilerWarning").show(), t.parent(".spoilerContainer").hide()
});
var SubmitShelfButtonHandler = Class.create();
SubmitShelfButtonHandler.prototype = {
    initialize: function(e, t, i, o, n, s) {
        this.book_id = e, this.unique_id = n ? n : e, this.url_params = s ? s : {}, this.signed_in = i, this.button = $("to_read_link_" + n), this.wtr_arrow = $("wtr_arrow_" + n), this.check_img_id = o, this.check_img = $(o), this.turn_off = "none" != this.check_img.style.display, this.shelf_name = t, this.button_text = null != this.button ? this.button.innerHTML : ""
    },
    sendRequest: function() {
        if (!this.button || !this.button.hasClassName("ignored")) {
            var e = "/shelf/add_to_shelf?no_content=true&";
            this.turn_off && (e = "/shelf/remove_book?"), this.url_params.book_id = this.book_id, this.url_params.name = this.shelf_name, this.signed_in ? new Ajax.Request(e, {
                asynchronous: !0,
                evalScripts: !0,
                parameters: this.url_params,
                onComplete: function(e) {
                    this.button && (this.button.update(this.button_text), check_img = $(this.check_img_id), this.turn_off ? (this.button.removeClassName("minor"), check_img.hide(), this.wtr_arrow && this.wtr_arrow.show(), this.button.title = "Add to your " + this.shelf_name + " shelf.") : (this.button.addClassName("minor"), check_img.show(), this.button.title = "Remove from your " + this.shelf_name + " shelf."))
                }.bind(this),
                onLoading: function(e) {
                    this.button.update("saving..."), this.wtr_arrow && this.wtr_arrow.hide()
                }.bind(this)
            }) : document.location = e
        }
    }
};
var Popover = Class.create({
    initialize: function(e, t) {
        this.targetID = e, this.containerID = t, $(e).observe("click", this.togglePopover.bindAsEventListener(this)), Popover.popovers.push(this)
    },
    openPopover: function() {
        return $(this.targetID).addClassName("active"), $(this.containerID).show(), Prototype.Browser.IE && $(this.targetID).up("form").descendants().each(function(e) {
            e.match("select") && e.hide()
        }), Event.observe(document, "click", Popover.handleOpenPopoverClicks), !1
    },
    closePopover: function() {
        return $(this.targetID).removeClassName("active"), $(this.containerID).hide(), Prototype.Browser.IE && $(this.targetID).up("form").descendants().each(function(e) {
            e.match("select") && e.show()
        }), Event.stopObserving(document, "click", Popover.handleOpenPopoverClicks), !1
    },
    togglePopover: function() {
        return $(this.targetID).hasClassName("active") ? this.closePopover() : this.openPopover(), !1
    }
});
Popover.popovers = [], Popover.closePopovers = function() {
        for (var e = Popover.popovers.length - 1; e >= 0; e--) Popover.popovers[e].closePopover();
        return !1
    }, Popover.handleOpenPopoverClicks = function(e) {
        return e.target.hasClassName("popoverTarget") || e.target.hasClassName("popoverContainer") || null != e.target.up(".popoverTarget") || null != e.target.up(".popoverContainer") || Popover.closePopovers(), !1
    },
    function() {
        var e = {
                HTMLEvents: /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
                MouseEvents: /^(?:click|mouse(?:down|up|over|move|out))$/
            },
            t = {
                pointerX: 0,
                pointerY: 0,
                button: 0,
                ctrlKey: !1,
                altKey: !1,
                shiftKey: !1,
                metaKey: !1,
                bubbles: !0,
                cancelable: !0
            };
        Event.simulate = function(i, o) {
            var n, s = Object.extend(t, arguments[2] || {}),
                a = null;
            i = $(i);
            for (var r in e)
                if (e[r].test(o)) {
                    a = r;
                    break
                } if (!a) throw new SyntaxError("Only HTMLEvents and MouseEvents interfaces are supported");
            return document.createEvent ? (n = document.createEvent(a), "HTMLEvents" == a ? n.initEvent(o, s.bubbles, s.cancelable) : n.initMouseEvent(o, s.bubbles, s.cancelable, document.defaultView, s.button, s.pointerX, s.pointerY, s.pointerX, s.pointerY, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.button, i), i.dispatchEvent(n)) : (s.clientX = s.pointerX, s.clientY = s.pointerY, n = Object.extend(document.createEventObject(), s), i.fireEvent("on" + o, n)), i
        }, Element.addMethods({
            simulate: Event.simulate
        })
    }(),
    function() {
        Element.scaleToMaxWidth = function(e, t) {
            e = $(e);
            var i = e.width,
                o = e.height;
            return e.width > t && (e.width = t, e.height = o / i * t), e
        }, Element.scaleToMaxHeight = function(e, t) {
            e = $(e);
            var i = e.width,
                o = e.height;
            return e.height > t && (e.height = t, e.width = i / o * t), e
        }, Element.addMethods({
            scaleToMaxWidth: Element.scaleToMaxWidth
        }), Element.addMethods({
            scaleToMaxHeight: Element.scaleToMaxHeight
        })
    }(),
    function() {
        Element.slideToggle = function(e, t) {
            return e.visible() ? e.slideUp(t) : e.slideDown(t), e
        }, Element.addMethods({
            slideToggle: Element.slideToggle
        })
    }(),
    function() {
        Element.showFloatingBox = function(e, t) {
            return e.visible() || ($$(".floatingBox").invoke("hideFloatingBox"), e.show()), document.observe("click", FloatingBox.handleFloatingBoxClicks), e
        }, Element.hideFloatingBox = function(e, t) {
            return $(e).visible() ? (e.hide(), document.stopObserving("click", FloatingBox.handleFloatingBoxClicks), e) : void 0
        }, Element.toggleFloatingBox = function(e, t) {
            return e.visible() ? e.hideFloatingBox() : e.showFloatingBox(), e
        }, Element.addMethods({
            showFloatingBox: Element.showFloatingBox
        }), Element.addMethods({
            hideFloatingBox: Element.hideFloatingBox
        }), Element.addMethods({
            toggleFloatingBox: Element.toggleFloatingBox
        })
    }(),
    function() {
        FloatingBox = {}, FloatingBox.handleFloatingBoxClicks = function(e) {
            var t = e.element();
            t.hasClassName("floatingBox") || t.hasClassName("floatingBoxLink") || null != t.up(".floatingBox") || ($$(".floatingBox").invoke("hideFloatingBox"), document.stopObserving("click", ShelfChooser.handleShelfChooserClicks))
        }
    }(),
    function() {
        Element.toggleInnerHTML = function(e, t, i) {
            return e.innerHTML == t ? e.innerHTML = i : e.innerHTML = t, e
        }, Element.addMethods({
            toggleInnerHTML: Element.toggleInnerHTML
        })
    }();
var ShelfChooser = Class.create({
    initialize: function(e, t, i, o) {
        this.options = Object.extend(o || {}, this.defaultOptions), this.style = this.options.style || "standard", this.element = e, "string" == typeof this.element && (this.element = $(this.element)), this.shelfNames = i, this.entryCount = i.length, this.bookId = t, this.chosen = this.options.chosen || [], this.chosen.sort(), this.exclusive = this.options.exclusive || [], this.url = this.options.url, this.onEsc = this.options.onEsc, this.afterChoose = this.options.afterChoose, this.beforeSubmit = this.options.beforeSubmit, this.setupMarkup();
        var n = "keydown";
        (Prototype.Browser.Gecko || Prototype.Browser.Opera) && (n = "keypress"), Event.observe(this.element, n, this.onKeyPress.bindAsEventListener(this)), ShelfChooser.registry.push(this)
    },
    setupMarkup: function() {
        this.element.addClassName("shelfChooserInput"), this.element.setAttribute("autocomplete", "off"), this.wrapper = this.element.wrap("div", {
            id: this.wrapperId(),
            "class": "shelfChooser uitext"
        });
        var e = (this.wrapper, "choose shelves..."),
            t = "close",
            i = "right greyText";
        "kcw2853" === this.style && (e = "Choose shelves...", t = "Close", i = "right"), this.chooseButton = new Element("a", {
            href: "#",
            "class": "actionLinkLite chooseShelvesLink"
        }).update(e), this.wrapper.insert({
            top: this.chooseButton
        }), this.chooseButton.observe("click", this.toggle.bindAsEventListener(this)), this.chooserWrapper = this.element.wrap("div", {
            id: this.domId("chooser"),
            "class": "shelfChooserWrapper"
        }), this.chooserWrapper.hide();
        var o = new Element("a", {
            href: "#",
            "class": "greyText"
        }).update(e);
        this.chooserWrapper.insert({
            top: o
        }), o.observe("click", this.close.bindAsEventListener(this)), o = new Element("a", {
            href: "#",
            "class": i
        }).update(t), this.chooserWrapper.insert({
            top: o
        }), o.observe("click", this.close.bindAsEventListener(this)), this.shelvesWrapper = new Element("ul", {
            "class": "shelves"
        }), this.chooserWrapper.insert(this.shelvesWrapper);
        for (var n = 0; n < this.shelfNames.length; n++) this.shelvesWrapper.insert(this.buildShelfLi(this.shelfNames[n]));
        this.selectChosen(), this.newShelfButton = new Element("a", {
            href: "#",
            "class": "actionLinkLite newShelfButton"
        }).update("Add <span>new</span> shelf"), this.newShelfButtonLi = new Element("li", {
            "class": "visible newShelfButtonLi",
            alt: "_NEWSHELFBUTTON"
        }), this.newShelfButtonLi.observe("click", this.addNewShelf.bindAsEventListener(this)), this.newShelfButtonLi.appendChild(this.newShelfButton), this.newShelfField = new Element("div"), this.newShelfFieldSubmit = new Element("a", {
            href: "#",
            "class": "gr-button gr-button--small"
        }).update("Add"), this.newShelfFieldSubmit.observe("click", function(e) {
            return this.addNewShelf(), e.stop(), !1
        }.bindAsEventListener(this)), this.newShelfInput = new Element("input", {
            type: "text"
        }), this.newShelfInput.observe("keypress", function(e) {
            return e.keyCode == Event.KEY_RETURN ? (this.addNewShelf(e), e.stop(), !1) : void 0
        }.bindAsEventListener(this)), this.newShelfField.appendChild(this.newShelfInput), this.newShelfField.appendChild(this.newShelfFieldSubmit), this.newShelfButtonLi.appendChild(this.newShelfField), this.newShelfField.hide(), this.newShelfWrapper = new Element("ul"), this.newShelfWrapper.insert(this.newShelfButtonLi), this.chooserWrapper.insert(this.newShelfWrapper), $j(document).on("touchstart", ".shelfChooserWrapper > .shelves", function(e) {
            this.shelfMenuScrollStartPos = $j(this).scrollTop() + e.originalEvent.touches[0].pageY
        }), $j(document).on("touchmove", ".shelfChooserWrapper > .shelves", function(e) {
            this.scrollTop = this.shelfMenuScrollStartPos - e.originalEvent.touches[0].pageY, e.preventDefault()
        }), (EnvironmentDetection.android.isICS() || EnvironmentDetection.android.isHC()) && $j(".shelfChooserWrapper > .shelves").css("overflow-y", "hidden"), this.close()
    },
    toggle: function(e) {
        return this.chooserWrapper.visible() ? this.close(e) : this.open(e)
    },
    open: function(e) {
        return this.chooseButton.hide(), $$(".floatingBox").invoke("hide"), this.chooserWrapper.show(), this.chooserWrapper.addClassName("open floatingBox"), this.element.focus(), document.observe("click", ShelfChooser.handleShelfChooserClicks), "undefined" != typeof e && e.stop(), !1
    },
    close: function(e) {
        return this.chooseButton.show(), this.chooserWrapper.removeClassName("open floatingBox"), this.chooserWrapper.hide(), this.element.clear(), this.unChooseShelf(), this.onObserverEvent(), this.newShelfButton.show(), this.newShelfField.hide(), document.stopObserving("click", ShelfChooser.handleShelfChooserClicks), this.options.afterClose && this.options.afterClose(this), "undefined" != typeof e && e.stop(), !1
    },
    addNewShelf: function(e) {
        var t = this.element.value || "";
        if (this.newShelfField.visible() || 0 == t.strip().length || this.shelfNames.indexOf(t) >= 0) var t = this.newShelfField.down("input[type=text]").value || "";
        if (t = toShelfName(t), this.newShelfField.visible() && this.shelfNames.indexOf(t) >= 0) return this.chooseShelf(t, {
            submit: !1
        }), this.hideNewShelfForm(), !1;
        if ("" == t.strip() || this.shelfNames.indexOf(t) >= 0) return this.showNewShelfForm(), "undefined" != typeof e && e.stop(), !1;
        this.hideNewShelfForm(), this.shelfNames.push(t), this.shelfNames.sort();
        var i, o = this.buildShelfLi(t),
            n = this.shelfNames.indexOf(t) - 1;
        if (0 > n) i = this.shelvesWrapper.select("li.exclusive").last();
        else {
            do {
                var s = this.shelfNames[n],
                    i = this.getShelfLi(s);
                n--
            } while (null != i && i.hasClassName("exclusive"));
            null == i && (i = this.shelvesWrapper.select("li.exclusive").last())
        }
        return i.insert({
            after: o
        }), this.chooseShelf(t), this.markCurrent(), this.element.focus(), this.element.clear(), "undefined" != typeof e && e.stop(), !1
    },
    showNewShelfForm: function() {
        this.newShelfButton.hide(), this.newShelfField.show(), this.newShelfField.down("input[type=text]").focus()
    },
    hideNewShelfForm: function() {
        this.newShelfButton.show(), this.newShelfField.hide(), this.newShelfField.down("input[type=text]").value = ""
    },
    onKeyPress: function(e) {
        switch (e.keyCode) {
            case Event.KEY_TAB:
            case Event.KEY_RETURN:
                this.selectEntry(), Event.stop(e);
                break;
            case Event.KEY_ESC:
                return this.chooserWrapper.hasClassName("open") && this.close(), "function" == typeof this.onEsc && this.onEsc(), void Event.stop(e);
            case Event.KEY_LEFT:
            case Event.KEY_RIGHT:
                return;
            case Event.KEY_UP:
                return this.markPrevious(), this.render(), void Event.stop(e);
            case Event.KEY_DOWN:
                return this.markNext(), this.render(), void Event.stop(e);
            default:
                if (this.currentShelfName = null, e.keyCode == Event.KEY_TAB || e.keyCode == Event.KEY_RETURN || Prototype.Browser.WebKit > 0 && 0 == e.keyCode) return !1
        }
        return this.observer && clearTimeout(this.observer), this.observer = setTimeout(this.onObserverEvent.bind(this), 1e3 * this.options.frequency), !1
    },
    markNext: function() {
        var e = this.getCurrentEntry().next(".visible");
        if ("undefined" == typeof e && this.getCurrentEntry() !== this.newShelfButtonLi && (e = this.newShelfButtonLi), e) {
            var t = e.readAttribute("alt");
            this.currentShelfName = t, e.addClassName("hover"), this.shelvesWrapper.scrollTop + this.shelvesWrapper.getHeight() < e.offsetTop && (this.shelvesWrapper.scrollTop += e.getHeight())
        }
    },
    markPrevious: function() {
        var e = this.getCurrentEntry().previous(".visible");
        "undefined" == typeof e && this.getCurrentEntry() === this.newShelfButtonLi && (e = this.shelvesWrapper.select(".visible").last()), e && (this.currentShelfName = e.readAttribute("alt"), e.addClassName("hover"), this.shelvesWrapper.scrollTop > e.offsetTop && (this.shelvesWrapper.scrollTop -= e.getHeight()))
    },
    markCurrent: function() {
        var e = this.getCurrentEntry();
        e && (this.render(), this.shelvesWrapper.scrollTop = e.offsetTop)
    },
    getCurrentEntry: function() {
        if (this.currentShelfName) return this.getShelfLi(this.currentShelfName);
        var e = this.shelvesWrapper.down("li.visible");
        return e ? this.currentShelfName = e.readAttribute("alt") : (this.currentShelfName = this.shelfNames[0], e = this.getShelfLi(this.currentShelfName)), e
    },
    getShelfLi: function(e) {
        return "_NEWSHELFBUTTON" == e ? this.newShelfButton.up("li") : document.getElementById(this.domId("shelf_" + e))
    },
    selectEntry: function() {
        switch (this.currentShelfName) {
            case "_NEWSHELFBUTTON":
                return this.addNewShelf(), !1;
            default:
                this.toggleShelf(this.getCurrentEntry().readAttribute("alt")), this.element.clear()
        }
    },
    selectChosen: function() {
        if ("undefined" != typeof this.chosen) {
            for (var e = 0; e < this.chosen.length; e++) this.chooseShelf(this.chosen[e], {
                submit: !1
            });
            this.currentShelfName = null
        }
    },
    unChooseAll: function() {
        for (var e = 0; e < this.shelfNames.length; e++) this.unChooseShelf(this.shelfNames[e], {
            submit: !1,
            onlyUpdateUI: !0
        });
        this.currentShelfName = null
    },
    render: function() {
        this.shelvesWrapper.select("li").invoke("removeClassName", "hover"), this.newShelfButtonLi.removeClassName("hover");
        var e = this.getCurrentEntry();
        e && e.addClassName("hover")
    },
    onObserverEvent: function() {
        for (var e, t, i = toShelfName(this.element.value), o = this.shelfNames.length - 1; o >= 0; o--) e = this.shelfNames[o], t = this.getShelfLi(e), t.fastRemoveClassName("hover"), 0 == e.indexOf(i) ? (t.fastAddClassName("visible"), t.show()) : (t.fastRemoveClassName("visible"), t.hide());
        "" == i.strip() || this.shelfNames.indexOf(i) > -1 ? this.newShelfButton.down("span").update("new") : (this.newShelfField.hide(), this.newShelfButton.show(), this.newShelfButton.down("span").update('<b>"' + i + '"</b>')), this.markCurrent()
    },
    wrapperId: function() {
        return "undefined" == typeof this.wrapper || this.wrapper.id.empty() ? "shelfChooser" + this.bookId : this.wrapper.id
    },
    domId: function(e) {
        return this.wrapperId() + (e || "")
    },
    buildShelfLi: function(e, t) {
        var t = t || {},
            i = new Element("li", {
                id: this.domId("shelf_" + e),
                alt: e,
                "class": "visible"
            }),
            o = new Element("span");
        return o.update(e), i.observe("click", this.toggleShelf.bind(this, e, t)), this.exclusive.indexOf(e) > -1 && i.addClassName("exclusive"), i.insert(o), i
    },
    chooseShelf: function(e, t) {
        if ("_NEWSHELFBUTTON" == e) return !1;
        var t = Object.extend({
                submit: !0
            }, t || {}),
            i = this.shelvesWrapper.select(".exclusive_chosen")[0],
            o = this.getShelfLi(e);
        if (o && (o.hasClassName("exclusive") ? (this.shelvesWrapper.select(".exclusive").invoke("removeClassName", "exclusive_chosen"), o.addClassName("exclusive_chosen")) : o.addClassName("chosen"), o.show()), this.currentShelfName = e, this.chooserWrapper.visible() && this.element.focus(), this.chosen.indexOf(e) < 0 && (this.chosen.push(e), this.chosen.sort()), this.exclusive.indexOf(e) > -1)
            for (var n = this.exclusive.length - 1; n >= 0; n--) {
                var s = this.exclusive[n];
                if (s != e) {
                    var a = this.chosen.indexOf(s);
                    a > -1 && this.chosen.splice(a, 1)
                }
            }
        this.options.cacheChosen && this.cacheChosen();
        var r = !0;
        return this.options.beforeSubmit && (r = this.options.beforeSubmit(this.exclusive.indexOf(e) > -1, this)), r ? (t.submit && this.submitShelf(e), this.options.afterChoose && this.options.afterChoose(e, this)) : (this.shelvesWrapper.select(".exclusive").invoke("removeClassName", "exclusive_chosen"), i.addClassName("exclusive_chosen")), !1
    },
    unChooseShelf: function(e, t) {
        var t = Object.extend({
                submit: !0
            }, t || {}),
            i = this.getShelfLi(e);
        if (null == i || i.hasClassName("exclusive_chosen")) return !1;
        if (i.removeClassName("chosen"), !t.onlyUpdateUI) {
            var o = this.chosen.indexOf(e);
            o > -1 && this.chosen.splice(o, 1)
        }
        return this.options.cacheChosen && !t.onlyUpdateUI && this.cacheChosen(), t.submit && this.submitShelf(e, {
            remove: !0
        }), this.options.afterChoose && this.options.afterChoose(e, this), !1
    },
    toggleShelf: function(e, t) {
        var i = this.getShelfLi(e);
        return i.hasClassName("chosen") || i.hasClassName("exclusive_chosen") ? this.unChooseShelf(e, t) : this.chooseShelf(e, t)
    },
    submitShelf: function(e, t) {
        if ("_NEWSHELFBUTTON" == e) return !1;
        var t = Object.extend({
                remove: !1
            }, t || {}),
            i = Object.extend(this.options.ajaxOptions || {}, {
                parameters: {
                    book_id: this.bookId,
                    name: e,
                    a: t.remove ? "remove" : ""
                }
            });
        new Ajax.Request(this.url, i)
    },
    summon: function(e, t) {
        var i = Event.findElement(e),
            t = t || {};
        if (t.bookId && (this.bookId = t.bookId), t.chosen) this.unChooseAll(), this.chosenByBookId && this.chosenByBookId[this.bookId] ? this.chosen = this.chosenByBookId[this.bookId] : (this.chosen = t.chosen, this.options.cacheChosen && this.cacheChosen()), 0 == this.chosen.intersect(this.exclusive).length && (this.chosen.push("read"), this.chosen.sort()), this.selectChosen();
        else {
            this.chosen = [], this.unChooseAll();
            var o = this.wrapper.down(".exclusive_chosen");
            o && o.removeClassName("exclusive_chosen")
        }
        i.summon(this.wrapper), this.open(e)
    },
    cacheChosen: function() {
        return 0 == this.chosen.length ? !1 : ("undefined" == typeof this.chosenByBookId && (this.chosenByBookId = {}), void(this.chosenByBookId[this.bookId] = this.chosen.clone()))
    },
    defaultOptions: {
        url: "/shelf/add_to_shelf",
        frequency: .15
    }
});
! function() {
    ShelfChooser.registry = [], ShelfChooser.handleShelfChooserClicks = function(e) {
        e.element().hasClassName("shelfChooser") || e.element().hasClassName("shelfChooserLink") || null != e.element().up(".shelfChooser") || ShelfChooser.registry.invoke("close")
    }
}(),
function() {
    Element.shelfChooser = function(e, t, i, o) {
        new ShelfChooser(e, t, i, o)
    }, Element.addMethods({
        shelfChooser: Element.shelfChooser
    })
}(),
function() {
    Element.fastHasClassName = function(e, t) {
        return e.className == t ? !0 : e.className.indexOf(t) >= 0
    }, Element.fastAddClassName = function(e, t) {
        return e.fastHasClassName(t) ? e : (e.className += " " + t, e)
    }, Element.fastRemoveClassName = function(e, t) {
        return e.fastHasClassName(t) ? (e.className = e.className.replace(t, ""), e) : e
    }, Element.addMethods({
        fastHasClassName: Element.fastHasClassName
    }), Element.addMethods({
        fastAddClassName: Element.fastAddClassName
    }), Element.addMethods({
        fastRemoveClassName: Element.fastRemoveClassName
    })
}();
var Popup = Class.create({
        initialize: function(e) {
            this.options = {
                url: "#",
                width: 300,
                height: 300
            }, Object.extend(this.options, e || {}), window.open(this.options.url, "", "width=" + this.options.width + ",height=" + this.options.height)
        }
    }),
    GR_Twitter = {
        callback: null,
        askToConnect: function(e) {
            var t = "true";
            e && (this.callback = e, t = "callback"), new Popup({
                url: "/user/twitter_sign_in?popup=" + t,
                width: 775,
                height: 550
            })
        },
        callback: function(e) {
            e ? this.callback && this.callback() : InlineFlash.showError("Twitter failed to respond. Please try again.")
        },
        publish: function(e, t, i) {
            new Ajax.Request("/twitter_users/tweet", {
                method: "post",
                parameters: {
                    authenticity_token: window._token,
                    status: e,
                    status_url: t
                },
                onSuccess: function() {
                    i || InlineFlash.showNotice("Your status has been updated!")
                },
                onError: function() {
                    i || InlineFlash.showError("We had a problem updating your status. Please try again.")
                }
            })
        }
    },
    GR_Amazon = {
        askToConnect: function(e) {
            new Popup({
                url: e,
                width: 900,
                height: 540
            })
        }
    };
! function() {
    Element.summon = function(e, t, i) {
        e = $(e), t = $(t), $(e).addClassName("floatingBoxLink");
        var i = i || {},
            o = $(t).offsetLeft,
            n = $(t).offsetTop,
            s = $(t).visible(),
            a = t.style.width + "",
            r = t.style.height + "",
            l = 0;
        if ($(e).viewportOffset()[0] + $(t).getWidth() > document.viewport.getWidth()) var l = -1 * $(t).getWidth() + $(e).getWidth();
        return "function" == typeof i.beforeSummon && i.beforeSummon(e, t), $(t).absolutize(), $(t).clonePosition(e, {
            setWidth: i.setWidth,
            setHeight: i.setHeight,
            offsetTop: $(e).getHeight() + 2,
            offsetLeft: l
        }), i.setWidth || t.setStyle({
            width: a
        }), i.setHeight || t.setStyle({
            height: r
        }), s && (i.toggle || $(t).offsetLeft == o && $(t).offsetTop == n) ? ($(t).hideFloatingBox(), !0) : ($(t).showFloatingBox(), void("function" == typeof i.afterSummon && i.afterSummon(e, t)))
    }, Element.addMethods({
        summon: Element.summon
    })
}();
var Labelize = {
    handleClick: function(e, t, i) {
        if (window.justSorted) return window.justSorted = !1, e.stop(), !0;
        var i = i || {};
        return "INPUT" == e.target.tagName && "checkbox" != e.target.type || "TEXTAREA" == e.target.tagName || "SELECT" == e.target.tagName || "A" == e.target.tagName ? !0 : (e.target != t && (t.checked = !t.checked), t.checked ? i.selectedClass && this.fastAddClassName(i.selectedClass) : i.selectedClass && this.fastRemoveClassName(i.selectedClass), void(e.target != t && e.stop()))
    }
};
! function() {
    Element.labelize = function(e, t) {
        var i = e.down("input"),
            t = t || {},
            o = t.cursor || "pointer";
        e.labelized() && 1 != t.force || (e.setStyle({
            cursor: o
        }), Labelize["_" + e.id + "_click"] = Labelize.handleClick.bindAsEventListener(e, i, t), e.observe("click", Labelize["_" + e.id + "_click"]))
    }, Element.delabelize = function(e, t) {
        if (e.labelized()) {
            e.down("input");
            e.setStyle({
                cursor: "auto"
            }), Labelize["_" + e.id + "_click"] && (e.stopObserving("click", Labelize["_" + e.id + "_click"]), Labelize["_" + e.id + "_click"] = null), t.selectedClass && e.fastRemoveClassName(t.selectedClass)
        }
    }, Element.labelized = function(e) {
        return null != Labelize["_" + e.id + "_click"]
    }, Element.addMethods({
        labelize: Element.labelize,
        delabelize: Element.delabelize,
        labelized: Element.labelized
    })
}(),
function() {
    Element.dim = function(e) {
        var t = $("dimElt");
        if (null == t) {
            var t = new Element("div", {
                id: "dimElt"
            });
            document.body.appendChild(t), t.setStyle({
                position: "absolute",
                backgroundColor: "white",
                opacity: "0.5"
            }), t.hide()
        }
        t.clonePosition(e), t.appear()
    }, Element.undim = function(e) {
        $("dimElt").fade()
    }, Element.addMethods({
        dim: Element.dim
    })
}(),
function() {
    Element.bookTip = function(e, t) {
        var i, o, t = t || {},
            n = t.bookid || e.getAttribute("rel"),
            s = t.attach || "bottomRight",
            a = e.hasClassName("interactive"),
            r = "";
        switch (delete t.bookid, delete t.attach, e.hasAttribute("origin") && (r = e.getAttribute("origin")), s) {
            case "bottomRight":
                i = {
                    target: "bottomRight",
                    tip: "topLeft"
                }, o = "topLeft";
                break;
            case "bottomLeft":
                i = {
                    target: "bottomLeft",
                    tip: "topRight"
                }, o = "topRight";
                break;
            case "left":
                i = {
                    target: "leftMiddle",
                    tip: "rightMiddle"
                }, o = "rightMiddle";
                break;
            default:
                i = {
                    target: "bottomRight",
                    tip: "topLeft"
                }, o = "topLeft"
        }
        a && reverseMerge(t, {
            hideOn: !1,
            hideAfter: 1
        });
        var l = "/book/tip/" + n + "?";
        if (a && (l += "interactive=1&"), void 0 != r && r.length > 0 && (l += "origin=" + r), reverseMerge(t, {
                delay: 1,
                style: "goodreads",
                ajax: {
                    url: l,
                    options: {
                        method: "get"
                    }
                },
                width: 450,
                hook: i,
                stem: o
            }), !(parseInt(n) > 0)) throw "You must specify a book ID in JS or in the element.";
        new Tip(e, t)
    }, Element.addMethods({
        bookTip: Element.bookTip
    })
}();
var current_tabs = {},
    changeTab = function(e, t) {
        if (current_tab = current_tabs[e], $(current_tab + "Link") && $(t + "Link")) {
            var i = $(current_tab);
            i && i.hide();
            var o = $(current_tab + "Link");
            o && (o.removeClassName("selectedTab"), o.addClassName("tab"));
            var n = $(t);
            n && n.show();
            var s = $(t + "Link");
            s && (s.removeClassName("tab"), s.addClassName("selectedTab")), current_tab = current_tabs[e] = t
        }
    };
$j(function() {
    $j(document).on("click", ".js-dhtmlTab", function(e) {
        e.preventDefault();
        var t = $j(e.target);
        t.hasClass("selectedTab") || changeTab(t.data("tab-set"), t.data("tab-name"))
    })
}), String.prototype.ordinalize = function() {
    return parseInt(this).ordinalize()
}, Number.prototype.ordinalize = function() {
    for (var e = "th", t = this; t > 100;) t -= 100;
    if (10 > t || t > 13) switch (t % 10) {
        case 1:
            e = "st";
            break;
        case 2:
            e = "nd";
            break;
        case 3:
            e = "rd"
    }
    return new String(this + e)
}, $j(function() {
    $j("#emailForm input[autofocus]").focus()
});
var InfiniteScroll = {
    isLoading: !1,
    isDone: !1,
    lastY: 0,
    start: function(e) {
        if (this.options = Object.extend({
                page: 1,
                url: window.location.href.replace("format=html", "format=js")
            }, e || {}), this.url = this.options.url, this.page = this.options.page, this.url.match(/[\?&]page=\d+/)) {
            var t = this.url.match(/[\?&](page=(\d+)&?)/);
            this.page = parseInt(t[2]), this.url = this.url.replace(t[1], "")
        }
        this.url.match(/per_page=\d+/) && (this.url = this.url.replace(/per_page=\d+&?/, "")), Event.observe(window, "scroll", function(e) {
            if (InfiniteScroll.lastY > window.pageYOffset + 5) return void(InfiniteScroll.lastY = window.pageYOffset);
            InfiniteScroll.lastY = window.pageYOffset;
            var t = document.viewport.getScrollOffsets()[1] + document.viewport.getHeight();
            t >= document.body.scrollHeight - InfiniteScroll.getTriggerDistance() && InfiniteScroll.load()
        });
        var i = document.viewport.getScrollOffsets()[1] + document.viewport.getHeight();
        i >= document.body.scrollHeight && InfiniteScroll.load()
    },
    load: function() {
        return this.isLoading || this.isDone ? !1 : (this.isLoading = !0, void new Ajax.Request(this.url, {
            parameters: {
                page: InfiniteScroll.page + 1
            },
            evalJS: !0,
            method: "get",
            onLoading: function() {
                return null == InfiniteScroll.options.loading ? !0 : void("function" == typeof InfiniteScroll.options.loading ? InfiniteScroll.options.loading() : $(InfiniteScroll.options.loading).show())
            },
            onComplete: function(e) {
                InfiniteScroll.isLoading = !1, InfiniteScroll.page += 1, InfiniteScroll.options.loading && "function" != typeof InfiniteScroll.options.loading && $(InfiniteScroll.options.loading) && $(InfiniteScroll.options.loading).hide(), "function" == typeof InfiniteScroll.options.afterLoad && InfiniteScroll.options.afterLoad(e)
            },
            on204: function() {
                InfiniteScroll.isDone = !0
            }
        }))
    },
    getTriggerDistance: function() {
        if (this.options.triggerDistance) return this.options.triggerDistance;
        var e = document.body.scrollHeight / 2,
            t = 3 * document.viewport.getHeight();
        return e > t ? t : e
    }
};
! function() {
    Element.modalDialog = function(e, t) {
        e = $(e);
        var i = e.id + "_fader",
            o = $(i);
        if (o) $(o).update("").show();
        else {
            var o = $(i) || new Element("div", {
                id: e.id + "_fader",
                "class": "modalDialogFader"
            });
            $(e).appendChild(o), $(o).absolutize(), Event.observe(window, "resize", function() {
                $(o).clonePosition(e)
            })
        }
        var n = new Element("div").setStyle({
            backgroundColor: "white",
            opacity: "0.8",
            width: "100%",
            height: "100%"
        });
        $(o).update(n), $(o).clonePosition(e);
        var s = "string" == typeof t ? new Element("div").update(t) : $(t).show();
        $(o).appendChild(s), $(s).absoluteCenter()
    }, Element.clearModalDialog = function(e) {
        e = $(e), $(e.id + "_fader") && $(e.id + "_fader").hide()
    }, Element.absoluteCenter = function(e) {
        var t = $(e).up();
        "absolute" != t.getStyle("position") && "relative" != t.getStyle("position") && t.setStyle("position", "relative"), $(e).setStyle({
            position: "absolute",
            left: "50%",
            top: "50%",
            marginLeft: "-" + $(e).getWidth() / 2 + "px",
            marginTop: "-" + $(e).getHeight() / 2 + "px"
        })
    }, Element.addMethods({
        modalDialog: Element.modalDialog
    }), Element.addMethods({
        clearModalDialog: Element.clearModalDialog
    }), Element.addMethods({
        absoluteCenter: Element.absoluteCenter
    })
}();
var BookAutocompleter = Class.create(Ajax.Autocompleter, {
        onKeyPress: function($super, e) {
            this.active || e.keyCode != Event.KEY_TAB && e.keyCode != Event.KEY_RETURN ? $super(e) : Event.stop(e)
        }
    }),
    BookSearchAutocompleter = Class.create(Ajax.Autocompleter, {
        selectEntry: function() {
            this.active = !1, this.index < 0 || this.updateElement(this.getCurrentEntry())
        },
        updateChoices: function(e) {
            if (!this.changed && this.hasFocus) {
                if (this.update.innerHTML = e, Element.cleanWhitespace(this.update), Element.cleanWhitespace(this.update.down()), this.update.firstChild && this.update.down().childNodes) {
                    this.entryCount = this.update.down().childNodes.length;
                    for (var t = 0; t < this.entryCount; t++) {
                        var i = this.getEntry(t);
                        i.autocompleteIndex = t, this.addObservers(i)
                    }
                } else this.entryCount = 0;
                this.stopIndicator(), this.index = -1, 1 == this.entryCount && this.options.autoSelect ? (this.selectEntry(), this.hide()) : this.render()
            }
        },
        onKeyPress: function(e) {
            if (this.active) switch (e.keyCode) {
                case Event.KEY_TAB:
                case Event.KEY_RETURN:
                    if (this.selectEntry(), !(this.index > -1)) return;
                    Event.stop(e);
                case Event.KEY_ESC:
                    return this.hide(), this.active = !1, void Event.stop(e);
                case Event.KEY_LEFT:
                case Event.KEY_RIGHT:
                    return;
                case Event.KEY_UP:
                    return this.markPrevious(), this.render(), void Event.stop(e);
                case Event.KEY_DOWN:
                    return this.markNext(), this.render(), void Event.stop(e)
            } else if (e.keyCode == Event.KEY_TAB || e.keyCode == Event.KEY_RETURN || Prototype.Browser.WebKit > 0 && 0 == e.keyCode) return;
            this.changed = !0, this.hasFocus = !0, this.observer && clearTimeout(this.observer), this.observer = setTimeout(this.onObserverEvent.bind(this), 1e3 * this.options.frequency)
        }
    }),
    BookAutoCompleteField = {
        setup: function(e, t, i) {
            var o = BookAutoCompleteField.elementIds(e, t),
                i = i || {},
                n = i.url || "/book/auto_complete";
            i.url = null;
            var s = i.afterComplete;
            i.afterComplete = null;
            var a = i.autocompleterClass || BookAutocompleter;
            i.autocompleterClass = null;
            var r = {
                afterUpdateElement: function(e, t) {
                    return "" == t.id ? void($(o.ac_field_id).value = "") : ($(o.ac_selected).show().down(".acItem").update(t.innerHTML), $(o.ac_wrapper).hide(), $(o.ac_target_id).value = t.id, void("function" == typeof s && s(e, t)))
                },
                callback: function(e, t) {
                    return "q=" + $F(o.ac_field_id)
                },
                indicator: o.ac_loading_id,
                minChars: 3
            };
            i = Object.extend(r, i), window[o.ac_autocompleter_name] = new a(o.ac_field_id, o.ac_autocomplete_id, n, i)
        },
        clear: function(e, t, i) {
            var o = BookAutoCompleteField.elementIds(e, t),
                i = i || {};
            $(o.ac_selected).hide(), $(o.ac_wrapper).show(), $(o.ac_target_id).value = "", $(o.ac_field_id).addClassName("greyText").value = i.field_tip || "Start typing the name of a book...", "function" == typeof i.after && i.after()
        },
        remove: function(e, t) {
            var i = BookAutoCompleteField.elementIds(e, t);
            $(i.ac_target_id).value = "", $(i.ac_selected).fade({
                to: .2
            }), $(i.ac_selected).down(".controls").setStyle({
                visibility: "hidden"
            })
        },
        elementIds: function(e, t) {
            return {
                ac_field_id: e,
                ac_target_id: t,
                ac_loading_id: e + "_loading",
                ac_autocomplete_id: e + "_auto_complete",
                ac_autocompleter_name: e + "_auto_completer",
                ac_wrapper: e + "_wrapper",
                ac_selected: e + "_selected"
            }
        }
    },
    HeaderNav = {
        searchHeaderAfterUpdateElement: function(e, t) {
            if ("" == t.id) {
                var i = t.down("a#autocompleteSearchLink");
                return void(i && (window.location.href = i.getAttribute("href")))
            }
            var o = $$("#" + t.id + " .title")[0];
            o && (e.value = o.innerHTML.stripTags().strip()), $j.post("/track_conversion_action", {
                event: "autocomplete_suggestion_accepted",
                options: {
                    multiple: !0
                }
            }), window.location = "/book/show/" + t.id + "?ac=1&from_search=1"
        }
    };
if (Element.activateAjaxPaginationLink = function(e) {
        e.observe("click", function(e) {
            new Ajax.Request(this.href, {
                method: "get",
                evalJS: !0
            });
            try {
                pageTracker._trackPageview(this.href)
            } catch (t) {}
            e.stop()
        })
    }, Element.activateAjaxPagination = function(e) {
        e.select(".imagePaginationSm a").each(function(e) {
            e.activateAjaxPaginationLink()
        })
    }, Element.addMethods({
        activateAjaxPaginationLink: Element.activateAjaxPaginationLink
    }), Element.addMethods({
        activateAjaxPagination: Element.activateAjaxPagination
    }), document.observe("dom:loaded", function() {
        $$(".bookTipBottomRight").each(function(e) {
            e.bookTip({
                attach: "bottomRight"
            })
        }), $$(".bookTipBottomLeft").each(function(e) {
            e.bookTip({
                attach: "bottomLeft"
            })
        }), $$(".bookTipLeft").each(function(e) {
            e.bookTip({
                attach: "left"
            })
        }), $$(".imagePaginationSm a").each(function(e) {
            e.activateAjaxPaginationLink()
        })
    }), jQuery(document).ready(function() {
        if (jQuery("#pollForReload").length > 0) {
            var e = $j("#pollForReload").data("reload-link");
            setInterval(function() {
                jQuery.getScript(e)
            }, 1e4)
        }
    }), "undefined" == typeof $gr) var $gr = {};
$gr && ($gr.components = {}, $gr.communityQA = {}, $gr.giveaway = {}, $gr.shared = {}, $gr.user = {}), Modernizr.touchevents ? $gr.touch = "touchstart" : $gr.touch = "click", $gr.components.slide = function(e, t) {
    this.containerClassName = ".sliderContainer", this.containerWidth = e, this.contentClassName = ".slider", this.sliderNav = ".navButton", this.sliderPrev = ".sliderPrev", this.sliderNext = ".sliderNext", this.sliderWidth = t, this.maxLeft = 0, this.minLeft = 0, this.newWidthSet = !1;
    var i = this,
        o = 500,
        n = $j(this.contentClassName);
    this.setNavVisibility = function(e) {
        "undefined" == typeof e && n.length && (e = n.position().left), e > i.minLeft ? $j(i.sliderNext).show() : $j(i.sliderNext).hide(), e < i.maxLeft ? $j(i.sliderPrev).show() : $j(i.sliderPrev).hide()
    }, this.singleSlide = function(e) {
        var t;
        n.stop(), "prev" === e ? t = $j(this.contentClassName).position().left + 4 * this.containerWidth / 5 : "next" === e && (t = $j(this.contentClassName).position().left - 4 * this.containerWidth / 5), t = Math.min(t, i.maxLeft), t = Math.max(t, i.minLeft), i.setNavVisibility(t), $j(this.contentClassName).animate({
            left: t
        }, o)
    }, this.setNewWidth = function() {
        var t = 0;
        $j(".slider .cover").each(function() {
            t += $j(this).outerWidth()
        }), i.sliderWidth = t;
        var o = 30;
        i.minLeft = Math.min(e - i.sliderWidth - o, i.maxLeft), $j(".slider").width(t + 50), i.newWidthSet = !0
    }, this.toggleBackground = function(e) {
        $j(i.sliderNext).toggleClass("sliderBackground", e), $j(i.sliderPrev).toggleClass("sliderBackground", e)
    }, $j(this.containerClassName).on("click", this.sliderNav, function() {
        var e;
        this.hasClassName("sliderNext") ? e = "next" : this.hasClassName("sliderPrev") && (e = "prev"), i.first ? (i.singleSlide(e, !0), i.first = void 0) : i.singleSlide(e)
    }), $j(document).on("mouseenter", this.containerClassName, function() {
        i.toggleBackground(!0), i.setNavVisibility()
    }).on("mouseleave", this.containerClassName, function() {
        i.toggleBackground(!1), i.setNavVisibility()
    }), window.onload = function() {
        0 !== n.length && (i.setNewWidth(), i.setNavVisibility(), i.toggleBackground(!1))
    }
}, $gr.components.friendRequests = function() {
    var e = function(e) {
        var t = e.parents(".dropDown").eq(0),
            i = t.siblings(".dropDownOpener").eq(0).find(".notification");
        i.html(Number(i.text()) - 1), 0 === Number(i.text()) && i.hide(), $notificationWrapper = e.parents(".notificationWrapper"), $notificationWrapper.addClass("hide"), $notificationWrapper.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend", $j.get("/friend/requests", {
            format: "js"
        }).done(function(e) {
            t.find(".dropDownMenu").html(e)
        }))
    };
    return {
        reloadMenu: e
    }
}(), $j(document).on("click", ".friendsNotice .confirmRequest", function(e) {
    $gr.components.friendRequests.reloadMenu($j(e.target)), e.preventDefault()
}), $gr.components.mentionInserter = function() {
    var e = function(e) {
            this.textarea = e
        },
        t = function(e) {
            i(this.textarea) ? o(this.textarea, e) : this.textarea.value += e
        },
        i = function(e) {
            return _.isNumber(e.selectionStart)
        },
        o = function(e, t) {
            var i = e.selectionStart;
            n(t, e, i), s(t, e, i)
        },
        n = function(e, t, i) {
            var o = t.value.substring(0, i),
                n = t.value.substring(i, t.value.length);
            t.value = o + e + n
        },
        s = function(e, t, i) {
            var o = i + e.length;
            t.selectionStart = o, t.selectionEnd = o
        };
    return {
        setField: e,
        insertText: t
    }
}(), $gr.components.explanationHighlighter = function() {
    var e, t = function() {
            var t = $j(this).data("term-name");
            e.find("." + t).addClass("highlighted")
        },
        i = function() {
            var t = $j(this).data("term-name");
            e.find("." + t).removeClass("highlighted")
        },
        o = function(o, n, s) {
            e = $j("." + s), $j("." + n).find("." + o).hover(t, i)
        };
    return {
        init: o
    }
}();
var Cookies = {
        get: function(e) {
            var t = null;
            return jQuery.each(document.cookie.split("; "), function(i, o) {
                var n = o.split("=");
                n[0] === e && (t = n[1])
            }), t
        },
        set: function(e, t, i) {
            i = i || 365;
            var o = new Date;
            o.setTime(o.getTime() + 24 * i * 60 * 60 * 1e3);
            var n = "; expires=" + o.toGMTString();
            document.cookie = e + "=" + encodeURIComponent(t) + n + "; path=/"
        }
    },
    EnvironmentDetection = function() {
        var e = function(e) {
                return null == navigator.userAgent.match(e) ? !1 : !0
            },
            t = function() {
                return e(/android 4\.0/i)
            },
            i = function() {
                return e(/android 3/i)
            },
            o = function() {
                for (var e, t = 3, i = document.createElement("div"), o = i.getElementsByTagName("i"); i.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", o[0];);
                return t > 4 ? t : e
            };
        return {
            android: {
                isICS: t,
                isHC: i
            },
            ie: o
        }
    }();
! function() {
    var e = {
        addIcon: "//s.gr-assets.com/assets/gr/icons/icon_add-4bf34f2abdff9c1d51bcb53d0a8c71ad.svg",
        amazon: {
            brand: {
                favIcon40: "//s.gr-assets.com/assets/amazon/brand/amazon_favicon_40-cf3e4a4940c8ed9d095c15ebb3d78f3f.png"
            }
        },
        closeIcon: "//s.gr-assets.com/assets/gr/icons/icon_close-63734f04e7baaa77fbad796225e5724c.svg",
        closeIcons: {
            darkBackground: "//s.gr-assets.com/assets/gr/icons/icon_close_white-dbf4152deeef5bd3915d5d12210bf05f.svg"
        },
        facebook: {
            brand: {
                favIcon: "//s.gr-assets.com/assets/facebook/fb-c8d40d3b6a03b9b61cd240a98e652e2e.png"
            }
        },
        goodreadsApps: {
            androidDownloadBadgeDesktopHome: "//s.gr-assets.com/assets/app/badge-android-desktop-home-0f517cbae4d56c88a128d27a7bea1118.png",
            androidDownloadBadgeDesktopHome2x: "//s.gr-assets.com/assets/app/badge-android-desktop-home-2x-e31514e1fb4dddecf9293aa526a64cfe.png",
            iOSDownloadBadge: "//s.gr-assets.com/assets/app/badge-ios-desktop-homepage-6ac7ae16eabce57f6c855361656a7540.svg"
        },
        icons: {
            info: "//s.gr-assets.com/assets/gr/icons/icon_info-ec2ca870befa3adc83295813fadc66d9.svg"
        },
        settingsCog: "//s.gr-assets.com/assets/gr/icons/settings_cog-2acb8771e16e7cf04aa082503f1be885.svg",
        siteFooter: {
            facebookIcon: "//s.gr-assets.com/assets/site_footer/footer_facebook-ea4ab848f8e86c5f5c98311bc9495a1b.svg",
            instagramIcon: "//s.gr-assets.com/assets/site_footer/footer_instagram-d59e3887020f12bcdb12e6c539579d85.svg",
            linkedInIcon: "//s.gr-assets.com/assets/site_footer/footer_linkedin-5b820f4703eff965672594ef4d10e33c.svg",
            twitterIcon: "//s.gr-assets.com/assets/site_footer/footer_twitter-126b3ee80481a763f7fccb06ca03053c.svg"
        },
        currentlyReadingSparseStateIcon: "//s.gr-assets.com/assets/react_components/currently_reading/icn_default_CR_ltrail-16f28d39654104ceb329648a474943eb.svg",
        wtrSparseStateIcon: "//s.gr-assets.com/assets/react_components/shelf_display/icn_default_wtr_leftrail-62c079d4573e5db15651d273fc72d1d2.svg",
        notificationFromGRIcon: "//s.gr-assets.com/assets/icons/goodreads_g-6781672965e751d8a1a6db90b280e1b1.svg",
        loadingGif: "//s.gr-assets.com/assets/loading-trans-ced157046184c3bc7c180ffbfc6825a4.gif"
    };
    window.GrImageRegistry = e
}();
var grPopup = {};
grPopup.show = function(e, t) {
    var i = EnvironmentDetection.ie();
    "function" != typeof t && (t = $j.fn.show), e.each(function() {
        var e = $j(this);
        e.is(":visible") || (t.call(e), e.offset().left < $j(window).scrollLeft() ? e.offset({
            left: $j(window).scrollLeft()
        }) : $j(window).scrollLeft() + $j(window).innerWidth() < e.offset().left + e.outerWidth() && e.offset({
            left: $j(window).scrollLeft() + $j(window).innerWidth() - e.outerWidth()
        }), void 0 !== i && 8 > i && (container = e.closest(".wtrButtonContainer"), container.css("z-index", container.css("z-index") + 1e3)))
    })
}, grPopup.hide = function(e, t) {
    var i = EnvironmentDetection.ie();
    "function" != typeof t && (t = $j.fn.hide), e.each(function() {
        var e = $j(this);
        e.is(":visible") && e.queue(function(e) {
            t.call($j(this)), e()
        }).queue(function(e) {
            $j(this).css("left", ""), e()
        }).queue(function(e) {
            void 0 !== i && 8 > i && (container = $j(this).closest(".wtrButtonContainer"), container.css("z-index", container.css("z-index") - 1e3)), e()
        })
    })
}, HoverIntent = {}, HoverIntent.onEnterIntent = function(e, t, i, o) {
    "undefined" == typeof i && (i = e);
    try {
        clearTimeout(i.leaveTimeout)
    } catch (n) {}
    "undefined" == typeof o && (o = HoverIntent.hoverDelay), i.hoverTimeout = window.setTimeout(function() {
        t.call(e)
    }, o)
}, HoverIntent.onLeaveIntent = function(e, t, i, o) {
    "undefined" == typeof i && (i = e);
    try {
        clearTimeout(i.hoverTimeout)
    } catch (n) {}
    "undefined" == typeof o && (o = HoverIntent.hoverDelay), i.leaveTimeout = window.setTimeout(function() {
        t.call(e)
    }, o)
}, HoverIntent.hoverDelay = 250;
var sourcesToHideBuyFeatures = ["ebfg_gr", "ebfg_fb", "ebfg_fbm", "ebfg_tw", "ebfg_email", "ebfg_sms"];
$j(document).ready(function() {
    showBuyableFeatures()
}), $j(document).on("tooltipHtmlConstructed", function() {
    showBuyableFeatures()
}), WantToRead = {}, $j(function() {
    var e, t;
    WantToRead.shelfMenu = function() {
        return "object" == typeof e && 0 !== e.length ? e : e = $j(".wtrShelfMenu").first()
    }, WantToRead.exclusiveShelfButtons = function() {
        return "object" == typeof t && 0 !== t.length ? t : t = WantToRead.shelfMenu().children(".wtrShelfList").children(".wtrExclusiveShelves").children("li").children("button")
    }, WantToRead.resetShelfMenuStored = function() {
        e = $j(".wtrShelfMenu").first()
    }
}), WantToRead.submitFormViaAjax = function(e, t, i) {
    var o = e.serializeArray();
    e.find("button").each(function(e) {
        o.push({
            name: $j(this).prop("name"),
            value: $j(this).attr("value")
        })
    }), o.push({
        name: "wtr_new",
        value: !0
    }), o.push({
        name: "wtr_button_id",
        value: e.closest(".wtrButtonContainer").prop("id")
    }), $j.ajax({
        type: "POST",
        url: e.prop("action"),
        data: o,
        dataType: "script"
    }).done(function() {
        "function" == typeof t && t()
    }).fail(function(e) {
        var t;
        if (e && 403 === e.status) {
            if (t = JSON.parse(e.responseText), t.redirect) return location.href = t.redirect, !0;
            alert("So sorry, but there was a problem completing your request. Please reload the page and try again.")
        }("function" != typeof i || i(e) === !1) && alert("So sorry, but there was a problem completing your request. Please reload the page and try again.")
    })
}, WantToRead.setupShelfVisibilityInMenu = function(e) {
    var t = e.data("exclusive-shelf");
    if (WantToRead.shelfMenu().find("ul.wtrExclusiveShelves > li, ul.wtrNonExclusiveShelves > li").length > 11 ? WantToRead.shelfMenu().find(".wtrShelfSearch").show() : WantToRead.shelfMenu().find(".wtrShelfSearch").hide(), WantToRead.updateAddShelfReftags(WantToRead.shelfMenu()), WantToRead.exclusiveShelfButtons().show(), WantToRead.shelfMenu().find(".wtrNonExclusiveShelves input").prop("checked", !1), t) {
        WantToRead.shelfMenu().find("button[value='" + t + "']").hide();
        var i = e.data("shelves");
        if (i)
            for (var o = i.toString().split(","), n = 0; n < o.length; n++) WantToRead.shelfMenu().find("input[value='" + o[n] + "']").prop("checked", !0)
    }
}, WantToRead.showShelfMenu = function(e) {
    var t = e.find(".wtrRight");
    WantToRead.resetShelfSearch();
    var i = t.find(".wtrShelfMenu");
    i.length > 0 && i.get(0) !== WantToRead.shelfMenu().get(0) && i.remove(), 0 == t.find("form.wtrAddShelf").length && t.append(WantToRead.shelfMenu()), WantToRead.setupShelfVisibilityInMenu(t), grPopup.show(WantToRead.shelfMenu(), function() {
        this.slideDown("fast"), EnvironmentDetection.android.isICS() || EnvironmentDetection.android.isHC() || this.css("overflow-y", "auto")
    })
}, WantToRead.hideShelfMenu = function() {
    var e = WantToRead.shelfMenu().find("form.wtrAddShelf input[name=name]"),
        t = WantToRead.shelfMenu().find(".wtrShelfSearchField");
    e.is(":focus") || 0 !== t.length && t.is(":focus") || (grPopup.hide(WantToRead.shelfMenu(), function() {
        this.slideUp("fast")
    }), "" === e.val() && WantToRead.hideAddShelfForm())
}, WantToRead.toggleAddShelfForm = function() {
    var e = WantToRead.shelfMenu().find("form.wtrAddShelf");
    e.is(":visible") ? WantToRead.hideAddShelfForm(e) : WantToRead.showAddShelfForm(e)
}, WantToRead.showAddShelfForm = function(e) {
    var t, i = WantToRead.shelfMenu().children(".wtrOtherShelfOptions"),
        o = WantToRead.shelfMenu().children(".wtrShelfList");
    e || (e = WantToRead.shelfMenu().find("form.wtrAddShelf")), e.show(), t = e.height(), i.css("height", i.height() + t), o.css("max-height", parseInt(o.css("max-height"), 10) - t)
}, WantToRead.hideAddShelfForm = function(e) {
    var t, i = WantToRead.shelfMenu().children(".wtrOtherShelfOptions"),
        o = WantToRead.shelfMenu().children(".wtrShelfList");
    e || (e = WantToRead.shelfMenu().find("form.wtrAddShelf")), e.is(":visible") && (t = e.height(), e.hide(), i.css("height", i.height() - t), o.css("max-height", parseInt(o.css("max-height"), 10) + t))
}, WantToRead.showShelfSearchAddShelf = function() {
    var e = WantToRead.shelfMenu().find(".wtrShelfSearch > .wtrShelfSearchField").val(),
        t = WantToRead.shelfMenu().children(".wtrShelfList").children(".wtrShelfSearchAddShelf"),
        i = t.find("button");
    e = toShelfName(e), WantToRead.shelfMenu().find(".wtrShelfSearchAddShelf button[name=name]").val(e), WantToRead.shelfMenu().find(".wtrShelfSearchAddShelf .wtrButtonLabelShelfName").text(e), "want-to-read" != e && "" != e && 0 === WantToRead.shelfMenu().find("ul.wtrExclusiveShelves > li[data-shelf-name='" + e + "'], ul.wtrNonExclusiveShelves > li[data-shelf-name='" + e + "']").length ? (t.css("display", "block"), i.is(":hidden") && i.css("display", "block")) : t.css("display", "none"), WantToRead.hideAddShelfForm(), WantToRead.shelfMenu().children(".wtrOtherShelfOptions").children("label.wtrAddShelf").hide()
}, WantToRead.hideShelfSearchAddShelf = function() {
    WantToRead.shelfMenu().find(".wtrShelfSearchAddShelf").hide(), WantToRead.shelfMenu().children(".wtrOtherShelfOptions").children("label.wtrAddShelf").show()
}, WantToRead.resetShelfSearch = function() {
    WantToRead.shelfMenu().find(".wtrShelfSearchField").val(""), WantToRead.shelfMenu().find(".wtrShelfSearchEmptyResults").css("display", "none"), WantToRead.hideShelfSearchAddShelf(), WantToRead.shelfMenu().find("ul.wtrExclusiveShelves > li, ul.wtrNonExclusiveShelves > li").css("display", "block").removeClass("topShelfSearchResult")
}, WantToRead.thankForRating = function(e) {
    grPopup.show(e.find(".wtrPrompt.ratingThanks"), function() {
        this.fadeIn()
    }), window.setTimeout(function() {
        grPopup.hide(e.find(".wtrPrompt.ratingThanks"), function() {
            $j(this).fadeOut()
        })
    }, 6e3)
}, WantToRead.showPromptToReview = function() {
    $j(this).hasClass("wtrHasReview") || grPopup.show($j(this).closest(".wtrButtonContainer").find(".wtrPrompt.wtrPromptToReview"), function() {
        this.fadeIn()
    })
}, WantToRead.hidePromptToReview = function() {
    grPopup.hide($j(this).closest(".wtrButtonContainer").find(".wtrPrompt.wtrPromptToReview"), function() {
        this.fadeOut()
    })
}, WantToRead.showPromptToEditReview = function() {
    grPopup.show($j(this).closest(".wtrButtonContainer").find(".wtrPrompt.wtrPromptToEditReview"), function() {
        this.fadeIn()
    })
}, WantToRead.hidePromptToEditReview = function() {
    grPopup.hide($j(this).closest(".wtrButtonContainer").find(".wtrPrompt.wtrPromptToEditReview"), function() {
        this.fadeOut()
    })
}, WantToRead.showUserStatusPrompt = function() {
    grPopup.show($j(this).closest(".wtrButtonContainer").find(".wtrPrompt.wtrUserStatusPrompt"), function() {
        this.fadeIn()
    })
}, WantToRead.hideUserStatusPrompt = function(e) {
    null != e && e.jquery || (e = $j(".wtrButtonContainer")), grPopup.hide(e.find(".wtrPrompt.wtrUserStatusPrompt"), function() {
        this.fadeOut()
    })
}, WantToRead.showNewUserStatusForm = function(e) {
    grPopup.show(e.find(".wtrNewUserStatus")), e.find('.wtrNewUserStatus input[type="text"]').select()
}, WantToRead.hideNewUserStatusForm = function(e) {
    grPopup.hide(e.find(".wtrFloatingBox.wtrNewUserStatus"), function() {
        this.fadeOut()
    })
}, WantToRead.showFormProgress = function(e) {
    e.is("input") && (e = e.parent()), e.find(".progressTrigger").hide(), e.find(".progressIndicator").show()
}, WantToRead.hideFormProgress = function(e) {
    e.find(".progressIndicator").hide(), e.find(".progressTrigger").show()
}, WantToRead.showUserStatusConfirmation = function(e, t) {
    e.find(".wtrUserStatusConfirmation").replaceWith(t), confirmation = e.find(".wtrUserStatusConfirmation"), grPopup.show(confirmation, function() {
        this.fadeIn()
    }), confirmation.on("mouseleave.wtrShowUserStatusConfirmation", function(e) {
        confirmation.off("mouseleave.wtrShowUserStatusConfirmation"), grPopup.hide($j(this), function() {
            this.fadeOut()
        }), WantToRead.enablePrompts()
    })
}, WantToRead.showPromptToReorderShelf = function() {
    grPopup.show($j(this).closest(".wtrButtonContainer").find(".wtrPrompt.wtrReorderShelf"), function() {
        this.fadeIn()
    })
}, WantToRead.hidePromptToReorderShelf = function() {
    grPopup.hide($j(this).closest(".wtrButtonContainer").find(".wtrPrompt.wtrReorderShelf"), function() {
        this.fadeOut()
    })
}, WantToRead.activateReorderForm = function(e) {
    e.find(".wtrPrompt.wtrReorderShelf").removeClass("wtrPrompt").addClass("wtrFloatingBox"), e.find(".saveShelfPosition").show(), e.find(".wtrReorderShelf .viewShelfLink").hide()
}, WantToRead.deactivateReorderForm = function(e) {
    e.find(".wtrFloatingBox.wtrReorderShelf").removeClass("wtrFloatingBox").addClass("wtrPrompt"), e.find(".saveShelfPosition").hide(), e.find(".wtrReorderShelf .viewShelfLink").show()
}, WantToRead.enablePrompts = function() {
    WantToRead.disablePrompts(), $j(document).on({
        "mouseenter.wtrReviewPrompt": function() {
            HoverIntent.onEnterIntent(this, WantToRead.showPromptToReview)
        },
        "mouseleave.wtrReviewPrompt": function() {
            HoverIntent.onLeaveIntent(this, WantToRead.hidePromptToReview)
        }
    }, ".wtrLeft.wtrStatusRead, .wtrLeft.wtrStatusOtherShelf"), $j(document).on({
        "mouseenter.wtrReviewPrompt": function() {
            HoverIntent.onEnterIntent(this, WantToRead.showPromptToEditReview)
        },
        "mouseleave.wtrReviewPrompt": function() {
            HoverIntent.onLeaveIntent(this, WantToRead.hidePromptToEditReview)
        }
    }, ".wtrLeft.wtrStatusRead.wtrHasReview, .wtrLeft.wtrStatusOtherShelf.wtrHasReview"), $j(document).on({
        "mouseenter.wtrStatusPromptEvents": function() {
            HoverIntent.onEnterIntent(this, WantToRead.showUserStatusPrompt)
        },
        "mouseleave.wtrStatusPromptEvents": function() {
            HoverIntent.onLeaveIntent(this, WantToRead.hideUserStatusPrompt)
        }
    }, ".wtrButtonContainer .wtrLeft.wtrStatusReadingNow")
}, WantToRead.disablePrompts = function(e) {
    $j(document).off("mouseenter.wtrReviewPrompt mouseleave.wtrReviewPrompt", ".wtrLeft.wtrStatusRead, .wtrLeft.wtrStatusOtherShelf"), $j(document).off("mouseenter.wtrReviewPrompt mouseleave.wtrReviewPrompt", ".wtrLeft.wtrStatusRead.wtrHasReview, .wtrLeft.wtrStatusOtherShelf.wtrHasReview"), $j(document).off("mouseenter.wtrStatusPromptEvents mouseleave.wtrStatusPromptEvents", ".wtrButtonContainer .wtrLeft.wtrStatusReadingNow")
}, $j(function() {
    WantToRead.enablePrompts(), $j(".wtrButtonContainer input, .wtrButtonContainer textarea").placeholder(), $j(document).on("submit", ".wtrButtonContainer form.wtrAddShelf, .wtrShelfSearchAddShelf > form", function() {
        var e = $j(this),
            t = e.closest(".wtrRight").find(".hiddenShelfForm"),
            i = t.find("[name='book_id']").val(),
            o = t.find("[name='unique_id']").val();
        e.find("[name='book_id']").val(i), e.find("[name='unique_id']").val(o), WantToRead.showFormProgress(e)
    }), $j(document).on("submit", ".wtrButtonContainer form", function(e) {
        e.preventDefault(), WantToRead.submitFormViaAjax($j(this), null, function(e) {
            if (e && 403 === e.status) {
                var t = JSON.parse(e.responseText);
                if (t.redirect) return location.href = t.redirect, !0
            }
            return !1
        })
    }), $j(document).on("click", ".wtrButtonContainer button.wtrUnshelve", function(e) {
        e.preventDefault();
        var t = $j(this);
        window.confirm("Removing a book deletes your rating, review, etc. Remove this book from all your shelves?") && (t.parents(".secondaryWtrButton").length > 0 ? handleSecondaryWtrUnshelving(e) : t.closest("form").submit())
    }), $j(document).on("click", ".wtrButtonContainer button.wtrToRead", function() {
        WantToRead.showFormProgress($j(this).closest("form"))
    }), $j(document).on("mouseenter.wtrButton", ".wtrButtonContainer .wtrRight", function() {
        HoverIntent.onEnterIntent(this, function() {
            WantToRead.showShelfMenu($j(this).closest(".wtrButtonContainer"))
        }, WantToRead.shelfMenu())
    });
    var e = function(e) {
        HoverIntent.onLeaveIntent(this, WantToRead.hideShelfMenu, WantToRead.shelfMenu(), e);
    };
    $j(document).on("mouseleave.wtrButton", ".wtrButtonContainer .wtrRight", function() {
        var t = 1e3,
            i = $j(this),
            o = i.find(".wtrShelfSearchField");
        (i.find("form.wtrAddShelf").is(":visible") || o.length > 0 && o.val().length > 0) && (t = 5e3), e(t)
    }), $j(document).on("click.wtrButton", ".wtrButtonContainer button.wtrShelfButton", function() {
        WantToRead.shelfMenu().is(":animated") || (WantToRead.shelfMenu().is(":visible") ? WantToRead.hideShelfMenu() : WantToRead.showShelfMenu($j(this).closest(".wtrButtonContainer")))
    }), $j(".wtrShelfSearchField").search("ul.wtrExclusiveShelves > li > button, ul.wtrNonExclusiveShelves > li > label", ".wtrShelfSearchField", function(e) {
        var t = "ul.wtrExclusiveShelves > li, ul.wtrNonExclusiveShelves > li";
        e.empty(function() {
            WantToRead.shelfMenu().find(t).css("display", "none"), WantToRead.shelfMenu().find(".wtrShelfSearchEmptyResults").css("display", "block"), WantToRead.showShelfSearchAddShelf()
        }), e.reset(function() {
            WantToRead.resetShelfSearch()
        }), e.results(function(e) {
            WantToRead.shelfMenu().find(".wtrShelfSearchEmptyResults").css("display", "none"), WantToRead.shelfMenu().find(t).css("display", "none").removeClass("topShelfSearchResult"), e.parent().css("display", "block"), (void 0 === EnvironmentDetection.ie() || EnvironmentDetection.ie() >= 9) && e.not("button:hidden").first().parent().addClass("topShelfSearchResult"), WantToRead.showShelfSearchAddShelf()
        })
    }), (void 0 === EnvironmentDetection.ie() || EnvironmentDetection.ie() >= 9) && $j(document).on("keydown", ".wtrShelfMenu > .wtrShelfList > .wtrShelfSearch > .wtrShelfSearchField", function(e) {
        13 === e.which && $j(this).val().length > 0 && (e.preventDefault(), WantToRead.shelfMenu().find("ul.wtrExclusiveShelves > li > button:visible, ul.wtrNonExclusiveShelves > li > label > input:visible").first().click())
    }), $j(document).on("touchstart", ".wtrShelfList", function(e) {
        this.wtrScrollStartPos = $j(this).scrollTop() + e.originalEvent.touches[0].pageY
    }), $j(document).on("touchmove", ".wtrShelfList", function(e) {
        this.scrollTop = this.wtrScrollStartPos - e.originalEvent.touches[0].pageY, e.preventDefault()
    }), (EnvironmentDetection.android.isICS() || EnvironmentDetection.android.isHC()) && $j(".wtrButtonContainer .wtrShelfList").css("overflow-y", "hidden"), $j(document).on({
        mouseenter: function() {
            HoverIntent.onEnterIntent(this, WantToRead.showPromptToReorderShelf)
        },
        mouseleave: function() {
            HoverIntent.onLeaveIntent(this, WantToRead.hidePromptToReorderShelf)
        }
    }, ".wtrButtonContainer .wtrLeft.wtrStatusToRead"), $j(document).on("click", ".wtrButtonContainer .wtrReorderShelf form button[type=submit]", function() {
        WantToRead.showFormProgress($j(this).closest("form"))
    }), $j(document).on("click", ".wtrExclusiveShelves button.wtrExclusiveShelf", function() {
        t($j(this))
    }), $j(document).on("change", ".wtrNonExclusiveShelves input.wtrNonExclusiveShelf", function(e) {
        t($j(this), !0)
    });
    var t = function(e, t) {
        WantToRead.showFormProgress(e);
        var i = e.val(),
            o = e.closest(".wtrButtonContainer").find(".hiddenShelfForm");
        if (0 === o.length) return void alert("We're sorry, but there was a problem completing your request. Please reload the page and try again.");
        if (o.find("[name=name]").val(i), t) {
            var n = e.prop("checked");
            o.find("[name=a]").val(n ? "" : "remove"), WantToRead.setShelfTypeReftag(o, "wtrnes")
        } else WantToRead.setShelfTypeReftag(o, "wtres"), o.find("[name=a]").val("");
        WantToRead.submitFormViaAjax(o)
    };
    $j(document).on("click", ".wtrButtonContainer label.wtrAddShelf", function() {
        WantToRead.toggleAddShelfForm()
    }), $j(document).on("focusin", ".wtrButtonContainer .wtrPrompt.wtrUserStatusPrompt input[type=text]", function() {
        var e = $j(this).closest(".wtrButtonContainer");
        WantToRead.disablePrompts(), WantToRead.hideUserStatusPrompt(e), WantToRead.showNewUserStatusForm(e)
    }), $j(document).on("click", ".wtrButtonContainer .wtrNewUserStatus form button[type=submit]", function() {
        WantToRead.showFormProgress($j(this).closest("form"))
    }), $j(document).on("click", ".wtrButtonContainer div.wtrNewUserStatus form button[type=reset]", function() {
        buttonContainer = $j(this).closest(".wtrButtonContainer"), WantToRead.hideNewUserStatusForm(buttonContainer), WantToRead.enablePrompts()
    }), $j(document).on("click", ".wtrButtonContainer .wtrNewUserStatusProgressTypeToggle", function() {
        var e = $j(this).closest(".wtrNewUserStatusProgress"),
            t = $j(this).closest(".wtrNewUserStatus").find(".wtrNewUserStatusProgress:hidden");
        e.find("input, button").prop("disabled", !0), e.hide(), t.find("input, button").prop("disabled", !1), t.show()
    }), $j(document).on("click", ".wtrButtonContainer .wtrNewUserStatus button.wtrExclusiveShelf[value=read]", function(e) {
        e.preventDefault(), window.confirm("Mark this book as read?") && (t($j(this)), WantToRead.enablePrompts())
    }), $j(document).on("focusin", ".wtrButtonContainer input.shelfPosition", function() {
        $j(this).select(), WantToRead.activateReorderForm($j(this).closest(".wtrButtonContainer"))
    }), $j(document).on("click", ".wtrButtonContainer div.wtrReorderShelf form button[type=reset]", function() {
        WantToRead.deactivateReorderForm($j(this).closest(".wtrButtonContainer"))
    })
});
var clearSecondaryWtrButton = function(e, t) {
        var i = e.parents(".wtrButtonContainer").find(".wtrRight");
        i.data("exclusive-shelf", ""), i.data("shelves", ""), WantToRead.setupShelfVisibilityInMenu(i), i.removeClass("wtrDown"), i.addClass("wtrUp"), e.closest(".wtrLeft").replaceWith(t.wtr_button_left)
    },
    clearSecondaryRatingStars = function(e, t) {
        var i = e.parents(".wtrButtonContainer").find(".ratingStars");
        i.replaceWith(t.rating_stars), i.removeClass("hasRating")
    },
    handleSecondaryWtrUnshelving = function(e) {
        var t = $j(e.target),
            i = t.parents(".wtrButtonContainer").attr("id"),
            o = t.parents("form").attr("action"),
            n = {
                format: "json",
                unique_id: i,
                use_secondary_wtr: !0
            };
        $j.ajax({
            url: o,
            type: "POST",
            dataType: "json",
            data: n,
            success: function(t) {
                var i = $j(e.target);
                updateRateBooksHeaderAndFooter(t), clearSecondaryRatingStars(i, t), clearSecondaryWtrButton(i, t)
            }
        })
    };
WantToRead.setShelfTypeReftag = function(e, t) {
        var i = e.find(".wtrRefRightShelfMenu");
        i.length > 0 && i.val(i.val().replace(/_wtr(es|nes)$/, "_" + t))
    }, WantToRead.updateAddShelfReftags = function(e) {
        var t = e.parents(".wtrButtonContainer"),
            i = t.find(".wtrRefRightShelfMenu").val();
        null != i && "" != i && (e.find(".wtrShelfSearchAddRef").val(i.replace(/_wtres/, "_wtres")), e.find(".wtrAddSearchRef").val(i.replace(/_wtres/, "_wtrnes")), t.children(".wtrDown").length > 0 ? t.find(".wtrExisting").val("true") : t.find(".wtrExisting").val("false"))
    },
    function(e, t, i) {
        function o(e) {
            var t = {},
                o = /^jQuery\d+$/;
            return i.each(e.attributes, function(e, i) {
                i.specified && !o.test(i.name) && (t[i.name] = i.value)
            }), t
        }

        function n(e, o) {
            var n = this,
                s = i(n);
            if (n.value == s.attr("placeholder") && s.hasClass("placeholder"))
                if (s.data("placeholder-password")) {
                    if (s = s.hide().next().show().attr("id", s.removeAttr("id").data("placeholder-id")), e === !0) return s[0].value = o;
                    s.focus()
                } else n.value = "", s.removeClass("placeholder"), n == t.activeElement && n.select()
        }

        function s() {
            var e, t = this,
                s = i(t),
                a = this.id;
            if ("" == t.value) {
                if ("password" == t.type) {
                    if (!s.data("placeholder-textinput")) {
                        try {
                            e = s.clone().attr({
                                type: "text"
                            })
                        } catch (r) {
                            e = i("<input>").attr(i.extend(o(this), {
                                type: "text"
                            }))
                        }
                        e.removeAttr("name").data({
                            "placeholder-password": !0,
                            "placeholder-id": a
                        }).bind("focus.placeholder", n), s.data({
                            "placeholder-textinput": e,
                            "placeholder-id": a
                        }).before(e)
                    }
                    s = s.removeAttr("id").hide().prev().attr("id", a).show()
                }
                s.addClass("placeholder"), s[0].value = s.attr("placeholder")
            } else s.removeClass("placeholder")
        }
        var a, r, l = "placeholder" in t.createElement("input"),
            h = "placeholder" in t.createElement("textarea"),
            c = i.fn,
            d = i.valHooks;
        l && h ? (r = c.placeholder = function() {
            return this
        }, r.input = r.textarea = !0) : (r = c.placeholder = function() {
            var e = this;
            return e.filter((l ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": n,
                "blur.placeholder": s
            }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
        }, r.input = l, r.textarea = h, a = {
            get: function(e) {
                var t = i(e);
                return t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
            },
            set: function(e, o) {
                var a = i(e);
                return a.data("placeholder-enabled") ? ("" == o ? (e.value = o, e != t.activeElement && s.call(e)) : a.hasClass("placeholder") ? n.call(e, !0, o) || (e.value = o) : e.value = o, a) : e.value = o
            }
        }, l || (d.input = a), h || (d.textarea = a), i(function() {
            i(t).delegate("form", "submit.placeholder", function() {
                var e = i(".placeholder", this).each(n);
                setTimeout(function() {
                    e.each(s)
                }, 10)
            })
        }), i(e).bind("beforeunload.placeholder", function() {
            i(".placeholder").each(function() {
                this.value = ""
            })
        }))
    }(this, document, jQuery),
    /*

    Live searching of shelves, as used in, e.g., the shelf menu of the 'want to
    read' button.

    Adapted from:

    https://github.com/nakajima/jquery-livesearch

    (c) Copyright 2009 Pat Nakajima

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
    */
    function(e) {
        function t(t) {
            return (val = this.val()) ? e(t).filter(':containsi("' + val + '")') : !1
        }
        jQuery.expr[":"].containsi = jQuery.expr.createPseudo(function(e) {
            return function(t) {
                return toShelfName(jQuery(t).text()).toUpperCase().indexOf(toShelfName(e).toUpperCase()) >= 0
            }
        });
        var i = function(e) {
            this.callbacks = {}, e(this)
        };
        i.prototype.all = function(e) {
            this.callbacks.all = e
        }, i.prototype.reset = function(e) {
            this.callbacks.reset = e
        }, i.prototype.empty = function(e) {
            this.callbacks.empty = e
        }, i.prototype.results = function(e) {
            this.callbacks.results = e
        }, e.fn.search = function o(n, s, a) {
            function r() {
                if (result = t.call(e(this), n)) {
                    l.all && l.all.call(this, result);
                    var i = result.size() > 0 ? "results" : "empty";
                    return l[i] && l[i].call(this, result)
                }
                return l.all && l.all.call(this, e(n)), l.reset && l.reset.call(this)
            }
            var o = new i(a),
                l = o.callbacks;
            e(document).on("keyup click", s, r)
        }
    }(jQuery), $j(function() {
        var e = document.createElement("input");
        jQuery.support.placeholder = !1, "placeholder" in e && (jQuery.support.placeholder = !0)
    }),
    function(e) {
        "use strict";
        e(function() {
            e.support.placeholder || e("[placeholder]").focus(function() {
                var t = e(this);
                t.val() === t.attr("placeholder") && t.val("").removeClass("placeholder")
            }).blur(function() {
                var t = e(this);
                ("" === t.val() || t.val() === t.attr("placeholder")) && t.addClass("placeholder").val(t.attr("placeholder"))
            }).blur().parents("form").submit(function() {
                e(this).find("[placeholder]").each(function() {
                    var t = e(this);
                    t.val() === t.attr("placeholder") && t.val("")
                })
            })
        })
    }(jQuery), $j(document).ready(function() {
        $j(".aboutHeaderImage").slideshow()
    }),
    function() {
        var e, t, i = 5e3,
            o = function() {
                e = $j(this), t = setTimeout(function() {
                    n(e)
                }, i)
            },
            n = function(e) {
                var o, s = e.find("img.active");
                0 == s.length && (s = e.find("img:last")), o = s.next("img").length ? s.next("img") : e.find("img:first"), s.addClass("last-active"), o.css({
                    opacity: 0
                }), o.addClass("active"), o.animate({
                    opacity: 1
                }, i / 4, function() {
                    s.removeClass("active last-active"), t = setTimeout(function() {
                        n(e)
                    }, i)
                })
            };
        $j.fn.slideshow = function() {
            return o.apply(this)
        }
    }($j), document.observe("dom:loaded", function() {
        $("usersCreatedRecently") && ($("selectButtons").show(), $("selectSuspicious").observe("click", function() {
            select_all_suspicious_users()
        }), $("selectNone").observe("click", function() {
            deselect_all_users()
        }))
    }), $j(function() {
        $j("#deleteShelvesFilter").search("#deleteShelvesList > li > label", "#deleteShelvesFilter", function(e) {
            e.empty(function() {
                $j("#deleteShelvesList > li").addClass("initiallyHidden")
            }), e.reset(function() {
                $j("#deleteShelvesList > li").removeClass("initiallyHidden")
            }), e.results(function(e) {
                $j("#deleteShelvesList > li").addClass("initiallyHidden"), e.parent().removeClass("initiallyHidden")
            })
        }), $j(".spamResultItemCheckbox").change(function() {
            updateSpamResultItemStyling()
        }), $j(".spamSearchSelectAll").change(function() {
            $j(".spamResultItemCheckbox").prop("checked", this.checked), $j(".spamSearchSelectAll").prop("checked", this.checked), updateSpamResultItemStyling()
        }), $j("#spamDeletionForm").submit(function() {
            var e = $j(".spamResultItemCheckbox:checked").length,
                t = "You are about to delete ";
            return t += e, t += 1 == e ? " item" : " items", 1 == confirm(t)
        }), updateSpamResultItemStyling(), $j("#notes").on("change", "#notes_filter", function() {
            this.form.submit()
        })
    }), $j(document).on("click", "#deleteUsersButton", function(e) {
        var t = "",
            i = $j(document.createElement("textarea")).attr("name", "multi_delete_note").attr("rows", "4").attr("id", "multi_delete_note").attr("cols", "45"),
            o = $j(document.createElement("input")).attr("type", "button").attr("value", "Delete Users").attr("id", "submitMultiDelete").attr("class", "button");
        return e.preventDefault(), 0 === $j(".jsAdminCheckbox:checkbox:checked").length ? void alert("No users selected.") : void((!$j(".jsToggleDeleteSockPuppet").is(":checked") || confirm("Please confirm that these are sock puppet users, and you want delete all content they have created.")) && (0 == $j(".jsToggleDeleteSpam:checkbox:checked").length || confirm("Please confirm that these are spam users, and you want to delete all content that they have created. Please also confirm that you are not deleting librarians using this tool.")) && ($j(".jsAdminCheckbox:checkbox:checked").each(function(e, i) {
            t += $j(i).attr("data_user_name") + ", "
        }), t = t.slice(0, -2), Lightbox.showBoxString("<h2>Confirm Multi-User Deletion</h2><br><b>Please enter a deletion reason:</b><br><br>" + i[0].outerHTML + "<br><br><b>Users to delete:</b> " + t + "<br><br>" + o[0].outerHTML + "<br><br><a href='#' id='cancelMultiDeleteLightbox'>Cancel</a>", 500)))
    }), $j(document).on("click", "#cancelMultiDeleteLightbox", function(e) {
        e.preventDefault(), Lightbox.hideBox()
    }), $j(document).on("click", "#submitMultiDelete", function() {
        $j("#multi_delete_note").hide(), $j("#deleteUsersForm").append($j("#multi_delete_note")), $j("#deleteUsersForm").trigger("submit", [!0])
    }), $j(document).on("click", ".jsAdminCheckbox:checkbox", function() {
        var e = $j(".jsAdminCheckbox:checkbox:checked").length;
        0 === e ? $j("#adminSelectAllCheckbox").prop("indeterminate", !1).prop("checked", !1) : e === $j(".jsAdminCheckbox").length ? $j("#adminSelectAllCheckbox").prop("indeterminate", !1).prop("checked", !0) : $j("#adminSelectAllCheckbox").prop("indeterminate", !0).prop("checked", !1)
    }), $j(document).on("click", "#adminSelectAllCheckbox", function() {
        $j(".jsAdminCheckbox:checkbox:checked").length === $j(".jsAdminCheckbox:checkbox").length ? ($j(".jsAdminCheckbox:checkbox").prop("checked", !1), $j("#adminSelectAllCheckbox").prop("checked", !1)) : ($j(".jsAdminCheckbox:checkbox").prop("checked", !0), $j("#adminSelectAllCheckbox").prop("checked", !0))
    }), $j(document).on("change", "input.jsToggleDeleteSpam", function(e) {
        $j(e.target).prop("checked") ? ($j("table.adminRecords .deleteSingleUser").hide(), $j("table.adminRecords .deleteSingleSpamUser").show(), $j("table.adminRecords .deleteSingleSockPuppet").hide(), $j(".jsToggleDeleteSockPuppet").prop("checked", !1)) : ($j("table.adminRecords .deleteSingleSpamUser").hide(), $j("table.adminRecords .deleteSingleUser").show())
    }), $j(document).on("change", "input.jsToggleDeleteSockPuppet", function(e) {
        $j(e.target).prop("checked") ? ($j("table.adminRecords .deleteSingleUser").hide(), $j("table.adminRecords .deleteSingleSpamUser").hide(), $j("table.adminRecords .deleteSingleSockPuppet").show(), $j(".jsToggleDeleteSpam").prop("checked", !1)) : ($j("table.adminRecords .deleteSingleUser").show(), $j("table.adminRecords .deleteSingleSockPuppet").hide())
    }), $j(document).on("click", ".js-notifyFlagger", function() {
        var e = $j(this).data("admin-action"),
            t = $j(this).data("queued-item-id"),
            i = $j(this).data("ui");
        "show" === i ? $j("#message_field-" + e + "-" + t).show() : "hide" === i ? $j("#message_field-" + e + "-" + t).hide() : $j("#message_field-" + e + "-" + t).toggle()
    }), $j(function() {
        if (0 == window.location.pathname.search("/book_blogger_award")) {
            disable_subcategories();
            var e = $j("#categories input:checked").val();
            e && set_subcategory_for_category(e), $j("#categories input").change(function(e) {
                set_subcategory_for_category($j(e.target).val())
            }), $j(".pagination").length > 0 && ($j(".pagination").hide(), InfiniteScroll.start({
                loading: "infiniteLoading",
                afterLoad: function(e) {
                    $j("#entries").append(e.responseText)
                }
            })), $j(document).delegate("a.castVote", "click", function(e) {
                handle_vote_click(e, !1)
            }), $j(document).delegate("a.changeVote", "click", function(e) {
                handle_vote_click(e, !0)
            }), $j("#awardWidgetMarkup").select()
        }
    });
var grBookContextSelection = {
    populateBookSelectForQuotes: function() {
        grBookContextSelection.populateBookSelectOptions("quote_author_name", "bookSelect"), grBookContextSelection.clearOptionsFrom($j("#bookChapterSelect"))
    },
    populateBookSelectOptions: function(e, t) {
        var i, o, n, s, a, r, l, h, c = $j("#" + t),
            d = c.find("select");
        i = $j("#" + e), o = i.val(), n = $j("#authorSelectedUrl").val() + "?sort_by_title=true&author=" + encodeURI(o), s = $j.get(n), s.done(function(e) {
            grBookContextSelection.clearOptionsFrom(c), e && 0 !== e.length ? (l = 1 === e.length ? "one book" : e.length + " books", $j("#bookSearchResults").text("We found " + l + " by " + o + "."), a = new Option("Select", null), d.append(a), $j.each(e, function(e, t) {
                h = t.title.length > 40 ? t.title.substring(0, 37) + "..." : t.title, r = new Option(h, t.id), d.append(r)
            }), c.removeClass("initiallyHidden")) : c.addClass("initiallyHidden")
        })
    },
    clearOptionsFrom: function(e) {
        var t = e.find("select");
        t.children("option").remove(), e.addClass("initiallyHidden")
    },
    populateBookChapterSelectOptions: function(e) {
        var t, i = $j("#bookChapterSelect"),
            o = i.find("select");
        grBookContextSelection.clearOptionsFrom(i), t = e.is("span") ? e.attr("book_id") : e.val();
        var n = $j("#bookSelectedUrl").val() + "?book=" + t,
            s = $j.get(n);
        s.done(function(e) {
            if (0 === e.length) i.addClass("initiallyHidden");
            else {
                var t = new Option("Select", null);
                o.append(t), $j.each(e, function(e, t) {
                    var i = new Option(t.chapter_name, t.percent);
                    o.append(i)
                }), i.removeClass("initiallyHidden")
            }
        })
    },
    showBookAndBookChapterSelectFields: function() {
        $j("#bookIdSelect option").size() > 1 && $j("#bookSelect").removeClass("initiallyHidden"), $j("#bookLocationSelect option").size() > 1 && $j("#bookChapterSelect").removeClass("initiallyHidden")
    },
    populateBookChapterSelectForTopics: function(e, t) {
        var i = $j(".acItem.auto_complete_selected").children(".ac_book");
        grBookContextSelection.populateBookChapterSelectOptions(i)
    },
    clearBookChapterSelectOptionsForTopics: function() {
        grBookContextSelection.clearOptionsFrom($j("#bookChapterSelect"))
    }
};
$j(document).ready(function() {
    $j("#quote_body").focus(), grBookContextSelection.showBookAndBookChapterSelectFields();
    var e = $j(".sharingToggle"),
        t = e.children("input");
    $j("#bookIdSelect").on("change", function(i) {
        bookIdField = $j(this), grBookContextSelection.populateBookChapterSelectOptions(bookIdField);
        var o = "None" === bookIdField.val() || null === bookIdField.val();
        e.toggleClass("disabled", o), t.prop("disabled", o)
    }), $j("#quote_author_name").change(function(e) {
        grBookContextSelection.populateBookSelectForQuotes()
    })
});
var refreshBookChapterEditButtons = function() {
        $j(".deleteExistingBookChapterButton").on("click", function(e) {
            var t = $j(this);
            e.preventDefault();
            var i = $j.post(t.attr("href"), {
                _method: "delete"
            });
            i.done(function() {
                t.closest("tr").remove(), InlineFlash.showNotice("Chapter deleted")
            })
        }), $j(".deleteNewBookChapterButton").on("click", function(e) {
            var t = $j(this);
            e.preventDefault();
            var i, o, n = t.closest("tr");
            n.hasClass("even") ? (i = "even", o = "odd") : (i = "odd", o = "even");
            var s = n.nextAll(".chapter");
            s.removeClass("odd even"), s.filter(":even").addClass(i), s.filter(":odd").addClass(o), n.remove()
        })
    },
    enableAddBookChapterButton = function() {
        $j(".addNewBookChapterButton").on("click", function(e) {
            var t = $j("#chapterEditTable .chapter").length,
                i = $j("#chapterEditTable .newChapter"),
                o = i.clone(!0);
            lastRow = $j("#chapterEditTable tr.chapter").last(), lastRow.hasClass("even") ? i.addClass("odd") : i.addClass("even"), i.removeClass("newChapter hidden").addClass("chapter"), chapterRowId = "chapterRow" + t, i.attr("id", chapterRowId), i.children("#chapterNumber").append(t), i.children("td").each(function() {
                var e = $j(this).children("input"),
                    i = e.attr("name");
                newName = "book_chapters[" + t + "][" + i + "]", e.attr("name", newName)
            }), $j("#chapterEditTable .chapter:last").after(o)
        })
    },
    enableMakeDefaultChapterBookLink = function() {
        $j("#makeDefaultChapterBookLink").on("click", function(e) {
            var t = $j(this);
            e.preventDefault();
            var i = $j.post(t.attr("href"), {
                _method: "post"
            });
            i.done(function() {
                t.replaceWith("This book's chapters are now the default for the associated work.")
            })
        })
    };
$j(document).ready(function() {
        refreshBookChapterEditButtons(), enableAddBookChapterButton(), enableMakeDefaultChapterBookLink()
    }), $j(window).load(function() {
        $gr.shared.bookCarousel.attachTo(".bookCarousel")
    }), $j(function() {
        $gr.shared.newsfeedUpdateUI.attachTo(".js-newsfeed-container"), $gr.shared.attachNewsfeedComponents(), $gr.communityQA.readerQAForm.attachTo(".js-readerQAForm"), $gr.communityQA.shareToggle.attachTo(".js-shareToggle"), $gr.communityQA.facebookTimelinePoster.attachTo(".js-facebookTimelinePoster"), $gr.communityQA.editQAMessageForm.attachTo(".js-editQAMessageForm"), $gr.shared.notification.attachTo(".js-standalone-notification"), LoadMore.attachTo(".jsLoadMoreAnswered", {
            loadMoreContainerSelector: "#loadMoreContainerAnsweredQuestions",
            loadMoreActionSelector: ".loadMoreActionAnsweredQuestions",
            loadMoreSelector: ".jsLoadMoreAnswered"
        }), LoadMore.attachTo(".jsLoadMoreUnanswered", {
            loadMoreContainerSelector: "#loadMoreContainerUnansweredQuestions",
            loadMoreActionSelector: ".loadMoreActionUnansweredQuestions",
            loadMoreSelector: "jsLoadMoreUnanswered"
        }), $gr.shared.toggleQaForm.attachTo(document), $gr.shared.authorDashboardQA.attachTo(".js-authorDashboardQA"), $gr.shared.editInPlaceController.attachTo(".communityAnswer.js-editInPlace", {
            editableElementSelector: ".communityAnswerText",
            highlightElementSelector: ".communityAnswerText",
            elementsToHideSelectors: ".communityAnswererName, .communityAnswerText, .communityAnswerFooter"
        }), $gr.shared.editInPlaceController.attachTo("#helpBox.js-editInPlace", {
            editableElementSelector: ".helpBoxTextContainer",
            highlightElementSelector: ".helpBoxTextContainer",
            elementsToHideSelectors: ".js-editInPlaceEnableAction"
        }), $gr.shared.editorialStoryForm.attachTo(".js-editorialStoryForm"), $gr.shared.audibleSampleButton.attachTo(window), $gr.shared.favoriteAuthor.attachTo(".authorDropdownMenu"), $gr.shared.notificationBanner.attachTo("#notificationBanner"), $gr.shared.asyncPreviewButton.attachTo(".asyncPreviewButtonContainer"), $gr.shared.asyncGlideButton.attachTo("#asyncBuyButtonContainer"), $gr.shared.authorAnswersSort.attachTo(".js-authorAnswersSort"), $gr.shared.inAppNotification.attachTo(".notificationWrapper"), $gr.shared.amazonPurchasesBanner.attachTo(".js-amazonRateBooksHeader"), $gr.shared.twitterDialog.attachTo(".twitterDialog"), $gr.shared.twitterCallbacks.attachTo(".mainContentContainer"), $gr.shared.confirmModal.attachTo(".js-confirmModal"), $gr.shared.modal.attachTo(".js-modal"), $gr.shared.modalTrigger.attachTo(".js-modalTrigger"), $gr.shared.checkBoxForm.attachTo(".js-genresForm", {
            checkedClass: "genreButtonChecked",
            checkBoxContainerSelector: ".genreButton"
        }), $gr.shared.newsfeedTracking.attachTo(document, {
            trackingContainerSelector: ".newsfeedUpdates"
        }), $gr.shared.previewableNewsfeedStoryForm.attachTo(".js-previewableNewsfeedStoryForm"), $gr.shared.challenge.attachTo(".challengeSteps"), $gr.shared.dataStoreUserPreferences.attachTo(document), $gr.shared.formBoxChecker.attachTo(".js-formBoxChecker", {
            massCheckAll: !0
        }), $gr.shared.openGlidePopup.attachTo(".glideButton"), $gr.shared.lazilyLoadedGlidePopup.attachTo(".js-lazyGlideContainer"), $gr.shared.favoriteGenre.attachTo(".js-favoriteGenre"), $gr.shared.reviewDraftDataCollection.attachTo(".js-reviewUserText"), $gr.shared.ratingDistTooltip.attachTo(".js-ratingDistTooltip"), $gr.shared.readingNote.attachTo(".js-readingNote"), $gr.shared.readingNoteBanner.attachTo(".js-readingNotesBanner"), $gr.shared.paginatedReadingNotesLinksWidget.attachTo(".js-paginatedReadingNotesLinks"), $gr.shared.giveawayBookFindWidget.attachTo("#giveawayBookFindWidget"), $gr.shared.videoInline.attachTo(".js-videoInline")
    }), $j(document).on("lazyload:complete", function() {
        $gr.communityQA.readerQAForm.attachTo(".js-readerQAForm"), $gr.communityQA.shareToggle.attachTo(".js-shareToggle"), $gr.shared.paginatedReadingNotesLinksWidget.attachTo(".js-paginatedReadingNotesLinks"), $gr.shared.readingNote.attachTo(".js-readingNote")
    }), $j(document).ready(function() {
        LoadMore.attachTo(".jsLoadMore")
    }), $gr.shared.attachNewsfeedComponents = function(e) {
        e = "undefined" == typeof e ? "" : e, $gr.shared.newsfeedNav.attachTo(e + ".js-newsfeedNav"), $gr.shared.updateFiltersForm.attachTo(e + ".js-updateFiltersForm"), $gr.shared.checkBoxForm.attachTo(e + ".js-genresForm", {
            checkedClass: "genreButtonChecked",
            checkBoxContainerSelector: ".genreButton"
        }), $gr.shared.relatedWorks.attachTo(e + ".js-relatedWorksTrigger"), LoadMore.attachTo(e + ".jsLoadMoreUpdates", {
            loadMoreContainerSelector: "#loadMoreContainerUpdates",
            loadMoreActionSelector: ".loadMoreActionUpdates",
            loadMoreSelector: ".jsLoadMoreUpdates"
        }), $gr.shared.newsfeedMenu.attachTo(".js-newsfeedStoryDropdown"), $gr.shared.tooltip.attachTo(e + ".js-tooltipTrigger"), $gr.shared.dataTooltip.attachTo(e + ".js-dataTooltip"), $gr.shared.modal.attachTo(e + ".js-modal"), $gr.shared.modalTrigger.attachTo(e + ".js-modalTrigger"), $gr.shared.followSuggestedAuthor.attachTo(e + ".js-followSuggestedAuthor"), $gr.shared.authorFollow.attachTo(e + ".js-AuthorFollow"), $gr.shared.libraryExport.attachTo(e + ".js-LibraryExport"), $gr.shared.confirmNilReadAt.attachTo(e + ".js-confirmNilReadAt"), $gr.shared.readingYear.attachTo(e + ".js-readingYear"), $gr.shared.yearInBooksUserBlurb.attachTo(e + ".js-yearInBooksUserBlurb")
    },
    function(e, t) {
        var i = "undefined" != typeof t.jQuery && t.jQuery;
        t.ReactRailsUJS = {
            CLASS_NAME_ATTR: "data-react-class",
            PROPS_ATTR: "data-react-props",
            findDOMNodes: function(o) {
                var n, s;
                switch (typeof o) {
                    case "undefined":
                        n = "[" + t.ReactRailsUJS.CLASS_NAME_ATTR + "]", s = e;
                        break;
                    case "object":
                        n = "[" + t.ReactRailsUJS.CLASS_NAME_ATTR + "]", s = o;
                        break;
                    case "string":
                        n = o + "[" + t.ReactRailsUJS.CLASS_NAME_ATTR + "], " + o + " [" + t.ReactRailsUJS.CLASS_NAME_ATTR + "]", s = e
                }
                return i ? i(n, s) : s.querySelectorAll(n)
            },
            getConstructor: function(e) {
                var i;
                return i = t[e], i || (i = eval.call(t, e)), i && i["default"] && (i = i["default"]), i
            },
            mountComponents: function(e) {
                for (var i = t.ReactRailsUJS.findDOMNodes(e), o = 0; o < i.length; ++o) {
                    var n = i[o],
                        s = n.getAttribute(t.ReactRailsUJS.CLASS_NAME_ATTR),
                        a = this.getConstructor(s),
                        r = n.getAttribute(t.ReactRailsUJS.PROPS_ATTR),
                        l = r && JSON.parse(r);
                    if ("undefined" == typeof a) {
                        var h = "Cannot find component: '" + s + "'";
                        console && console.log && console.log("%c[react-rails] %c" + h + " for element", "font-weight: bold", "", n);
                        var c = new Error(h + ". Make sure your component is globally available to render.");
                        throw c
                    }
                    ReactDOM.render(React.createElement(a, l), n)
                }
            },
            unmountComponents: function(e) {
                for (var i = t.ReactRailsUJS.findDOMNodes(e), o = 0; o < i.length; ++o) {
                    var n = i[o];
                    ReactDOM.unmountComponentAtNode(n)
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
        t.ReactRailsUJS.Native = {
            setup: function() {
                "addEventListener" in t ? e.onreadystatechange = function() {
                    "interactive" === e.readyState && t.addEventListener("DOMContentLoaded", function() {
                        t.ReactRailsUJS.mountComponents()
                    })
                } : t.attachEvent("onload", function() {
                    t.ReactRailsUJS.mountComponents()
                })
            }
        }
    }(document, window),
    function(e, t) {
        var i = "undefined" != typeof t.jQuery && t.jQuery;
        i ? ReactRailsUJS.handleEvent = function(t, o) {
            i(e).on(t, o)
        } : ReactRailsUJS.handleEvent = function(t, i) {
            e.addEventListener(t, i)
        }, "undefined" != typeof Turbolinks && Turbolinks.supported ? "undefined" != typeof Turbolinks.EVENTS ? ReactRailsUJS.TurbolinksClassic.setup() : "undefined" != typeof Turbolinks.controller ? ReactRailsUJS.Turbolinks.setup() : ReactRailsUJS.TurbolinksClassicDeprecated.setup() : i && "function" == typeof i.pjax ? ReactRailsUJS.pjax.setup() : ReactRailsUJS.Native.setup()
    }(document, window);
var EnableButtons = {
    enableButtons: function(e) {
        return e.observe("click", function(t) {
            $(e).up().request(), t.stop()
        }), $(e)
    }
};
Element.addMethods(EnableButtons), Element.enableButtons = function(e) {
    e.observe("click", function(t) {
        $(e).up("form").request(), t.stop()
    })
}, Element.addMethods({
    enableButtons: Element.enableButtons
}), document.observe("dom:loaded", function() {
    enableAll(".relatedVoteAction"), enableAll(".ignoreRelatedWorkAction"), enableAll(".userNotInterestedWorkAction")
}), $j(document).ready(function() {
    $j(".eventResponseForm").bind("ajax:beforeSend", function() {
        $j(this).find(".loadingImage").show()
    }).bind("ajax:success", function(e, t) {
        var i = $j(this);
        i.closest(".respondEvent").hide(), i.find(".loadingImage").hide(), i.closest(".respondEvent").parent().find(".respondEventStatus").html(t)
    })
}), $j(function() {
    function e(e) {
        var t = e.parent(),
            i = e.closest(".expandableContainer");
        t.hide(), t.hasClass("fullContent") ? i.find(".truncatedContent").show() : i.find(".fullContent").show()
    }
    $j(document).on("click", ".jsHide, .jsShow", function(t) {
        t.preventDefault(), e($j(t.target))
    })
}), $grfb = function() {
    var e = "email, user_friends",
        t = {
            grSession: !1,
            suppressAutoLogin: !1
        },
        i = $j.Deferred();
    window.fbAsyncInit = function() {
        FB.init({
            appId: t.appId,
            // This is what makes login work! The cookie contains a signed request;
            cookie: "localhost" === location.hostname ? " " : !0,
            // parse any social plugins on the page (misnomer! not related to XFBML!)
            xfbml: !0,
            version: "v3.1"
        }), FB.getLoginStatus(function(e) {
            $grfb.auth = e, i.resolveWith($grfb)
        }), FB.Event.subscribe("auth.authResponseChange", function(e) {
            $grfb.auth = e
        })
    };
    var o = function(e) {
            $j.extend(t, e);
            const i = "fb-sdk-iframe";
            ! function() {
                if (!document.getElementById(i)) {
                    var e = document.createElement("iframe"),
                        t = e.frameElement || e;
                    t.style.cssText = "width: 0; height: 0; border: 0", e.src = "javascript:false", e.id = i;
                    var o = document.createElement("div");
                    o.style.cssText = "width: 0; height: 0; border: 0", document.body.appendChild(o), o.appendChild(e);
                    var n = e.contentWindow,
                        s = n.document,
                        a = "//connect.facebook.net/en_US/sdk.js";
                    s.open().write('<head><meta name="referrer" content="same-origin"></head><body onload="window.inDapIF = true;var js = document.createElement(\'script\');js.src = \'' + a + "';document.body.appendChild(js);\">"), s.close()
                }
            }()
        },
        n = function(t) {
            t = "object" == typeof t ? t : {};
            var o, n = $j.Deferred(),
                s = e;
            return FB.login(function(e) {
                "object" == typeof e && "connected" === e.status ? n.resolve(e) : n.reject(e)
            }, {
                scope: s,
                auth_type: "rerequest"
            }), i.done(function() {
                "connected" === this.auth.status &&
                    // Warning! This might not be good enough; this will fail if the user
                    n.resolve(this.auth)
            }), n.done(function() {
                t.hasOwnProperty("trackingId") && (o = $j.post("/track/track", {
                    tid: t.trackingId
                })), t.hasOwnProperty("redirect") && $j.when(o).always(function() {
                    window.location.href = t.redirect
                })
            }).fail(function() {
                u.resolve()
            }), n.promise()
        },
        s = function() {
            var e = $j.Deferred();
            return i.done(function() {
                "connected" === this.auth.status ? FB.logout(function() {
                    e.resolve()
                }) : e.resolve()
            }), e.promise()
        },
        a = function(e, t) {
            t = "object" == typeof t ? t : {};
            var i = $j.Deferred(),
                o = e.split(","),
                n = {
                    scope: e,
                    return_scopes: !0,
                    auth_type: "rerequest"
                },
                s = function(e) {
                    if (e.hasOwnProperty("authResponse") && e.authResponse.hasOwnProperty("grantedScopes")) {
                        var t = e.authResponse.grantedScopes.split(","),
                            n = !0;
                        $j.each(o, function(e, i) {
                            $j.inArray(i, t) <= -1 && (n = !1)
                        }), n ? i.resolve() : i.reject()
                    } else i.reject()
                };
            return FB.login(s, n), i.done(function() {
                t.hasOwnProperty("redirect") && (window.location.href = t.redirect)
            }), i.fail(function() {
                t.hasOwnProperty("declinedRedirect") && (window.location.href = t.declinedRedirect)
            }), i.promise()
        },
        r = function() {
            var e = $j.Deferred();
            return i.done(function() {
                "connected" === this.auth.status ? $j.ajax({
                    type: "DELETE",
                    url: "/facebook_users/destroy",
                    data: {
                        deauth: !0
                    }
                }).done(function() {
                    FB.getLoginStatus(), e.resolve()
                }).fail(function() {
                    e.reject()
                }) : "not_authorized" === this.auth.status ? $j.ajax({
                    type: "DELETE",
                    url: "/facebook_users/destroy",
                    data: {
                        deauth: !1
                    }
                }).done(function() {
                    FB.getLoginStatus(), e.resolve()
                }).fail(function() {
                    e.reject()
                }) : e.reject()
            }), e.promise()
        },
        l = function(e) {
            var t = $j.Deferred();
            return i.done(function() {
                e.method = "share", FB.ui(e, function(e) {
                    t.resolve(e)
                })
            }), t.done(function(t) {
                if (t && "object" == typeof t) {
                    var i;
                    i = e.hasOwnProperty("trackingId") ? e.trackingId : "fb_" + e.resource_type + "_share_form_opp", $j.post("/track/track", {
                        tid: i
                    })
                }
            }), t.promise()
        },
        h = function(e) {
            var t = $j.Deferred();
            return i.done(function() {
                e.method = "feed", FB.ui(e, function(e) {
                    t.resolve(e)
                })
            }), t.done(function(t) {
                if (t && "object" == typeof t) {
                    var i;
                    i = e.hasOwnProperty("trackingId") ? e.trackingId : "fb_" + e.resource_type + "_feed_form_opp", $j.post("/track/track", {
                        tid: i
                    })
                }
            }), t.promise()
        },
        c = function(e) {
            var t = $j.Deferred();
            return i.done(function() {
                e.method = "send", FB.ui(e, function(e) {
                    e && "object" == typeof e && e.hasOwnProperty("success") ? t.resolve(e) : t.reject(e)
                })
            }), t.promise()
        },
        d = function(e) {
            var t = $j.Deferred();
            return i.done(function() {
                FB.ui({
                    method: "pagetab"
                }, function(i) {
                    if (i && "object" == typeof i && i.hasOwnProperty("tabs_added") && 0 !== i.tabs_added.length) {
                        for (facebook_page_id in i.tabs_added)
                            if (i.tabs_added.hasOwnProperty(facebook_page_id) && "object" == typeof e) {
                                var o = {
                                    "facebook_page[facebook_page_id]": facebook_page_id,
                                    "facebook_page[page_type]": e.pageType
                                };
                                "g" === e.pageType && (o["facebook_page[group_id]"] = e.groupId), $j.post("/facebook/page_tab", o)
                            } t.resolve(i)
                    } else t.reject(i)
                })
            }), t.promise()
        };
    i.done(function() {
        var e = !0;
        window.Mobvious && (e = "mobile" !== window.Mobvious.device_type), t.grSession || t.suppressAutoLogin || "connected" === this.auth.status && (e && Lightbox.showBoxByID("fbSigninNotification"), $j.post("/track/track", {
            tid: "fb_auto_login"
        }).fail(function() {
            e && Lightbox.hideBox()
        }).done(function() {
            location.reload()
        }))
    }), i.done(function() {
        return t.grSession && ("true" !== Cookies.get("fbl") || t.serverFBUser && "connected" === this.auth.status) ? void 0 : u.resolve()
    });
    var u = $j.Deferred();
    return u.done(function() {
        var e = $j.Deferred();
        e.done(function() {
            $j.post("/user/sign_out?facebook_auto_logout=true&broken_fb_connection=true").done(function() {
                var e = window.Mobvious && "mobile" === window.Mobvious.device_type;
                e ? window.location.href = "/user/sign_in?returnurl=" + encodeURIComponent(location.pathname + location.search) : location.reload()
            })
        }), t.grSession && e.resolve()
    }), {
        init: i.promise(),
        initialize: o,
        login: n,
        logout: s,
        ensurePermission: a,
        disconnect: r,
        shareDialog: l,
        feedDialog: h,
        sendDialog: c,
        pageTabDialog: d
    }
}(), $j(document).on("click", ".fbjsLogin", function(e) {
    var t = $j(this),
        i = t.data();
    if (!i.hasOwnProperty("redirect")) {
        var o = t.attr("href");
        "" !== o && (i.redirect = o)
    }
    $grfb.login(i), e.preventDefault()
}), $j(document).on("click", ".fbEnsurePermissions", function(e) {
    var t = $j(this),
        i = t.data(),
        o = t.attr("href");
    i.hasOwnProperty("redirect") || "" !== o && (i.redirect = o), i.hasOwnProperty("permissions") ? $grfb.ensurePermission(i.permissions, i) : $grfb.login(i), e.preventDefault()
}), $j(document).on("click", ".fbjsLogout", function(e) {
    var t = this,
        i = $j(this).attr("href"),
        o = $grfb.logout(),
        n = function() {};
    "" === i || (n = void 0 === $j(this).data("method") ? function() {
        window.location.href = i
    } : function() {
        $j.rails.handleMethod($j(t))
    }), o.done(n), e.preventDefault()
}), $j(document).ready(function() {
    $j("#auto_add_fb_friends.autosave").click(function() {
        $j.post("/user/toggle_auto_add_fb_friends_pref", {
            auto_add_fb_friends: $j("#auto_add_fb_friends").is(":checked")
        }).success(function() {
            $j("#pref_status").html("Preference saved.").effect("highlight", {}, 2e3)
        }).error(function() {
            $j("#pref_status").html("There was an error saving your preference.").effect("highlight", {}, 2e3)
        })
    }), $j("body").on("submit", "#confirmAutoAddForm", function(e) {
        var t = $j(e.target);
        $j("#user_auto_add_fb_friends").prop("checked", "true" == t.find("#auto_add_fb_friends_confirm").val()), $j.post(t.attr("action"), t.serialize()).success(function() {
            Lightbox.hideBox()
        }).error(function() {
            alert("There was an error saving your preference. Please try again.")
        }), e.preventDefault()
    })
}), $gr.giveaway = function() {
    var e = "required",
        t = "disabled",
        i = function() {
            var t = $j("<label>", {
                "for": "giveaway_book_id"
            });
            $j("#giveaway_book_isbn").val("").removeAttr(e), $j("#giveawayIsbnContainer").hide(), $j("#giveawayBookIdContainer").css("display", "inline-block"), $j("#giveaway_book_id").prop(e, e), $j("#isbnTooltip").hide(), t.text("Book ID").attr({
                id: "giveawayBookIdLabel"
            }), $j("#giveawayBookIsbnLabel").replaceWith(t)
        },
        o = function() {
            var t = $j("<label>", {
                "for": "giveaway_book_isbn"
            });
            $j("#giveaway_book_id").val("").removeAttr(e), $j("#giveawayBookIdContainer").hide(), $j("#giveawayIsbnContainer").css("display", "inline-block"), $j("#giveaway_book_isbn").prop(e, e), $j("#isbnTooltip").show(), t.text("ISBN/ISBN13").attr({
                id: "giveawayBookIsbnLabel"
            }), $j("#giveawayBookIdLabel").replaceWith(t)
        },
        n = function() {
            this.checked ? $j("#giveawaySubmitButton").removeProp(t) : $j("#giveawaySubmitButton").prop(t, t)
        };
    return {
        changeToBookId: i,
        changeToIsbn: o,
        toggleSubmitButtonEnabledState: n
    }
}(), $j(document).ready(function() {
    $j("#giveawayBookIdSwitchLink").click($gr.giveaway.changeToBookId), $j("#giveawayBookIsbnSwitchLink").click($gr.giveaway.changeToIsbn), $j("#termsCheckBox").click($gr.giveaway.toggleSubmitButtonEnabledState), "" !== $j("#giveaway_book_id").val() ? $gr.giveaway.changeToBookId() : $gr.giveaway.changeToIsbn()
}), void 0 == window.gr && (window.gr = {}), window.gr.toggleStatusLink = function(e, t) {
    var t = t || {},
        i = t.target || $$($(e).getAttribute("rel")).first(),
        o = $(i).down(".status_form_contents");
    !$(i).visible() || o && !o.visible() ? (t.callback instanceof Function && t.callback.apply(e, t), this.openStatusLink(e)) : this.closeStatusLink(e)
}, window.gr.closeStatusLink = function(e, t) {
    var t = t || {},
        i = t.target || $$($(e).getAttribute("rel")).first();
    $(i).hide(), $(e).removeClassName("open")
}, window.gr.openStatusLink = function(e, t) {
    var t = t || {},
        i = t.target || $$($(e).getAttribute("rel")).first(),
        o = $(e).up(".status_editor");
    o && o.select(".toggleLink.open").each(function(e) {
        gr.closeStatusLink(e)
    }), $(i).show();
    var n = $(i).down(".status_form_contents");
    n && n.show(), $(e).addClassName("open")
}, window.gr.install_count_chars = function(e, t) {
    var i = "none" === $j(t).css("display");
    $j(document).on("input", e, function(e) {
        i && ($j(t).show(), i = !1), window.countChars(e, t)
    })
}, window.gr.expandSelectorHeight = function(e) {
    $j(function() {
        var t = $j(e);
        t.css({
            height: "auto",
            "overflow-y": "hidden"
        }).height(t.prop("scrollHeight"))
    }), $j(e).on("input", function() {
        var t = $j(e),
            i = t.outerHeight(),
            o = this.scrollHeight;
        o > i && $j(e).height(this.scrollHeight)
    })
}, window.gr.makeBigger = function(e) {
    var t = $$(e)[0],
        i = parseInt(t.getStyle("height"));
    t.setStyle({
        height: i + 200 + "px"
    })
}, void 0 == window.gr && (window.gr = {}), window.gr.RecommendedUIHelper = function(e) {
    var t = this;
    return t.clear = function() {
        t.id_input().value = "", t.name_input().value = "", t.ui().hide(), t.autocomplete_wrapper().show(), t.name_input().focus()
    }, t.clear_action = function() {
        return void 0 === t._clear_action && (t._clear_action = $$(".reviewForm .ui_recommended .clear_action").first()), t._clear_action
    }, t.member = function() {
        return void 0 === t._member && (t._member = $$(".reviewForm .ui_recommended .member").first()), t._member
    }, t.member_status = function() {
        return void 0 === t._member_status && (t._member_status = $$(".reviewForm .ui_recommended .member_status").first()), t._member_status
    }, t.id_input = function() {
        return void 0 === t._id_input && (t._id_input = $$(".reviewForm #review_recommender_user_id1").first()), t._id_input
    }, t.name_input = function() {
        return void 0 === t._name_input && (t._name_input = $$(".reviewForm #review_recommender_user_name1").first()), t._name_input
    }, t.autocomplete_wrapper = function() {
        return void 0 === t._ac && (t._ac = $$(".reviewForm .autocomplete").first()), t._ac
    }, t.ui = function() {
        return void 0 === t._ui && (t._ui = $$(".reviewForm .ui_recommended").first()), t._ui
    }, t.after_update_element = function(e, i) {
        t.id_input().value = i.id, t.id_input().setAttribute("id_for_name", i.innerHTML)
    }, t.set_or_invalidate_id = function() {
        var e = !0;
        try {
            e = t.autocompleter.getCurrentEntry(), t.after_update_element(t.autocompleter.element, e)
        } catch (i) {}
        t.id_input().getAttribute("id_for_name") !== t.name_input().value && (t.id_input().value = "")
    }, t.non_member_entry = function() {
        t.autocomplete_wrapper().hide(), t.ui().show(), t.member().hide(), t.ui().select(".clear_action").first().show();
        var e = t.ui().select(".non_member").first();
        e.update(t.name_input().value), e.show(), t.id_input().value = "", t.member_status().update("")
    }, t.member_entry = function() {
        t.autocomplete_wrapper().hide(), t.ui().show(), t.ui().select(".non_member").first().hide(), t.ui().select(".clear_action").first().show(), t.member().update(t.name_input().value), t.member().setAttribute("href", "/user/show/" + t.id_input().value), t.member().show(), t.member_status().update("(goodreads)")
    }, t.on_focus_lost = function() {
        setTimeout(function() {
            0 != t.name_input().value && (t.set_or_invalidate_id(), 0 == t.id_input().value ? t.non_member_entry() : t.member_entry())
        }, 100)
    }, t.if_single_response_matches_name = function(e) {
        if (t.autocompleter.hasFocus);
        else {
            var i = new Element("div").update(e.responseText);
            if (1 === i.children[0].children.length) {
                var o = i.children[0].children[0].id,
                    n = i.children[0].children[0].innerHTML;
                t.name_input().value === n && (t.id_input().value = o, t.member_entry())
            }
        }
    }, !e.test == !0 && (t.autocompleter = new Ajax.Autocompleter("review_recommender_user_name1", "review_recommender_user_name1_auto_complete", e.search_url, {
        indicator: "recommender_user_name1_indicator",
        afterUpdateElement: t.after_update_element,
        on200: t.if_single_response_matches_name
    }), Event.observe(t.name_input(), "blur", function() {
        t.on_focus_lost()
    }), Event.observe(t.clear_action(), "click", function() {
        t.clear()
    })), {
        clear_action: t.clear,
        no_member_found: t.non_member_entry,
        after_update_element: t.after_update_element,
        on_focus_lost: t.on_focus_lost
    }
}, $j(function() {
    $j("#showFlag").on("click", function(e) {
        $j("#flagGroup").removeClass("initiallyHidden"), Lightbox.showBoxByID("flagGroup"), e.preventDefault()
    }), $j("#toggleFlagExplanation").on("click", function(e) {
        $j("#flagExplanation").toggleClass("initiallyHidden"), e.preventDefault()
    })
}), document.addEventListener("DOMContentLoaded", function() {
    $j("#signedOutHome .bookImgDiscovered").reflect({
        height: 15
    })
});
var selected_quote = 0;
window.addEventListener("load", function() {
        $j("#signedOutHome").length && $j("#quotes").length && setInterval("changeQuote()", 1e4)
    }), $j(function() {
        $j(".hidePurchasesModule").click(function(e) {
            e.preventDefault(), $j.post("/user/update_preferences", {
                user: {
                    show_amazon_import_prompt: 0
                }
            }), $j(".amazonPurchasesModule").fadeOut()
        })
    }), $gr.hostedImage = function() {
        var e = 20,
            t = 2500,
            i = "hostedImg",
            o = function(o, n) {
                return n = n || {}, e = n.retryMax || e, t = n.retryDelay || t, this.img = o, this.$img = $j(o), this.$img.removeProp("onload").removeProp("onerror"), this.$img.removeClass(i), this.src = this.$img.data("src"), this.style = this.$img.attr("style"), this.$loading = this.$img.next(), this.errorMsg = this.$img.data("error"), this.retryCount = 0, this.$img.removeClass(i), this
            },
            n = function() {
                var e = this.src.indexOf("?") < 0 ? "?" : "&";
                return this.src + e + "v=" + (new Date).getTime()
            },
            s = function() {
                if (this.retryCount++ <= e) $gr.hostedImage.imageLoaded(this.img) ? (clearInterval(this.timer), this.$loading.remove(), this.$img.show()) : (this.img = document.createElement("img"), this.img.className = i + " gr-hostedUserImg", this.img.style.display = "none", this.img.src = this.s3Url(), this.$img.replaceWith(this.img), this.$img = $j(this.img), this.$img.attr("style", this.style));
                else {
                    clearInterval(this.timer), this.$loading.remove();
                    var t = document.createElement("span");
                    t.innerHTML = this.errorMsg, this.$img.replaceWith(t)
                }
            },
            a = function(e, i) {
                var n = this;
                return o.call(n, e, i), n.timer = setInterval(function() {
                    s.apply(n)
                }, t), n
            };
        return {
            load: a,
            s3Url: n,
            tryLoading: s
        }
    }, $gr.hostedImage.imageLoaded = function(e) {
        var t = !1;
        return t = "object" == typeof e && e.hasOwnProperty("tagName") && "img" !== e.tagName.toLowerCase() ? !1 : void 0 !== e.naturalWidth ? e.naturalWidth > 0 : e.complete
    },
    function(e) {
        e.fn.loadHostedImage = function() {
            if (!this.data("loading")) {
                this.data("loading", !0);
                var e = $gr.hostedImage();
                return e.load(this.get(0)), this
            }
        }
    }(jQuery),
    function(e) {
        "undefined" != typeof e && Ajax.Responders.register({
            onCreate: function(e) {
                var t, i = $$("meta[name=request-id]")[0];
                i && (t = i.readAttribute("content"), e.options.requestHeaders || (e.options.requestHeaders = {}), e.options.requestHeaders["Related-Request-Id"] = t)
            }
        })
    }(Prototype),
    function(e) {
        "undefined" != typeof e && e.ajaxPrefilter(function(t, i, o) {
            var n = e("meta[name=request-id]").attr("content");
            n && o.setRequestHeader("Related-Request-Id", n)
        })
    }(jQuery), $j(function() {
        likeComponent.init()
    });
var likeComponent = function() {
    var e = {
            likeActionSelector: ".jsLike",
            loadingHtml: '<span class="loadingAnimation" style="display: inline"></span>'
        },
        t = {},
        i = function(t) {
            $j.extend(e, t), o()
        },
        o = function() {
            $j(document).on({
                "ajax:beforeSend": a,
                "ajax:success": r,
                "ajax:error": l
            }, e.likeActionSelector)
        },
        n = function() {
            $j(document).off({
                "ajax:beforeSend": a,
                "ajax:success": r,
                "ajax:error": l
            }, e.likeActionSelector)
        },
        s = function(e, t) {
            var i = e.match(/ref=(.*_u?lk)/);
            i && (i = i[1], i.match(/_lk/) ? i = i.replace(/_lk/, "_ulk") : i.match(/_ulk/) && (i = i.replace(/_ulk/, "_lk")), t.attr("href", t.attr("href") + "&ref=" + i))
        },
        a = function(i) {
            var o, n = $j(i.target),
                s = n.data("like-container-id");
            "undefined" == typeof s && (o = n.text(), "" !== o && (t.bodyText = o), n.html(e.loadingHtml))
        },
        r = function(e, t, i) {
            if ($j.isPlainObject(t)) {
                var o, n, a, r = $j(e.target),
                    l = r.attr("class"),
                    h = r.data("like-container-id");
                "undefined" != typeof h ? (n = $j(t.container_html), o = $j("#" + h), o.replaceWith(n), a = n.find("a.jsLike")) : (n = $j(t.html), r.replaceWith(n), n.addClass(l), a = n), s(r.attr("href"), a)
            }
        },
        l = function(e, i, o) {
            var n = $j(e.target),
                s = n.data("like-container-id");
            "undefined" == typeof s && (InlineFlash.showError("We had a problem while liking the resource."), n.text(t.bodyText))
        };
    return {
        init: i,
        teardown: n
    }
}();
$j(function() {
    window.top !== window.self && window.location.href.match(/show_mini/) && ($j("a").attr("target", "_top"), $j("a").attr("href", function(e, t) {
        var i = $j(parent.document.getElementsByTagName("iframe")[0]).data("url1");
        return "undefined" != typeof i ? i + t : t
    }))
}), $j(document).on("ajax:beforeSend", ".loadingLinkSpan", function() {
    var e = $j(this),
        t = e.find(".loadingLink");
    if (t.data("recycleElementId")) {
        var i = $j("#" + t.data("recycleElementId"));
        i && i.size() > 0 && ($j("body").append(i[0].outerHTML), i.hide())
    }
    e.find(".loadingLink, .loadingError").hide(), e.find(".loadingAnimation").show()
}).on("ajax:success", ".loadingLinkSpan", function() {
    var e = $j(this),
        t = e.find(".loadingLink");
    t && (t.data("keepOnSuccess") && (t.show(), t.data("resetOnSuccess") && t.html("&nbsp;")), t.data("removeClassOnSuccess") && t.removeClass(t.data("removeClassOnSuccess")), t.data("removeOnSuccess") && $j(document).find("#" + t.data("removeOnSuccess")).remove()), e.find(".loadingAnimation, .loadingError").hide()
}).on("ajax:error", ".loadingLinkSpan", function() {
    var e = $j(this);
    e.find(".loadingError").html('<span class="error">ERROR</span> try again'), e.find(".loadingLink, .loadingError").show(), e.find(".loadingAnimation").hide()
}).on("ajax:complete", ".loadingLinkSpan", function() {
    var e = $j(this),
        t = e.find(".loadingLink");
    if (t.data("recyclePlacementId")) {
        var i = $j("#" + t.data("recycleElementId"));
        i && i.size() > 0 && $j("#" + t.data("recyclePlacementId")).prepend(i)
    }
}), $j(document).ready(function() {
    $j(".sendMessageToFriend").on("click", function(e) {
        var t = $j(this).data("parentUserId"),
            i = {
                channel: $j(this).data("channel"),
                variation: $j(this).data("variation"),
                parent_user_id: t
            };
        $grfb.sendDialog({
            link: "https://www.goodreads.com/user/sign_up?from_fb_send_dialog=true&i=" + t
        }).done(function() {
            $j.post("/facebook_users/record_invitation_sent", i)
        }), e.preventDefault()
    })
}), $j(function() {}), "undefined" != typeof Prototype && Ajax.Responders.register({
    onCreate: function(e) {
        var t = $$("meta[name=csrf-token]")[0];
        if (t) {
            var i = "X-CSRF-Token",
                o = t.readAttribute("content");
            e.options.requestHeaders || (e.options.requestHeaders = {}), e.options.requestHeaders[i] = o
        }
    }
}), $j(document).ready(function() {
    $j(".quizFriendInvite").on("ajax:success", function() {
        quizFriendInviteSuccess($j(this))
    })
}), document.observe("dom:loaded", function() {
    activateRateBooksMoreGenreLnk()
});
var updateAmazonPurchaseImportUI = function() {
    $j(".js-amazonRateBooksHeader").fadeOut(), $j(".navRow a.actionLinkLite.selected").removeClass("selected"), $j(".js-amazonRateBooksStart").addClass("selected"), setGenre("amazon_purchase_import"), WantToRead.resetShelfMenuStored()
};
$j(function() {
    $j(".jsShowAdditionalGenres").on("click", function(e) {
        var t = $j(this),
            i = $j(t.attr("href")),
            o = t.data("hide-text"),
            n = t.data("show-text");
        e.preventDefault(), i.hasClass("show") ? (i.removeClass("show"), t.text(n)) : (i.addClass("show"), t.text(o))
    }), $j(".jsBackToTop").on("click", function(e) {
        e.preventDefault(), window.scroll(0, 0)
    }), $j(".js-amazonRateBooksStart").on("click", function() {
        $j("#rateBooksList").html("<div class='loadingPageImage'></div>"), updateAmazonPurchaseImportUI()
    })
});
var updateAllStarsForBookID = function(e, t) {
        var i = $j(".stars[data-resource-id='" + e + "']");
        i.each(function(e, i) {
            $j(i).children().each(function(e, i) {
                $j(i).removeClass("on"), $j(i).removeClass("off"), $j(i).addClass(e >= t ? "off" : "on")
            })
        })
    },
    colorStars = function(e, t) {
        var i = e.find(".star");
        if (!e.hasClass("ignored"))
            for (var o = 0; o < i.length; o++) t >= o ? i[o].setAttribute("class", "star on") : i[o].setAttribute("class", "star off")
    },
    showRatingErrorMessage = function(e) {
        e.parents(".wtrButtonContainer").find(".starsErrorTooltip").removeClass("hidden"), e.children("#starsSaving").remove(), e.children(".star").show()
    },
    showRelatedBooks = function(e) {
        "undefined" != typeof e.related_work_row && $j("#" + e.row_id).after(e.related_work_row)
    },
    updateRateBooksHeaderAndFooter = function(e) {
        var t = $j("#rateBooksHeader");
        t.find(".progress").length && t.html(e.rate_books_header), $j("#rateBooksFooter").html(e.rate_books_footer)
    },
    updateWTRButton = function(e, t) {
        var i = t.parents(".wtrButtonContainer");
        i.find(".wtrLeft").replaceWith(e.wtr_button_left);
        var o = i.find(".wtrRight");
        o.data("exclusive-shelf", e.review_read_status), WantToRead.setupShelfVisibilityInMenu(o), WantToRead.disablePrompts()
    },
    updateRatingStars = function(e, t) {
        t.parents(".ratingStars").replaceWith(e.rating_stars)
    },
    submitStars = function(e, t, i) {
        var o = $j("#reviewMessage" + e.data("resourceId") + "_" + i),
            n = $j("#successMessage" + e.data("resourceId") + "_" + i);
        if (!e || !e.hasClass("ignored")) {
            var s = "script",
                a = {},
                r = $j(".regpathRateBooks").length > 0,
                l = e.parents("#amazonPurchaseImport").length > 0,
                h = e.parents(".secondaryWtrButton").length > 0,
                c = r || l;
            c && (a = {
                format: "json",
                use_secondary_wtr: h
            }, s = "json");
            var d = e.find(".star").attr("ref"),
                u = e.parents(".wtrButtonContainer");
            $j.ajax({
                url: t,
                type: "POST",
                dataType: s,
                data: a,
                context: e,
                success: function(t) {
                    c && $j.isPlainObject(t) && (updateWTRButton(t, e), updateRatingStars(t, e), r && (showRelatedBooks(t), updateRateBooksHeaderAndFooter(t))), $j(this).children("#starsSaving").remove(), u.find(".star").attr("ref", d), $j(this).children(".star").show(), o.hide(), n.show()
                },
                error: function(t) {
                    if (t && 403 === t.status) {
                        var i = JSON.parse(t.responseText);
                        i.redirect && (location.href = i.redirect)
                    } else h ? showRatingErrorMessage(e) : ($j(this).addClass("error"), $j(this).html("So sorry, but there was a problem completing your request. Please reload the page and try again."))
                },
                beforeSend: function() {
                    $j(this).append("<span id='starsSaving'>saving...</span>"), $j(this).children(".star").hide()
                }
            })
        }
    },
    enrichUrl = function(e, t, i) {
        var o = e.match(/\?/) ? e + "&" : e + "?";
        return o = o + t + "=" + i
    },
    clearRating = function(e) {
        submitStars(e, enrichUrl(e.data("submitUrl"), "rating", 0), e.data("userId")), e.data("rating", 0), colorStars(e, 0)
    };
$j(document).on("click", ".clearRating, .js-clearRating", function() {
    clearRating($j(this).siblings("div.stars"))
}), $j(document).on("mouseenter", ".wtrButtonContainer div.ratingStars", function() {
    $j(this).hasClass("hasRating") && ($j(this).find(".myRating").hide(), $j(this).find(".clearRating").show())
}).on("mouseleave", ".wtrButtonContainer div.ratingStars", function() {
    $j(this).find(".clearRating").hide(), $j(this).find(".myRating").show()
}), $j(document).on("mouseover", ".star", function() {
    var e = $j(this),
        t = e.parent();
    colorStars(t, t.children().index(e))
}).on("click", ".star", function() {
    var e = $j(this),
        t = e.parent(),
        i = t.children().index(e);
    return t.data("rating", i + 1), url = enrichUrl(t.data("submitUrl"), "rating", i + 1), submitStars(t, enrichUrl(url, "ref", e.attr("ref")), t.data("userId")), !1
}).on("mouseleave", "div.stars", function() {
    var e = $j(this);
    colorStars(e, e.data("rating") - 1)
}), $j(document).on("click", ".recommendBook", function(e) {
    recommendBookPopup($j(this).data()), e.preventDefault()
});
var recommendBookPopup = function(e, t) {
        var i, o, n = "/recommendations/book_popup/",
            s = "/book/recommend_send/",
            a = "/user/update_preferences",
            r = "/friend/invite",
            l = 6,
            h = !1,
            c = "",
            d = "",
            u = null,
            f = 0,
            p = '<div id="recommendBookPopup" style="display: none;">     <div class="mediumText"><div class="bigText"><div class="cover"><img width="50" style="max-height: 75px;"></div></div><p><input id="friend_filter" name="friend_filter" placeholder="Search by name" results="" type="search"></p></div>     <div class="peopleContainer"><div class="people clearFix"></div></div>     <div class="paging clearFix"><a href="#" class="prev disabled">&larr; Previous</a>&nbsp;&nbsp;&nbsp;<a href="#" class="next disabled">Next &rarr;</a></div>     </div>',
            m = '<div class="friend vcenteredLineOfBlocks">     <div class="pic"></div>     <div class="text">     <textarea class="message"></textarea>     <div class="name"></div>     <div class="reason"></div>     <a class="gr-button gr-button--small js-recommendButton">Recommend</a>     <span class="toggleMessage">add message</span>     <div class="banner"></div>     </div></div>',
            g = '<div class="togglePref sansSerif">     <span class="explanation">We\'re asking you to recommend this book because you rated it 4 or 5 stars.</span>     <label id="togglePrefLabel">     <input id="recommendBookPopupPref" name="recommendBookPopupPref" type="checkbox">     <span>Don&rsquo;t show this again</span>     </label>     <span class="saved" style="display:none;">Preference saved!</span>     </div>',
            v = 'Visit your <a href="/user/edit?tab=settings" target="_blank">settings</a> to re-enable this later; just check<br> &ldquo;prompt me to recommend books to friends.&rdquo;',
            w = 'No friends! <a href="' + r + '">Invite a few</a> to Goodreads.',
            S = 'Oops, something went wrong!<br>Please wait a moment and <a href="#">try again</a>.',
            b = $j(p),
            k = b.find(".people"),
            C = b.find("#friend_filter"),
            j = b.find(".prev"),
            y = b.find(".next");
        "object" == typeof t && t.hasOwnProperty("afterReview") && (h = t.afterReview);
        var x = function() {
            k.addClass("people loading"), $j.get(n + e.id, {
                after_review: h
            }).always(function() {
                k.removeClass("errorNotice loading")
            }).done(function(e) {
                e.hasOwnProperty("friends") && e.friends.length > 0 ? (i = $j(e.friends).map(function() {
                    return this.lowercaseName = this.name.toLocaleLowerCase(), this.containsUnicode = !/^[\000-\177]*$/.test(this.name), this.disabled = null !== this.readStatus || null !== this.recStatus, this
                }), C.on("keyup search", A), b.children(".paging").on("click", ".prev, .next", L), k.on("click", ".js-recommendButton", P), k.on("click", "span.toggleMessage", U), "" === C.val() || C.val() === C.attr("placeholder") ? (B(), N()) : C.keyup()) : (k.removeClass("people").addClass("errorNotice"), k.html(w), h && Lightbox.hideBox())
            }).fail(function() {
                k.removeClass("people").addClass("errorNotice"), k.html(S), k.children(".friend").click(function(e) {
                    k.empty(), x(), e.preventDefault()
                })
            })
        };
        x(), $j("body").append(b);
        var T;
        h ? (T = "Would any of your friends enjoy <em>" + e.title + "</em>?", b.append($j(g)), new Tip($("togglePrefLabel"), v, {
            style: "goodreads",
            stem: "topMiddle",
            hook: {
                tip: "topMiddle",
                target: "topMiddle"
            },
            offset: {
                x: 5,
                y: 15
            },
            hideOn: !1,
            hideAfter: .05
        }), $("togglePrefLabel").observe("prototip:shown", function() {
            $j(".prototip").css("z-index", 100089)
        }), b.find("#recommendBookPopupPref").change(function(e) {
            $j.post(a, {
                "user[prompt_to_recommend_books]": $j(e.target).prop("checked") ? "0" : "1"
            }, function() {
                $j("#recommendBookPopup .saved").show().delay(1e3).fadeOut()
            })
        })) : T = "Recommend <em>" + e.title + "</em> to your friends", b.find(".bigText").append(T), b.find(".cover img").attr({
            src: e.image,
            alt: e.title
        }), $j(function() {
            Lightbox.showBoxByID("recommendBookPopup", 715, 300), Lightbox.center("box"), $j("#lightBoxRightClose").remove(), document.observe("Lightbox:hideBox", function() {
                document.stopObserving("Lightbox:hideBox"), $j("#recommendBookPopup").remove()
            })
        });
        var A = _.debounce(function(e) {
                c = e.target.value, c === C.attr("placeholder") && (c = ""), c !== d && (B(), N()), d = c
            }, 300),
            R = function(e, t) {
                return t.score !== e.score ? t.score - e.score : e.containsUnicode || t.containsUnicode ? e.lowercaseName.localeCompare(t.lowercaseName) : e.lowercaseName < t.lowercaseName ? -1 : e.lowercaseName > t.lowercaseName ? 1 : 0
            },
            B = function() {
                o = $j(jQuery.extend({}, i)), c.length > 0 ? (null === u && (u = f), f = 0, o.each(function() {
                    this.score = this.name.score(c)
                }), o.sort(R)) : (f = u || 0, u = null), E()
            },
            E = function() {
                c.length > 0 && (o = o.filter(function() {
                    return this.score > 0
                }))
            },
            I = function(e) {
                if (!e.hasOwnProperty("html")) {
                    var t = $j(m);
                    t.data("friend", e), t.toggleClass("disabled", e.hasOwnProperty("disabled") && e.disabled), t.find(".name").html(e.name), t.find(".reason").html(e.reason), t.find(".banner").html(M(e.readStatus)), t.find(".message").attr("placeholder", e.name + " would like this book because..."), null !== e.imageUrl && t.children(".pic").css("background-image", 'url("' + e.imageUrl + '")'), e.html = t
                }
                return e.html
            },
            M = function(e) {
                switch (e) {
                    case "read":
                        return "Marked as Read";
                    case "to-read":
                        return "Marked as Want to Read";
                    case "currently-reading":
                        return "Marked as Currently Reading";
                    default:
                        return "Recommended"
                }
            },
            N = function() {
                k.children().detach();
                var e = l * f;
                o.length > 0 ? (k.empty().addClass("people").removeClass("errorNotice"), o.slice(e, e + l).each(function() {
                    k.append(I(this))
                })) : (k.addClass("errorNotice").removeClass("people"), k.html("No matches found.")), F(o.length)
            },
            F = function() {
                var e = o.length > l,
                    t = o.length / l - 1 <= f;
                j.toggleClass("disabled", !e || 0 === f), y.toggleClass("disabled", !e || t)
            },
            L = function(e) {
                var t = $j(e.target),
                    i = t.hasClass("prev") ? -1 : 1;
                t.hasClass("disabled") || (f += i, N()), e.preventDefault()
            },
            P = function(t) {
                var n = $j(t.target).parents(".friend"),
                    a = n.data("friend"),
                    r = n.find(".message"),
                    d = r.is(":visible");
                a.disabled = !0, n.addClass("disabled"), n.removeClass("messageVisible");
                var u = {
                    send: {}
                };
                if (u.send[a.id] = !0, u.source = "recommend_book_popup", d && (u.message = r.val()), h ? u.context = "after_review" : u.context = "not_after_review", $j.post(s + e.id, u, null, "script"), 0 === c.length) {
                    var f, p, m, g = $j.inArray(a, i),
                        v = 0;
                    for (f = g + 1; f < i.length; f++)
                        if (!i[f].disabled && (v++, v >= l)) {
                            p = i[f], m = f;
                            break
                        } i = p ? i.slice(0, g).add(p).add(i.slice(g + 1, m)).add(i.slice(m + 1)).add(i[g]) : i.slice(0, g).add(i.slice(g + 1)).add(i[g]), o = $j(jQuery.extend({}, i)), n.delay(2500).fadeOut(700, function() {
                        N(), this.show()
                    })
                }
            },
            U = function(e) {
                var t = $j(e.target),
                    i = t.parents(".friend"),
                    o = "clear message" !== t.html();
                i.toggleClass("messageVisible", o), t.html(o ? "clear message" : "add message"), o && i.find(".message").focus()
            }
    },
    adjustRecommendationSponsoredBookHeight = function() {
        try {
            var e = $j("#sponsoredBookContainer").find("div"),
                t = e.children().find("iframe"),
                i = t.contents().find("iframe"),
                o = (i.contents().find(".bookDescription").find("a"), i.contents().find("body").height());
            t.attr("height", o), i.attr("height", o), e.height(o)
        } catch (n) {
            if ("SecurityError" != n.name) throw n
        }
    };
$j(setTimeout(function() {
        try {
            var e = $j("#sponsoredBookContainer").find("div"),
                t = e.children().find("iframe"),
                i = t.contents().find("iframe"),
                o = i.contents().find(".bookDescription").find("a");
            o.on("click", adjustRecommendationSponsoredBookHeight)
        } catch (n) {
            if ("SecurityError" != n.name) throw n
        }
    }, 4e3)),
    /*!
    	reflection.js for jQuery v1.11
    	(c) 2006-2013 Christophe Beyls <http://www.digitalia.be>
    	MIT-style license.
    */
    function(e) {
        e.fn.extend({
            reflect: function(t) {
                return t = e.extend({
                    height: 1 / 3,
                    opacity: .5
                }, t), this.unreflect().each(function() {
                    function i() {
                        var i, n, s, a, r, l = o.width,
                            h = o.height;
                        if (n = Math.floor(t.height > 1 ? Math.min(h, t.height) : h * t.height), i = e("<canvas />")[0], i.getContext) {
                            a = i.getContext("2d");
                            try {
                                e(i).attr({
                                    width: l,
                                    height: n
                                }), a.save(), a.translate(0, h - 1), a.scale(1, -1), a.drawImage(o, 0, 0, l, h), a.restore(), a.globalCompositeOperation = "destination-out", r = a.createLinearGradient(0, 0, 0, n), r.addColorStop(0, "rgba(255, 255, 255, " + (1 - t.opacity) + ")"), r.addColorStop(1, "rgba(255, 255, 255, 1.0)"), a.fillStyle = r, a.rect(0, 0, l, n), a.fill()
                            } catch (c) {
                                return
                            }
                        } else {
                            if (!window.ActiveXObject) return;
                            i = e("<img />").attr("src", o.src).css({
                                width: l,
                                height: h,
                                marginBottom: n - h,
                                filter: "FlipV progid:DXImageTransform.Microsoft.Alpha(Opacity=" + 100 * t.opacity + ", FinishOpacity=0, Style=1, StartX=0, StartY=0, FinishX=0, FinishY=" + n / h * 100 + ")"
                            })[0]
                        }
                        e(i).css({
                            display: "block",
                            border: 0
                        }), s = e(/^a$/i.test(o.parentNode.tagName) ? "<span />" : "<div />").insertAfter(o).append([o, i])[0], s.className = o.className, e.data(o, "reflected", s.style.cssText = o.style.cssText), e(s).css({
                            width: l,
                            height: h + n,
                            overflow: "hidden"
                        }), o.style.cssText = "display: block; border: 0px", o.className = "reflected"
                    }
                    var o = this;
                    /^img$/i.test(o.tagName) && (o.complete ? i() : e(o).load(i))
                })
            },
            unreflect: function() {
                return this.unbind("load").each(function() {
                    var t, i = this,
                        o = e.data(this, "reflected");
                    void 0 !== o && (t = i.parentNode, i.className = t.className, i.style.cssText = o, e.removeData(i, "reflected"), t.parentNode.replaceChild(i, t))
                })
            }
        })
    }(jQuery), jQuery(function(e) {
        e("img.reflect").reflect({})
    }), window.twttr = function(e, t, i) {
        var o, n, s = e.getElementsByTagName(t)[0];
        if (!e.getElementById(i)) return n = e.createElement(t), n.id = i, n.src = "https://platform.twitter.com/widgets.js", s.parentNode.insertBefore(n, s), window.twttr || (o = {
            _e: [],
            ready: function(e) {
                o._e.push(e)
            }
        })
    }(document, "script", "twitter-wjs"), $gr.user.user_name_edit = function() {
        var e = {},
            t = function() {
                var t = $j("#user_full_name_source");
                e.first_name = $j("#user_first_name").val(), e.middle_name = $j("#user_middle_name").val(), e.last_name = $j("#user_last_name").val();
                var i = {};
                i.FL = e.first_name + " " + e.last_name, i.FML = e.first_name + " " + e.middle_name + " " + e.last_name, i.LF = e.last_name + " " + e.first_name, t.find("option").each(function(e, t) {
                    t.text = i[$j(t).val()]
                })
            };
        return {
            sync_dropdown: t
        }
    }(), $j(document).on("keyup", "#user_first_name, #user_middle_name, #user_last_name", function(e) {
        $gr.user.user_name_edit.sync_dropdown()
    }), $gr.user.custom_gender_suggestions = ["agender", "androgyne", "androgynous", "bigender", "cis", "cisgender", "cis female", "cis male", "cis man", "cis woman", "cisgender female", "cisgender male", "cisgender man", "cisgender woman", "female to male", "FTM", "gender fluid", "gender nonconforming", "gender questioning", "gender variant", "genderqueer", "intersex", "male to female", "MTF", "neither", "neutrois", "non-binary", "other", "pangender", "trans", "trans*", "trans female", "trans* female", "trans male", "trans* male", "trans man", "trans* man", "trans person", "trans* person", "trans woman", "trans* woman", "transfeminine", "transgender", "transgender female", "transgender male", "transgender man", "transgender person", "transgender woman", "transmasculine", "transsexual", "transsexual female", "transsexual male", "transsexual man", "transsexual person", "transsexual woman", "two-spirit"], $gr.user.show_custom_gender_options_if_needed = function() {
        "C" == $j("#user_gender").val() ? $j("#custom_gender_fields").show() : $j("#custom_gender_fields").hide()
    }, $gr.user.autocomplete_gender_suggestions = function() {
        var e = $j("#user_gender_custom").val(),
            t = "",
            i = "";
        return e.length >= 2 && $gr.user.custom_gender_suggestions.each(function(t) {
            t.toUpperCase().startsWith(e.toUpperCase()) && (i += '<li class="resultsListItem"><a class="resultsListItemLink" href="#">' + t + "</a></li>")
        }), "" !== i && (t = '<ul class="resultsList">' + i + "</ul>"), t
    }, $j(document).ready(function() {
        $j("#user_full_name_source").append($j("<option value='FL'></option>")), "" !== $j("#user_middle_name").val() && $j("#user_full_name_source").append($j("<option value='FML'></option>")), "" !== $j("#user_last_name").val() && $j("#user_full_name_source").append($j("<option value='LF'></option>")), $gr.user.user_name_edit.sync_dropdown(), $j("#user_gender").change($gr.user.show_custom_gender_options_if_needed), $gr.user.show_custom_gender_options_if_needed(), Autocomplete.attachTo("#user_gender_custom", {
            menuListParentSelector: "#custom_gender_autocomplete",
            queryCallback: $gr.user.autocomplete_gender_suggestions,
            queryDebounceDuration: 200,
            selectToFillIn: !0
        })
    }), $gr.user.user_feed_preferences = function() {
        var e = function(e) {
            var t = $j("#grok_" + e + "_en"),
                i = $j("#grok_" + e + "_dis"),
                o = $j("#gr_" + e + "_en"),
                n = $j("#gr_" + e + "_dis"),
                s = $j(".checkboxCorrespondingTo-" + e),
                a = s.length,
                r = s.filter(":checked").length;
            a == r ? (t.css("display", "block"), i.css("display", "none")) : (t.css("display", "none"), i.css("display", "block")), r > 0 ? (o.css("display", "block"), n.css("display", "none")) : (o.css("display", "none"), n.css("display", "block"))
        };
        $j(".checkboxCorrespondingTo-publish_book_activities").on("click", function(t) {
            e("publish_book_activities")
        }), $j(".checkboxCorrespondingTo-publish_review_activities").on("click", function(t) {
            e("publish_review_activities")
        }), $j(".checkboxCorrespondingTo-publish_additional_activities").on("click", function(t) {
            e("publish_additional_activities")
        })
    }, $j(document).ready(function() {
        $gr.user.user_feed_preferences()
    }), Element.activateHideNewShelfForm = function(e) {
        e.observe("click", function(t) {
            var i = e.up("#createShelfTip");
            void 0 != i && (i.previous().addClassName("lastRow"), i.hide()), new Ajax.Request(e.href), t.stop()
        })
    }, Element.addMethods({
        activateHideNewShelfForm: Element.activateHideNewShelfForm
    }), document.observe("dom:loaded", function() {
        var e = $("hideNewShelfForm");
        e && e.activateHideNewShelfForm(), $j("#shelfTable .userShelfName .renameUserShelfLnk").click(function() {
            return showRenameForm($j(this)), !1
        }), $j("#shelfTable .userShelfName .cancelRenameUserShelf").click(function() {
            return hideRenameForm($j(this)), !1
        }), $j("#shelfTable .userShelfName .submitRenameUserShelf").click(function() {
            return submitRenameShelf($j(this).closest("form")), !1
        })
    }), document.observe("dom:loaded", function() {
        activateExpandDetailsLinks()
    });
var after_update = function(e) {
    return function(t, i) {
        $j("#" + e + "_name").val().replace(/ *\(.*\) *$/, "");
        var o = i.readAttribute("id").replace(/auto_complete_/, ""),
            n = o.split("_"),
            s = n[n.length - 1];
        $j("#" + e + "_id").val(s)
    }
};
$j(document).ready(function() {
    $j("div.metaMerge > div.floatRightContainer").children("a").hide(), $j("div.metaMerge > div.meta_to_delete").children("input:checkbox").prop("checked", !1)
}), $j(document).on("change", "div.meta_to_delete > input:checkbox", function() {
    var e = this.parent();
    if (this.checked) $j("div.meta_to_delete").not(e).children("input:checkbox").hide(), $j("div.meta_to_delete").children("label").hide(), $j(e).children("input:checkbox,a").show(), $j("div.meta_to_keep").children("input:checkbox,a").show(), $j("div.meta_to_keep").children("a.meta_to_keep").attr("href", $j(e).children("a.meta_to_delete").attr("href"));
    else {
        var t = $j("div.metaMerge > div.floatRightContainer");
        t.find("a").hide(), t.find("input:checkbox").show()
    }
});
var MixinAuthRedirect = function() {
        this.authRedirect = function(e, t) {
            if (e && 403 === e.status) {
                var i = JSON.parse(e.responseText);
                i.redirect && (location.href = i.redirect)
            } else "function" == typeof t ? t(e) : alert("So sorry, but there was a problem completing your request. Please reload the page and try again.")
        }
    },
    MixinBackgoundMask = function() {
        var e = "bgmask-";
        this.initializeBackgroundMask = function(e) {
            this.backgroundMaskId || ("string" != typeof e && (e = ""), e += " backgroundMask", "string" == typeof this.attr.componentName && (e += " " + this.attr.componentName + "Mask"), this.backgroundMaskId = this.generateBackgroundMaskId(e), $j("#" + this.backgroundMaskId).length || this.trigger(document, "create.viewportOverlay", {
                overlayId: this.backgroundMaskId,
                attr: {
                    className: e,
                    disableDirectHide: !0
                }
            }))
        }, this.hideBackgroundMask = function() {
            this.trigger(document, "hide.viewportOverlay", {
                overlayId: this.backgroundMaskId
            })
        }, this.showBackgroundMask = function() {
            this.trigger(document, "show.viewportOverlay", {
                overlayId: this.backgroundMaskId
            })
        }, this.generateBackgroundMaskId = function(t) {
            var i = t.split("").reduce(function(e, t) {
                return e = (e << 5) - e + t.charCodeAt(0), e & e
            }, 0);
            return 0 > i && (i = "0" + Math.abs(i).toString()), e + i
        }
    },
    dropdownMenu = function() {
        this.defaultAttrs({
            menuToggleSelector: ".js-toggleDropdownMenu"
        }), this.after("initialize", function() {
            var e = this,
                t = this.getMenuToggleElement();
            e.$node.attr("tabindex", -1), e.$node.bind("focusout", function(i) {
                setTimeout(function() {
                    var o = document.activeElement;
                    o && !t.is(o) && ($j.contains(i.currentTarget, o) || (e.$node.toggle(!1), $j(".js-newsfeedOverlay").last().hide()))
                }, 1)
            }), t.click(function(t) {
                t.preventDefault(), e.toggleDropdownMenu(), e.$node.is(":visible") ? (e.$node.focus(), $j(".js-newsfeedOverlay").last().show()) : $j(".js-newsfeedOverlay").last().hide()
            })
        }), this.toggleDropdownMenu = function() {
            this.$node.toggle()
        }, this.getMenuToggleElement = function() {
            var e, t;
            return e = this.$node, t = e.prevAll(this.attr.menuToggleSelector).first()
        }
    },
    withExpandableTextField = function() {
        flight.compose.mixin(this, [MixinEventUtils]), this.defaultAttrs({
            expandedClass: "expanded",
            loadingClass: "loading",
            showClass: "show",
            cancelActionSelector: ".cancelAction",
            hiddenContentSelector: ".hiddenContent",
            inputFieldSelector: ".textInput",
            submitActionSelector: ".submitAction"
        }), this.after("initialize", function() {
            this.$inputField = this.select("inputFieldSelector"), this.select("inputFieldSelector").on("focus", $j.proxy(this.uiExpandTextField, this)), this.select("cancelActionSelector").on("click", $j.proxy(this.uiResetForm, this))
        }), this.uiResetForm = function() {
            this.$inputField.val(""), this.uiHideLoading(), this.uiCollapseTextField()
        }, this.uiExpandTextField = function() {
            this.$inputField.addClass(this.attr.expandedClass), this.uiShowHiddenContent()
        }, this.uiCollapseTextField = function() {
            this.$inputField.removeClass(this.attr.expandedClass), this.$inputField.css({
                width: "",
                height: ""
            }), this.uiHideContent()
        }, this.uiShowHiddenContent = function() {
            this.select("hiddenContentSelector").addClass(this.attr.showClass)
        }, this.uiHideContent = function() {
            this.select("hiddenContentSelector").removeClass(this.attr.showClass)
        }, this.uiShowLoading = function() {
            this.select("submitActionSelector").addClass(this.attr.loadingClass)
        }, this.uiHideLoading = function() {
            this.select("submitActionSelector").removeClass(this.attr.loadingClass)
        }
    },
    withFormSubmission = function() {
        this.after("initialize", function() {
            this.on("submit", this.submitForm)
        }), this.submitForm = function(e) {
            var t = this.$node.serialize(),
                i = this.$node.attr("method"),
                o = this.$node.attr("action");
            this.$node.data("remote") && ($j.ajax({
                url: o,
                type: i,
                data: t,
                dataType: "json",
                context: this
            }).done(this.onFormSuccess).fail(this.onFormError), e.preventDefault(), e.stopPropagation())
        }, this.onFormSuccess = function(e, t, i) {
            this.broadcast("data-form-success", e)
        }, this.onFormError = function(e, t, i) {
            this.trigger("data-form-error", {
                status: t,
                error: i
            })
        }
    },
    withSlideUpMenu = function() {
        var e = "transitionend webkitTransitionEnd oTransitionEnd otransitionend";
        flight.compose.mixin(this, [MixinEventUtils, MixinBackgoundMask]), this.defaultAttrs({
            slideUpMixinEventNamespace: "slideUpMenu",
            slideUpAnimPrepClass: "readyToShow",
            slideUpShowClass: "show",
            slideUpItemSelectedClass: "selected",
            slideUpCancelSelector: ".cancel",
            slideUpItemSelector: ".slideUpMenuItem:not(.cancel, .title, .message)",
            slideUpListSelector: ".slideUpMenuList"
        }), this.after("initialize", function() {
            "undefined" == typeof this.attr.menuSelector && this.broadcastError("'menuSelector' attribute is required", !0), this.$node.is(this.attr.menuSelector) ? this.$slideUpMenu = this.$node : this.$slideUpMenu = this.select("menuSelector"), this.$slideUpMenu.find(this.attr.slideUpCancelSelector).on("click", $j.proxy(this.hideSlideUpMenu, this));
            var e = this.getListItems();
            e.length && e.on("click", $j.proxy(function(e) {
                this.attr.slideUpListItemAllowDefaultAction || e.preventDefault(), this.triggerSlideUpEvent("listItemSelected", e.target)
            }, this)), this.initializeBackgroundMask(), this.updateMenuHeight(), this.on(document, "beforeHide.viewportOverlay", $j.proxy(function(e, t) {
                t && t.overlayId === this.overlayId && this.defer(function() {
                    this.isSlideUpMenuVisible() && this.hideSlideUpMenu()
                })
            }, this))
        }), this.hideSlideUpMenu = function(t) {
            "undefined" != typeof t && t.preventDefault(), this.triggerSlideUpEvent("beforeHide"), this.$slideUpMenu.removeClass(this.attr.slideUpShowClass), this.hideBackgroundMask();
            var i = $j.proxy(function(t) {
                this.$slideUpMenu.off(e, i), this.onHideSlideUpAnimationDone(t)
            }, this);
            this.$slideUpMenu.one(e, i)
        }, this.onHideSlideUpAnimationDone = function(e) {
            this.$slideUpMenu.removeClass(this.attr.slideUpAnimPrepClass).select("slideUpListSelector").css("bottom", ""), this.triggerSlideUpEvent("afterHide")
        }, this.isSlideUpMenuVisible = function() {
            return this.$slideUpMenu.hasClass(this.attr.slideUpShowClass)
        }, this.showSlideUpMenu = function() {
            /\biP(hone|ad|od)\b/i.test(navigator.userAgent) && ($j(document).trigger("hideBrowserAddressBar"), $j(document).trigger("hideSmartAppBanner")), this.triggerSlideUpEvent("beforeShow"), this.$slideUpMenu.addClass(this.attr.slideUpAnimPrepClass), this.showBackgroundMask(), this.$slideUpMenu.addClass(this.attr.slideUpShowClass), this.triggerSlideUpEvent("afterShow")
        }, this.toggleSlideUpMenuVisibility = function(e) {
            e && e.preventDefault(), this.isSlideUpMenuVisible() ? this.hideSlideUpMenu() : this.showSlideUpMenu()
        }, this.updateMenuHeight = function() {
            var e = this.$slideUpMenu.find(this.attr.slideUpListSelector);
            if (e.length) {
                if (this.menuHeight = e.outerHeight(), !(this.menuHeight > 0)) return this.broadcastError("cannot display menu list because it has no dimensions");
                e.css("bottom", 0 - this.menuHeight + "px")
            }
        }, this.getSafeEventNameForSlideUpEvent = function(e) {
            return this.getSafeEventName([e, this.attr.slideUpMixinEventNamespace].join("."))
        }, this.onSlideUpEvent = function(e, t) {
            this.on(this.getSafeEventNameForSlideUpEvent(e), $j.proxy(t, this))
        }, this.triggerSlideUpEvent = function(e, t) {
            this.trigger(this.getSafeEventNameForSlideUpEvent(e), t)
        }, this.getListItems = function() {
            return this.$slideUpMenu.find(this.attr.slideUpItemSelector)
        }
    },
    MixinEventUtils = function() {
        this.broadcast = function(e, t) {
            "undefined" == typeof t || $j.isPlainObject(t) || (t = {
                data: t
            }), this.trigger(document, this.getSafeEventName(e), t)
        }, this.broadcastError = function(e, t) {
            if (!e || /^\s*$/.test(e)) var e = "unknown error";
            var i = "unknown component",
                o = {};
            if ($j.each(["identifier", "channel", "componentName"], $j.proxy(function(e, t) {
                    var n = this.attr[t];
                    n && (o[t] = i = n)
                }, this)), e = i + " : " + e, t === !0) throw new Error(e);
            this.trigger(document, "componentError", $j.extend({
                message: e
            }, o))
        }, this.defer = function(e, t) {
            setTimeout($j.proxy(e, this), $j.isNumeric(t) ? t : 0)
        }, this.forceBrowserReflow = function() {
            this.$node.offset()
        }, this.getSafeEventName = function(e) {
            if ("string" == typeof e) {
                var t = ".";
                this.attr.channel && (e += t + this.attr.channel), this.attr.identifier && (e += t + this.attr.identifier)
            }
            return e
        }, this.listen = function(e, t) {
            this.on(document, this.getSafeEventName(e), t)
        }
    },
    withFormAjax = function() {
        this.defaultAttrs({}), this.after("initialize", function() {
            this.on("ajax:before", this.onBefore), this.on("ajax:error", this.onError)
        }), this.onBefore = function() {
            this.uiDismissNotification(), this.uiShowLoading()
        }, this.onError = function(e, t, i, o) {
            var n;
            try {
                n = $j.parseJSON(t.responseText)
            } catch (s) {
                n = {
                    type: "error",
                    message: "There was an unknown error. Please retry."
                }
            }
            this.uiShowNotification(n), this.uiHideLoading()
        }
    },
    withNotification = function() {
        flight.compose.mixin(this, [MixinEventUtils]);
        var e = "info",
            t = ["info", "error", "success"];
        this.defaultAttrs({
            notificationType: e,
            showNotificationClass: "notificationShow",
            dismissActionSelector: ".js-notificationDismissAction",
            messageSelector: ".js-notificationMessage"
        }), this.after("initialize", function() {
            this.$notificationNode = this.$node.find(".js-notification");
            var e = this.$notificationNode.find(this.attr.dismissActionSelector);
            e.on("click", $j.proxy(function(e) {
                this.onDismiss(e)
            }, this))
        }), this.onDismiss = function(e) {
            this.uiDismissNotification(e), this.recordNotificationDismissal()
        }, this.uiDismissNotification = function() {
            this.$notificationNode.removeClass(this.attr.showNotificationClass)
        }, this.uiShowNotification = function(t) {
            if ($j.isPlainObject(t)) {
                this.uiResetNotification(), t.type && this.isValidNotificationType(t.type) ? this.attr.notificationType = t.type : this.attr.notificationType = e, this.$notificationNode.addClass(this.notificationTypeToClassName(this.attr.notificationType));
                var i = this.$notificationNode.find(this.attr.messageSelector).first(),
                    o = t.message;
                if ("error" === t.type && $j.isArray(o) && o.length > 1) {
                    var n = $j("<ul>");
                    $j.each(o, function(e, t) {
                        n.append($j("<li>").html(t))
                    }), i.html(n)
                } else i.html(o);
                this.$notificationNode.addClass(this.attr.showNotificationClass)
            }
        }, this.uiResetNotification = function() {
            this.$notificationNode.removeClass(this.notificationTypeToClassName(this.attr.notificationType))
        }, this.recordNotificationDismissal = function() {
            var e = this.$notificationNode.find(this.attr.dismissActionSelector).data("user-preference");
            if (e) {
                var t = {};
                t[e] = 0, $j.post("/user/update_preferences", {
                    user: t
                })
            }
        }, this.isValidNotificationType = function(e) {
            return $j.inArray(e, t) > -1
        }, this.notificationTypeToClassName = function(e) {
            return "notification" + e.charAt(0).toUpperCase() + e.slice(1)
        }
    },
    withTooltips = function() {
        this.defaultAttrs({
            tooltipTriggerSelector: ".js-withTooltips-tooltipTrigger",
            tooltipSelector: ".js-withTooltips-tooltip"
        }), this.after("initialize", function() {
            this.attr.titleText = this.select("tooltipTriggerSelector").attr("title"), this.on("mouseenter", {
                tooltipTriggerSelector: this.intendToShow,
                tooltipSelector: this.intendToShow
            }), this.on("mouseleave", {
                tooltipTriggerSelector: this.intendToHide,
                tooltipSelector: this.intendToHide
            })
        }), this.hideTooltip = function() {
            grPopup.hide(this.select("tooltipSelector"), function() {
                this.hide()
            })
        }, this.intendToShow = function() {
            HoverIntent.onEnterIntent(this, this.showTooltip)
        }, this.intendToHide = function() {
            HoverIntent.onLeaveIntent(this, this.hideTooltip)
        }, this.showTooltip = function() {
            var e = this.select("tooltipSelector"),
                t = this.select("tooltipTriggerSelector"),
                i = t.attr("title");
            void 0 !== i && "" !== i && (t.attr("title", ""), "" === e.html() && e.text(this.attr.titleText)), grPopup.show(e, function() {
                this.show()
            })
        }
    },
    Accordion = flight.component(function() {
        var e = $j(document),
            t = "accordionComponent";
        this.defaultAttrs({
            channel: t,
            componentName: t,
            catalystSelector: ".accordionHeading",
            contentSelector: ".accordionContent",
            openClass: "sectionOpen",
            outsideCatalystSelectors: "",
            outsideCatalystsCloseSection: !1
        }), this.after("initialize", function() {
            var e = this.select("catalystSelector"),
                t = "";
            e.on("click", $j.proxy(this.toggleState, this)), "" !== this.attr.outsideCatalystSelectors && (t = this.attr.outsideCatalystsCloseSection === !1 ? "openState" : "toggleState", $j(this.attr.outsideCatalystSelectors).on("click", $j.proxy(this[t], this)))
        }), this.toggleState = function(e) {
            this.isVisible() ? this.closedState(e) : this.openState(e)
        }, this.isVisible = function() {
            return this.$node.hasClass(this.attr.openClass)
        }, this.openState = function(t) {
            this.$node.addClass(this.attr.openClass), "true" === $j(t.target).data("scroll-to-section") && e.scrollTop(this.$node.offset().top)
        }, this.closedState = function(e) {
            this.$node.removeClass(this.attr.openClass)
        }
    });
$gr.shared.amazonPurchasesBanner = flight.component(function() {
    var e = "amazonPurchasesBannerComponent";
    this.defaultAttrs({
        channel: e,
        componentName: e,
        dismissButtonSelector: ".dismissButton",
        rateBooksContainerSelector: ".rateBooks"
    }), this.after("initialize", function() {
        this.on("click", {
            dismissButtonSelector: this.hideBanner
        }), this.$node.parents(this.attr.rateBooksContainerSelector).length && this.hideDismissButton()
    }), this.hideBanner = function(e) {
        this.$node.fadeOut(), this.updateHideBannerPreference(), e.preventDefault(), this.teardown()
    }, this.hideDismissButton = function() {
        this.select("dismissButtonSelector").hide()
    }, this.updateHideBannerPreference = function() {
        $j.post("/user/update_preferences", {
            user: {
                show_amazon_import_prompt: 0
            }
        })
    }
}), $gr.shared.asyncGlideButton = flight.component(function() {
    this.RTS_PATTERN = /rts=((\w)+)(&|$)/, this.RTS = location.search.match(this.RTS_PATTERN) ? location.search.match(this.RTS_PATTERN)[1] : null, this.RTO_PATTERN = /rto=((\w)+)(&|$)/, this.RTO = location.search.match(this.RTO_PATTERN) ? location.search.match(this.RTO_PATTERN)[1] : null, this.after("initialize", function() {
        var e = this.$node.data("book-id");
        this.getGlideData(e)
    }), this.getGlideData = function(e) {
        var t = "/buttons/glide/" + e;
        this.RTO && (t = t + "?rto=" + this.RTO), $j.ajax({
            url: t,
            type: "GET",
            context: this,
            success: function(e) {
                this.readJson(e)
            }
        })
    }, this.readJson = function(e) {
        var t = e.glide_eligible,
            i = e.glide_enabled,
            o = e.ku_eligible,
            n = e.ebook_price,
            s = e.deal,
            a = e.asin,
            r = e.marketplace_suffix,
            l = e.ref_tag_override;
        if (i) {
            var h = this.$node.find(".asyncKindleUnlimitedBuyText"),
                c = "Or buy for ";
            if (this.$node.find(".glideButton").attr("data-asin", a), o) this.$node.find(".glideButton").attr("data-ku-eligible", !0), l ? (this.$node.find(".asyncGlideButton").attr("data-ref-tag", l), h.attr("data-ref-tag", l)) : s ? (this.$node.find(".asyncGlideButton").attr("data-ref-tag", this.applyRTS("x_gr_w_glide_hasdeal_sout_ku")), h.attr("data-ref-tag", this.applyRTS("x_gr_w_glide_hasdeal_sout_ku_buy"))) : (this.$node.find(".asyncGlideButton").attr("data-ref-tag", this.applyRTS("x_gr_w_glide_sout_ku")), h.attr("data-ref-tag", this.applyRTS("x_gr_w_glide_sout_ku_buy"))), this.$node.find(".asyncGlideButton").html('Kindle Unlimited <span class="kindleUnlimitedPrice">$0.00</span>'), s ? (c += '<span class="buyButtonBar__formerPrice">' + s.original_price + "</span> ", c += '<span class="buyButtonBar__dealPrice">' + n + "</span>") : c += n, h.html(c), h.css("display", "inline-block");
            else {
                this.$node.find(".glideButton").attr("data-ku-eligible", !1), l ? this.$node.find(".asyncGlideButton").attr("data-ref-tag", l) : s ? this.$node.find(".asyncGlideButton").attr("data-ref-tag", this.applyRTS("x_gr_w_glide_hasdeal_sout")) : this.$node.find(".asyncGlideButton").attr("data-ref-tag", this.applyRTS("x_gr_w_glide_sout"));
                var d = "Kindle Store ";
                s ? (d += '<span class="buyButtonBar__formerPrice">' + s.original_price + "</span> ", d += '<span class="buyButtonBar__dealPrice">' + n + "</span>") : d += n, this.$node.find(".asyncGlideButton").html(d)
            }
            s ? this.updateBuyButtonRefTag(this.applyRTS("x_gr_w_glide_hasdeal_bb_sout"), r, l) : this.updateBuyButtonRefTag(this.applyRTS("x_gr_w_glide_bb_sout"), r, l), this.$node.find("#buyDropButtonStores .buttonBar").html("Stores&nbsp;&#9662;"), this.$node.find(".secondBuyButton").removeClass("secondBuyButton"), this.$node.find(".asyncGlideButton").css("display", "inline-block")
        } else(t || this.RTS) && this.updateBuyButtonRefTag(this.applyRTS("x_gr_w_bb_sout"), r, l)
    }, this.updateBuyButtonRefTag = function(e, t, i) {
        var o = /ref=(\S)+?(?=&|$)/,
            n = /tag=(\S)+?(?=&|$)/,
            s = this.$node.find("#buyButton");
        if (1 == s.length) {
            var a = s.attr("href");
            i ? (a = a.replace(o, "ref=" + i), a = a.replace(n, "tag=" + i + t)) : (a = a.replace(o, "ref=" + e), a = a.replace(n, "tag=" + e + t)), s.attr("href", a)
        }
    }, this.applyRTS = function(e) {
        return this.RTS && !this.RTO ? e + this.RTS : e
    }
}, MixinEventUtils), $gr.shared.asyncPreviewButton = flight.component(function() {
    this.RTO_PATTERN = /rto=((\w)+)(&|$)/, this.RTO = location.search.match(this.RTO_PATTERN) ? location.search.match(this.RTO_PATTERN)[1] : null, this.after("initialize", function() {
        var e = this.$node.data("book-id");
        this.getPreviewLink(e)
    }), this.getPreviewLink = function(e) {
        var t = "/buttons/preview/" + e;
        this.RTO && (t = t + "?rto=" + this.RTO), $j.ajax({
            url: t,
            type: "GET",
            data: {},
            context: this,
            success: function(e) {
                this.readJson(e)
            }
        })
    }, this.readJson = function(e) {
        var t = e.preview_link;
        t && (this.$node.find(".asyncPreviewButton").attr("href", t), this.$node.show())
    }
}, MixinEventUtils), $gr.shared.audibleSampleButton = flight.component(function() {
    this.audibleIframeLocation = "https://www.audible.com", this.defaultAttrs({
        audibleSampleContainer: "#audibleSample",
        audibleFlyoutFrame: "#audibleSampleFlyoutFrame",
        modalAMediumHeight: 175,
        modalALargeHeight: 245
    }), this.after("initialize", function() {
        this.on("message onmessage", this.receiveMessage)
    }), this.receiveMessage = function(e) {
        if (e = e.originalEvent, e.origin === this.audibleIframeLocation) {
            for (var t, i = e.data, o = document.getElementsByTagName("iframe"), n = 0; n < o.length; n++)
                if (o[n].contentWindow === e.source) {
                    t = o[n];
                    break
                } if ("function" == typeof this[i.func]) {
                if (!isShowingBuyableFeatures()) return;
                $j.proxy(this[i.func], this, t).call()
            }
        }
    }, this.showAudibleButton = function(e) {
        $j(this.attr.audibleSampleContainer).css("display", "inline-block"), $j(this.attr.audibleFlyoutFrame).addClass("audibleSampleFlyoutFrameNoTreatment");
        var t = e.getAttribute("data-report-audible-mapping"),
            i = e.getAttribute("data-book-id"),
            o = "/book/audible_enabled/" + i;
        "true" == t && $j.get(o)
    }, this.showAudibleSampleFlyout = function(e) {
        var t = e.getAttribute("data-flyout-id");
        t ? ($j("#" + t).show(), $j.post("/track/track_click", {
            feature: "AEP_Desktop_ListenButtons"
        })) : $j(this.attr.audibleFlyoutFrame).show()
    }, this.hideAudibleSampleFlyout = function(e) {
        var t = e.getAttribute("data-flyout-id");
        t ? $j("#" + t).hide() : $j(this.attr.audibleFlyoutFrame).hide()
    }
}), $gr.shared.authorAnswersSort = flight.component(function() {
    this.defaultAttrs({
        sortMenuSelector: ".answersSort__menu",
        loadingSelector: ".answersSort__spinner"
    }), this.after("initialize", function() {
        this.$answersContainer = $j(".authorAnsweredQuestions__questionsList"), this.$loadingIcon = $j(".authorAnsweredQuestions__loading"), this.$errorContainer = $j(".authorAnsweredQuestions__errorMessage"), this.on("change", {
            sortMenuSelector: this.getSortedAnswers
        })
    }), this.updateAnswerList = function(e, t, i) {
        this.$loadingIcon.hide(), this.$answersContainer.html(e.content_html).fadeIn(), LoadMore.attachTo(".jsLoadMoreAnswered", {
            loadMoreContainerSelector: "#loadMoreContainerAnsweredQuestions",
            loadMoreActionSelector: ".loadMoreActionAnsweredQuestions",
            loadMoreSelector: ".jsLoadMoreAnswered"
        })
    }, this.showLoadingIcon = function() {
        this.$answersContainer.hide(), this.$loadingIcon.show()
    }, this.showError = function() {
        this.$loadingIcon.hide(), this.$errorContainer.show()
    }, this.getSortedAnswers = function() {
        this.showLoadingIcon();
        var e = this.select("sortMenuSelector").data("url");
        $j.ajax({
            url: e,
            type: "get",
            data: {
                format: "json",
                sort: this.select("sortMenuSelector").val(),
                resort: !0
            },
            context: this,
            success: this.updateAnswerList,
            error: this.showError
        })
    }
}, MixinEventUtils), $gr.shared.authorDashboardQA = flight.component(function() {
    var e = "authorDashboardQA";
    this.defaultAttrs({
        channel: e,
        componentName: e,
        digestSettingsSelector: ".js-authorDigestSettings",
        errorMessageSelector: ".errorMessage",
        loadingQuestionsSelector: ".js-questions-loading",
        optedInActionSelector: ".js-optIntoAuthorQA",
        optedInFormMessageSelector: ".js-optedInMessage",
        optedInNotificationSelector: ".js-optedInNotification",
        optedInSettingsSelector: ".js-optedInSettings",
        optedOutActionSelector: ".js-optOutofAuthorQA",
        optedOutFormMessageSelector: ".js-optedOutMessage",
        pendingQuestionsCountSelector: ".js-pending-questions-count",
        skipQuestionSelector: ".js-skipQuestionAction",
        starterQuestionSelector: ".starterQuestion",
        unansweredQuestionsContainerSelector: ".unansweredQuestionsContainer",
        unansweredQuestionSelector: ".unansweredQuestion"
    }), this.after("initialize", function() {
        this.optInUrl = this.select("optedInActionSelector").data("url"), this.optOutUrl = this.select("optedOutActionSelector").data("url"), this.currentQuestionsCount = parseInt(this.select("pendingQuestionsCountSelector").data("count")), this.attr.optIntoQaActionSelectors = [this.attr.optedInActionSelector, this.attr.optedOutActionSelector].join(","), this.on("change", {
            optIntoQaActionSelectors: this.updateOptInState,
            digestSettingsSelector: this.updateDigestSettings
        }), this.on("ajax:success", {
            skipQuestionSelector: this.uiHideSkippedQuestion
        }), this.listen("answerFormSubmitted", this.uiDecrementQuestionsCount)
    }), this.uiShowOptedOutState = function() {
        this.select("optedInNotificationSelector").hide(), this.select("starterQuestionSelector").show(), this.select("optedInFormMessageSelector").hide(), this.select("optedOutFormMessageSelector").show(), this.select("optedInSettingsSelector").hide()
    }, this.uiShowOptedInState = function(e, t, i) {
        this.select("optedInNotificationSelector").show(), this.select("starterQuestionSelector").hide(), this.select("optedInFormMessageSelector").show(), this.select("optedOutFormMessageSelector").hide(), this.select("optedInSettingsSelector").show(), $j.isPlainObject(e) && e.content_html && (this.select("unansweredQuestionsContainerSelector").html(e.content_html), this.select("pendingQuestionsCountSelector").text(e.questions_count), this.currentQuestionsCount = e.questions_count), this.select("loadingQuestionsSelector").hide()
    }, this.uiShowError = function() {
        this.select("errorMessageSelector").show()
    }, this.uiHideSkippedQuestion = function(e, t, i) {
        $j(e.target).parents(this.attr.unansweredQuestionSelector).fadeOut(), this.uiDecrementQuestionsCount()
    }, this.uiDecrementQuestionsCount = function() {
        this.currentQuestionsCount -= 1, this.currentQuestionsCount = Math.max(0, this.currentQuestionsCount), this.select("pendingQuestionsCountSelector").text(this.currentQuestionsCount)
    }, this.updateOptInState = function() {
        var e = this.select("optedInActionSelector").is(":checked");
        e && this.select("optedInActionSelector").data("neverOpted") && this.select("loadingQuestionsSelector").show(), $j.ajax({
            url: e ? this.optInUrl : this.optOutUrl,
            type: "post",
            data: {
                format: "json"
            },
            context: this,
            success: e ? this.uiShowOptedInState : this.uiShowOptedOutState,
            error: this.uiShowError
        })
    }, this.updateDigestSettings = function() {
        var e = this.select("digestSettingsSelector").data("url"),
            t = this.select("digestSettingsSelector").find("input:checked").val();
        $j.ajax({
            url: e,
            type: "post",
            data: {
                format: "json",
                digest_frequency: t
            },
            context: this,
            error: this.uiShowError
        })
    }
}, MixinEventUtils), $gr.shared.authorFollow = flight.component(function() {
    var e = "AuthorFollow";
    this.defaultAttrs({
        channel: e,
        componentName: e,
        activeClass: "gr-button--togglable--enabled",
        inactiveClass: "gr-button--togglable--disabled",
        hoverClass: "btnHover",
        activeStateMethod: "delete",
        inactiveStateMethod: "post"
    }), this.after("initialize", function() {
        this.$node.data("activeButtonText") && (this.activeStateText = this.$node.data("activeButtonText")), this.$node.data("inactiveButtonText") && (this.inactiveStateText = this.$node.data("inactiveButtonText")), this.$node.data("hoverButtonText") && (this.hoverStateText = this.$node.data("hoverButtonText"), this.on("mouseenter", this.activateHover), this.on("mouseleave", this.deactivateHover)), this.on("click", this.updateAuthorFollowing)
    }), this.updateAuthorFollowing = function() {
        this.methodType = this.$node.attr("method"), this.url = this.$node.data("requestUrl"), this.disabledState();
        var e = $j.ajax({
            url: this.url,
            type: this.methodType,
            data: {
                format: "json"
            },
            context: this
        });
        e.done(this.onButtonSuccess), e.fail(this.onButtonError), e.always(this.onButtonComplete)
    }, this.onButtonSuccess = function(e, t) {
        $j.isPlainObject(e) && this.$node.data("requestUrl", e.url), $j("#flashMessages").trigger("clearFlashMessage"), this.toggleState();
        var i = 0;
        i = this.$node.hasClass(this.attr.activeClass) ? 1 : -1, this.trigger("authorFollowersCountChanged", {
            countDelta: i
        })
    }, this.onButtonComplete = function(e) {
        this.enabledState()
    }, this.onButtonError = function(e) {
        if (403 === e.status) this.defer(function() {
            this.authRedirect(e, $j.proxy(function() {
                var t = "Unknown XHR failure when trying to follow author.";
                e.status && (t += " , status code " + e.status), this.broadcastError(t)
            }, this))
        }, 500);
        else {
            var t = "There was an error when trying to follow/unfollow an author.";
            $j("#flashMessages").trigger("addFlashMessage", [t, "error"]), this.$node.data("hoverButtonText") && $j("#notificationBanner").trigger("showNotification", {
                type: "error",
                message: t
            })
        }
    }, this.toggleState = function() {
        this.$node.hasClass(this.attr.inactiveClass) ? this.activeState() : this.inactiveState()
    }, this.activateHover = function() {
        this.hoverStateText && this.$node.hasClass(this.attr.activeClass) && this.hoverState()
    }, this.deactivateHover = function() {
        this.hoverStateText && this.$node.hasClass(this.attr.hoverClass) && this.activeState()
    }, this.activeState = function() {
        this.$node.addClass(this.attr.activeClass), this.$node.removeClass(this.attr.inactiveClass), this.$node.removeClass(this.attr.hoverClass), this.$node.attr("method", this.attr.activeStateMethod), this.$node.text(this.activeStateText)
    }, this.inactiveState = function() {
        this.$node.addClass(this.attr.inactiveClass), this.$node.removeClass(this.attr.activeClass), this.$node.removeClass(this.attr.hoverClass), this.$node.attr("method", this.attr.inactiveStateMethod), this.$node.text(this.inactiveStateText)
    }, this.hoverState = function() {
        this.$node.addClass(this.attr.hoverClass), this.$node.removeClass(this.attr.activeClass), this.$node.removeClass(this.attr.inactiveClass), this.$node.text(this.hoverStateText)
    }, this.disabledState = function() {
        this.$node.attr("disabled", "disabled")
    }, this.enabledState = function() {
        this.$node.removeAttr("disabled")
    }
}, MixinEventUtils, MixinAuthRedirect), $gr.shared.authorFollowersCount = flight.component(function() {
    var e = "AuthorFollowersCount",
        t = "count";
    this.defaultAttrs({
        channel: e,
        componentName: e
    }), this.after("initialize", function() {
        this.on(document, "authorFollowersCountChanged", this.updateAuthorFollowersCount);
    }), this.updateAuthorFollowersCount = function(e, i) {
        var o, n = this.$node.data(t);
        parseInt(n) === n && (n += i.countDelta) >= 0 && (o = n + " ", o += 1 === n ? "follower" : "followers", this.$node.text(o).data(t, n))
    }
}), $gr.shared.notificationBanner = flight.component(function() {
    this.after("initialize", function() {
        this.on("showNotification", function(e, t) {
            this.uiShowNotification(t)
        }), this.on("resetNotification", this.uiResetNotification), this.on("dismissNotification", this.uiDismissNotification)
    })
}, withNotification);
var Autocomplete = flight.component(function() {
        var e = "autocomplete";
        this.defaultAttrs({
            channel: e,
            componentName: e,
            menuListParentSelector: "body",
            menuListSelector: ".resultsList",
            menuListItemSelector: ".resultsListItem",
            menuListItemLinkSelector: ".resultsListItemLink",
            menuBaseClass: e,
            menuShowClass: "show",
            $queryAjaxSettings: {},
            queryParamName: "q",
            queryLengthMin: 3,
            queryLengthMax: 50,
            queryDebounceDuration: 500,
            queryCallback: !1,
            selectToFillIn: !1
        }), this.after("initialize", function() {
            this.initializeMenu(), this.on("keyup", flight.utils.debounce($j.proxy(this.onKeystroke, this), this.attr.queryDebounceDuration)), this.on(this.getSafeEventName("reset"), this.onReset), this.on(this.getSafeEventName("clearMenu"), this.onClearMenu)
        }), this.initializeMenu = function() {
            if (!this.$menuRoot) {
                this.$menuRoot = $j("<div/>").addClass(this.attr.menuBaseClass).appendTo(this.attr.menuListParentSelector), this.attr.identifier && this.$menuRoot.data(this.attr.componentName + "-id", this.attr.identifier);
                var e = this;
                $j("html").click(function() {
                    e.hideMenu()
                }), this.$menuRoot.on("click", this.attr.menuListItemSelector, $j.proxy(this.onSelectMenuItem, this))
            }
        }, this.clearMenu = function() {
            this.$menuRoot.empty()
        }, this.hideMenu = function() {
            this.isMenuVisible() && (this.$menuRoot.removeClass(this.attr.menuShowClass), this.trigger(this.getSafeEventName("hideMenu")))
        }, this.isMenuVisible = function() {
            return this.$menuRoot.hasClass(this.attr.menuShowClass)
        }, this.reset = function() {
            this.hideMenu(), this.clearMenu(), this.$node.val("")
        }, this.showMenu = function() {
            this.isMenuVisible() || (this.$menuRoot.addClass(this.attr.menuShowClass), this.trigger(this.getSafeEventName("showMenu")))
        }, this.updateMenu = function(e) {
            this.$menuRoot.html(e), this.trigger(this.getSafeEventName("updateMenu"))
        }, this.submitQuery = function(e) {
            if (this.attr.queryCallback) return results = this.attr.queryCallback(e), void this.onSubmitQuerySuccess(results);
            if ("string" != typeof e && (e = this.$node.val()), e.length >= this.attr.queryLengthMin && e.length <= this.attr.queryLengthMax) {
                this.cachedAjaxSettings || (this.cachedAjaxSettings = $j.extend({}, this.attr.$queryAjaxSettings, {
                    context: this,
                    success: this.onSubmitQuerySuccess,
                    error: function() {
                        this.onSubmitQueryError(e)
                    },
                    complete: function() {
                        this.trigger(this.getSafeEventName("submitQueryEnd")), this.$activeAjaxRequest = null
                    },
                    beforeSend: function() {
                        this.trigger(this.getSafeEventName("submitQueryStart"))
                    }
                }));
                var t = $j.extend({}, this.cachedAjaxSettings);
                $j.isPlainObject(t.data) ? t.data[this.attr.queryParamName] = e : t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + this.attr.queryParamName + "=" + encodeURIComponent(e), this.$activeAjaxRequest && this.$activeAjaxRequest.abort(), this.$activeAjaxRequest = $j.ajax(t)
            } else this.clearMenu()
        }, this.onClearMenu = function(e) {
            this.clearMenu()
        }, this.onKeystroke = function(e) {
            13 === e.charCode && e.preventDefault(), this.submitQuery()
        }, this.onReset = function(e) {
            this.reset()
        }, this.onSelectMenuItem = function(e) {
            e.preventDefault();
            var t = $j(e.target).closest(this.attr.menuListItemSelector),
                i = t.find(this.attr.menuListItemLinkSelector);
            if (i.length)
                if (this.attr.selectToFillIn === !0) {
                    var o = i.text(),
                        n = t.data("bookId");
                    o && (this.$node.val(o), this.$node.data("bookId", n), this.hideMenu())
                } else {
                    var s = i.attr("href");
                    s && (this.reset(), location.href = s)
                }
        }, this.onSubmitQuerySuccess = function(e) {
            var t = e;
            $j.isPlainObject(e) && e.html && (e = e.html), this.updateMenu(e), this.showMenu(), t.attachLoadMore && LoadMore.attachTo(".jsLoadMore")
        }, this.onSubmitQueryError = function(e) {
            var t = "bad response from query";
            "string" == typeof e && (t += ' : "' + e + '"'), this.trigger(this.getSafeEventName("submitQueryError")), this.broadcastError(t), this.hideMenu()
        }
    }, MixinEventUtils),
    BackToTopButton = flight.component(function() {
        var e = "backToTopButton";
        this.defaultAttrs({
            hideOnFocusSelectors: "input[type='text'], input[type='password'],                                  select, textarea",
            showClass: "show",
            buttonVisibilityThresholdBottom: 150,
            buttonVisibilityThresholdTop: 150,
            scrollDebounceDuration: 15,
            channel: e,
            componentName: e
        }), this.after("initialize", function() {
            this.isFieldFocused = !1, this.on("click", this.onScrollToTop), this.on(window, "scroll", flight.utils.debounce(this.onUpdateDisplay, this.attr.scrollDebounceDuration));
            var e = [this.getSafeEventName("focus"), this.getSafeEventName("blur")].join(" ");
            $j(document.body).on(e, this.attr.hideOnFocusSelectors, $j.proxy(function(e) {
                $j(e.target).is(":visible") && (e.type.indexOf("focusin") >= 0 ? this.onFieldFocus() : this.onFieldBlur())
            }, this))
        }), this.hide = function() {
            this.isVisible() && this.$node.removeClass(this.attr.showClass)
        }, this.isVisible = function() {
            return this.$node.hasClass(this.attr.showClass)
        }, this.scrollToTop = function() {
            $j(document).scrollTop(0)
        }, this.show = function() {
            this.isVisible() || this.$node.addClass(this.attr.showClass)
        }, this.updateDisplay = function() {
            var e = window.scrollY,
                t = $j(document).height() - $j(window).height() - this.attr.buttonVisibilityThresholdBottom;
            this.isFieldFocused || e < this.attr.buttonVisibilityThresholdTop || e > t ? this.hide() : this.show()
        }, this.onFieldBlur = function(e) {
            this.isFieldFocused = !1, this.updateDisplay()
        }, this.onFieldFocus = function(e) {
            this.isFieldFocused = !0, this.hide()
        }, this.onScrollToTop = function(e) {
            e.preventDefault(), this.scrollToTop()
        }, this.onUpdateDisplay = function(e) {
            this.updateDisplay()
        }
    }, MixinEventUtils);
$gr.shared.bookCarousel = flight.component(function() {
    var e = ($j(document), "bookCarouselComponent");
    this.maxLeft = 0, this.minLeft = 0, this.defaultAttrs({
        channel: e,
        componentName: e,
        bookCover: ".cover",
        carouselRow: ".carouselRow",
        carouselNav: ".navButton",
        navBackgroundClass: "highlightedNavButton",
        nextButtonClass: "navButtonNext",
        prevButtonClass: "navButtonPrev",
        rightArrowPadding: 30,
        slideDelay: 500
    }), this.after("initialize", function() {
        this.containerWidth = this.$node.width(), this.setBoundsOfCarousel(), this.setNavVisibility(), this.toggleBackground(!1), this.on("click", {
            carouselNav: this.moveCarousel
        }), this.on("mouseenter", this.highlightNavigation), this.on("mouseleave", this.removeHighlightInNavigation)
    }), this.setBoundsOfCarousel = function() {
        var e = 0;
        this.select("carouselRow").find(this.attr.bookCover).each(function() {
            e += $j(this).outerWidth()
        }), this.minLeft = Math.min(this.containerWidth - e - this.attr.rightArrowPadding, this.maxLeft)
    }, this.moveCarousel = function(e) {
        var t, i = $j(e.target).parent();
        i.hasClass(this.attr.nextButtonClass) ? t = "next" : i.hasClass(this.attr.prevButtonClass) && (t = "prev"), this.singleSlide(t)
    }, this.highlightNavigation = function() {
        this.toggleBackground(!0), this.setNavVisibility()
    }, this.removeHighlightInNavigation = function() {
        this.toggleBackground(!1), this.setNavVisibility()
    }, this.singleSlide = function(e) {
        var t;
        this.select("carouselRow").stop(), "prev" === e ? t = this.select("carouselRow").position().left + 4 * this.containerWidth / 5 : "next" === e && (t = this.select("carouselRow").position().left - 4 * this.containerWidth / 5), t = Math.min(t, this.maxLeft), t = Math.max(t, this.minLeft), this.setNavVisibility(t), this.select("carouselRow").animate({
            left: t
        }, this.attr.slideDelay)
    }, this.setNavVisibility = function(e) {
        "undefined" == typeof e && this.select("carouselRow").length && (e = this.select("carouselRow").position().left), e > this.minLeft ? this.$node.find("." + this.attr.nextButtonClass).show() : this.$node.find("." + this.attr.nextButtonClass).hide(), e < this.maxLeft ? this.$node.find("." + this.attr.prevButtonClass).show() : this.$node.find("." + this.attr.prevButtonClass).hide()
    }, this.toggleBackground = function(e) {
        this.select("carouselNav").toggleClass(this.attr.navBackgroundClass, e)
    }
});
var BookProgressUpdate = flight.component(function() {
        var e = "bookProgressUpdate";
        this.defaultAttrs({
            bookSelectorPrefix: "#book_list_item_",
            cancelSelector: ".actionFormControls .cancel",
            catalystButtonSelector: ".startUpdate",
            distractionSelector: ".reviewList",
            fieldSelector: ".field",
            fieldToggleSelector: ".swap",
            finishedSelector: ".finished",
            formSelector: ".actionForm",
            progressSelector: ".bookProgress",
            fieldToggleClass: "showPages",
            meterClass: "meter",
            showFormClass: "active",
            channel: e,
            componentName: e,
            enableCollapseDistractions: !0
        }), this.after("initialize", function() {
            this.on("click", {
                cancelSelector: this.onHideForm,
                fieldToggleSelector: this.onFieldsToggle
            });
            var e = this.$node.data("bookid");
            this.$bookNode = $j(this.attr.bookSelectorPrefix + e).first(), this.on(this.$bookNode.find(this.attr.catalystButtonSelector), "click", this.showForm), this.after("hideForm", function() {
                this.select("formSelector").get(0).reset()
            });
            var t = this.select("fieldSelector");
            t.on("focus", function() {
                $j(this).val("")
            }), t.each(function() {
                var e = $j(this),
                    t = e.val(),
                    i = new RegExp(e.attr("pattern"));
                i && i.test(t) && !/^\s*$/.test(t) && e.data("default-value", t)
            }), this.on("submit", {
                formSelector: function(e) {
                    this.validateFields() || (e.preventDefault(), e.stopPropagation(), this.showMessage("Your progress was not updated. Please enter a valid number.", !0))
                }
            }), this.on("ajax:success", {
                formSelector: this.onFormSubmitSuccess
            }), this.on("ajax:error", {
                formSelector: this.onFormSubmitError
            })
        }), this.hideForm = function() {
            this.$node.removeClass(this.attr.showFormClass), this.toggleDistractionlessMode(!1)
        }, this.showForm = function() {
            this.$node.addClass(this.attr.showFormClass), this.toggleDistractionlessMode(!0)
        }, this.showMessage = function(e, t) {
            if ("string" == typeof e && !/^\s*$/.test(e)) {
                var i = $j("#flashMessages");
                t ? alert(e) : i.trigger("addFlashMessage", [e])
            }
        }, this.toggleFields = function() {
            this.select("formSelector").toggleClass(this.attr.fieldToggleClass), this.select("fieldSelector").each(function() {
                this.disabled = !this.disabled
            })
        }, this.toggleDistractionlessMode = function(e) {
            var t = $j(this.attr.distractionSelector);
            this.attr.enableCollapseDistractions === !0 ? t[e ? "hide" : "show"]() : t.css("visibility", e ? "hidden" : "")
        }, this.onFieldsToggle = function(e) {
            e.preventDefault(), this.toggleFields();
            var t = $j(e.target),
                i = t.text(),
                o = t.data("swap-text");
            t.text(o).data("swap-text", i)
        }, this.onHideForm = function(e) {
            e.preventDefault(), this.hideForm()
        }, this.onFormSubmitError = function(e, t) {
            this.defer(function() {
                this.authRedirect(t, $j.proxy(function() {
                    var e = "Unknown XHR failure when trying to update book progress.";
                    t.status && (e += " , status code " + t.status), this.broadcastError(e)
                }, this))
            }, 500)
        }, this.onFormSubmitSuccess = function(e, t) {
            if ($j.isPlainObject(t)) {
                if (t.html_meter && !/^\s*$/.test(t.html_meter)) {
                    var i = this.$bookNode.find("." + this.attr.meterClass);
                    if (i.length) i.html(t.html_meter);
                    else {
                        var o = this.$bookNode.find(this.attr.progressSelector);
                        $j(t.html_meter).wrap("<div/>").addClass(this.attr.meterClass).prependTo(o)
                    }
                }
                this.isBookFinished() && this.$bookNode.hide(), t.message && this.showMessage(t.message), t.redirect && window.location.replace(t.redirect), this.hideForm()
            } else this.broadcastError("Malformed JSON response when trying to update book progress.")
        }, this.isBookFinished = function() {
            return this.select("finishedSelector").prop("checked")
        }, this.getVisibleField = function() {
            return this.select("fieldSelector").filter(":visible").first()
        }, this.validateFields = function() {
            if (this.isBookFinished()) return !0;
            var e = this.getVisibleField();
            if (e.length) {
                var t = /^\d+$/,
                    i = e.data("default-value"),
                    o = e.val();
                return t.test(i) ? t.test(o) && o !== i : t.test(o)
            }
            return !1
        }
    }, MixinEventUtils, MixinAuthRedirect),
    BrowseButton = flight.component(function() {
        this.after("initialize", function() {
            this.on(document, "topBrowseMenuOpened", this.openMenu), this.on(document, "topBrowseMenuClosed", this.closeMenu), this.on($gr.touch, function(e) {
                e.preventDefault(), "block" === $j("#browseMenu").css("display") ? this.trigger(document, "topBrowseMenuClosed") : this.trigger(document, "topBrowseMenuOpened")
            })
        }), this.openMenu = function() {
            this.$node.addClass("selectedLinkBarItem")
        }, this.closeMenu = function() {
            this.$node.removeClass("selectedLinkBarItem")
        }
    }),
    BrowseMenu = flight.component(function() {
        this.after("initialize", function() {
            this.on(document, "topBrowseMenuOpened", this.openMenu), this.on(document, "topBrowseMenuClosed", this.closeMenu)
        }), this.openMenu = function() {
            this.$node.css("display", "block")
        }, this.closeMenu = function() {
            this.$node.css("display", "none")
        }
    }),
    ReCaptcha = flight.component(function() {
        this.defaultAttrs({
            site_key: null,
            theme: "light"
        });
        var e = function(e) {
            var t = document.createElement("script");
            t.type = "text/javascript", t.src = e;
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(t, i)
        };
        this.after("initialize", function() {
            if (this.on("reset", function() {
                    this.reset()
                }), "undefined" == typeof grecaptcha) {
                if ("undefined" == typeof _recaptchaLoadedCallback) {
                    var t = this;
                    window._recaptchaLoadedCallback = function() {
                        t.render()
                    }
                }
                return e("https://www.google.com/recaptcha/api.js?render=explicit&onload=_recaptchaLoadedCallback"), !0
            }
            this.render()
        }), this.render = function() {
            "undefined" != typeof grecaptcha && (this.widget_id = grecaptcha.render(this.node, {
                sitekey: this.attr.site_key,
                theme: this.attr.theme
            }))
        }, this.reset = function() {
            "undefined" != typeof grecaptcha && grecaptcha.reset(this.widget_id);
            try {
                div = jQuery("tr.gc-reset").closest("table.pls-container").parent("div"), ins = div.next("ins"), div.remove(), ins.remove()
            } catch (e) {}
            this.$node.empty()
        }
    }),
    Carousel = flight.component(function() {
        var e, t, i;
        this.defaultAttrs({
            itemSelector: ".carouselItem"
        }), this.after("initialize", function() {
            var e = Hammer(this.$node, {
                drag_block_horizontal: !0
            });
            e.on("dragstart", $j.proxy(this.initializeCarousel, this)), e.on("drag", $j.proxy(this.moveCarousel, this)), this.listen("saveRatingSuccess.ratingStars", this.addBooks)
        }), this.initializeCarousel = function() {
            var o = this.$node.parent(),
                n = o.innerWidth(),
                s = o.parent().innerWidth(),
                a = this.select("itemSelector");
            t = 0, $j.each(a, function(e, i) {
                t += $j(i).outerWidth(!0) + 4
            }), s > n && (n -= s - n), n > t && this.off("drag"), e = parseInt(this.$node.css("left"), 10), i = -Math.abs(t - n)
        }, this.moveCarousel = function(t) {
            var o = e + t.gesture.deltaX;
            0 > o ? i > o ? this.$node.css("left", i) : this.$node.css("left", o) : this.$node.css("left", "0")
        }, this.addBooks = function(e, t) {
            void 0 !== t.related_work_row && void 0 !== t.book_id && ($j(".carouselItem[rel='" + t.book_id + "']").after(t.related_work_row), $j(document).trigger("rateBooksCarouselUpdated"))
        }
    }, MixinEventUtils);
$gr.shared.challenge = flight.component(function() {
    var e = "challengeComponent";
    this.defaultAttrs({
        channel: e,
        componentName: e
    }), this.after("initialize", function() {
        _.each($j("li.step"), function(e) {
            e.on("click", t)
        })
    });
    var t = function() {
        this.className += " doneStep"
    }
}), $gr.challengeBadgesComponent = flight.component(function() {
    var e, t, i = "View More \u25be",
        o = "View Less \u25b4",
        n = !1;
    this.defaultAttrs({
        expandToggleClass: "#showMoreBadges",
        collapsibleBadgesClass: ".moreChallengeBadges"
    }), this.after("initialize", function() {
        e = $j(this.attr.expandToggleClass), t = $j(this.attr.collapsibleBadgesClass), e.click(this.toggleBadgeDisplay), e.text() === o && (n = !0)
    }), this.toggleBadgeDisplay = function() {
        var s = e.text().trim();
        s === i ? (t.show(), e.text(o), n = !0) : (t.hide(), e.text(i), n = !1)
    }
}, MixinEventUtils), $gr.challengeBooksComponent = flight.component(function() {
    var e, t, i, o = "View More \u25be",
        n = "View Less \u25b4",
        s = !1,
        a = "";
    this.defaultAttrs({
        sortClass: ".sortBy",
        expandToggleClass: "#showMoreReviews",
        collapsibleBooksClass: ".moreChallengeCovers"
    }), this.after("initialize", function() {
        e = $j(this.attr.sortClass), t = $j(this.attr.expandToggleClass), i = $j(this.attr.collapsibleBooksClass), a = this.$node.data("mobile"), e.change(this.toggleSort), t.click(this.toggleReviewDisplay), t.text() === n && (s = !0), $j(".loadMoreButton").on("click", {
            env: this
        }, this.loadMoreCovers)
    }), this.toggleSort = function() {
        var t = e.val(),
            i = "?sort_by=" + t;
        s && (i += "&expand=true"), window.location.href = window.location.href.replace(/[\?#].*|$/, i)
    }, this.toggleReviewDisplay = function() {
        var e = t.text().trim();
        e === o ? (i.show(), t.text(n), s = !0) : (i.hide(), t.text(o), s = !1)
    }, this.loadMoreCovers = function() {
        button_data = $j(".loadMoreButton").data(), $j.get("/user_challenges/covers/show/" + button_data.id + "/" + button_data.page, function(e) {
            if (e.last_page && $j(".loadMoreButton").hide(), a) {
                $j(".bookList").append(e.html);
                var t = $j("ul.bookList > ul.bookList");
                t.children("li").appendTo($j("ul.bookList:first")), t.remove()
            } else $j(".yearChallengeCovers").append(e.html)
        }), $j(".loadMoreButton").data("page", button_data.page + 1)
    }
}, MixinEventUtils), $gr.shared.checkBoxForm = flight.component(function() {
    this.defaultAttrs({
        continueMessageSelector: ".js-continueMessage",
        checkedClass: "",
        checkBoxContainerSelector: "",
        saveActionSelector: ".js-saveAction",
        mobile: !1
    }), this.after("initialize", function() {
        this.uiSetupForm(), this.on("click", {
            checkBoxContainerSelector: this.uiUpdateCheckbox
        }), this.on("click", {
            saveActionSelector: this.submitFormAndHide
        })
    }), this.submitFormAndHide = function(e) {
        e.preventDefault(), e.stopPropagation(), this.$node.submit(), this.trigger("hideModal")
    }, this.uiSetupForm = function() {
        var e = this.$node.find(":checkbox"),
            t = this;
        e.each(function(e) {
            var i = $j(this),
                o = i.closest(t.attr.checkBoxContainerSelector);
            i.prop("checked") ? o.addClass(t.attr.checkedClass) : o.removeClass(t.attr.checkedClass)
        }), this.uiUpdateFormSaveButton()
    }, this.uiUpdateCheckbox = function(e) {
        var t = $j(e.target).closest(this.attr.checkBoxContainerSelector),
            i = t.find(":checkbox");
        return $j(e.target) !== i && (i.prop("checked") ? t.addClass(this.attr.checkedClass) : t.removeClass(this.attr.checkedClass)), this.uiUpdateFormSaveButton(), !1
    }, this.uiUpdateFormSaveButton = function() {
        if (this.$node.data("forceSelection")) {
            var e = this.$node.find("input:checked").length > 0;
            this.attr.mobile ? e ? (this.select("saveActionSelector").addClass("enabled"), this.select("saveActionSelector").removeAttr("disabled")) : (this.select("saveActionSelector").removeClass("enabled"), this.select("saveActionSelector").attr("disabled", "disabled")) : (this.select("continueMessageSelector").toggle(!e), this.select("saveActionSelector").toggle(e))
        } else this.select("continueMessageSelector").hide(), this.select("saveActionSelector").show()
    }
}, MixinEventUtils, withFormSubmission);
var CommentComposer = flight.component(function() {
    var e = "commentComposer";
    this.defaultAttrs({
        channel: e,
        componentName: e,
        commentCountContainerSelector: ".commentsCount",
        formSelector: "form",
        submitButtonSelector: ".jsCommentComposerSubmitButton",
        textAreaContainerSelector: ".expandingArea",
        textAreaMirrorSelector: ".expandingArea span",
        textAreaSelector: ".jsCommentComposerTextArea",
        commentCountHideClass: "hide"
    }), this.after("initialize", function() {
        return this.$commentList = $j(this.$node.data("comment-list")).first(), this.$commentList.length < 1 ? this.broadcastError("No comment list selector found.") : (this.commentCountSelector = this.$node.data("comment-counter"), this.select("textAreaContainerSelector").addClass("active"), this.toggleSubmitButton(), this.select("textAreaMirrorSelector").text(this.select("textAreaSelector").val()), this.on("input", this.resizeTextArea), this.on("input", this.toggleSubmitButton), this.$form = this.select("formSelector").first(), this.$form.on("ajax:success", $j.proxy(this.onFormSubmitSuccess, this)), void this.$form.on("ajax:error", $j.proxy(this.onFormSubmitError, this)))
    }), this.resizeTextArea = function(e) {
        this.select("textAreaMirrorSelector").text(this.select("textAreaSelector").val())
    }, this.toggleSubmitButton = function(e) {
        this.select("textAreaSelector").val().length > 0 ? (this.select("submitButtonSelector").show(), this.select("textAreaContainerSelector").addClass("jsCommentComposerTextAreaFilled")) : (this.select("submitButtonSelector").hide(), this.select("textAreaContainerSelector").removeClass("jsCommentComposerTextAreaFilled"))
    }, this.onFormSubmitError = function(e, t) {
        this.defer(function() {
            this.authRedirect(t, $j.proxy(function() {
                var e = "Unknown XHR failure when trying to add new comment";
                t.status && (e += " , status code " + t.status), this.broadcastError(e)
            }, this))
        }, 500)
    }, this.onFormSubmitSuccess = function(e, t) {
        this.insertComment(t.html), this.updateCommentCount(t.count), this.clearCommentField()
    }, this.clearCommentField = function() {
        this.select("textAreaSelector").val("")
    }, this.insertComment = function(e) {
        this.$commentList.is(":visible") || this.$commentList.show().removeClass("empty"), this.$commentList.append(e)
    }, this.updateCommentCount = function(e) {
        $j(this.commentCountSelector).html(e);
        var t = $j(this.commentCountSelector).closest(this.attr.commentCountContainerSelector);
        e > 0 && t.hasClass(this.attr.commentCountHideClass) && t.removeClass(this.attr.commentCountHideClass)
    }
}, MixinEventUtils, MixinAuthRedirect);
$gr.shared.confirmModal = flight.component(function() {
    var e = "confirmModal";
    this.defaultAttrs({
        channel: e,
        componentName: e,
        cancelActionSelector: ".js-cancelAction",
        closeModalSelector: ".js-closeModalIcon",
        confirmActionSelector: ".js-confirmAction",
        confirmHeadingSeletor: ".js-confirmationHeading",
        confirmMessageSelector: ".js-confirmationMessage",
        confirmActionText: "Yes",
        confirmModalId: "confirmationModal",
        modalHeading: "Are you sure?",
        modalMessage: "",
        modalHeight: 150,
        modalWidth: 500
    }), this.after("initialize", function() {
        this.$modal = this.uiBuildModal(), this.on("click, ajax:before", this.onClick), this.on(document, "ui.modal.hideComplete", this.teardownModal), this.listen("hideConfirmModal", this.uiHideModal)
    }), this.onConfirmSuccess = function() {
        this.uiHideModal(), "undefined" != typeof this.redirectPath ? window.location.href = this.redirectPath : window.location.reload(!0)
    }, this.onConfirmError = function() {
        this.uiHideModal()
    }, this.onClick = function() {
        return this.uiShowModal(), !1
    }, this.uiSetupModal = function() {
        var e = this.$modal.find(this.attr.confirmActionSelector),
            t = this.$modal.find(this.attr.cancelActionSelector),
            i = this.$node.attr("href"),
            o = this.$node.data(),
            n = o.confirmationHeading,
            s = o.confirmationMessage,
            a = o.method,
            r = o.remote;
        this.redirectPath = o.redirectPath, "undefined" == typeof s && (s = this.attr.modalMessage), "undefined" == typeof n && (n = this.attr.modalHeading), this.$modal.find(this.attr.confirmMessageSelector).html(s), this.$modal.find(this.attr.confirmHeadingSeletor).text(n), e.attr("data-method", a), e.attr("data-remote", r), e.attr("href", i), e.on("ajax:success", $j.proxy(function(e, t, i, o) {
            this.onConfirmSuccess()
        }, this)), e.on("ajax:error", $j.proxy(function(e, t, i, o) {
            this.onConfirmError()
        }, this)), t.click(this.uiHideModal)
    }, this.uiShowModal = function() {
        this.uiSetupModal(), this.uiAttachModal(), Lightbox.showBoxByID(this.attr.confirmModalId, this.attr.modalWidth, this.attr.modalHeight)
    }, this.uiHideModal = function() {
        Lightbox.hideBox()
    }, this.uiAttachModal = function() {
        var e = $j("#" + this.attr.confirmModalId);
        e.length ? e.replaceWith(this.$modal) : this.$modal.appendTo("body")
    }, this.uiBuildModal = function() {
        var e, t, i;
        return t = {
            confirmModalId: this.attr.confirmModalId,
            confirmActionText: this.attr.confirmActionText
        }, e = '<div id="{{confirmModalId}}" style="display: none">', e += '<h2 class="confirmationHeading js-confirmationHeading"></h2>', e += '<div class="confirmationMessage js-confirmationMessage"></div>', e += '<div class="confirmationActions js-confirmationActions">', e += '<a class="button confirmAction js-confirmAction">{{confirmActionText}}</a>', e += '<div class="cancelWrapper"><a class="cancelAction js-cancelAction" href="#">Cancel</a></div>', e += "</div>", e += "</div>", i = _.template(e), $j(i(t))
    }, this.teardownModal = function() {
        $j("#" + this.attr.confirmModalId).remove()
    }
}, MixinEventUtils), $gr.shared.confirmNilReadAt = flight.component(MixinEventUtils, function() {
    this.works_queue = [], this.html_queue = [], this.current_work_id = null, this.$work_display = null, this.$module_display = null, this.$messages_display = null, this.disable_nil_read_at_buttons = !1, this.reload_cache_val = 2, this.broadcast_type = "readingChallengeReadInYear";
    var e = "confirmNilReadAt";
    this.defaultAttrs({
        channel: e,
        componentName: e
    }), this.after("initialize", function() {
        this.$work_display = $j("#" + this.$node.data("workdisplayid")), this.$module_display = $j("#" + this.$node.data("moduledisplayid")), this.$messages_display = $j("#" + this.$node.data("messagecontainerid")), this.updateNilReadAtWorks(), $j("#" + this.$node.data("readinyearbuttonid")).on("click", {
            env: this
        }, this.readInYearAction), $j("#" + this.$node.data("confirmnilreadatbuttonid")).on("click", {
            env: this
        }, this.confirmNilReadAtAction), $j("#" + this.$node.data("closereadinyearmoduleid")).on("click", {
            env: this
        }, function(e) {
            e.data.env.$module_display.css("display", "none"), e.preventDefault()
        })
    }), this.readInYearAction = function(e) {
        var t = e.data.env;
        t.disable_nil_read_at_buttons || (t.$module_display.css("visibility", "hidden"), t.disable_nil_read_at_buttons = !0, $j.ajax({
            url: "/challenges/mark_as_read_this_year",
            data: {
                work_id: t.current_work_id
            },
            method: "post"
        }).success(function(e) {
            $j.data(document, "newProgressText", {
                text: e.new_progress_text
            }), t.broadcast(t.broadcast_type, ""), t.afterDecision()
        }).fail(function(e) {
            t.onFailure()
        }))
    }, this.confirmNilReadAtAction = function(e) {
        var t = e.data.env;
        t.disable_nil_read_at_buttons || (t.$module_display.css("visibility", "hidden"), t.disable_nil_read_at_buttons = !0, $j.ajax({
            url: "/challenges/confirm_nil_read_at",
            data: {
                work_id: t.current_work_id
            },
            method: "post"
        }).success(function() {
            t.afterDecision()
        }).fail(function() {
            t.onFailure()
        }))
    }, this.updateNilReadAtWorks = function() {
        var e = this;
        $j.ajax({
            url: "/challenges/get_new_nil_read_at_books",
            dataType: "json"
        }).success(function(t) {
            if (t.work_ids.length > 0)
                for (var i = 0; i < t.work_ids.length; i++) e.works_queue.include(t.work_ids[i]) || (e.works_queue.push(t.work_ids[i]), e.html_queue.push(t.htmls[i]));
            0 == e.works_queue.length ? e.$module_display.css("display", "none") : e.refreshDisplay()
        }).fail(function() {
            e.onFailure()
        })
    }, this.refreshDisplay = function() {
        this.current_work_id = this.works_queue.shift(), this.$work_display.html(this.html_queue.shift()), this.$module_display.css("display", "inline-block"), this.$module_display.css("visibility", "visible"), this.disable_nil_read_at_buttons = !1
    }, this.afterDecision = function() {
        this.works_queue.length <= this.reload_cache_val ? this.updateNilReadAtWorks() : this.refreshDisplay()
    }, this.onFailure = function() {
        this.$module_display.css("visibility", "visible"), this.$module_display.css("display", "none"), this.$messages_display.html("We're sorry, there was a problem processing your request. Please reload the page and try again."), this.$messages_display.css("display", "inline-block")
    }
}), $gr.shared.dataStoreUserPreferences = flight.component(function() {
    this.after("initialize", function() {
        this.on("ui-user-preference-changed", this.updateUserPreferences)
    }), this.updateUserPreferences = function(e, t) {
        $j.post("/user/update_preferences", {
            user: t.prefData
        })
    }
}), $gr.shared.dataTooltip = flight.component(function() {
    var e = "dataTooltip",
        t = 50,
        i = 100;
    this.defaultAttrs({
        channel: e,
        componentName: e,
        tooltipTriggerSelector: ".js-tooltipTrigger",
        broadcastEventName: "tooltipHtmlRetrieved"
    }), this.after("initialize", function() {
        this.getTooltipContent(this.$node), this.listen("success.loadMore", this.handleLoadMore)
    }), this.handleLoadMore = function(e, t) {
        "undefined" != typeof t.content_html && this.getTooltipContent($j(t.content_html))
    }, this.getTooltipContent = function(e) {
        var o = {},
            n = this,
            s = n.$node.data("batchSize");
        s > 0 && i > s || (s = t), e.find(this.attr.tooltipTriggerSelector).each(function(e, t) {
            var i = {},
                a = $j(t).data("resource-type"),
                r = $j(t).data("resource-id"),
                l = a + "." + r;
            i.type = a, i.id = r, i.extra = $j(t).data("extra"), o[l] = i, Object.keys(o).length >= s && (n.getBatchOfTooltipContent(o), o = {})
        }), n.getBatchOfTooltipContent(o)
    }, this.getBatchOfTooltipContent = function(e) {
        var t = this.$node.data("ref-tag"),
            i = this.$node.data("book-origin");
        $j.ajax({
            url: "/tooltips",
            type: "GET",
            data: {
                resources: e,
                ref_tag: t,
                use_wtr_tooltip: this.$node.data("use-wtr-tooltip"),
                book_origin: i
            },
            context: this,
            success: function(e) {
                this.broadcast(this.attr.broadcastEventName, e)
            }
        })
    }
}, MixinEventUtils), $gr.shared.dfpAd = flight.component(function() {
    var e, t;
    this.impressionCode = {
        success: "0",
        dfpError: "1",
        monolithError: "2",
        empty: "3"
    }, this.defaultAttrs({
        isNativeAd: !1,
        creativeSelector: null,
        attachClickTracking: function(e) {},
        nativeAdAttrs: {
            iframeWrapperSelector: null,
            iframeWrapperParams: [],
            adRootSelector: null,
            nativeAdUrl: null,
            success: function(e) {}
        },
        dfpEvent: null,
        pmetImpressionTrackUrl: null,
        pmetClickTrackUrl: null,
        adDeviceType: null
    }), this.after("initialize", function() {
        if (this.attr.dfpEvent.isEmpty) return void this.trackImpression(this.impressionCode.empty);
        var i = this.$node.find('iframe[id^="google_ads_iframe_"]'),
            o = i.contents().find(this.attr.creativeSelector);
        if (this.attr.isNativeAd) {
            var n = o.data("id"),
                s = o.data("url"),
                a = this.attr.dfpEvent.lineItemId,
                r = {
                    id: n,
                    line_item_id: a,
                    ad_unit: this.adUnit(),
                    ad_device_type: this.attr.adDeviceType
                };
            if (n && s) {
                var l = i.closest(this.attr.nativeAdAttrs.iframeWrapperSelector);
                $j.each(this.attr.nativeAdAttrs.iframeWrapperParams, function(e, t) {
                    r[t] = l.attr(t)
                });
                var h = i.closest(this.attr.nativeAdAttrs.adRootSelector);
                this.populateNativeAd(r, h, s)
            } else this.trackImpression(this.impressionCode.dfpError)
        } else this.trackImpression(this.impressionCode.success), e = o, t = $j.proxy(function(e) {
            this._ajaxTrackingCall(this.attr.pmetClickTrackUrl, {
                click_type: e
            })
        }, this), this.attr.attachClickTracking(this)
    }), this.populateNativeAd = function(i, o, n) {
        $j.ajax({
            url: this.attr.nativeAdAttrs.nativeAdUrl,
            type: "GET",
            data: i,
            context: this,
            success: function(i) {
                i.ok ? (e = o.replaceWithNew(i.content_html), this.trackImpression(this.impressionCode.success), this.attr.nativeAdAttrs.success(this), t = $j.proxy(function(e) {
                    var t = $j.extend(this.dfpTrackingInfo(), {
                        click_type: e
                    });
                    $j("<iframe/>", {
                        src: n + this.attr.pmetClickTrackUrl + encodeURIComponent("?" + $j.param(t)),
                        style: "display:none",
                        height: 0,
                        width: 0,
                        load: function() {
                            $(this).show()
                        }
                    }).appendTo("body")
                }, this), this.attr.attachClickTracking(this)) : this.trackImpression(this.impressionCode.monolithError)
            },
            error: function() {
                this.trackImpression(this.impressionCode.monolithError)
            }
        })
    }, this.adUnit = function() {
        return this.attr.dfpEvent.slot.getName().split("/", 3)[2]
    }, this.dfpTrackingInfo = function() {
        return {
            ad_unit: this.adUnit(),
            line_item_id: this.attr.dfpEvent.lineItemId,
            ad_device_type: this.attr.adDeviceType
        }
    }, this.adRoot = function() {
        return e
    }, this.trackImpression = function(e) {
        this._ajaxTrackingCall(this.attr.pmetImpressionTrackUrl, {
            impression_output: e
        })
    }, this.trackClick = function(e) {
        t(e)
    }, this.trackNotInterestedClick = function() {
        this._ajaxTrackingCall(this.attr.pmetClickTrackUrl, {
            not_interested: !0
        })
    }, this.trackNonDFPClick = function(e) {
        this._ajaxTrackingCall(this.attr.pmetClickTrackUrl, {
            click_type: e
        })
    }, this._ajaxTrackingCall = function(e, t) {
        $j.ajax({
            url: e,
            type: "GET",
            data: $j.extend(this.dfpTrackingInfo(), t)
        })
    }
}), $j.fn.replaceWithNew = function(e) {
    var t = $j(e);
    return this.replaceWith(t), t
}, $gr.shared.dfpAd.imageAdAttrs = function() {
    return {
        isNativeAd: !1,
        creativeSelector: "div#google_image_div",
        attachClickTracking: function(e) {
            e.adRoot().on("click", "a", function() {
                e.trackClick("click")
            })
        }
    }
}, $gr.shared.dfpAd.newsfeedAdAttrs = function() {
    return {
        isNativeAd: !0,
        creativeSelector: "div.dfp_native_update",
        attachClickTracking: function(e) {
            var t = function(t, i, o) {
                e.adRoot().on(t, i, function() {
                    e.trackClick(o)
                })
            };
            t("click", ".star", "rating"), t("click", ".wtrShelfMenu button", "wtr_button"), t("submit", ".wtrButtonContainer form", "wtr_button"), t("change", ".wtrNonExclusiveShelves,input.wtrNonExclusiveShelf", "wtr_button"), t("click", ".newsfeedAdDescription a.trackClick", "body_click"), t("click", ".updateImage a, .updateImage js-tooltipTrigger tooltipTrigger a", "book_image"), t("click", ".newsfeedAdTitle a", "book_title"), t("click", ".authorName a", "author_name"), t("click", ".newsfeedAdCustomCopy a", "social"), t("click", ".newsfeedAdDescription a.showAction", "more"), e.adRoot().on("submit", "div.js-newsfeedNotInterested > form", function() {
                e.trackNotInterestedClick()
            }), e.adRoot().on("click", "div.whyAmISeeingThis a", function() {
                e.trackNonDFPClick("why")
            }), e.adRoot().on("click", "a.menuCaret", function() {
                e.trackNonDFPClick("caret")
            })
        },
        nativeAdAttrs: {
            iframeWrapperSelector: "td",
            iframeWrapperParams: ["offset", "index"],
            adRootSelector: "tr",
            nativeAdUrl: "/dfp/ajax_native_ad/",
            success: function(e) {
                var t = e.adRoot(),
                    i = t.attr("id");
                if (!i || 0 == i.length) {
                    var o = "native_ad_" + Math.floor(1e6 * Math.random());
                    t.attr("id", o)
                }
                var n = "#" + t.attr("id") + " ";
                $gr.shared.attachNewsfeedComponents(n)
            }
        }
    }
}, $gr.shared.dfpAd.mobileNewsfeedAdAttrs = function() {
    return {
        isNativeAd: !0,
        creativeSelector: "div.dfp_native_update",
        attachClickTracking: function(e) {
            var t = function(t, i, o) {
                e.adRoot().on(t, i, function() {
                    e.trackClick(o)
                })
            };
            t("click", "a.feedItemImage", "book_image"), t("click", ".feedItemBookTitle a", "book_title"), t("click", ".feedItemBookAuthor a", "author_name"), t("click", ".feedItemContent .reviewText a.trackClick, .feedItemContent .reviewText .newsfeedAdMobileCustomText a.trackClick", "body_click"), t("click", ".feedItemContent .newsfeedAdMobileCustomText a", "social"), t("click", ".feedItemContent .reviewText a.showAction, .feedItemContent .reviewText .newsfeedAdMobileCustomText a.showAction", "more"), t("click", "a.newsfeedAdImageLink", "image"), t("click", ".updateButtons a", "cta_click"), t("click", ".newsfeedAdMobileFooterActions a", "sponsored"), e.on(document, "shelving.wtrButtonMenu", function(t, i) {
                $j.contains(e.adRoot()[0], document.getElementById(i.buttonId)) && e.trackClick("wtr_button");
            }), e.adRoot().on("submit", "div.js-newsfeedNotInterested > form", function() {
                e.trackNotInterestedClick()
            }), e.adRoot().on("submit", "div.whyAmISeeingThis > form", function() {
                e.trackNonDFPClick("why")
            }), e.adRoot().on("click", "a.menuCaret", function() {
                e.trackNonDFPClick("caret")
            })
        },
        nativeAdAttrs: {
            iframeWrapperSelector: "article",
            iframeWrapperParams: [],
            adRootSelector: "article",
            nativeAdUrl: "/dfp/ajax_native_ad/",
            success: function(e) {
                ExpandableContent.attachTo(".jsShow, .jsHide"), $gr.shared.newsfeedMenu.attachTo(".js-newsfeedStoryDropdown")
            }
        }
    }
}, $gr.shared.dismissModuleUI = flight.component(function() {
    this.defaultAttrs({
        newPrefValue: "1"
    }), this.after("initialize", function() {
        this.on("click", {
            dismissButtonSelector: this.hideModule
        })
    }), this.hideModule = function(e) {
        this.$node.fadeOut(), this.attr.userPrefName && this.triggerUserPrefChanged(), e.preventDefault()
    }, this.triggerUserPrefChanged = function() {
        var e = {};
        e[this.attr.userPrefName] = this.attr.newPrefValue, this.trigger("ui-user-preference-changed", {
            prefData: e
        })
    }
}), $gr.shared.doneRatingDialog = flight.component(function() {
    var e = "doneRatingDialog";
    this.defaultAttrs({
        channel: e,
        componentName: e
    }), this.after("initialize", function() {
        var e = this.$node,
            t = $j(".js-saveAction");
        this.listen("rateBooksDoneRating", function() {
            this.$node.show()
        }), $j(".js-closeDoneRatingDialog").on("click", function() {
            e.hide(), t.text("Done")
        })
    })
}, MixinEventUtils), $gr.shared.editInPlace = flight.component(function() {
    var e = "editInPlace";
    this.defaultAttrs({
        channel: e,
        componentName: e,
        cancelActionSelector: ".cancelAction",
        controllerComponentSelector: ".js-editInPlace",
        editableElementSelector: ".editInPlaceContent",
        inputFieldSelector: ".editInPlaceInputField",
        formContainerSelector: ".editInPlaceContainer",
        submitActionSelector: ".submitAction",
        inputFieldClass: "editInPlaceInputField",
        loadingClass: "loading",
        originalText: null,
        submitButton: !0
    }), this.after("initialize", function() {
        this.formHtml = this.uiBuildForm(), this.$editInPlaceController = this.$node.closest(this.attr.controllerComponentSelector), this.$node.append(this.formHtml), this.on("click", {
            cancelActionSelector: this.onCancel,
            submitActionSelector: this.onSubmit
        }), this.on("saveSuccess", this.onSaveSuccess), this.on("saveError", this.uiHideLoading)
    }), this.onCancel = function() {
        this.uiRemoveForm(), this.teardown(), this.trigger(this.$editInPlaceController, "ui.editInPlace.cancel")
    }, this.onSaveSuccess = function() {
        this.uiHideLoading(), this.uiRemoveForm(), this.teardown()
    }, this.onSubmit = function() {
        var e = this.select("inputFieldSelector").val();
        this.uiShowLoading(), this.trigger(this.$editInPlaceController, "ui.editInPlace.submit", {
            text: e
        })
    }, this.uiBuildForm = function() {
        var e, t, i, o = this.$node.data("field-name");
        return e = {
            inputFieldClass: this.attr.inputFieldClass,
            inputFieldName: o,
            originalText: this.attr.originalText
        }, t = '<div class="editInPlaceContainer">', t += '<textarea class="{{inputFieldClass}}" name="{{inputFieldName}}">', t += "{{originalText}}", t += "</textarea>", t += '<div class="formAction">', t += 1 == this.attr.submitButton ? '<button class="submitAction primaryAction button" type="submit">Submit</button>' : '<a class="submitAction primaryAction">Submit</a>', t += '<span class="cancelAction secondaryAction">Cancel</span>', t += "</div>", t += '<div class="editInPlaceError"></div>', t += "</div>", (i = _.template(t))(e)
    }, this.uiHideLoading = function() {
        this.select("submitActionSelector").removeClass(this.attr.loadingClass)
    }, this.uiRemoveForm = function() {
        this.select("formContainerSelector").hide().remove()
    }, this.uiShowLoading = function() {
        this.select("submitActionSelector").addClass(this.attr.loadingClass)
    }
}), $gr.shared.editInPlaceController = flight.component(function() {
    var e = "editInPlaceController";
    this.defaultAttrs({
        channel: e,
        componentName: e,
        containerSelector: ".js-editInPlaceForm",
        editableElementSelector: ".textBody",
        enableLinkSelector: ".js-editInPlaceEnableAction",
        errorSelector: ".editInPlaceError",
        highlightElementSelector: ".js-editInPlaceHighlight",
        highlightClass: "highlight",
        enableLinkClass: "js-editInPlaceEnableAction",
        elementsToHideSelectors: ""
    }), this.after("initialize", function() {
        this.attr.rawText = this.$node.data("raw-text-for-editing"), this.attr.editableBecauseAdmin = !!this.$node.data("editable-because-admin"), this.isNotAdminEditor() && this.enableHighlight(), this.on("mouseup", {
            highlightElementSelector: this.onMouseUp
        }), this.on("click", {
            enableLinkSelector: this.onActivate
        }), this.on("ui.editInPlace.cancel", this.uiReset), this.on("ui.editInPlace.submit", this.onSubmit)
    }), this.onMouseUp = function(e) {
        this.isNotAdminEditor() && this.onActivate(e)
    }, this.disableHighlight = function() {
        this.off("mouseover mouseout"), this.uiRemoveHighlight()
    }, this.enableHighlight = function() {
        this.on("mouseover", {
            highlightElementSelector: this.uiAddHighlight
        }), this.on("mouseout", {
            highlightElementSelector: this.uiRemoveHighlight
        })
    }, this.onActivate = function(e) {
        var t = $j(e.target);
        e.preventDefault(), (!this.isTextSelected() || t.hasClass(this.attr.enableLinkClass)) && (this.disableHighlight(), this.uiHideElements(), $gr.shared.editInPlace.attachTo(this.select("containerSelector"), {
            originalText: this.$node.data("raw-text-for-editing"),
            submitButton: this.$node.data("submit-button")
        }))
    }, this.onSaveError = function(e, t, i) {
        var o = $j.parseJSON(e.responseText);
        $j.isPlainObject(o) && this.select("errorSelector").html(o.errors.join("<br>")), this.trigger(this.attr.containerSelector, "saveError")
    }, this.onSaveSuccess = function(e, t, i) {
        $j.isPlainObject(e) && this.uiUpdateText(e.answer_text_filtered), this.uiReset(), this.trigger(this.attr.containerSelector, "saveSuccess")
    }, this.onSubmit = function(e, t) {
        this.uiClearErrors(), this.attr.rawText = t.text, $j.isPlainObject(t) && this.save(t)
    }, this.save = function(e) {
        var t = this.$node.data("update-url"),
            i = this.$node.data("field-name"),
            o = {};
        o[i] = e.text, $j.ajax({
            url: t,
            type: "put",
            data: o,
            dataType: "json",
            context: this,
            timeout: 3e3
        }).done(this.onSaveSuccess).fail(this.onSaveError)
    }, this.uiAddHighlight = function() {
        this.select("highlightElementSelector").addClass(this.attr.highlightClass)
    }, this.uiClearErrors = function() {
        this.select("errorSelector").text("")
    }, this.uiHideElements = function() {
        this.select("editableElementSelector").hide(), this.select("elementsToHideSelectors").hide()
    }, this.uiRemoveHighlight = function() {
        this.select("highlightElementSelector").removeClass(this.attr.highlightClass)
    }, this.uiReset = function() {
        this.uiClearErrors(), this.uiShowElements(), this.isNotAdminEditor() && this.enableHighlight()
    }, this.uiShowElements = function() {
        this.select("editableElementSelector").show(), this.select("elementsToHideSelectors").show()
    }, this.uiUpdateText = function(e) {
        this.select("editableElementSelector").html(e)
    }, this.isTextSelected = function() {
        var e = "";
        return window.getSelection ? e = window.getSelection().toString() : document.selection && "Control" != document.selection.type && (e = document.selection.createRange().text), "" !== e
    }, this.isNotAdminEditor = function() {
        return !this.attr.editableBecauseAdmin
    }
}), $gr.communityQA.editQAMessageForm = flight.component(function() {
    var e = "editQAMessageForm";
    this.defaultAttrs({
        channel: e
    }), this.after("initialize", function() {
        this.on("ajax:success", this.uiUpdateFormField)
    }), this.uiUpdateFormField = function(e, t) {
        t.message && (this.uiResetForm(), this.select("inputFieldSelector").attr("placeholder", t.message))
    }
}, MixinEventUtils, withExpandableTextField, withNotification, withFormAjax), $gr.shared.editorialStoryForm = flight.component(function() {
    this.defaultAttrs({
        storyTypeMenuSelector: ".js-storyTypeMenu",
        featuredInputSelector: ".js-featuredBookInput",
        resourceInputSelector: ".js-resourceIdInput"
    }), this.after("initialize", function() {
        this.uiUpdateFormFields(), this.on("change", {
            storyTypeMenuSelector: this.uiUpdateFormFields
        })
    }), this.uiUpdateFormFields = function() {
        var e = this.select("storyTypeMenuSelector").val();
        if ("best_books_of_the_month" === e ? this.select("featuredInputSelector").show() : this.select("featuredInputSelector").hide(), "" === e) this.select("resourceInputSelector").hide();
        else {
            this.select("resourceInputSelector").show();
            var t = this.getResourceType(e) + " ID: ";
            this.select("resourceInputSelector").find("label").text(t)
        }
    }, this.getResourceType = function(e) {
        switch (e) {
            case "author_interview":
                return "Interview";
            case "good_minds_suggest":
                return "Interview";
            case "goodreads_blog":
                return "Blog";
            case "best_books_of_the_month":
                return "FeaturedList";
            default:
                return ""
        }
    }
});
var ExpandableContent = flight.component(function() {
    this.defaultAttrs({
        showSelector: ".jsShow",
        hideSelector: ".jsHide",
        containerSelector: ".expandableContainer"
    }), this.after("initialize", function() {
        this.on($gr.touch, {
            showSelector: this.uiShowHideToggle,
            hideSelector: this.uiShowHideToggle
        })
    }), this.uiShowHideToggle = function(e) {
        var t = $j(e.target),
            i = t.parent(),
            o = t.closest(this.attr.containerSelector);
        e.preventDefault(), i.hide(), i.hasClass("fullContent") ? o.find(".truncatedContent").show() : o.find(".fullContent").show()
    }
});
$gr.shared.experimentConversion = flight.component(function() {
    var e = "experimentConversion";
    this.defaultAttrs({
        channel: e,
        componentName: e,
        clickSelector: ".js-trackConversionClick",
        experimentName: null,
        trackOverallClicks: !1
    }), this.after("initialize", function() {
        var e = this.attr.experimentName,
            i = this;
        $j(this.attr.clickSelector).on("click", function() {
            t($j(event.target).data("stepName"), e), i.attr.trackOverallClicks && t(i.$node.data("stepName"), e)
        })
    });
    var t = function(e, t) {
        null != t && void 0 !== e && $j.post("/track_conversion_action", {
            event: e,
            options: {
                experiments: t
            }
        })
    }
}), $gr.communityQA.facebookTimelinePoster = flight.component(function() {
    var e = "facebookTimelinePosterComponent";
    this.defaultAttrs({
        channel: e,
        componentName: e
    }), this.after("initialize", function() {
        this.on("click", this.shareToFacebook)
    }), this.shareToFacebook = function() {
        var e = this.$node.data("fb-options");
        $grfb.feedDialog(e)
    }
}), $gr.shared.favoriteAuthor = flight.component(function() {
    var e = "favoriteAuthorComponent",
        t = "post",
        i = "delete",
        o = "Add to my favorite authors",
        n = " is now on your <b>Favorite Authors</b> list",
        s = "Remove from my favorite authors",
        a = " has been removed from your <b>Favorite Authors</b> list",
        r = "#notificationBanner",
        l = "Sorry, there was an unknown error adding author to favorites. Please reload the page and try again.",
        h = ".js-addToFavoriteAuthors",
        c = "h1.authorName > span",
        d = "author-id",
        u = "favorite-author-id",
        f = "favorite_author",
        p = "/favorite_authors",
        m = "/favorite_authors/",
        g = "success",
        v = "error";
    this.defaultAttrs({
        channel: e,
        componentName: e
    }), this.after("initialize", function() {
        this.authorName = $j(c).text(), this.addRemoveLink = this.$node.find(h), this.notification = $j(r), this.authorId = this.addRemoveLink.data(d), this.favoriteAuthorId = this.addRemoveLink.data(u), null === this.favoriteAuthorId || "" === this.favoriteAuthorId ? this.addRemoveLink.text(o) : this.addRemoveLink.text(s), this.addRemoveLink.click($j.proxy(this.updateFavoriteAuthor, this))
    }), this.updateFavoriteAuthor = function() {
        this.disableState(), this.updateUrl();
        var e = {
            format: "json"
        };
        this.methodType === t && (e[f] = {
            author_id: this.authorId
        }), $j.ajax({
            url: this.url,
            type: this.methodType,
            data: e,
            context: this,
            success: this.onSuccess,
            error: this.onError,
            complete: this.onComplete
        })
    }, this.onSuccess = function(e, t, o) {
        var s = e[f];
        if (t === g) {
            var r = this.authorName;
            r += this.methodType === i ? a : n, this.toggleState(s), this.notification.trigger("showNotification", {
                type: "info",
                message: r
            })
        } else t === v && this.showErrorMessage(l)
    }, this.onError = function(e, t, i) {
        this.defer(function() {
            this.authRedirect(e, $j.proxy(function() {
                var e = "Unknown XHR failure when trying to add author to favorites.";
                t && (e += " (status code " + t + ")"), this.broadcastError(e), this.showErrorMessage(l)
            }, this))
        }, 500)
    }, this.onComplete = function(e, t) {
        this.enableState()
    }, this.toggleState = function(e) {
        this.methodType === i ? (this.addRemoveLink.data(u, ""), this.addRemoveLink.text(o)) : this.methodType === t ? (this.addRemoveLink.data(u, e), this.addRemoveLink.text(s)) : this.showErrorMessage("Unsupported HTTP method: " + this.methodType)
    }, this.showErrorMessage = function(e) {
        this.notification.trigger("showNotification", {
            type: "error",
            message: e
        }), this.broadcastError(e)
    }, this.disableState = function() {
        this.addRemoveLink.attr("disabled", "disabled")
    }, this.enableState = function() {
        this.addRemoveLink.removeAttr("disabled")
    }, this.updateUrl = function() {
        this.favoriteAuthorId = this.addRemoveLink.data(u), null === this.favoriteAuthorId || "" === this.favoriteAuthorId ? (this.methodType = t, this.url = p) : (this.methodType = i, this.url = m, this.url += this.favoriteAuthorId)
    }
}, MixinEventUtils, MixinAuthRedirect, dropdownMenu), $gr.shared.favoriteGenre = flight.component(function() {
    var e = "FavoriteGenre";
    this.defaultAttrs({
        componentName: e,
        activeClass: "gr-button--togglable--enabled",
        inactiveClass: "gr-button--togglable--disabled",
        activeStateMethod: "post",
        inactiveStateMethod: "delete",
        dataAttrUrlActivate: "async-url-activate-url",
        dataAttrUrlInactivate: "async-url-inactivate-url"
    }), this.after("initialize", function() {
        var e = this.$node.data("active-button-text"),
            t = this.$node.data("active-button-hover-text"),
            i = this.$node.data("inactive-button-text");
        e && (this.attr.activeStateText = e), t && (this.attr.activeButtonHoverText = t), i && (this.attr.inactiveStateText = i), this.on("ajax:success", this.onFavoriteSuccess), this.on("ajax:error", this.onFavoriteError), this.on("mouseover", this.handleHover), this.on("mouseleave", this.handleMouseLeave)
    }), this.onFavoriteSuccess = function(e, t, i) {
        $j.isPlainObject(t) && ("success" === t.status ? this.toggleState() : "error" === t.status && this.showErrorMessage(t.message))
    }, this.onFavoriteError = function(e, t, i) {
        var o = "Sorry, there was an unknown error favoriting this genre. Please reload the page and try again.";
        this.showErrorMessage(o)
    }, this.toggleState = function() {
        this.$node.hasClass(this.attr.activeClass) ? this.inactiveState() : this.activeState()
    }, this.activeState = function() {
        this.$node.addClass(this.attr.activeClass), this.$node.removeClass(this.attr.inactiveClass), this.$node.data("method", this.attr.inactiveStateMethod), this.$node.text(this.attr.activeStateText), this.updateURL()
    }, this.inactiveState = function() {
        this.$node.addClass(this.attr.inactiveClass), this.$node.removeClass(this.attr.activeClass), this.$node.data("method", this.attr.activeStateMethod), this.$node.text(this.attr.inactiveStateText), this.updateURL()
    }, this.showErrorMessage = function(e) {
        $j("#flashMessages").trigger("addFlashMessage", [e, "error"]), this.broadcastError(e)
    }, this.handleHover = function(e) {
        this.attr.activeButtonHoverText && this.$node.hasClass(this.attr.activeClass) && this.$node.text(this.attr.activeButtonHoverText)
    }, this.handleMouseLeave = function(e) {
        this.$node.hasClass(this.attr.activeClass) ? this.activeState() : this.inactiveState()
    }, this.updateURL = function() {
        var e = "",
            t = this.$node.data("method");
        t === this.attr.activeStateMethod ? e = this.$node.data(this.attr.dataAttrUrlActivate) : t === this.attr.inactiveStateMethod && (e = this.$node.data(this.attr.dataAttrUrlInactivate)), this.$node.attr("href", e)
    }
}, MixinEventUtils);
var FlashMessages = flight.component(function() {
        var e = "flashMessages",
            t = "gr-flashMessage",
            i = "gr-flashMessage--success",
            o = "gr-flashMessage--info",
            n = "gr-flashMessage--error";
        this.defaultAttrs({
            channel: e,
            componentName: e,
            hideClass: "hide",
            errorClass: "error",
            noticeClass: "notice",
            successClass: "success",
            containerIdSelector: "#flashMessages",
            flashMessageSelector: ".gr-flashMessage"
        }), this.after("initialize", function() {
            this.select("flashMessageSelector");
            this.on("addFlashMessage", this.add), this.on("addFlashError", function(e, t) {
                this.add(e, t, this.attr.errorClass)
            }), this.on("clearFlashMessage", this.onClearFlashMessage)
        }), this.setFlashMessageClasses = function(e, s) {
            switch (e.addClass(t), s) {
                case this.attr.successClass:
                    e.addClass(i);
                    break;
                case this.attr.errorClass:
                    e.addClass(n);
                    break;
                default:
                    e.addClass(o)
            }
        }, this.addCloseButton = function(e) {
            var t = $j("<button>", {
                    "class": "gr-iconButton gr-flashMessage__dismissButton",
                    click: $j.proxy(this.remove, this, e)
                }),
                i = $j("<img>", {
                    alt: "Dismiss",
                    src: window.GrImageRegistry.closeIcon
                });
            i.appendTo(t), t.appendTo(e)
        }, this.add = function(e, t, i) {
            this.onClearFlashMessage();
            var o = $j("<div/>");
            this.setFlashMessageClasses(o, i), this.addCloseButton(o), o.append(t).appendTo(this.attr.containerIdSelector)
        }, this.onClearFlashMessage = function(e) {
            var t = this.getFirstMessage();
            this.remove(t)
        }, this.getFirstMessage = function() {
            return this.select("flashMessageSelector").first()
        }, this.remove = function(e) {
            e.remove()
        }
    }),
    Follow = flight.component(function() {
        var e = "follow";
        this.defaultAttrs({
            channel: e,
            componentName: e,
            activeClass: "btnActivated",
            inactiveClass: "btnSecondary",
            loadingClass: "btnLoading",
            activeStateMethod: "post",
            inactiveStateMethod: "delete",
            dataAttrUrlAdd: "async-url-add",
            dataAttrUrlDelete: "async-url-delete",
            defautlActiveStateText: "Unfollow",
            defautlInactiveStateText: "Follow"
        }), this.after("initialize", function() {
            var e = this.$node.data("active-button-text"),
                t = this.$node.data("inactive-button-text");
            this.userId = this.$node.data("user-id"), this.validateUserId(), e && (this.attr.activeStateText = e), t && (this.attr.inactiveStateText = t), this.on("ajax:success", this.onFollowSuccess), this.on("ajax:error", this.onFollowError)
        }), this.onFollowSuccess = function(e, t, i) {
            $j.isPlainObject(t) && ("success" === t.status ? (this.toggleState(), this.broadcast("success", t)) : "error" === t.status && this.showErrorMessage(t.message))
        }, this.onFollowError = function(e, t, i) {
            this.defer(function() {
                this.authRedirect(t, $j.proxy(function() {
                    var e = "Unknown XHR failure when trying to follow the user.",
                        i = "Sorry, there was an unknown error following this user. Please reload the page and try again.";
                    t.status && (e += " (status code " + t.status + ")"), this.broadcastError(e), this.showErrorMessage(i)
                }, this))
            }, 500)
        }, this.toggleState = function() {
            this.$node.hasClass(this.attr.activeClass) ? this.inactiveState() : this.activeState()
        }, this.activeState = function() {
            this.$node.addClass(this.attr.activeClass), this.$node.removeClass(this.attr.inactiveClass), this.$node.data("method", this.attr.inactiveStateMethod), this.$node.text(this.attr.activeStateText), this.updateURL()
        }, this.inactiveState = function() {
            this.$node.addClass(this.attr.inactiveClass), this.$node.removeClass(this.attr.activeClass), this.$node.data("method", this.attr.activeStateMethod), this.$node.text(this.attr.inactiveStateText), this.updateURL()
        }, this.updateURL = function() {
            var e = "",
                t = this.$node.data("method");
            if (t === this.attr.activeStateMethod) e = this.$node.data(this.attr.dataAttrUrlAdd);
            else if (t === this.attr.inactiveStateMethod) e = this.$node.data(this.attr.dataAttrUrlDelete);
            else {
                var i = "Sorry, there was an invalid method type for the Follow button.";
                this.showErrorMessage(i)
            }
            e ? this.$node.attr("href", e) : this.$node.on("click", function() {
                return !1
            })
        }, this.showErrorMessage = function(e) {
            $j("#flashMessages").trigger("addFlashMessage", [e, "error"]), this.broadcastError(e)
        }, this.validateUserId = function() {
            var e = /[0-9]+/;
            e.test(this.userId) || (this.showErrorMessage("Invalid user ID for follow component."), this.teardown())
        }
    }, MixinEventUtils, MixinAuthRedirect);
$gr.shared.followSuggestedAuthor = flight.component(function() {
    this.defaultAttrs({
        defaultActiveStateText: "Unfollow",
        defaultInactiveStateText: "Follow",
        followButtonSelector: ".followAuthorButton",
        unfollowButtonSelector: ".unfollowAuthorButton"
    }), this.after("initialize", function() {
        this.on("click", {
            followButtonSelector: this.onFollow
        }), this.on("click", {
            unfollowButtonSelector: this.onUnfollow
        }), this.listen("success.follow", function(e, t) {
            this.appendNewUpdates(t)
        })
    }), this.onFollow = function(e, t) {
        e.preventDefault();
        var i = this.$node.data("follow-path"),
            o = this.$node.data("ref-tag");
        $j.ajax({
            url: i,
            type: "post",
            data: {
                format: "json",
                follow_author_from_newsfeed: !0,
                ref: o
            },
            context: this,
            success: this.onFollowSuccess,
            error: this.onError
        })
    }, this.onUnfollow = function(e, t) {
        e.preventDefault();
        var i = this.$node.data("unfollow-path");
        $j.ajax({
            url: i,
            type: "delete",
            data: {
                format: "json",
                follow_author_from_newsfeed: !0
            },
            context: this,
            success: this.onUnfollowSuccess,
            error: this.onError
        })
    }, this.onFollowSuccess = function(e, t, i) {
        var o = e;
        "success" == o.status ? (this.appendNewUpdates(o), this.$node.find(".followedMessage").show(), this.$node.find(".notFollowedMessage").hide(), this.$node.find(this.attr.followButtonSelector).hide(), this.$node.find(".authorFollowingSuggestionMessaging").hide()) : this.onError(i, t)
    }, this.onUnfollowSuccess = function(e, t, i) {
        var o = e;
        "success" == o.status ? (this.$node.find(".followedMessage").hide(), this.$node.find(".notFollowedMessage").show(), this.$node.find(this.attr.followButtonSelector).show(), this.$node.find(".authorFollowingSuggestionMessaging").show(), this.removeAssociatedUpdates()) : this.onError(i, t)
    }, this.appendNewUpdates = function(e) {
        $j(".authorFollowingSuggestion.update, .authorFollowingSuggestion.feedItem").after(e.last_activity_html)
    }, this.removeAssociatedUpdates = function() {
        var e = "." + this.$node.data("associated-resource");
        $j(e).remove()
    }, this.onError = function(e, t, i) {
        var o;
        try {
            o = $j.parseJSON(e.responseText)
        } catch (n) {
            o = {
                type: "error",
                message: "There was an unknown error. Please retry.  (errorThrown: " + i + ")"
            }
        }
        this.$node.find(".notFollowedMessage").html(o.message), this.$node.find(".notFollowedMessage").show(), this.$node.find(".followedMessage").hide(), this.$node.find(".authorFollowingSuggestionMessaging").hide()
    }
}, MixinEventUtils), $gr.shared.formBoxChecker = flight.component(function() {
    this.defaultAttrs({
        checkBoxesSelector: ".js-formBoxChecker-checkBox",
        massCheckAll: !1,
        massCheckControlSelector: "#js-formBoxChecker-checkAllControl"
    }), this.after("initialize", function() {
        this.on("allBoxesCleared", this.changeToCheckAll), this.on("allBoxesChecked", this.changeToUncheckAll), this.on("click", {
            massCheckControlSelector: this.handleMassCheckClick
        }), this.on("change", {
            checkBoxesSelector: this.handleCheckboxChange
        })
    }), this.changeToCheckAll = function() {
        this.attr.massCheckAll = !0, this.select("massCheckControlSelector").text("Check all")
    }, this.changeToUncheckAll = function() {
        this.attr.massCheckAll = !1, this.select("massCheckControlSelector").text("Uncheck all")
    }, this.checkAll = function() {
        this.select("checkBoxesSelector").prop("checked", !0), this.trigger("allBoxesChecked")
    }, this.handleCheckboxChange = function() {
        $checkBoxes = this.select("checkBoxesSelector"), 0 === $checkBoxes.filter(":checked").length ? this.trigger("allBoxesCleared") : 0 === $checkBoxes.not(":checked").length && this.trigger("allBoxesChecked")
    }, this.handleMassCheckClick = function(e) {
        e.preventDefault(), this.attr.massCheckAll === !0 ? this.checkAll() : this.uncheckAll()
    }, this.uncheckAll = function() {
        this.select("checkBoxesSelector").prop("checked", !1), this.trigger("allBoxesCleared")
    }
});
var FriendRequest = flight.component(function() {
    var e = "FriendRequest";
    this.defaultAttrs({
        channel: e,
        componentName: e,
        showClass: "show",
        approveButtonSelector: ".btnApprove",
        ignoreButtonSelector: ".btnIgnore",
        buttonContainerSelector: ".friendRequestActions",
        statusMessageSelector: ".friendRequestStatusMessage",
        confirmResponseType: "confirm",
        ignoreResponseType: "ignore",
        confirmRequestMessage: "You are now friends",
        ignoreRequestMessage: "You\u2019ve ignored this invitation"
    }), this.after("initialize", function() {
        var e = this.$node.data("confirm-request-message"),
            t = this.$node.data("ignore-request-message");
        e && !/^\s*$/.test(e) && (this.attr.confirmRequestMessage = e), t && !/^\s*$/.test(t) && (this.attr.ignoreRequestMessage = t), this.on("ajax:success", this.onFriendRequestSuccess), this.on("ajax:error", this.onFriendRequestError)
    }), this.onApprove = function() {
        this.hide("buttonContainerSelector"), this.updateMessage(this.attr.confirmRequestMessage), this.show("statusMessageSelector")
    }, this.onIgnore = function() {
        this.hide("buttonContainerSelector"), this.updateMessage(this.attr.ignoreRequestMessage), this.show("statusMessageSelector")
    }, this.onFriendRequestSuccess = function(e, t) {
        var i = [this.attr.confirmResponseType, this.attr.ignoreResponseType];
        $j.isPlainObject(t) ? t.response_type && $j.inArray(t.response_type, i) >= 0 ? t.response_type === this.attr.confirmResponseType ? this.onApprove() : t.response_type === this.attr.ignoreResponseType && this.onIgnore() : this.broadcastError("Undefined or invalid response type in friend request response.", !0) : this.broadcastError("Malformed JSON response when trying to confirm/ignore friend request.", !0)
    }, this.onFriendRequestError = function(e, t) {
        this.defer(function() {
            404 === t.status && (t.status = 403, t.responseText = '{"redirect":"/user/sign_in"}'), this.authRedirect(t, $j.proxy(function() {
                var e = "Unknown XHR failure while trying to confirm/ignore a friend request";
                t.status && (e += ", status code: " + t.status), this.broadcastError(e, !0)
            }, this))
        }, 500)
    }, this.hide = function(e) {
        var t = this.select(e);
        t.removeClass(this.attr.showClass)
    }, this.show = function(e) {
        var t = this.select(e);
        t.addClass(this.attr.showClass)
    }, this.updateMessage = function(e) {
        if ("string" == typeof e && !/^\s*$/.test(e)) {
            var t = this.select("statusMessageSelector");
            t.text(e)
        }
    }
}, MixinEventUtils, MixinAuthRedirect);
$gr.shared.genrePicker = flight.component(function() {
    var e = "genrePicker",
        t = null,
        i = null,
        o = null,
        n = null,
        s = null,
        a = null,
        r = "/user/edit_fav_genres";
    this.defaultAttrs({
        channel: e,
        componentName: e
    }), this.after("initialize", function() {
        switch (t = this.$node, n = $j(".js-saveAction"), s = n.text(), i = $j(".rateBooksContainer"), this.$node.data("page")) {
            case "recommendations":
                a = "/recommendations/genre";
                break;
            case "rate_books":
                a = "/user/rate_books";
                break;
            default:
                a = "/user/rate_books"
        }
        $j(".js-genrePickerButton").on("click", l), $j(".js-newFavoriteGenreListItem").on("click", c), $j(".js-genrePickerListItem").on("click", h), this.on("newFavoritePicked", u), this.on("genrePicked", d)
    });
    var l = function() {
            var e = this.getAttribute("data-genre");
            o = t.find("[data-genre='" + e + "']"), o.addClass("genrePickerListItemSelected"), t.show(), i.hide(), n.length && (n.text("Done"), n.on("click", f)), $j(document).trigger("genrePickerOpened")
        },
        h = function() {
            $j(this).trigger("genrePicked", {
                genre: this.getAttribute("data-genre")
            }), f()
        },
        c = function() {
            $j(this).trigger("newFavoritePicked", {
                genre: this.getAttribute("data-genre")
            })
        },
        d = function(e, t) {
            $j(".js-genrePickerButton").attr("data-genre", t.genre), $j(".js-genreName").attr("data-genre", t.genre), $j.ajax({
                url: a,
                type: "get",
                data: {
                    format: "json",
                    genre: t.genre,
                    reg_path: $j("#reg_path").val()
                },
                context: this,
                success: p
            })
        },
        u = function(e, t) {
            var i = {};
            i[t.genre] = "true", $j.ajax({
                url: r,
                type: "post",
                data: {
                    format: "json",
                    favorites: i
                }
            })
        },
        f = function(e) {
            return o.removeClass("genrePickerListItemSelected"), i.show(), t.hide(), n.length && (n.text(s), n.off("click", f)), $j(document).trigger("genrePickerClosed"), "undefined" != typeof e && e.preventDefault(), !1
        },
        p = function(e) {
            $j(".carouselList").html(e.html), $j(document).trigger("rateBooksCarouselUpdated")
        }
}, MixinEventUtils), $gr.shared.giveawayBookFindWidget = flight.component(function() {
    var e = 13,
        t = 400,
        i = 403,
        o = 404,
        n = 3e3;
    this.after("initialize", function() {
        this.$asinFindInput = this.$node.find("#asinFindInput"), this.$asinFindButton = this.$node.find("#asinFindButton"), this.$asinFindClearLink = this.$node.find("#asinFindClearLink"), this.$bookImage = this.$node.find("#bookImage"), this.$bookTitle = this.$node.find("#bookTitle"), this.$bookAuthor = this.$node.find("#bookAuthor"), this.$bookAsin = this.$node.find("#bookAsin"), this.$bookAsinHiddenInput = this.$node.find("#giveaway_asin"), this.$changeBookButton = this.$node.find("#changeBookButton"), this.$bookFindContainer = this.$node.find("#giveawayBookFind"), this.$bookFindResultContainer = this.$node.find("#giveawayBookFindResult"), this.on(this.$asinFindClearLink, "click", this.clearFindInput), this.on(this.$changeBookButton, "click", this.resetBookSelection), this.on(this.$asinFindButton, "click", this.findBookByAsin), this.on(this.$asinFindInput, "keyup", this.checkEnterPressedAndFindBook)
    }), this.findBookByAsin = function() {
        var e = this.$asinFindInput.val().trim();
        e && (this.$asinFindButton.prop("disabled", !0), $j.ajax({
            url: "/giveaway/find_book_by_asin",
            data: {
                asin: e
            },
            context: this,
            timeout: n
        }).done(this.updateBookView).fail(this.displayErrorMessage).always(this.enableFindButton))
    }, this.checkEnterPressedAndFindBook = function(t) {
        t.keyCode === e && this.findBookByAsin()
    }, this.clearFindInput = function() {
        this.$asinFindInput.val("")
    }, this.updateBookView = function(e) {
        this.updateResultContainer(e), this.$bookFindResultContainer.show(), this.$bookFindContainer.hide()
    }, this.updateResultContainer = function(e) {
        this.$bookImage.attr({
            src: e.image_url,
            title: e.title
        }), this.$bookTitle.attr("href", e.book_url), this.$bookTitle.text(e.title), this.$bookAuthor.attr("href", e.author_url), this.$bookAuthor.text(e.author), this.$bookAsin.text("ASIN: " + e.asin), this.$bookAsinHiddenInput.val(e.asin)
    }, this.resetBookSelection = function() {
        this.$bookFindResultContainer.hide(), this.$bookAsinHiddenInput.val(""), this.$bookFindContainer.show(), this.$asinFindInput.focus()
    }, this.displayErrorMessage = function(e) {
        e.status === o || e.status === t ? (json = JSON.parse(e.responseText), alert(json.error_message)) : e.status === i ? this.defer(function() {
            this.authRedirect(e, $j.proxy(function() {
                var e = "Unknown XHR failure when trying to find book by asin.";
                status && (e += " (status code " + status + ")"), this.broadcastError(e)
            }, this))
        }, 500) : alert("An error occurred when finding the book with this ASIN.")
    }, this.enableFindButton = function() {
        this.$asinFindButton.removeProp("disabled")
    }
}, MixinEventUtils, MixinAuthRedirect), $gr.shared.inAppNotification = flight.component(function() {
    this.defaultAttrs({
        notificationType: "",
        clickableSelector: "a, img"
    }), this.after("initialize", function() {
        if (this.$node.data("notification-type")) {
            this.attr.notificationType = $gr.shared.inAppNotification.parseNotificationType(this.$node), this.on("click", {
                clickableSelector: this.recordClick
            });
            var e = this.$node.parentsUntil("notificationContainer").first(),
                t = $j(e).find(".inAppNotification").first();
            if (this.$node[0] == t[0]) {
                var i = $j(this.$node.parent()).children().map(function() {
                    return $gr.shared.inAppNotification.parseNotificationType($j(this))
                }).get();
                this.recordImpressions(i)
            }
        }
    }), this.recordClick = function() {
        this.recordEvent({
            notification_types: [this.attr.notificationType],
            type: "click"
        })
    }, this.recordImpressions = function(e) {
        this.recordEvent({
            notification_types: e,
            type: "impression"
        })
    }, this.recordEvent = function(e) {
        $j.post("/notifications/track", {
            data: JSON.stringify(e)
        })
    }
}), $gr.shared.inAppNotification.parseNotificationType = function(e) {
    return e.data("notification-type")
}, $gr.shared.lazilyLoadedGlidePopup = flight.component(function() {
    this.after("initialize", function() {
        $j(document).on("click", ".glideButton", this.openGlidePopup)
    }), this.openGlidePopup = function(e) {
        var t = $j(e.target),
            i = t.data("refTag"),
            o = t.data("asin"),
            n = t.data("url");
        window.open("https://www.amazon.com/gp/product/" + o + "/ref=" + i + "?caller=Goodreads&callerLink=" + n + "&tag=" + i + "-20", "1402010176686").focus(), e.preventDefault()
    }
}), $gr.shared.libraryExport = flight.component(function() {
    var e = 2e3,
        t = 900;
    this.after("initialize", function() {
        var e = this.$node.data("userid").toString();
        this.submissionUrl = "/review_porter/export/" + e, this.$fileList = $j("#" + this.$node.data("filelistid")), this.$messageBox = $j("#" + this.$node.data("statusid")), this.fileUrl = "/review_porter/export/" + e + "/goodreads_export.csv", this.checkExport(), this.on("click", this.generateExport)
    }), this.generateExport = function() {
        this.generatingExportState();
        var e = $j.ajax({
            url: this.submissionUrl,
            method: "post",
            data: {
                format: "json"
            },
            context: this
        });
        e.done(this.onSubmissionSuccess), e.fail(this.onSubmissionFailure)
    }, this.checkExport = function(e) {
        var t = $j.ajax({
            url: this.fileUrl,
            method: "head",
            context: this
        });
        t.done(this.onExportSuccess), e && t.fail(e)
    }, this.pollForExport = function(e, t) {
        0 >= e ? this.errorState("We were unable to export your library. Please try again.") : this.checkExport(function() {
            var i = this;
            setTimeout(function() {
                i.pollForExport(e - 1, t)
            }, t)
        })
    }, this.onSubmissionSuccess = function() {
        this.pollForExport(t, e)
    }, this.onSubmissionFailure = function() {
        this.errorState("We were unable to export your library. Please try again.")
    }, this.onExportSuccess = function(e, t, i) {
        var o = i.getResponseHeader("x-export-creation-time");
        this.exportAvailableState(o)
    }, this.generatingExportState = function() {
        this.$fileList.empty(), this.$node.text("Exporting library..."), this.$node.attr("disabled", !0), this.$messageBox.text("We are currently generating your export. This may take some time if you have a large library.")
    }, this.exportAvailableState = function(e) {
        this.$fileList.empty(), this.$messageBox.text("");
        var t = $j(document.createElement("a"));
        t.attr("href", this.fileUrl);
        var i = "Your export";
        null != e && (i += " from " + e), t.text(i), this.$fileList.append($j(document.createElement("br"))), this.$fileList.append(t), this.$node.text("Export Library"), this.$node.removeAttr("disabled")
    }, this.errorState = function(e) {
        this.$node.text("Export Library"), this.$node.removeAttr("disabled"), this.$messageBox.text(e.toString())
    }
});
var LikeResource = flight.component(function() {
    var e = "likeResource";
    this.defaultAttrs({
        channel: e,
        componentName: e,
        catalystSelector: ".jsLike",
        likesCountContainerSelector: ".ratingsCount",
        likesCountSelector: ".likesCount",
        likesIconSelector: ".likesIndicator",
        likesHideClass: "hide",
        likesIconActiveClass: "userHasRating"
    }), this.after("initialize", function() {
        this.on("ajax:success", {
            catalystSelector: this.onLikeSuccess
        }), this.on("ajax:error", {
            catalystSelector: this.onLikeError
        })
    }), this.swapLikeUnlikeLink = function(e, t) {
        var i = e.parent(),
            o = e.attr("href").match(/.*&ref=(.*_u?lk)/);
        if (e.replaceWith(t.html), o) {
            var n = i.find("a");
            t.is_liked_by_current_user ? n.attr("href", n.attr("href") + "&ref=" + t.ref.replace(/_lk/, "_ulk")) : n.attr("href", n.attr("href") + "&ref=" + t.ref.replace(/_ulk/, "_lk"));
        }
    }, this.onLikeError = function(e, t) {
        this.defer(function() {
            this.authRedirect(t, $j.proxy(function() {
                var e = "Unknown XHR failure when trying to like resource.";
                t.status && (e += " , status code " + t.status), this.broadcastError(e)
            }, this))
        }, 500)
    }, this.onLikeSuccess = function(e, t) {
        if ($j.isPlainObject(t)) {
            var i = $j(e.target),
                o = i.data("like-count-id");
            if (o) {
                var n = $j("#" + o);
                if ($j.isNumeric(t.count)) {
                    var s = t.count > 0 ? t.count : 0;
                    n.parent() && n.parent().hasClass("showLikeWord") && (t.count > 1 ? s += " likes" : t.count > 0 ? s += " like" : 0 == t.count && (s += " likes")), n.find(this.attr.likesCountSelector).text(s).toggleClass(this.attr.likesIconActiveClass, t.is_liked_by_current_user);
                    var a = n.closest(this.attr.likesCountContainerSelector);
                    t.count > 0 && a.hasClass(this.attr.likesHideClass) ? a.removeClass(this.attr.likesHideClass) : t.count <= 0 && !a.hasClass(this.attr.likesHideClass) && a.addClass(this.attr.likesHideClass)
                }
                n.find(this.attr.likesIconSelector).toggleClass(this.attr.likesIconActiveClass, t.is_liked_by_current_user)
            }
            this.swapLikeUnlikeLink(i, t)
        } else this.broadcastError("Malformed JSON response when trying to like resource.")
    }
}, MixinEventUtils, MixinAuthRedirect);
$gr.shared.linkAmazonPopUpButton = flight.component(function() {
    this.defaultAttrs({
        linkAmazonAccount: ".linkAmazonAccount"
    }), this.after("initialize", function() {
        this.amazonSignInUrl = this.$node.data("amazon-sign-in-url"), this.on("click", {
            linkAmazonAccount: this.linkAmazonAccount
        })
    }), this.linkAmazonAccount = function() {
        window.open(this.amazonSignInUrl)
    }
}, MixinEventUtils);
var LoadMore = flight.component(function() {
        var e = "loadMore",
            t = /page=([0-9]+)/,
            i = /next_page_token=([^&]+)/;
        this.defaultAttrs({
            channel: e,
            componentName: e,
            loadMoreContainerSelector: "#loadMoreContainer",
            loadMoreActionSelector: ".loadMoreAction",
            loadMoreSelector: ".jsLoadMore",
            loadingClass: "loading"
        }), this.after("initialize", function() {
            this.nextPage = this.getPageNumberFromURL(), this.on("click", this.uiShowLoading), this.on("ajax:success", this.onLoadMoreSuccess), this.on("ajax:error", this.onLoadMoreError)
        }), this.onLoadMoreSuccess = function(e, t) {
            var i = this.$node.data("content-container");
            t.content_html && !/^\s*$/.test(t.content_html) ? $j(i).append(t.content_html) : this.teardownLoadMore(), t.page && t.total_pages && t.total_pages <= t.page && this.teardownLoadMore(), "next_page_token" in t && (t.next_page_token ? this.nextPageToken = t.next_page_token : this.teardownLoadMore()), this.nextPage += 1, t.load_more_html ? ($j(this.attr.loadMoreContainerSelector).replaceWith(t.load_more_html), LoadMore.attachTo(this.attr.loadMoreSelector, {
                loadMoreContainerSelector: this.attr.loadMoreContainerSelector,
                loadMoreActionSelector: this.attr.loadMoreActionSelector,
                loadMoreSelector: this.attr.loadMoreSelector
            })) : this.updateLoadMoreAction(), this.broadcastSuccessfulLoadMore(t), this.uiHideLoading()
        }, this.broadcastSuccessfulLoadMore = function(e) {
            this.broadcast("success", e);
            var t = this.$node.data("success-event");
            "undefined" != typeof t && this.broadcast(t)
        }, this.onLoadMoreError = function(e, t, i) {
            if ("timeout" === i) {
                var o = $j("#flashMessages"),
                    n = "The request timed out. Please try again.";
                o.trigger("addFlashMessage", [n])
            }
            this.uiHideLoading(), this.defer(function() {
                this.authRedirect(t, $j.proxy(function() {
                    var e = "Unknown XHR failure while trying to load more content";
                    t.status && (e += ", status code: " + t.status), this.broadcastError(e)
                }, this))
            }, 500)
        }, this.uiShowLoading = function() {
            $j(this.attr.loadMoreActionSelector).addClass(this.attr.loadingClass)
        }, this.uiHideLoading = function() {
            $j(this.attr.loadMoreActionSelector).removeClass(this.attr.loadingClass)
        }, this.getPageNumberFromURL = function() {
            var e = this.$node.attr("href"),
                i = t.exec(e);
            return null !== i ? parseInt(i[1], 10) : 1
        }, this.updateLoadMoreAction = function() {
            var e = this.$node.attr("href");
            t.test(e) ? e = e.replace(t, "page=" + this.nextPage) : i.test(e) ? e = e.replace(i, "next_page_token=" + this.nextPageToken) : this.broadcastError("There is no page query to replace in the load more button", !0), this.$node.attr("href", e)
        }, this.teardownLoadMore = function() {
            $j(this.attr.loadMoreContainerSelector).remove(), this.teardown()
        }
    }, MixinEventUtils, MixinAuthRedirect),
    LoadingFeedback = flight.component(function() {
        this.defaultAttrs({
            loadingClass: "btnLoading",
            submitElementClass: "btnSubmit"
        }), this.after("initialize", function() {
            this.on(document, "ajax:beforeSend submit", this.enableLoadingState), this.on(document, "ajax:complete unload", this.disableLoadingState)
        }), this.enableLoadingState = function(e) {
            var t = $j(e.target),
                i = this.getSubmitElement(t);
            i.length && (i.prop("disabled", !0), i.addClass(this.attr.loadingClass))
        }, this.disableLoadingState = function(e) {
            var t = $j(e.target),
                i = this.getSubmitElement(t);
            i.length && (i.prop("disabled", !1), i.removeClass(this.attr.loadingClass))
        }, this.getSubmitElement = function(e) {
            var t = null;
            return t = e.hasClass(this.attr.submitElementClass) ? e : e.find("." + this.attr.submitElementClass)
        }
    });
$gr.shared.loadingScreen = flight.component(function() {
    var e = null,
        t = null,
        i = null,
        o = null,
        n = null,
        s = null,
        a = 0,
        r = 3;
    this.defaultAttrs({
        loadingEndpoint: null,
        pollTimeout: 5e3
    }), this.after("initialize", function() {
        e = this.attr.loadingEndpoint, t = this.attr.pollTimeout, o = this.$node, n = $j(".rateBooksContainer"), s = $j(".siteFooter"), n.hide(), s.hide(), i = $j(".js-genrePickerButton").data("genre"), l()
    });
    var l = function() {
            a += 1, r >= a ? $j.ajax({
                url: e,
                type: "get",
                data: {
                    format: "json",
                    tag: i
                },
                context: this,
                success: h
            }) : window.location.href = "/?error=from_recs"
        },
        h = function(e) {
            "" !== e.html ? window.location.reload(!0) : setTimeout(l, t)
        }
});
var MobileConfirmationMenu = flight.component(function() {
    var e = "mobileConfirmationMenu";
    this.defaultAttrs({
        channel: e,
        menuSelector: ".js-mobileConfirmationMenu",
        dataAttrActionType: "action"
    }), this.after("initialize", function() {
        this.$node.data("channel") && (this.attr.channel = this.$node.data("channel")), this.listen("requestShow", this.onRequestShow), this.onSlideUpEvent("listItemSelected", this.onMenuItemSelected)
    }), this.onRequestShow = function() {
        this.showSlideUpMenu(), this.$node.find("button.slideUpMenuItem:first").focus()
    }, this.onMenuItemSelected = function(e, t) {
        var i = $j(t).first();
        i.length && i.data(this.attr.dataAttrActionType) && (this.broadcast("listItemSelected", {
            action: i.data(this.attr.dataAttrActionType)
        }), this.hideSlideUpMenu())
    }
}, MixinEventUtils, withSlideUpMenu);
$gr.shared.modal = flight.component(function() {
    this.defaultAttrs({
        closeIconSelector: ".js-closeModalIcon",
        lightBoxContainerSelector: "#box"
    }), this.after("initialize", function() {
        this.modalId = this.$node.attr("id"), this.hideCloseIcon = this.$node.data("hide-close-icon"), this.listen("modalTriggered", this.onModalTrigger), this.listen("hideModal", this.uiHideModal), this.$node.data("auto-show") && this.uiShowModal()
    }), this.onModalTrigger = function(e, t) {
        t["modal-id"] === this.modalId && this.uiShowModal()
    }, this.uiShowModal = function() {
        Lightbox.showBoxByID(this.$node.attr("id")), this.hideCloseIcon && $j(this.attr.lightBoxContainerSelector).find(this.attr.closeIconSelector).remove()
    }, this.uiHideModal = function() {
        Lightbox.hideBox()
    }
}, MixinEventUtils), $gr.shared.modalTrigger = flight.component(function() {
    this.defaultAttrs({}), this.after("initialize", function() {
        this.on("click", this.broadcastTriggerEvent)
    }), this.broadcastTriggerEvent = function() {
        return this.broadcast("modalTriggered", {
            "modal-id": this.$node.data("modal-id")
        }), !1
    }
}, MixinEventUtils), $gr.shared.newsfeedMenu = flight.component(function() {
    this.defaultAttrs({
        notInterestedButtonSelector: ".js-newsfeedNotInterestedButton",
        notInterestedFormSelector: ".js-newsfeedNotInterested",
        notInterestedMessageSelector: ".js-wtrNotInterestedMessage",
        undoNotInterestedButtonSelector: ".js-undoNotInterestedButton",
        dismissNotInterestedMessageButtonSelector: ".js-dismissNotInterestedMessage"
    }), this.after("initialize", function() {
        var e, t, i, o = this;
        this.on("click", {
            notInterestedButtonSelector: this.markNotInterested
        }), e = this.getNotInterestedMessageContainer(), t = e.find(this.attr.undoNotInterestedButtonSelector), t.click(function(e) {
            o.undoNotInterested(e)
        }), i = e.find(this.attr.dismissNotInterestedMessageButtonSelector), i.click(function(e) {
            o.dismissNotInterested(e)
        })
    }), this.markNotInterested = function(e) {
        e.preventDefault(), e.stopPropagation(), this.select("notInterestedButtonSelector").parent().submit(), $j(this.getNotInterestedNewsfeedStorySelector()).hide(), this.getNotInterestedMessageContainer().show(), $j(".js-newsfeedOverlay").last().hide()
    }, this.undoNotInterested = function(e) {
        var t, i;
        e.preventDefault(), t = this.buildNotInterestedData(), i = e.target.href, $j.ajax({
            url: i,
            type: t.method,
            data: t.requestData,
            context: this,
            success: this.showIgnoredNewsfeedStory,
            error: this.uiShowError
        })
    }, this.showIgnoredNewsfeedStory = function() {
        $j(this.getNotInterestedNewsfeedStorySelector()).show(), this.getNotInterestedMessageContainer().hide()
    }, this.dismissNotInterested = function(e) {
        e.preventDefault(), $j(this.attr.notInterestedMessageSelector).hide()
    }, this.getNotInterestedMessageContainer = function() {
        return $j(this.getNotInterestedMessageSelector())
    }, this.getNotInterestedNewsfeedStorySelector = function() {
        var e, t, i;
        return e = this.getNotInterestedObjectType(), "work" === e ? (t = this.getNotInterestedWorkID(), i = ".newsfeedWorkUpdate" + t) : "suggested_list" === e ? (t = this.getNotInterestedSuggestedListID(), i = ".newsfeedListUpdate" + t) : "author_following_suggestion" === e ? (t = this.getNotInterestedAuthorFollowingSuggestionID(), i = ".newsfeedAuthorUpdate" + t) : "User" === e && (t = this.getNotInterestedUserEngagementID(), i = ".newsfeedEngagementUpdate" + t), i
    }, this.getNotInterestedMessageSelector = function() {
        return this.getNotInterestedNewsfeedStorySelector() + "ShowOnNotInterested"
    }, this.getNotInterestedData = function(e) {
        var t = this.select("notInterestedButtonSelector").closest(this.attr.notInterestedFormSelector);
        return t.data(e)
    }, this.getNotInterestedObjectType = function() {
        return this.getNotInterestedData("object-type")
    }, this.getNotInterestedWorkID = function() {
        return this.getNotInterestedData("work-id")
    }, this.getNotInterestedBookID = function() {
        return this.getNotInterestedData("book-id")
    }, this.getNotInterestedSuggestedListID = function() {
        return this.getNotInterestedData("suggested-list-id")
    }, this.getNotInterestedAuthorFollowingSuggestionID = function() {
        return this.getNotInterestedData("author-following-suggestion-id")
    }, this.getNotInterestedUserEngagementID = function() {
        return this.getNotInterestedData("user-id")
    }, this.buildNotInterestedData = function() {
        var e, t, i, o;
        return o = "put", t = this.getNotInterestedObjectType(), "work" === t ? (i = this.getNotInterestedBookID(), o = "delete", e = {
            format: "json",
            user_not_interested_work: {
                book_id: i
            }
        }) : "suggested_list" === t ? (i = this.getNotInterestedSuggestedListID(), e = {
            format: "json",
            suggested_list: {
                id: i
            }
        }) : "author_following_suggestion" == t ? (i = this.getNotInterestedAuthorFollowingSuggestionID(), e = {
            format: "json",
            author_following_suggestion: {
                id: i
            }
        }) : "User" === t && (o = "post", e = {
            format: "json"
        }), {
            method: o,
            requestData: e
        }
    }
}, dropdownMenu), $gr.shared.newsfeedNav = flight.component(function() {
    this.defaultAttrs({
        updateFilterToggleSelector: ".js-updateToggle",
        updateFiltersSelector: ".js-updateTypeFilters",
        loadingSelector: ".js-loading"
    }), this.after("initialize", function() {
        var e = this;
        this.on("click", {
            updateFilterToggleSelector: this.toggleUpdateFilterForm
        }), this.listen("dataUpdatesLoading", this.showLoading), this.listen("dataUpdatesLoadingFinished", this.hideLoading), this.listen("dataFiltersUpdated", this.hideUpdateFilterForm), this.listen("hideConfirmModal", this.hideUpdateFilterForm), $j(document).keyup(function(t) {
            27 === t.which && e.hideUpdateFilterForm()
        }), $j(document).click(function(t) {
            $j(e.attr.newsfeedNavSelector).first();
            $j.contains(e.node, t.target) || e.hideUpdateFilterForm()
        })
    }), this.toggleUpdateFilterForm = function() {
        this.select("updateFiltersSelector").toggle()
    }, this.hideUpdateFilterForm = function() {
        this.select("updateFiltersSelector").hide()
    }, this.showLoading = function() {
        this.select("loadingSelector").show()
    }, this.hideLoading = function() {
        this.select("loadingSelector").hide()
    }
}, MixinEventUtils), $gr.shared.newsfeedTracking = flight.component(function() {
    this.defaultAttrs({
        trackingContainerSelector: ".newsfeed"
    }), this.after("initialize", function() {
        $j(document).on("click", this.attr.trackingContainerSelector + " .csct", this.setCookie)
    }), this.setCookie = function() {
        var e = new Date;
        e.setTime(e.getTime() + 3e4), document.cookie = "csct=true; expires=" + e.toGMTString() + "; path=/"
    }
}), $gr.shared.newsfeedUpdateUI = flight.component(function() {
    this.defaultAttrs({
        errorMessageSelector: ".newsfeedErrorMessage",
        existingUpdatesSelector: "tr.update[data-timestamp]",
        loadingSpinnerSelector: ".js-loading",
        loadMoreContainerSelector: "#loadMoreContainerUpdates",
        updatesContainerSelector: "#updates",
        updatesFiltersSelector: ".js-updateTypeFilters"
    }), this.after("initialize", function() {
        this.listen("data-form-success", this.updateNewsfeed), this.listen("newsfeedUpdates.loadMore", this.reattachComponents), this.lazyloadNewsfeed()
    }), this.reattachComponents = function() {
        $gr.shared.attachNewsfeedComponents()
    }, this.lazyloadNewsfeed = function() {
        var e = $j(".newsfeed #loadMoreContainerUpdates .loadMoreAction a");
        e.click()
    }, this.updateNewsfeed = function(e, t) {
        "undefined" != typeof t.newsfeed_html ? this.reloadNewsfeed(t.newsfeed_html) : "undefined" != typeof t.reload_newsfeed && $j.ajax({
            url: "/home/index_ajax",
            type: "get",
            data: {
                format: "json"
            },
            context: this,
            beforeSend: this.showLoadingIcon,
            success: function(e, t, i) {
                this.reloadNewsfeed(e.newsfeed_html)
            },
            error: this.showNewsfeedError
        })
    }, this.reloadNewsfeed = function(e) {
        this.$node.html(e), this.reattachComponents(), this.broadcast("dataUpdatesLoadingFinished"), this.lazyloadNewsfeed()
    }, this.showLoadingIcon = function() {
        $j("html, body").animate({
            scrollTop: 0
        }, "slow"), this.select("updatesFiltersSelector").hide(), this.select("updatesContainerSelector").hide(), this.select("loadMoreContainerSelector").hide(), this.select("loadingSpinnerSelector").show()
    }, this.showNewsfeedError = function() {
        this.select("errorMessageSelector").show()
    }
}, MixinEventUtils), $gr.shared.notification = flight.component(function() {}, withNotification), $gr.shared.openGlidePopup = flight.component(function() {
    this.after("initialize", function() {
        this.on("click", this.buttonClicked)
    }), this.buttonClicked = function(e) {
        var t = this.$node.data("refTag"),
            i = this.$node,
            o = i.data("asin"),
            n = i.data("url");
        window.open("https://www.amazon.com/gp/product/" + o + "/ref=" + t + "?caller=Goodreads&callerLink=" + n + "&tag=" + t + "-20", "1402010176686").focus(), e.preventDefault()
    }
}), $gr.shared.paginatedReadingNotesLinksWidget = flight.component(function() {
    var e = 5;
    this.defaultAttrs({
        PrevLink: ".pagination__prevLink",
        NextLink: ".pagination__nextLink",
        ReadingNotes: ".paginatedReadingNotes",
        PageNumberLink: ".pagination__pageNumberLink"
    }), this.after("initialize", function() {
        this.pageNumber = 1, this.itemsPerPage = this.$node.data("itemsPerPage") || e, this.totalItems = this.$node.data("totalItems"), this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage), this.hasPageNumberLinks = !!this.select("PageNumberLink").length, this.on("click", {
            NextLink: this.showNextKNHPage,
            PrevLink: this.showPrevKNHPage,
            PageNumberLink: this.showSpecificPage
        }), this.totalItems > this.itemsPerPage && (this.select("PrevLink").show(), this.select("NextLink").show(), this.hasPageNumberLinks && this.select("PageNumberLink").show()), this.updateContentAndLinks()
    }), this.showNextKNHPage = function() {
        this.pageNumber += 1, this.updateContentAndLinks()
    }, this.showPrevKNHPage = function() {
        this.pageNumber -= 1, this.updateContentAndLinks()
    }, this.showSpecificPage = function(e) {
        this.pageNumber = parseInt(e.target.innerText), this.updateContentAndLinks()
    }, this.updateContentAndLinks = function() {
        this.select("ReadingNotes").css("display", "none"), this.startAt = (this.pageNumber - 1) * this.itemsPerPage, this.select("ReadingNotes").slice(this.startAt, this.startAt + this.itemsPerPage).css("display", "block"), this.hasPageNumberLinks && (this.select("PageNumberLink").prop("disabled", !1), this.select("PageNumberLink")[this.pageNumber - 1].disabled = !0), this.select("NextLink").prop("disabled", this.pageNumber >= this.totalPages), this.select("PrevLink").prop("disabled", 1 == this.pageNumber)
    }
}), $gr.shared.pollClearVoteButton = flight.component(function() {
    this.defaultAttrs({
        paneSelector: ".votedOnPane",
        voteButtonSelector: ".pollVoteButton",
        writeInSelector: ".writeIn",
        bookCoverSelector: ".bookcover",
        wtrSelector: ".gcaNominee__wtr"
    }), this.after("initialize", function() {
        this.on("click", this.clearVote)
    }), this.clearVote = function(e) {
        var t = $j(e.target),
            i = t.data("pollVoteId"),
            o = t.data("answer"),
            n = t.data("pollId");
        return $j.ajax({
            url: "/poll/clear_vote",
            type: "POST",
            dataType: "JSON",
            context: this,
            data: {
                id: n,
                poll_vote_id: i,
                gca: !0
            },
            success: function() {
                this.hideVotedOnPane(), this.showVoteButtons(o)
            }
        }), !1
    }, this.hideVotedOnPane = function() {
        $j(this.attr.paneSelector).hide()
    }, this.removeOverlayAndCheckMark = function() {
        $j(this.attr.bookCoverSelector).removeClass("votedCoverOverlay"), $j("div").remove(".votedForCoverCheckSlim")
    }, this.showVoteButtons = function(e) {
        $j(this.attr.voteButtonSelector).removeClass("hidden"), $j(this.attr.wtrSelector).addClass("hidden"), this.removeOverlayAndCheckMark(), $j(this.attr.voteButtonSelector).show(), $j("#pollVoteButton_" + e).html("Vote"), $j(this.attr.writeInSelector).show()
    }
}), $gr.shared.pollVoteButton = flight.component(function() {
    this.defaultAttrs({
        bookCoverSelector: ".bookcover",
        voteButtonSelector: ".pollVoteButton",
        autoCompleteSelector: ".searchFieldInput",
        votedOnPaneSelector: ".votedOnPane",
        writeInVoteBtnSelector: ".writeInButton",
        writeInSelector: ".writeIn",
        writeInErrorSelector: ".writeInError",
        wtrSelector: ".gcaNominee__wtr"
    }), this.bookID = -1, this.after("initialize", function() {
        this.on("click", this.voteForPoll)
    }), this.voteForPoll = function(e) {
        var t = $j(e.target),
            i = t.data("answer"),
            o = t.data("pollId");
        return this.bookID = t.data("bookId"), t.innerHTML = "voting", "undefined" == typeof i && (i = $j(this.attr.autoCompleteSelector)[0].value, this.bookID = $j(this.attr.autoCompleteSelector).data("bookId"), "undefined" == typeof this.bookID) ? (this.displayError(), !1) : ("undefined" != typeof i && "" != i ? $j.ajax({
            url: "/poll/vote",
            type: "POST",
            dataType: "JSON",
            context: this,
            data: {
                id: o,
                answer: i,
                book_id: this.bookID,
                gca: !0
            },
            statusCode: {
                200: this.displayVotedOnPanel,
                400: this.displayError,
                401: this.displayError,
                403: this.displayError
            }
        }) : t.innerHTML = "Vote", !1)
    }, this.displayVotedOnPanel = function(e) {
        var t = e.body;
        this.addOverlayAndCheckMark(), $j(this.attr.votedOnPaneSelector).html(t), $j(this.attr.votedOnPaneSelector).hide().fadeIn(), $j(this.attr.voteButtonSelector).hide(), $j(this.attr.wtrSelector).removeClass("hidden"), $j(this.attr.writeInErrorSelector).hide(), $j(this.attr.writeInSelector).hide(), $gr.shared.pollClearVoteButton.attachTo(".clearVoteButton"), window.scrollTo(0, 0)
    }, this.addOverlayAndCheckMark = function() {
        $j(this.attr.bookCoverSelector).addClass("votedCoverOverlay"), $j("#bookcover_" + this.bookID).removeClass("votedCoverOverlay"), $j("#bookcover_" + this.bookID).before("<div class='votedForCoverCheckSlim'></div>")
    }, this.displayError = function(e) {
        var t = "<span>That book is ineligible. Please try again!</span>";
        e && (t += "<br /><br />" + e.responseJSON.body), $j(this.attr.writeInErrorSelector).html(t), $j(this.attr.writeInErrorSelector).hide().fadeIn(), $j(this.attr.writeInVoteBtnSelector).html("Vote")
    }
}), $gr.shared.previewableNewsfeedStoryForm = flight.component(function() {
    this.defaultAttrs({
        inputSelector: ":input",
        imageFieldSelector: ".js-imageField",
        previewContainerSelector: ".js-previewContainer",
        previewErrorSelector: ".js-previewError",
        previewImageSelector: ".js-previewImage"
    }), this.after("initialize", function() {
        this.on("change", {
            inputSelector: this.getPreviewHtml
        })
    }), this.getPreviewHtml = function(e) {
        $j.ajax(this.$node.data("preview-url"), {
            data: this.$node.serialize(),
            context: this,
            success: this.showPreview,
            error: this.showPreviewError
        })
    }, this.showPreview = function(e) {
        this.select("previewErrorSelector").hide(), this.select("previewContainerSelector").html(e.preview_html), this.showPreviewImage()
    }, this.showPreviewError = function() {
        this.select("previewContainerSelector").hide(), this.select("previewErrorSelector").show()
    }, this.showPreviewImage = function() {
        var e = this.select("imageFieldSelector");
        if (0 !== e.length && 0 !== e[0].files.length) {
            var t = e[0].files[0],
                i = this.select("previewImageSelector"),
                o = new FileReader;
            o.onload = function(e) {
                var t = e.target.result,
                    o = $j("<img>").attr("src", t);
                i.html(o)
            }, o.readAsDataURL(t)
        }
    }
}), $gr.shared.pulldownNavigator = flight.component(function() {
    var e = "pulldownNavigator";
    this.defaultAttrs({
        channel: e,
        componentName: e,
        pullDownSelector: ".pulldownNavigator"
    }), this.after("initialize", function() {
        this.on("change", t)
    });
    var t = function(e) {
        var t = e.target.value;
        window.location = t
    }
});
var RateBooksProgressBar = flight.component(function() {
    var e = "rateBooksProgressBar";
    this.defaultAttrs({
        channel: e,
        componentName: e
    }), this.after("initialize", function() {
        this.listen("saveRatingSuccess.ratingStars", this.updateProgressBar), this.rateBooksTotal = this.$node.data("rateBooksTotal")
    }), this.updateProgressBar = function(e, t) {
        var i = t.user_ratings_count,
            o = Math.min(100, parseInt(100 * (i / this.rateBooksTotal)));
        $j(".progressBarInner").css("width", o + "%"), $j(".progressRatingsCount").text(i), i == this.rateBooksTotal && this.trigger("rateBooksDoneRating")
    }
}, MixinEventUtils, MixinAuthRedirect);
$gr.shared.rateBooksSkipDialog = flight.component(function() {
    var e = "rateBooksSkipDialog",
        t = null,
        i = null,
        o = null,
        n = null;
    this.defaultAttrs({
        channel: e,
        componentName: e
    }), this.after("initialize", function() {
        n = this, t = $j(".js-saveAction"), i = $j(".js-closeDialog"), o = this.$node, this.addOnClickHandler(), i.on("click", this.hideDialog), this.on(document, "rateBooksDoneRating", this.removeOnClickHandler), this.on(document, "genrePickerOpened", this.removeOnClickHandler), this.on(document, "genrePickerClosed", this.addOnClickHandler)
    }), this.addOnClickHandler = function() {
        "Skip" === t.text() && t.on("click", this.showDialog)
    }, this.removeOnClickHandler = function() {
        this.hideDialog(this.$node), t.off("click", this.showDialog)
    }, this.showDialog = function() {
        return n.$node.show(), !1
    }, this.hideDialog = function() {
        o.hide()
    }
}, MixinEventUtils);
var RatingComponent = flight.component(function() {
    var e = $j(document),
        t = $j("html"),
        i = t.hasClass("touchevents"),
        o = "ratingComponent",
        n = !1;
    this.defaultAttrs({
        channel: o,
        componentName: o,
        tapEvent: i ? "touchstart" : "click",
        tapStartEvent: i ? "touchstart" : "mousedown",
        tapEndEvent: i ? "touchend" : "mouseup",
        animPrepClass: "readyToShow",
        showClass: "show",
        itemActiveClass: "active",
        itemInactiveClass: "inactive",
        cancelSelector: ".cancel",
        itemSelector: ".ratingItem:not(.cancel)",
        listSelector: ".ratingList",
        isDevicePhone: t.hasClass("mobile"),
        isDeviceTablet: t.hasClass("tablet"),
        currentRating: -1,
        minRating: 0,
        maxRating: 5
    }), this.after("initialize", function() {
        this.elCache = {}, this.$bookContainer = this.$node.parent().parent();
        var e = this.$node.data("submit-url");
        if (!e) return this.broadcastError("could not retrieve 'saveUrl'");
        if (this.$node.removeAttr("data-submit-url"), this.attr.saveUrl = e, this.attr.currentRating < this.attr.minRating) {
            var t = this.$node.data("user-rating");
            this.$node.removeAttr("data-user-rating"), "undefined" != typeof t && this.validateRating(t) ? this.attr.currentRating = parseInt(t, 10) : this.attr.currentRating = this.attr.minRating
        }
        if (this.$node.on([this.attr.tapStartEvent, this.attr.tapEndEvent].join(" "), this.attr.itemSelector, $j.proxy(function(e) {
                var t = $(e.target),
                    i = this.attr.itemActiveClass;
                e.type === this.attr.tapStartEvent ? t.prevAll().addClass(i) : (t.prevAll().removeClass(i), this.save(t.data("rating")))
            }, this)), this.attr.isDevicePhone) this.initializeForPhone();
        else {
            if (!this.attr.isDeviceTablet) return this.broadcastError("initialization failed, user agent is not mobile/tablet.");
            this.initializeForTablet()
        }
        this.$bookContainer.find(this.attr.resetSelector).on(this.attr.tapEvent, $j.proxy(this.resetRating, this)), this.listen("saveSuccess", this.updateRatingUI)
    }), this.initializeForPhone = function() {
        return this.elCache.$catalyst && this.elCache.$catalyst.length || (this.elCache.$catalyst = this.$node.find(".catalyst"), this.elCache.$catalyst.length) ? (this.elCache.$catalyst.on(this.attr.tapEvent, $j.proxy(this.toggleVisibility, this)), this.select("cancelSelector").on(this.attr.tapEvent, $j.proxy(this.hide, this)), this.overlayId = [this.attr.componentName, Math.floor(1000000001 * Math.random())].join("_"), n || (e.trigger("create.viewportOverlay", {
            overlayId: this.overlayId
        }), n = !0), this.listen("removedFromShelves.wtrButton", function(e, t) {
            if (t.buttonId) {
                var i = t.buttonId.match(new RegExp(/wtr_button_book_(\d+)/));
                if (i[1]) {
                    var o = new RegExp(i[1]),
                        n = this.$node.attr("id");
                    o.test(n) && (this.attr.currentRating = this.attr.minRating, this.updateRatingUI(e, {
                        rating: this.attr.minRating,
                        domId: n
                    }))
                }
            }
        }), this.listen("beforeShow", function() {
            var t = this.select("listSelector");
            if (t.length) {
                var i = t.outerHeight();
                if (!(i > 0)) return this.broadcastError("cannot display options list because it has no dimensions");
                t.css("bottom", 0 - i + "px")
            }
            this.$node.addClass(this.attr.animPrepClass), e.trigger("show.viewportOverlay", {
                overlayId: this.overlayId
            })
        }), this.listen("afterHide", function() {
            this.defer(function() {
                e.trigger("hide.viewportOverlay", {
                    overlayId: this.overlayId
                })
            }), this.defer(function() {
                this.$node.removeClass(this.attr.animPrepClass).select("listSelector").css("bottom", "")
            }, 350)
        }), e.on("beforeHide.viewportOverlay", $j.proxy(function(e, t) {
            t && t.overlayId === this.overlayId && this.defer(function() {
                this.isVisible() && this.hide()
            })
        }, this)), void this.listen("saveComplete", $j.proxy(this.hide, this))) : this.broadcastError("could not find catalyst element")
    }, this.initializeForTablet = function() {
        this.listen("saveSuccess", function(e, t) {
            if ($j.isPlainObject(t) && this.validateRating(t.rating)) {
                var i = t.rating;
                this.defer(function() {
                    this.$node.find(this.attr.itemSelector).each($j.proxy(function(e, t) {
                        var o = $j(t);
                        o.toggleClass(this.attr.itemInactiveClass, i < parseInt(o.data("rating"), 10))
                    }, this))
                })
            }
        })
    }, this.hide = function() {
        this.broadcast("beforeHide"), this.$node.removeClass(this.attr.showClass), this.broadcast("afterHide")
    }, this.isVisible = function() {
        return this.$node.hasClass(this.attr.showClass)
    }, this.show = function() {
        this.broadcast("beforeShow"), this.$node.addClass(this.attr.showClass), this.broadcast("afterShow")
    }, this.toggleVisibility = function(e) {
        e.preventDefault(), this.isVisible() ? this.hide() : this.show()
    }, this.updateRatingUI = function(e, t) {
        if ($j.isPlainObject(t) && this.validateRating(t.rating)) {
            if (this.$node.attr("id") !== t.domId) return;
            t.rating === this.attr.minRating && this.broadcast("reset"), this.$node.data("disable-star-update") || this.defer(function() {
                this.updateStaticStars(t.rating)
            }), this.attr.hideCatalystClass && this.elCache.$catalyst.toggleClass(this.attr.hideCatalystClass, this.attr.currentRating > this.attr.minRating)
        }
    }, this.updateStaticStars = function(e) {
        var t = this.$bookContainer.find(".bookUserRatingCurrent");
        if (t.length) {
            var i = e > this.attr.minRating && e <= this.attr.maxRating,
                o = /(\w+Star)\sp\d+/;
            t.find(".stars span").removeAttr("title").html("").each(function(t, i) {
                e > 0 && e > t ? i.className = i.className.replace(o, "$1 p10") : i.className = i.className.replace(o, "$1 p0")
            }).end().toggleClass("show", i)
        }
    }, this.resetRating = function(e) {
        e.preventDefault(), this.save(this.attr.minRating)
    }, this.save = function(e) {
        this.validateRating(e) && $j.ajax({
            url: this.attr.saveUrl,
            type: "post",
            data: {
                format: "json",
                rating: e
            },
            context: this,
            success: function(t) {
                this.attr.currentRating = e, this.broadcast("saveSuccess", {
                    rating: e,
                    domId: this.$node.attr("id"),
                    response: t
                })
            },
            error: function(e) {
                this.broadcast("saveError", e), this.defer(function() {
                    this.authRedirect(e, $j.proxy(function() {
                        var t = "Unknown XHR failure when trying to save rating";
                        e.status && (t += " , status code " + e.status), this.broadcastError(t)
                    }, this))
                }, 500)
            },
            complete: function(e) {
                this.broadcast("saveComplete", e)
            }
        })
    }, this.validateRating = function(e) {
        var t = new RegExp("^[" + this.attr.minRating + "-" + this.attr.maxRating + "]$");
        return t.test(e)
    }
}, MixinEventUtils, MixinAuthRedirect);
$gr.shared.ratingDistTooltip = flight.component(function() {
    var e = "RatingDistTooltip";
    this.defaultAttrs({
        channel: e,
        componentName: e
    }), this.after("initialize", function() {
        this.userId = this.$node.data("user-id"), this.graph = $j("#ratingDistribution" + this.userId), this.graphHtml, this.on("click", this.getRatingDistribution)
    }), this.getRatingDistribution = function() {
        return void 0 === this.graphHtml ? $j.ajax({
            url: "/user/rating_distribution/" + this.userId,
            type: this.methodType,
            data: {
                format: "json"
            },
            context: this,
            success: this.showRatingDistGraph
        }) : this.graph.toggle(), !1
    }, this.showRatingDistGraph = function(e) {
        this.graphHtml = e.body, this.graph.append(this.graphHtml), this.graph.toggle()
    }
}, MixinEventUtils);
var RatingStars = flight.component(function() {
    var e = "ratingStars";
    this.defaultAttrs({
        channel: e,
        componentName: e
    }), this.after("initialize", function() {
        var e = this;
        this.attachStarClickHandler(e), this.on(document, "rateBooksCarouselUpdated", function() {
            this.attachStarClickHandler(e)
        })
    }), this.attachStarClickHandler = function(e) {
        $j(".js-starRating").off(), $j(".js-starRating").on("click", function() {
            e.toggleStarUI($j(this), e)
        })
    }, this.toggleStarUI = function(e, t) {
        var i = $.merge(e.siblings(), e),
            o = e.parent().data("user-rating"),
            n = e.data("star"),
            s = e.hasClass("on") && n == o;
        $.each(i, function(e, t) {
            var i = $j(t);
            s || i.data("star") > n ? (i.removeClass("on"), i.addClass("off")) : (i.removeClass("off"), i.addClass("on"))
        }), t.saveRating(e, n, o)
    }, this.saveRating = function(e, t, i) {
        t === i && (t = 0);
        var o = e.parent().parent().attr("rel"),
            n = e.parent().parent().attr("origin"),
            s = $j(".bookItem[rel='" + o + "']");
        t >= 3 && 3 > i && (s.find(".bookCover").hide(), s.find(".bookCoverLoadingOverlay").show()), $.ajax({
            url: e.parent().data("submit-url"),
            type: "post",
            data: {
                format: "json",
                rating: t,
                delete_review: 0 === t,
                book_id: o,
                reg_path: $j("#reg_path").val(),
                book_origin: n
            },
            context: this,
            success: function(o) {
                e.parent().data("user-rating", t), t >= 3 && 3 > i && (s.find(".bookCover").show(), s.find(".bookCoverLoadingOverlay").hide()), (0 == t || 0 == i) && this.broadcast("saveRatingSuccess", o)
            }
        })
    }
}, MixinEventUtils, MixinAuthRedirect);
$gr.communityQA.readerQAForm = flight.component(function() {
    var e = "readerQAForm";
    this.defaultAttrs({
        channel: e,
        formSuccessEventName: "qaFormSuccess",
        containerSelector: ".js-communityAnswersList",
        emptyMessageSelector: ".communityAnswerEmptyMessage",
        formContainerSelector: ".readerQAFormContainer",
        formUserImageSelector: ".js-ReaderQAForm-formUserImage",
        notificationSelector: ".js-notification",
        rateLimitMessageSelector: ".js-ReaderQAForm-rateLimitMessage",
        unansweredQuestionsContainer: ".js-unansweredQuestionsContainer",
        unansweredQuestionsList: "#communityQuestionsWithoutAnswers",
        unansweredQuestionSelector: ".unansweredQuestion"
    }), this.after("initialize", function() {
        this.on("ajax:success", this.uiAddResponseToPage), this.$formNode = this.$node.find("form")
    }), this.displayRateLimitMessage = function() {
        $j(this.attr.rateLimitMessageSelector).show()
    }, this.hideFormUserImage = function() {
        $j(this.attr.formUserImageSelector).hide()
    }, this.uiAddQuestionToPage = function(e) {
        $j(this.attr.unansweredQuestionsList).prepend(e.html);
        var t = $j(this.attr.unansweredQuestionsContainer);
        t.is(":visible") || t.show()
    }, this.uiAddAnswerToPage = function(e) {
        var t = $j(e.html).prependTo(this.attr.containerSelector);
        this.attachComponentsToNewAnswers(t), $j(this.attr.emptyMessageSelector).hide()
    }, this.uiAddResponseToPage = function(e, t, i, o) {
        this.uiResetForm();
        var n = !1,
            s = this.$formNode.data("formType");
        t.html && ("question" === s ? this.uiAddQuestionToPage(t) : "answer" === s && this.uiAddAnswerToPage(t)), t.message && this.uiShowNotification(t), t.limit_reached && (n = !0), ("answer" === this.$formNode.data("formType") || n) && (this.uiHideForm(), this.trigger("answerFormSubmitted.authorDashboardQA")), n && (this.hideFormUserImage(), this.displayRateLimitMessage());
        var a = this.$formNode.parents(this.attr.unansweredQuestionSelector);
        a.length && a.find(".questionHeaderAndActions").fadeOut()
    }, this.attachComponentsToNewAnswers = function(e) {
        $gr.shared.editInPlaceController.attachTo(e, {
            editableElementSelector: ".communityAnswerText",
            highlightElementSelector: ".communityAnswerText",
            elementsToHideSelectors: ".communityAnswererName, .communityAnswerText, .communityAnswerFooter"
        }), $gr.shared.confirmModal.attachTo(".js-confirmModal")
    }, this.uiHideForm = function() {
        this.$node.children().not(this.attr.notificationSelector).fadeOut(), this.teardown()
    }
}, MixinEventUtils, withExpandableTextField, withNotification, withFormAjax), $gr.shared.readingNote = flight.component(function() {
    var e = "ReadingNote",
        t = 2e4,
        i = 1e3,
        o = "delete",
        n = "post",
        s = "put";
    this.defaultAttrs({
        channel: e,
        componentName: e,
        highlightContainer: ".noteHighlightTextContainer__highlightContainer",
        noteContainer: ".noteHighlightTextContainer__noteContainer",
        noteText: ".js-noteText",
        persistanceUI: ".noteContainer__noteText__persist",
        saveButton: ".js-readingNote-save",
        cancelButton: ".js-readingNote-cancel",
        savedNotification: ".noteContainer__noteText__savedNotification",
        deleteNoteLink: ".noteContainer__noteText__deleteNote",
        visibleToggle: ".toggleSwitch__checkbox",
        visibleSlider: ".toggleSwitch__label",
        deleteReadingNoteLink: ".js-readingNote-deleteReadingNote",
        deleteReadingNoteSpinner: ".js-readingNote-deleteReadingNoteSpinner",
        markAsSpoilerCheckbox: ".js-readingNote-spoilerCheckbox",
        markAsSpoilerLabel: ".markAsSpoilerContainer__label",
        commentsContainer: ".noteHighlightTextContainer__commentsContainer",
        likesContainer: ".noteHighlightTextContainer__likeInformationContainer",
        likesButtonContainer: ".noteHighlightTextContainer__likeButtonContainer",
        showSpoiler: ".spoilerContainer__showLink",
        locationLink: ".noteHighlightContainer__location"
    }), this.after("initialize", function() {
        this.annotationPairId = this.$node.data("annotation-pair-id"), this.bookId = this.$node.data("book-id"), this.isSpoiler = this.$node.data("is-spoiler"), this.readingNoteId = this.$node.data("reading-note-id"), this.ref = this.$node.data("ref"), this.saveButtonActive = !0, this.hasNote = this.$node.data("has-note");
        var e = this.select("noteText").text().trim();
        this.select("noteText").text(e), this.lastSavedText = e, this.select("highlightContainer").text() && (this.hasHighlight = !0), commentBox = document.getElementById("commentBox"), null != commentBox && "true" == commentBox.getAttribute("should_auto_focus") && setTimeout(function() {
            $j(".jsCommentComposerTextArea").focus()
        }, 1e3), this.isVisible = this.$node.data("visible"), this.refreshToggle(), this.on("click", {
            noteText: this.showPersistanceUI,
            cancelButton: this.hidePersistanceUIandRestoreText,
            saveButton: this.saveNote,
            deleteNoteLink: this.deleteNote,
            deleteReadingNoteLink: this.deleteReadingNote,
            showSpoiler: this.showSpoiler
        }), this.on("keydown", {
            noteText: this.contentEditableKeypress
        }), this.on("change", {
            visibleToggle: this.toggleVisible,
            markAsSpoilerCheckbox: this.onSpoilerCheckboxChanged
        }), this.on(document, "ajaxComplete", this.refreshToggle), this.on(document, "bulkMakeVisibleEvent", this.handleBulkMakeVisible), this.on(document, "bulkMakeInvisibleEvent", this.handleBulkMakeInvisible), this.on("readingNote.MoreActions.MarkAsSpoilerEvent", this.onMoreActionsMarkAsSpoiler), this.on("readingNote.MoreActions.DeleteEvent", this.onMoreActionsDelete), window.attachEvent && !window.addEventListener && (this.select("visibleSlider").hide(), this.select("visibleToggle").show())
    }), this.contentEditableKeypress = function(e) {
        return 27 === e.keyCode ? void this.hidePersistanceUIandRestoreText() : void this.showPersistanceUI()
    }, this.showPersistanceUI = function() {
        this.hidePrompts(), this.select("persistanceUI").show(), this.hasNote && (this.resetSaveButtonState(), this.showDeleteNoteLink()), this.select("persistanceUI").length && this.select("noteText").addClass("editNoteActive")
    }, this.hidePersistanceUI = function() {
        this.showPrompts(), this.select("persistanceUI").hide(), this.select("noteText").removeClass("editNoteActive")
    }, this.hideVisibleOnlyAttributes = function() {
        this.select("commentsContainer").hide(), this.select("likesButtonContainer").hide(), this.select("likesContainer").find(".likeInformation").hide(), this.select("locationLink").find("a").contents().unwrap()
    }, this.showPrompts = function() {
        var e = this.select("noteText");
        e.removeClass("noEdit"), e.removeClass("greyWatermark")
    }, this.hidePrompts = function() {
        var e = this.select("noteText");
        e.addClass("noEdit"), e.addClass("greyWatermark")
    }, this.showDeleteNoteLink = function() {
        this.select("deleteNoteLink").show()
    }, this.hideDeleteNoteLink = function() {
        this.select("deleteNoteLink").hide()
    }, this.showDeleteReadingNoteLink = function() {
        this.select("deleteReadingNoteLink").show(), this.select("deleteReadingNoteSpinner").hide()
    }, this.hideDeleteReadingNoteLink = function() {
        this.select("deleteReadingNoteLink").hide(), this.select("deleteReadingNoteSpinner").show()
    }, this.showSavedNotification = function() {
        this.select("savedNotification").show()
    }, this.hideSavedNotification = function() {
        this.select("savedNotification").hide()
    }, this.hidePersistanceUIandRestoreText = function() {
        this.hidePersistanceUI(), this.restoreText()
    }, this.resetSaveButtonState = function() {
        this.select("saveButton").text("Save"), this.saveButtonActive = !0
    }, this.removeText = function() {
        this.select("noteText").text("")
    }, this.restoreText = function() {
        this.select("noteText").text(this.lastSavedText)
    }, this.trimLines = function(e) {
        return e.split("\n").map(function(e) {
            return e.trim()
        }).join("\n").trim()
    }, this.sanitizeContenteditableString = function(e) {
        var t = e.trim().replace(/&nbsp;/gi, "").replace(/<div\s*\/*>\s*<br\s*>\s*<\/div\s*>/, "<br>").replace(/<br(\s*)\/*>/gi, "\n").replace(/(<(p|div))/gi, "\n$1").replace(/(<([^>]+)>)/gi, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
        return this.trimLines(t)
    }, this.saveNote = function() {
        if (this.saveButtonActive) {
            this.saveButtonActive = !1, this.select("saveButton").text("Saving...");
            var e = this.sanitizeContenteditableString(this.select("noteText").html());
            if (e === this.lastSavedText) return this.textBeingSaved = e, void this.onSaveNoteSuccess();
            var t, i, a = {
                text: e
            };
            "" === e ? (t = o, i = this.onImplicitDeleteSuccess) : (this.textBeingSaved = e, this.hasNote ? t = s : (t = n, a.annotation_pair_id = this.annotationPairId), i = this.onSaveNoteSuccess);
            var r = this.onSaveNoteError;
            this.makeRequest(t, this.getNoteEndpoint(), a, i, r)
        }
    }, this.deleteNote = function() {
        var e = o,
            t = this.onDeleteNoteSuccess,
            i = this.onDeleteNoteError,
            n = this.readingNoteId;
        this.makeRequest(e, this.getNoteEndpoint(n), null, t, i)
    }, this.makeRequest = function(e, i, o, n, s) {
        this.ref && (null === o && (o = {}), o.ref = this.ref);
        var a = {
            url: i,
            type: e,
            dataType: "json",
            success: n,
            error: s,
            data: o,
            timeout: t,
            context: this
        };
        $j.ajax(a)
    }, this.onSaveNoteSuccess = function(e) {
        this.lastSavedText = this.textBeingSaved, this.resetSaveButtonState(), this.showSavedNotification(), "" !== this.lastSavedText && (this.hasNote = !0), e && e.annotation_pair_id && (this.annotationPairId = e.annotation_pair_id);
        var t = $j.proxy(this.hidePersistanceUI, this),
            o = $j.proxy(this.hideSavedNotification, this),
            n = $j.proxy(this.showDeleteNoteLink, this),
            s = $j.proxy(this.restoreText, this);
        window.setTimeout(function() {
            t(), o(), n(), s()
        }, i)
    }, this.onImplicitDeleteSuccess = function(e) {
        this.resetSaveButtonState(), this.showSavedNotification();
        var t = $j.proxy(this.hidePersistanceUI, this),
            o = $j.proxy(this.hideSavedNotification, this),
            n = $j.proxy(this.onDeleteNoteSuccess, this, e);
        window.setTimeout(function() {
            t(), o(), n()
        }, i)
    }, this.onDeleteNoteSuccess = function(e) {
        this.lastSavedText = "", this.hasNote = !1, this.annotationPairId = e.annotation_pair_id, (null == this.annotationPairId || this.annotationPairId.length <= 0) && this.$node.remove(), this.removeText(), this.hidePersistanceUI(), this.hideDeleteNoteLink()
    }, this.onSaveNoteError = function() {
        this.resetSaveButtonState();
        var e = "An error occurred while saving your note.";
        this.showError(e)
    }, this.onDeleteNoteError = function() {
        this.restoreText();
        var e = "An error occurred while deleting your note.";
        this.showError(e)
    }, this.hasComments = function() {
        var e = this.select("commentsContainer");
        return e.find(".gr-comment.gr-mediaBox").length > 0
    }, this.hasLikes = function() {
        var e = this.select("likesContainer");
        return e.find(".likeInformation").length > 0
    }, this.toggleVisible = function(e) {
        var t = e.target.checked;
        if (!t) {
            if ((this.hasComments() || this.hasLikes()) && !this.popUpMakeInvisibleDialog()) return void this.select("visibleToggle").prop("checked", !0);
            this.hideVisibleOnlyAttributes()
        }
        this.isVisible = t, this.toggleVisibleRequest(t)
    }, this.toggleVisibleRequest = function(e) {
        this.updateVisibleCount(e);
        var t = {
                visible: e
            },
            i = this.onToggleVisibleSuccess,
            o = this.onToggleVisibleError,
            n = this.readingNoteId;
        this.makeRequest(s, this.getReadingNoteEndpoint(n), t, i, o)
    }, this.onToggleVisibleSuccess = function() {}, this.onToggleVisibleError = function() {
        var e = "Your reading note could not be made visible/hidden. Please try again later.";
        this.showError(e), this.isVisible = !this.isVisible, this.refreshToggle(), this.updateVisibleCount(this.isVisible)
    }, this.refreshToggle = function() {
        this.select("visibleToggle").prop("checked", this.isVisible)
    }, this.handleBulkMakeVisible = function() {
        this.isVisible = !0, this.refreshToggle()
    }, this.handleBulkMakeInvisible = function() {
        this.isVisible = !1, this.refreshToggle(), this.hideVisibleOnlyAttributes()
    }, this.updateVisibleCount = function(e) {
        e ? this.trigger(document, "readingNoteMadeVisibleEvent") : this.trigger(document, "readingNoteMadeInvisibleEvent")
    }, this.popUpMakeInvisibleDialog = function() {
        var e = "Are you sure?\n\nIf you make this " + this.knhObjectName() + " invisible, you\u2019ll lose all likes and comments associated with it.";
        return window.confirm(e)
    }, this.onSpoilerCheckboxChanged = function() {
        var e = {
                is_spoiler: this.isSpoilerCheckboxChecked()
            },
            t = function() {
                this.onChangeSpoilerSuccess(e)
            },
            i = this.onChangeSpoilerError;
        this.makeRequest(s, this.getReadingNoteEndpoint(), e, t, i)
    }, this.onMoreActionsMarkAsSpoiler = function(e, t) {
        var i = {
            is_spoiler: t.is_spoiler
        };
        this.updateSpoilerUI();
        var o = function() {
                this.onChangeSpoilerSuccess(i)
            },
            n = this.onChangeSpoilerError;
        this.makeRequest(s, this.getReadingNoteEndpoint(), i, o, n)
    }, this.updateSpoilerUI = function() {
        var e;
        e = this.isSpoiler ? "Marked as Spoiler" : "Mark as Spoiler", this.select("markAsSpoilerLabel").text(e), this.$node.find(".js-readingNote-spoilerCheckbox").prop("checked", this.isSpoiler);
        var t = this.$node.find(".js-readingNote-moreActions");
        this.trigger(t, "readingNote.SpoilerChangeEvent", {
            is_spoiler: this.isSpoiler
        })
    }, this.onChangeSpoilerSuccess = function(e) {
        this.isSpoiler = e.is_spoiler, this.updateSpoilerUI()
    }, this.onChangeSpoilerError = function() {
        var e = "Your reading note could not be marked/unmarked as a spoiler. Please try again later.";
        this.showError(e), this.updateSpoilerUI()
    }, this.isSpoilerCheckboxChecked = function() {
        return !!this.$node.find(".js-readingNote-spoilerCheckbox").prop("checked")
    }, this.showSpoiler = function() {
        this.$node.find(".spoilerContainer").hide(), this.$node.find(".readingNoteContentContainer").show()
    }, this.onMoreActionsDelete = function(e) {
        this.deleteReadingNote()
    }, this.deleteReadingNote = function() {
        var e = "Are you sure?\n\nIf you delete this " + this.knhObjectName() + ", you\u2019ll lose all likes and comments associated with it, and remove it from Kindle.";
        if (window.confirm(e)) {
            var t = {
                    book_id: this.$node.data("bookId")
                },
                i = this.onDeleteReadingNoteSuccess,
                n = this.onDeleteReadingNoteError,
                s = this.readingNoteId;
            this.hideDeleteReadingNoteLink(), this.makeRequest(o, this.getReadingNoteEndpoint(s), t, i, n)
        }
    }, this.onDeleteReadingNoteSuccess = function() {
        this.select("visibleToggle").prop("checked") && this.trigger(document, "readingNoteMadeInvisibleEvent"), this.trigger(document, "readingNoteDeletedEvent"), this.$node.remove()
    }, this.onDeleteReadingNoteError = function() {
        this.showDeleteReadingNoteLink();
        var e = "An error occurred while deleting your reading note.";
        this.showError(e)
    }, this.showError = function(e) {
        var t = $j("#notificationBanner");
        t.length ? t.trigger("showNotification", {
            type: "error",
            message: e
        }) : $j("#flashMessages").trigger("addFlashMessage", [e, "error"])
    }, this.knhObjectName = function() {
        var e;
        return e = this.hasNote && this.hasHighlight ? "note and highlight" : this.hasNote ? "note" : "highlight"
    }, this.getReadingNoteEndpoint = function(e) {
        return path = "/notes/" + this.bookId + "/" + this.annotationPairId, e && (path += "?reading_note_id=" + e), path
    }, this.getNoteEndpoint = function() {
        return "/notes/" + this.bookId + "/" + this.annotationPairId + "/note"
    }
}, MixinEventUtils, MixinAuthRedirect), $gr.shared.readingNoteBanner = flight.component(function() {
    var e = "ReadingNoteBanner",
        t = 2e4,
        i = "put";
    this.defaultAttrs({
        channel: e,
        componentName: e,
        makeVisibleButton: ".js-makeAllVisible",
        makeInvisibleLink: ".js-makeAllInvisible",
        shareStatus: ".js-bulkShareStatus",
        helpTipForMakeVisible: ".readingNotes__HelpTip",
        helpTextForMakeVisible: ".readingNotesBanner__HelpPopover",
        mainReadingNotesContainer: ".readingNotesMainContainer__highlightsNotesColumn",
        visibleCountText: "#visibleCount",
        totalCountText: "#totalCount",
        totalCountButtonText: "#makeVisibleButton #totalCount"
    }), this.after("initialize", function() {
        this.totalCount = this.$node.data("totalCount"), this.visibleCount = this.$node.data("visibleCount"), this.ref = this.$node.data("ref"), this.readingNotesEndpoint = "/notes/" + this.$node.data("bookId") + "/share", this.on("click", {
            makeVisibleButton: this.makeAllVisible,
            makeInvisibleLink: this.makeAllInvisible,
            helpTipForMakeVisible: this.toggleVisibleHelp,
            helpTextForMakeVisible: this.toggleVisibleHelp
        }), this.on(document, "ajaxComplete", this.refreshBulkUpdateControl), this.on(document, "readingNoteMadeVisibleEvent", this.handleReadingNoteMadeVisible), this.on(document, "readingNoteMadeInvisibleEvent", this.handleReadingNoteMadeInvisible), this.on(document, "readingNoteDeletedEvent", this.handleReadingNoteDeleted), this.refreshBulkUpdateControl(), this.initializeFreshdeskWidget("&widgetType=popup&formTitle=Feedback+on+Kindle+Notes+%26+Highlights&submitThanks=Thanks+so+much+for+your+feedback!+Feel+free+to+continue+providing+feedback+on+know+what+you+like+or+what+could+be+improved.+If+you+need+additional+help+or+have+feedback+about+other+parts+of+the+site,+please+email+us+at+support@goodreads.com.&searchArea=no&helpdesk_ticket[subject]=Kindle+Notes+%26+Highlights+Feedback&helpdesk_ticket[description]=Please+leave+your+feedback+above+this+line!+If+you'd+like+more+help,+please+contact+us+at+support@goodreads.com&screenshot=no")
    }), this.handleReadingNoteMadeVisible = function() {
        this.visibleCount += 1, this.refreshVisibleCount()
    }, this.handleReadingNoteMadeInvisible = function() {
        this.visibleCount -= 1, this.refreshVisibleCount()
    }, this.refreshVisibleCount = function() {
        this.select("visibleCountText").text(this.visibleCount), this.refreshBulkUpdateControl()
    }, this.handleReadingNoteDeleted = function() {
        this.totalCount -= 1, this.refreshTotalCount()
    }, this.refreshTotalCount = function() {
        this.select("totalCountText").text(this.totalCount), this.select("totalCountButtonText").text(this.totalCount), this.refreshBulkUpdateControl()
    }, this.popUpMakeInvisibleDialog = function() {
        var e = "Are you sure?\n\nIf you make these notes and highlights invisible, you'll lose any likes and comments.";
        return window.confirm(e)
    }, this.makeRequest = function(e, i, o, n, s) {
        this.ref && (null === o && (o = {}), o.ref = this.ref);
        var a = {
            url: i,
            type: e,
            dataType: "json",
            success: n,
            error: s,
            data: o,
            timeout: t,
            context: this
        };
        $j.ajax(a)
    }, this.makeAllVisible = function() {
        this.fallbackCount = this.visibleCount, this.visibleCount = this.totalCount, this.refreshVisibleCount(), this.trigger(document, "bulkMakeVisibleEvent"), this.refreshBulkUpdateControl(), this.bulkUpdateShareState(!0)
    }, this.makeAllInvisible = function() {
        this.popUpMakeInvisibleDialog() && (this.fallbackCount = this.visibleCount, this.visibleCount = 0, this.refreshVisibleCount(), this.trigger(document, "bulkMakeInvisibleEvent"), this.refreshBulkUpdateControl(), this.bulkUpdateShareState(!1))
    }, this.toggleVisibleHelp = function() {
        this.select("helpTextForMakeVisible").is(":visible") ? this.select("helpTextForMakeVisible").hide() : this.select("helpTextForMakeVisible").show()
    }, this.bulkUpdateShareState = function(e) {
        var t = {
                visible: e
            },
            o = this.readingNotesEndpoint,
            n = null,
            s = this.onBulkUpdateShareStateError;
        this.makeRequest(i, o, t, n, s)
    }, this.onBulkUpdateShareStateError = function() {
        var e = "Your reading notes could not be made visible/hidden. Please try again later.";
        $j("#notificationBanner").trigger("showNotification", {
            type: "error",
            message: e
        }), this.visibleCount = this.fallbackCount, this.refreshVisibleCount(), this.select("mainReadingNotesContainer").load(document.URL + " #allHighlightsAndNotes > *")
    }, this.refreshBulkUpdateControl = function() {
        0 === this.totalCount ? (this.select("makeVisibleButton").hide(), this.select("makeInvisibleLink").hide()) : this.visibleCount === this.totalCount ? (this.select("makeVisibleButton").hide(), this.select("makeInvisibleLink").show(), this.select("shareStatus").text("Visible")) : (this.select("makeInvisibleLink").hide(), this.select("makeVisibleButton").show(), this.select("shareStatus").text("Make visible"))
    }, this.initializeFreshdeskWidget = function(e) {
        "undefined" != typeof window.FreshWidget && window.FreshWidget.init("", {
            queryString: e,
            utf8: "\u2713",
            widgetType: "popup",
            submitThanks: "Thanks so much for your feedback! Feel free to continue using this form to let us know what you like or what could be improved.",
            buttonType: "text",
            buttonText: "Feedback",
            buttonColor: "white",
            buttonBg: "#00635D",
            alignment: "2",
            formHeight: "420px",
            url: "https://goodreads.freshdesk.com",
            offset: "550px",
            loadOnEvent: "immediate"
        })
    }
}, MixinEventUtils, MixinAuthRedirect), $gr.shared.readingNoteMoreMenu = flight.component(function() {
    this.defaultAttrs({
        deleteSelector: ".js-readingNote-moreActions-delete",
        markAsSpoilerSelector: ".js-readingNote-moreActions-markAsSpoiler",
        unmarkAsSpoilerSelector: ".js-readingNote-moreActions-unmarkAsSpoiler"
    }), this.after("initialize", function() {
        this.on("click", {
            deleteSelector: this.onDeleteButtonClicked,
            markAsSpoilerSelector: this.onSpoilerButtonClicked,
            unmarkAsSpoilerSelector: this.onSpoilerButtonClicked
        }), this.on("readingNote.SpoilerChangeEvent", this.onSpoilerChange), this.isSpoiler = this.$node.data("is-spoiler"), this.updateSpoilerUI()
    }), this.onDeleteButtonClicked = function(e) {
        e.preventDefault(), e.stopPropagation(), this.closeMenu(), this.trigger("readingNote.MoreActions.DeleteEvent")
    }, this.onSpoilerButtonClicked = function(e) {
        e.preventDefault(), e.stopPropagation(), this.closeMenu(), this.trigger("readingNote.MoreActions.MarkAsSpoilerEvent", {
            is_spoiler: !this.isSpoiler
        })
    }, this.onSpoilerChange = function(e, t) {
        e.preventDefault(), e.stopPropagation(), this.isSpoiler = t.is_spoiler, this.updateSpoilerUI()
    }, this.updateSpoilerUI = function() {
        this.isSpoiler ? (this.select("markAsSpoilerSelector").hide(), this.select("unmarkAsSpoilerSelector").show()) : (this.select("markAsSpoilerSelector").show(), this.select("unmarkAsSpoilerSelector").hide())
    }, this.closeMenu = function() {
        this.$node.blur()
    }
}, dropdownMenu), $gr.shared.readingYear = flight.component(MixinEventUtils, function() {
    var e = "",
        t = null,
        i = "",
        o = "",
        n = "",
        s = 1.5,
        a = "";
    this.readingYearId = null, this.$shareToNewsfeedFeedbackId = null, this.after("initialize", function() {
        e = this.$node.data("alignby"), i = this.$node.data("coverclass"), o = this.$node.data("doubleclass"), a = this.$node.data("mobile"), this.readingYearId = this.$node.data("readingyearid"), this.$shareToNewsfeedFeedbackId = $j("#" + this.$node.data("sharetonewsfeedfeedbackid")), "px" == e ? t = this.$node.data("maxheight") : "relative" == e && (n = this.$node.data("separatorimageclass")), $j(window).load(this.resizeBookCovers), window.addEventListener("resize", this.resizeBookCovers), $j(".loadMoreButton").on("click", {
            env: this
        }, this.loadMoreCovers), $j("#" + this.$node.data("sharetonewsfeedbuttonid")).on("click", {
            env: this
        }, this.shareToNewsfeedAction), $j(this.$node.data("fbselector")).on("click", {
            tag: "fb"
        }, this.trackClick), $j(this.$node.data("twitterselector")).on("click", {
            tag: "twitter"
        }, this.trackClick), $j(this.$node.data("pinterestselector")).on("click", {
            tag: "pinterest"
        }, this.trackClick)
    }), this.resizeBookCovers = function() {
        r(i, 1), r(o, 2), "relative" == e && r(n, 1)
    };
    var r = function(i, o) {
        $j(i).each(function() {
            var i = $j(this).find("img");
            if ("px" == e) {
                var n = t * o - 40 * (o - 1);
                i.length && i.height() >= n && (i.css("height", n.toString() + "px"), i.css("width", "auto")), i.length && 2 == o && $j(this).find(".staticStars").css("transform", "translateY(-" + ((n - i.height()) / 2).toString() + "px)")
            } else if ("relative" == e) {
                var a = 25 * o;
                $j(this).css("width", a.toString() + "%");
                var r = $j(this).width() * s / o;
                if ($j(this).height(r), i.length) {
                    i.css("height", ""), i.css("width", "");
                    var l = r * o,
                        h = i.height();
                    if (h > l) i.css("height", l.toString() + "px"), i.css("width", "auto");
                    else {
                        var c = (l - h) / 2;
                        i.css("transform", "translateY(" + c.toString() + "px)"), 2 == o && $j(this).find(".staticStars").css("transform", "translateY(" + c.toString() + "px)")
                    }
                }
            }
        })
    };
    this.shareToNewsfeedAction = function(e) {
        var t = e.data.env;
        1 != e.currentTarget.disabled && $j.ajax({
            url: "/reading_year/add_newsfeed_update",
            data: {
                id: t.readingYearId
            },
            method: "post"
        }).success(function() {
            e.currentTarget.textContent = "Shared", e.currentTarget.disabled = !0, t.$shareToNewsfeedFeedbackId.show(), setTimeout(function() {
                t.$shareToNewsfeedFeedbackId.hide()
            }, 8e3), $j.post("/track/track_click", {
                feature: "yyib_newsfeed_shares"
            })
        })
    }, this.loadMoreCovers = function(e) {
        var t = e.data.env;
        button_data = $j(".loadMoreButton").data(), $j.get("/year_in_books/covers/show/" + button_data.year + "/" + button_data.userId + "/" + button_data.page, function(e) {
            e.last_page && $j(".loadMoreButton").hide(), a ? $j(".coverRightCenterMobile").append(e.html) : $j(".coverRightCenter").append(e.html), setTimeout(function() {
                $j(".bookCovers").on("load", t.resizeBookCovers())
            }, 2e3)
        }), $j(".loadMoreButton").data("page", button_data.page + 1)
    }, this.trackClick = function(e) {
        $j.post("/track/track", {
            tid: "yyib_" + e.data.tag + "_share"
        }, null), $j.post("/track/track_click", {
            feature: "yyib_share_" + e.data.tag
        })
    }
}), $gr.shared.relatedWorks = flight.component(function() {
    this.defaultAttrs({
        relatedWorksContainerSelector: ".js-relatedWorksContainer",
        wtrButtonSelector: ".wtrButtonContainer"
    }), this.after("initialize", function() {
        this.on("wtrShelvingCompleted", {
            wtrButtonSelector: this.uiInsertRelatedWorks
        })
    }), this.uiInsertRelatedWorks = function(e, t) {
        this.$node.next(this.attr.relatedWorksContainerSelector).removeClass("initiallyHidden").find("td").html(t.html_content), $gr.shared.dismissModuleUI.attachTo(".js-dismissModuleContainer", {
            dismissButtonSelector: ".js-dismissTrigger"
        })
    }
}), $gr.shared.reviewAutoSave = flight.component(function() {
    this.defaultAttrs({
        reviewTextArea: ".js-reviewUserText",
        autoSavePeriod: 1e3
    }), this.previousPayload = {}, this.lock = !1;
    var e;
    this.after("initialize", function() {
        e = this, window.onunload = t, $j(e.attr.reviewTextArea).on("keyup.reviewDraft", flight.utils.debounce(t, e.attr.autoSavePeriod)), $j(e.attr.reviewTextArea).on("keyup.reviewDraftHideText", i), $j(e.attr.reviewTextArea).on("blur.reviewDraft", t)
    });
    var t = function() {
            var t = s();
            !e.lock && n(t) && o(t) && (e.lock = !0, $j("#autoSaveError").hide(), $j("#autoSaveReloadedMessage").hide(), $j("#autoSaveConfirmation").hide(), $j("#autoSaveLoading").show(), $j.post("/review/draft", t).always(function() {
                e.lock = !1, $j("#autoSaveLoading").hide()
            }).done(function(i) {
                e.previousPayload = t, $j("#autoSaveReloadedMessage").html("Draft from " + i.timestamp), $j("#autoSaveConfirmation").show()
            }).fail(function() {
                $j("#autoSaveError").html("The review draft could not be saved."), $j("#autoSaveError").show()
            }))
        },
        i = function() {
            $j("#autoSaveError").hide(), $j("#autoSaveReloadedMessage").hide(), $j("#autoSaveConfirmation").hide(), $j("#autoSaveLoading").hide()
        },
        o = function(t) {
            return t.review !== e.previousPayload.review
        },
        n = function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t) && (null === e[t] || void 0 === e[t] || "" === e[t])) return !1;
            return !0
        },
        s = function() {
            var t = null;
            return $j(e.attr.reviewTextArea).length > 0 && (t = $j(e.attr.reviewTextArea).val()), {
                book_id: e.attr.bookID,
                review: t
            }
        }
}), $gr.shared.reviewDraftDataCollection = flight.component(function() {
    this.after("initialize", function() {
        var e = this;
        this.on("change.reviewDraftDataCollection", function() {
            $j.post("/track/track", {
                tid: "track_text_written_in_review_text_box"
            }).done(function() {
                e.off("change.reviewDraftDataCollection")
            })
        })
    })
});
var SearchInline = flight.component(function() {
        var e = "searchInline";
        this.defaultAttrs({
            channel: e,
            componentName: e,
            searchResultsSelector: null,
            searchFieldSelector: ".field",
            searchFieldClearSelector: ".clearIcon",
            distractionSelector: "",
            searchFieldActiveClass: "active",
            searchResultsLoadingClass: "loading",
            searchResultsShowClass: "show",
            $queryAjaxSettings: null,
            queryParamName: "q",
            queryLengthMin: 2,
            enableCollapseDistractions: !1
        }), this.after("initialize", function() {
            return this.isActive = !1, this.$node.is("input") ? this.$searchField = this.$node : this.$searchField = this.select("searchFieldSelector").first(), this.$searchField.length < 1 || !this.$searchField.is("input") ? this.broadcastError("search field element is required") : (this.on(this.$searchField, "focus", this.activate), this.select("searchFieldClearSelector").on("click", $j.proxy(this.deactivate, this)), this.$searchResultsContainer || (this.$searchResultsContainer = $j(this.attr.searchResultsSelector)), void this.initializeSearchFieldAutocomplete())
        }), this.initializeSearchFieldAutocomplete = function() {
            this.on(this.$searchField, "showMenu.autocomplete", this.showSearchResults), this.on(this.$searchField, "submitQueryStart.autocomplete", function() {
                this.trigger(this.$searchField, "clearMenu.autocomplete"), this.$searchResultsContainer.addClass(this.attr.searchResultsLoadingClass)
            }), this.on(this.$searchField, "submitQueryEnd.autocomplete", function() {
                this.$searchResultsContainer.removeClass(this.attr.searchResultsLoadingClass)
            }), Autocomplete.attachTo(this.$searchField, {
                menuListParentSelector: this.attr.searchResultsSelector,
                queryLengthMin: this.attr.queryLengthMin,
                queryParamName: this.attr.queryParamName,
                $queryAjaxSettings: this.attr.$queryAjaxSettings
            })
        }, this.activate = function() {
            this.isActive || (this.isActive = !0, this.$node.addClass(this.attr.searchFieldActiveClass), this.toggleDistractionlessMode(!0), this.showSearchResults(), this.trigger(document, "hideBrowserAddressBar"))
        }, this.deactivate = function() {
            this.isActive && (this.isActive = !1, this.$node.removeClass(this.attr.searchFieldActiveClass), this.hideSearchResults(), this.toggleDistractionlessMode(!1), this.resetSearchResults())
        }, this.hideSearchResults = function() {
            this.$searchResultsContainer.removeClass(this.attr.searchResultsShowClass)
        }, this.resetSearchResults = function() {
            this.trigger(this.$searchField, "reset.autocomplete")
        }, this.showSearchResults = function() {
            this.isActive && this.$searchResultsContainer.addClass(this.attr.searchResultsShowClass)
        }, this.toggleDistractionlessMode = function(e) {
            var t = $j(this.attr.distractionSelector);
            this.attr.enableCollapseDistractions === !0 ? t[e ? "hide" : "show"]() : t.css("visibility", e ? "hidden" : "")
        }
    }, MixinEventUtils),
    ShareBookButton = flight.component(function() {
        this.after("initialize", function() {
            this.on($gr.touch, function() {
                alert("Sharing is caring.")
            })
        })
    });
$gr.communityQA.shareToggle = flight.component(function() {
    var e = "shareToggleComponent";
    this.defaultAttrs({
        channel: e,
        componentName: e,
        selectedClass: "selected"
    }), this.after("initialize", function() {
        this.$parent = this.$node.parent(), this.on("click", this.toggleShareOption)
    }), this.toggleShareOption = function() {
        var e = this,
            t = function() {
                e.uiToggle(), e.dataToggle()
            };
        "twitter" === this.$node.data("share-service") ? "connected" === this.$node.data("service-connected") ? t() : GR_Twitter.askToConnect(function() {
            e.$node.data("service-connected", "connected"), t()
        }) : t()
    }, this.uiToggle = function() {
        this.$parent.toggleClass(this.attr.selectedClass)
    }, this.dataToggle = function() {
        var e = this.$node.closest("form"),
            t = this.$node.data("share-service"),
            i = "share-service-" + t;
        this.$parent.hasClass(this.attr.selectedClass) ? $j("<input>").attr({
            type: "hidden",
            name: i,
            value: !0
        }).appendTo(e) : $j('input[name="' + i + '"]').remove()
    }
}, withTooltips);
var SiteBanner = flight.component(function() {
        var e = "siteBanner";
        this.defaultAttrs({
            rootSelector: "#siteBanner",
            closeSelector: ".closeIcon",
            showClass: "show",
            channel: e
        }), this.after("initialize", function() {
            this.listen("requestHide", this.onRequestHide), this.listen("requestShow", this.onRequestShow), this.$rootNode = $j(this.attr.rootSelector).first(), this.on(this.$rootNode.find(this.attr.closeSelector), "click", this.hide), this.listen("addClass", function(e, t) {
                this.$rootNode.addClass(t)
            })
        }), this.hide = function() {
            this.isVisible() && (this.broadcast("beforeHide"), this.$rootNode.removeClass(this.attr.showClass), this.broadcast("afterHide"))
        }, this.isVisible = function() {
            return this.$rootNode.hasClass(this.attr.showClass)
        }, this.show = function() {
            this.isVisible() || (this.broadcast("beforeShow"), this.$rootNode.addClass(this.attr.showClass), this.broadcast("afterShow"))
        }, this.onRequestHide = function(e) {
            this.isVisible() ? this.hide() : this.broadcast("afterHide")
        }, this.onRequestShow = function(e) {
            this.isVisible() ? this.broadcast("afterShow") : this.show()
        }
    }, MixinEventUtils),
    SiteSearch = flight.component(function() {
        var e = "siteSearch";
        this.defaultAttrs({
            channel: e,
            componentName: e,
            searchButtonSelector: "#siteSearchButton",
            searchFieldClearSelector: ".clearIcon",
            searchFieldSelector: ".field",
            searchFormSelector: ".searchForm",
            searchResultsSelector: ".searchResults",
            buttonSelectedClass: "selected",
            searchFormActiveClass: "active",
            clearIconShowClass: "show",
            searchPanelShowClass: "show",
            searchResultsShowClass: "show",
            autocomplete: !0,
            sticky: !1,
            queryDebounceDuration: 500
        }), this.after("initialize", function() {
            this.isActive = !1, this.$searchButton || (this.$searchButton = $j(this.attr.searchButtonSelector)), this.$searchField || (this.$searchField = this.select("searchFieldSelector")), this.$searchForm || (this.$searchForm = this.select("searchFormSelector")), this.$searchResultsContainer || (this.$searchResultsContainer = this.select("searchResultsSelector")), this.$searchFieldClear || (this.$searchFieldClear = this.select("searchFieldClearSelector")), this.on(this.$searchButton, "click", this.toggleSearchPanel), this.attr.autocomplete === !0 && this.initializeSearchFieldAutocomplete(), this.on(this.$searchField, "focus", this.activate), this.on(this.$searchFieldClear, "click", this.deactivate), this.attr.sticky === !1 && (this.on(document, "click", function() {
                this.isSearchPanelVisible() && this.hideSearchPanel()
            }), this.on("click", function(e) {
                e.stopPropagation()
            })), this.on(this.$searchField, "keyup input", this.onKeystroke), this.listen("showSearch", this.showSearchPanel)
        }), this.initializeSearchFieldAutocomplete = function() {
            this.on(this.$searchField, "showMenu.autocomplete", this.showSearchResults), this.after("hideSearchPanel", function(e) {
                this.trigger(this.$searchField, "reset.autocomplete")
            }), Autocomplete.attachTo(this.$searchField, {
                menuListParentSelector: this.attr.searchResultsSelector,
                queryParamName: "q",
                $queryAjaxSettings: {
                    type: "POST",
                    url: "/book/auto_complete",
                    data: {
                        book_origin: "header_search"
                    }
                }
            })
        }, this.activate = function() {
            this.isActive || (this.isActive = !0, this.$searchForm.addClass(this.attr.searchFormActiveClass), this.setSearchFieldClearState(), this.trigger(document, "hideBrowserAddressBar"))
        }, this.deactivate = function() {
            this.isActive && (this.isActive = !1, this.$searchField.val(""), this.setSearchFieldClearState(), this.resetSearchResults(), this.$searchField.focus())
        }, this.hideSearchPanel = function() {
            this.hideSearchResults(), this.$node.removeClass(this.attr.searchPanelShowClass), this.$searchButton.removeClass(this.attr.buttonSelectedClass), this.broadcast("hide")
        }, this.hideSearchResults = function() {
            this.$searchResultsContainer.removeClass(this.attr.searchResultsShowClass)
        }, this.isSearchPanelVisible = function() {
            return this.$node.hasClass(this.attr.searchPanelShowClass)
        }, this.onKeystroke = function(e) {
            this.setSearchFieldClearState()
        }, this.setSearchFieldClearState = function() {
            "" === this.$searchField.val() ? this.$searchFieldClear.removeClass(this.attr.clearIconShowClass) : this.$searchFieldClear.addClass(this.attr.clearIconShowClass)
        }, this.resetSearchResults = function() {
            this.trigger(this.$searchField, "reset.autocomplete")
        }, this.showSearchPanel = function() {
            this.$searchButton.addClass(this.attr.buttonSelectedClass), this.trigger(document, "hideBrowserAddressBar", !0), this.defer(function() {
                this.$node.addClass(this.attr.searchPanelShowClass), this.broadcast("show")
            })
        }, this.showSearchResults = function() {
            this.isSearchPanelVisible() && this.$searchResultsContainer.addClass(this.attr.searchResultsShowClass)
        }, this.toggleSearchPanel = function(e, t) {
            e && e.preventDefault();
            var i = "boolean" == typeof t ? t : !this.isSearchPanelVisible();
            i ? this.showSearchPanel() : this.hideSearchPanel()
        }
    }, MixinEventUtils),
    SortMenu = flight.component(function() {
        var e = "sortMenu";
        this.defaultAttrs({
            activeClass: "selected",
            buttonSelector: ".js-sortMenu__button",
            menuSelector: ".js-sortMenu__menu",
            slideUpListItemAllowDefaultAction: !0,
            channel: e,
            componentName: e
        }), this.after("initialize", function() {
            this.on(this.attr.buttonSelector, "click", function(e) {
                this.$node.hasClass(this.attr.activeClass) ? this.$node.removeClass(this.attr.activeClass) : this.$node.addClass(this.attr.activeClass), this.toggleSlideUpMenuVisibility(e)
            })
        })
    }, withSlideUpMenu),
    Spoilers = flight.component(function() {
        var e = "spoilers";
        this.defaultAttrs({
            channel: e,
            componentName: e,
            showSpoilerSelector: ".jsShowSpoiler",
            hideSpoilerSelector: ".jsHideSpoiler",
            spoilerContainerSelector: ".spoilerContainer"
        }), this.after("initialize", function() {
            this.on($gr.touch, {
                showSpoilerSelector: this.onShowSpoiler,
                hideSpoilerSelector: this.onHideSpoiler
            })
        }), this.onHideSpoiler = function(e) {
            var t = $j(e.target);
            e.preventDefault(), t.parent().siblings(this.attr.showSpoilerSelector).show(), t.parent(this.attr.spoilerContainerSelector).hide()
        }, this.onShowSpoiler = function(e) {
            var t = $j(e.target);
            e.preventDefault(), t.siblings(this.attr.spoilerContainerSelector).show(), t.hide()
        }
    }),
    TabCluster = flight.component(function() {
        var e, t = "tab-id",
            i = "tabCluster";
        this.defaultAttrs({
            channel: i,
            componentName: i,
            sectionRoot: null,
            sectionSelector: ".tabSection",
            tabSelector: ".tab",
            hideSectionClass: "hide",
            tabSelectedClass: "selected",
            tabLinkAttrName: t,
            sectionLinkAttrName: t
        }), this.after("initialize", function() {
            e = $j(this.attr.sectionRoot), e.length < 1 || (this.attr.defaultTabSelected = $j(this.attr.defaultTabSelected).first(), this.attr.defaultTabSelected.length < 1 && (this.attr.defaultTabSelected = this.select("tabSelector").filter("." + this.attr.tabSelectedClass).first()), this.on("click", {
                tabSelector: this.onTabSelect
            }), this.listen("requestReset", this.reset))
        }), this.isTabSelected = function(e) {
            return e.hasClass(this.attr.tabSelectedClass)
        }, this.reset = function() {
            var e = this.attr.defaultTabSelected,
                t = e.data(this.attr.tabLinkAttrName);
            this.switchTab(t), this.broadcast("reset")
        }, this.switchTab = function(t) {
            e.find(this.attr.sectionSelector).each($.proxy(function(e, i) {
                var o = $(i);
                o.toggleClass(this.attr.hideSectionClass, o.data(this.attr.sectionLinkAttrName) !== t)
            }, this)), this.select("tabSelector").each($.proxy(function(e, i) {
                var o = $(i);
                o.toggleClass(this.attr.tabSelectedClass, o.data(this.attr.tabLinkAttrName) === t)
            }, this)), this.broadcast("switch");
        }, this.onTabSelect = function(e) {
            e.preventDefault();
            var t = $j(e.target).closest(this.attr.tabSelector),
                i = t.data(this.attr.tabLinkAttrName);
            "string" != typeof i || this.isTabSelected(t) || this.switchTab(i)
        }
    }, MixinEventUtils);
$gr.shared.toggleQaForm = flight.component(function() {
        this.defaultAttrs({
            answerFormSelector: ".answerForm",
            answerActionSelector: ".answerQuestionAction",
            unansweredQuestionSelector: ".unansweredQuestion"
        }), this.after("initialize", function() {
            this.on("click", {
                answerActionSelector: this.uiShowForm
            })
        }), this.uiShowForm = function(e) {
            var t = $j(e.target);
            e.preventDefault(), $j.ajax({
                url: t.data("get-form-url"),
                type: "get",
                data: {
                    format: "json"
                },
                context: this,
                success: function(e) {
                    t.parents(this.attr.unansweredQuestionSelector).find(this.attr.answerFormSelector).html(e.content_html), $gr.communityQA.readerQAForm.attachTo(".js-readerQAForm"), $gr.shared.notification.attachTo(".js-notification"), $gr.communityQA.shareToggle.attachTo(".js-shareToggle")
                }
            })
        }
    }, MixinEventUtils), $gr.shared.tooltip = flight.component(function() {
        this.defaultAttrs({
            tooltipCaretSelector: ".tooltipCaret",
            tooltipSelector: ".js-tooltip",
            defaultTooltipClass: "tooltipDefault",
            htmlRetrievedEvent: "tooltipHtmlRetrieved.dataTooltip"
        }), this.after("initialize", function() {
            this.tooltipHtml = null, this.$node.data("synchronous") ? this.$node.data("click") ? (this.$node.click($j.proxy(this.showTooltip, this)), $j(document).click($j.proxy(function(e) {
                this.$node.is(e.target) || 0 !== this.$node.has(e.target).length || this.hideTooltip()
            }, this)), this.$node.find(".hideTooltip").click($j.proxy(this.hideTooltip, this))) : this.$node.hover($j.proxy(this.showTooltipOnHover, this), $j.proxy(this.hideTooltipOnHover, this)) : this.listen(this.attr.htmlRetrievedEvent, this.attachTooltipHoverEvents)
        }), this.attachTooltipHoverEvents = function(e, t) {
            var i = this.$node.data("resource-type") + "." + this.$node.data("resource-id");
            null === this.tooltipHtml && "undefined" != typeof t.tooltips[i] && (this.$node.find("a, img").removeAttr("title"), this.$node.removeAttr("title"), this.tooltipHtml = t.tooltips[i], this.$node.hover($j.proxy(this.showTooltipOnHover, this), $j.proxy(this.hideTooltipOnHover, this)))
        }, this.showTooltipOnHover = function() {
            HoverIntent.onEnterIntent(this, this.showTooltip, this, 750)
        }, this.showTooltip = function() {
            var e = this.select("tooltipSelector");
            e.length ? e.show() : this.constructTooltip()
        }, this.hideTooltipOnHover = function() {
            HoverIntent.onLeaveIntent(this, this.hideTooltip)
        }, this.hideTooltip = function(e) {
            this.select("tooltipSelector").hide(), void 0 !== e && e.stopPropagation()
        }, this.constructTooltip = function() {
            this.$node.append(this.tooltipHtml);
            var e = 10,
                t = this.select("tooltipSelector");
            if ("bottom" === this.$node.data("placement")) {
                t.find(this.attr.tooltipCaretSelector).addClass("tooltipCaret--top");
                var i = (this.$node.height() + e).toString();
                t.css("left", "0px"), t.css("top", i + "px")
            } else if ("bottom-left" === this.$node.data("placement")) {
                t.find(this.attr.tooltipCaretSelector).addClass("tooltipCaret--top-right");
                var o = (this.$node.height() + e).toString(),
                    n = (this.$node.width() - 3 * e).toString();
                t.css("right", n + "px"), t.css("top", o + "px")
            } else if ("left" === this.$node.data("placement")) {
                t.find(this.attr.tooltipCaretSelector).addClass("tooltipCaret--right");
                var s = (this.$node.width() + e).toString();
                t.css("right", s + "px"), t.css("top", "0px")
            } else {
                t.find(this.attr.tooltipCaretSelector).addClass("tooltipCaret--left");
                var a = (this.$node.width() + e).toString();
                t.css("left", a + "px"), t.css("top", "0px")
            }
            this.broadcast("tooltipHtmlConstructed")
        }
    }, MixinEventUtils),
    /*
    Component Name:
      trackClick

    Description:
      Flight component for tracking clicks on mobile web components. Posts to
      'track/track_click' with feature. Attached to '.js-trackClick'

    Requires:
      - jQuery
      - flight

    Expects:
      - a $node with data: { feature }

    Example Usage (haml):
     button.js-trackClick{ data: { feature: "CustomNewsfeedMobile_headline" } }
        Click me to post!
    */
    $gr.shared.trackClick = flight.component(function() {
        this.onClick = function() {
            var e = this.$node.data("feature");
            e && $j.post("/track/track_click", {
                feature: e
            })
        }, this.after("initialize", function() {
            this.on("click", this.onClick)
        })
    }), $gr.shared.twitterCallbacks = flight.component(function() {
        var e = "twitterCallbacksComponent";
        this.defaultAttrs({
            channel: e,
            componentName: e
        }), this.after("initialize", function() {
            twttr.ready(function(e) {
                e.events.bind("tweet", t)
            })
        });
        var t = function(e) {
            var t = "twitter_update_pushed",
                i = $j("#tracker").data("track-tweet");
            "undefined" == typeof i && (i = $j(e.target.parentElement).data("gr-tracker-id")), i && "undefined" != typeof i && (t = [t, i]), $j.ajax({
                url: "/track/track",
                type: "GET",
                data: {
                    tid: t
                }
            })
        }
    }), $gr.shared.twitterDialog = flight.component(function() {
        this.defaultAttrs({
            counterSelector: ".characterCounter",
            textareaSelector: ".characterCountArea",
            tweetViaGrSelector: ".tweetViaGr",
            shareButtonSelector: ".button",
            warningClass: "warning",
            keystrokeDebounceDuration: 100,
            maxUrlLengthAfterShortening: 23,
            tweetMaxLength: 140
        }), this.after("initialize", function() {
            var e = this.select("textareaSelector");
            this.tweetUrlLength = e.data("append-url") ? this.attr.maxUrlLengthAfterShortening : 0, this.tweetViaLength = "true" === this.select("tweetViaGrSelector").val() ? " via @goodreads".length : 0, this.on("keyup", flight.utils.debounce(this.uiUpdateCounter, this.attr.keystrokeDebounceDuration)), this.uiUpdateCounter()
        }), this.uiUpdateCounter = function() {
            var e = this.getNumCharsRemaining(),
                t = this.select("counterSelector");
            0 > e ? (t.addClass(this.attr.warningClass), this.uiEnableButton(!1)) : (t.removeClass(this.attr.warningClass), this.uiEnableButton(!0)), 0 === this.select("textareaSelector").val().length && this.uiEnableButton(!1), t.html(e + " characters left")
        }, this.uiEnableButton = function(e) {
            this.select("shareButtonSelector").prop("disabled", !e)
        }, this.getNumCharsRemaining = function() {
            var e = this.select("textareaSelector").val(),
                t = e.replace(/[\s]?(https?:\/\/[^\s]+)/g, "").replace(" via @goodreads", "").length;
            return this.attr.tweetMaxLength - t - this.tweetUrlLength - 1 - this.tweetViaLength
        }
    }), $gr.shared.updateFiltersForm = flight.component(function() {
        this.defaultAttrs({
            updateFiltersFormSelector: ".js-updateFiltersForm",
            updateTypeFiltersSelector: ".js-updateTypeFilters",
            updateItemSelector: "input[name=update_item]:checked",
            updateScopeSelector: "input[name=update_scope]:checked",
            authorBlogPostsSelector: "input[name=author_blog_posts][type=checkbox]",
            authorBlogPostsHiddenSelector: "input[name=author_blog_posts][type=hidden]",
            hpUpdateFilterSelector: "#hp_update_filter"
        }), this.after("initialize", function() {
            this.on("submit", this.handleSubmit)
        }), this.handleSubmit = function(e) {
            this.setUpdateFilterType(), this.setAuthorBlogPostsFlag(), this.broadcast("dataFiltersUpdated"), this.broadcast("dataUpdatesLoading")
        }, this.setUpdateFilterType = function() {
            var e = this.select("updateScopeSelector").val();
            e.blank() && (e = "friends");
            var t = this.select("updateItemSelector").val(),
                i = e;
            t.blank() || (i = i + "-" + t), this.select("hpUpdateFilterSelector").val(i)
        }, this.setAuthorBlogPostsFlag = function() {
            this.select("authorBlogPostsSelector").prop("checked") ? this.select("authorBlogPostsHiddenSelector").val("1") : this.select("authorBlogPostsHiddenSelector").val("0")
        }
    }, MixinEventUtils, withFormSubmission), $gr.shared.videoInline = flight.component(function() {
        this.defaultAttrs({
            height: 315,
            width: 560
        }), this.after("initialize", function() {
            this.on(".js-videoInline > a", "click", this.playVideo)
        }), this.playVideo = function(e) {
            var t = this.$node.data(),
                i = t.height || this.attr.height,
                o = t.width || this.attr.width;
            if ("youtube" == t.source) {
                var n = $j("<iframe>");
                n.attr({
                    width: o,
                    height: i,
                    src: "//www.youtube.com/embed/" + t.sourceId + "?autoplay=1",
                    frameborder: 0,
                    allowfullscreen: ""
                }), this.$node.html(n), $j.post("/videos/update_views/" + t.goodreadsId), t.userChallengeId && $j.post("/user_challenges/watched_video", {
                    id: t.userChallengeId
                }), e.preventDefault()
            }
        }
    });
var ViewportOverlay = flight.component(function() {
        var e, t = $gr && $gr.touch ? $gr.touch : "click",
            i = "viewportOverlay",
            o = "overlayId",
            n = "overlay-scroll-lock",
            s = {};
        this.defaultAttrs({
            channel: i,
            componentName: i,
            showClass: "show",
            disableDirectHide: !1
        }), this.after("initialize", function() {
            e || (e = $j("<div/>").addClass(i)), this.listen("show", this.onShow), this.listen("hide", this.onHide), this.listen("create", this.onCreate), this.listen("afterShow", function(e, t) {
                this.toggleOverlayScrollSuppression(t.overlayId, !0)
            }), this.listen("beforeHide", function(e, t) {
                this.toggleOverlayScrollSuppression(t.overlayId, !1)
            })
        }), this.hide = function(e) {
            var t = this.getOverlayById(e);
            t && (this.broadcast("beforeHide", {
                overlayId: e
            }), t.removeClass(this.attr.showClass), this.broadcast("afterHide", {
                overlayId: e
            }))
        }, this.show = function(e) {
            var t = this.getOverlayById(e);
            t && (this.broadcast("beforeShow", {
                overlayId: e
            }), t.addClass(this.attr.showClass), this.broadcast("afterShow", {
                overlayId: e
            }))
        }, this.onCreate = function(e, t) {
            if (t && t[o]) {
                var i = t[o];
                i ? this.getOverlayById(i) ? this.broadcastError("overlay already exists for id: " + i) : this.createOverlay(i, t.attr || null) : this.broadcastError("could not create overlay, no id specified")
            }
        }, this.onHide = function(e, t) {
            t && t[o] && this.hide(t[o])
        }, this.onShow = function(e, t) {
            t && t[o] && this.show(t[o])
        }, this.createOverlay = function(i, o) {
            var a = o || {},
                r = e.clone();
            r.attr("id", i), "string" == typeof a.className && r.addClass(a.className), a.disableDirectHide || r.on(t, $j.proxy(function(e) {
                e.preventDefault(), this.hide()
            }, this)), a.disableScrollLock || r.data(n, !0), r.appendTo(document.body), s[i] = r
        }, this.getOverlayById = function(e) {
            return s[e] || null
        }, this.toggleOverlayScrollSuppression = function(e, t) {
            var i = this.getOverlayById(e);
            i && i.data(n) && this.trigger(document, t ? "enableScrollLock" : "disableScrollLock")
        }
    }, MixinEventUtils),
    ViewportServices = flight.component(function() {
        var e = "viewportServices";
        this.defaultAttrs({
                channel: e
            }), this.after("initialize", function() {
                return Modernizr.touchevents ? (this.initializeScrollLockMode(), this.on("hideBrowserAddressBar", function(e, t) {
                    var i = t === !0;
                    if (i && /\bAndroid\s+2\.(2|3)/.test(navigator.userAgent)) window.scrollTo(0, 0);
                    else {
                        var o = i ? 0 : window.scrollY;
                        window.scrollTo(0, o + 1), setTimeout(function() {
                            window.scrollTo(0, o - 1)
                        }, 0)
                    }
                }), void this.on("hideSmartAppBanner", function() {
                    var e = $j(window).innerHeight() - window.innerHeight;
                    e > 0 && window.scrollTo(0, e)
                })) : this.teardown()
            }),
            /**
             *  Initialize "scroll lock mode" service.
             *  This mode, when enabled, temporarily prevents user scrolling within the
             *  browser viewport. This can be useful for overlays that cover a portion or
             *  all of the browser viewport, in which case viewport scrolling can be
             *  detrimental to the UX.
             *  Note: USE WITH EXTREME CAUTION!
             *  @method initializeScrollLockMode
             */
            this.initializeScrollLockMode = function() {
                this.on(document, "enableScrollLock", this.onEnableScrollLock), this.on(document, "disableScrollLock", this.onDisableScrollLock)
            }, this.onDisableScrollLock = function() {
                this.toggleScrollLockMode(!1)
            }, this.onEnableScrollLock = function(e, t) {
                this.toggleScrollLockMode(!0, t)
            }, this.toggleScrollLockMode = function(e, t) {
                var i, o = {};
                "string" == typeof t ? (t = t.toLowerCase(), "x" === t ? o = {
                    drag_block_horizontal: !0
                } : "y" === t && (o = {
                    drag_block_vertical: !0
                }), i = $j.noop) : i = function(e) {
                    e.preventDefault()
                };
                var n = $j(document.body).hammer(o),
                    s = this.getSafeEventName("touchmove");
                e === !0 ? n.on(s, i) : n.off(s)
            }
    }, MixinEventUtils),
    WantToReadButton = flight.component(function() {
        var e = "wtrButton",
            t = /^\s*$/,
            i = /review\/destroy/;
        this.defaultAttrs({
            buttonSelector: ".jsWTR",
            buttonActiveSelector: ".jsWTR.wtrSelected",
            buttonInactiveSelector: ".jsWTR:not(.wtrSelected)",
            menuCatalystSelector: ".areaSecondary",
            buttonLoadingClass: "wtrLoading",
            buttonSelectedClass: "wtrSelected",
            dataAttrParamShelf: "async-param-shelf",
            dataAttrUrlAdd: "async-url-add",
            dataAttrUrlDelete: "async-url-delete",
            dataAttrUrlMore: "url-more",
            dataAttrCurrentShelf: "current-shelf",
            dataAttrReftag: "ref",
            eventAttrAction: "actionType",
            eventAttrButtonId: "buttonId",
            eventAttrIsBookShelved: "isBookShelved",
            eventAttrShelfName: "shelfName",
            eventAttrSeeMoreUrl: "moreUrl",
            eventAttrReftag: "ref",
            channel: e,
            componentName: e
        }), this.after("initialize", function() {
            var e = [this.attr.buttonInactiveSelector + " " + this.attr.menuCatalystSelector, this.attr.buttonActiveSelector].join(",");
            this.$node.on("click", e, $j.proxy(function(e) {
                    var t = $j(e.target).closest(this.attr.buttonSelector);
                    this.requestMenuShow(t)
                }, this)), this.on(document, "listItemSelected.wtrButtonMenu", this.onMenuItemSelected), this.listen("saveRatingSuccess.ratingStars", this.onRateSuccess), this.listen("saveSuccess.ratingComponent", function(e, t) {
                    t.response && this.onRateSuccess(e, t.response)
                }),
                // dynamic! It's a Rails async form/link. We need to listen at the
                this.$node.on("ajax:success", this.attr.buttonSelector, $j.proxy(function(e, t) {
                    this.onSaveSuccess(t)
                }, this)), this.$node.on("ajax:error", this.attr.buttonSelector, $j.proxy(function(e, t) {
                    var i = $j(e.target).closest(this.attr.buttonSelector);
                    this.toggleButtonLoadingState(i, !1), this.onSaveError(t)
                }, this)), this.$node.on("ajax:beforeSend", this.attr.buttonSelector, $j.proxy(function(e) {
                    var t = $j(e.target).closest(this.attr.buttonSelector);
                    this.trigger(document, "shelving.wtrButtonMenu", this.createEventPayload(t)), this.toggleButtonLoadingState(t, !0)
                }, this))
        }), this.requestMenuShow = function(e) {
            e.length && this.trigger(document, "requestShow.wtrButtonMenu", this.createEventPayload(e))
        }, this.toggleButtonLoadingState = function(e, t) {
            e && e.length && e.toggleClass(this.attr.buttonLoadingClass, t)
        }, this.addToShelf = function(e, i) {
            if (e && e.length) {
                var o = e.data(this.attr.dataAttrUrlAdd);
                if (o && !t.test(o)) {
                    this.trigger(document, "shelving.wtrButtonMenu", this.createEventPayload(e));
                    var n = {},
                        s = e.data(this.attr.dataAttrParamShelf);
                    n[s] = i[this.attr.eventAttrShelfName];
                    var a = {
                        ref: i[this.attr.eventAttrReftag]
                    };
                    this.save(this.addUrlParams(o, n), e, a)
                }
            }
        }, this.removeFromShelves = function(e, i) {
            var o = e.data(this.attr.dataAttrUrlDelete);
            if (o && !t.test(o)) {
                var n = i[this.attr.eventAttrReftag],
                    s = {
                        ref: n.replace(/_wtres/, "_wtruns")
                    };
                this.save(o, e, s)
            }
        }, this.save = function(e, o, n) {
            e && !t.test(e) && (this.toggleButtonLoadingState(o, !0), $j.ajax({
                url: e,
                type: "post",
                dataType: "json",
                context: this,
                timeout: 15e3,
                error: this.onSaveError,
                data: n,
                success: function(t) {
                    i.test(e) && this.broadcast("removedFromShelves", {
                        buttonId: this.getButtonId(o)
                    }), this.onSaveSuccess(t)
                },
                complete: function() {
                    this.toggleButtonLoadingState(o, !1)
                }
            }))
        }, this.onMenuItemSelected = function(e, t) {
            var i = this.attr.eventAttrButtonId;
            if ($j.isPlainObject(t) && t[i]) {
                var o = $j("#" + t[i]);
                if (o.length) {
                    var n = t[this.attr.eventAttrAction];
                    switch (n) {
                        case "add":
                            this.addToShelf(o, t);
                            break;
                        case "delete":
                            this.removeFromShelves(o, t);
                            break;
                        default:
                            this.broadcastError("unknown action '" + n + "'")
                    }
                }
            }
        }, this.onSaveError = function(e) {
            this.defer(function() {
                this.authRedirect(e, $j.proxy(function() {
                    var t = "Unknown XHR failure when trying to save book to shelf.";
                    e.status && (t += " , status code " + e.status), this.broadcastError(t)
                }, this))
            }, 500)
        }, this.onRateSuccess = function(e, t) {
            this.updateWtrButtonUI(t)
        }, this.updateWtrButtonUI = function(e) {
            var t = $j(e.html);
            "true" == $j("#reg_path").val() && t.find(".areaSecondary").hide();
            var i = this.getButtonId(t),
                o = $j("#" + i);
            t.length && o.length && o.replaceWith(t)
        }, this.onSaveSuccess = function(e) {
            var i = !1;
            if ($j.isPlainObject(e))
                if (e.ok && "string" == typeof e.html && !t.test(e.html)) this.updateWtrButtonUI(e);
                else {
                    i = !0;
                    var o = e.error || "unknown error when attempting to save";
                    this.broadcastError(o)
                }
            else this.broadcastError("malformed JSON response when trying to save book to shelf");
            i && $j("#flashMessages").trigger("addFlashMessage", ["Your change has not been saved. Please refresh the page any try again.", "error"])
        }, this.addUrlParams = function(e, i) {
            if (!e || t.test(e)) this.broadcastError("baseUrl is null or empty", !0);
            else if ($j.isPlainObject(i)) {
                var o = $j.param(i);
                if (!t.test(o)) {
                    var n = e.indexOf("?") < 0 ? "?" : "&";
                    return e + n + o
                }
            } else this.broadcastError("paramPairs is not an object", !0)
        }, this.createEventPayload = function(e) {
            if (e.length) {
                var t = {};
                return t[this.attr.eventAttrButtonId] = this.getButtonId(e), t[this.attr.eventAttrSeeMoreUrl] = e.data(this.attr.dataAttrUrlMore), t[this.attr.eventAttrIsBookShelved] = e.hasClass(this.attr.buttonSelectedClass), t[this.attr.eventAttrShelfName] = e.data(this.attr.dataAttrCurrentShelf), t[this.attr.eventAttrReftag] = e.data(this.attr.dataAttrReftag), t
            }
        }, this.getButtonId = function(e) {
            return e && e.length ? e.first().attr("id") : void 0
        }
    }, MixinEventUtils, MixinAuthRedirect),
    WantToReadButtonMenu = flight.component(function() {
        var e = "wtrButtonMenu",
            t = /^\s*$/;
        this.defaultAttrs({
            menuSelector: "#wtrButtonMenu",
            moreSelector: ".more",
            showDeleteOptionClass: "showDeleteOption",
            dataAttrActionType: "action",
            dataAttrShelfName: "shelf",
            dataAttrReftag: "ref",
            dataAttrDeleteAction: "delete",
            channel: e,
            componentName: e
        }), this.after("initialize", function() {
            this.listen("requestShow", this.onRequestMenuShow), this.onSlideUpEvent("afterHide", this.onHideMenu), this.onSlideUpEvent("listItemSelected", this.onMenuItemSelected), this.on("click", {
                moreSelector: function(e) {
                    e.preventDefault();
                    var t = $j(e.target).attr("href");
                    this.hideSlideUpMenu(), this.defer(function() {
                        location.href = t
                    })
                }
            })
        }), this.onHideMenu = function(e) {
            this.manageShelfVisualSelection(), this.updateMoreLink()
        }, this.onMenuItemSelected = function(e, t) {
            var i = $j(t).first();
            i.length && i.data(this.attr.dataAttrActionType) && (i.data(this.attr.dataAttrActionType) === this.attr.dataAttrDeleteAction ? this.onDeleteRequest(i) : this.broadcastSelection(i)), this.hideSlideUpMenu()
        }, this.broadcastSelection = function(e) {
            this.broadcast("listItemSelected", {
                buttonId: this.getButtonId(),
                actionType: e.data(this.attr.dataAttrActionType),
                shelfName: e.data(this.attr.dataAttrShelfName),
                ref: e.data(this.attr.dataAttrReftag)
            })
        }, this.onDeleteRequest = function(e) {
            this.trigger(document, "requestShow.mobileConfirmationMenu"), this.on(document, "listItemSelected.mobileConfirmationMenu", $j.proxy(function(t, i) {
                if ($j.isPlainObject(i)) {
                    switch (i.action) {
                        case this.attr.dataAttrDeleteAction:
                            this.broadcastSelection(e);
                            break;
                        default:
                            this.onRequestMenuShow({}, this.getShowMenuData())
                    }
                    this.off(document, "listItemSelected.mobileConfirmationMenu")
                }
            }, this))
        }, this.onRequestMenuShow = function(e, i) {
            var o;
            $j.isPlainObject(i) && i.buttonId ? o = i.buttonId : "string" == typeof i && (o = i), o && !t.test(o) ? (this.setShowMenuData(i), this.manageShelfVisualSelection(i.shelfName), this.updateMoreLink(i.moreUrl), $j(this.attr.menuSelector).toggleClass(this.attr.showDeleteOptionClass, i.isBookShelved), this.updateReftags(i.ref), this.showSlideUpMenu()) : this.broadcastError("cannot show, no button id specified")
        }, this.getShowMenuData = function() {
            return this.showMenuData || {}
        }, this.setShowMenuData = function(e) {
            this.showMenuData = e || {}
        }, this.clearButtonId = function() {
            this.setButtonId(null)
        }, this.getButtonId = function() {
            return this.getShowMenuData().buttonId
        }, this.manageShelfVisualSelection = function(e) {
            var t = this.getListItems();
            if (t && t.length) {
                var i = '[data-shelf="' + e + '"]';
                t.each($j.proxy(function(e, t) {
                    var o = $j(t);
                    o.toggleClass(this.attr.slideUpItemSelectedClass, o.is(i))
                }, this))
            }
        }, this.setButtonId = function(e) {
            this.getShowMenuData().buttonId = e
        }, this.updateMoreLink = function(e) {
            var i = "#";
            ("string" != typeof e || t.test(e)) && (e = i), this.select("moreSelector").attr("href", e).css("visibility", e === i ? "" : "visible")
        }, this.updateReftags = function(e) {
            this.getListItems().each(function(t, i) {
                var o = $j(i);
                o.attr("data-ref", e + "_wtres")
            })
        }
    }, MixinEventUtils, withSlideUpMenu);
$gr.shared.yearInBooksUserBlurb = flight.component(MixinEventUtils, function() {
    const e = 500;
    this.after("initialize", function() {
        function t(e) {
            return function() {
                $j.get("/year_in_books/blurb/show/" + s + "/" + a, function(t) {
                    var i = t.inputText,
                        o = t.filteredText;
                    "" != i && ($j("#yearInBooksUserBlurbId").text(i), $j(document).trigger("yearInBooksUserBlurb:change", {
                        filteredText: o,
                        isFullTextShown: e
                    }), document.getElementById("toggleUserBlurb").style.cursor = "pointer")
                })
            }
        }

        function i(e, t) {
            var i = t;
            return function() {
                i = !i, $j("#yearInBooksUserBlurbTextId").html(o(e, i)), $j("#toggleUserBlurb").html(i ? "<a>(less)</a>" : "<a>...more</a>")
            }
        }

        function o(e, t) {
            return t ? $j.parseHTML(e) : $j.parseHTML(n(e))
        }

        function n(t) {
            return t.length > e ? t.slice(0, e) + " " : t
        }
        var s = this.$node.data("year"),
            a = this.$node.data("user-id"),
            r = !1;
        t(r)(), $j(document).on("yearInBooksUserBlurb:change", function(t, n) {
            var s = n.inputText,
                a = n.filteredText;
            r = n.isFullTextShown, $j("#toggleUserBlurb").remove(), a.length > e && ($j(".yearInBooksUserBlurbInputWidget").append(r ? "<span id='toggleUserBlurb'> <a>(less)</a> </span>" : "<span id='toggleUserBlurb'> <a>...more</a> </span>"), $j("#toggleUserBlurb").on("click", i(a, r))), $j("#yearInBooksUserBlurbId").text(s), $j("#yearInBooksUserBlurbTextId").html(o(a, r))
        }), $j("#year_in_books_user_blurb_submit").on("click", function() {
            var e = $j("#yearInBooksUserBlurbId").val();
            r = !0, $j.post("/year_in_books/blurb/update/" + s + "/" + a, {
                input_text: e,
                year: s
            }, t(r))
        })
    })
});