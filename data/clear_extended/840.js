var glb_realtime_map = {
    site: 'home_2016',
    categories: ['portal'],
    url: 'http://www.globo.com/'
};
var HOME_2016_REALTIME_AREAS = {
    "urgente": {
        "ctx": ".home-urgente",
        "sel": "a",
        "spt": "Destaque urgente",
        "reg": "Urgente"
    },
    "destaques-jornalismo": {
        "ctx": ".home-top-news",
        "sel": ".hui-premium.hui-color-journalism a",
        "spt": "Topo jornalismo",
        "reg": "Topo"
    },
    "destaques-esporte": {
        "ctx": ".home-top-news",
        "sel": ".hui-premium.hui-color-sports a",
        "spt": "Topo esportes",
        "reg": "Topo"
    },
    "destaques-entretenimento": {
        "ctx": ".home-top-news",
        "sel": ".hui-premium.hui-color-entertainment a",
        "spt": "Topo entretenimento",
        "reg": "Topo"
    },
    "destaques-olimpiadas": {
        "ctx": ".home-top-news",
        "sel": ".hui-premium.hui-color-olympics a",
        "spt": "Topo olimpiadas",
        "reg": "Topo"
    },
    "trilho-destaques": {
        "ctx": ".home-trail",
        "sel": ".destaque-trilho a",
        "spt": "Trilho Destaques",
        "reg": "Trilhos"
    },
    "trilho-destaques-olimpico": {
        "ctx": ".home-trail",
        "sel": ".trilho-olimpiadas-home a",
        "spt": "Trilho Destaques Olimpicos",
        "reg": "Trilhos"
    },
    "trilho-destaques-copa": {
        "ctx": ".home-trail",
        "sel": ".destaque-copa a",
        "spt": "Trilho Destaques Copa",
        "reg": "Trilhos"
    },
    "coluna-principal-jornalismo": {
        "ctx": ".home-columns .hui-color-journalism",
        "sel": ".hui-highlight-secondary a",
        "spt": "Jornalismo principal",
        "reg": "Coluna jornalismo"
    },
    "coluna-secundario-jornalismo": {
        "ctx": ".home-columns .hui-color-journalism",
        "sel": ".hui-highlight-terciary a",
        "spt": "Jornalismo secundario",
        "reg": "Coluna jornalismo"
    },
    "coluna-principal-esporte": {
        "ctx": ".home-columns .hui-color-sports",
        "sel": ".hui-highlight-secondary a",
        "spt": "Esportes principal",
        "reg": "Coluna esportes"
    },
    "coluna-secundario-esporte": {
        "ctx": ".home-columns .hui-color-sports",
        "sel": ".hui-highlight-terciary a",
        "spt": "Esportes secundario",
        "reg": "Coluna esportes"
    },
    "coluna-principal-entretenimento": {
        "ctx": ".home-columns .hui-color-entertainment",
        "sel": ".hui-highlight-secondary a",
        "spt": "Entretenimento principal",
        "reg": "Coluna entretenimento"
    },
    "coluna-secundario-entretenimento": {
        "ctx": ".home-columns .hui-color-entertainment",
        "sel": ".hui-highlight-terciary a",
        "spt": "Entretenimento secundario",
        "reg": "Coluna entretenimento"
    },
    "franja-globosatplay": {
        "ctx": ".home-franjas",
        "sel": ".franja-globosatplay a",
        "spt": "Destaques globosatplay",
        "reg": "Franja globosatplay"
    },
    "franja-globoplay": {
        "ctx": ".home-franjas",
        "sel": ".franja-globoplay a",
        "spt": "Destaques globoplay",
        "reg": "Franja globoplay"
    },
    "franja-vertical-direita": {
        "ctx": ".home-franjas",
        "sel": ".franja-vertical .franja-vertical__container.home-analytics-id-D a",
        "spt": "Destaques verticais direita",
        "reg": "Franja vertical"
    },
    "franja-vertical-esquerda": {
        "ctx": ".home-franjas",
        "sel": ".franja-vertical .franja-vertical__container.home-analytics-id-E a",
        "spt": "Destaques verticais esquerda",
        "reg": "Franja vertical"
    },
    "franja-horizontal-1": {
        "ctx": ".home-franjas",
        "sel": ".franja-agrupador-quadruplo:eq(0) a",
        "spt": "Franja Horizontal 1",
        "reg": "Franja horizontal",
    },
    "franja-horizontal-2": {
        "ctx": ".home-franjas",
        "sel": ".franja-agrupador-quadruplo:eq(1) a",
        "spt": "Franja Horizontal 2",
        "reg": "Franja horizontal",
    },
    "franja-horizontal-3": {
        "ctx": ".home-franjas",
        "sel": ".franja-agrupador-quadruplo:eq(2) a",
        "spt": "Franja Horizontal 3",
        "reg": "Franja horizontal",
    },
    "franja-horizontal-4": {
        "ctx": ".home-franjas",
        "sel": ".franja-agrupador-quadruplo:eq(3) a",
        "spt": "Franja Horizontal 4",
        "reg": "Franja horizontal",
    },
    "franja-horizontal-5": {
        "ctx": ".home-franjas",
        "sel": ".franja-agrupador-quadruplo:eq(4) a",
        "spt": "Franja Horizontal 5",
        "reg": "Franja horizontal",
    },
    "topglobo-jornalismo": {
        "ctx": ".home-topglobocom",
        "sel": ".topglobocom__content-news.hui-color-journalism a",
        "spt": "Top globo jornalismo",
        "reg": "Top globo"
    },
    "topglobo-esporte": {
        "ctx": ".home-topglobocom",
        "sel": ".topglobocom__content-news.hui-color-sports a",
        "spt": "Top globo esporte",
        "reg": "Top globo"
    },
    "topglobo-entretenimento": {
        "ctx": ".home-topglobocom",
        "sel": ".topglobocom__content-news.hui-color-entertainment a",
        "spt": "Top globo entretenimento",
        "reg": "Top globo"
    },
    "menu-jornalismo": {
        "ctx": "#home-menu",
        "sel": ".g1 .menu-columns > ul a",
        "spt": "g1",
        "reg": "Menu"
    },
    "menu-esportes": {
        "ctx": "#home-menu",
        "sel": ".ge .menu-columns > ul a",
        "spt": "ge",
        "reg": "Menu"
    },
    "menu-tecnologia": {
        "ctx": "#home-menu",
        "sel": ".tech .menu-columns > ul a",
        "spt": "Tecnologia",
        "reg": "Menu"
    },
    "menu-gshow": {
        "ctx": "#home-menu",
        "sel": ".gshow .menu-columns > ul a",
        "spt": "gshow",
        "reg": "Menu"
    },
    "menu-videos": {
        "ctx": "#home-menu",
        "sel": ".videos a",
        "spt": "Videos",
        "reg": "Menu"
    }
};
$.ajax({
    url: 'https://s.glbimg.com/bu/rt/js/glb-rt-min.js',
    dataType: 'script',
    cache: true,
    success: function() {
        try {
            $.glbrealtime({
                data: HOME_2016_REALTIME_AREAS,
                debug: false
            });
        } catch (e) {
            console.error(e.message);
        }
    }
});
(function() {
    var hui;
    hui = window.hui = window.hui || {};
    hui.hasClass = function(el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        } else {
            return new RegExp("(^| )" + className + "( |$)", "gi").test(el.className);
        }
    };
    hui.addClass = function(el, className) {
        if (el.classList) {
            return el.classList.add(className);
        } else if (!hui.hasClass(el, className)) {
            return el.className += " " + className;
        }
    };
    hui.removeClass = function(el, className) {
        if (el.classList) {
            return el.classList.remove(className);
        } else {
            return el.className = el.className.replace(new RegExp("(^|\\b)" + (className.split(' ').join(' | ')) + "(\\b|$)", 'gi'), ' ');
        }
    };
    hui.trigger = function(target, evName, params) {
        $(target).trigger(evName, params);
    };
    hui.throttle = function(callback, time) {
        var idle;
        if (time == null) {
            time = 150;
        }
        idle = true;
        return function() {
            if (idle) {
                callback.call();
                idle = false;
                setTimeout(function() {
                    return idle = true;
                }, time);
            }
        };
    };
    hui.on = function(element, event, callback) {
        $(element).on(event, callback);
    };
    hui.off = function(element, event, callback) {
        $(element).off(event, callback);
    };
    hui.extend = function(out) {
        var i, key;
        out = out || {};
        i = 1;
        while (i < arguments.length) {
            if (!arguments[i]) {
                i++;
                continue;
            }
            for (key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    out[key] = arguments[i][key];
                }
            }
            i++;
        }
        return out;
    };
    hui.closest = function(element, selector) {
        var match;
        while (element) {
            match = (element.matches || element.matchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.webkitMatchesSelector || element.oMatchesSelector).call(element, selector);
            if (match) {
                return element;
            }
            element = element.parentElement;
        }
    };
    hui.parents = function(element, selector) {
        var parent, results, validElement;
        results = [];
        while (true) {
            parent = element.parentElement;
            if (parent) {
                validElement = hui.closest(parent, selector);
                if (validElement) {
                    results.push(validElement);
                    element = validElement;
                } else {
                    break;
                }
            } else {
                break;
            }
        }
        return results;
    };
    hui.durationToTime = function(duration) {
        var minutes, seconds;
        minutes = (duration / (1000 * 60)) % 60;
        if (minutes >= 1) {
            return Math.round(minutes) + ' min';
        } else {
            seconds = parseInt((duration / 1000) % 60);
            return seconds + ' seg';
        }
    };
    hui.offsetDistance = function(element, direction) {
        var distance;
        distance = 0;
        while (element) {
            distance += element[direction];
            element = element.offsetParent;
        }
        return distance;
    };
    hui.loadScript = function(url, callback, fireOnError) {
        var element, head;
        head = document.getElementsByTagName('head')[0];
        element = document.createElement('script');
        element.type = 'text/javascript';
        element.src = url;
        element.async = true;
        if (callback) {
            if (fireOnError) {
                if ('onreadystatechange' in element) {
                    element.htmlFor = element.id;
                    element.event = 'onclick';
                }
            }
            element['onreadystatechange'] = function() {
                var e;
                if (!element['readyState'] || element['readyState'].match(/loaded|complete/)) {
                    if (fireOnError) {
                        try {
                            if (element['onclick']) {
                                element['onclick']();
                            }
                        } catch (error) {
                            e = error;
                        }
                    }
                    callback();
                }
            };
            if (!element['readyState']) {
                element['onload'] = element['onreadystatechange'];
                if (fireOnError) {
                    element['onerror'] = element['onload'];
                }
            }
        }
        head.appendChild(element);
    };
})();
(function() {
    return (function() {
        var i, len, ref, targetTime, vendor, w;
        w = window;
        ref = ['ms', 'moz', 'webkit', 'o'];
        for (i = 0, len = ref.length; i < len; i++) {
            vendor = ref[i];
            if (w.requestAnimationFrame) {
                break;
            }
            w.requestAnimationFrame = w[vendor + "RequestAnimationFrame"];
            w.cancelAnimationFrame = w[vendor + "CancelAnimationFrame"] || w[vendor + "CancelRequestAnimationFrame"];
        }
        targetTime = 0;
        w.requestAnimationFrame || (w.requestAnimationFrame = function(callback) {
            var currentTime;
            targetTime = Math.max(targetTime + 16, currentTime = +(new Date));
            return w.setTimeout((function() {
                return callback(+(new Date));
            }), targetTime - currentTime);
        });
        w.cancelAnimationFrame || (w.cancelAnimationFrame = function(id) {
            return clearTimeout(id);
        });
    })();
})();
(function() {
    var ThrottledEvents, hui;
    hui = window.hui = window.hui || {};
    ThrottledEvents = (function() {
        function ThrottledEvents() {
            this.scroll();
            this.resize();
            return;
        }
        ThrottledEvents.prototype.scroll = function() {
            return hui.on(window, "scroll", hui.throttle(function() {
                return hui.trigger(window, "throttledScroll");
            }));
        };
        ThrottledEvents.prototype.resize = function() {
            return hui.on(window, "resize", hui.throttle(function() {
                return hui.trigger(window, "throttledResize");
            }));
        };
        return ThrottledEvents;
    })();
    return new ThrottledEvents();
})();
var bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments);
    };
};
(function() {
    var ScrollSpy, hui;
    hui = window.hui = window.hui || {};
    hui.fn = window.hui.fn || {};
    ScrollSpy = (function() {
        var instance;
        instance = null;

        function ScrollSpy() {
            this.addElement = bind(this.addElement, this);
            this.resetElementPosition = bind(this.resetElementPosition, this);
            this.checkVisibleItems = bind(this.checkVisibleItems, this);
            this.onScroll = bind(this.onScroll, this);
            this.onResize = bind(this.onResize, this);
            this.checkDocumentHeight = bind(this.checkDocumentHeight, this);
            this.domChangesListener = bind(this.domChangesListener, this);
            this.stopListeners = bind(this.stopListeners, this);
            this.startListener = bind(this.startListener, this);
            this.setDefaultVariables = bind(this.setDefaultVariables, this);
            this.setItems = bind(this.setItems, this);
            this.getItems = bind(this.getItems, this);
            this.debug = bind(this.debug, this);
            if (instance) {
                return instance;
            } else {
                instance = {
                    add: this.addElement,
                    getItems: this.getItems,
                    setItems: this.setItems,
                    debug: this.debug
                };
            }
            this.itemsLen = 0;
            this.items = [];
            this.domObserver = null;
            this.setDefaultVariables();
            return instance;
        }
        ScrollSpy.prototype.debug = function() {
            var border, color, i, item, j, len, ref, results;
            ref = this.items;
            results = [];
            for (i = j = 0, len = ref.length; j < len; i = ++j) {
                item = ref[i];
                color = i % 2 ? "red" : "blue";
                border = "2px dashed " + color;
                item.el.style["border"] = border;
                results.push($("<div class='debug-line'>").css({
                    top: item.pos,
                    width: "100%",
                    position: "absolute",
                    borderTop: border
                }).appendTo("body"));
            }
            return results;
        };
        ScrollSpy.prototype.getItems = function() {
            return this.items;
        };
        ScrollSpy.prototype.setItems = function(newItems) {
            if (Array.isArray(newItems)) {
                return this.items = newItems;
            }
        };
        ScrollSpy.prototype.setDefaultVariables = function() {
            this.winHeight = window.innerHeight;
            this.lastPos = this.getScrollY();
            return this.docHeight = document.body ? document.body.offsetHeight : 0;
        };
        ScrollSpy.prototype.startListener = function() {
            hui.on(window, "throttledScroll", this.onScroll);
            hui.on(window, "throttledResize", this.onResize);
            this.domChangesListener();
        };
        ScrollSpy.prototype.stopListeners = function() {
            hui.off(window, "throttledScroll", this.onScroll);
            hui.off(window, "throttledResize", this.onResize);
            if (this.domObserver && this.domObserver.disconnect) {
                this.domObserver.disconnect();
            }
        };
        ScrollSpy.prototype.domChangesListener = function() {
            var observerConfig;
            if (!window.MutationObserver) {
                return;
            }
            this.domObserver = this.domObserver || new MutationObserver((function(_this) {
                return function() {
                    return _this.checkDocumentHeight();
                };
            })(this));
            observerConfig = {
                childList: true,
                subtree: true,
                attributes: true,
                characterData: true,
                attributeFilter: ['style', 'class', 'id']
            };
            this.domObserver.observe(document.body, observerConfig);
        };
        ScrollSpy.prototype.checkDocumentHeight = function() {
            var currentDocHeight;
            currentDocHeight = document.body.offsetHeight;
            if (this.docHeight !== currentDocHeight) {
                this.docHeight = currentDocHeight;
                return this.resetElementPosition();
            }
        };
        ScrollSpy.prototype.onResize = function() {
            if (this.winHeight !== window.innerHeight) {
                return this.resetElementPosition();
            }
        };
        ScrollSpy.prototype.onScroll = function() {
            this.checkDocumentHeight();
            this.checkVisibleItems();
        };
        ScrollSpy.prototype.checkVisibleItems = function() {
            var currentPos, currentPosOffset, item;
            currentPos = this.getScrollY();
            currentPosOffset = this.winHeight + currentPos;
            while (this.items.length) {
                item = this.items[0];
                if (currentPosOffset >= item.pos) {
                    if (item.callback) {
                        item.callback(item.callbackParam);
                    } else {
                        item.callback();
                    }
                    this.items.shift();
                    this.itemsLen = this.items.length;
                } else {
                    break;
                }
            }
            this.lastPos = currentPos;
            if (!this.items.length) {
                this.stopListeners();
            }
        };
        ScrollSpy.prototype.getScrollY = function() {
            var D;
            if (typeof pageYOffset !== 'undefined') {
                return pageYOffset;
            } else {
                D = document.documentElement;
                D = D.clientHeight ? D : document.body;
                return D.scrollTop;
            }
        };
        ScrollSpy.prototype.getElementPos = function(param) {
            var boundClient, top;
            top = this.getScrollY();
            try {
                boundClient = param.el.getBoundingClientRect();
                return boundClient[param.reference] + top - param.offset;
            } catch (error) {
                return top + param.offset;
            }
        };
        ScrollSpy.prototype.resetElementPosition = function() {
            var item, j, len, ref;
            this.winHeight = window.innerHeight;
            ref = this.items;
            for (j = 0, len = ref.length; j < len; j++) {
                item = ref[j];
                item.pos = this.getElementPos(item);
            }
            this.checkVisibleItems();
        };
        ScrollSpy.prototype.addElement = function(param) {
            var count, item, j, len, prevItensLength, ref;
            if (!param.el) {
                return;
            }
            param.offset = typeof param.offset === "undefined" ? 200 : param.offset;
            param.reference = param.reference || "top";
            param.pos = this.getElementPos(param);
            prevItensLength = this.items.length;
            count = 0;
            ref = this.items;
            for (j = 0, len = ref.length; j < len; j++) {
                item = ref[j];
                if (item.pos > param.pos) {
                    break;
                }
                count++;
            }
            this.items.splice(count, 0, param);
            this.itemsLen = this.items.length;
            if (prevItensLength === 0) {
                this.setDefaultVariables();
                this.startListener();
            }
            this.checkVisibleItems();
        };
        return ScrollSpy;
    })();
    return hui.fn.ScrollSpy = new ScrollSpy();
})();
var hui, bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments);
    };
};
hui = window.hui || {};
hui.fn = window.hui.fn || {};
hui.fn.recommender = (function() {
    recommender.prototype.isValidated = true;

    function recommender(element, options) {
        var default_options;
        this.element = element;
        this.changeData = bind(this.changeData, this);
        this.changeImages = bind(this.changeImages, this);
        this.hashLinks = bind(this.hashLinks, this);
        this.onResponse = bind(this.onResponse, this);
        this.getUrl = bind(this.getUrl, this);
        default_options = {
            url: '',
            photoSizes: {
                small: '90x56',
                medium: '160x100',
                large: '255x143',
                xlarge: '480x300'
            },
            callback: 'recommended',
            isVideo: false,
            fringeSize: 4,
            childs: '.destaques a',
            eachCallback: function(self) {},
            validateResponse: function(el, highlight, self) {
                if (!highlight.hasOwnProperty('title') || !highlight.hasOwnProperty('url')) {
                    false;
                }
                return true;
            },
            extraCallback: function() {},
            existsExtraCallback: function() {
                return false;
            },
            afterChangeCallback: function() {},
            queries: {
                title: 'p',
                header: 'h3'
            }
        };
        this.options = hui.extend(default_options, options);
    }
    recommender.prototype.run = function() {
        if (this.isValidated === false) {
            return;
        }
        window[this.options.callback] = this.onResponse;
        this.appendScript();
    };
    recommender.prototype.appendScript = function() {
        var scriptEl;
        scriptEl = document.createElement('script');
        scriptEl.setAttribute('src', this.getUrl());
        document.body.appendChild(scriptEl);
    };
    recommender.prototype.getUrl = function() {
        var key, paramPhotos, photoSizes, ref, value;
        photoSizes = [];
        ref = this.options.photoSizes;
        for (key in ref) {
            value = ref[key];
            photoSizes.push(this.options.photoSizes[key]);
        }
        if (this.options.isVideo) {
            paramPhotos = 'video_photo_size';
        } else {
            paramPhotos = 'photo_size';
        }
        return this.options.url + "&" + paramPhotos + "=" + (photoSizes.join(',')) + "&callback=" + this.options.callback;
    };
    recommender.prototype.onResponse = function(response) {
        if (response.length < this.options.fringeSize) {
            this.isValidated = false;
            return;
        }
        if (response["tag"]) {
            this.hashLinks(response["tag"]);
            return;
        }
        this.changeData(response);
    };
    recommender.prototype.hashLinks = function(tag) {
        var el, j, len, links, results;
        links = this.element.querySelectorAll(this.options.childs);
        results = [];
        for (j = 0, len = links.length; j < len; j++) {
            el = links[j];
            results.push(el.href += tag);
        }
        return results;
    };
    recommender.prototype.changeImages = function(el, highlight) {
        var href, i, image, photoSize, picture, size, sources, tag;
        picture = el.querySelector('picture');
        if (picture) {
            image = picture.querySelector('img');
            if (image) {
                image.classList.remove('hui-lazy');
            }
            sources = picture.querySelectorAll('source');
            i = sources.length;
            while (i > 0) {
                i--;
                tag = sources[i];
                photoSize = tag.getAttribute('data-media-query');
                if (this.options.photoSizes.hasOwnProperty(photoSize)) {
                    size = this.options.photoSizes[photoSize].replace('/', '_');
                    if (highlight.hasOwnProperty('photos') && highlight.photos.hasOwnProperty(size)) {
                        href = highlight.photos[size];
                        tag.setAttribute('srcset', href);
                        tag.removeAttribute('data-srcset');
                        if (image && image.getAttribute('data-changed') !== 'true') {
                            image.setAttribute('src', href);
                            image.setAttribute('data-changed', 'true');
                        }
                        continue;
                    }
                }
                tag.remove();
                picture.style.backgroundImage = '';
            }
        }
    };
    recommender.prototype.removeDataVideoId = function(el) {
        var dataVideoId, hasVideoIcon;
        dataVideoId = el.getAttribute('data-video-id');
        if (dataVideoId) {
            hasVideoIcon = $(el).find('.hui-highlight-videos__play-icon');
            if (hasVideoIcon) {
                el.removeAttribute('data-video-id');
                $(el).find('.hui-highlight-videos__play-icon').removeClass('hui-highlight-videos__play-icon');
            }
        }
    };
    recommender.prototype.changeData = function(response) {
        var clone, cloneLinks, el, elementsCount, extras, highlight, responseCount, self, title;
        self = this;
        clone = this.element.cloneNode(true);
        cloneLinks = clone.querySelectorAll(this.options.childs);
        responseCount = 0;
        elementsCount = 0;
        while (elementsCount < cloneLinks.length && responseCount < response.length) {
            highlight = response[responseCount];
            el = cloneLinks[elementsCount];
            if (typeof this.options.validateResponse === 'function' && !this.options.validateResponse(el, highlight, self)) {
                responseCount++;
                continue;
            }
            if (typeof this.options.eachCallback === 'function') {
                this.options.eachCallback(self, highlight);
            }
            title = highlight['title'];
            extras = highlight['extras'] || this.options.existsExtraCallback();
            el.href = highlight['url'];
            el.title = title;
            this.removeDataVideoId(el);
            this.changeImages(el, highlight);
            el.querySelector(this.options.queries.title).innerHTML = title;
            if (extras) {
                this.options.extraCallback(el, highlight, self);
            }
            responseCount++;
            elementsCount++;
        }
        $(this.element).replaceWith(clone);
        this.options.afterChangeCallback();
    };
    return recommender;
})();
var bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments);
    };
};
(function() {
    var Lazy, hui, startLazyLoad;
    hui = window.hui = window.hui || {};
    hui.fn = window.hui.fn || {};
    Lazy = (function() {
        var instance;
        instance = null;

        function Lazy() {
            this.setScrollSpy = bind(this.setScrollSpy, this);
            this.searchAndLoadImages = bind(this.searchAndLoadImages, this);
            this.init = bind(this.init, this);
            if (instance) {
                return instance;
            } else {
                instance = this;
            }
            this.init();
            return instance;
        }
        Lazy.prototype.init = function() {
            this.regions = Array.prototype.slice.call(document.querySelectorAll('[data-lazyload]'));
            this.pos = 0;
            this.setScrollSpy();
        };
        Lazy.prototype.searchAndLoadImages = function() {
            var currentRegion;
            currentRegion = this.regions[this.pos];
            this.pos = this.pos + 1;
            hui.fn.fixImageDraft(currentRegion);
        };
        Lazy.prototype.setScrollSpy = function() {
            var i, len, ref, region;
            ref = this.regions;
            for (i = 0, len = ref.length; i < len; i++) {
                region = ref[i];
                hui.fn.ScrollSpy.add({
                    el: region,
                    callback: this.searchAndLoadImages,
                    offset: 100
                });
            }
        };
        return Lazy;
    })();
    startLazyLoad = function() {
        return hui.fn.Lazy = new Lazy();
    };
    if (document.addEventListener) {
        return document.addEventListener('DOMContentLoaded', startLazyLoad, false);
    } else {
        return window.attachEvent('onload', startLazyLoad);
    }
})();
(function() {
    var hui;
    hui = window.hui != null ? window.hui : window.hui = {};
    return hui.baseWidgetService = (function() {
        function baseWidgetService() {}
        baseWidgetService.options = {
            pubsub: null
        };
        baseWidgetService.element = null;
        baseWidgetService.widgetBaseClass = 'baseWidgetService';
        baseWidgetService.prototype._bind = function(eventName, callback) {
            (this.options.pubsub || this.element).bind(eventName, $.proxy(callback, this));
        };
        baseWidgetService.prototype._trigger = function(eventName, args) {
            (this.options.pubsub || this.element).trigger(eventName, args);
        };
        baseWidgetService.prototype._classFor = function(className) {
            return this.widgetBaseClass + (className ? '-' + className : '');
        };
        return baseWidgetService;
    })();
})();;
(function(window) {
    'use strict';
    var HomeAnalytics = function() {
        this.items = [];
        this.reHashHref = /^#/;
        this.reAbsoluteHref = /^https?:\/\//;
        this.reRelativeHref = /^\//;
    };
    HomeAnalytics.prototype.init = function() {
        this.bindEvents();
    };
    HomeAnalytics.prototype.bindEvents = function() {
        var self = this;
        $(document).delegate('a', 'click', function() {
            self.generateAnalytics(this);
        });
        $(document).delegate('label.hui-button', 'click', function() {
            self.generateAnalytics(this, true);
        });
    };
    HomeAnalytics.prototype.generateAnalytics = function(element, label) {
        if (label) {
            var context = this._createContext(element, true),
                key = context.trackingCode.join('/');
            this._recordOutboundLink(key);
            return;
        }
        var url = element.getAttribute('href');
        if (!url) {
            return;
        }
        var isHashUrl = this.reHashHref.test(url),
            isVideo = this._isVideo(element),
            context = this._createContext(element, isHashUrl || isVideo);
        if (context && context.trackingCode[1]) {
            var domain = null,
                key, isAbsoluteUrl = this.reAbsoluteHref.test(url),
                urlTracking = url.replace(this.reAbsoluteHref, '').replace(this.reRelativeHref, '').replace(this.reHashHref, '');
            if (isAbsoluteUrl) {
                domain = urlTracking.split('/')[0];
            } else if (!isHashUrl) {
                domain = window.location.hostname;
                urlTracking = domain + '/' + urlTracking;
            }
            context.trackingCode.push(urlTracking);
            key = context.trackingCode.join('/');
            this._recordOutboundLink(key, domain);
        }
    };
    HomeAnalytics.prototype._createContext = function(element, isInternalConsumption) {
        var context = {
                element: element,
                trackingCode: [isInternalConsumption ? '/use' : '/out']
            },
            isShare, isWidget;
        isShare = this._hasClass(context, '.share-bar-container');
        if (isShare) {
            return;
        }
        isWidget = this._hasClass(context, '.hui-columns__widgets');
        if (isWidget) {
            this._getWidgetColumn(context);
            return context;
        }
        this._getAreas(context);
        this._getUrgente(context);
        this._getOlympicsCard(context);
        this._getFranjaGlobosatPlayArrow(context);
        this._getHighlightPremiumProductAndLive(context);
        this._getTrailProduct(context);
        this._getFranjaHorizontalPosition(context);
        this._getHighlightPosition(context);
        return context;
    };
    HomeAnalytics.prototype._isVideo = function(element) {
        return element && element.getAttribute('data-video-id') ? true : false;
    };
    HomeAnalytics.prototype._recordOutboundLink = function(key, domain) {
        window._gaq = window._gaq || [];
        if (domain) {
            window._gaq.push(['_setCustomVar', 15, 'Domains', domain, 3]);
        }
        if (key) {
            window._gaq.push(['_trackPageview', key]);
        }
    };
    HomeAnalytics.prototype._getAreas = function(context) {
        var element = context.element,
            pattern = /home-analytics-id-(\w+)/i,
            parents = hui.parents(element, '.home-analytics-area'),
            className, matchId, i;
        for (i = parents.length - 1; i >= 0; i--) {
            className = parents[i].className;
            matchId = className.match(pattern);
            if (matchId) {
                context.trackingCode.push(matchId[1]);
            }
        }
    };
    HomeAnalytics.prototype._getFranjaGlobosatPlayArrow = function(context) {
        var element = context.element,
            pattern = /home-analytics-id-(\w+)/i,
            closestParent = hui.closest(element, '.home-analytics-area'),
            className, matchId;
        if (closestParent) {
            className = closestParent.className;
            if (className.match('franja-globosatplay__arrow')) {
                matchId = className.match(pattern);
                if (matchId) {
                    context.trackingCode.push(matchId[1]);
                }
            }
        }
    };
    HomeAnalytics.prototype._getHighlightPremiumProductAndLive = function(context) {
        var element = context.element,
            pattern = /hui-color-(\w+)/i,
            closestParent = hui.closest(element, '.hui-premium.home-analytics-area'),
            colorId, matchColor, className, isLive;
        if (closestParent) {
            className = closestParent.className;
            matchColor = className.match(pattern);
            if (matchColor) {
                colorId = this._parseHighlightColor(matchColor[1]);
                context.trackingCode.push(colorId);
            }
            isLive = element.querySelector('.hui-islive');
            if (isLive) {
                context.trackingCode.push('L');
            }
        }
    };
    HomeAnalytics.prototype._getTrailProduct = function(context) {
        var element = context.element,
            pattern = /hui-color-(\w+)/i,
            closestParent = hui.closest(element, '.destaque-trilho.home-analytics-area'),
            colorId, matchColor, className;
        if (closestParent) {
            className = closestParent.className;
            matchColor = className.match(pattern);
            if (matchColor) {
                colorId = this._parseHighlightColor(matchColor[1]);
                context.trackingCode.push(colorId);
            }
        }
    };
    HomeAnalytics.prototype._parseHighlightColor = function(color) {
        var classesByProduct = {
            'journalism': 'J',
            'sports': 'E',
            'entertainment': 'M',
            'olympics': 'O',
            'technology': 'T'
        };
        if (color in classesByProduct) {
            return classesByProduct[color];
        }
    };
    HomeAnalytics.prototype._getFranjaHorizontalPosition = function(context) {
        var element = context.element,
            closestParent = hui.closest(element, '.franja-agrupador-quadruplo');
        if (!closestParent) {
            return;
        }
        var siblings = closestParent.parentNode.children,
            similarSiblings = [],
            i, j;
        for (i = 0; i < siblings.length; i++) {
            if (siblings[i].className.match('franja-agrupador-quadruplo')) {
                similarSiblings.push(siblings[i]);
            }
        }
        for (j = 0; j < similarSiblings.length; j++) {
            if (similarSiblings[j] == closestParent) {
                context.trackingCode.push(j + 1);
                break;
            }
        }
    };
    HomeAnalytics.prototype._getHighlightPosition = function(context) {
        var element = context.element,
            closestParent, siblings, similarSiblings = [],
            i, j, selector, selectors = {
                '.home-trail .destaque-trilho__highlight-container__item': 'destaque-trilho__highlight-container__item',
                '.home-columns .hui-highlight-terciary': 'hui-highlight-terciary',
                '.home-franjas .hui-highlight-terciary': 'hui-highlight-terciary',
                '.home-franjas .franja-agrupador-quadruplo__item': 'franja-agrupador-quadruplo__item',
                '.home-franjas .hui-highlight-videos__item': 'hui-highlight-videos__item'
            };
        for (selector in selectors) {
            closestParent = hui.closest(element, selector);
            if (closestParent) {
                siblings = closestParent.parentNode.children;
                for (i = 0; i < siblings.length; i++) {
                    if (siblings[i].className.match(selectors[selector])) {
                        similarSiblings.push(siblings[i]);
                    }
                }
                for (j = 0; j < similarSiblings.length; j++) {
                    if (similarSiblings[j] == closestParent) {
                        context.trackingCode.push(j + 1);
                        break;
                    }
                }
                break;
            }
        }
    };
    HomeAnalytics.prototype._getWidgetColumn = function(context) {
        var element = context.element,
            pattern = /hui-color-(\w+)/i,
            colorId, matchColor, className, closestParent = hui.closest(element, '.hui-columns__widgets');
        if (closestParent) {
            context.trackingCode.push('W');
            className = closestParent.className;
            matchColor = className.match(pattern);
            if (matchColor) {
                colorId = this._parseHighlightColor(matchColor[1]);
                context.trackingCode.push(colorId);
            }
        }
    };
    HomeAnalytics.prototype._getUrgente = function(context) {
        var isUrgente = this._hasClass(context, '.home-urgente .urgente__wrapper');
        if (isUrgente) {
            context.trackingCode.push('U');
        }
    };
    HomeAnalytics.prototype._getOlympicsCard = function(context) {
        var element = context.element,
            isOlympicCard = hui.closest(element, '.trilho-olimpiadas');
        if (isOlympicCard) {
            context.trackingCode.push('T');
            context.trackingCode.push('O');
            context.trackingCode.push('A');
        }
    };
    HomeAnalytics.prototype._hasClass = function(context, elementClass) {
        var element = context.element,
            elementContainer = hui.closest(element, elementClass);
        return elementContainer ? true : false;
    };
    window.HomeAnalytics = HomeAnalytics;
})(window);
homeAnalytics = new HomeAnalytics();
homeAnalytics.init();
(function() {
    var classesMap = [
        ['.home-trail', 'Destaque Trilho'],
        ['.home-columns', 'Colunas'],
        ['.hui-columns__widgets', 'Widget Colunas'],
        ['.franja-globoplay', 'Franja Globoplay'],
        ['.franja-agrupador-quadruplo.hui-color-technology', 'Franja 2'],
        ['.franja-vertical .home-analytics-id-E', 'Franja 3'],
        ['.franja-vertical .home-analytics-id-D', 'Franja 4'],
        ['.franja-agrupador-quadruplo.hui-color-entertainment', 'Franja 5'],
        ['.franja-globosatplay', 'Franja 6'],
        ['.franja-extra-globoplay', 'Franja Globoplay Extra'],
        ['.home-topglobocom', 'Top Globo'],
        ['.widget-shopping', 'Vitrine'],
        ['.glb-diretorio', 'Diretório'],
        ['.page-footer', 'Footer']
    ];
    var scrollEventsCallback = function(label) {
        window._gaq = window._gaq || [];
        _gaq.push(['_trackEvent', "Scroll Vertical", 'Home', label, 0, true]);
    };
    for (var i = 0; i < classesMap.length; i++) {
        var item = classesMap[i];
        var classesQuery = document.querySelector(item[0]);
        if (classesQuery) {
            hui.fn.ScrollSpy.add({
                el: classesQuery,
                callback: scrollEventsCallback,
                callbackParam: item[1]
            });
        }
    }
})();
(function() {
    var desktopPositions = ['banner_slb_meio', 'banner_slb_fim'];
    var mobilePositions = ['banner_home2', 'banner_home3', 'banner_home4', 'banner_home5'];
    var interval = setInterval(function() {
        var isUtag = window.utag;
        if (isUtag) {
            var scrollEventsCallback = function(publicidadeElement) {
                var publicidadeName = publicidadeElement.attr('data-publicidade');
                publicidadeElement.attr('id', publicidadeName);
                window.bannerLazyLoading(publicidadeName);
            };
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            isMobile = width < 620;
            var positions = (isMobile) ? mobilePositions : desktopPositions;
            var offset = 1 * $(window).height();
            for (var i = 0; i < positions.length; i++) {
                var $publicidadeElement = $('[data-publicidade="' + positions[i] + '"]');
                if (positions[i] === 'banner_slb_meio') {
                    offset = 200;
                } else if (positions[i] === 'banner_slb_fim') {
                    offset = 400;
                }
                if ($publicidadeElement) {
                    hui.fn.ScrollSpy.add({
                        el: $publicidadeElement[0],
                        callback: scrollEventsCallback,
                        callbackParam: $publicidadeElement,
                        offset: offset,
                    });
                }
            }
            clearInterval(interval);
        }
    }, 200);
})();
(function(window) {
    var defaults = {
            'pageContainerId': 'home-pagecontent',
            'staticPath': 'https://s.glbimg.com/gl/ba/'
        },
        common = {};
    var MobileHeaderHome = function(glb, options) {
        common = glb['barra']['common'];
        this.options = common['extend'](common['clone'](defaults), options);
        this.pageContainer = common['getById'](this.options['pageContainerId']);
        this.pushMenu = common['getById']('home-push-menu');
        this.menuOpener = common['getById']('open-menu');
        this.searchForm = common['getById']('search-form');
        this.searchInput = common['getById']('search-globo');
        this.searchContainer = common['getById']('search-container');
        this.openSearch = common['getById']('open-search');
        this.closeSearch = common['getById']('close-search');
        this.pageBody = this.pageBody || common['getByTagName']('body');
        this.pageHtml = this.pageHtml || common['getByTagName']('html');
    };
    MobileHeaderHome.prototype.init = function() {
        this.bindEvents();
    };
    MobileHeaderHome.prototype.closeMenu = function() {
        var self = this;
        common['removeClass'](this.pageContainer, 'content-pushed');
        common['removeClass'](this.pushMenu, 'show-email');
        setTimeout(function() {
            common['removeClass'](self.pageBody, 'lock-body');
            common['removeClass'](self.pageHtml, 'lock-body');
        }, 300);
        this.pageContainer['style']['height'] = '';
    };
    MobileHeaderHome.prototype.openMenu = function() {
        if (document['documentElement'] && document['documentElement']['clientHeight']) {
            this.pageContainer['style']['height'] = document['documentElement']['clientHeight'] + 'px';
        }
        common['addClass'](this.pageContainer, 'content-pushed');
        common['addClass'](this.pageBody, 'lock-body');
        common['addClass'](this.pageHtml, 'lock-body');
        common['removeClass'](this.pushMenu, 'show-email');
    };
    MobileHeaderHome.prototype.bindEvents = function() {
        var self = this,
            emailLink = common['getById']('home-push-menu-show-email'),
            emailHideLink = common['getById']('home-push-menu-hide-email');
        try {
            this.menuOpener['onclick'] = function(ev) {
                common.preventDefault(ev);
                if (common['hasClass'](self.pageBody, 'lock-body')) {
                    self.closeMenu();
                    self.pageContainer['onclick'] = null;
                } else {
                    self.openMenu();
                    if (ev['stopPropagation']) {
                        ev['stopPropagation']();
                        self.pageContainer['onclick'] = function(ev) {
                            if (common['hasClass'](self.pageContainer, 'content-pushed')) {
                                common.preventDefault(ev);
                                self.closeMenu();
                            }
                        };
                    }
                }
            };
        } catch (e) {}
        try {
            this.searchForm['onsubmit'] = function(ev) {
                common['removeClass'](self.searchContainer, 'showing');
            };
        } catch (e) {}
        try {
            emailHideLink['onclick'] = emailLink['onclick'] = function(ev) {
                common.preventDefault(ev);
                common['toggleClass'](self.pushMenu, 'show-email');
            };
        } catch (e) {}
        try {
            this.openSearch['onclick'] = function(ev) {
                common['addClass'](self.searchContainer, 'showing');
                self.searchInput['focus']();
            };
        } catch (e) {}
        try {
            this.closeSearch['onclick'] = function(ev) {
                common['removeClass'](self.searchContainer, 'showing');
                self.searchInput['focus']();
                self.searchInput['blur']();
            };
        } catch (e) {}
    };
    window.MobileHeaderHome = MobileHeaderHome;
})(window);
! function(e, n, t) {
    function o(e, n) {
        return typeof e === n
    }

    function s() {
        var e, n, t, s, a, i, r;
        for (var l in c)
            if (c.hasOwnProperty(l)) {
                if (e = [], n = c[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (s = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) i = e[a], r = i.split("."), 1 === r.length ? Modernizr[r[0]] = s : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = s), f.push((s ? "" : "no-") + r.join("-"))
            }
    }

    function a(e) {
        var n = u.className,
            t = Modernizr._config.classPrefix || "";
        if (p && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(o, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), p ? u.className.baseVal = n : u.className = n)
    }

    function i() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : p ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function r() {
        var e = n.body;
        return e || (e = i(p ? "svg" : "body"), e.fake = !0), e
    }

    function l(e, t, o, s) {
        var a, l, f, c, d = "modernizr",
            p = i("div"),
            h = r();
        if (parseInt(o, 10))
            for (; o--;) f = i("div"), f.id = s ? s[o] : d + (o + 1), p.appendChild(f);
        return a = i("style"), a.type = "text/css", a.id = "s" + d, (h.fake ? h : p).appendChild(a), h.appendChild(p), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(n.createTextNode(e)), p.id = d, h.fake && (h.style.background = "", h.style.overflow = "hidden", c = u.style.overflow, u.style.overflow = "hidden", u.appendChild(h)), l = t(p, e), h.fake ? (h.parentNode.removeChild(h), u.style.overflow = c, u.offsetHeight) : p.parentNode.removeChild(p), !!l
    }
    var f = [],
        c = [],
        d = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                c.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                c.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = d, Modernizr = new Modernizr;
    var u = n.documentElement,
        p = "svg" === u.nodeName.toLowerCase(),
        h = d._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    d._prefixes = h;
    var m = d.testStyles = l;
    Modernizr.addTest("touchevents", function() {
        var t;
        if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
        else {
            var o = ["@media (", h.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            m(o, function(e) {
                t = 9 === e.offsetTop
            })
        }
        return t
    }), s(), a(f), delete d.addTest, delete d.addAsyncTest;
    for (var v = 0; v < Modernizr._q.length; v++) Modernizr._q[v]();
    e.Modernizr = Modernizr
}(window, document);
var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
isMobile = width < 620;
if (!isMobile) {
    hui.loadScript('https://s.glbimg.com/en/ho/static/globo_com_2016/js/refresher/glb.refresher.js', function() {
        hui.loadScript('https://s.glbimg.com/en/ho/static/globo_com_2016/js/refresher/glb.preventRefresh.js', function() {
            glb.Refresher.getInstance({
                'timeout': 300,
                onBeforeRefresh: function(timeout) {
                    if (window.glb.hasEventRefresh) {
                        window._gaq = window._gaq || [];
                        window._gaq.push(['_trackEvent', 'Refresh', 'Refresh', document.referrer, 0, true]);
                    }
                }
            });
            preventRefresh.captureRefresher();
        });
    });
}
(function() {
    if (!(window.Modernizr && Modernizr.touchevents)) {
        var shareWrapper = $(".hui-share__wrapper");
        shareWrapper.css('visibility', 'hidden');
        return;
    }
    var shareBarOptions = {
        'facebookAppId': '289255557788943',
        'theme': 'balloon',
        'onCreateBar': function(bar) {
            hui.addClass(bar, "hui-share--loaded");
            var sharebuttons = bar.querySelectorAll(".share-hidden");
            var i = 0;
            var len = sharebuttons.length;
            for (; i < len; i++) {
                hui.removeClass(sharebuttons[i], "share-hidden")
            }
        },
        'networks': ['facebook', 'twitter', 'whatsapp', 'google']
    };
    var balloonSharebar = new ShareBar(shareBarOptions);
    var buildShareBar = function(shareContainer) {
        var hasBarClass = "hui-share--has-bar";
        var el = shareContainer.filter(":not(." + hasBarClass + ")").addClass(hasBarClass)[0];
        el && balloonSharebar.createBar(el);
    };
    var shareWrapper = $(".hui-share__wrapper");
    shareWrapper.on("touchstart", function(e) {
        var $this = $(this);
        var shareContainer = $this.find(".hui-share");
        buildShareBar(shareContainer);
    });
    var hideBalloons = function() {
        var activeClass = "hui-share--touch-active";
        var ballonToHide = $("." + activeClass);
        ballonToHide.removeClass(activeClass);
        setTimeout(function() {
            ballonToHide.data("opened", false);
        }, 250);
    };
    shareWrapper.on("click", function(e) {
        var $this = $(this);
        var $shareContainer = $this.find(".hui-share");
        if ($shareContainer.data("opened")) {
            return;
        }
        $shareContainer.data("opened", true);
        var activeClass = "hui-share--touch-active";
        $shareContainer.addClass(activeClass);
        $(document).one("touchstart", function() {
            hideBalloons();
        });
    });
    $(".home-columns").on("click", ".share-button a", function(ev) {
        var target = $(ev.target);
        var coluna = target.closest(".home-column");
        var highlightSelector = ".hui-columns__highlight";
        var highlight = target.closest(highlightSelector);
        var category = "colunas | ";
        var className = coluna[0].className;
        var label = "interacao | ";
        label += obterServico(target);
        if (className.indexOf("journalism") > -1) {
            category += "jornalismo";
        } else if (className.indexOf("sports") > -1) {
            category += "esportes";
        } else if (className.indexOf("entertainment") > -1) {
            category += "entretenimento";
        }
        label += " | posicao " + (coluna.find(highlightSelector).index(highlight) + 1);
        trackShare(category, label)
    });
    $(".home-franjas").on("click", ".share-button a", function(ev) {
        var target = $(ev.target);
        var parentSelector = ".home-franja";
        var grandParent = $(".home-franjas");
        var parent = target.closest(parentSelector);
        var highlightSelector = ".franja-vertical__item, .franja-agrupador-quadruplo__item";
        var highlight = target.closest(highlightSelector);
        var verticalClass = "franja-vertical__container";
        var category = "franja ";
        var label = "interacao | ";
        if (parent.hasClass(verticalClass)) {
            var verticalIndex = grandParent.find("." + verticalClass).index(parent);
            if (verticalIndex > -1) {
                if (verticalIndex % 2) {
                    category += "vertical direita";
                } else {
                    category += "vertical esquerda";
                }
            }
        } else {
            category += grandParent.find(parentSelector).index(parent) + 1;
        }
        label += obterServico(target);
        label += " | posicao " + (parent.find(highlightSelector).index(highlight) + 1);
        trackShare(category, label)
    });
    var obterServico = function(el) {
        var parent = $(el).closest(".share-button");
        var label = "outro";
        if (parent.hasClass("share-facebook")) {
            label = "facebook";
        } else if (parent.hasClass("share-twitter")) {
            label = "twitter";
        } else if (parent.hasClass("share-whatsapp")) {
            label = "whatsapp";
        } else if (parent.hasClass("share-googleplus")) {
            label = "googleplus";
        }
        return label;
    };
    var trackShare = function(category, label) {
        window._gaq.push(['_trackEvent', category, 'social', label, 0, true]);
    }
})();
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    'use strict';
    var Slick = window.Slick || {};
    Slick = (function() {
        var instanceUid = 0;

        function Slick(element, settings) {
            var _ = this,
                dataSettings;
            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };
            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };
            $.extend(_, _.initials);
            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;
            dataSettings = $(element).data('slick') || {};
            _.options = $.extend({}, _.defaults, settings, dataSettings);
            _.currentSlide = _.options.initialSlide;
            _.originalSettings = _.options;
            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }
            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.instanceUid = instanceUid++;
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            _.registerBreakpoints();
            _.init(true);
        }
        return Slick;
    }());
    Slick.prototype.activateADA = function() {
        var _ = this;
        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });
    };
    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
        var _ = this;
        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }
        _.unload();
        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });
        _.$slidesCache = _.$slides;
        _.reinit();
    };
    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };
    Slick.prototype.animateSlide = function(targetLeft, callback) {
        var animProps = {},
            _ = this;
        _.animateHeight();
        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }
        } else {
            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });
            } else {
                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);
                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);
                if (callback) {
                    setTimeout(function() {
                        _.disableTransition();
                        callback.call();
                    }, _.options.speed);
                }
            }
        }
    };
    Slick.prototype.getNavTarget = function() {
        var _ = this,
            asNavFor = _.options.asNavFor;
        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }
        return asNavFor;
    };
    Slick.prototype.asNavFor = function(index) {
        var _ = this,
            asNavFor = _.getNavTarget();
        if (asNavFor !== null && typeof asNavFor === 'object') {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
    };
    Slick.prototype.applyTransition = function(slide) {
        var _ = this,
            transition = {};
        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };
    Slick.prototype.autoPlay = function() {
        var _ = this;
        _.autoPlayClear();
        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }
    };
    Slick.prototype.autoPlayClear = function() {
        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
    };
    Slick.prototype.autoPlayIterator = function() {
        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;
        if (!_.paused && !_.interrupted && !_.focussed) {
            if (_.options.infinite === false) {
                if (_.direction === 1 && (_.currentSlide + 1) === (_.slideCount - 1)) {
                    _.direction = 0;
                } else if (_.direction === 0) {
                    slideTo = _.currentSlide - _.options.slidesToScroll;
                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }
                }
            }
            _.slideHandler(slideTo);
        }
    };
    Slick.prototype.buildArrows = function() {
        var _ = this;
        if (_.options.arrows === true) {
            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
            if (_.slideCount > _.options.slidesToShow) {
                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }
                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }
                if (_.options.infinite !== true) {
                    _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                }
            } else {
                _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
                    'aria-disabled': 'true',
                    'tabindex': '-1'
                });
            }
        }
    };
    Slick.prototype.buildDots = function() {
        var _ = this,
            i, dot;
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$slider.addClass('slick-dotted');
            dot = $('<ul />').addClass(_.options.dotsClass);
            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }
            _.$dots = dot.appendTo(_.options.appendDots);
            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
        }
    };
    Slick.prototype.buildOut = function() {
        var _ = this;
        _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
        _.slideCount = _.$slides.length;
        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
        });
        _.$slider.addClass('slick-slider');
        _.$slideTrack = (_.slideCount === 0) ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
        _.$list = _.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);
        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }
        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
        _.setupInfinite();
        _.buildArrows();
        _.buildDots();
        _.updateDots();
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }
    };
    Slick.prototype.buildRows = function() {
        var _ = this,
            a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;
        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();
        if (_.options.rows > 1) {
            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }
            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children().css({
                'width': (100 / _.options.slidesPerRow) + '%',
                'display': 'inline-block'
            });
        }
    };
    Slick.prototype.checkResponsive = function(initial, forceUpdate) {
        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();
        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }
        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
            targetBreakpoint = null;
            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }
            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }
    };
    Slick.prototype.changeSlide = function(event, dontAnimate) {
        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;
        if ($target.is('a')) {
            event.preventDefault();
        }
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }
        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
        switch (event.data.message) {
            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;
            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;
            case 'index':
                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;
            default:
                return;
        }
    };
    Slick.prototype.checkNavigable = function(index) {
        var _ = this,
            navigables, prevNavigable;
        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }
        return index;
    };
    Slick.prototype.cleanUpEvents = function() {
        var _ = this;
        if (_.options.dots && _.$dots !== null) {
            $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
        _.$slider.off('focus.slick blur.slick');
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }
        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
        _.$list.off('click.slick', _.clickHandler);
        $(document).off(_.visibilityChange, _.visibility);
        _.cleanUpSlideEvents();
        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }
        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };
    Slick.prototype.cleanUpSlideEvents = function() {
        var _ = this;
        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
    };
    Slick.prototype.cleanUpRows = function() {
        var _ = this,
            originalSlides;
        if (_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }
    };
    Slick.prototype.clickHandler = function(event) {
        var _ = this;
        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    };
    Slick.prototype.destroy = function(refresh) {
        var _ = this;
        _.autoPlayClear();
        _.touchObject = {};
        _.cleanUpEvents();
        $('.slick-cloned', _.$slider).detach();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && _.$prevArrow.length) {
            _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }
        if (_.$nextArrow && _.$nextArrow.length) {
            _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }
        }
        if (_.$slides) {
            _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function() {
                $(this).attr('style', $(this).data('originalStyling'));
            });
            _.$slideTrack.children(this.options.slide).detach();
            _.$slideTrack.detach();
            _.$list.detach();
            _.$slider.append(_.$slides);
        }
        _.cleanUpRows();
        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');
        _.unslicked = true;
        if (!refresh) {
            _.$slider.trigger('destroy', [_]);
        }
    };
    Slick.prototype.disableTransition = function(slide) {
        var _ = this,
            transition = {};
        transition[_.transitionType] = '';
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };
    Slick.prototype.fadeSlide = function(slideIndex, callback) {
        var _ = this;
        if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });
            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);
        } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });
            if (callback) {
                setTimeout(function() {
                    _.disableTransition(slideIndex);
                    callback.call();
                }, _.options.speed);
            }
        }
    };
    Slick.prototype.fadeSlideOut = function(slideIndex) {
        var _ = this;
        if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
        } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });
        }
    };
    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
        var _ = this;
        if (filter !== null) {
            _.$slidesCache = _.$slides;
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
            _.reinit();
        }
    };
    Slick.prototype.focusHandler = function() {
        var _ = this;
        _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*:not(.slick-arrow)', function(event) {
            event.stopImmediatePropagation();
            var $sf = $(this);
            setTimeout(function() {
                if (_.options.pauseOnFocus) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }
            }, 0);
        });
    };
    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
        var _ = this;
        return _.currentSlide;
    };
    Slick.prototype.getDotCount = function() {
        var _ = this;
        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;
        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }
        return pagerQty - 1;
    };
    Slick.prototype.getLeft = function(slideIndex) {
        var _ = this,
            targetLeft, verticalHeight, verticalOffset = 0,
            targetSlide;
        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);
        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }
        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }
        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }
        if (_.options.variableWidth === true) {
            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }
            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }
            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }
                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }
        return targetLeft;
    };
    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
        var _ = this;
        return _.options[option];
    };
    Slick.prototype.getNavigableIndexes = function() {
        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;
        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }
        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
        return indexes;
    };
    Slick.prototype.getSlick = function() {
        return this;
    };
    Slick.prototype.getSlideCount = function() {
        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;
        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });
            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
            return slidesTraversed;
        } else {
            return _.options.slidesToScroll;
        }
    };
    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
        var _ = this;
        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);
    };
    Slick.prototype.init = function(creation) {
        var _ = this;
        if (!$(_.$slider).hasClass('slick-initialized')) {
            $(_.$slider).addClass('slick-initialized');
            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
        }
        if (creation) {
            _.$slider.trigger('init', [_]);
        }
        if (_.options.accessibility === true) {
            _.initADA();
        }
        if (_.options.autoplay) {
            _.paused = false;
            _.autoPlay();
        }
    };
    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });
        _.$slideTrack.attr('role', 'listbox');
        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr('role', 'option');
            var describedBySlideId = _.options.centerMode ? i : Math.floor(i / _.options.slidesToShow);
            if (_.options.dots === true) {
                $(this).attr('aria-describedby', 'slick-slide' + _.instanceUid + describedBySlideId + '');
            }
        });
        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            }).first().attr('aria-selected', 'true').end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar');
        }
        _.activateADA();
    };
    Slick.prototype.initArrowEvents = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.off('click.slick').on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.off('click.slick').on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }
    };
    Slick.prototype.initDotEvents = function() {
        var _ = this;
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }
        if (_.options.dots === true && _.options.pauseOnDotsHover === true) {
            $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };
    Slick.prototype.initSlideEvents = function() {
        var _ = this;
        if (_.options.pauseOnHover) {
            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };
    Slick.prototype.initializeEvents = function() {
        var _ = this;
        _.initArrowEvents();
        _.initDotEvents();
        _.initSlideEvents();
        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('click.slick', _.clickHandler);
        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }
        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };
    Slick.prototype.initUI = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.show();
            _.$nextArrow.show();
        }
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.show();
        }
    };
    Slick.prototype.keyHandler = function(event) {
        var _ = this;
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }
    };
    Slick.prototype.lazyLoad = function() {
        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function() {
                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');
                imageToLoad.onload = function() {
                    image.animate({
                        opacity: 0
                    }, 100, function() {
                        image.attr('src', imageSource).animate({
                            opacity: 1
                        }, 200, function() {
                            image.removeAttr('data-lazy').removeClass('slick-loading');
                        });
                        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                    });
                };
                imageToLoad.onerror = function() {
                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                };
                imageToLoad.src = imageSource;
            });
        }
        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }
        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);
        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
    };
    Slick.prototype.loadSlider = function() {
        var _ = this;
        _.setPosition();
        _.$slideTrack.css({
            opacity: 1
        });
        _.$slider.removeClass('slick-loading');
        _.initUI();
        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
    };
    Slick.prototype.next = Slick.prototype.slickNext = function() {
        var _ = this;
        _.changeSlide({
            data: {
                message: 'next'
            }
        });
    };
    Slick.prototype.orientationChange = function() {
        var _ = this;
        _.checkResponsive();
        _.setPosition();
    };
    Slick.prototype.pause = Slick.prototype.slickPause = function() {
        var _ = this;
        _.autoPlayClear();
        _.paused = true;
    };
    Slick.prototype.play = Slick.prototype.slickPlay = function() {
        var _ = this;
        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
    };
    Slick.prototype.postSlide = function(index) {
        var _ = this;
        if (!_.unslicked) {
            _.$slider.trigger('afterChange', [_, index]);
            _.animating = false;
            _.setPosition();
            _.swipeLeft = null;
            if (_.options.autoplay) {
                _.autoPlay();
            }
            if (_.options.accessibility === true) {
                _.initADA();
            }
        }
    };
    Slick.prototype.prev = Slick.prototype.slickPrev = function() {
        var _ = this;
        _.changeSlide({
            data: {
                message: 'previous'
            }
        });
    };
    Slick.prototype.preventDefault = function(event) {
        event.preventDefault();
    };
    Slick.prototype.progressiveLazyLoad = function(tryCount) {
        tryCount = tryCount || 1;
        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image, imageSource, imageToLoad;
        if ($imgsToLoad.length) {
            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');
            imageToLoad.onload = function() {
                image.attr('src', imageSource).removeAttr('data-lazy').removeClass('slick-loading');
                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }
                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad();
            };
            imageToLoad.onerror = function() {
                if (tryCount < 3) {
                    setTimeout(function() {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);
                } else {
                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                    _.progressiveLazyLoad();
                }
            };
            imageToLoad.src = imageSource;
        } else {
            _.$slider.trigger('allImagesLoaded', [_]);
        }
    };
    Slick.prototype.refresh = function(initializing) {
        var _ = this,
            currentSlide, lastVisibleIndex;
        lastVisibleIndex = _.slideCount - _.options.slidesToShow;
        if (!_.options.infinite && (_.currentSlide > lastVisibleIndex)) {
            _.currentSlide = lastVisibleIndex;
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }
        currentSlide = _.currentSlide;
        _.destroy(true);
        $.extend(_, _.initials, {
            currentSlide: currentSlide
        });
        _.init();
        if (!initializing) {
            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);
        }
    };
    Slick.prototype.registerBreakpoints = function() {
        var _ = this,
            breakpoint, currentBreakpoint, l, responsiveSettings = _.options.responsive || null;
        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
            _.respondTo = _.options.respondTo || 'window';
            for (breakpoint in responsiveSettings) {
                l = _.breakpoints.length - 1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }
                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                }
            }
            _.breakpoints.sort(function(a, b) {
                return (_.options.mobileFirst) ? a - b : b - a;
            });
        }
    };
    Slick.prototype.reinit = function() {
        var _ = this;
        _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
        _.slideCount = _.$slides.length;
        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }
        _.registerBreakpoints();
        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();
        _.checkResponsive(false, true);
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
        _.setPosition();
        _.focusHandler();
        _.paused = !_.options.autoplay;
        _.autoPlay();
        _.$slider.trigger('reInit', [_]);
    };
    Slick.prototype.resize = function() {
        var _ = this;
        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }, 50);
        }
    };
    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
        var _ = this;
        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }
        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }
        _.unload();
        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slidesCache = _.$slides;
        _.reinit();
    };
    Slick.prototype.setCSS = function(position) {
        var _ = this,
            positionProps = {},
            x, y;
        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
        positionProps[_.positionProp] = position;
        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
    };
    Slick.prototype.setDimensions = function() {
        var _ = this;
        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }
        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();
        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }
        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    };
    Slick.prototype.setFade = function() {
        var _ = this,
            targetLeft;
        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });
        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
    };
    Slick.prototype.setHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
    };
    Slick.prototype.setOption = Slick.prototype.slickSetOption = function() {
        var _ = this,
            l, item, option, value, refresh = false,
            type;
        if ($.type(arguments[0]) === 'object') {
            option = arguments[0];
            refresh = arguments[1];
            type = 'multiple';
        } else if ($.type(arguments[0]) === 'string') {
            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];
            if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
                type = 'responsive';
            } else if (typeof arguments[1] !== 'undefined') {
                type = 'single';
            }
        }
        if (type === 'single') {
            _.options[option] = value;
        } else if (type === 'multiple') {
            $.each(option, function(opt, val) {
                _.options[opt] = val;
            });
        } else if (type === 'responsive') {
            for (item in value) {
                if ($.type(_.options.responsive) !== 'array') {
                    _.options.responsive = [value[item]];
                } else {
                    l = _.options.responsive.length - 1;
                    while (l >= 0) {
                        if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
                            _.options.responsive.splice(l, 1);
                        }
                        l--;
                    }
                    _.options.responsive.push(value[item]);
                }
            }
        }
        if (refresh) {
            _.unload();
            _.reinit();
        }
    };
    Slick.prototype.setPosition = function() {
        var _ = this;
        _.setDimensions();
        _.setHeight();
        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }
        _.$slider.trigger('setPosition', [_]);
    };
    Slick.prototype.setProps = function() {
        var _ = this,
            bodyStyle = document.body.style;
        _.positionProp = _.options.vertical === true ? 'top' : 'left';
        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }
        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }
        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }
        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };
    Slick.prototype.setSlideClasses = function(index) {
        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;
        allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');
        _.$slides.eq(index).addClass('slick-current');
        if (_.options.centerMode === true) {
            centerOffset = Math.floor(_.options.slidesToShow / 2);
            if (_.options.infinite === true) {
                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                } else {
                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                }
                if (index === 0) {
                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {
                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }
            }
            _.$slides.eq(index).addClass('slick-center');
        } else {
            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
            } else if (allSlides.length <= _.options.slidesToShow) {
                allSlides.addClass('slick-active').attr('aria-hidden', 'false');
            } else {
                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
                    allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
                } else {
                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                }
            }
        }
        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }
    };
    Slick.prototype.setupInfinite = function() {
        var _ = this,
            i, slideIndex, infiniteCount;
        if (_.options.fade === true) {
            _.options.centerMode = false;
        }
        if (_.options.infinite === true && _.options.fade === false) {
            slideIndex = null;
            if (_.slideCount > _.options.slidesToShow) {
                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }
                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });
            }
        }
    };
    Slick.prototype.interrupt = function(toggle) {
        var _ = this;
        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;
    };
    Slick.prototype.selectHandler = function(event) {
        var _ = this;
        var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
        var index = parseInt(targetElement.attr('data-slick-index'));
        if (!index) index = 0;
        if (_.slideCount <= _.options.slidesToShow) {
            _.setSlideClasses(index);
            _.asNavFor(index);
            return;
        }
        _.slideHandler(index);
    };
    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this,
            navTarget;
        sync = sync || false;
        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }
        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }
        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }
        if (sync === false) {
            _.asNavFor(index);
        }
        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);
        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }
        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }
        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }
        _.animating = true;
        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;
        _.setSlideClasses(_.currentSlide);
        if (_.options.asNavFor) {
            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');
            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }
        }
        _.updateDots();
        _.updateArrows();
        if (_.options.fade === true) {
            if (dontAnimate !== true) {
                _.fadeSlideOut(oldSlide);
                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }
        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
    };
    Slick.prototype.startLoad = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.hide();
            _.$nextArrow.hide();
        }
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.hide();
        }
        _.$slider.addClass('slick-loading');
    };
    Slick.prototype.swipeDirection = function() {
        var xDist, yDist, r, swipeAngle, _ = this;
        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);
        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }
        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }
        return 'vertical';
    };
    Slick.prototype.swipeEnd = function(event) {
        var _ = this,
            slideCount, direction;
        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;
        if (_.touchObject.curX === undefined) {
            return false;
        }
        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }
        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
            direction = _.swipeDirection();
            switch (direction) {
                case 'left':
                case 'down':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.currentDirection = 0;
                    break;
                case 'right':
                case 'up':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.currentDirection = 1;
                    break;
                default:
            }
            if (direction != 'vertical') {
                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction]);
            }
        } else {
            if (_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }
    };
    Slick.prototype.swipeHandler = function(event) {
        var _ = this;
        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }
        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
        }
        switch (event.data.action) {
            case 'start':
                _.swipeStart(event);
                break;
            case 'move':
                _.swipeMove(event);
                break;
            case 'end':
                _.swipeEnd(event);
                break;
        }
    };
    Slick.prototype.swipeMove = function(event) {
        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;
        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }
        curLeft = _.getLeft(_.currentSlide);
        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }
        swipeDirection = _.swipeDirection();
        if (swipeDirection === 'vertical') {
            return;
        }
        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }
        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }
        swipeLength = _.touchObject.swipeLength;
        _.touchObject.edgeHit = false;
        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }
        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }
        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }
        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }
        _.setCSS(_.swipeLeft);
    };
    Slick.prototype.swipeStart = function(event) {
        var _ = this,
            touches;
        _.interrupted = true;
        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }
        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }
        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
        _.dragging = true;
    };
    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
        var _ = this;
        if (_.$slidesCache !== null) {
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.appendTo(_.$slideTrack);
            _.reinit();
        }
    };
    Slick.prototype.unload = function() {
        var _ = this;
        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }
        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }
        _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
    };
    Slick.prototype.unslick = function(fromBreakpoint) {
        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();
    };
    Slick.prototype.updateArrows = function() {
        var _ = this,
            centerOffset;
        centerOffset = Math.floor(_.options.slidesToShow / 2);
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            if (_.currentSlide === 0) {
                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            }
        }
    };
    Slick.prototype.updateDots = function() {
        var _ = this;
        if (_.$dots !== null) {
            _.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true');
            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false');
        }
    };
    Slick.prototype.visibility = function() {
        var _ = this;
        if (_.options.autoplay) {
            if (document[_.hidden]) {
                _.interrupted = true;
            } else {
                _.interrupted = false;
            }
        }
    };
    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i, ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };
}));;
(function($) {
    'use strict';
    jQuery.fn.widgetEconomia = function() {
        new widgetEconomiaClass($(this));
    };
    var widgetEconomiaClass = function(element) {
        this.element = element;
        this._create();
    };
    widgetEconomiaClass.prototype = new hui.baseWidgetService;
    widgetEconomiaClass.prototype._create = function() {
        this.elements = {};
        this._bindEvents();
    };
    widgetEconomiaClass.prototype._createElements = function() {
        var html = ['<div class="widget-base__container widget-economia__container">', '<div class="widget-economia__content">', '<div class="widget-economia__finance">', '<a href="http://www.valor.com.br/valor-data">', '<h4 class="widget-economia__finance-header">IBOVESPA</h4>', '<div class="widget-economia__finance-value">', '<div class="widget-economia__up-down-icon"></div>', '<span class="widget-economia__pctchng"></span>', '<sup class="widget-economia__percent">%</sup>', '</div>', '<span class="widget-economia__points"></span>', '</a>', '</div>', '<div class="widget-economia__currencies">', '<table celspacing="0" celpadding="0">', '<thead>', '<tr>', '<th>MOEDAS</th>', '<th>COMPRA</th>', '</tr>', '</thead>', '<tbody>', '<tr>', '<td>Dólar</td>', '<td class="value">R$ <span class="dolar"></span></td>', '</tr>', '<tr>', '<td>Euro</td>', '<td class="value">R$ <span class="euro"></span></td>', '</tr>', '</tbody>', '</table>', '</div>', '</div>', '<div class="widget-economia__footer">', '<span class="widget-economia__logo"></span>', '<div class="widget-economia__datetime-container">', 'atualizado <span class="datetime"></span>', '</div>', '</div>', '</div>'];
        this.element.html(html.join(''));
        this.elements.content = this.element.find('.widget-economia__content');
        this.elements.percentage = this.elements.content.find(".widget-economia__finance-value");
        this.elements.pctchng = this.elements.content.find('.widget-economia__pctchng');
        this.elements.upDownIco = this.elements.content.find('.widget-economia__up-down-icon');
        this.elements.points = this.elements.content.find('.widget-economia__points');
        this.elements.dolar = this.elements.content.find('.dolar');
        this.elements.euro = this.elements.content.find('.euro');
        this.elements.footer = this.element.find('.widget-economia__footer');
        this.elements.timeNow = this.elements.footer.find('.datetime');
    };
    widgetEconomiaClass.prototype._bindEvents = function() {
        var that = this;
        var urlIndicador = 'http' + (document.location.href.charAt(4) == 's' ? 's://' : '://') + 'g1.globo.com/indicadorg1/valor/quote/home.json';
        $.ajax({
            url: urlIndicador,
            dataType: 'json',
            success: function(response) {
                that._updateInformation(response);
            },
        });
    };
    widgetEconomiaClass.prototype._updateInformation = function(currencyInfo) {
        var pctchngResume;
        this._createElements();
        this.elements.pctchng.text(currencyInfo.pctchng);
        this.elements.points.text(currencyInfo.cfLast + 'pts (' + currencyInfo.cfNetchng + ')');
        this.elements.dolar.text(currencyInfo.currency.dolar);
        this.elements.euro.text(currencyInfo.currency.euro);
        if (currencyInfo.pctchngVariation == "up") {
            this.elements.upDownIco.text("+");
            pctchngResume = '+';
        } else {
            this.elements.upDownIco.text("-");
            pctchngResume = '-';
        }
        this.elements.percentage.addClass(currencyInfo.pctchngVariation);
        this.elements.timeNow.text(currencyInfo.timeNow.replace(/\/20\d{2}/, ""));
        this.element.addClass('loaded');
        this.elements.content.show();
    };
})(jQuery);
(function($) {
    $("#libby-home-widget-economia").widgetEconomia();
}(jQuery));;
(function($) {
    'use strict';
    jQuery.fn.widgetHoroscopo = function() {
        new widgetHoroscopoClass($(this));
    };
    var widgetHoroscopoClass = function(element) {
        this.options = hui.extend(this.options, {
            speed: 150,
            horoscopeUrl: 'http://horoscopo.gshow.globo.com/signos/{sign}',
        });
        this.widgetBaseClass = 'widget-horoscopo';
        this.element = element;
        this._create();
    };
    widgetHoroscopoClass.prototype = new hui.baseWidgetService;
    widgetHoroscopoClass.prototype._create = function() {
        this.elements = {};
        this._bindEvents();
        this._createWidgets();
    };
    widgetHoroscopoClass.prototype._createElements = function() {
        var html = ['<div class="widget-horoscopo__content">', '<a class="widget-horoscopo__sign-container">', '<div class="widget-horoscopo__before-title">', '<strong class="widget-horoscopo__title"></strong>', '<span class="widget-horoscopo__period"></span>', '</div>', '<svg class="widget-horoscopo__current-sign" xmlns="http://www.w3.org/2000/svg">', '<use class="widget-horoscopo__sign" xlink:href=""></use>', '</svg>', '<span class="widget-horoscopo__sign-overview">', '<span class="widget-horoscopo__description"></span>', '<span class="widget-horoscopo__complete">previsão completa ›</span>', '</span>', '</a>', '</div>', '<div class="widget-horoscopo__footer">', '<div class="widget-horoscopo__provider"></div>', this.menuElement[0].outerHTML, '</div>'];
        this.element.html(html.join(''));
        var el = this.element;
        this.elements.contentContainer = el.find('.widget-horoscopo__content');
        this.elements.currentSignContainer = el.find('.widget-horoscopo__sign-container');
        this.elements.currentSignImage = el.find('.widget-horoscopo__current-sign');
        this.elements.currentSign = el.find('.widget-horoscopo__sign');
        this.elements.currentSignTitle = el.find('.widget-horoscopo__title');
        this.elements.currentSignPeriod = el.find('.widget-horoscopo__period');
        this.elements.currentSignOverview = el.find('.widget-horoscopo__description');
        this.elements.footer = el.find('.widget-horoscopo__footer');
        this.elements.currentSignContainer.click($.proxy(function(ev) {
            var sign = this.elements.currentSignOverview.data('sign');
            this._trigger("onSelectedSign", sign);
        }, this));
    };
    widgetHoroscopoClass.prototype._bindEvents = function() {
        this._bind('onSignLoaded', this._onSignLoaded);
        this._bind('onHoroscopeData', this._onHoroscopeData);
        this._bind('onSignSelected', this._onSignSelected);
    };
    widgetHoroscopoClass.prototype._createWidgets = function() {
        this.menuElement = $('<div></div>');
        this.menuElement.widgetHoroscopoMenu({
            pubsub: this.element
        });
        this.element.widgetHoroscopoDataSource();
        this.element.widgetHoroscopoAnalytics();
    };
    widgetHoroscopoClass.prototype._onSignLoaded = function(ev, sign) {
        this.element.addClass('loaded');
        this._createElements();
        this._showSign(sign);
    };
    widgetHoroscopoClass.prototype._onSignSelected = function(ev, sign) {
        var self = this;
        this.elements.contentContainer.show();
        if (this.horoscopeData) {
            this._showSign(this.horoscopeData[sign.slug]);
        } else {
            setTimeout(function() {
                self._onSignSelected(ev, sign);
            }, 100);
        }
    };
    widgetHoroscopoClass.prototype._showSign = function(sign) {
        var sign_periods = {
            aries: '21/03 a 19/04',
            touro: '20/04 a 20/05',
            gemeos: '21/05 a 21/06',
            cancer: '22/06 a 22/07',
            leao: '23/07 a 22/08',
            virgem: '23/08 a 22/09',
            libra: '23/09 a 22/10',
            escorpiao: '23/10 a 21/11',
            sagitario: '22/11 a 21/12',
            capricornio: '22/12 a 19/01',
            aquario: '20/01 a 18/02',
            peixes: '19/02 a 20/03'
        };
        var changeSign = $.proxy(function() {
            var svgUse = $(".widget-horoscopo__sign", this.elements.currentSignContainer);
            svgUse.attr('xlink:href', '#widget-horoscopo__' + sign.slug);
            this.elements.currentSignContainer.attr('href', this.options.horoscopeUrl.replace(/\{sign\}/g, sign.slug));
            this.elements.currentSignPeriod.text(sign_periods[sign.slug]);
            this.elements.currentSignTitle.text(sign.name);
            this.elements.currentSignOverview.text(sign.description);
            this.elements.currentSignOverview.data('sign', sign.slug);
        }, this);
        this.elements.contentContainer.stop(true).animate({
            opacity: 0
        }, this.options.speed, changeSign).animate({
            opacity: 1
        }, this.options.speed);
    };
    widgetHoroscopoClass.prototype._onHoroscopeData = function(ev, horoscope) {
        this.horoscopeData = horoscope;
    };
})(jQuery);;
(function($) {
    'use strict';
    jQuery.fn.widgetHoroscopoMenu = function(options) {
        new widgetHoroscopoMenu($(this), options);
    };
    var widgetHoroscopoMenu = function(element, options) {
        this.options = hui.extend(this.options, {
            horoscopeUrl: 'http://horoscopo.gshow.globo.com/signos/{sign}'
        }, options);
        this.container = $("#home-widget-horoscopo");
        this.widgetBaseClass = 'widgetHoroscopoMenu';
        this.element = element;
        this._create();
    };
    widgetHoroscopoMenu.prototype = new hui.baseWidgetService;
    widgetHoroscopoMenu.prototype._create = function() {
        this.elements = {};
        this._bindEvents();
    };
    widgetHoroscopoMenu.prototype._createElements = function() {
        var currentSign, signOption, html = $('<div class="widget-horoscopo__desktop-menu"></div>'),
            htmlResponsive = $(['<label class="widget-horoscopo__select-responsive">', '<span>outros signos</span>', '<svg class="widget-horoscopo__arrows" xmlns="http://www.w3.org/2000/svg">', '<use xlink:href="#widget-horoscopo__setas"></use>', '</svg>', '<select class="widget-horoscopo__select"></select>', '</div>'].join(''));
        this.signsClass = this._classFor("signs");
        this.signSelectedClass = this._classFor("signSelected");
        this.menuOptions = {};
        this.element.append(html);
        this.element.append(htmlResponsive);
        this.elements.responsiveMenu = this.element.find('.widget-horoscopo__select-responsive select');
        this.tooltip = $('<span class="widget-horoscopo__tooltip hui-floatbox hui-floatbox--bottom-arrow hui-floatbox--center-arrow"><span class="name"></span></span>');
        html.append(this.tooltip);
        $.each(this.signs, $.proxy(function(i, sign) {
            sign = sign.name;
            currentSign = $('<a href="#' + sign + '"></a>');
            var svgEl = ['<svg class="widget-horoscopo__footer-sign" xmlns="http://www.w3.org/2000/svg">', '<use class="widget-horoscopo__footer-svg" xlink:href="#widget-horoscopo__' + sign + '"></use>', '</svg>'];
            currentSign.append(svgEl.join(""));
            currentSign.addClass(this.signsClass);
            currentSign.attr("data-sign_slug", sign);
            signOption = $('<option value="' + sign + '"></option>');
            this.elements[sign] = currentSign;
            this.menuOptions[sign] = signOption;
            this.elements.responsiveMenu.append(signOption);
            html.append(currentSign);
        }, this));
        this.container.on('change', '.widget-horoscopo__select', $.proxy(this._onChangeSign, this));
        this.container.on("click", "." + this.signsClass, $.proxy(function(ev) {
            ev.preventDefault();
            if (!(window.Modernizr && Modernizr.touchevents)) {
                ev.stopPropagation();
            }
            var sign = $(ev.currentTarget).data("sign_slug");
            if (this.currentSign == sign) return;
            this._trigger("onSignSelected", [{
                slug: sign
            }]);
        }, this));
    };
    widgetHoroscopoMenu.prototype._bindEvents = function() {
        this._bind("onSignLoaded", this._onSignLoaded);
        this._bind("onSignSelected", this._onSignLoaded);
        this._bind("onHoroscopeData", this._onHoroscopeData);
        this._bind("onSignsAvailable", this._onSignsAvailable);
        this.container.on('mouseenter', '.' + this._classFor("signs"), $.proxy(function(ev) {
            var target = $(ev.currentTarget),
                sign = target.data('widget-horoscopo__tooltip'),
                targetPos = target.offset(),
                targetWidth = target.outerWidth();
            var tooltip = this.container.find('.widget-horoscopo__tooltip');
            tooltip.find('.name').text(sign);
            tooltip.show();
            var tooltipWidth = tooltip.outerWidth(),
                tooltipHeight = tooltip.outerHeight(true);
            tooltip.offset({
                left: targetPos.left - (tooltipWidth / 2) + (targetWidth / 2),
                top: targetPos.top - tooltipHeight
            });
        }, this));
        this.container.on('mouseleave', '.' + this._classFor("signs"), $.proxy(function(ev) {
            this.container.find('.widget-horoscopo__tooltip').hide();
        }, this));
    };
    widgetHoroscopoMenu.prototype._onSignLoaded = function(ev, sign) {
        var signSlug = typeof sign == 'object' ? sign.slug : sign;
        this.currentSign = signSlug;
        this._markSign(signSlug);
    };
    widgetHoroscopoMenu.prototype._onHoroscopeData = function(ev, horoscopeData) {
        $.each(horoscopeData, $.proxy(function(i, sign) {
            this.container.find('[data-sign_slug=' + sign.slug + ']').data("widget-horoscopo__tooltip", sign.name);
            this.container.find('[value=' + sign.slug + ']').text(sign.name);
        }, this));
    };
    widgetHoroscopoMenu.prototype._onSignsAvailable = function(ev, signs) {
        this.signs = signs;
        this._createElements();
    };
    widgetHoroscopoMenu.prototype._onChangeSign = function(ev) {
        this._trigger("onSignSelected", [{
            slug: this.container.find(".widget-horoscopo__select").val()
        }]);
    };
    widgetHoroscopoMenu.prototype._markSign = function(slug) {
        this.container.find('.' + this.signsClass).removeClass(this.signSelectedClass);
        this.container.find("[data-sign_slug=" + slug + "]").addClass(this.signSelectedClass);
        this.container.find(".widget-horoscopo__select").blur();
    };
})(jQuery);;
(function($) {
    'use strict';
    jQuery.fn.widgetHoroscopoDataSource = function() {
        new widgetHoroscopoDataSource($(this));
    };
    var widgetHoroscopoDataSource = function(element) {
        this.options = hui.extend(this.options, {});
        this.element = element;
        this._create();
    };
    widgetHoroscopoDataSource.prototype = new hui.baseWidgetService;
    widgetHoroscopoDataSource.prototype._create = function() {
        window.glb = window.glb || {};
        window.glb.preferences = window.glb.preferences || [];
        var self = this;
        this.elements = {};
        this._loadSigns();
        this._findPreferredSign(function(sign) {
            globoapi.horoscope.onSuccess('complete', $.proxy(self._allHoroscopesLoaded, self));
            globoapi.horoscope.onSuccess('complete.' + sign, $.proxy(self._signLoaded, self));
            globoapi.horoscope.update('complete.' + sign);
        });
        this._bindEvents();
    };
    widgetHoroscopoDataSource.prototype._loadSigns = function() {
        this.signs = [{
            name: "aries",
            end: '0419',
            period: '21/03 a 19/04'
        }, {
            name: "touro",
            end: '0520',
            period: '20/04 a 20/05'
        }, {
            name: "gemeos",
            end: '0621',
            period: '21/05 a 21/06'
        }, {
            name: "cancer",
            end: '0722',
            period: '22/06 a 22/07'
        }, {
            name: "leao",
            end: '0822',
            period: '23/07 a 22/08'
        }, {
            name: "virgem",
            end: '0922',
            period: '23/08 a 22/09'
        }, {
            name: "libra",
            end: '1022',
            period: '23/09 a 22/10'
        }, {
            name: "escorpiao",
            end: '1121',
            period: '23/10 a 21/11'
        }, {
            name: "sagitario",
            end: '1221',
            period: '22/11 a 21/12'
        }, {
            name: "capricornio",
            end: '0119',
            period: '22/12 a 19/01'
        }, {
            name: "aquario",
            end: '0218',
            period: '20/01 a 18/02'
        }, {
            name: "peixes",
            end: '0320',
            period: '19/02 a 20/03'
        }];
        this._trigger("onSignsAvailable", [this.signs]);
    };
    widgetHoroscopoDataSource.prototype._findPreferredSign = function(callback) {
        var self = this;
        window.glb.preferences.push(['get', {
            product: 'entretenimento',
            key: 'signo',
            callback: function(preferredSign) {
                if (preferredSign) {
                    return callback.apply(this, [preferredSign]);
                }
                var sortedSigns = self.signs.slice(0);
                sortedSigns.sort(function(a, b) {
                    return a.end.localeCompare(b.end);
                });
                var d = new Date(),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    month_year = (month.length == 1 ? '0' + month : month) + (day.length == 1 ? '0' + day : day);
                var name = sortedSigns[0].name;
                for (var i = 0, len = sortedSigns.length; i < len; ++i) {
                    if (month_year < sortedSigns[i].end) {
                        name = sortedSigns[i].name;
                        break;
                    }
                }
                return callback.apply(this, [name]);
            }
        }]);
    };
    widgetHoroscopoDataSource.prototype._bindEvents = function() {
        this._bind("onSignSelected", this._onSignSelected);
    };
    widgetHoroscopoDataSource.prototype._onSignSelected = function(ev, sign) {
        window.glb.preferences.push(['put', {
            product: 'entretenimento',
            key: 'signo',
            value: sign.slug
        }]);
    };
    widgetHoroscopoDataSource.prototype._signLoaded = function(sign) {
        this._trigger("onSignLoaded", sign);
        globoapi.horoscope.update('complete');
    };
    widgetHoroscopoDataSource.prototype._allHoroscopesLoaded = function(horoscopeData) {
        this._trigger("onHoroscopeData", horoscopeData);
    };
})(jQuery);;
(function($) {
    'use strict';
    jQuery.fn.widgetHoroscopoAnalytics = function() {
        new widgetHoroscopoAnalytics($(this));
    };
    var widgetHoroscopoAnalytics = function(element) {
        this.options = hui.extend(this.options, {});
        this.element = element;
        this._create();
    };
    widgetHoroscopoAnalytics.prototype = new hui.baseWidgetService;
    widgetHoroscopoAnalytics.prototype._create = function() {
        this.elements = {};
        this._bindEvents();
    };
    widgetHoroscopoAnalytics.prototype._bindEvents = function() {
        this._bind("onSignSelected", this._onSignSelected);
    };
    widgetHoroscopoAnalytics.prototype._onSignSelected = function(ev, sign) {
        window._gaq.push(['_trackEvent', 'Horoscopo', 'Troca Signo', sign.slug]);
    };
})(jQuery);
(function($) {
    $("#home-widget-horoscopo").widgetHoroscopo();
})(jQuery);
(function() {
    var getData, initVitrines, optionsAjax, url, widgets;
    window.globoComVitrines = [];
    widgets = $('.widget-shopping');
    getData = function(shopping, dataAttr) {
        return shopping.attr('data-' + dataAttr);
    };
    initVitrines = function() {
        return widgets.each(function() {
            var brandingColor, options, responsive, shopping, sitepage, vitrine;
            shopping = $(this);
            sitepage = getData(shopping, 'sitepage');
            responsive = getData(shopping, 'responsive') === 'on';
            brandingColor = getData(shopping, 'branding-color');
            if (sitepage == null) {
                sitepage = "globocom/home";
            }
            options = {
                sitepage: sitepage,
                container: shopping.attr('id')
            };
            if (brandingColor !== "") {
                options.text_color = brandingColor;
            }
            vitrine = new Vitrine(options);
            vitrine.init();
            return window.globoComVitrines.push(vitrine);
        });
    };
    if (widgets.length > 0) {
        url = getData(widgets.first(), 'url') || "http://vitrines.globo.com/vitrine/vitrine.min.js";
        optionsAjax = {
            url: url,
            dataType: "script",
            cache: true,
            success: initVitrines
        };
        $.ajax(optionsAjax);
    }
}).call(this);
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define("bloodhound", ["jquery"], function(a0) {
            return root["Bloodhound"] = factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        root["Bloodhound"] = factory(jQuery);
    }
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);

                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;

                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this,
                        args = arguments,
                        later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(),
                        remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            noop: function() {}
        };
    }();
    var VERSION = "0.11.1";
    var tokenizers = function() {
        "use strict";
        return {
            nonword: nonword,
            whitespace: whitespace,
            obj: {
                nonword: getObjTokenizer(nonword),
                whitespace: getObjTokenizer(whitespace)
            }
        };

        function whitespace(str) {
            str = _.toStr(str);
            return str ? str.split(/\s+/) : [];
        }

        function nonword(str) {
            str = _.toStr(str);
            return str ? str.split(/\W+/) : [];
        }

        function getObjTokenizer(tokenizer) {
            return function setKey(keys) {
                keys = _.isArray(keys) ? keys : [].slice.call(arguments, 0);
                return function tokenize(o) {
                    var tokens = [];
                    _.each(keys, function(k) {
                        tokens = tokens.concat(tokenizer(_.toStr(o[k])));
                    });
                    return tokens;
                };
            };
        }
    }();
    var LruCache = function() {
        "use strict";

        function LruCache(maxSize) {
            this.maxSize = _.isNumber(maxSize) ? maxSize : 100;
            this.reset();
            if (this.maxSize <= 0) {
                this.set = this.get = $.noop;
            }
        }
        _.mixin(LruCache.prototype, {
            set: function set(key, val) {
                var tailItem = this.list.tail,
                    node;
                if (this.size >= this.maxSize) {
                    this.list.remove(tailItem);
                    delete this.hash[tailItem.key];
                    this.size--;
                }
                if (node = this.hash[key]) {
                    node.val = val;
                    this.list.moveToFront(node);
                } else {
                    node = new Node(key, val);
                    this.list.add(node);
                    this.hash[key] = node;
                    this.size++;
                }
            },
            get: function get(key) {
                var node = this.hash[key];
                if (node) {
                    this.list.moveToFront(node);
                    return node.val;
                }
            },
            reset: function reset() {
                this.size = 0;
                this.hash = {};
                this.list = new List();
            }
        });

        function List() {
            this.head = this.tail = null;
        }
        _.mixin(List.prototype, {
            add: function add(node) {
                if (this.head) {
                    node.next = this.head;
                    this.head.prev = node;
                }
                this.head = node;
                this.tail = this.tail || node;
            },
            remove: function remove(node) {
                node.prev ? node.prev.next = node.next : this.head = node.next;
                node.next ? node.next.prev = node.prev : this.tail = node.prev;
            },
            moveToFront: function(node) {
                this.remove(node);
                this.add(node);
            }
        });

        function Node(key, val) {
            this.key = key;
            this.val = val;
            this.prev = this.next = null;
        }
        return LruCache;
    }();
    var PersistentStorage = function() {
        "use strict";
        var LOCAL_STORAGE;
        try {
            LOCAL_STORAGE = window.localStorage;
            LOCAL_STORAGE.setItem("~~~", "!");
            LOCAL_STORAGE.removeItem("~~~");
        } catch (err) {
            LOCAL_STORAGE = null;
        }

        function PersistentStorage(namespace, override) {
            this.prefix = ["__", namespace, "__"].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));
            this.ls = override || LOCAL_STORAGE;
            !this.ls && this._noop();
        }
        _.mixin(PersistentStorage.prototype, {
            _prefix: function(key) {
                return this.prefix + key;
            },
            _ttlKey: function(key) {
                return this._prefix(key) + this.ttlKey;
            },
            _noop: function() {
                this.get = this.set = this.remove = this.clear = this.isExpired = _.noop;
            },
            _safeSet: function(key, val) {
                try {
                    this.ls.setItem(key, val);
                } catch (err) {
                    if (err.name === "QuotaExceededError") {
                        this.clear();
                        this._noop();
                    }
                }
            },
            get: function(key) {
                if (this.isExpired(key)) {
                    this.remove(key);
                }
                return decode(this.ls.getItem(this._prefix(key)));
            },
            set: function(key, val, ttl) {
                if (_.isNumber(ttl)) {
                    this._safeSet(this._ttlKey(key), encode(now() + ttl));
                } else {
                    this.ls.removeItem(this._ttlKey(key));
                }
                return this._safeSet(this._prefix(key), encode(val));
            },
            remove: function(key) {
                this.ls.removeItem(this._ttlKey(key));
                this.ls.removeItem(this._prefix(key));
                return this;
            },
            clear: function() {
                var i, keys = gatherMatchingKeys(this.keyMatcher);
                for (i = keys.length; i--;) {
                    this.remove(keys[i]);
                }
                return this;
            },
            isExpired: function(key) {
                var ttl = decode(this.ls.getItem(this._ttlKey(key)));
                return _.isNumber(ttl) && now() > ttl ? true : false;
            }
        });
        return PersistentStorage;

        function now() {
            return new Date().getTime();
        }

        function encode(val) {
            return JSON.stringify(_.isUndefined(val) ? null : val);
        }

        function decode(val) {
            return $.parseJSON(val);
        }

        function gatherMatchingKeys(keyMatcher) {
            var i, key, keys = [],
                len = LOCAL_STORAGE.length;
            for (i = 0; i < len; i++) {
                if ((key = LOCAL_STORAGE.key(i)).match(keyMatcher)) {
                    keys.push(key.replace(keyMatcher, ""));
                }
            }
            return keys;
        }
    }();
    var Transport = function() {
        "use strict";
        var pendingRequestsCount = 0,
            pendingRequests = {},
            maxPendingRequests = 6,
            sharedCache = new LruCache(10);

        function Transport(o) {
            o = o || {};
            this.cancelled = false;
            this.lastReq = null;
            this._send = o.transport;
            this._get = o.limiter ? o.limiter(this._get) : this._get;
            this._cache = o.cache === false ? new LruCache(0) : sharedCache;
        }
        Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
            maxPendingRequests = num;
        };
        Transport.resetCache = function resetCache() {
            sharedCache.reset();
        };
        _.mixin(Transport.prototype, {
            _fingerprint: function fingerprint(o) {
                o = o || {};
                return o.url + o.type + $.param(o.data || {});
            },
            _get: function(o, cb) {
                var that = this,
                    fingerprint, jqXhr;
                fingerprint = this._fingerprint(o);
                if (this.cancelled || fingerprint !== this.lastReq) {
                    return;
                }
                if (jqXhr = pendingRequests[fingerprint]) {
                    jqXhr.done(done).fail(fail);
                } else if (pendingRequestsCount < maxPendingRequests) {
                    pendingRequestsCount++;
                    pendingRequests[fingerprint] = this._send(o).done(done).fail(fail).always(always);
                } else {
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);
                }

                function done(resp) {
                    cb(null, resp);
                    that._cache.set(fingerprint, resp);
                }

                function fail() {
                    cb(true);
                }

                function always() {
                    pendingRequestsCount--;
                    delete pendingRequests[fingerprint];
                    if (that.onDeckRequestArgs) {
                        that._get.apply(that, that.onDeckRequestArgs);
                        that.onDeckRequestArgs = null;
                    }
                }
            },
            get: function(o, cb) {
                var resp, fingerprint;
                cb = cb || $.noop;
                o = _.isString(o) ? {
                    url: o
                } : o || {};
                fingerprint = this._fingerprint(o);
                this.cancelled = false;
                this.lastReq = fingerprint;
                if (resp = this._cache.get(fingerprint)) {
                    cb(null, resp);
                } else {
                    this._get(o, cb);
                }
            },
            cancel: function() {
                this.cancelled = true;
            }
        });
        return Transport;
    }();
    var SearchIndex = window.SearchIndex = function() {
        "use strict";
        var CHILDREN = "c",
            IDS = "i";

        function SearchIndex(o) {
            o = o || {};
            if (!o.datumTokenizer || !o.queryTokenizer) {
                $.error("datumTokenizer and queryTokenizer are both required");
            }
            this.identify = o.identify || _.stringify;
            this.datumTokenizer = o.datumTokenizer;
            this.queryTokenizer = o.queryTokenizer;
            this.reset();
        }
        _.mixin(SearchIndex.prototype, {
            bootstrap: function bootstrap(o) {
                this.datums = o.datums;
                this.trie = o.trie;
            },
            add: function(data) {
                var that = this;
                data = _.isArray(data) ? data : [data];
                _.each(data, function(datum) {
                    var id, tokens;
                    that.datums[id = that.identify(datum)] = datum;
                    tokens = normalizeTokens(that.datumTokenizer(datum));
                    _.each(tokens, function(token) {
                        var node, chars, ch;
                        node = that.trie;
                        chars = token.split("");
                        while (ch = chars.shift()) {
                            node = node[CHILDREN][ch] || (node[CHILDREN][ch] = newNode());
                            node[IDS].push(id);
                        }
                    });
                });
            },
            get: function get(ids) {
                var that = this;
                return _.map(ids, function(id) {
                    return that.datums[id];
                });
            },
            search: function search(query) {
                var that = this,
                    tokens, matches;
                tokens = normalizeTokens(this.queryTokenizer(query));
                _.each(tokens, function(token) {
                    var node, chars, ch, ids;
                    if (matches && matches.length === 0) {
                        return false;
                    }
                    node = that.trie;
                    chars = token.split("");
                    while (node && (ch = chars.shift())) {
                        node = node[CHILDREN][ch];
                    }
                    if (node && chars.length === 0) {
                        ids = node[IDS].slice(0);
                        matches = matches ? getIntersection(matches, ids) : ids;
                    } else {
                        matches = [];
                        return false;
                    }
                });
                return matches ? _.map(unique(matches), function(id) {
                    return that.datums[id];
                }) : [];
            },
            all: function all() {
                var values = [];
                for (var key in this.datums) {
                    values.push(this.datums[key]);
                }
                return values;
            },
            reset: function reset() {
                this.datums = {};
                this.trie = newNode();
            },
            serialize: function serialize() {
                return {
                    datums: this.datums,
                    trie: this.trie
                };
            }
        });
        return SearchIndex;

        function normalizeTokens(tokens) {
            tokens = _.filter(tokens, function(token) {
                return !!token;
            });
            tokens = _.map(tokens, function(token) {
                return token.toLowerCase();
            });
            return tokens;
        }

        function newNode() {
            var node = {};
            node[IDS] = [];
            node[CHILDREN] = {};
            return node;
        }

        function unique(array) {
            var seen = {},
                uniques = [];
            for (var i = 0, len = array.length; i < len; i++) {
                if (!seen[array[i]]) {
                    seen[array[i]] = true;
                    uniques.push(array[i]);
                }
            }
            return uniques;
        }

        function getIntersection(arrayA, arrayB) {
            var ai = 0,
                bi = 0,
                intersection = [];
            arrayA = arrayA.sort();
            arrayB = arrayB.sort();
            var lenArrayA = arrayA.length,
                lenArrayB = arrayB.length;
            while (ai < lenArrayA && bi < lenArrayB) {
                if (arrayA[ai] < arrayB[bi]) {
                    ai++;
                } else if (arrayA[ai] > arrayB[bi]) {
                    bi++;
                } else {
                    intersection.push(arrayA[ai]);
                    ai++;
                    bi++;
                }
            }
            return intersection;
        }
    }();
    var Prefetch = function() {
        "use strict";
        var keys;
        keys = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        };

        function Prefetch(o) {
            this.url = o.url;
            this.ttl = o.ttl;
            this.cache = o.cache;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.transport = o.transport;
            this.thumbprint = o.thumbprint;
            this.storage = new PersistentStorage(o.cacheKey);
        }
        _.mixin(Prefetch.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            store: function store(data) {
                if (!this.cache) {
                    return;
                }
                this.storage.set(keys.data, data, this.ttl);
                this.storage.set(keys.protocol, location.protocol, this.ttl);
                this.storage.set(keys.thumbprint, this.thumbprint, this.ttl);
            },
            fromCache: function fromCache() {
                var stored = {},
                    isExpired;
                if (!this.cache) {
                    return null;
                }
                stored.data = this.storage.get(keys.data);
                stored.protocol = this.storage.get(keys.protocol);
                stored.thumbprint = this.storage.get(keys.thumbprint);
                isExpired = stored.thumbprint !== this.thumbprint || stored.protocol !== location.protocol;
                return stored.data && !isExpired ? stored.data : null;
            },
            fromNetwork: function(cb) {
                var that = this,
                    settings;
                if (!cb) {
                    return;
                }
                settings = this.prepare(this._settings());
                this.transport(settings).fail(onError).done(onResponse);

                function onError() {
                    cb(true);
                }

                function onResponse(resp) {
                    cb(null, that.transform(resp));
                }
            },
            clear: function clear() {
                this.storage.clear();
                return this;
            }
        });
        return Prefetch;
    }();
    var Remote = function() {
        "use strict";

        function Remote(o) {
            this.url = o.url;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.transport = new Transport({
                cache: o.cache,
                limiter: o.limiter,
                transport: o.transport
            });
        }
        _.mixin(Remote.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            get: function get(query, cb) {
                var that = this,
                    settings;
                if (!cb) {
                    return;
                }
                query = query || "";
                settings = this.prepare(query, this._settings());
                return this.transport.get(settings, onResponse);

                function onResponse(err, resp) {
                    err ? cb([]) : cb(that.transform(resp));
                }
            },
            cancelLastRequest: function cancelLastRequest() {
                this.transport.cancel();
            }
        });
        return Remote;
    }();
    var oParser = function() {
        "use strict";
        return function parse(o) {
            var defaults, sorter;
            defaults = {
                initialize: true,
                identify: _.stringify,
                datumTokenizer: null,
                queryTokenizer: null,
                sufficient: 5,
                sorter: null,
                local: [],
                prefetch: null,
                remote: null
            };
            o = _.mixin(defaults, o || {});
            !o.datumTokenizer && $.error("datumTokenizer is required");
            !o.queryTokenizer && $.error("queryTokenizer is required");
            sorter = o.sorter;
            o.sorter = sorter ? function(x) {
                return x.sort(sorter);
            } : _.identity;
            o.local = _.isFunction(o.local) ? o.local() : o.local;
            o.prefetch = parsePrefetch(o.prefetch);
            o.remote = parseRemote(o.remote);
            return o;
        };

        function parsePrefetch(o) {
            var defaults;
            if (!o) {
                return null;
            }
            defaults = {
                url: null,
                ttl: 24 * 60 * 60 * 1e3,
                cache: true,
                cacheKey: null,
                thumbprint: "",
                prepare: _.identity,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("prefetch requires url to be set");
            o.transform = o.filter || o.transform;
            o.cacheKey = o.cacheKey || o.url;
            o.thumbprint = VERSION + o.thumbprint;
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            return o;
        }

        function parseRemote(o) {
            var defaults;
            if (!o) {
                return;
            }
            defaults = {
                url: null,
                cache: true,
                prepare: null,
                replace: null,
                wildcard: null,
                limiter: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("remote requires url to be set");
            o.transform = o.filter || o.transform;
            o.prepare = toRemotePrepare(o);
            o.limiter = toLimiter(o);
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            delete o.replace;
            delete o.wildcard;
            delete o.rateLimitBy;
            delete o.rateLimitWait;
            return o;
        }

        function toRemotePrepare(o) {
            var prepare, replace, wildcard;
            prepare = o.prepare;
            replace = o.replace;
            wildcard = o.wildcard;
            if (prepare) {
                return prepare;
            }
            if (replace) {
                prepare = prepareByReplace;
            } else if (o.wildcard) {
                prepare = prepareByWildcard;
            } else {
                prepare = idenityPrepare;
            }
            return prepare;

            function prepareByReplace(query, settings) {
                settings.url = replace(settings.url, query);
                return settings;
            }

            function prepareByWildcard(query, settings) {
                settings.url = settings.url.replace(wildcard, encodeURIComponent(query));
                return settings;
            }

            function idenityPrepare(query, settings) {
                return settings;
            }
        }

        function toLimiter(o) {
            var limiter, method, wait;
            limiter = o.limiter;
            method = o.rateLimitBy;
            wait = o.rateLimitWait;
            if (!limiter) {
                limiter = /^throttle$/i.test(method) ? throttle(wait) : debounce(wait);
            }
            return limiter;

            function debounce(wait) {
                return function debounce(fn) {
                    return _.debounce(fn, wait);
                };
            }

            function throttle(wait) {
                return function throttle(fn) {
                    return _.throttle(fn, wait);
                };
            }
        }

        function callbackToDeferred(fn) {
            return function wrapper(o) {
                var deferred = $.Deferred();
                fn(o, onSuccess, onError);
                return deferred;

                function onSuccess(resp) {
                    _.defer(function() {
                        deferred.resolve(resp);
                    });
                }

                function onError(err) {
                    _.defer(function() {
                        deferred.reject(err);
                    });
                }
            };
        }
    }();
    var Bloodhound = function() {
        "use strict";
        var old;
        old = window && window.Bloodhound;

        function Bloodhound(o) {
            o = oParser(o);
            this.sorter = o.sorter;
            this.identify = o.identify;
            this.sufficient = o.sufficient;
            this.local = o.local;
            this.remote = o.remote ? new Remote(o.remote) : null;
            this.prefetch = o.prefetch ? new Prefetch(o.prefetch) : null;
            this.index = new SearchIndex({
                identify: this.identify,
                datumTokenizer: o.datumTokenizer,
                queryTokenizer: o.queryTokenizer
            });
            o.initialize !== false && this.initialize();
        }
        Bloodhound.noConflict = function noConflict() {
            window && (window.Bloodhound = old);
            return Bloodhound;
        };
        Bloodhound.tokenizers = tokenizers;
        _.mixin(Bloodhound.prototype, {
            __ttAdapter: function ttAdapter() {
                var that = this;
                return this.remote ? withAsync : withoutAsync;

                function withAsync(query, sync, async) {
                    return that.search(query, sync, async);
                }

                function withoutAsync(query, sync) {
                    return that.search(query, sync);
                }
            },
            _loadPrefetch: function loadPrefetch() {
                var that = this,
                    deferred, serialized;
                deferred = $.Deferred();
                if (!this.prefetch) {
                    deferred.resolve();
                } else if (serialized = this.prefetch.fromCache()) {
                    this.index.bootstrap(serialized);
                    deferred.resolve();
                } else {
                    this.prefetch.fromNetwork(done);
                }
                return deferred.promise();

                function done(err, data) {
                    if (err) {
                        return deferred.reject();
                    }
                    that.add(data);
                    that.prefetch.store(that.index.serialize());
                    deferred.resolve();
                }
            },
            _initialize: function initialize() {
                var that = this,
                    deferred;
                this.clear();
                (this.initPromise = this._loadPrefetch()).done(addLocalToIndex);
                return this.initPromise;

                function addLocalToIndex() {
                    that.add(that.local);
                }
            },
            initialize: function initialize(force) {
                return !this.initPromise || force ? this._initialize() : this.initPromise;
            },
            add: function add(data) {
                this.index.add(data);
                return this;
            },
            get: function get(ids) {
                ids = _.isArray(ids) ? ids : [].slice.call(arguments);
                return this.index.get(ids);
            },
            search: function search(query, sync, async) {
                var that = this,
                    local;
                local = this.sorter(this.index.search(query));
                sync(this.remote ? local.slice() : local);
                if (this.remote && local.length < this.sufficient) {
                    this.remote.get(query, processRemote);
                } else if (this.remote) {
                    this.remote.cancelLastRequest();
                }
                return this;

                function processRemote(remote) {
                    var nonDuplicates = [];
                    _.each(remote, function(r) {
                        !_.some(local, function(l) {
                            return that.identify(r) === that.identify(l);
                        }) && nonDuplicates.push(r);
                    });
                    async &&async (nonDuplicates);
                }
            },
            all: function all() {
                return this.index.all();
            },
            clear: function clear() {
                this.index.reset();
                return this;
            },
            clearPrefetchCache: function clearPrefetchCache() {
                this.prefetch && this.prefetch.clear();
                return this;
            },
            clearRemoteCache: function clearRemoteCache() {
                Transport.resetCache();
                return this;
            },
            ttAdapter: function ttAdapter() {
                return this.__ttAdapter();
            }
        });
        return Bloodhound;
    }();
    return Bloodhound;
});
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define("typeahead.js", ["jquery"], function(a0) {
            return factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);

                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;

                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this,
                        args = arguments,
                        later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(),
                        remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            noop: function() {}
        };
    }();
    var WWW = function() {
        "use strict";
        var defaultClassNames = {
            wrapper: "twitter-typeahead",
            input: "tt-input",
            hint: "tt-hint",
            menu: "tt-menu",
            dataset: "tt-dataset",
            suggestion: "tt-suggestion",
            selectable: "tt-selectable",
            empty: "tt-empty",
            open: "tt-open",
            cursor: "tt-cursor",
            highlight: "tt-highlight"
        };
        return build;

        function build(o) {
            var www, classes;
            classes = _.mixin({}, defaultClassNames, o);
            www = {
                css: buildCss(),
                classes: classes,
                html: buildHtml(classes),
                selectors: buildSelectors(classes)
            };
            return {
                css: www.css,
                html: www.html,
                classes: www.classes,
                selectors: www.selectors,
                mixin: function(o) {
                    _.mixin(o, www);
                }
            };
        }

        function buildHtml(c) {
            return {
                wrapper: '<span class="' + c.wrapper + '"></span>',
                menu: '<div class="' + c.menu + '"></div>'
            };
        }

        function buildSelectors(classes) {
            var selectors = {};
            _.each(classes, function(v, k) {
                selectors[k] = "." + v;
            });
            return selectors;
        }

        function buildCss() {
            var css = {
                wrapper: {
                    position: "relative",
                    display: "inline-block"
                },
                hint: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderColor: "transparent",
                    boxShadow: "none",
                    opacity: "1"
                },
                input: {
                    position: "relative",
                    verticalAlign: "top",
                    backgroundColor: "transparent"
                },
                inputWithNoHint: {
                    position: "relative",
                    verticalAlign: "top"
                },
                menu: {
                    position: "absolute",
                    top: "100%",
                    left: "-40px",
                    zIndex: "100",
                    display: "none"
                },
                ltr: {
                    left: "0",
                    right: "auto"
                },
                rtl: {
                    left: "auto",
                    right: " 0"
                }
            };
            if (_.isMsie()) {
                _.mixin(css.input, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                });
            }
            return css;
        }
    }();
    var EventBus = function() {
        "use strict";
        var namespace, deprecationMap;
        namespace = "typeahead:";
        deprecationMap = {
            render: "rendered",
            cursorchange: "cursorchanged",
            select: "selected",
            autocomplete: "autocompleted"
        };

        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        _.mixin(EventBus.prototype, {
            _trigger: function(type, args) {
                var $e;
                $e = $.Event(namespace + type);
                (args = args || []).unshift($e);
                this.$el.trigger.apply(this.$el, args);
                return $e;
            },
            before: function(type) {
                var args, $e;
                args = [].slice.call(arguments, 1);
                $e = this._trigger("before" + type, args);
                return $e.isDefaultPrevented();
            },
            trigger: function(type) {
                var deprecatedType;
                this._trigger(type, [].slice.call(arguments, 1));
                if (deprecatedType = deprecationMap[type]) {
                    this._trigger(deprecatedType, [].slice.call(arguments, 1));
                }
            }
        });
        return EventBus;
    }();
    var EventEmitter = function() {
        "use strict";
        var splitter = /\s+/,
            nextTick = getNextTick();
        return {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
        };

        function on(method, types, cb, context) {
            var type;
            if (!cb) {
                return this;
            }
            types = types.split(splitter);
            cb = context ? bindContext(cb, context) : cb;
            this._callbacks = this._callbacks || {};
            while (type = types.shift()) {
                this._callbacks[type] = this._callbacks[type] || {
                    sync: [],
                    async: []
                };
                this._callbacks[type][method].push(cb);
            }
            return this;
        }

        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context);
        }

        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context);
        }

        function off(types) {
            var type;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            while (type = types.shift()) {
                delete this._callbacks[type];
            }
            return this;
        }

        function trigger(types) {
            var type, callbacks, args, syncFlush, asyncFlush;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            args = [].slice.call(arguments, 1);
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                syncFlush = getFlush(callbacks.sync, this, [type].concat(args));
                asyncFlush = getFlush(callbacks.async, this, [type].concat(args));
                syncFlush() && nextTick(asyncFlush);
            }
            return this;
        }

        function getFlush(callbacks, context, args) {
            return flush;

            function flush() {
                var cancelled;
                for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
                    cancelled = callbacks[i].apply(context, args) === false;
                }
                return !cancelled;
            }
        }

        function getNextTick() {
            var nextTickFn;
            if (window.setImmediate) {
                nextTickFn = function nextTickSetImmediate(fn) {
                    setImmediate(function() {
                        fn();
                    });
                };
            } else {
                nextTickFn = function nextTickSetTimeout(fn) {
                    setTimeout(function() {
                        fn();
                    }, 0);
                };
            }
            return nextTickFn;
        }

        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0));
            };
        }
    }();
    var highlight = function(doc) {
        "use strict";
        var defaults = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: false,
            caseSensitive: false
        };
        return function hightlight(o) {
            var regex;
            o = _.mixin({}, defaults, o);
            if (!o.node || !o.pattern) {
                return;
            }
            o.pattern = _.isArray(o.pattern) ? o.pattern : [o.pattern];
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
            traverse(o.node, hightlightTextNode);

            function hightlightTextNode(textNode) {
                var match, patternNode, wrapperNode;
                if (match = regex.exec(textNode.data)) {
                    wrapperNode = doc.createElement(o.tagName);
                    o.className && (wrapperNode.className = o.className);
                    patternNode = textNode.splitText(match.index);
                    patternNode.splitText(match[0].length);
                    wrapperNode.appendChild(patternNode.cloneNode(true));
                    textNode.parentNode.replaceChild(wrapperNode, patternNode);
                }
                return !!match;
            }

            function traverse(el, hightlightTextNode) {
                var childNode, TEXT_NODE_TYPE = 3;
                for (var i = 0; i < el.childNodes.length; i++) {
                    childNode = el.childNodes[i];
                    if (childNode.nodeType === TEXT_NODE_TYPE) {
                        i += hightlightTextNode(childNode) ? 1 : 0;
                    } else {
                        traverse(childNode, hightlightTextNode);
                    }
                }
            }
        };

        function getRegex(patterns, caseSensitive, wordsOnly) {
            var escapedPatterns = [],
                regexStr;
            for (var i = 0, len = patterns.length; i < len; i++) {
                escapedPatterns.push(_.escapeRegExChars(patterns[i]));
            }
            regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
        }
    }(window.document);
    var Input = function() {
        "use strict";
        var specialKeyCodeMap;
        specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        };

        function Input(o, www) {
            o = o || {};
            if (!o.input) {
                $.error("input is missing");
            }
            www.mixin(this);
            this.$hint = $(o.hint);
            this.$input = $(o.input);
            this.query = this.$input.val();
            this.queryWhenFocused = this.hasFocus() ? this.query : null;
            this.$overflowHelper = buildOverflowHelper(this.$input);
            this._checkLanguageDirection();
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
            }
        }
        Input.normalizeQuery = function(str) {
            return _.toStr(str).replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
        };
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.trigger("blurred");
            },
            _onFocus: function onFocus() {
                this.queryWhenFocused = this.query;
                this.trigger("focused");
            },
            _onKeydown: function onKeydown($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e);
                if (keyName && this._shouldTrigger(keyName, $e)) {
                    this.trigger(keyName + "Keyed", $e);
                }
            },
            _onInput: function onInput() {
                this._setQuery(this.getInputValue());
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault;
                switch (keyName) {
                    case "up":
                    case "down":
                        preventDefault = !withModifier($e);
                        break;
                    default:
                        preventDefault = false;
                }
                preventDefault && $e.preventDefault();
            },
            _shouldTrigger: function shouldTrigger(keyName, $e) {
                var trigger;
                switch (keyName) {
                    case "tab":
                        trigger = !withModifier($e);
                        break;
                    default:
                        trigger = true;
                }
                return trigger;
            },
            _checkLanguageDirection: function checkLanguageDirection() {
                var dir = (this.$input.css("direction") || "ltr").toLowerCase();
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.$hint.attr("dir", dir);
                    this.trigger("langDirChanged", dir);
                }
            },
            _setQuery: function setQuery(val, silent) {
                var areEquivalent, hasDifferentWhitespace;
                areEquivalent = areQueriesEquivalent(val, this.query);
                hasDifferentWhitespace = areEquivalent ? this.query.length !== val.length : false;
                this.query = val;
                if (!silent && !areEquivalent) {
                    this.trigger("queryChanged", this.query);
                } else if (!silent && hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query);
                }
            },
            bind: function() {
                var that = this,
                    onBlur, onFocus, onKeydown, onInput;
                onBlur = _.bind(this._onBlur, this);
                onFocus = _.bind(this._onFocus, this);
                onKeydown = _.bind(this._onKeydown, this);
                onInput = _.bind(this._onInput, this);
                this.$input.on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
                if (!_.isMsie() || _.isMsie() > 9) {
                    this.$input.on("input.tt", onInput);
                } else {
                    this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                        if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                            return;
                        }
                        _.defer(_.bind(that._onInput, that, $e));
                    });
                }
                return this;
            },
            focus: function focus() {
                this.$input.focus();
            },
            blur: function blur() {
                this.$input.blur();
            },
            getLangDir: function getLangDir() {
                return this.dir;
            },
            getQuery: function getQuery() {
                return this.query || "";
            },
            setQuery: function setQuery(val, silent) {
                this.setInputValue(val);
                this._setQuery(val, silent);
            },
            hasQueryChangedSinceLastFocus: function hasQueryChangedSinceLastFocus() {
                return this.query !== this.queryWhenFocused;
            },
            getInputValue: function getInputValue() {
                return this.$input.val();
            },
            setInputValue: function setInputValue(value) {
                this.$input.val(value);
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query);
            },
            getHint: function getHint() {
                return this.$hint.val();
            },
            setHint: function setHint(value) {
                this.$hint.val(value);
            },
            clearHint: function clearHint() {
                this.setHint("");
            },
            clearHintIfInvalid: function clearHintIfInvalid() {
                var val, hint, valIsPrefixOfHint, isValid;
                val = this.getInputValue();
                hint = this.getHint();
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                !isValid && this.clearHint();
            },
            hasFocus: function hasFocus() {
                return this.$input.is(":focus");
            },
            hasOverflow: function hasOverflow() {
                var constraint = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= constraint;
            },
            isCursorAtEnd: function() {
                var valueLength, selectionStart, range;
                valueLength = this.$input.val().length;
                selectionStart = this.$input[0].selectionStart;
                if (_.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
                }
                return true;
            },
            destroy: function destroy() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$overflowHelper.remove();
                this.$hint = this.$input = this.$overflowHelper = $("<div>");
            }
        });
        return Input;

        function buildOverflowHelper($input) {
            return $('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input);
        }

        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b);
        }

        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
        }
    }();
    var Dataset = function() {
        "use strict";
        var keys, nameGenerator;
        keys = {
            val: "tt-selectable-display",
            obj: "tt-selectable-object"
        };
        nameGenerator = _.getIdGenerator();

        function Dataset(o, www) {
            o = o || {};
            o.templates = o.templates || {};
            o.templates.notFound = o.templates.notFound || o.templates.empty;
            if (!o.source) {
                $.error("missing source");
            }
            if (!o.node) {
                $.error("missing node");
            }
            if (o.name && !isValidName(o.name)) {
                $.error("invalid dataset name: " + o.name);
            }
            www.mixin(this);
            this.highlight = !!o.highlight;
            this.name = o.name || nameGenerator();
            this.limit = o.limit || 5;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.source = o.source.__ttAdapter ? o.source.__ttAdapter() : o.source;
            this.async = _.isUndefined(o.async) ? this.source.length > 2 : !!o.async;
            this._resetLastSuggestion();
            this.$el = $(o.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name);
        }
        Dataset.extractData = function extractData(el) {
            var $el = $(el);
            if ($el.data(keys.obj)) {
                return {
                    val: $el.data(keys.val) || "",
                    obj: $el.data(keys.obj) || null
                };
            }
            return null;
        };
        _.mixin(Dataset.prototype, EventEmitter, {
            _overwrite: function overwrite(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (this.async && this.templates.pending) {
                    this._renderPending(query);
                } else if (!this.async && this.templates.notFound) {
                    this._renderNotFound(query);
                } else {
                    this._empty();
                }
                this.trigger("rendered", this.name, suggestions, false);
            },
            _append: function append(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length && this.$lastSuggestion.length) {
                    this._appendSuggestions(query, suggestions);
                } else if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (!this.$lastSuggestion.length && this.templates.notFound) {
                    this._renderNotFound(query);
                }
                this.trigger("rendered", this.name, suggestions, true);
            },
            _renderSuggestions: function renderSuggestions(query, suggestions) {
                var $fragment;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                this.$lastSuggestion = $fragment.children().last();
                this.$el.html($fragment).prepend(this._getHeader(query, suggestions)).append(this._getFooter(query, suggestions));
            },
            _appendSuggestions: function appendSuggestions(query, suggestions) {
                var $fragment, $lastSuggestion;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                $lastSuggestion = $fragment.children().last();
                this.$lastSuggestion.after($fragment);
                this.$lastSuggestion = $lastSuggestion;
            },
            _renderPending: function renderPending(query) {
                var template = this.templates.pending;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _renderNotFound: function renderNotFound(query) {
                var template = this.templates.notFound;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _empty: function empty() {
                this.$el.empty();
                this._resetLastSuggestion();
            },
            _getSuggestionsFragment: function getSuggestionsFragment(query, suggestions) {
                var that = this,
                    fragment;
                fragment = document.createDocumentFragment();
                _.each(suggestions, function getSuggestionNode(suggestion) {
                    var $el, context;
                    context = that._injectQuery(query, suggestion);
                    $el = $(that.templates.suggestion(context)).data(keys.obj, suggestion).data(keys.val, that.displayFn(suggestion)).addClass(that.classes.suggestion + " " + that.classes.selectable);
                    fragment.appendChild($el[0]);
                });
                this.highlight && highlight({
                    className: this.classes.highlight,
                    node: fragment,
                    pattern: query
                });
                return $(fragment);
            },
            _getFooter: function getFooter(query, suggestions) {
                return this.templates.footer ? this.templates.footer({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _getHeader: function getHeader(query, suggestions) {
                return this.templates.header ? this.templates.header({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _resetLastSuggestion: function resetLastSuggestion() {
                this.$lastSuggestion = $();
            },
            _injectQuery: function injectQuery(query, obj) {
                return _.isObject(obj) ? _.mixin({
                    _query: query
                }, obj) : obj;
            },
            update: function update(query) {
                var that = this,
                    canceled = false,
                    syncCalled = false,
                    rendered = 0;
                this.cancel();
                this.cancel = function cancel() {
                    canceled = true;
                    that.cancel = $.noop;
                    that.async && that.trigger("asyncCanceled", query);
                };
                this.source(query, sync, async);
                !syncCalled && sync([]);

                function sync(suggestions) {
                    if (syncCalled) {
                        return;
                    }
                    syncCalled = true;
                    suggestions = (suggestions || []).slice(0, that.limit);
                    rendered = suggestions.length;
                    that._overwrite(query, suggestions);
                    if (rendered < that.limit && that.async) {
                        that.trigger("asyncRequested", query);
                    }
                }

                function async (suggestions) {
                    suggestions = suggestions || [];
                    if (!canceled && rendered < that.limit) {
                        that.cancel = $.noop;
                        rendered += suggestions.length;
                        that._append(query, suggestions.slice(0, that.limit - rendered));
                        that.async && that.trigger("asyncReceived", query);
                    }
                }
            },
            cancel: $.noop,
            clear: function clear() {
                this._empty();
                this.cancel();
                this.trigger("cleared");
            },
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
            },
            destroy: function destroy() {
                this.$el = $("<div>");
            }
        });
        return Dataset;

        function getDisplayFn(display) {
            display = display || _.stringify;
            return _.isFunction(display) ? display : displayFn;

            function displayFn(obj) {
                return obj[display];
            }
        }

        function getTemplates(templates, displayFn) {
            return {
                notFound: templates.notFound && _.templatify(templates.notFound),
                pending: templates.pending && _.templatify(templates.pending),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            };

            function suggestionTemplate(context) {
                return $("<div>").text(displayFn(context));
            }
        }

        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
        }
    }();
    var Menu = function() {
        "use strict";

        function Menu(o, www) {
            var that = this;
            o = o || {};
            if (!o.node) {
                $.error("node is required");
            }
            www.mixin(this);
            this.$node = $(o.node);
            this.query = null;
            this.datasets = _.map(o.datasets, initializeDataset);

            function initializeDataset(oDataset) {
                var node = that.$node.find(oDataset.node).first();
                oDataset.node = node.length ? node : $("<div>").appendTo(that.$node);
                return new Dataset(oDataset, www);
            }
        }
        _.mixin(Menu.prototype, EventEmitter, {
            _onSelectableClick: function onSelectableClick($e) {
                this.trigger("selectableClicked", $($e.currentTarget));
            },
            _onRendered: function onRendered(type, dataset, suggestions, async) {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetRendered", dataset, suggestions, async);
            },
            _onCleared: function onCleared() {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetCleared");
            },
            _propagate: function propagate() {
                this.trigger.apply(this, arguments);
            },
            _allDatasetsEmpty: function allDatasetsEmpty() {
                return _.every(this.datasets, isDatasetEmpty);

                function isDatasetEmpty(dataset) {
                    return dataset.isEmpty();
                }
            },
            _getSelectables: function getSelectables() {
                return this.$node.find(this.selectors.selectable);
            },
            _removeCursor: function _removeCursor() {
                var $selectable = this.getActiveSelectable();
                $selectable && $selectable.removeClass(this.classes.cursor);
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, nodeScrollTop, nodeHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                nodeScrollTop = this.$node.scrollTop();
                nodeHeight = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$node.scrollTop(nodeScrollTop + elTop);
                } else if (nodeHeight < elBottom) {
                    this.$node.scrollTop(nodeScrollTop + (elBottom - nodeHeight));
                }
            },
            bind: function() {
                var that = this,
                    onSelectableClick;
                onSelectableClick = _.bind(this._onSelectableClick, this);
                this.$node.on("click.tt", this.selectors.selectable, onSelectableClick);
                _.each(this.datasets, function(dataset) {
                    dataset.onSync("asyncRequested", that._propagate, that).onSync("asyncCanceled", that._propagate, that).onSync("asyncReceived", that._propagate, that).onSync("rendered", that._onRendered, that).onSync("cleared", that._onCleared, that);
                });
                return this;
            },
            isOpen: function isOpen() {
                return this.$node.hasClass(this.classes.open);
            },
            open: function open() {
                this.$node.addClass(this.classes.open);
            },
            close: function close() {
                this.$node.removeClass(this.classes.open);
                this._removeCursor();
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.attr("dir", dir);
            },
            selectableRelativeToCursor: function selectableRelativeToCursor(delta) {
                var $selectables, $oldCursor, oldIndex, newIndex;
                $oldCursor = this.getActiveSelectable();
                $selectables = this._getSelectables();
                oldIndex = $oldCursor ? $selectables.index($oldCursor) : -1;
                newIndex = oldIndex + delta;
                newIndex = (newIndex + 1) % ($selectables.length + 1) - 1;
                newIndex = newIndex < -1 ? $selectables.length - 1 : newIndex;
                return newIndex === -1 ? null : $selectables.eq(newIndex);
            },
            setCursor: function setCursor($selectable) {
                this._removeCursor();
                if ($selectable = $selectable && $selectable.first()) {
                    $selectable.addClass(this.classes.cursor);
                    this._ensureVisible($selectable);
                }
            },
            getSelectableData: function getSelectableData($el) {
                return $el && $el.length ? Dataset.extractData($el) : null;
            },
            getActiveSelectable: function getActiveSelectable() {
                var $selectable = this._getSelectables().filter(this.selectors.cursor).first();
                return $selectable.length ? $selectable : null;
            },
            getTopSelectable: function getTopSelectable() {
                var $selectable = this._getSelectables().first();
                return $selectable.length ? $selectable : null;
            },
            update: function update(query) {
                var isValidUpdate = query !== this.query;
                if (isValidUpdate) {
                    this.query = query;
                    _.each(this.datasets, updateDataset);
                }
                return isValidUpdate;

                function updateDataset(dataset) {
                    dataset.update(query);
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.query = null;
                this.$node.addClass(this.classes.empty);

                function clearDataset(dataset) {
                    dataset.clear();
                }
            },
            destroy: function destroy() {
                this.$node.off(".tt");
                this.$node = $("<div>");
                _.each(this.datasets, destroyDataset);

                function destroyDataset(dataset) {
                    dataset.destroy();
                }
            }
        });
        return Menu;
    }();
    var DefaultMenu = function() {
        "use strict";
        var s = Menu.prototype;

        function DefaultMenu() {
            Menu.apply(this, [].slice.call(arguments, 0));
        }
        _.mixin(DefaultMenu.prototype, Menu.prototype, {
            open: function open() {
                !this._allDatasetsEmpty() && this._show();
                return s.open.apply(this, [].slice.call(arguments, 0));
            },
            close: function close() {
                this._hide();
                return s.close.apply(this, [].slice.call(arguments, 0));
            },
            _onRendered: function onRendered() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onRendered.apply(this, [].slice.call(arguments, 0));
            },
            _onCleared: function onCleared() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onCleared.apply(this, [].slice.call(arguments, 0));
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.css(dir === "ltr" ? this.css.ltr : this.css.rtl);
                return s.setLanguageDirection.apply(this, [].slice.call(arguments, 0));
            },
            _hide: function hide() {
                this.$node.hide();
            },
            _show: function show() {
                this.$node.css("display", "block");
            }
        });
        return DefaultMenu;
    }();
    var Typeahead = function() {
        "use strict";

        function Typeahead(o, www) {
            var onFocused, onBlurred, onEnterKeyed, onTabKeyed, onEscKeyed, onUpKeyed, onDownKeyed, onLeftKeyed, onRightKeyed, onQueryChanged, onWhitespaceChanged;
            o = o || {};
            if (!o.input) {
                $.error("missing input");
            }
            if (!o.menu) {
                $.error("missing menu");
            }
            if (!o.eventBus) {
                $.error("missing event bus");
            }
            www.mixin(this);
            this.eventBus = o.eventBus;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.input = o.input;
            this.menu = o.menu;
            this.enabled = true;
            this.active = false;
            this.input.hasFocus() && this.activate();
            this.dir = this.input.getLangDir();
            this._hacks();
            this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this);
            onFocused = c(this, "activate", "open", "_onFocused");
            onBlurred = c(this, "deactivate", "_onBlurred");
            onEnterKeyed = c(this, "isActive", "isOpen", "_onEnterKeyed");
            onTabKeyed = c(this, "isActive", "isOpen", "_onTabKeyed");
            onEscKeyed = c(this, "isActive", "_onEscKeyed");
            onUpKeyed = c(this, "isActive", "open", "_onUpKeyed");
            onDownKeyed = c(this, "isActive", "open", "_onDownKeyed");
            onLeftKeyed = c(this, "isActive", "isOpen", "_onLeftKeyed");
            onRightKeyed = c(this, "isActive", "isOpen", "_onRightKeyed");
            onQueryChanged = c(this, "_openIfActive", "_onQueryChanged");
            onWhitespaceChanged = c(this, "_openIfActive", "_onWhitespaceChanged");
            this.input.bind().onSync("focused", onFocused, this).onSync("blurred", onBlurred, this).onSync("enterKeyed", onEnterKeyed, this).onSync("tabKeyed", onTabKeyed, this).onSync("escKeyed", onEscKeyed, this).onSync("upKeyed", onUpKeyed, this).onSync("downKeyed", onDownKeyed, this).onSync("leftKeyed", onLeftKeyed, this).onSync("rightKeyed", onRightKeyed, this).onSync("queryChanged", onQueryChanged, this).onSync("whitespaceChanged", onWhitespaceChanged, this).onSync("langDirChanged", this._onLangDirChanged, this);
        }
        _.mixin(Typeahead.prototype, {
            _hacks: function hacks() {
                var $input, $menu;
                $input = this.input.$input || $("<div>");
                $menu = this.menu.$node || $("<div>");
                $input.on("blur.tt", function($e) {
                    var active, isActive, hasActive;
                    active = document.activeElement;
                    isActive = $menu.is(active);
                    hasActive = $menu.has(active).length > 0;
                    if (_.isMsie() && (isActive || hasActive)) {
                        $e.preventDefault();
                        $e.stopImmediatePropagation();
                        _.defer(function() {
                            $input.focus();
                        });
                    }
                });
                $menu.on("mousedown.tt", function($e) {
                    $e.preventDefault();
                });
            },
            _onSelectableClicked: function onSelectableClicked(type, $el) {
                this.select($el);
            },
            _onDatasetCleared: function onDatasetCleared() {
                this._updateHint();
            },
            _onDatasetRendered: function onDatasetRendered(type, dataset, suggestions, async) {
                this._updateHint();
                this.eventBus.trigger("render", suggestions, async, dataset);
            },
            _onAsyncRequested: function onAsyncRequested(type, dataset, query) {
                this.eventBus.trigger("asyncrequest", query, dataset);
            },
            _onAsyncCanceled: function onAsyncCanceled(type, dataset, query) {
                this.eventBus.trigger("asynccancel", query, dataset);
            },
            _onAsyncReceived: function onAsyncReceived(type, dataset, query) {
                this.eventBus.trigger("asyncreceive", query, dataset);
            },
            _onFocused: function onFocused() {
                this._minLengthMet() && this.menu.update(this.input.getQuery());
            },
            _onBlurred: function onBlurred() {
                if (this.input.hasQueryChangedSinceLastFocus()) {
                    this.eventBus.trigger("change", this.input.getQuery());
                }
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                } else if ($selectable = this.menu.getTopSelectable()) {
                    this.autocomplete($selectable) && $e.preventDefault();
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.close();
            },
            _onUpKeyed: function onUpKeyed() {
                this.moveCursor(-1);
            },
            _onDownKeyed: function onDownKeyed() {
                this.moveCursor(+1);
            },
            _onLeftKeyed: function onLeftKeyed() {
                if (this.dir === "rtl" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getTopSelectable());
                }
            },
            _onRightKeyed: function onRightKeyed() {
                if (this.dir === "ltr" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getTopSelectable());
                }
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this._minLengthMet(query) ? this.menu.update(query) : this.menu.empty();
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
            },
            _onLangDirChanged: function onLangDirChanged(e, dir) {
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.menu.setLanguageDirection(dir);
                }
            },
            _openIfActive: function openIfActive() {
                this.isActive() && this.open();
            },
            _minLengthMet: function minLengthMet(query) {
                query = _.isString(query) ? query : this.input.getQuery() || "";
                return query.length >= this.minLength;
            },
            _updateHint: function updateHint() {
                var $selectable, data, val, query, escapedQuery, frontMatchRegEx, match;
                $selectable = this.menu.getTopSelectable();
                data = this.menu.getSelectableData($selectable);
                val = this.input.getInputValue();
                if (data && !_.isBlankString(val) && !this.input.hasOverflow()) {
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(data.val);
                    match && this.input.setHint(val + match[1]);
                } else {
                    this.input.clearHint();
                }
            },
            isEnabled: function isEnabled() {
                return this.enabled;
            },
            enable: function enable() {
                this.enabled = true;
            },
            disable: function disable() {
                this.enabled = false;
            },
            isActive: function isActive() {
                return this.active;
            },
            activate: function activate() {
                if (this.isActive()) {
                    return true;
                } else if (!this.isEnabled() || this.eventBus.before("active")) {
                    return false;
                } else {
                    this.active = true;
                    this.eventBus.trigger("active");
                    return true;
                }
            },
            deactivate: function deactivate() {
                if (!this.isActive()) {
                    return true;
                } else if (this.eventBus.before("idle")) {
                    return false;
                } else {
                    this.active = false;
                    this.close();
                    this.eventBus.trigger("idle");
                    return true;
                }
            },
            isOpen: function isOpen() {
                return this.menu.isOpen();
            },
            open: function open() {
                if (!this.isOpen() && !this.eventBus.before("open")) {
                    this.menu.open();
                    this._updateHint();
                    this.eventBus.trigger("open");
                }
                return this.isOpen();
            },
            close: function close() {
                if (this.isOpen() && !this.eventBus.before("close")) {
                    this.menu.close();
                    this.input.clearHint();
                    this.input.resetInputValue();
                    this.eventBus.trigger("close");
                }
                return !this.isOpen();
            },
            setVal: function setVal(val) {
                this.input.setQuery(_.toStr(val));
            },
            getVal: function getVal() {
                return this.input.getQuery();
            },
            select: function select($selectable) {
                var data = this.menu.getSelectableData($selectable);
                if (data && !this.eventBus.before("select", data.obj)) {
                    this.input.setQuery(data.val, true);
                    this.eventBus.trigger("select", data.obj);
                    this.close();
                    return true;
                }
                return false;
            },
            autocomplete: function autocomplete($selectable) {
                var query, data, isValid;
                query = this.input.getQuery();
                data = this.menu.getSelectableData($selectable);
                isValid = data && query !== data.val;
                if (isValid && !this.eventBus.before("autocomplete", data.obj)) {
                    this.input.setQuery(data.val);
                    this.eventBus.trigger("autocomplete", data.obj);
                    return true;
                }
                return false;
            },
            moveCursor: function moveCursor(delta) {
                var query, $candidate, data, payload, cancelMove;
                query = this.input.getQuery();
                $candidate = this.menu.selectableRelativeToCursor(delta);
                data = this.menu.getSelectableData($candidate);
                payload = data ? data.obj : null;
                cancelMove = this._minLengthMet() && this.menu.update(query);
                if (!cancelMove && !this.eventBus.before("cursorchange", payload)) {
                    this.menu.setCursor($candidate);
                    if (data) {
                        this.input.setInputValue(data.val);
                    } else {
                        this.input.resetInputValue();
                        this._updateHint();
                    }
                    this.eventBus.trigger("cursorchange", payload);
                    return true;
                }
                return false;
            },
            destroy: function destroy() {
                this.input.destroy();
                this.menu.destroy();
            }
        });
        return Typeahead;

        function c(ctx) {
            var methods = [].slice.call(arguments, 1);
            return function() {
                var args = [].slice.call(arguments);
                _.each(methods, function(method) {
                    return ctx[method].apply(ctx, args);
                });
            };
        }
    }();
    (function() {
        "use strict";
        var old, keys, methods;
        old = $.fn.typeahead;
        keys = {
            www: "tt-www",
            attrs: "tt-attrs",
            typeahead: "tt-typeahead"
        };
        methods = {
            initialize: function initialize(o, datasets) {
                var www;
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {};
                www = WWW(o.classNames);
                return this.each(attach);

                function attach() {
                    var $input, $wrapper, $hint, $menu, defaultHint, defaultMenu, eventBus, input, menu, typeahead, MenuConstructor;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                    });
                    $input = $(this);
                    $wrapper = $(www.html.wrapper);
                    $hint = $elOrNull(o.hint);
                    $menu = $elOrNull(o.menu);
                    defaultHint = o.hint !== false && !$hint;
                    defaultMenu = o.menu !== false && !$menu;
                    defaultHint && ($hint = buildHintFromInput($input, www));
                    defaultMenu && ($menu = $(www.html.menu).css(www.css.menu));
                    $hint && $hint.val("");
                    $input = prepInput($input, www);
                    if (defaultHint || defaultMenu) {
                        $wrapper.css(www.css.wrapper);
                        $input.css(defaultHint ? www.css.input : www.css.inputWithNoHint);
                        $input.wrap($wrapper).parent().prepend(defaultHint ? $hint : null).append(defaultMenu ? $menu : null);
                    }
                    MenuConstructor = defaultMenu ? DefaultMenu : Menu;
                    eventBus = new EventBus({
                        el: $input
                    });
                    input = new Input({
                        hint: $hint,
                        input: $input
                    }, www);
                    menu = new MenuConstructor({
                        node: $menu,
                        datasets: datasets
                    }, www);
                    typeahead = new Typeahead({
                        input: input,
                        menu: menu,
                        eventBus: eventBus,
                        minLength: o.minLength
                    }, www);
                    $input.data(keys.www, www);
                    $input.data(keys.typeahead, typeahead);
                }
            },
            isEnabled: function isEnabled() {
                var enabled;
                ttEach(this.first(), function(t) {
                    enabled = t.isEnabled();
                });
                return enabled;
            },
            enable: function enable() {
                ttEach(this, function(t) {
                    t.enable();
                });
                return this;
            },
            disable: function disable() {
                ttEach(this, function(t) {
                    t.disable();
                });
                return this;
            },
            isActive: function isActive() {
                var active;
                ttEach(this.first(), function(t) {
                    active = t.isActive();
                });
                return active;
            },
            activate: function activate() {
                ttEach(this, function(t) {
                    t.activate();
                });
                return this;
            },
            deactivate: function deactivate() {
                ttEach(this, function(t) {
                    t.deactivate();
                });
                return this;
            },
            isOpen: function isOpen() {
                var open;
                ttEach(this.first(), function(t) {
                    open = t.isOpen();
                });
                return open;
            },
            open: function open() {
                ttEach(this, function(t) {
                    t.open();
                });
                return this;
            },
            close: function close() {
                ttEach(this, function(t) {
                    t.close();
                });
                return this;
            },
            select: function select(el) {
                var success = false,
                    $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.select($el);
                });
                return success;
            },
            autocomplete: function autocomplete(el) {
                var success = false,
                    $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.autocomplete($el);
                });
                return success;
            },
            moveCursor: function moveCursoe(delta) {
                var success = false;
                ttEach(this.first(), function(t) {
                    success = t.moveCursor(delta);
                });
                return success;
            },
            val: function val(newVal) {
                var query;
                if (!arguments.length) {
                    ttEach(this.first(), function(t) {
                        query = t.getVal();
                    });
                    return query;
                } else {
                    ttEach(this, function(t) {
                        t.setVal(newVal);
                    });
                    return this;
                }
            },
            destroy: function destroy() {
                ttEach(this, function(typeahead, $input) {
                    revert($input);
                    typeahead.destroy();
                });
                return this;
            }
        };
        $.fn.typeahead = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
        };

        function ttEach($els, fn) {
            $els.each(function() {
                var $input = $(this),
                    typeahead;
                (typeahead = $input.data(keys.typeahead)) && fn(typeahead, $input);
            });
        }

        function buildHintFromInput($input, www) {
            return $input.clone().addClass(www.classes.hint).removeData().css(www.css.hint).css(getBackgroundStyles($input)).prop("readonly", true).removeAttr("id name placeholder required").attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            });
        }

        function prepInput($input, www) {
            $input.data(keys.attrs, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass(www.classes.input).attr({
                autocomplete: "off",
                spellcheck: false
            });
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input;
        }

        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            };
        }

        function revert($input) {
            var www, $wrapper;
            www = $input.data(keys.www);
            $wrapper = $input.parent().filter(www.selectors.wrapper);
            _.each($input.data(keys.attrs), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.removeData(keys.typeahead).removeData(keys.www).removeData(keys.attr).removeClass(www.classes.input);
            if ($wrapper.length) {
                $input.detach().insertAfter($wrapper);
                $wrapper.remove();
            }
        }

        function $elOrNull(obj) {
            var isValid, $el;
            isValid = _.isJQuery(obj) || _.isElement(obj);
            $el = isValid ? $(obj).first() : [];
            return $el.length ? $el : null;
        }
    })();
});
(function() {
    var glb = window.glb || {},
        onLogin, barraLoaded;
    glb.barra = {
        noinit: true,
        triggerWindowsOnHover: true
    };

    function showAreaModal() {
        var authArea = document.getElementById('assinante-menu');
        var popin = document.querySelector('#login-popin');
        var popinOverlay = document.querySelector('#login-popin-overlay');
        popin.style.display = 'block';
        popinOverlay.style.display = 'block';
        if (authArea.querySelector('#login-popin')) {
            cloneToFooterAndRemove(popin, document.body, true);
            cloneToFooterAndRemove(popinOverlay, document.body, false);
            setTimeout(function() {
                var closePopin = function(e) {
                    e.preventDefault();
                    var popin = document.querySelector('#login-popin');
                    var popinOverlay = document.querySelector('#login-popin-overlay');
                    popin.style.display = 'none';
                    popinOverlay.style.display = 'none';
                };
                document.querySelector('#login-popin-close').addEventListener('click', closePopin);
                document.querySelector('#login-popin-overlay').addEventListener('click', closePopin);
            }, 200);
        }
    }

    function cloneToFooterAndRemove(el, elToAppend, deep) {
        var cloneEl = el.cloneNode(deep);
        elToAppend.appendChild(cloneEl);
        el.remove();
    }
    onLogin = function(userData) {
        if (document.querySelector('html').classList.contains('has-regua')) {
            return;
        }
        var authArea;
        if (userData && ('name' in userData)) {
            authArea = document.getElementById('user-bar');
            authArea.innerHTML = '';
            glb.barra.logged.addItems(authArea, userData);
            authArea.className += ' logged';
            setTimeout(function() {
                var i, floatsBoxes = authArea.querySelectorAll('.float-box');
                for (i = 0; i < floatsBoxes.length; i++) {
                    floatsBoxes[i].classList.add('hui-floatbox');
                    floatsBoxes[i].classList.add('hui-floatbox--right-arrow');
                }
                var buttons = authArea.querySelectorAll('.barra-base-btn, .barra-base-btn.save-btn');
                for (i = 0; i < buttons.length; i++) {
                    buttons[i].classList.add('hui-linkbutton');
                }
            }, 1000);
        } else {
            authArea = document.getElementById('assinante-menu');
            var userBar = document.querySelector('#user-bar');
            userBar.classList.add('home-header__icon-profile');
            userBar.setAttribute('title', 'Faça seu login');
            glb.barra.nonlogged.addItems(authArea);
            var ultBtn = document.querySelector('.barra-itens-servicos .ult #barra-item-login');
            var overlayClose = document.querySelector('#login-popin-close');
            ultBtn.addEventListener('click', showAreaModal);
            overlayClose.addEventListener('click', showAreaModal);
            if (window.Modernizr && !Modernizr.touchevents || !document.querySelector('html').classList.contains('has-regua')) {
                userBar.addEventListener('click', function() {
                    var ultBtn = document.querySelector('.barra-itens-servicos .ult #barra-item-login');
                    ultBtn.click();
                });
            }
            authArea.querySelector('.float-box').classList.add('hui-floatbox');
            var arrow = authArea.querySelector('.hover-button .barra-item-servico > span');
            arrow.innerHTML = '<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#my-icon"></use></svg>';
        }
        glb.barra.analytics.trackAllOut(authArea);
        var mobileHeaderHome = new MobileHeaderHome(glb);
        mobileHeaderHome.init();
    };
    barraLoaded = function() {
        glb.barra.component = glb.barra.component || {};
        glb.barra.component.barraDiv = glb.barra.component.barraDiv || {
            className: ''
        };
        if (!glb.barra.component.addCadunJs) {
            try {
                glb.barra.auth.getUserData(onLogin);
            } catch (e) {}
        } else {
            window['cq'] = window['cq'] || [];
            window['cq'].push({
                'userInfoAvailable': function() {
                    onLogin(Cadun.user.me);
                }
            });
            glb.barra.component.addCadunJs();
        }
    };
    hui.loadScript('https://s.glbimg.com/gl/ba/js/barra-globocom.min.js?nocache1', barraLoaded);
})();
(function() {
    var searchField = $('#home-search-field');
    var formField = searchField.parents('form');

    function goToUrl(ev, obj) {
        var tagLink = $('#home-search-field').parents('form').find('.tt-cursor a');
        if (tagLink.length) {
            try {
                ev.preventDefault();
            } catch (ev) {}
            window.location.href = tagLink.attr('href');
        } else {
            var value = obj.term.replace(/(<([^>]+)>)/ig, "");
            if (value.length < 2) {
                try {
                    ev.preventDefault();
                } catch (ev) {}
                return false;
            }
        }
    }

    function _normalizar_term(data) {
        data.suggestions.forEach(function(element) {
            element.term = element.text;
        });
        data.featured_content.forEach(function(element) {
            element.term = element.title;
        });
        return data;
    }
    formField.on('submit', goToUrl);
    searchField.on('focus', function() {
        var type = jQuery(this).parents('.twitter-typeahead');
        if (type.length) {
            type.addClass('focus');
        }
    });
    searchField.on('blur', function() {
        var type = jQuery(this).parents('.twitter-typeahead');
        if (type.length) {
            type.removeClass('focus');
        }
    });
    searchField.typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    }, {
        name: 'states',
        limit: 14,
        source: function(query, cbsync, cbasync) {
            var content;
            query = query.replace(/(<([^>]+)>)/ig, "");
            if (query.length < 3) return;
            var params = {
                'q': query,
                'measure_featured_content_click': true,
                'score': true,
                'size': 3
            };
            $.get('/busca/suggest', params, function(response) {
                response = _normalizar_term(response)
                var list = [],
                    i;
                for (i = 0; i < Math.min(response.featured_content.length, 3); i++) {
                    content = response.featured_content[i];
                    list.push($.extend({
                        type: 'featured_content'
                    }, content));
                }
                for (i = 0; i < Math.min(response.suggestions.length, 3); i++) {
                    content = response.suggestions[i];
                    list.push($.extend({
                        type: 'suggestions'
                    }, content));
                }
                var term = (response.suggestions_highlithed && response.suggestions_highlithed.length) ? response.suggestions_highlithed[0] : document.getElementById('home-search-field').value;
                term = term.replace(/(<([^>]+)>)/ig, "");
                list.push({
                    type: 'suggestions_highlithed',
                    term: term,
                    web: false
                });
                window.searchInfo = {
                    lastType: null
                };
                cbasync(list);
            });
        },
        displayKey: 'term',
        templates: {
            empty: function() {
                return false;
            },
            suggestion: function(obj) {
                var response = '',
                    thumb;
                if (obj.type == 'featured_content') {
                    thumb = (obj.thumbnail) ? '<div class="hui-search__image-inner"><img class="hui-search__image" src="' + obj.thumbnail + '"></div>' : '<div class="icone icone-' + obj.publisher + '"></div>';
                    response += '<div class="hui-search hui-search__' + obj.type + '">' + '<a class="hui-search__highlight" href="' + obj.url + '">' + '<div class="hui-search hui-search__search-image">' +
                        thumb + '</div>' + '<p class="hui-search__title">' + obj.term + '</p>' + '<p class="hui-search__publisher">Em ' + obj.parent + '</p>' + '</a>' + '</div>';
                } else if (obj.type == 'suggestions') {
                    response += '<div class="hui-search hui-search__' + obj.type + '">' + '<a class="hui-search__title hui-search__highlight" href="https://www.globo.com/busca/?q=' + obj.term + '">' +
                        obj.term + '</a>' + '</div>';
                } else if (obj.type == 'suggestions_highlithed') {
                    response += '<div class="hui-search hui-search__' + obj.type + '">' + '<a href="https://www.globo.com/busca/?q=' + obj.term + '" class="hui-search__link hui-search__title hui-search__highlight">' + 'Buscar <b>\'' + obj.term + '\'</b> na Globo' + '</a>' + '</div>';
                }
                window.searchInfo.lastType = obj.type;
                return response;
            }
        }
    }).on('typeahead:select', goToUrl);
    var menu = document.querySelector('.twitter-typeahead .tt-menu');
    menu.classList.add('hui-floatbox');
    menu.classList.add('hui-floatbox--center-arrow');
})();
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});
var AnimateOlympics = function() {};
AnimateOlympics.prototype = {
    defaults: {
        times: {
            mouseenter: 800,
            mouseleave: 200,
            animation: 1200,
            delaySwap: 100
        },
        distanceAnimationRings: 85,
        distanceAnimationLogo: 115
    },
    triggering: false,
    init: function(config) {
        if (window.innerWidth < 1000) return;
        this.setVars(config);
        this.bindEvents();
        jQuery(document).ready(function() {
            setTimeout(function() {
                this.huiOlympcs.trigger('mouseenter');
            }.bind(this), 2700);
        }.bind(this));
    },
    setVars: function(config) {
        this.huiOlympcs = $('.hui-olympics');
        this.rings = $(this.huiOlympcs).find('.ring');
        this.config = $.extend(this.defaults, config);
        this.logo = $(this.huiOlympcs).find('.hui-olympics__logo');
    },
    bindEvents: function() {
        this.huiOlympcs.bind('mouseenter', this.eventMouse.bind(this));
    },
    checkingMouseLeave: function() {
        setTimeout(function() {
            if (!this.huiOlympcs.is(':hover')) {
                this.eventMouse({
                    type: 'mouseleave'
                });
            } else {
                this.checkingMouseLeave();
            }
        }.bind(this), 100);
    },
    eventMouse: function(ev) {
        if (window.outerWidth < 1000) return;
        if (this.triggering) {
            return;
        }
        this.triggering = true;
        this.rings.each(function(idx, el) {
            this.animateRings(idx, el, ev.type);
        }.bind(this));
        this.animateLogo(ev.type);
    },
    animateRings: function(idx, el, type) {
        var configAnimation = {
            duration: this.config.times.animation,
            easing: 'easeOutElastic',
            queue: false,
            step: function(currentValue) {
                this.style['transform'] = 'translate3d(0,' + currentValue + 'px, 0)';
            }
        };
        if (0 == idx) {
            if (type == 'mouseleave') {
                this.huiOlympcs.removeClass('cutted');
            }
            configAnimation.always = function() {
                if (type != 'mouseleave') {
                    this.huiOlympcs.addClass('cutted')
                }
            }.bind(this);
        } else if (4 == idx) {
            configAnimation.always = function() {
                this.triggering = false;
                if (type == 'mouseenter') {
                    this.checkingMouseLeave();
                }
            }.bind(this);
        }
        var finalPosition = (type == 'mouseenter') ? '-' + this.config.distanceAnimationRings + 'px' : '-' + (this.config.distanceAnimationRings * 2) + 'px';
        var $el = $(el);
        if (type == 'mouseenter') {
            $el.css('text-indent', '0px');
            $el.css('transform', 'translate3d(0,0,0)');
        }
        var variationTime = ((type == 'mouseleave') ? 2 : 1);
        setTimeout(function() {
            $el.animate({
                textIndent: finalPosition
            }, configAnimation);
        }, this.config.times.delaySwap / variationTime * idx);
    },
    animateLogo: function(type) {
        var configAnimation = {
            duration: this.config.times.animation / (type == 'mouseleave' ? 1.4 : 6),
            easing: (type == 'mouseleave') ? 'easeOutQuad' : 'easeOutQuad',
            queue: false,
            step: function(currentValue) {
                this.style['transform'] = 'translate3d(0,' + currentValue + 'px,0)';
            }
        };
        if (type == 'mouseleave') {
            this.logo.css('transform', 'translate3d(0,' + this.config.distanceAnimationLogo + 'px,0)');
            this.logo.css('text-indent', this.config.distanceAnimationLogo + "px");
        }
        this.logo.animate({
            textIndent: '-=' + (this.config.distanceAnimationLogo * (type == 'mouseleave' ? 1 : 2)) + 'px'
        }, configAnimation);
    }
};
var animate = new AnimateOlympics();
animate.init();
(function(global) {
    var MathUtils = {
        linearLeastSquares: function(points) {
            var n = points.length;
            if (n === 0) {
                return null;
            }
            var sum_x = 0,
                sum_y = 0,
                sum_xy = 0,
                sum_x_squared = 0,
                i = 0,
                point, x, y;
            for (; i < n; ++i) {
                point = points[i];
                x = point[0];
                y = point[1];
                sum_x += x;
                sum_y += y;
                sum_xy += x * y;
                sum_x_squared += x * x;
            }
            var B = ((n * sum_xy) - (sum_x * sum_y)) / ((n * sum_x_squared) - (sum_x * sum_x));
            var a = (sum_y / n) - ((B / n) * sum_x);
            return [B, a];
        },
        distance: function(point1, point2) {
            return Math.sqrt((point1[0] - point2[0]) * (point1[0] - point2[0]) + (point1[1] - point2[1]) * (point1[1] - point2[1]));
        }
    };
    global.MathUtils = MathUtils;
}(this));
(function($) {
    window.glb = window.glb || {};
    glb.preferences = glb.preferences || [];
    var widgetSubMenu = {
        options: {
            trackingTime: 100,
            maxTopLinks: 10
        },
        _create: function(el) {
            this.element = el;
            this.currentMenuItemElement = null;
            this.trackingSubMenu = false;
            this.menuName = this.element.attr('class').replace(/\s*analytics.*?($|\s)/, '').replace(/ ?visible/, '');
            this.topLinks = [];
            this.trackingPoints = [];
            this._collectElements();
            this._initTopSubMenu();
            this._bindEvents();
        },
        _collectElements: function() {
            this.submenuElements = this.element.find('.submenu > li');
            this.firstColumnArea = this.element.find('.first-column');
            this.firstLink = this.firstColumnArea.find('li.has-children a').first();
            this.topSubMenu = this.submenuElements.filter('[data-menu-id="' + this.firstLink.data('menu-id') + '"]').find('.top-link');
            this.topSubMenuLinks = this.topSubMenu.find('> div');
            this.allLinks = this.element.find('.submenu a, .first-column a[href]');
        },
        _initTopSubMenu: function() {
            var menuName;
            try {
                menuName = this.menuName.split(' ')[0]
            } catch (e) {
                menuName = this.menuName.replace(' ', '_');
            }
            glb.preferences.push(['get', {
                product: 'home',
                key: 'topmenu_' + menuName,
                callback: $.proxy(this._onCocoonData, this)
            }]);
        },
        _bindEvents: function() {
            if (Modernizr && Modernizr.touchevents) {
                this.element.on('click', '.first-column a', this._onClickSubMenu.bind(this));
            } else {
                this.element.on('mouseenter', '.first-column a', this._onMouseEnter.bind(this));
                this.element.on('mouseleave', '.first-column a', this._onMouseLeave.bind(this));
            }
            this.element.on('click', '.submenu a, .first-column a[href]', this._onLinkClick.bind(this));
        },
        _onClickSubMenu: function(ev) {
            var linkElement = $(ev.currentTarget);
            if ((!this.currentMenuItemElement) || (this.currentMenuItemElement.length > 0 && this.currentMenuItemElement[0] !== linkElement[0])) {
                ev.preventDefault();
                ev.stopImmediatePropagation();
            }
            this.currentMenuItemElement = linkElement;
            this.updateSubMenu(linkElement);
        },
        _onMouseEnter: function(ev) {
            var $linkElement = $(ev.currentTarget);
            this.currentMenuItemElement = $linkElement;
            if (this.previousLink) {
                if (this.ignoreEventCount < 1) {
                    this.ignoreEventCount++;
                    return;
                }
            }
            if (!this.trackingSubMenu) {
                this.updateSubMenu($linkElement);
            }
        },
        _onMouseLeave: function(ev) {
            var linkElement = $(ev.currentTarget);
            this.currentMenuItemElement = null;
            if (!this.trackingSubMenu) {
                this._trackSubMenuMouseMovement(linkElement);
            }
        },
        updateSubMenu: function(link) {
            this.trackingPoints = [];
            var menuId = link.data('menu-id'),
                submenu = this.submenuElements.filter('[data-menu-id="' + menuId + '"]');
            if (submenu.length === 0) {
                return;
            }
            this.submenuElements.removeClass('visible');
            submenu.addClass('visible');
            link.parents('ul').find('.active').removeClass('active');
            link.addClass('active');
            this.currentLink = link;
            this.currentSubMenu = submenu;
            this.updateSubMenuItem();
        },
        updateSubMenuItem: function(link) {
            if (this.currentSubMenu) {
                this.currentSubMenu.find('a.active').removeClass('active');
            }
            this.currentSubMenuItem = link;
            (link) ? link.addClass('active'): this.subMenuFocus = 0;
        },
        _updateTopLinks: function(ev) {
            var widgetMenuList = $(ev.target).parents('.widget-menu__list');
            try {
                var className = widgetMenuList[0].classList[0];
            } catch (e) {
                return;
            }
            glb.preferences.push(['put', {
                product: 'home',
                key: 'topmenu_' + className,
                value: JSON.stringify(this.topLinks)
            }]);
        },
        _onCocoonData: function(data) {
            var parsedData = null;
            try {
                parsedData = JSON.parse(data);
            } catch (e) {}
            if (parsedData && $.isArray(parsedData)) {
                this.topLinks = parsedData;
            }
            this._renderUserTopLinks(this.topLinks.slice(0, 10), this.topSubMenuLinks, this.topSubMenu);
        },
        _onLinkClick: function(ev) {
            var anchor = $(ev.currentTarget),
                href = anchor.attr('href'),
                topLink, idx;
            this.currentTarget = anchor;
            for (idx = this.topLinks.length - 1; idx >= 0; idx--) {
                topLink = this.topLinks[idx];
                if (topLink.url == href) {
                    topLink.count += 1;
                    break;
                }
            }
            if (idx < 0) {
                this.topLinks.push({
                    url: href,
                    count: 1
                });
            } else {
                this.topLinks = this.topLinks.sort(function(t1, t2) {
                    return t2.count - t1.count;
                });
            }
            this._updateTopLinks(ev);
        },
        _renderUserTopLinks: function(linksToAdd, existingElements, appendToElement, forceRecreate) {
            if (!forceRecreate && linksToAdd.length === 0) {
                return;
            }
            var i, len, topLink, existingLink, allLinksMap = {},
                topLinksMap = {},
                newItems = [],
                currentLink, currentLinkHref, label;
            for (i = 0, len = this.allLinks.length; i < len; ++i) {
                currentLink = this.allLinks.eq(i);
                currentLinkHref = currentLink.attr('href');
                if (!allLinksMap[currentLinkHref]) {
                    allLinksMap[currentLinkHref] = currentLink;
                }
            }
            for (i = 0, len = linksToAdd.length; i < len; ++i) {
                topLink = linksToAdd[i];
                existingLink = allLinksMap[topLink.url];
                if (!existingLink && !topLink.label) {
                    continue;
                }
                if (topLinksMap[topLink.url]) {
                    continue;
                }
                label = trim(topLink.label || existingLink.text());
                if (!label) {
                    continue;
                }
                topLinksMap[topLink.url] = true;
                label = label[0].toUpperCase() + label.slice(1);
                if (label == 'Primeira Página') {
                    var topLevelLi = this.element.find('a[data-menu-id="' + existingLink.parents('li').first().data('menu-id') + '"]');
                    label = label + " (" + trim(topLevelLi.text()) + ")";
                }
                var divString = '<div>' + '<a href="' + topLink.url + '">' + '<span class="titulo">' + label + '</span>' + '</a>' + '</div>';
                newItems.push(divString);
            }
            for (i = 0, len = existingElements.length; i < len && newItems.length < this.options.maxTopLinks; ++i) {
                topLink = existingElements.eq(i);
                if (topLinksMap[topLink.find('a').attr('href')]) {
                    continue;
                }
                newItems.push($('<span>').append(topLink).html());
            }
            appendToElement.html($(newItems.join('')));
        },
        resetSelected: function() {
            var self = this;
            var currentFirstColumn;
            for (var i = 0; i < this.firstColumnArea.length; i++) {
                if ($(this.firstColumnArea[i]).is(':visible')) {
                    currentFirstColumn = $(this.firstColumnArea[i]);
                    break;
                }
            }
            this.firstLink = currentFirstColumn.find(' > li:first-child > a');
            if (this.firstLink.length > 0) {
                self.updateSubMenu(self.firstLink);
            }
            this.mouseMoveArea = {
                el: currentFirstColumn,
                offset: currentFirstColumn.offset(),
                width: currentFirstColumn.outerWidth(),
                height: currentFirstColumn.outerHeight()
            };
            this.mouseMoveArea.startPoint = [this.mouseMoveArea.offset.left + this.mouseMoveArea.width, this.mouseMoveArea.offset.top];
            this.mouseMoveArea.endPoint = [this.mouseMoveArea.offset.left + this.mouseMoveArea.width, this.mouseMoveArea.offset.top + this.mouseMoveArea.height];
            this.mouseMoveArea.el.bind('mousemove', $.proxy(function(e) {
                this.trackingPoints.push([e.pageX, e.pageY]);
            }, this));
            this.ignoreEventCount = 0;
            this.subMenuFocus = 0;
        },
        resetEvents: function() {
            if (this.mouseMoveArea && this.mouseMoveArea.el) {
                this.mouseMoveArea.el.unbind('mousemove');
            }
            this.trackingPoints = [];
        },
        _trackSubMenuMouseMovement: function(link) {
            this.trackingSubMenu = false;
            var hoveredItem = this.currentMenuItemElement;
            if (hoveredItem && hoveredItem[0] == link[0]) {
                return;
            }
            if (this.trackingPoints.length < 2) {
                if (hoveredItem) {
                    this.updateSubMenu(hoveredItem);
                }
                return;
            }
            if (this.trackingPoints.length > 5) {
                this.trackingPoints = this.trackingPoints.slice(this.trackingPoints.length - 5);
            }
            var components = MathUtils.linearLeastSquares(this.trackingPoints),
                firstPoint = this.trackingPoints[0],
                lastPoint = this.trackingPoints[this.trackingPoints.length - 1],
                goingRight = lastPoint[0] > firstPoint[0],
                targetStart = this.mouseMoveArea.startPoint,
                targetEnd = this.mouseMoveArea.endPoint;
            var minSlope = (targetStart[1] - firstPoint[1]) / (targetStart[0] - firstPoint[0]),
                maxSlope = (targetEnd[1] - firstPoint[1]) / (targetEnd[0] - firstPoint[0]),
                slope = components[0];
            this.trackingPoints = [];
            if (goingRight && !isNaN(slope) && slope > minSlope && slope < maxSlope) {
                this.trackingSubMenu = true;
                setTimeout($.proxy(function() {
                    this._trackSubMenuMouseMovement(link);
                }, this), this.options.trackingTime);
            } else {
                if (hoveredItem) {
                    this.updateSubMenu(hoveredItem);
                }
            }
        }
    };
    var trim = function(term) {
        if (!term) {
            return '';
        }
        return term.replace(/^\s*|\s*$/g, '');
    };
    $.fn.submenuWidgetMenu = function(methodName) {
        if (typeof methodName == 'undefined') {
            widgetSubMenu._create($(this));
        } else {
            widgetSubMenu[methodName]();
        }
    }
})(jQuery);
(function($) {
    var widget = {
        options: {
            fadeDuration: 200,
            trackingTime: 100,
            mouseMoveArea: '#glb-topo',
            floatingBox: '.float-box',
            columnsSelector: '.menu-columns > ul:visible, .extra:visible',
            isNestedMenu: false
        },
        _create: function(el) {
            this.element = el;
            this.currentMenuItemElement = null;
            if (this.element.is('.nested')) {
                this.options.isNestedMenu = true;
            }
        },
        _collectElements: function() {
            this.elements = {};
            this.elements.triggerLis = this.element.find('> .widget-menu__list');
            this.elements.mouseMoveArea = $(this.options.mouseMoveArea);
            this.elements.floatingBoxes = this.elements.triggerLis.find(this.options.floatingBox);
            this.elements.mainBlock = $('#glb-corpo');
        },
        _editDom: function() {
            this.elements.floatingBoxes.addClass('hui-floatbox');
            this.elements.floatingBoxes.addClass('hui-floatbox--no-arrow');
        },
        _bindEvents: function() {
            this.elements.triggerLis.each($.proxy(function(i, el) {
                this._bindTriggerEvents($(el));
            }, this));
        },
        _initComponents: function() {
            if (!this.options.isNestedMenu) {
                return;
            }
            this.elements.triggerLis.submenuWidgetMenu();
        },
        _bindTriggerEvents: function(li) {
            var submenu = li.find(this.options.floatingBox);
            if (!submenu.length)
                return;
            if (window.Modernizr && Modernizr.touchevents) {
                this._eventsWithTouch(li, submenu);
            } else {
                this._eventsWithoutTouch(li, submenu);
            }
        },
        _eventsWithTouch: function(li, submenu) {
            var links = li.find("> a");
            links.on("touchstart click", $.proxy(function(e) {
                if (document.body.offsetWidth < 620 || document.querySelector('html').classList.contains('has-regua')) {
                    return true;
                }
                if (this.goToLink)
                    return;
                e.stopPropagation();
                e.preventDefault();
                if (this.elements.liShowing) {
                    this.hideItem(this.elements.liShowing);
                    if (this.elements.liShowing == li) {
                        this.elements.liShowing = null;
                        this.goToLink = true;
                        e.currentTarget.click();
                        return;
                    }
                }
                this.showItem(li);
                this.elements.liShowing = li;
            }, this));
            links.on("click", $.proxy(function(ev) {
                if (document.body.offsetWidth < 620 || document.querySelector('html').classList.contains('has-regua')) {
                    return true;
                }
                ev.stopPropagation();
                if (!this.goToLink) {
                    ev.preventDefault();
                }
            }, this));
            var onTouchBlock = function(e) {
                if (this.elements.liShowing) {
                    this.hideItem(this.elements.liShowing);
                    this.elements.liShowing = null;
                    e.preventDefault();
                }
            }.bind(this);
            var headerFlag = false;
            var onTouchHeader = function(e) {
                if (!headerFlag) {
                    headerFlag = true;
                    setTimeout(function() {
                        headerFlag = false;
                    }, 100);
                }
                var $target = $(e.target);
                if ($target.attr("id") === "home-menu" || $target.parents("#home-menu").length > 0) {
                    return;
                }
                onTouchBlock.call(this, e);
            };
            this.elements.mainBlock.on('click', $.proxy(onTouchBlock, this));
            this.elements.mainBlock.on('touchstart', $.proxy(onTouchBlock, this));
            this.elements.mouseMoveArea.on('click', $.proxy(onTouchHeader, this));
            this.elements.mouseMoveArea.on('touchstart', $.proxy(onTouchHeader, this));
        },
        _eventsWithoutTouch: function(li, submenu) {
            var menuInitialTimeout = null;
            li.hover(function() {
                li.attr('data-hovering', true);
                li.addClass('visible');
                if (!li.hasClass('videos')) {}
                if (!this.tracking) {
                    menuInitialTimeout = setTimeout(function() {
                        menuInitialTimeout = null;
                        this.showItem(li);
                    }.bind(this), this.options.fadeDuration);
                }
            }.bind(this), function() {
                li.attr('data-hovering', false);
                li.removeClass('visible');
                if (!this.tracking) {
                    if (menuInitialTimeout) {
                        clearTimeout(menuInitialTimeout);
                        menuInitialTimeout = null;
                        return;
                    }
                    this.trackMouseMovement(li);
                }
            }.bind(this));
        },
        hideItem: function(el, forced) {
            if (this.interactionPrevented && !forced) {
                return;
            }
            var submenu = el.find(this.options.floatingBox);
            this.elements.mainBlock.removeClass('blocked');
            submenu.css("display", "none");
            submenu.parent().removeClass('visible');
            if (this.options.isNestedMenu) {
                el.submenuWidgetMenu('resetEvents');
            }
            window.openedMenu = false;
        },
        showItem: function(el, forced) {
            if (this.interactionPrevented && !forced) {
                return;
            }
            var submenu = el.find(this.options.floatingBox),
                submenuEl = submenu[0];
            this.elements.mainBlock.addClass('blocked');
            el.addClass('visible');
            submenu.css("display", "block");
            if (window.PIE && !submenuEl.hasPie) {
                var tabEl, headerLinkEl;
                setTimeout(function() {
                    PIE.attach(submenuEl);
                    (tabEl = submenu.find('.tab')[0]) && PIE.attach(tabEl);
                    (headerLinkEl = submenu.find('.header a')[0]) && PIE.attach(headerLinkEl);
                    submenuEl.hasPie = true;
                }, 0);
            }
            if (this.options.isNestedMenu) {
                submenu.addClass('opened');
                el.submenuWidgetMenu('resetSelected');
            }
            window.openedMenu = submenuEl;
            hui.trigger(window, 'throttledResize');
        },
        currentHover: function() {
            for (var i = 0, len = this.elements.triggerLis.length; i < len; ++i) {
                var li = this.elements.triggerLis.eq(i);
                if (li.attr('data-hovering') == 'true') {
                    return li;
                }
            }
            return null;
        },
        trackMouseMovement: function(currentLi) {
            this.tracking = true;
            var trackingPoints = [];
            this.elements.mouseMoveArea.mousemove(function(e) {
                trackingPoints.push([e.pageX, e.pageY]);
            });
            setTimeout($.proxy(function() {
                this.elements.mouseMoveArea.unbind('mousemove');
                this.tracking = false;
                var hoveredItem = this.currentHover();
                if (hoveredItem && hoveredItem[0] == currentLi[0]) {
                    return;
                }
                if (trackingPoints.length < 2) {
                    this.hideItem(currentLi);
                    if (hoveredItem) {
                        this.showItem(hoveredItem);
                    }
                    return;
                }
                var components = MathUtils.linearLeastSquares(trackingPoints),
                    firstPoint = trackingPoints[0],
                    lastPoint = trackingPoints[trackingPoints.length - 1],
                    distance = MathUtils.distance(firstPoint, lastPoint),
                    factor = Math.abs(components[0]) * distance,
                    goingDown = (lastPoint[1] - firstPoint[1]) > 0;
                if (goingDown && factor >= 2.7) {
                    this.trackMouseMovement(currentLi);
                } else {
                    this.hideItem(currentLi);
                    if (hoveredItem) {
                        this.showItem(hoveredItem);
                    }
                }
            }, this), this.options.trackingTime);
        },
        includeWidget: function(key, func) {
            var extra = this.element.find('li.' + key + ' .extra');
            if (extra.length == 0 && key == 'ge')
                extra = this.element.find('li.globoesporte .extra');
            if (!this.options.isNestedMenu) {
                extra.css('width', 188);
            } else {
                var floatBox = this.element.find('li.' + key + ' .float-box');
                if (floatBox.length == 0 && key == 'ge')
                    floatBox = this.element.find('li.globoesporte .float-box');
                floatBox.removeClass('sem-widget');
                floatBox.addClass('com-widget');
            }
            func(this.element, extra);
            extra.addClass('enabled');
        }
    };
    jQuery.fn.widgetMenu = function(callbackName, value, callback) {
        if (typeof callbackName == 'undefined') {
            widget._create($(this));
            widget._collectElements();
            widget._editDom();
            widget._bindEvents();
            widget._initComponents();
        } else {
            widget._create($(this));
            widget._collectElements();
            widget[callbackName](value, callback);
        }
    };
})(jQuery);
var NewsMenuWidget, bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments);
    };
};
window.libby = window.libby || {};
NewsMenuWidget = (function() {
    function NewsMenuWidget() {
        this.onStates = bind(this.onStates, this);
        this.onMouseEnter = bind(this.onMouseEnter, this);
        this.onGeolocation = bind(this.onGeolocation, this);
        this.onMenuState = bind(this.onMenuState, this);
        this.onSelectedState = bind(this.onSelectedState, this);
        this.onStateClick = bind(this.onStateClick, this);
        this.add = bind(this.add, this);
        var base;
        window.glb || (window.glb = {});
        (base = window.glb).preferences || (base.preferences = []);
        this.animationDuration = 500;
        this.animationTargetHeight = 42;
        this.originalHeight = 0;
        this.geoReturned = false;
        this.getSelectedState();
    }
    NewsMenuWidget.prototype.add = function(menu, extra) {
        this.menu = menu;
        this.extra = extra;
        this.bindEvents();
        return this.extra.append(this.html);
    };
    NewsMenuWidget.prototype.bindEvents = function() {
        return this.extra.on('click', 'a.searchable', this.onStateClick);
    };
    NewsMenuWidget.prototype.onStateClick = function(ev) {
        return glb.preferences.push(['put', {
            product: 'home',
            key: 'menu_estado',
            value: $(ev.currentTarget).data('uf')
        }]);
    };
    NewsMenuWidget.prototype.getSelectedState = function() {
        glb.preferences.push(['get', {
            product: 'home',
            key: 'menu_estado',
            callback: function() {}
        }]);
        return glb.preferences.push(['get', {
            product: 'jornalismo',
            key: 'regiao',
            callback: this.onSelectedState
        }]);
    };
    NewsMenuWidget.prototype.getMenuState = function() {
        return glb.preferences.push(['get', {
            product: 'home',
            key: 'menu_estado',
            callback: this.onMenuState
        }]);
    };
    NewsMenuWidget.prototype.getGeolocation = function() {
        var script;
        window['globoapi_geo_callback'] = this.onGeolocation;
        script = document.createElement('script');
        script.setAttribute('src', 'https://api.globo.com/geo?_time=' + (new Date).getTime());
        $('head').append(script);
        setTimeout(this.onGeolocation, 1000);
    };
    NewsMenuWidget.prototype.onSelectedState = function(data) {
        if (data) {
            this.onGeolocation({
                state: {
                    code: data.split('/')[0]
                }
            });
            return;
        }
        return this.getMenuState();
    };
    NewsMenuWidget.prototype.onMenuState = function(data) {
        if (data) {
            this.onGeolocation({
                state: {
                    code: data
                }
            });
            return;
        }
        return this.getGeolocation();
    };
    NewsMenuWidget.prototype.onGeolocation = function(geo) {
        if (this.geoReturned) {
            return;
        }
        this.geoReturned = true;
        this.geo = geo;
        if (!this.geo) {
            this.geo = {
                state: {
                    code: "SP"
                }
            };
        }
        return this.getStates();
    };
    NewsMenuWidget.prototype.onMouseEnter = function(ev) {
        var colSel, floatBox, oldHeight, realHeight;
        floatBox = this.extra.parents('.float-box');
        colSel = this.menu.data('widgetMenu').options.columnsSelector;
        oldHeight = this.extra.height();
        this.originalHeight = oldHeight;
        this.extra.css('height', 'auto');
        realHeight = this.extra.height();
        this.extra.css('height', oldHeight);
        if (realHeight + this.animationTargetHeight > oldHeight) {
            floatBox.find(colSel).animate({
                height: this.extra.height() + this.animationTargetHeight
            }, {
                duration: this.animationDuration,
                easing: 'easeOutCubic'
            });
        }
        return this.extra.off('mouseenter', this.onMouseEnter);
    };
    NewsMenuWidget.prototype.getStates = function() {
        return $.getJSON('/libby/aplicacoes/cadastro_estados/estados/regioes_ordenado.json', this.onStates);
    };
    NewsMenuWidget.prototype.onStates = function(states) {
        this.states = states;
        this.render();
        return jQuery('.nested.widget-menu').widgetMenu('includeWidget', 'g1', this.add);
    };
    NewsMenuWidget.prototype.render = function() {
        var i, len, myRegion, myRegionHtml, ref, state, statesHtml;
        statesHtml = "";
        myRegionHtml = "";
        ref = this.states;
        for (i = 0, len = ref.length; i < len; i++) {
            state = ref[i];
            statesHtml += "<li class=\"\">\n    <a href=\"" + state.url + "\" title=\"" + state.name + "\" data-uf=\"" + (state.sigla.toUpperCase()) + "\" class=\"searchable\">\n        <div class=\"state-flag " + (state.sigla.toLowerCase()) + "\"></div>\n        <div class=\"state-border\"><div class=\"sigla-uf\">" + state.sigla + "</div></div>\n    </a>\n</li>";
            if (state.sigla === this.geo.state.code) {
                myRegion = state;
            }
        }
        if (myRegion) {
            myRegionHtml = "<div class=\"my-state-button-container home-analytics-area home-analytics-id-suggest\">\n    <a class=\"my-state-button-area\" href=\"" + myRegion.url + "\">\n        <div>\n            <div class=\"nav-arrow\"></div>\n            <div class=\"text-area\">\n                <div>procurando por</div>\n                <span>" + myRegion.name + "?</span>\n            </div>\n        </div>\n    </a>\n</div>";
        }
        return this.html = "<h4>seu estado</h4>\n" + myRegionHtml + "\n<ul class=\"flags-board\">" + statesHtml + "</ul>";
    };
    return NewsMenuWidget;
})();
new NewsMenuWidget;
var EsportesMenuWidget, loadedStyles, loadedTeams, bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments);
    };
};
window.libby = window.libby || {};
loadedStyles = {};
loadedTeams = {};
window.libby.SoccerTeams = (function() {
    function SoccerTeams(soccerApiUrl) {
        this.head = $('head');
        this.path = soccerApiUrl || 'https://api.globo.com/soccer_teams/';
    }
    SoccerTeams.prototype.loadStyle = function(kind) {
        if (loadedStyles[kind]) {
            return;
        }
        loadedStyles[kind] = true;
        return this.head.append($("<link rel=\"stylesheet\" href=\"" + this.path + kind + ".css\" type=\"text/css\" media=\"screen\" />"));
    };
    SoccerTeams.prototype.loadTeams = function(kind, callback) {
        var self;
        if (loadedTeams[kind]) {
            return callback(loadedTeams[kind]);
        }
        self = this;
        return $.ajax({
            url: "" + this.path + kind + ".jsonp",
            dataType: 'jsonp',
            cache: true,
            jsonpCallback: 'soccerTeams',
            success: function(data) {
                return self._onTeamsReady(data, callback, kind);
            }
        });
    };
    SoccerTeams.prototype._onTeamsReady = function(data, callback, kind) {
        loadedTeams[kind] = data;
        return callback(data);
    };
    return SoccerTeams;
})();
libby.soccerTeams = new libby.SoccerTeams('https://c.api.globo.com/soccer_teams/');
EsportesMenuWidget = (function() {
    function EsportesMenuWidget() {
        this.onTeamsReady = bind(this.onTeamsReady, this);
        this.add = bind(this.add, this);
        this.getTeams();
    }
    EsportesMenuWidget.prototype.add = function(menu, extra) {
        this.menu = menu;
        this.extra = extra;
        this.extra.append(this.html);
        this.allBtns = this.extra.find(".btn");
        this.allLis = this.extra.find("li");
        return this.bindEvents();
    };
    EsportesMenuWidget.prototype.getTeams = function() {
        if (window.libby && libby.soccerTeams) {
            libby.soccerTeams.loadStyle('ab');
            return libby.soccerTeams.loadTeams('ab', this.onTeamsReady);
        }
    };
    EsportesMenuWidget.prototype.onTeamsReady = function(teams) {
        var widgetEsporte;
        this.teams = teams;
        this.render();
        widgetEsporte = jQuery('#home-menu');
        return widgetEsporte.widgetMenu('includeWidget', 'ge', this.add);
    };
    EsportesMenuWidget.prototype.bindEvents = function() {
        this.extra.on('click', 'a.btn.serie-a', (function(_this) {
            return function(ev) {
                return _this.onBtnClick(ev, 'a');
            };
        })(this));
        return this.extra.on('click', 'a.btn.serie-b', (function(_this) {
            return function(ev) {
                return _this.onBtnClick(ev, 'b');
            };
        })(this));
    };
    EsportesMenuWidget.prototype.onBtnClick = function(ev, serie) {
        ev.preventDefault();
        this.allBtns.removeClass('current');
        this.allBtns.filter(".serie-" + serie).addClass('current');
        this.allLis.removeClass('soccer-team__visible');
        return this.allLis.filter("[data-serie='" + serie + "']").addClass('soccer-team__visible');
    };
    EsportesMenuWidget.prototype.render = function() {
        var i, len, ref, team, teamLis;
        teamLis = "";
        ref = this.teams;
        for (i = 0, len = ref.length; i < len; i++) {
            team = ref[i];
            teamLis += "<li data-serie=\"" + team.serie + "\" class=\"" + (team.serie === 'a' ? 'soccer-team__visible' : '') + " soccer-team\">\n    <a href=\"" + team.permalink + "\" title=\"" + team.nome_popular + "\">\n        <div class=\"" + team.slug + " soccer-team__logo\"></div>\n    </a>\n</li>";
        }
        return this.html = "<div class=\"buttons-area\">\n    <a href=\"#\" class=\"btn serie-a current\">SÉRIE A</a>\n    <a href=\"#\" class=\"btn serie-b\">SÉRIE B</a>\n</div>\n<ul class=\"shields soccer-teams\">\n    " + teamLis + "\n</ul>";
    };
    return EsportesMenuWidget;
})();
new EsportesMenuWidget();
var NovelasMenuWidget, menuWidget, bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments);
    };
};
NovelasMenuWidget = (function() {
    function NovelasMenuWidget() {
        this.onNovelas = bind(this.onNovelas, this);
        this.add = bind(this.add, this);
        this.getNovelas();
    }
    NovelasMenuWidget.prototype.add = function(menu, extra) {
        this.menu = menu;
        this.extra = extra;
        return this.extra.append(this.html);
    };
    NovelasMenuWidget.prototype.getNovelas = function() {
        return $.getJSON('/libby/aplicacoes/cadastro_novelas/all_novelas.json', this.onNovelas);
    };
    NovelasMenuWidget.prototype.onNovelas = function(novelas) {
        this.novelas = novelas;
        this.render();
        return jQuery('.nested.widget-menu').widgetMenu('includeWidget', 'gshow', this.add);
    };
    NovelasMenuWidget.prototype.render = function() {
        var i, len, novela, novelasHtml, ref, logo;
        novelasHtml = "";
        ref = this.novelas;
        for (i = 0, len = ref.length; i < len; i++) {
            novela = ref[i];
            logo = novela && novela.logo_tv && novela.logo_tv.replace(/^https?:\/\//, 'https://');
            novelasHtml += "<li class=\"novela\">\n    <a href=\"" + novela.url + "\" class=\"searchable\">\n        <span class='borda-novela'>\n            <span></span>\n            <img src=\"" + logo + "\"></img>\n        </span>\n        <span class=\"name\">" + novela.name + "</span>\n    </a>\n</li>";
        }
        return this.html = "<h4>novelas</h4>\n<ul class=\"novelas-list\">" + novelasHtml + "</ul>";
    };
    return NovelasMenuWidget;
})();
menuWidget = new NovelasMenuWidget;

function loadMenu() {
    if (!glb.isMobile) {
        var MenuHome = function() {};
        MenuHome.prototype = {
            init: function() {
                var footer = document.getElementById('home-menu-footer'),
                    menuTop = $('#home-menu'),
                    content = footer.innerHTML;
                menuTop.html(content);
                menuTop.widgetMenu();
                hui.on(window, 'throttledResize', this.alignMenu);
                footer.innerHTML = '';
            },
            alignMenu: function() {
                var floatBox;
                if (window.openedMenu && window.openedMenu.classList.contains('opened')) {
                    floatBox = window.openedMenu;
                } else {
                    floatBox = document.querySelector('.widget-menu__list.visible .float-box');
                    if (floatBox)
                        floatBox.setAttribute('data-left', floatBox.style.left);
                }
                if (floatBox) {
                    window.openedMenu = floatBox;
                    var floatLeft = (floatBox.style.left == '') ? 0 : parseInt(floatBox.style.left);
                    var distanceLeft = hui.offsetDistance(floatBox, 'offsetLeft');
                    var windowSize = window.outerWidth;
                    var boxSize = floatBox.offsetWidth;
                    var newLeft = (windowSize - boxSize - distanceLeft + floatLeft);
                    if (newLeft < 0) {
                        floatBox.style.left = (newLeft - 10) + 'px';
                    } else {
                        floatBox.style.left = floatBox.getAttribute('data-left');
                    }
                }
            }
        };
        var menu = new MenuHome();
        menu.init();
        setTimeout(function() {
            var menuG1 = document.querySelector('.widget-menu__list.g1');
            var submenu = menuG1.querySelector('.submenu .top-link');
            var links = submenu.querySelectorAll('a');
            for (var i = 0, qt = links.length; i < qt; i++) {
                var link = links[i];
                if (link.getAttribute('href').match(/globoesporte\.globo/g)) {
                    link.parentNode.remove();
                }
            }
        }, 2000);
    }
}
$(document).ready(function() {
    var topglobo;
    topglobo = $('.topglobocom__slick');
    topglobo.slick({
        infinite: true,
        autoplay: false,
        adaptiveHeight: true,
        dots: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 9999999,
            settings: {
                slidesToShow: 3,
                dots: false
            }
        }, {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        }]
    });
    topglobo.on('beforeChange', function(ev, slick, currentSlide, nextSlide) {
        var buttons, color;
        color = $(slick.$slides[nextSlide]).css('color');
        buttons = slick.$dots.find('li button');
        buttons.css('background', '');
        buttons[nextSlide].style.background = color;
    });
    topglobo.on('swipe', function(ev, slick, direction) {
        var key;
        key = direction === 'right' ? '/use/r/swipe_esquerda' : '/use/r/swipe_direita';
        window._gaq = window._gaq || [];
        return window._gaq.push(['_trackPageview', key]);
    });
});
(function() {
    var franjaGloboPlay = document.querySelector('.franja-globoplay');
    var glb = window.glb || {};
    if (glb.pageMode == 'preview') return;
    if (!franjaGloboPlay) return;
    var recommendation = function() {
        var options = {
            url: 'https://recomendacao.globo.com/rec/v2/user?limit=10&client_id=globoplay&content_id=geral',
            childs: '.franja-globoplay__item a',
            fringeSize: 5,
            queries: {
                title: '.hui-highlight-title',
                header: '.hui-highlight-chapeu'
            },
            isVideo: true,
            photoSizes: {
                draft: '45x34',
                small: '320x200',
                medium: '480x300',
                large: '270x169',
                xlarge: '320x200',
                xxlarge: '320x200',
                extra: '640x360',
                extra2: '480x360',
            },
            eachCallback: function(self) {
                if (typeof self.isFirst == 'undefined') {
                    self.isFirst = true;
                    self.bkpPhotoSizes = self.options.photoSizes;
                    self.options.photoSizes = {
                        draft: '45x34',
                        small: '320x200',
                        medium: '480x300',
                        large: '480x360',
                        xlarge: '640x360',
                        xxlarge: '640x360'
                    }
                } else {
                    if (self.bkpPhotoSizes) {
                        self.options.photoSizes = self.bkpPhotoSizes;
                        self.bkpPhotoSizes = null;
                    }
                }
            },
            extraCallback: function(el, highlightData, self) {
                var pics = el.querySelectorAll('img[data-src], source[data-srcset]');
                for (var i = 0, qt = pics.length; i < qt; i++) {
                    var pic = pics[i];
                    pic.removeAttribute('data-src');
                    pic.removeAttribute('data-srcset');
                }
                el.querySelector(self.options.queries.header).innerHTML = highlightData.extras["program_title"] || "";
                var time = hui.durationToTime(highlightData.extras['duration']);
                var info = el.querySelector('.hui-highlight-videos__item-info');
                info.setAttribute('data-duration', time);
            }
        };
        var recommender = new hui.fn.recommender(franjaGloboPlay, options);
        recommender.run();
    };
    hui.fn.ScrollSpy.add({
        el: franjaGloboPlay,
        callback: recommendation
    });
})();
var indexOf = [].indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item) return i;
    }
    return -1;
};
$(document).ready(function() {
    var isIE, isIE11;
    isIE11 = !(window.ActiveXObject) && "ActiveXObject" in window;
    isIE = document.all && document.querySelector;
    if (isIE || isIE11) {
        return;
    }
    window.slickGlobosatPlay = {
        slicked: null,
        load: function() {
            if (slickGlobosatPlay.slicked != null && slickGlobosatPlay.slicked === true) {
                return;
            }
            slickGlobosatPlay.slicked = true;
            var topglobo = $('.franja-globosatplay__slider');
            topglobo.slick({
                appendArrows: $('.franja-globosatplay__logotypes-list'),
                prevArrow: "<a class='franja-globosatplay__arrow home-analytics-area home-analytics-id-seta_esquerda' href='#'><svg class='franja-globosatplay__arrow-image'><use xlink:href='#globosatplay__carrossel_arrow'></use></svg></a>",
                nextArrow: "<a class='franja-globosatplay__arrow franja-globosatplay__arrow--right home-analytics-area home-analytics-id-seta_direita' href='#'><svg class='franja-globosatplay__arrow-image'><use xlink:href='#globosatplay__carrossel_arrow'></use></svg></a>",
                infinite: true,
                autoplay: false,
                draggable: false,
                adaptiveHeight: true,
                dots: false,
                arrows: true,
                speed: 700,
                slidesToShow: 10,
                slidesToScroll: 10,
                responsive: [{
                    breakpoint: 9999999,
                    settings: {
                        slidesToShow: 10
                    }
                }, {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 9,
                        slidesToScroll: 9,
                        dots: false,
                        draggable: true
                    }
                }]
            });
        },
        unload: function() {
            if (slickGlobosatPlay.slicked != null && slickGlobosatPlay.slicked === false) {
                return;
            }
            slickGlobosatPlay.slicked = false;
            try {
                var topglobo = $('.franja-globosatplay__slider');
                topglobo.slick('unslick');
            } catch (e) {}
        },
        change: function() {
            var widthWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (widthWindow >= 620) {
                slickGlobosatPlay.load();
            } else if (widthWindow < 620) {
                slickGlobosatPlay.unload();
            }
        }
    };
    slickGlobosatPlay.change();
    hui.on(window, "throttledResize", slickGlobosatPlay.change);
});