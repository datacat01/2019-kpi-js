! function(t) {
    "use strict";
    var e, i, l, o, r, d, n, c, h, p, _, g, b, x, u, v, y, A, f, k, L, C, S, m, z, w, B, j, R, Z, H = {};
    t.each(t(".fusion-chart"), function(a, s) {
        if (l = void 0 !== t(this).data("type") ? t(this).data("type") : "line", o = void 0 !== t(this).data("border_size") ? t(this).data("border_size") : 1, r = void 0 !== t(this).data("border_type") ? t(this).data("border_type") : "smooth", d = void 0 !== t(this).data("chart_fill") ? t(this).data("chart_fill") : "yes", f = void 0 !== t(this).data("x_axis_label") ? t(this).data("x_axis_label") : "", k = void 0 !== t(this).data("y_axis_label") ? t(this).data("y_axis_label") : "", n = [], c = void 0 !== t(this).data("show_tooltips") ? t(this).data("show_tooltips") : "yes", b = [], u = [], v = x = "", y = void 0 !== t(this).data("chart_axis_text_color") ? t(this).data("chart_axis_text_color") : null, A = void 0 !== t(this).data("chart_gridline_color") ? t(this).data("chart_gridline_color") : null, _ = [], g = void(B = 0) !== t(this).data("chart_legend_position") ? t(this).data("chart_legend_position") : "off", L = void 0 !== t(this).data("chart_point_style") ? t(this).data("chart_point_style") : "", C = void 0 !== t(this).data("chart_point_size") ? t(this).data("chart_point_size") : "", S = void 0 !== t(this).data("chart_point_border_color") ? t(this).data("chart_point_border_color") : "", m = void 0 !== t(this).data("chart_point_bg_color") ? t(this).data("chart_point_bg_color") : "", !1, Z = t("body").hasClass("rtl"), z = {
                responsive: !0,
                tooltips: {
                    enabled: !0
                },
                scales: {
                    xAxes: [{
                        display: !(H = {
                            labels: [],
                            datasets: []
                        })
                    }],
                    yAxes: [{
                        display: !1
                    }]
                },
                legend: {
                    labels: {},
                    display: !0
                },
                layout: {
                    padding: {
                        left: 5,
                        right: 5,
                        top: 5,
                        bottom: 5
                    }
                }
            }, i = t(this).find(".fusion-chart-dataset"), 0 !== (w = t(i).length)) {
            for ((5 < C || 5 < o) && (z.layout.padding.top = C < o ? o : C), "polarArea" !== l && "radar" !== l || (z.scale = {}), (R = "pie" === l || "doughnut" === l || "polarArea" === l || ("bar" === l || "horizontalBar" === l) && 1 === i.length) && (void 0 !== t(this).data("bg_colors") && (b = t(this).data("bg_colors").toString().split("|")), void 0 !== t(this).data("border_colors") && (u = t(this).data("border_colors").toString().split("|")), void 0 !== t(this).data("x_axis_labels") && (_ = t(this).data("x_axis_labels").toString().split("|"))), "off" === d && (d = !1), z.tooltips.enabled = "yes" === c, j = 0; j < w; j++) p = "", R || void 0 !== t(i[j]).data("label") && (p = t(i[j]).data("label").toString().trim(), H.labels.push(p), _.push(p)), R || (void 0 !== t(i[j]).data("background_color") && b.push(t(i[j]).data("background_color").toString().trim()), void 0 !== t(i[j]).data("border_color") && u.push(t(i[j]).data("border_color").toString().trim())), void 0 !== t(i[j]).data("values") && (n[j] = t(i[j]).data("values").toString().split("|"), !R && B < n[j].length && (B = n[j].length));
            if (void 0 !== t(this).data("x_axis_labels") ? H.labels = t(this).data("x_axis_labels").toString().split("|") : H.labels = "pie" === l || "doughnut" === l || "polarArea" === l ? new Array(i.length) : new Array(B), !0 === Z)
                for (H.labels = H.labels.reverse(), b = b.reverse(), u = u.reverse(), _ = _.reverse(), a = 0; a < n.length; a++) n[a] = n[a].reverse();
            for (j = 0; j < w; j++) h = [], R ? (x = b, v = u, h = n[j], p = void 0 !== t(i[j]).data("label") ? t(i[j]).data("label").toString().trim() : "") : (x = void 0 !== b[j] ? b[j] : "", v = void 0 !== u[j] ? u[j] : "", h = n[j], p = void 0 !== _[j] && !0 === Array.isArray(_) ? _[j] : ""), H.datasets.push({
                label: p,
                data: h,
                backgroundColor: x,
                borderColor: v,
                borderWidth: o
            }), "line" === l && (H.datasets[j].fill = d, "stepped" === r && (H.datasets[j].steppedLine = !0), "" !== L && (H.datasets[j].pointStyle = L), "" !== C && (H.datasets[j].pointRadius = C, H.datasets[j].pointHoverRadius = C), "" !== S && (H.datasets[j].pointBorderColor = S), "" !== m && (H.datasets[j].pointBackgroundColor = m));
            R && (H.labels = _), "bar" !== l && "line" !== l || (z.scales.yAxes[0].ticks = {
                beginAtZero: !0
            }), "horizontalBar" === l && (z.scales.xAxes[0].ticks = {
                beginAtZero: !0
            }), "" !== f && "pie" !== l && "doughnut" !== l && "polarArea" !== l && "radar" !== l && (z.scales.xAxes[0].display = !0, z.scales.xAxes[0].scaleLabel = {
                display: !0,
                labelString: f
            }, null !== y && (z.scales.xAxes[0].scaleLabel.fontColor = y)), "" !== k && "pie" !== l && "doughnut" !== l && "polarArea" !== l && "radar" !== l && (z.scales.yAxes[0].display = !0, z.scales.yAxes[0].scaleLabel = {
                display: !0,
                labelString: k
            }, null !== y && (z.scales.yAxes[0].scaleLabel.fontColor = y), !0 === Z && "horizontalBar" !== l && (z.scales.yAxes[0].position = "right")), "line" === l && "non_smooth" === r && (z.elements = {
                line: {
                    tension: 1e-6
                }
            }), z.legend.display = !1, z.legendCallback = function(a) {
                var s, t, e = [];
                for (e.push('<ul class="fusion-chart-legend-' + a.id + '">'), s = 0; s < _.length; s++) t = void 0 !== b[s] ? b[s] : "transparent", e.push('<li><span style="background-color:' + t + '">'), _[s] && e.push(_[s]), e.push("</span></li>");
                return e.push("</ul>"), e.join("")
            }, null !== A && ("polarArea" === l || "radar" === l ? (void 0 === z.scale.gridLines && (z.scale.gridLines = {}, z.scale.angleLines = {}), z.scale.gridLines.color = A, z.scale.angleLines.color = A) : (void 0 === z.scales.yAxes[0].gridLines && (z.scales.yAxes[0].gridLines = {}), void 0 === z.scales.xAxes[0].gridLines && (z.scales.xAxes[0].gridLines = {}), z.scales.xAxes[0].gridLines.color = A, z.scales.yAxes[0].gridLines.color = A)), null !== y && ("polarArea" === l || "radar" === l ? (void 0 === z.scale.ticks && (z.scale.ticks = {}), z.scale.ticks.fontColor = y) : (void 0 === z.scales.yAxes[0].ticks && (z.scales.yAxes[0].ticks = {}), void 0 === z.scales.xAxes[0].ticks && (z.scales.xAxes[0].ticks = {}), z.scales.xAxes[0].ticks.fontColor = y, z.scales.yAxes[0].ticks.fontColor = y)), e = new Chart(t(this).find("canvas").get(0), {
                type: l,
                data: H,
                options: z
            }), "off" !== g && t(this).find(".fusion-chart-legend-wrap").html(e.generateLegend())
        }
    })
}(jQuery);