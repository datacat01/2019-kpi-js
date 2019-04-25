define("@ta/media.common", ["@ta/input.drop-zone", "@ta/common.global"], function(e, t) {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) n.d(r, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = "./packages/media/common/common.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js": function(e, t, n) {
            "use strict";

            function r(e) {
                if (Array.isArray(e)) return e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, t, n) {
            "use strict";

            function r(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function o(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(e)
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Object(r.a)(e, t)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js": function(e, t, n) {
            "use strict";

            function r() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), o.forEach(function(t) {
                        Object(r.a)(e, t, n[t])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function i(e, t) {
                return !t || "object" !== Object(r.a)(t) && "function" != typeof t ? Object(o.a)(e) : t
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                return (r = Object.setPrototypeOf || function e(t, n) {
                    return t.__proto__ = n, t
                })(e, t)
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");

            function i(e, t) {
                return Object(r.a)(e) || function n(e, t) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(e, t) || Object(o.a)()
            }
            n.d(t, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function e(t) {
                    return r(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : r(t)
                })(e)
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/exif-js/exif.js": function(e, t, r) {
            var o;
            (function() {
                var r = !1,
                    i = function(e) {
                        return e instanceof i ? e : this instanceof i ? void(this.EXIFwrapped = e) : new i(e)
                    };
                e.exports && (t = e.exports = i), t.EXIF = i;
                var a = i.Tags = {
                        36864: "ExifVersion",
                        40960: "FlashpixVersion",
                        40961: "ColorSpace",
                        40962: "PixelXDimension",
                        40963: "PixelYDimension",
                        37121: "ComponentsConfiguration",
                        37122: "CompressedBitsPerPixel",
                        37500: "MakerNote",
                        37510: "UserComment",
                        40964: "RelatedSoundFile",
                        36867: "DateTimeOriginal",
                        36868: "DateTimeDigitized",
                        37520: "SubsecTime",
                        37521: "SubsecTimeOriginal",
                        37522: "SubsecTimeDigitized",
                        33434: "ExposureTime",
                        33437: "FNumber",
                        34850: "ExposureProgram",
                        34852: "SpectralSensitivity",
                        34855: "ISOSpeedRatings",
                        34856: "OECF",
                        37377: "ShutterSpeedValue",
                        37378: "ApertureValue",
                        37379: "BrightnessValue",
                        37380: "ExposureBias",
                        37381: "MaxApertureValue",
                        37382: "SubjectDistance",
                        37383: "MeteringMode",
                        37384: "LightSource",
                        37385: "Flash",
                        37396: "SubjectArea",
                        37386: "FocalLength",
                        41483: "FlashEnergy",
                        41484: "SpatialFrequencyResponse",
                        41486: "FocalPlaneXResolution",
                        41487: "FocalPlaneYResolution",
                        41488: "FocalPlaneResolutionUnit",
                        41492: "SubjectLocation",
                        41493: "ExposureIndex",
                        41495: "SensingMethod",
                        41728: "FileSource",
                        41729: "SceneType",
                        41730: "CFAPattern",
                        41985: "CustomRendered",
                        41986: "ExposureMode",
                        41987: "WhiteBalance",
                        41988: "DigitalZoomRation",
                        41989: "FocalLengthIn35mmFilm",
                        41990: "SceneCaptureType",
                        41991: "GainControl",
                        41992: "Contrast",
                        41993: "Saturation",
                        41994: "Sharpness",
                        41995: "DeviceSettingDescription",
                        41996: "SubjectDistanceRange",
                        40965: "InteroperabilityIFDPointer",
                        42016: "ImageUniqueID"
                    },
                    s = i.TiffTags = {
                        256: "ImageWidth",
                        257: "ImageHeight",
                        34665: "ExifIFDPointer",
                        34853: "GPSInfoIFDPointer",
                        40965: "InteroperabilityIFDPointer",
                        258: "BitsPerSample",
                        259: "Compression",
                        262: "PhotometricInterpretation",
                        274: "Orientation",
                        277: "SamplesPerPixel",
                        284: "PlanarConfiguration",
                        530: "YCbCrSubSampling",
                        531: "YCbCrPositioning",
                        282: "XResolution",
                        283: "YResolution",
                        296: "ResolutionUnit",
                        273: "StripOffsets",
                        278: "RowsPerStrip",
                        279: "StripByteCounts",
                        513: "JPEGInterchangeFormat",
                        514: "JPEGInterchangeFormatLength",
                        301: "TransferFunction",
                        318: "WhitePoint",
                        319: "PrimaryChromaticities",
                        529: "YCbCrCoefficients",
                        532: "ReferenceBlackWhite",
                        306: "DateTime",
                        270: "ImageDescription",
                        271: "Make",
                        272: "Model",
                        305: "Software",
                        315: "Artist",
                        33432: "Copyright"
                    },
                    u = i.GPSTags = {
                        0: "GPSVersionID",
                        1: "GPSLatitudeRef",
                        2: "GPSLatitude",
                        3: "GPSLongitudeRef",
                        4: "GPSLongitude",
                        5: "GPSAltitudeRef",
                        6: "GPSAltitude",
                        7: "GPSTimeStamp",
                        8: "GPSSatellites",
                        9: "GPSStatus",
                        10: "GPSMeasureMode",
                        11: "GPSDOP",
                        12: "GPSSpeedRef",
                        13: "GPSSpeed",
                        14: "GPSTrackRef",
                        15: "GPSTrack",
                        16: "GPSImgDirectionRef",
                        17: "GPSImgDirection",
                        18: "GPSMapDatum",
                        19: "GPSDestLatitudeRef",
                        20: "GPSDestLatitude",
                        21: "GPSDestLongitudeRef",
                        22: "GPSDestLongitude",
                        23: "GPSDestBearingRef",
                        24: "GPSDestBearing",
                        25: "GPSDestDistanceRef",
                        26: "GPSDestDistance",
                        27: "GPSProcessingMethod",
                        28: "GPSAreaInformation",
                        29: "GPSDateStamp",
                        30: "GPSDifferential"
                    },
                    l = i.IFD1Tags = {
                        256: "ImageWidth",
                        257: "ImageHeight",
                        258: "BitsPerSample",
                        259: "Compression",
                        262: "PhotometricInterpretation",
                        273: "StripOffsets",
                        274: "Orientation",
                        277: "SamplesPerPixel",
                        278: "RowsPerStrip",
                        279: "StripByteCounts",
                        282: "XResolution",
                        283: "YResolution",
                        284: "PlanarConfiguration",
                        296: "ResolutionUnit",
                        513: "JpegIFOffset",
                        514: "JpegIFByteCount",
                        529: "YCbCrCoefficients",
                        530: "YCbCrSubSampling",
                        531: "YCbCrPositioning",
                        532: "ReferenceBlackWhite"
                    },
                    c = i.StringValues = {
                        ExposureProgram: {
                            0: "Not defined",
                            1: "Manual",
                            2: "Normal program",
                            3: "Aperture priority",
                            4: "Shutter priority",
                            5: "Creative program",
                            6: "Action program",
                            7: "Portrait mode",
                            8: "Landscape mode"
                        },
                        MeteringMode: {
                            0: "Unknown",
                            1: "Average",
                            2: "CenterWeightedAverage",
                            3: "Spot",
                            4: "MultiSpot",
                            5: "Pattern",
                            6: "Partial",
                            255: "Other"
                        },
                        LightSource: {
                            0: "Unknown",
                            1: "Daylight",
                            2: "Fluorescent",
                            3: "Tungsten (incandescent light)",
                            4: "Flash",
                            9: "Fine weather",
                            10: "Cloudy weather",
                            11: "Shade",
                            12: "Daylight fluorescent (D 5700 - 7100K)",
                            13: "Day white fluorescent (N 4600 - 5400K)",
                            14: "Cool white fluorescent (W 3900 - 4500K)",
                            15: "White fluorescent (WW 3200 - 3700K)",
                            17: "Standard light A",
                            18: "Standard light B",
                            19: "Standard light C",
                            20: "D55",
                            21: "D65",
                            22: "D75",
                            23: "D50",
                            24: "ISO studio tungsten",
                            255: "Other"
                        },
                        Flash: {
                            0: "Flash did not fire",
                            1: "Flash fired",
                            5: "Strobe return light not detected",
                            7: "Strobe return light detected",
                            9: "Flash fired, compulsory flash mode",
                            13: "Flash fired, compulsory flash mode, return light not detected",
                            15: "Flash fired, compulsory flash mode, return light detected",
                            16: "Flash did not fire, compulsory flash mode",
                            24: "Flash did not fire, auto mode",
                            25: "Flash fired, auto mode",
                            29: "Flash fired, auto mode, return light not detected",
                            31: "Flash fired, auto mode, return light detected",
                            32: "No flash function",
                            65: "Flash fired, red-eye reduction mode",
                            69: "Flash fired, red-eye reduction mode, return light not detected",
                            71: "Flash fired, red-eye reduction mode, return light detected",
                            73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                            77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                            79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                            89: "Flash fired, auto mode, red-eye reduction mode",
                            93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                            95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
                        },
                        SensingMethod: {
                            1: "Not defined",
                            2: "One-chip color area sensor",
                            3: "Two-chip color area sensor",
                            4: "Three-chip color area sensor",
                            5: "Color sequential area sensor",
                            7: "Trilinear sensor",
                            8: "Color sequential linear sensor"
                        },
                        SceneCaptureType: {
                            0: "Standard",
                            1: "Landscape",
                            2: "Portrait",
                            3: "Night scene"
                        },
                        SceneType: {
                            1: "Directly photographed"
                        },
                        CustomRendered: {
                            0: "Normal process",
                            1: "Custom process"
                        },
                        WhiteBalance: {
                            0: "Auto white balance",
                            1: "Manual white balance"
                        },
                        GainControl: {
                            0: "None",
                            1: "Low gain up",
                            2: "High gain up",
                            3: "Low gain down",
                            4: "High gain down"
                        },
                        Contrast: {
                            0: "Normal",
                            1: "Soft",
                            2: "Hard"
                        },
                        Saturation: {
                            0: "Normal",
                            1: "Low saturation",
                            2: "High saturation"
                        },
                        Sharpness: {
                            0: "Normal",
                            1: "Soft",
                            2: "Hard"
                        },
                        SubjectDistanceRange: {
                            0: "Unknown",
                            1: "Macro",
                            2: "Close view",
                            3: "Distant view"
                        },
                        FileSource: {
                            3: "DSC"
                        },
                        Components: {
                            0: "",
                            1: "Y",
                            2: "Cb",
                            3: "Cr",
                            4: "R",
                            5: "G",
                            6: "B"
                        }
                    };

                function d(e) {
                    return !!e.exifdata
                }

                function f(e) {
                    var t = new DataView(e);
                    if (r && console.log("Got file of length " + e.byteLength), 255 != t.getUint8(0) || 216 != t.getUint8(1)) return r && console.log("Not a valid JPEG"), !1;
                    for (var n, o = 2, i = e.byteLength; o < i;) {
                        if (255 != t.getUint8(o)) return r && console.log("Not a valid marker at offset " + o + ", found: " + t.getUint8(o)), !1;
                        if (n = t.getUint8(o + 1), r && console.log(n), 225 == n) return r && console.log("Found 0xFFE1 marker"), y(t, o + 4, t.getUint16(o + 2));
                        o += 2 + t.getUint16(o + 2)
                    }
                }
                var m = {
                    120: "caption",
                    110: "credit",
                    25: "keywords",
                    55: "dateCreated",
                    80: "byline",
                    85: "bylineTitle",
                    122: "captionWriter",
                    105: "headline",
                    116: "copyright",
                    15: "category"
                };

                function p(e, t, n) {
                    for (var r, o, i, a, s = new DataView(e), u = {}, l = t; l < t + n;) 28 === s.getUint8(l) && 2 === s.getUint8(l + 1) && (a = s.getUint8(l + 2)) in m && (i = s.getInt16(l + 3), o = m[a], r = b(s, l + 5, i), u.hasOwnProperty(o) ? u[o] instanceof Array ? u[o].push(r) : u[o] = [u[o], r] : u[o] = r), l++;
                    return u
                }

                function g(e, t, n, o, i) {
                    var a, s, u, l = e.getUint16(n, !i),
                        c = {};
                    for (u = 0; u < l; u++) a = n + 12 * u + 2, !(s = o[e.getUint16(a, !i)]) && r && console.log("Unknown tag: " + e.getUint16(a, !i)), c[s] = h(e, a, t, 0, i);
                    return c
                }

                function h(e, t, n, r, o) {
                    var i, a, s, u, l, c, d = e.getUint16(t + 2, !o),
                        f = e.getUint32(t + 4, !o),
                        m = e.getUint32(t + 8, !o) + n;
                    switch (d) {
                        case 1:
                        case 7:
                            if (1 == f) return e.getUint8(t + 8, !o);
                            for (i = f > 4 ? m : t + 8, a = [], u = 0; u < f; u++) a[u] = e.getUint8(i + u);
                            return a;
                        case 2:
                            return b(e, i = f > 4 ? m : t + 8, f - 1);
                        case 3:
                            if (1 == f) return e.getUint16(t + 8, !o);
                            for (i = f > 2 ? m : t + 8, a = [], u = 0; u < f; u++) a[u] = e.getUint16(i + 2 * u, !o);
                            return a;
                        case 4:
                            if (1 == f) return e.getUint32(t + 8, !o);
                            for (a = [], u = 0; u < f; u++) a[u] = e.getUint32(m + 4 * u, !o);
                            return a;
                        case 5:
                            if (1 == f) return l = e.getUint32(m, !o), c = e.getUint32(m + 4, !o), (s = new Number(l / c)).numerator = l, s.denominator = c, s;
                            for (a = [], u = 0; u < f; u++) l = e.getUint32(m + 8 * u, !o), c = e.getUint32(m + 4 + 8 * u, !o), a[u] = new Number(l / c), a[u].numerator = l, a[u].denominator = c;
                            return a;
                        case 9:
                            if (1 == f) return e.getInt32(t + 8, !o);
                            for (a = [], u = 0; u < f; u++) a[u] = e.getInt32(m + 4 * u, !o);
                            return a;
                        case 10:
                            if (1 == f) return e.getInt32(m, !o) / e.getInt32(m + 4, !o);
                            for (a = [], u = 0; u < f; u++) a[u] = e.getInt32(m + 8 * u, !o) / e.getInt32(m + 4 + 8 * u, !o);
                            return a
                    }
                }

                function b(e, t, r) {
                    var o = "";
                    for (n = t; n < t + r; n++) o += String.fromCharCode(e.getUint8(n));
                    return o
                }

                function y(e, t) {
                    if ("Exif" != b(e, t, 4)) return r && console.log("Not valid EXIF data! " + b(e, t, 4)), !1;
                    var n, o, i, d, f, m = t + 6;
                    if (18761 == e.getUint16(m)) n = !1;
                    else {
                        if (19789 != e.getUint16(m)) return r && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;
                        n = !0
                    }
                    if (42 != e.getUint16(m + 2, !n)) return r && console.log("Not valid TIFF data! (no 0x002A)"), !1;
                    var p = e.getUint32(m + 4, !n);
                    if (p < 8) return r && console.log("Not valid TIFF data! (First offset less than 8)", e.getUint32(m + 4, !n)), !1;
                    if ((o = g(e, m, m + p, s, n)).ExifIFDPointer)
                        for (i in d = g(e, m, m + o.ExifIFDPointer, a, n)) {
                            switch (i) {
                                case "LightSource":
                                case "Flash":
                                case "MeteringMode":
                                case "ExposureProgram":
                                case "SensingMethod":
                                case "SceneCaptureType":
                                case "SceneType":
                                case "CustomRendered":
                                case "WhiteBalance":
                                case "GainControl":
                                case "Contrast":
                                case "Saturation":
                                case "Sharpness":
                                case "SubjectDistanceRange":
                                case "FileSource":
                                    d[i] = c[i][d[i]];
                                    break;
                                case "ExifVersion":
                                case "FlashpixVersion":
                                    d[i] = String.fromCharCode(d[i][0], d[i][1], d[i][2], d[i][3]);
                                    break;
                                case "ComponentsConfiguration":
                                    d[i] = c.Components[d[i][0]] + c.Components[d[i][1]] + c.Components[d[i][2]] + c.Components[d[i][3]]
                            }
                            o[i] = d[i]
                        }
                    if (o.GPSInfoIFDPointer)
                        for (i in f = g(e, m, m + o.GPSInfoIFDPointer, u, n)) {
                            switch (i) {
                                case "GPSVersionID":
                                    f[i] = f[i][0] + "." + f[i][1] + "." + f[i][2] + "." + f[i][3]
                            }
                            o[i] = f[i]
                        }
                    return o.thumbnail = function h(e, t, n, r) {
                        var o = function i(e, t, n) {
                            var r = e.getUint16(t, !n);
                            return e.getUint32(t + 2 + 12 * r, !n)
                        }(e, t + n, r);
                        if (!o) return {};
                        if (o > e.byteLength) return {};
                        var a = g(e, t, t + o, l, r);
                        if (a.Compression) switch (a.Compression) {
                            case 6:
                                if (a.JpegIFOffset && a.JpegIFByteCount) {
                                    var s = t + a.JpegIFOffset,
                                        u = a.JpegIFByteCount;
                                    a.blob = new Blob([new Uint8Array(e.buffer, s, u)], {
                                        type: "image/jpeg"
                                    })
                                }
                                break;
                            case 1:
                                console.log("Thumbnail image format is TIFF, which is not implemented.");
                                break;
                            default:
                                console.log("Unknown thumbnail image format '%s'", a.Compression)
                        } else 2 == a.PhotometricInterpretation && console.log("Thumbnail image format is RGB, which is not implemented.");
                        return a
                    }(e, m, p, n), o
                }

                function v(e) {
                    var t = {};
                    if (1 == e.nodeType) {
                        if (e.attributes.length > 0) {
                            t["@attributes"] = {};
                            for (var n = 0; n < e.attributes.length; n++) {
                                var r = e.attributes.item(n);
                                t["@attributes"][r.nodeName] = r.nodeValue
                            }
                        }
                    } else if (3 == e.nodeType) return e.nodeValue;
                    if (e.hasChildNodes())
                        for (var o = 0; o < e.childNodes.length; o++) {
                            var i = e.childNodes.item(o),
                                a = i.nodeName;
                            if (null == t[a]) t[a] = v(i);
                            else {
                                if (null == t[a].push) {
                                    var s = t[a];
                                    t[a] = [], t[a].push(s)
                                }
                                t[a].push(v(i))
                            }
                        }
                    return t
                }

                function S(e) {
                    try {
                        var t = {};
                        if (e.children.length > 0)
                            for (var n = 0; n < e.children.length; n++) {
                                var r = e.children.item(n),
                                    o = r.attributes;
                                for (var i in o) {
                                    var a = o[i],
                                        s = a.nodeName,
                                        u = a.nodeValue;
                                    void 0 !== s && (t[s] = u)
                                }
                                var l = r.nodeName;
                                if (void 0 === t[l]) t[l] = v(r);
                                else {
                                    if (void 0 === t[l].push) {
                                        var c = t[l];
                                        t[l] = [], t[l].push(c)
                                    }
                                    t[l].push(v(r))
                                }
                            } else t = e.textContent;
                        return t
                    } catch (e) {
                        console.log(e.message)
                    }
                }
                i.enableXmp = function() {
                    i.isXmpEnabled = !0
                }, i.disableXmp = function() {
                    i.isXmpEnabled = !1
                }, i.getData = function(e, t) {
                    return !((self.Image && e instanceof self.Image || self.HTMLImageElement && e instanceof self.HTMLImageElement) && !e.complete || (d(e) ? t && t.call(e) : function n(e, t) {
                        function n(n) {
                            var o = f(n);
                            e.exifdata = o || {};
                            var a = function s(e) {
                                var t = new DataView(e);
                                if (r && console.log("Got file of length " + e.byteLength), 255 != t.getUint8(0) || 216 != t.getUint8(1)) return r && console.log("Not a valid JPEG"), !1;
                                for (var n = 2, o = e.byteLength, i = function(e, t) {
                                        return 56 === e.getUint8(t) && 66 === e.getUint8(t + 1) && 73 === e.getUint8(t + 2) && 77 === e.getUint8(t + 3) && 4 === e.getUint8(t + 4) && 4 === e.getUint8(t + 5)
                                    }; n < o;) {
                                    if (i(t, n)) {
                                        var a = t.getUint8(n + 7);
                                        return a % 2 != 0 && (a += 1), 0 === a && (a = 4), p(e, n + 8 + a, t.getUint16(n + 6 + a))
                                    }
                                    n++
                                }
                            }(n);
                            if (e.iptcdata = a || {}, i.isXmpEnabled) {
                                var u = function l(e) {
                                    if ("DOMParser" in self) {
                                        var t = new DataView(e);
                                        if (r && console.log("Got file of length " + e.byteLength), 255 != t.getUint8(0) || 216 != t.getUint8(1)) return r && console.log("Not a valid JPEG"), !1;
                                        for (var n = 2, o = e.byteLength, i = new DOMParser; n < o - 4;) {
                                            if ("http" == b(t, n, 4)) {
                                                var a = n - 1,
                                                    s = t.getUint16(n - 2) - 1,
                                                    u = b(t, a, s),
                                                    l = u.indexOf("xmpmeta>") + 8,
                                                    c = (u = u.substring(u.indexOf("<x:xmpmeta"), l)).indexOf("x:xmpmeta") + 10;
                                                return u = u.slice(0, c) + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' + u.slice(c), S(i.parseFromString(u, "text/xml"))
                                            }
                                            n++
                                        }
                                    }
                                }(n);
                                e.xmpdata = u || {}
                            }
                            t && t.call(e)
                        }
                        if (e.src)
                            if (/^data\:/i.test(e.src)) n(function o(e, t) {
                                t = t || e.match(/^data\:([^\;]+)\;base64,/im)[1] || "", e = e.replace(/^data\:([^\;]+)\;base64,/gim, "");
                                for (var n = atob(e), r = n.length, o = new ArrayBuffer(r), i = new Uint8Array(o), a = 0; a < r; a++) i[a] = n.charCodeAt(a);
                                return o
                            }(e.src));
                            else if (/^blob\:/i.test(e.src))(u = new FileReader).onload = function(e) {
                                n(e.target.result)
                            },
                            function a(e, t) {
                                var n = new XMLHttpRequest;
                                n.open("GET", e, !0), n.responseType = "blob", n.onload = function(e) {
                                    200 != this.status && 0 !== this.status || t(this.response)
                                }, n.send()
                            }(e.src, function(e) {
                                u.readAsArrayBuffer(e)
                            });
                        else {
                            var s = new XMLHttpRequest;
                            s.onload = function() {
                                if (200 != this.status && 0 !== this.status) throw "Could not load image";
                                n(s.response), s = null
                            }, s.open("GET", e.src, !0), s.responseType = "arraybuffer", s.send(null)
                        } else if (self.FileReader && (e instanceof self.Blob || e instanceof self.File)) {
                            var u;
                            (u = new FileReader).onload = function(e) {
                                r && console.log("Got file of length " + e.target.result.byteLength), n(e.target.result)
                            }, u.readAsArrayBuffer(e)
                        }
                    }(e, t), 0))
                }, i.getTag = function(e, t) {
                    if (d(e)) return e.exifdata[t]
                }, i.getIptcTag = function(e, t) {
                    if (d(e)) return e.iptcdata[t]
                }, i.getAllTags = function(e) {
                    if (!d(e)) return {};
                    var t, n = e.exifdata,
                        r = {};
                    for (t in n) n.hasOwnProperty(t) && (r[t] = n[t]);
                    return r
                }, i.getAllIptcTags = function(e) {
                    if (!d(e)) return {};
                    var t, n = e.iptcdata,
                        r = {};
                    for (t in n) n.hasOwnProperty(t) && (r[t] = n[t]);
                    return r
                }, i.pretty = function(e) {
                    if (!d(e)) return "";
                    var t, n = e.exifdata,
                        r = "";
                    for (t in n) n.hasOwnProperty(t) && ("object" == typeof n[t] ? n[t] instanceof Number ? r += t + " : " + n[t] + " [" + n[t].numerator + "/" + n[t].denominator + "]\r\n" : r += t + " : [" + n[t].length + " values]\r\n" : r += t + " : " + n[t] + "\r\n");
                    return r
                }, i.readFromBinaryFile = function(e) {
                    return f(e)
                }, void 0 === (o = function() {
                    return i
                }.apply(t, [])) || (e.exports = o)
            }).call(this)
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/features/features.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/object-util/object-util.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/object-util/object-util.jsx")
        },
        "./packages/media/common/common.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                o = n("./node_modules/exif-js/exif.js"),
                i = n.n(o),
                a = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = [".jpg", ".jpeg", ".gif", ".png"],
                l = [".mp4", ".m4v", ".mov"],
                c = function e(t) {
                    var n;
                    return t.forEach(function(e) {
                        n ? n.width * n.height < e.width * e.height && (n = e) : n = e
                    }), n
                },
                d = function e(t, n) {
                    var r = this;
                    Object(a.a)(this, e), Object(s.a)(this, "x", void 0), Object(s.a)(this, "y", void 0), Object(s.a)(this, "distanceFrom", function(e) {
                        return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2))
                    }), this.x = t, this.y = n
                },
                f = function e(t, n) {
                    var r = this;
                    Object(a.a)(this, e), Object(s.a)(this, "width", void 0), Object(s.a)(this, "height", void 0), Object(s.a)(this, "equals", function(e) {
                        return e && r.width === e.width && r.height === e.height
                    }), Object(s.a)(this, "aspectRatio", function() {
                        return r.width / r.height
                    }), this.width = t, this.height = n
                },
                m = function e(t, n, r) {
                    var o = Math.max(t, n);
                    return Math.min(o, r)
                },
                p = function e(t) {
                    var n = "ta_video";
                    return t && ("Home" === t.page ? n = "home_video" : "Profile" === t.page && (n = "profile_video")), n
                },
                g = new Map([
                    ["N", 1],
                    ["S", -1]
                ]),
                h = new Map([
                    ["E", 1],
                    ["W", -1]
                ]),
                b = function e(t, n) {
                    var o = Object(r.a)(t, 3),
                        i = o[0],
                        a = o[1],
                        s = o[2],
                        u = i + (a ? a / 60 : 0) + (s ? s / 3600 : 0);
                    return n < 0 ? -u : u
                },
                y = function e(t, n) {
                    var r = document.createElement("img");
                    r.onload = function() {
                        i.a.getData(this, function() {
                            var e = i.a.getTag(this, "GPSLatitude"),
                                t = i.a.getTag(this, "GPSLatitudeRef"),
                                r = g.get(t),
                                o = i.a.getTag(this, "GPSLongitude"),
                                a = i.a.getTag(this, "GPSLongitudeRef"),
                                s = h.get(a);
                            if (e && r && o && s) {
                                var u = b(e, r),
                                    l = b(o, s);
                                n({
                                    latitude: u,
                                    longitude: l
                                })
                            }
                        })
                    };
                    var o = document.createAttribute("src");
                    o.value = t, r.setAttributeNode(o)
                },
                v = function e(t, n) {
                    var r = new Image;
                    r.onload = function() {
                        n(new f(this.width, this.height))
                    }, r.src = t
                },
                S = n("@ta/input.drop-zone"),
                P = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "PhotoDetails"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Int"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "photos"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "photoIds"
                                    },
                                    value: {
                                        kind: "ListValue",
                                        values: [{
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            }
                                        }]
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "statuses"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "photoSizes"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 119
                    }
                };
            P.loc.source = {
                body: "ac43ce855b4b"
            };
            var j = P,
                I = function e(t) {
                    for (var n = atob(t.split(",")[1]), r = [], o = 0; o < n.length;) r.push(n.charCodeAt(o)), o += 1;
                    return new Uint8Array(r)
                },
                x = function e(t, n, r, o, i, a) {
                    var s = document.createElement("canvas");
                    return s.width = i, s.height = a, s.getContext("2d").drawImage(t, r, o, i, a, 0, 0, i, a), "image/png" === n ? s.toDataURL() : s.toDataURL("image/jpeg")
                },
                w = function e(t) {
                    return 1 === t ? 0 : 8 === t ? 270 : 3 === t ? 180 : 6 === t ? 90 : 0
                },
                O = function e(t, n) {
                    var r = new FileReader;
                    r.onload = function(e) {
                        var t = new DataView(e.target.result);
                        if (65496 !== t.getUint16(0, !1)) return n(-2);
                        for (var r = t.byteLength, o = 2; o < r;) {
                            if (t.getUint16(o + 2, !1) <= 8) return n(-1);
                            var i = t.getUint16(o, !1);
                            if (o += 2, 65505 === i) {
                                if (o += 2, 1165519206 !== t.getUint32(o, !1)) return n(-1);
                                var a = 18761 === t.getUint16(o += 6, !1);
                                o += t.getUint32(o + 4, a);
                                var s = t.getUint16(o, a);
                                o += 2;
                                for (var u = 0; u < s; u++)
                                    if (274 === t.getUint16(o + 12 * u, a)) return n(t.getUint16(o + 12 * u + 8, a))
                            } else {
                                if (65280 != (65280 & i)) break;
                                o += t.getUint16(o, !1)
                            }
                        }
                        return n(-1)
                    }, r.readAsArrayBuffer(t)
                },
                C = function e(t, n) {
                    O(t, function(e) {
                        var r = w(e);
                        if (0 === r) n(URL.createObjectURL(t));
                        else {
                            var o = URL.createObjectURL(t);
                            ! function e(t, n, r) {
                                var o = new Image;
                                o.onload = function() {
                                    var e = document.createElement("canvas");
                                    e.width = 90 === Math.abs(n % 180) ? o.height : o.width, e.height = 90 === Math.abs(n % 180) ? o.width : o.height;
                                    var t = e.getContext("2d");
                                    t.save(), t.translate(e.width / 2, e.height / 2), t.rotate(n * Math.PI / 180), t.drawImage(o, -o.width / 2, -o.height / 2), t.restore(), r(e.toDataURL())
                                }, o.src = t
                            }(o, r, function(e) {
                                URL.revokeObjectURL(o);
                                var t = new Blob([I(e)], {
                                    type: "image/png"
                                });
                                n(URL.createObjectURL(t))
                            })
                        }
                    })
                },
                F = function e(t) {
                    return u.includes(Object(S.fileExtentsion)(t)) ? "photo" : l.includes(Object(S.fileExtentsion)(t)) ? "video" : "unknown"
                },
                D = function e(t, n, r, o, i) {
                    n > r ? i() : setTimeout(function() {
                        o.query({
                            query: j,
                            variables: {
                                id: t
                            },
                            fetchPolicy: "network-only"
                        }).then(function(a) {
                            if (a.data && a.data.photos && a.data.photos[0]) {
                                var s = a.data.photos[0].statuses;
                                s && 0 !== s.length && !s.includes("UPLOADING") ? i() : e(t, n + 1, r, o, i)
                            } else e(t, n + 1, r, o, i)
                        })
                    }, 1e3)
                },
                U = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                T = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                E = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                R = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                _ = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                k = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                L = n("./node_modules/react/index.js"),
                G = n("./packages/common/object-util/object-util.jsx"),
                N = L.createContext(null),
                M = {
                    VIDEO_VISIBLE: "VIDEO_VISIBLE",
                    VIDEO_INVISIBLE: "VIDEO_INVISIBLE"
                },
                A = function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function e() {
                            return Object.freeze({})
                        }(),
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    switch (n.type) {
                        case M.VIDEO_VISIBLE:
                            return !t.activePlayer || t.activePlayer !== n.player && t.activePlayer.state.userInteracted ? Object(k.a)({}, t, {
                                activePlayer: n.player
                            }) : t.activePlayer !== n.player && n.player.elemPosition + 50 < t.activePlayer.elemPosition ? Object(k.a)({}, t, {
                                activePlayer: n.player
                            }) : t;
                        case M.VIDEO_INVISIBLE:
                            return t.activePlayer === n.player ? Object(k.a)({}, t, {
                                activePlayer: void 0
                            }) : t;
                        default:
                            return t
                    }
                },
                V = function(e) {
                    function t() {
                        var e, n;
                        Object(a.a)(this, t);
                        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                        return n = Object(T.a)(this, (e = Object(E.a)(t)).call.apply(e, [this].concat(o))), Object(s.a)(Object(_.a)(Object(_.a)(n)), "state", {
                            activePlayer: void 0,
                            dispatch: function e(t) {
                                var r = A(n.state, t);
                                Object(G.shallowEquals)(r, n.state) || n.setState(r)
                            }
                        }), n
                    }
                    return Object(R.a)(t, e), Object(U.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this.state,
                                n = this.props.children;
                            return L.createElement(N.Provider, {
                                value: t
                            }, n)
                        }
                    }]), t
                }(L.PureComponent),
                B = N.Consumer,
                W = n("./packages/common/features/features.jsx"),
                X = function e() {
                    return {
                        mediaGroup: Object(W.featureIsEnabled)("display_restricted_partner_photos") || Object(W.featureIsEnabled)("bcom_partner_photos") ? "ALL_INCLUDING_RESTRICTED" : "ALL_UNRESTRICTED"
                    }
                },
                H = function e() {
                    return {
                        mediaGroup: Object(W.featureIsEnabled)("display_restricted_partner_photos") || Object(W.featureIsEnabled)("bcom_partner_photos") ? "DEFAULT_INCLUDING_RESTRICTED" : "DEFAULT"
                    }
                };
            n.d(t, "getImageDimensions", function() {
                return v
            }), n.d(t, "getGeoPointFromExif", function() {
                return y
            }), n.d(t, "base64ToUint8Array", function() {
                return I
            }), n.d(t, "cropImageToJpegUrl", function() {
                return x
            }), n.d(t, "orientationValueToDegrees", function() {
                return w
            }), n.d(t, "photoOrientation", function() {
                return O
            }), n.d(t, "rotateImageIfNeeded", function() {
                return C
            }), n.d(t, "mediaType", function() {
                return F
            }), n.d(t, "checkMediaReady", function() {
                return D
            }), n.d(t, "getVideoTrackingModule", function() {
                return p
            }), n.d(t, "getSizeWithMostPixels", function() {
                return c
            }), n.d(t, "supportedImageTypes", function() {
                return u
            }), n.d(t, "supportedVideoTypes", function() {
                return l
            }), n.d(t, "boundNumber", function() {
                return m
            }), n.d(t, "Point", function() {
                return d
            }), n.d(t, "Dimension", function() {
                return f
            }), n.d(t, "VideoPlayerProvider", function() {
                return V
            }), n.d(t, "VideoPlayerConsumer", function() {
                return B
            }), n.d(t, "ActionTypes", function() {
                return M
            }), n.d(t, "getMediaFilterToRetrieveAllPhotos", function() {
                return X
            }), n.d(t, "getMediaFilterToRetrieveDefaultPhotos", function() {
                return H
            })
        },
        "@ta/input.drop-zone": function(t, n) {
            t.exports = e
        },
        "dll-reference @ta/common.global": function(e, n) {
            e.exports = t
        }
    })
});
//# sourceMappingURL=media.common.a2dd765334.js.map