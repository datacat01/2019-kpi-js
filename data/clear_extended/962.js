(function($) {
    Drupal.behaviors.panopolyImagesModule = {
        attach: function(context, settings) {
            var captions = $('.caption', context).has('img');
            $(captions).once('panopoly-images').imagesLoaded(function() {
                panopolyImagesResizeCaptionBox(captions);
            });

            function panopolyImagesResizeCaptionBox(captions) {
                captions.each(function() {
                    var imageSet = $('img', this),
                        imgBoxWidth = getImgWidth(imageSet),
                        wrapperBoxWidth =
                        getWrapperSpacing($('.caption-inner', this)) +
                        getWrapperSpacing($('.caption-width-container', this)),
                        totalWidth = imgBoxWidth + wrapperBoxWidth;
                    $(this).width(totalWidth);
                });
            }

            // Get width of image plus margins, borders and padding
            function getImgWidth(imageSet) {
                var imgWidth = 0,
                    imgBoxExtra = 0,
                    testWidth = 0;
                var attrWidth;

                // We shouldn't have more than one image in a caption, but it would be
                // possible, so we make sure we have the widest one
                for (var i = 0; i < imageSet.length; i++) {
                    // If we have a hardcoded width attribute from manual resizing in
                    // TinMCE, use that. If not, use the image naturalWidth. We can't
                    // reliably use width() for responsive images.
                    attrWidth = $(imageSet[i]).attr("width");
                    if (typeof attrWidth !== 'undefined') {
                        // attr() returns a string. Must convert to int for math to work.
                        testWidth = parseInt(attrWidth, 10);
                    } else {
                        testWidth = imageSet[i].naturalWidth;
                    }
                    if (testWidth > imgWidth) {
                        imgWidth = testWidth;
                        imgBoxExtra = getWrapperSpacing(imageSet[i])
                    }
                }
                return imgWidth + imgBoxExtra;
            }

            // We want the total of margin, border and padding on the element
            function getWrapperSpacing(el) {
                var spacing = ['margin-left', 'border-left', 'padding-left', 'padding-right', 'border-right', 'margin-right'],
                    totalPx = 0,
                    spacePx = 0,
                    spaceRaw = '';
                for (var i = 0; i < spacing.length; i++) {
                    spaceRaw = $(el).css(spacing[i]);

                    // Themers might add padding, borders or margin defined in ems, but we can't
                    // add that to pixel dimensions returned by naturalWidth, so we just throw
                    // away anything but pixels. Themers have to deal with that.
                    if (spaceRaw && spaceRaw.substr(spaceRaw.length - 2) == 'px') {
                        spacePx = parseInt(spaceRaw, 10);
                        totalPx += ($.isNumeric(spacePx)) ? spacePx : 0;
                    }
                }
                return totalPx;
            }
        }
    }
})(jQuery);;
/*!
 * typeahead.js 0.10.4
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */

(function($) {
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
            getUniqueId: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            }(),
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
            noop: function() {}
        };
    }();
    var VERSION = "0.10.4";
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
            return function setKey() {
                var args = [].slice.call(arguments, 0);
                return function tokenize(o) {
                    var tokens = [];
                    _.each(args, function(k) {
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
        var ls, methods;
        try {
            ls = window.localStorage;
            ls.setItem("~~~", "!");
            ls.removeItem("~~~");
        } catch (err) {
            ls = null;
        }

        function PersistentStorage(namespace) {
            this.prefix = ["__", namespace, "__"].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));
        }
        if (ls && window.JSON) {
            methods = {
                _prefix: function(key) {
                    return this.prefix + key;
                },
                _ttlKey: function(key) {
                    return this._prefix(key) + this.ttlKey;
                },
                get: function(key) {
                    if (this.isExpired(key)) {
                        this.remove(key);
                    }
                    return decode(ls.getItem(this._prefix(key)));
                },
                set: function(key, val, ttl) {
                    if (_.isNumber(ttl)) {
                        ls.setItem(this._ttlKey(key), encode(now() + ttl));
                    } else {
                        ls.removeItem(this._ttlKey(key));
                    }
                    return ls.setItem(this._prefix(key), encode(val));
                },
                remove: function(key) {
                    ls.removeItem(this._ttlKey(key));
                    ls.removeItem(this._prefix(key));
                    return this;
                },
                clear: function() {
                    var i, key, keys = [],
                        len = ls.length;
                    for (i = 0; i < len; i++) {
                        if ((key = ls.key(i)).match(this.keyMatcher)) {
                            keys.push(key.replace(this.keyMatcher, ""));
                        }
                    }
                    for (i = keys.length; i--;) {
                        this.remove(keys[i]);
                    }
                    return this;
                },
                isExpired: function(key) {
                    var ttl = decode(ls.getItem(this._ttlKey(key)));
                    return _.isNumber(ttl) && now() > ttl ? true : false;
                }
            };
        } else {
            methods = {
                get: _.noop,
                set: _.noop,
                remove: _.noop,
                clear: _.noop,
                isExpired: _.noop
            };
        }
        _.mixin(PersistentStorage.prototype, methods);
        return PersistentStorage;

        function now() {
            return new Date().getTime();
        }

        function encode(val) {
            return JSON.stringify(_.isUndefined(val) ? null : val);
        }

        function decode(val) {
            return JSON.parse(val);
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
            this.lastUrl = null;
            this._send = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            this._get = o.rateLimiter ? o.rateLimiter(this._get) : this._get;
            this._cache = o.cache === false ? new LruCache(0) : sharedCache;
        }
        Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
            maxPendingRequests = num;
        };
        Transport.resetCache = function resetCache() {
            sharedCache.reset();
        };
        _.mixin(Transport.prototype, {
            _get: function(url, o, cb) {
                var that = this,
                    jqXhr;
                if (this.cancelled || url !== this.lastUrl) {
                    return;
                }
                if (jqXhr = pendingRequests[url]) {
                    jqXhr.done(done).fail(fail);
                } else if (pendingRequestsCount < maxPendingRequests) {
                    pendingRequestsCount++;
                    pendingRequests[url] = this._send(url, o).done(done).fail(fail).always(always);
                } else {
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);
                }

                function done(resp) {
                    cb && cb(null, resp);
                    that._cache.set(url, resp);
                }

                function fail() {
                    cb && cb(true);
                }

                function always() {
                    pendingRequestsCount--;
                    delete pendingRequests[url];
                    if (that.onDeckRequestArgs) {
                        that._get.apply(that, that.onDeckRequestArgs);
                        that.onDeckRequestArgs = null;
                    }
                }
            },
            get: function(url, o, cb) {
                var resp;
                if (_.isFunction(o)) {
                    cb = o;
                    o = {};
                }
                this.cancelled = false;
                this.lastUrl = url;
                if (resp = this._cache.get(url)) {
                    _.defer(function() {
                        cb && cb(null, resp);
                    });
                } else {
                    this._get(url, o, cb);
                }
                return !!resp;
            },
            cancel: function() {
                this.cancelled = true;
            }
        });
        return Transport;

        function callbackToDeferred(fn) {
            return function customSendWrapper(url, o) {
                var deferred = $.Deferred();
                fn(url, o, onSuccess, onError);
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
    var SearchIndex = function() {
        "use strict";

        function SearchIndex(o) {
            o = o || {};
            if (!o.datumTokenizer || !o.queryTokenizer) {
                $.error("datumTokenizer and queryTokenizer are both required");
            }
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
                    id = that.datums.push(datum) - 1;
                    tokens = normalizeTokens(that.datumTokenizer(datum));
                    _.each(tokens, function(token) {
                        var node, chars, ch;
                        node = that.trie;
                        chars = token.split("");
                        while (ch = chars.shift()) {
                            node = node.children[ch] || (node.children[ch] = newNode());
                            node.ids.push(id);
                        }
                    });
                });
            },
            get: function get(query) {
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
                        node = node.children[ch];
                    }
                    if (node && chars.length === 0) {
                        ids = node.ids.slice(0);
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
            reset: function reset() {
                this.datums = [];
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
            return {
                ids: [],
                children: {}
            };
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
            arrayA = arrayA.sort(compare);
            arrayB = arrayB.sort(compare);
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

            function compare(a, b) {
                return a - b;
            }
        }
    }();
    var oParser = function() {
        "use strict";
        return {
            local: getLocal,
            prefetch: getPrefetch,
            remote: getRemote
        };

        function getLocal(o) {
            return o.local || null;
        }

        function getPrefetch(o) {
            var prefetch, defaults;
            defaults = {
                url: null,
                thumbprint: "",
                ttl: 24 * 60 * 60 * 1e3,
                filter: null,
                ajax: {}
            };
            if (prefetch = o.prefetch || null) {
                prefetch = _.isString(prefetch) ? {
                    url: prefetch
                } : prefetch;
                prefetch = _.mixin(defaults, prefetch);
                prefetch.thumbprint = VERSION + prefetch.thumbprint;
                prefetch.ajax.type = prefetch.ajax.type || "GET";
                prefetch.ajax.dataType = prefetch.ajax.dataType || "json";
                !prefetch.url && $.error("prefetch requires url to be set");
            }
            return prefetch;
        }

        function getRemote(o) {
            var remote, defaults;
            defaults = {
                url: null,
                cache: true,
                wildcard: "%QUERY",
                replace: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                send: null,
                filter: null,
                ajax: {}
            };
            if (remote = o.remote || null) {
                remote = _.isString(remote) ? {
                    url: remote
                } : remote;
                remote = _.mixin(defaults, remote);
                remote.rateLimiter = /^throttle$/i.test(remote.rateLimitBy) ? byThrottle(remote.rateLimitWait) : byDebounce(remote.rateLimitWait);
                remote.ajax.type = remote.ajax.type || "GET";
                remote.ajax.dataType = remote.ajax.dataType || "json";
                delete remote.rateLimitBy;
                delete remote.rateLimitWait;
                !remote.url && $.error("remote requires url to be set");
            }
            return remote;

            function byDebounce(wait) {
                return function(fn) {
                    return _.debounce(fn, wait);
                };
            }

            function byThrottle(wait) {
                return function(fn) {
                    return _.throttle(fn, wait);
                };
            }
        }
    }();
    (function(root) {
        "use strict";
        var old, keys;
        old = root.Bloodhound;
        keys = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        };
        root.Bloodhound = Bloodhound;

        function Bloodhound(o) {
            if (!o || !o.local && !o.prefetch && !o.remote) {
                $.error("one of local, prefetch, or remote is required");
            }
            this.limit = o.limit || 5;
            this.sorter = getSorter(o.sorter);
            this.dupDetector = o.dupDetector || ignoreDuplicates;
            this.local = oParser.local(o);
            this.prefetch = oParser.prefetch(o);
            this.remote = oParser.remote(o);
            this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null;
            this.index = new SearchIndex({
                datumTokenizer: o.datumTokenizer,
                queryTokenizer: o.queryTokenizer
            });
            this.storage = this.cacheKey ? new PersistentStorage(this.cacheKey) : null;
        }
        Bloodhound.noConflict = function noConflict() {
            root.Bloodhound = old;
            return Bloodhound;
        };
        Bloodhound.tokenizers = tokenizers;
        _.mixin(Bloodhound.prototype, {
            _loadPrefetch: function loadPrefetch(o) {
                var that = this,
                    serialized, deferred;
                if (serialized = this._readFromStorage(o.thumbprint)) {
                    this.index.bootstrap(serialized);
                    deferred = $.Deferred().resolve();
                } else {
                    deferred = $.ajax(o.url, o.ajax).done(handlePrefetchResponse);
                }
                return deferred;

                function handlePrefetchResponse(resp) {
                    that.clear();
                    that.add(o.filter ? o.filter(resp) : resp);
                    that._saveToStorage(that.index.serialize(), o.thumbprint, o.ttl);
                }
            },
            _getFromRemote: function getFromRemote(query, cb) {
                var that = this,
                    url, uriEncodedQuery;
                if (!this.transport) {
                    return;
                }
                query = query || "";
                uriEncodedQuery = encodeURIComponent(query);
                url = this.remote.replace ? this.remote.replace(this.remote.url, query) : this.remote.url.replace(this.remote.wildcard, uriEncodedQuery);
                return this.transport.get(url, this.remote.ajax, handleRemoteResponse);

                function handleRemoteResponse(err, resp) {
                    err ? cb([]) : cb(that.remote.filter ? that.remote.filter(resp) : resp);
                }
            },
            _cancelLastRemoteRequest: function cancelLastRemoteRequest() {
                this.transport && this.transport.cancel();
            },
            _saveToStorage: function saveToStorage(data, thumbprint, ttl) {
                if (this.storage) {
                    this.storage.set(keys.data, data, ttl);
                    this.storage.set(keys.protocol, location.protocol, ttl);
                    this.storage.set(keys.thumbprint, thumbprint, ttl);
                }
            },
            _readFromStorage: function readFromStorage(thumbprint) {
                var stored = {},
                    isExpired;
                if (this.storage) {
                    stored.data = this.storage.get(keys.data);
                    stored.protocol = this.storage.get(keys.protocol);
                    stored.thumbprint = this.storage.get(keys.thumbprint);
                }
                isExpired = stored.thumbprint !== thumbprint || stored.protocol !== location.protocol;
                return stored.data && !isExpired ? stored.data : null;
            },
            _initialize: function initialize() {
                var that = this,
                    local = this.local,
                    deferred;
                deferred = this.prefetch ? this._loadPrefetch(this.prefetch) : $.Deferred().resolve();
                local && deferred.done(addLocalToIndex);
                this.transport = this.remote ? new Transport(this.remote) : null;
                return this.initPromise = deferred.promise();

                function addLocalToIndex() {
                    that.add(_.isFunction(local) ? local() : local);
                }
            },
            initialize: function initialize(force) {
                return !this.initPromise || force ? this._initialize() : this.initPromise;
            },
            add: function add(data) {
                this.index.add(data);
            },
            get: function get(query, cb) {
                var that = this,
                    matches = [],
                    cacheHit = false;
                matches = this.index.get(query);
                matches = this.sorter(matches).slice(0, this.limit);
                matches.length < this.limit ? cacheHit = this._getFromRemote(query, returnRemoteMatches) : this._cancelLastRemoteRequest();
                if (!cacheHit) {
                    (matches.length > 0 || !this.transport) && cb && cb(matches);
                }

                function returnRemoteMatches(remoteMatches) {
                    var matchesWithBackfill = matches.slice(0);
                    _.each(remoteMatches, function(remoteMatch) {
                        var isDuplicate;
                        isDuplicate = _.some(matchesWithBackfill, function(match) {
                            return that.dupDetector(remoteMatch, match);
                        });
                        !isDuplicate && matchesWithBackfill.push(remoteMatch);
                        return matchesWithBackfill.length < that.limit;
                    });
                    cb && cb(that.sorter(matchesWithBackfill));
                }
            },
            clear: function clear() {
                this.index.reset();
            },
            clearPrefetchCache: function clearPrefetchCache() {
                this.storage && this.storage.clear();
            },
            clearRemoteCache: function clearRemoteCache() {
                this.transport && Transport.resetCache();
            },
            ttAdapter: function ttAdapter() {
                return _.bind(this.get, this);
            }
        });
        return Bloodhound;

        function getSorter(sortFn) {
            return _.isFunction(sortFn) ? sort : noSort;

            function sort(array) {
                return array.sort(sortFn);
            }

            function noSort(array) {
                return array;
            }
        }

        function ignoreDuplicates() {
            return false;
        }
    })(this);
    var html = function() {
        return {
            wrapper: '<span class="twitter-typeahead"></span>',
            dropdown: '<span class="tt-dropdown-menu"></span>',
            dataset: '<div class="tt-dataset-%CLASS%"></div>',
            suggestions: '<span class="tt-suggestions"></span>',
            suggestion: '<div class="tt-suggestion"></div>'
        };
    }();
    var css = function() {
        "use strict";
        var css = {
            wrapper: {
                position: "relative",
                display: "block"
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
            dropdown: {
                position: "absolute",
                top: "100%",
                left: "0",
                zIndex: "100",
                display: "none"
            },
            suggestions: {
                display: "block"
            },
            suggestion: {
                whiteSpace: "nowrap",
                cursor: "pointer"
            },
            suggestionChild: {
                whiteSpace: "normal"
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
        if (_.isMsie() && _.isMsie() <= 7) {
            _.mixin(css.input, {
                marginTop: "-1px"
            });
        }
        return css;
    }();
    var EventBus = function() {
        "use strict";
        var namespace = "typeahead:";

        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        _.mixin(EventBus.prototype, {
            trigger: function(type) {
                var args = [].slice.call(arguments, 1);
                this.$el.trigger(namespace + type, args);
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

        function Input(o) {
            var that = this,
                onBlur, onFocus, onKeydown, onInput;
            o = o || {};
            if (!o.input) {
                $.error("input is missing");
            }
            onBlur = _.bind(this._onBlur, this);
            onFocus = _.bind(this._onFocus, this);
            onKeydown = _.bind(this._onKeydown, this);
            onInput = _.bind(this._onInput, this);
            this.$hint = $(o.hint);
            this.$input = $(o.input).on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
            }
            if (!_.isMsie()) {
                this.$input.on("input.tt", onInput);
            } else {
                this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                    if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                        return;
                    }
                    _.defer(_.bind(that._onInput, that, $e));
                });
            }
            this.query = this.$input.val();
            this.$overflowHelper = buildOverflowHelper(this.$input);
        }
        Input.normalizeQuery = function(str) {
            return (str || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
        };
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.trigger("blurred");
            },
            _onFocus: function onFocus() {
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
                this._checkInputValue();
            },
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault, hintValue, inputValue;
                switch (keyName) {
                    case "tab":
                        hintValue = this.getHint();
                        inputValue = this.getInputValue();
                        preventDefault = hintValue && hintValue !== inputValue && !withModifier($e);
                        break;

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
            _checkInputValue: function checkInputValue() {
                var inputValue, areEquivalent, hasDifferentWhitespace;
                inputValue = this.getInputValue();
                areEquivalent = areQueriesEquivalent(inputValue, this.query);
                hasDifferentWhitespace = areEquivalent ? this.query.length !== inputValue.length : false;
                this.query = inputValue;
                if (!areEquivalent) {
                    this.trigger("queryChanged", this.query);
                } else if (hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query);
                }
            },
            focus: function focus() {
                this.$input.focus();
            },
            blur: function blur() {
                this.$input.blur();
            },
            getQuery: function getQuery() {
                return this.query;
            },
            setQuery: function setQuery(query) {
                this.query = query;
            },
            getInputValue: function getInputValue() {
                return this.$input.val();
            },
            setInputValue: function setInputValue(value, silent) {
                this.$input.val(value);
                silent ? this.clearHint() : this._checkInputValue();
            },
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query, true);
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
            getLanguageDirection: function getLanguageDirection() {
                return (this.$input.css("direction") || "ltr").toLowerCase();
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
                this.$hint = this.$input = this.$overflowHelper = null;
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
        var datasetKey = "ttDataset",
            valueKey = "ttValue",
            datumKey = "ttDatum";

        function Dataset(o) {
            o = o || {};
            o.templates = o.templates || {};
            if (!o.source) {
                $.error("missing source");
            }
            if (o.name && !isValidName(o.name)) {
                $.error("invalid dataset name: " + o.name);
            }
            this.query = null;
            this.highlight = !!o.highlight;
            this.name = o.name || _.getUniqueId();
            this.source = o.source;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.$el = $(html.dataset.replace("%CLASS%", this.name));
        }
        Dataset.extractDatasetName = function extractDatasetName(el) {
            return $(el).data(datasetKey);
        };
        Dataset.extractValue = function extractDatum(el) {
            return $(el).data(valueKey);
        };
        Dataset.extractDatum = function extractDatum(el) {
            return $(el).data(datumKey);
        };
        _.mixin(Dataset.prototype, EventEmitter, {
            _render: function render(query, suggestions) {
                if (!this.$el) {
                    return;
                }
                var that = this,
                    hasSuggestions;
                this.$el.empty();
                hasSuggestions = suggestions && suggestions.length;
                if (!hasSuggestions && this.templates.empty) {
                    this.$el.html(getEmptyHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(that.templates.footer ? getFooterHtml() : null);
                } else if (hasSuggestions) {
                    this.$el.html(getSuggestionsHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(that.templates.footer ? getFooterHtml() : null);
                }
                this.trigger("rendered");

                function getEmptyHtml() {
                    return that.templates.empty({
                        query: query,
                        isEmpty: true
                    });
                }

                function getSuggestionsHtml() {
                    var $suggestions, nodes;
                    $suggestions = $(html.suggestions).css(css.suggestions);
                    nodes = _.map(suggestions, getSuggestionNode);
                    $suggestions.append.apply($suggestions, nodes);
                    that.highlight && highlight({
                        className: "tt-highlight",
                        node: $suggestions[0],
                        pattern: query
                    });
                    return $suggestions;

                    function getSuggestionNode(suggestion) {
                        var $el;
                        $el = $(html.suggestion).append(that.templates.suggestion(suggestion)).data(datasetKey, that.name).data(valueKey, that.displayFn(suggestion)).data(datumKey, suggestion);
                        $el.children().each(function() {
                            $(this).css(css.suggestionChild);
                        });
                        return $el;
                    }
                }

                function getHeaderHtml() {
                    return that.templates.header({
                        query: query,
                        isEmpty: !hasSuggestions
                    });
                }

                function getFooterHtml() {
                    return that.templates.footer({
                        query: query,
                        isEmpty: !hasSuggestions
                    });
                }
            },
            getRoot: function getRoot() {
                return this.$el;
            },
            update: function update(query) {
                var that = this;
                this.query = query;
                this.canceled = false;
                this.source(query, render);

                function render(suggestions) {
                    if (!that.canceled && query === that.query) {
                        that._render(query, suggestions);
                    }
                }
            },
            cancel: function cancel() {
                this.canceled = true;
            },
            clear: function clear() {
                this.cancel();
                this.$el.empty();
                this.trigger("rendered");
            },
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
            },
            destroy: function destroy() {
                this.$el = null;
            }
        });
        return Dataset;

        function getDisplayFn(display) {
            display = display || "value";
            return _.isFunction(display) ? display : displayFn;

            function displayFn(obj) {
                return obj[display];
            }
        }

        function getTemplates(templates, displayFn) {
            return {
                empty: templates.empty && _.templatify(templates.empty),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            };

            function suggestionTemplate(context) {
                return "<p>" + displayFn(context) + "</p>";
            }
        }

        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
        }
    }();
    var Dropdown = function() {
        "use strict";

        function Dropdown(o) {
            var that = this,
                onSuggestionClick, onSuggestionMouseEnter, onSuggestionMouseLeave;
            o = o || {};
            if (!o.menu) {
                $.error("menu is required");
            }
            this.isOpen = false;
            this.isEmpty = true;
            this.datasets = _.map(o.datasets, initializeDataset);
            onSuggestionClick = _.bind(this._onSuggestionClick, this);
            onSuggestionMouseEnter = _.bind(this._onSuggestionMouseEnter, this);
            onSuggestionMouseLeave = _.bind(this._onSuggestionMouseLeave, this);
            this.$menu = $(o.menu).on("click.tt", ".tt-suggestion", onSuggestionClick).on("mouseenter.tt", ".tt-suggestion", onSuggestionMouseEnter).on("mouseleave.tt", ".tt-suggestion", onSuggestionMouseLeave);
            _.each(this.datasets, function(dataset) {
                that.$menu.append(dataset.getRoot());
                dataset.onSync("rendered", that._onRendered, that);
            });
        }
        _.mixin(Dropdown.prototype, EventEmitter, {
            _onSuggestionClick: function onSuggestionClick($e) {
                this.trigger("suggestionClicked", $($e.currentTarget));
            },
            _onSuggestionMouseEnter: function onSuggestionMouseEnter($e) {
                this._removeCursor();
                this._setCursor($($e.currentTarget), true);
            },
            _onSuggestionMouseLeave: function onSuggestionMouseLeave() {
                this._removeCursor();
            },
            _onRendered: function onRendered() {
                this.isEmpty = _.every(this.datasets, isDatasetEmpty);
                this.isEmpty ? this._hide() : this.isOpen && this._show();
                this.trigger("datasetRendered");

                function isDatasetEmpty(dataset) {
                    return dataset.isEmpty();
                }
            },
            _hide: function() {
                this.$menu.hide();
            },
            _show: function() {
                this.$menu.css("display", "block");
            },
            _getSuggestions: function getSuggestions() {
                return this.$menu.find(".tt-suggestion");
            },
            _getCursor: function getCursor() {
                return this.$menu.find(".tt-cursor").first();
            },
            _setCursor: function setCursor($el, silent) {
                $el.first().addClass("tt-cursor");
                !silent && this.trigger("cursorMoved");
            },
            _removeCursor: function removeCursor() {
                this._getCursor().removeClass("tt-cursor");
            },
            _moveCursor: function moveCursor(increment) {
                var $suggestions, $oldCursor, newCursorIndex, $newCursor;
                if (!this.isOpen) {
                    return;
                }
                $oldCursor = this._getCursor();
                $suggestions = this._getSuggestions();
                this._removeCursor();
                newCursorIndex = $suggestions.index($oldCursor) + increment;
                newCursorIndex = (newCursorIndex + 1) % ($suggestions.length + 1) - 1;
                if (newCursorIndex === -1) {
                    this.trigger("cursorRemoved");
                    return;
                } else if (newCursorIndex < -1) {
                    newCursorIndex = $suggestions.length - 1;
                }
                this._setCursor($newCursor = $suggestions.eq(newCursorIndex));
                this._ensureVisible($newCursor);
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, menuScrollTop, menuHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                menuScrollTop = this.$menu.scrollTop();
                menuHeight = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$menu.scrollTop(menuScrollTop + elTop);
                } else if (menuHeight < elBottom) {
                    this.$menu.scrollTop(menuScrollTop + (elBottom - menuHeight));
                }
            },
            close: function close() {
                if (this.isOpen) {
                    this.isOpen = false;
                    this._removeCursor();
                    this._hide();
                    this.trigger("closed");
                }
            },
            open: function open() {
                if (!this.isOpen) {
                    this.isOpen = true;
                    !this.isEmpty && this._show();
                    this.trigger("opened");
                }
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$menu.css(dir === "ltr" ? css.ltr : css.rtl);
            },
            moveCursorUp: function moveCursorUp() {
                this._moveCursor(-1);
            },
            moveCursorDown: function moveCursorDown() {
                this._moveCursor(+1);
            },
            getDatumForSuggestion: function getDatumForSuggestion($el) {
                var datum = null;
                if ($el.length) {
                    datum = {
                        raw: Dataset.extractDatum($el),
                        value: Dataset.extractValue($el),
                        datasetName: Dataset.extractDatasetName($el)
                    };
                }
                return datum;
            },
            getDatumForCursor: function getDatumForCursor() {
                return this.getDatumForSuggestion(this._getCursor().first());
            },
            getDatumForTopSuggestion: function getDatumForTopSuggestion() {
                return this.getDatumForSuggestion(this._getSuggestions().first());
            },
            update: function update(query) {
                _.each(this.datasets, updateDataset);

                function updateDataset(dataset) {
                    dataset.update(query);
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.isEmpty = true;

                function clearDataset(dataset) {
                    dataset.clear();
                }
            },
            isVisible: function isVisible() {
                return this.isOpen && !this.isEmpty;
            },
            destroy: function destroy() {
                this.$menu.off(".tt");
                this.$menu = null;
                _.each(this.datasets, destroyDataset);

                function destroyDataset(dataset) {
                    dataset.destroy();
                }
            }
        });
        return Dropdown;

        function initializeDataset(oDataset) {
            return new Dataset(oDataset);
        }
    }();
    var Typeahead = function() {
        "use strict";
        var attrsKey = "ttAttrs";

        function Typeahead(o) {
            var $menu, $input, $hint;
            o = o || {};
            if (!o.input) {
                $.error("missing input");
            }
            this.isActivated = false;
            this.autoselect = !!o.autoselect;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.$node = buildDom(o.input, o.withHint);
            $menu = this.$node.find(".tt-dropdown-menu");
            $input = this.$node.find(".tt-input");
            $hint = this.$node.find(".tt-hint");
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
            this.eventBus = o.eventBus || new EventBus({
                el: $input
            });
            this.dropdown = new Dropdown({
                menu: $menu,
                datasets: o.datasets
            }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this);
            this.input = new Input({
                input: $input,
                hint: $hint
            }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this);
            this._setLanguageDirection();
        }
        _.mixin(Typeahead.prototype, {
            _onSuggestionClicked: function onSuggestionClicked(type, $el) {
                var datum;
                if (datum = this.dropdown.getDatumForSuggestion($el)) {
                    this._select(datum);
                }
            },
            _onCursorMoved: function onCursorMoved() {
                var datum = this.dropdown.getDatumForCursor();
                this.input.setInputValue(datum.value, true);
                this.eventBus.trigger("cursorchanged", datum.raw, datum.datasetName);
            },
            _onCursorRemoved: function onCursorRemoved() {
                this.input.resetInputValue();
                this._updateHint();
            },
            _onDatasetRendered: function onDatasetRendered() {
                this._updateHint();
            },
            _onOpened: function onOpened() {
                this._updateHint();
                this.eventBus.trigger("opened");
            },
            _onClosed: function onClosed() {
                this.input.clearHint();
                this.eventBus.trigger("closed");
            },
            _onFocused: function onFocused() {
                this.isActivated = true;
                this.dropdown.open();
            },
            _onBlurred: function onBlurred() {
                this.isActivated = false;
                this.dropdown.empty();
                this.dropdown.close();
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var cursorDatum, topSuggestionDatum;
                cursorDatum = this.dropdown.getDatumForCursor();
                topSuggestionDatum = this.dropdown.getDatumForTopSuggestion();
                if (cursorDatum) {
                    this._select(cursorDatum);
                    $e.preventDefault();
                } else if (this.autoselect && topSuggestionDatum) {
                    this._select(topSuggestionDatum);
                    $e.preventDefault();
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                var datum;
                if (datum = this.dropdown.getDatumForCursor()) {
                    this._select(datum);
                    $e.preventDefault();
                } else {
                    this._autocomplete(true);
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.dropdown.close();
                this.input.resetInputValue();
            },
            _onUpKeyed: function onUpKeyed() {
                var query = this.input.getQuery();
                this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.moveCursorUp();
                this.dropdown.open();
            },
            _onDownKeyed: function onDownKeyed() {
                var query = this.input.getQuery();
                this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.moveCursorDown();
                this.dropdown.open();
            },
            _onLeftKeyed: function onLeftKeyed() {
                this.dir === "rtl" && this._autocomplete();
            },
            _onRightKeyed: function onRightKeyed() {
                this.dir === "ltr" && this._autocomplete();
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this.input.clearHintIfInvalid();
                query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.empty();
                this.dropdown.open();
                this._setLanguageDirection();
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
                this.dropdown.open();
            },
            _setLanguageDirection: function setLanguageDirection() {
                var dir;
                if (this.dir !== (dir = this.input.getLanguageDirection())) {
                    this.dir = dir;
                    this.$node.css("direction", dir);
                    this.dropdown.setLanguageDirection(dir);
                }
            },
            _updateHint: function updateHint() {
                var datum, val, query, escapedQuery, frontMatchRegEx, match;
                datum = this.dropdown.getDatumForTopSuggestion();
                if (datum && this.dropdown.isVisible() && !this.input.hasOverflow()) {
                    val = this.input.getInputValue();
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(datum.value);
                    match ? this.input.setHint(val + match[1]) : this.input.clearHint();
                } else {
                    this.input.clearHint();
                }
            },
            _autocomplete: function autocomplete(laxCursor) {
                var hint, query, isCursorAtEnd, datum;
                hint = this.input.getHint();
                query = this.input.getQuery();
                isCursorAtEnd = laxCursor || this.input.isCursorAtEnd();
                if (hint && query !== hint && isCursorAtEnd) {
                    datum = this.dropdown.getDatumForTopSuggestion();
                    datum && this.input.setInputValue(datum.value);
                    this.eventBus.trigger("autocompleted", datum.raw, datum.datasetName);
                }
            },
            _select: function select(datum) {
                this.input.setQuery(datum.value);
                this.input.setInputValue(datum.value, true);
                this._setLanguageDirection();
                this.eventBus.trigger("selected", datum.raw, datum.datasetName);
                this.dropdown.close();
                _.defer(_.bind(this.dropdown.empty, this.dropdown));
            },
            open: function open() {
                this.dropdown.open();
            },
            close: function close() {
                this.dropdown.close();
            },
            setVal: function setVal(val) {
                val = _.toStr(val);
                if (this.isActivated) {
                    this.input.setInputValue(val);
                } else {
                    this.input.setQuery(val);
                    this.input.setInputValue(val, true);
                }
                this._setLanguageDirection();
            },
            getVal: function getVal() {
                return this.input.getQuery();
            },
            destroy: function destroy() {
                this.input.destroy();
                this.dropdown.destroy();
                destroyDomStructure(this.$node);
                this.$node = null;
            }
        });
        return Typeahead;

        function buildDom(input, withHint) {
            var $input, $wrapper, $dropdown, $hint;
            $input = $(input);
            $wrapper = $(html.wrapper).css(css.wrapper);
            $dropdown = $(html.dropdown).css(css.dropdown);
            $hint = $input.clone().css(css.hint).css(getBackgroundStyles($input));
            $hint.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", true).attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            });
            $input.data(attrsKey, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass("tt-input").attr({
                autocomplete: "off",
                spellcheck: false
            }).css(withHint ? css.input : css.inputWithNoHint);
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input.wrap($wrapper).parent().prepend(withHint ? $hint : null).append($dropdown);
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

        function destroyDomStructure($node) {
            var $input = $node.find(".tt-input");
            _.each($input.data(attrsKey), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.detach().removeData(attrsKey).removeClass("tt-input").insertAfter($node);
            $node.remove();
        }
    }();
    (function() {
        "use strict";
        var old, typeaheadKey, methods;
        old = $.fn.typeahead;
        typeaheadKey = "ttTypeahead";
        methods = {
            initialize: function initialize(o, datasets) {
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {};
                return this.each(attach);

                function attach() {
                    var $input = $(this),
                        eventBus, typeahead;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                    });
                    typeahead = new Typeahead({
                        input: $input,
                        eventBus: eventBus = new EventBus({
                            el: $input
                        }),
                        withHint: _.isUndefined(o.hint) ? true : !!o.hint,
                        minLength: o.minLength,
                        autoselect: o.autoselect,
                        datasets: datasets
                    });
                    $input.data(typeaheadKey, typeahead);
                }
            },
            open: function open() {
                return this.each(openTypeahead);

                function openTypeahead() {
                    var $input = $(this),
                        typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.open();
                    }
                }
            },
            close: function close() {
                return this.each(closeTypeahead);

                function closeTypeahead() {
                    var $input = $(this),
                        typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.close();
                    }
                }
            },
            val: function val(newVal) {
                return !arguments.length ? getVal(this.first()) : this.each(setVal);

                function setVal() {
                    var $input = $(this),
                        typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.setVal(newVal);
                    }
                }

                function getVal($input) {
                    var typeahead, query;
                    if (typeahead = $input.data(typeaheadKey)) {
                        query = typeahead.getVal();
                    }
                    return query;
                }
            },
            destroy: function destroy() {
                return this.each(unattach);

                function unattach() {
                    var $input = $(this),
                        typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.destroy();
                        $input.removeData(typeaheadKey);
                    }
                }
            }
        };
        $.fn.typeahead = function(method) {
            var tts;
            if (methods[method] && method !== "initialize") {
                tts = this.filter(function() {
                    return !!$(this).data(typeaheadKey);
                });
                return methods[method].apply(tts, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
        };
    })();
})(window.jQuery);;
/**
 * Define the chunk method in the prototype of an array
 * that returns an array with arrays of the given size.
 *
 * @param chunkSize {int} Size of every group
 */
Object.defineProperty(Array.prototype, 'chunk', {
    value: function(chunkSize) {
        var temporal = [];
        for (var i = 0; i < this.length; i += chunkSize) {
            temporal.push(this.slice(i, i + chunkSize));
        }
        return temporal;
    }
});

;
/**
 * @file
 *  Add DOM related behaviours.
 */
var Sage = Sage || {};

(function($) {

    Sage.Dom = {

        getElementById: function(id, context) {
            context = context || document;
            return $('#' + id, context);
        },

        getElementByName: function(name, context) {
            context = context || document;
            return $('[name="' + name + '"],[name$="\[' + name + '\]"]', context);
        },

        getElementByAttr: function(attr, context) {
            context = context || document;
            return $('[name][' + attr + ']', context);
        },

        changeInputLabel: function(input, newLabel) {
            var label = this.getInputLabel(input);
            var children = label.children();
            label.html(newLabel).append(children);
            $(input).attr('data-label', this.getInputLabelHTML(input));
        },

        changeInputDescription: function(input, newDescription) {
            var description = this.getInputDescription(input);
            description.html(newDescription);
        },

        getInputLabel: function(input) {
            return $(input).closest('.form-item').find('label');
        },

        getInputLabelHTML: function(input) {
            return this.getInputLabel(input).html();
        },

        getInputDescription: function(input) {
            return $(input).closest('.form-item').find('.description');
        },

        showElement: function(element) {
            $(element).closest('.form-item').removeClass('element-invisible');
        },

        hideElement: function(element) {
            $(element).closest('.form-item').addClass('element-invisible');
        }
    };

    $.fn.extend({
        /**
         * Shows an element as disabled, but still functional to be submitted.
         * @version jQuery 1.9
         */
        showDisabled: function() {
            this.prop('disabled', true);
            this.addClass('bg-warm-grey');
        },

        /**
         * Shows an element as enabled, after being disabled.
         * @version jQuery 1.9
         */
        showEnabled: function() {
            this.prop('disabled', false);
            this.removeClass('bg-warm-grey');
        },

        /**
         * Shows an element as enabled or disabled
         * @version jQuery 1.9
         */
        setState: function(state) {
            (state) ? this.showEnabled(): this.showDisabled();
        },

        /**
         * Sets a value only if it is not empty.
         * @param value
         */
        setValueIfNotEmpty: function(value) {
            if (value) {
                return this.val(value);
            }
            return this;
        }
    });

}(jQuery));;
/**
 * @file
 *  Add domain related behaviours.
 */
var Sage = Sage || {};

(function($) {

    Sage.Domain = {
        getDomainID: function() {
            return typeof Drupal.settings.Sage.Domain.domainID != 'undefined' ? Drupal.settings.Sage.Domain.domainID : '';
        },

        getWebsiteID: function() {
            return typeof Drupal.settings.Sage.Domain.websiteID != 'undefined' ? Drupal.settings.Sage.Domain.websiteID : '';
        }
    }
}(jQuery));;
/**
 * @file
 *  Add path related behaviours.
 */
var Sage = Sage || {};

(function($) {

    Drupal.theme.prototype.modalContainer = function(containerId, id, content, title) {
        title = (typeof title == 'undefined') ? '' : title;
        var output = '';
        output += '<div class="modal fade" id="' + containerId + '" role="dialog" aria-hidden="true" aria-labelledby="' + title + '" tabindex="-1">';
        output += '  <div class="modal-dialog">';
        output += '    <div class="modal-content">';
        output += '      <div class="modal-header">';
        output += '        <button type="button" class="modal-close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">' + Drupal.t('Close') + '</span></button>';
        output += '       <h3 class="modal-title">' + title + '</h3>';
        output += '      </div>';
        output += '        <div class="modal-body" id="' + id + '">';
        output += content;
        output += '        </div>';
        output += '      <div class="modal-footer"></div>';
        output += '    </div>';
        output += '  </div>';
        output += '</div>';
        return output;
    }

    Sage.Bootstrap = {

        Modal: $.extend({}, {

            createContainer: function(id, content, title) {
                content = (typeof content != 'undefined') ? content : this.getLoadingImage();
                return $(Drupal.theme('modalContainer', this.getContainerId(id), id, content, title));
            },

            addContainer: function(id, content, title) {
                var container = this.getContainer(id);
                if (container.length <= 0) {
                    $('body').append(this.createContainer(id, content, title));
                    container = this.getContainer(id);
                }
                return container;
            },

            getContainerId: function(id) {
                return 'modal-' + id;
            },

            getContainer: function(id) {
                return $('#' + this.getContainerId(id));
            },

            getLoadingImage: function() {
                var image = (typeof Drupal.settings.Sage.Ajax.loadingImage != 'undefined') ? Drupal.settings.Sage.Ajax.loadingImage : '';
                return (image) ? '<div class="text-center"><img class="loading-ajax" src="' + image + '" /></div>' : '';
            }

        }, Sage.Dom)

    };

}(jQuery));;
/**
 * @file
 *  Add character counter functionality.
 */
var Sage = Sage || {};

(function($) {

    Sage.characterCounter = {

        maxLength: 200,

        minLength: 0,

        $userInputElement: null,

        $messageElement: null,

        /**
         * Initialize the character counter.
         *
         * @param $userInputElement
         *  jQuery element we will use to count the user input.
         * @param $messageElement
         *  jQuery element we will use to display the remaining character count.
         * @param maxLength
         *  The max length of the field.
         * @param minLength
         *  The minimum length of the field.*
         */
        initialize: function($userInputElement, $messageElement, maxLength, minLength) {
            this.$userInputElement = $userInputElement;
            this.$messageElement = $messageElement;
            this.maxLength = typeof maxLength !== 'undefined' ? maxLength : this.maxLength;
            this.minLength = typeof minLength !== 'undefined' ? minLength : this.minLength;
            this.bindEvents();
        },

        /**
         * Bind the events.
         */
        bindEvents: function() {
            this.$userInputElement.once().bind('focus keyup', this.showRemainingCharacters);
        },

        /**
         * Show the remaining characters.
         */
        showRemainingCharacters: function() {
            var currentCount = this.value.length;
            var message = Sage.characterCounter.getMessage(currentCount);
            Sage.characterCounter.$messageElement.html(message);
        },

        /**
         * Get the message to display.
         *
         * @param currentCount
         *  Current length of the input's value.
         *
         * @returns string
         *  Translatable string of the message.
         */
        getMessage: function(currentCount) {
            if (this.minLength && currentCount < this.minLength) {
                return Drupal.t('Minimum @length characters. @total characters used.', {
                    '@length': this.minLength,
                    '@total': currentCount
                });
            }
            if (this.maxLength && currentCount > this.maxLength) {
                return Drupal.t('Max @length characters. @total characters used.', {
                    '@length': this.maxLength,
                    '@total': currentCount
                });
            }
            if (this.maxLength && currentCount < this.maxLength) {
                return Drupal.t('@remaining characters of @length left.', {
                    '@remaining': this.maxLength - currentCount,
                    '@length': this.maxLength
                });
            }
            return '';
        }
    };

})(jQuery);;
/**
 * @file
 *  Add referrer related behaviours.
 */
var Sage = Sage || {};

(function($) {

    $(document).ready(function() {
        Sage.CookiePolicy.initialize();
    });

    Sage.CookiePolicy = {

        REGION_EUROPE: 'eur',

        initialize: function() {
            if (this.getRegion() == this.REGION_EUROPE) {
                this.bindEvents();
                this.launch();
            }
        },

        bindEvents: function() {
            $(document).on('click', 'a.cc-cookie-decline', function(e) {
                e.preventDefault();
                window.location.href = '//google.com';
            });
        },

        launch: function() {
            if (typeof $.cookieCuttr != 'undefined') {
                $.cookieCuttr({
                    cookieAnalytics: false,
                    cookieMessage: Drupal.t('To enhance your experience on our site, SAGE stores cookies on your computer. By continuing you consent to receive cookies. <a target="_blank" href="{{cookiePolicyLink}}" title="Learn more">Learn more</a>.'),
                    cookieAcceptButtonText: Drupal.t('Close'),
                    cookiePolicyLink: '/cookie-policy',
                    cookieAcceptButton: true,
                    cookieDeclineButton: false,
                    cookieNotificationLocationBottom: true,
                    cookieDomain: Sage.path.getUrlHostname()
                });
            }
        },

        getRegion: function() {
            return (typeof Drupal.settings.Sage.Location.region != 'undefined') ? Drupal.settings.Sage.Location.region : null;
        }
    };

}(jQuery));;
/**
 * @file
 *  Add event related behaviours.
 */
var Sage = Sage || {};

(function($) {

    Sage.events = {

        trigger: function(eventType, extraParameters) {
            $(document).triggerHandler(eventType, extraParameters);
        },

        bind: function(eventType, eventData) {
            $(document).bind(eventType, eventData);
        },

        unbind: function(eventType) {
            $(document).unbind(eventType);
        }
    };

    /**
     * Binds an event in the first position.
     *
     * [name] is the name of the event "click", "mouseover", same as you'd pass it to bind()
     * [fn] is the handler function
     *
     * @version jQuery 1.8
     */
    $.fn.bindFirst = function(name, fn) {
        // bind as you normally would don't want to miss out on any jQuery magic
        this.on(name, fn);

        // Thanks to a comment by @Martin, adding support for namespaced events too.
        this.each(function() {
            var handlers = $._data(this, 'events')[name.split('.')[0]];
            // take out the handler we just inserted from the end
            var handler = handlers.pop();
            // move it at the beginning
            handlers.splice(0, 0, handler);
        });
    };

})(jQuery);;
/**
 * @file
 *  Add expand by functionality.
 */
var Sage = Sage || {};

(function($) {

    Sage.expandByLine = {

        ELEMENT_IS_CONTRACTED_CLASS: 'has-hidden-content',

        $element: null,

        originalHeight: null,

        /**
         * Initialize the item expander.
         *
         * This will get the elements original height, add the is contracted class to
         * the element and check the height again. If the element is smaller than
         * the original, we know it is has some hidden contents so we insert the more
         * less button that can toggle the class to show / hide the expanded content.
         *
         * @param $element
         *  jQuery element we will use trim and expand.
         */
        initialize: function($element) {
            this.$element = $element;
            this.originalHeight = this.$element.height();
            this.hideAdditionalContent();
        },

        /**
         * Apply the element hidden class and if the height changes add the more / less
         * button.
         */
        hideAdditionalContent: function() {
            // If the height has changed we have hidden some content by applying this
            // class.
            this.$element.addClass(this.ELEMENT_IS_CONTRACTED_CLASS);
            if (this.elementHeightIsUnchanged()) {
                return;
            }
            this.insertToggleMoreLessLink();
        },

        /**
         * Check if the element height has changed from when this was initialized.
         *
         * @returns {boolean}
         */
        elementHeightIsUnchanged: function() {
            return this.$element.height() == this.originalHeight;
        },

        /**
         * Insert the expand toggle link.
         */
        insertToggleMoreLessLink: function() {
            this.$element.after(this.getToggleMoreLessLink());
        },

        getToggleMoreLessLink: function() {
            var readMoreText = '+ ' + Drupal.t('Read more');
            var readLessText = '- ' + Drupal.t('Read less');
            var $toggleLink = $('<a></a>').text(readMoreText);
            // Attach behaviour.
            $toggleLink.on('click', $.proxy(function() {
                this.$element.toggleClass(this.ELEMENT_IS_CONTRACTED_CLASS);
                $toggleLink.text($toggleLink.text() == readMoreText ? readLessText : readMoreText);
            }, this));

            return $toggleLink;
        }
    };
})(jQuery);;
/**
 * @file
 *  Form validation handlers.
 */
var Sage = Sage || {};
Sage.Form = Sage.Form || {};

(function($) {

    Drupal.behaviors.FormMessages = {
        attach: function(context, settings) {
            Sage.Form.Message.initialize(context);
        }
    };

    Sage.Form.Message = $.extend({}, {

        PARAM_INFO: 'i',
        PARAM_ERROR: 'e',
        PARAM_WARNING: 'w',

        initialize: function(context) {
            this.process(context);
            this.info();
            this.warning();
            this.error();
            this.bindHide();
        },

        process: function(context) {
            $('[data-messages]', context).each($.proxy(function(idx, item) {
                var number = this.getNumber($(item));
                (number) ? $(item).removeClass('element-invisible'): $(item).addClass('element-invisible');
            }, this));
        },

        info: function() {
            var info = Sage.path.getParameter(this.PARAM_INFO);
            if (info) {
                this.addInfoMessage(this.getMessage(info));
            }
        },

        error: function() {
            var error = Sage.path.getParameter(this.PARAM_ERROR);
            if (error) {
                this.addErrorMessage(this.getMessage(error));
            }
        },

        warning: function() {
            var warning = Sage.path.getParameter(this.PARAM_WARNING);
            if (warning) {
                this.addWarningMessage(this.getMessage(warning));
            }
        },

        addInfoMessage: function(message) {
            this.addMessage($('div.status'), message);
        },

        addWarningMessage: function(message) {
            this.addMessage($('div.warning'), message);
        },

        addErrorMessage: function(message) {
            this.addMessage($('div.error'), message);
        },

        addMessage: function(container, message) {
            this.appendMessage($('.message-container', container), message);
            this.increment(container);
            this.process();
        },

        appendMessage: function(container, message) {
            var ul = container.children('ul');
            if (ul.length > 0) {
                return $(ul).append(this.generateLI(message));
            }
            var text = container.text().trim();
            if (text) {
                container.empty();
                container.append(this.generateUL(text));
                return this.appendMessage(container, message);
            }
            container.append(message);
        },

        generateUL: function(message) {
            var li = this.generateLI(message);
            return $('<ul></ul>').append(li);
        },

        generateLI: function(message) {
            return $('<li></li>').html(message);
        },

        getNumber: function(container) {
            return parseInt(container.attr('data-messages'));
        },

        getMessage: function(code) {
            return (typeof Drupal.settings.Sage.Form.Messages[code] != 'undefined') ? Drupal.settings.Sage.Form.Messages[code] : Drupal.t(code);
        },

        increment: function(container) {
            var number = this.getNumber(container) + 1;
            container.attr('data-messages', number);
            var parent = container.parent('[data-messages]');
            var number = this.getNumber(parent) + 1;
            parent.attr('data-messages', number);
        },

        bindHide: function() {
            $("[data-hide]").on("click", function() {
                var alert = $(this).closest("." + $(this).attr("data-hide"));
                alert.addClass('element-invisible')
                    .find('.message-container')
                    .empty();
            });
        }

    }, Sage.Dom);

}(jQuery));;
/**
 * @file
 *  Allow internal paths to be opened in an modal.
 *
 *  Inserts a single ajax modal wrapper into the DOM. This modal can be updated
 *  with a ajax content by adding the attribute "data-modal-ajax-path" to an element.
 */
Sage = Sage || {};
Drupal.behaviors = Drupal.behaviors || {};

(function($) {

    Sage.AjaxModal = $.extend({}, {

        modalId: '',

        // HTML ID to use for the iframe modal.
        MODAL_IDENTIFIER: 'generic-ajax',

        show: function() {
            this.showModal(this.getModal());
        },

        hide: function() {
            this.hideModal(this.getModal());
        },

        showModal: function(modal) {
            modal.on('hidden.bs.modal', function(e) {
                $(this).find('form').remove();
                $(this).find('.modal-title').empty();
            });
            modal.modal({
                backdrop: 'static'
            });
        },

        hideModal: function(modal) {
            modal.find('.modal-body').empty().append(this.getLoadingImage());
            modal.modal('hide');
        },

        showContent: function(path) {
            var $ajaxModal = this.getModal();
            $ajaxModal.find('.modal-body').load(path, $.proxy(function() {
                this.showModal($ajaxModal);
            }, this));
        },

        getModal: function() {
            return this.getContainer(this.getModalId() || this.MODAL_IDENTIFIER);
        },

        getModalId: function() {
            // Only one modal at same time.
            return Sage.AjaxModal.modalId;
        },

        setModalId: function(id) {
            Sage.AjaxModal.modalId = id;
        },

        loadForm: function(path, id, callback, title) {
            this.hide();
            this.setModalId(id);
            var modal = Sage.Bootstrap.Modal.addContainer(this.getModalId());
            var that = this;
            modal.unbind('show.bs.modal').on('show.bs.modal', function() {
                $.getJSON(path, function(response, status) {
                    var drupalAjax = new Drupal.ajax(that.getModalId(), this, {
                        url: path
                    });
                    drupalAjax.success(response, status);
                    that.updateModalTitle(title);
                    if (callback) {
                        callback.call(that, modal);
                    }
                    Sage.events.trigger('modal:show:' + that.getModalId());
                });
            });
            this.show();
        },

        updateModalTitle: function(title) {
            if (title) {
                this.getModal().find('.modal-title').text(title);
            }
        }

    }, Sage.Bootstrap.Modal);

    Drupal.behaviors.ajaxModal = {
        attach: function(context, settings) {
            // Trigger the modal for any element with data-modal-src set.
            $('[data-modal-ajax-path]', context).click(function(event) {
                event.preventDefault();
                var path = $(this).attr('data-modal-ajax-path');
                Sage.AjaxModal.showContent(path);
            });
        }
    };
}(jQuery));;
/**
 * @file
 *  Allow external URLs to be opened in an modal.
 *
 *  Inserts a single external modal wrapper into the DOM. This modal can be updated
 *  with a new source by adding the attribute "data-modal-src" to an element.
 */
Sage = Sage || {};
Drupal.behaviors = Drupal.behaviors || {};

(function($) {
    Sage.ExternalModal = {

        // HTML ID to use for the iframe modal.
        MODAL_IDENTIFIER: 'external',

        // Modal content.
        MODAL_CONTENT: '<iframe class="modal-external-iframe"></iframe>',

        show: function(source) {
            $('#modal-' + this.MODAL_IDENTIFIER + ' iframe').attr('src', source);
            Sage.Bootstrap.Modal.getContainer(this.MODAL_IDENTIFIER).modal('show')
        }
    };

    Drupal.behaviors.externalModal = {
        attach: function(context, settings) {
            // Trigger the modal for any element with data-modal-src set.
            $('[data-modal-src]', context).click(function(event) {
                event.preventDefault();
                var source = $(this).attr('data-modal-src');
                Sage.ExternalModal.show(source);
            });
        }
    };
}(jQuery));;
/**
 * @file
 *  Add path related behaviours.
 */
var Sage = Sage || {};

(function($) {

    Sage.path = {

        initialized: false,

        uri: document.location.href,

        urlProtocol: '',
        urlHostname: '',
        urlPath: '',
        urlSearch: '',
        urlQueryParam: new Array(),
        urlFragment: '',

        initializeIfNecessary: function() {
            if (!this.initialized) {
                this.parseURI();
                this.initialized = true;
            }
        },

        getURI: function() {
            return this.uri;
        },

        setURI: function(uri) {
            this.uri = uri;
        },

        getUrlProtocol: function() {
            this.initializeIfNecessary();
            return this.urlProtocol;
        },

        setUrlProtocol: function(val) {
            this.urlProtocol = val;
        },

        getUrlHostname: function() {
            this.initializeIfNecessary();
            return this.urlHostname;
        },

        getUrlBaseHostname: function() {
            if (!this.isIPAddress(this.getUrlHostname())) {
                var components = this.getUrlHostname().split('.');
                return components.slice(-2).join('.');
            }
            return this.getUrlHostname();
        },

        setUrlHostname: function(val) {
            this.urlHostname = val;
        },

        getUrlPath: function() {
            this.initializeIfNecessary();
            return this.urlPath;
        },

        setUrlPath: function(val) {
            this.urlPath = val;
        },

        getUrlSearch: function() {
            this.initializeIfNecessary();
            return this.urlSearch;
        },

        setUrlSearch: function(val) {
            this.urlSearch = val;
        },

        getUrlFragment: function() {
            this.initializeIfNecessary();
            return this.urlFragment;
        },

        setUrlFragment: function(val) {
            this.urlFragment = val;
        },

        //Parameters
        parseURI: function() {
            var urlElement = document.createElement('a');
            urlElement.href = this.getURI();

            this.setUrlProtocol(urlElement.protocol);
            this.setUrlHostname(urlElement.hostname);
            this.setUrlPath(urlElement.pathname);
            this.setUrlSearch(urlElement.search);
            this.setUrlFragment(urlElement.hash);

            //parse url, set parameters
            if (this.getUrlSearch) {
                var query = this.urlSearch.substring(1);
                var query_items = query.split('&');
                for (i = 0; i < query_items.length; i++) {
                    var s = query_items[i].split('=');
                    this.urlQueryParam[s[0]] = s[1];
                }
            }
        },

        isURIPresent: function() {
            return (this.getURI()) ? true : false;
        },

        isParameterPresent: function(paramName) {
            return (this.getParameter(paramName));
        },

        isIPAddress: function(string) {
            return (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(string));
        },

        getParameter: function(paramName) {
            this.initializeIfNecessary();
            return this.urlQueryParam[paramName];
        },

        appendParameters: function(url, parameters) {
            var string = $.param(parameters);
            if (string) {
                return url + (url.indexOf('?') > 0 ? '&' : '?') + string;
            }
            return url;
        }
    }
}(jQuery));;
/**
 * @file
 *  Add referrer related behaviours.
 */
var Sage = Sage || {};

(function($) {

    Sage.referrer = $.extend({}, Sage.path, {
        uri: document.referrer
    });

}(jQuery));;
/**
 * @file
 *  Add typeahead related behaviours.
 */
var Sage = Sage || {};

(function($) {

    // Object to control the typeahead creation.
    Sage.typeahead = {

    }

    // Object to control the bloodhound creation.
    Sage.bloodhound = {

        initialize: function(url, element) {
            var that = $(element);
            var bloodhound = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('id'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: {
                    url: url,
                    replace: function(url, query) {
                        url = url.replace('!tid', that.attr('tid') || 0);
                        url = url.replace('!parent', that.attr('parent') || 0);
                        url = url.replace('!child', that.attr('child') || 0);
                        url = url.replace('%QUERY', encodeURIComponent(query));
                        return url;
                    }
                }
            });
            bloodhound.initialize();
            return bloodhound;
        }
    }

}(jQuery));;
/**
 * @file
 *  Addresses support.
 */
Sage.User = Sage.User || {};

(function($) {

    Drupal.behaviors.Addresses = {
        attach: function(context) {
            Sage.User.Addresses.bindEvents(context);
        }
    };

    // Addresses object.
    Sage.User.Addresses = $.extend({}, {

        FORM: 'address-form',

        CITY: 'locality',
        STATE: 'county',

        initialize: function() {
            this.bindEvents(document);
        },

        bindEvents: function(context) {
            this.bindAddAddressEvent(context);
            this.bindEditAddressEvent(context);
            this.bindDeleteAddressEvent(context);
            this.bindValidation(context);
        },

        bindAddAddressEvent: function(context) {
            $('#add-address', context).once().on('click', function(e) {
                Sage.User.Addresses.showAddAddress($(this));
                e.preventDefault();
            });
        },

        bindEditAddressEvent: function(context) {
            $('a[data-action="edit"][data-address]', context).once().on('click', function(e) {
                Sage.User.Addresses.showEditAddress($(this));
                e.preventDefault();
            });
        },

        bindDeleteAddressEvent: function(context) {
            $('a[data-action="delete"][data-address]', context).once().on('click', function(e) {
                Sage.User.Addresses.showDeleteAddress($(this).attr('data-address'));
                e.preventDefault();
            });
        },

        bindCancelAddressEvent: function(context) {
            $('#edit-cancel', context).once().on('click', function(e) {
                context.modal('hide');
                e.preventDefault();
            });
        },

        processModal: function() {
            this.bindCancelAddressEvent(this.getModal());
            this.bindHideModalEvent();
            this.bindValidation(this.getModal());
        },

        bindValidation: function(context) {
            $(context).delegate('a[locality]', 'click', function(e) {
                e.preventDefault();
                $('[name="' + Sage.User.Addresses.CITY + '"]').val($(this).attr('locality'));
            });
            $(context).delegate('a[state]', 'click', function(e) {
                e.preventDefault();
                $('[name="' + Sage.User.Addresses.STATE + '"]').val($(this).attr('state'));
            });
        },

        bindHideModalEvent: function() {
            var context = this.getModal();
            context.on('hide.bs.modal', $.proxy(function(e) {
                if ($('.alert', context).length > 0) {
                    window.location.reload();
                }
            }, window));
        },

        getAddAddressUrl: function(element) {
            var mode = $(element).attr('data-address-mode');
            var url = (typeof Drupal.settings.Sage.User.addAddressUrl != 'undefined') ? Drupal.settings.Sage.User.addAddressUrl : '';
            return (mode) ? Sage.path.appendParameters(url, {
                'mode': mode
            }) : url;
        },

        getEditAddressUrl: function(element) {
            var id = $(element).attr('data-address');
            var mode = $(element).attr('data-address-mode');
            var url = (typeof Drupal.settings.Sage.User.editAddressUrl != 'undefined') ? Drupal.settings.Sage.User.editAddressUrl : '';
            url = unescape(url).replace('%', id);
            return (mode) ? Sage.path.appendParameters(url, {
                'mode': mode
            }) : url;
        },

        getDeleteAddressUrl: function(id) {
            var url = (typeof Drupal.settings.Sage.User.deleteConfirmAddressUrl != 'undefined') ? Drupal.settings.Sage.User.deleteConfirmAddressUrl : '';
            return unescape(url).replace('%', id);
        },

        showAddAddress: function(element) {
            var path = this.getAddAddressUrl(element);
            this.loadForm(path, this.FORM, this.processModal, Drupal.t('Add address'));
        },

        showEditAddress: function(element) {
            var path = this.getEditAddressUrl(element);
            this.loadForm(path, this.FORM, this.processModal, Drupal.t('Edit address'));
        },

        showDeleteAddress: function(id) {
            var path = this.getDeleteAddressUrl(id);
            this.loadForm(path, this.FORM, null, Drupal.t('Delete address'));
        }

    }, Sage.AjaxModal);

})(jQuery);;
/**
 * @file
 *  Add areas of interest support.
 */
Sage.User = Sage.User || {};

(function($) {

    $(document).ready(function() {
        Sage.User.AreasOfInterest.initialize();
    });

    // Areas of interest object.
    Sage.User.AreasOfInterest = {

        EVENT_CHANGE: 'sage:areaofinterest:change',

        shown: false,
        // Class for expanded items
        CLASSES_EXPANDED: 'expanded action-link-minus',
        // Class for collapsed items
        CLASSES_COLLAPSED: 'collapsed action-link-plus',

        isShown: function() {
            return this.shown;
        },

        setShown: function() {
            this.getContent().show();
            this.shown = true;
        },

        initialize: function() {
            this.bindEvents();
            this.tableInitialize();
        },

        bindEvents: function() {
            this.bindExpandEvent();
            this.bindChangeAOI();
            this.bindChangeParent();
            this.bindRemoveEvent();
            this.bindFormSubmit();
        },

        bindExpandEvent: function() {
            $('div:accordionElement').on('click', function(e) {
                Sage.User.AreasOfInterest.toggleRow($(this), $(this).hasClass('expanded'));
            });
        },

        bindChangeAOI: function() {
            $('input:accordionElement').on('change', $.proxy(function(e) {
                var element = $(e.currentTarget);
                if (!element.is(':checked')) {
                    this.hideParent(element);
                } else if (this.areAllChildrenChecked(this.getParent(element))) {
                    this.showParent(element);
                } else {
                    this.onChange();
                }
            }, this));
        },

        bindChangeParent: function() {
            $('input:accordionElement[all]').on('change', $.proxy(function(e) {
                this.toggleChildren($(e.currentTarget));
            }, this));
        },

        toggleChildren: function(element) {
            (element.is(':checked')) ? this.showChildren(element): this.hideChildren(element);
        },

        getChildren: function(element) {
            var tid = $(element).attr('tid');
            return this.getContent().find('input[parent="' + tid + '"]');
        },

        getParent: function(element) {
            var parent = $(element).attr('parent');
            return this.getContent().find('input[tid="' + parent + '"]');
        },

        showChildren: function(element) {
            this.getChildren(element).prop('checked', true);
            this.onChange();
        },

        hideChildren: function(element) {
            this.getChildren(element).prop('checked', false);
            this.onChange();
        },

        showParent: function(element) {
            this.getParent(element).prop('checked', true);
            this.onChange();
        },

        hideParent: function(element) {
            this.getParent(element).prop('checked', false);
            this.onChange();
        },

        bindRemoveEvent: function() {
            this.getInfo().delegate('a[identifier]', 'click', function(e) {
                e.preventDefault();
                var identifier = $(e.currentTarget).attr('identifier');
                $('input:accordionElement[identifier="' + identifier + '"]').prop('checked', false);
                Sage.User.AreasOfInterest.toggleChildren($('input:accordionElement[identifier="' + identifier + '"]'));
                Sage.User.AreasOfInterest.onChange();
            });
        },

        bindFormSubmit: function() {
            this.getContent().closest('form').on('submit', $.proxy(function(e) {
                var element = $(e.currentTarget);
                element.find('input:accordionElement[all]:checked').each($.proxy(function(key, item) {
                    this.hideChildren($(item));
                }, this));
            }, this));
        },

        onChange: function() {
            Sage.events.trigger(Sage.User.AreasOfInterest.EVENT_CHANGE, {
                items: $('input:accordionElement')
            });
        },

        tableInitialize: function() {
            this.initializeExpand();
            this.initializeChecked();
        },

        initializeExpand: function() {
            // Collapse by default all the "root" terms.
            this.processRows($('div:accordionRoot'), true);
            $('div:accordionElement').each($.proxy(function(key, element) {
                if (this.areChildrenChecked($(element))) {
                    this.showRowChildren($(element));
                }
            }, this));
        },

        initializeChecked: function() {
            $('input:accordionElement[all]:checked').each($.proxy(function(key, element) {
                this.showChildren($(element));
            }, this));
        },

        // Processes a list of rows.
        processRows: function(rows, hide) {
            $(rows).each(function(e) {
                Sage.User.AreasOfInterest.toggleRow($(this), hide);
            });
        },

        // Process submenu rows.
        toggleRow: function(row, hide) {
            (hide) ? this.hideRowChildren(row): this.showRowChildren(row);
        },

        // Hide children.
        hideRowChildren: function(row) {
            this.getChildrenRows(row).hide();
            $(row).addClass(this.CLASSES_COLLAPSED).removeClass(this.CLASSES_EXPANDED);
        },

        // Show children.
        showRowChildren: function(row) {
            var nextDepth = parseInt(this.getRowDepth(row)) + 1;
            this.getChildrenRows(row).filter('[depth="' + nextDepth + '"]').show().filter(':expanded').each($.proxy(function(key, element) {
                this.showRowChildren($(element));
            }, this));
            $(row).addClass(this.CLASSES_EXPANDED).removeClass(this.CLASSES_COLLAPSED);
        },

        // Checks if any children is checked or not.
        areChildrenChecked: function(element) {
            return (this.getChildrenCheckbox(element).filter(':checked').length != 0);
        },

        areAllChildrenChecked: function(element) {
            var children = this.getChildren(element);
            var checked = children.filter(':checked');
            return (children.length == checked.length);
        },

        // Get the 'children' rows of a row.
        getChildrenRows: function(row) {
            var elements = $([]);
            var currentDepth = this.getRowDepth(row);
            while (row = row.next()) {
                var nextDepth = this.getRowDepth(row);
                if (nextDepth > currentDepth) {
                    row.attr('depth', nextDepth);
                    elements = elements.add(row);
                    continue;
                }
                break;
            }
            return elements;
        },

        getChildrenCheckbox: function(row) {
            return this.getChildrenRows(row).find('input');
        },

        // Gets the row menu depth based on the attribute.
        getRowDepth: function(row) {
            return $(row).attr('depth') || $('input:accordionElement', row).attr('depth');
        },

        getRowExpanded: function(row) {
            return $('div:accordionElement', row).hasClass('expanded');
        },

        getLink: function() {
            return $('#edit-areas-interest');
        },

        getInfo: function() {
            return $('#edit-areas-interest-info');
        },

        getContent: function() {
            return $('#edit-areas-interest-content');
        }
    };

    $.expr[':'].accordionRoot = function(obj, index, meta, stack) {
        var depth = $(obj).attr('depth');
        return (depth == 0) ? true : false;
    };

    $.expr[':'].accordionElement = function(obj, index, meta, stack) {
        var depth = $(obj).attr('depth');
        return (typeof depth !== 'undefined');
    };

    $.expr[':'].expanded = function(obj, index, meta, stack) {
        return $(obj).hasClass('expanded');
    };

    $.expr[':'].collapsed = function(obj, index, meta, stack) {
        return $(obj).hasClass('collapsed');
    };

    $.expr[':'].parentChecked = function(obj, index, meta, stack) {
        return Sage.User.AreasOfInterest.getParent(obj).is(':checked');
    };

    $.expr[':'].parentUnchecked = function(obj, index, meta, stack) {
        return !Sage.User.AreasOfInterest.getParent(obj).is(':checked');
    };

})(jQuery);;
/**
 * @file
 *  Add contact preferences form support.
 */
Sage.User = Sage.User || {};
Drupal.behaviors = Drupal.behaviors || {};

(function($) {
    Drupal.behaviors.contactPreferencesForm = {
        attach: function(context, settings) {
            $('#sage-user-contact-preferences-form', context).once('attach-contact-details', function() {
                Sage.User.ContactPreferencesForm.initialize(context);
            });
        }
    };

    // Personal details form object.
    Sage.User.ContactPreferencesForm = {

        initialize: function(context) {
            this.disableFormSubmission();
            this.bindEvents(context);
        },

        bindEvents: function(context) {
            this.bindEditContactPreferences(context);
        },

        bindEditContactPreferences: function(context) {
            $('input', $('#sage-user-contact-preferences-form')).change(function() {
                Sage.User.ContactPreferencesForm.enableFormSubmission(context);
            });
        },

        disableFormSubmission: function(context) {
            $('#sage-user-contact-preferences-form input[type="submit"]', context).prop('disabled', true).addClass('is-disabled');
        },

        enableFormSubmission: function(context) {
            $('#sage-user-contact-preferences-form input[type="submit"]', context).prop('disabled', false).removeClass('is-disabled');
        }
    };
})(jQuery);;
/**
 * @file
 *  Courses support.
 */
Sage.User = Sage.User || {};

(function($) {

    Drupal.behaviors.Courses = {
        attach: function(context) {
            Sage.User.Courses.initialize(context);
        }
    };

    // Courses object.
    Sage.User.Courses = $.extend({}, {

        FORM: 'course-form',

        INSTITUTION: 'institution',

        initialize: function(context) {
            this.bindEvents(context);
        },

        bindEvents: function(context) {
            this.bindAddCourseEvent(context);
            this.bindEditCourseEvent(context);
            this.bindDeleteCourseEvent(context);
            this.bindFormEvents(context);
        },

        bindAddCourseEvent: function(context) {
            $('#add-course', context).once().on('click', function(e) {
                Sage.User.Courses.showAddCourse();
                e.preventDefault();
            });
        },

        bindEditCourseEvent: function(context) {
            $('a[data-action="edit"][data-course]', context).click(function(e) {
                Sage.User.Courses.showEditCourse($(this).attr('data-course'));
                e.preventDefault();
            });
        },

        bindDeleteCourseEvent: function(context) {
            $('a[data-action="delete"][data-course]', context).once().on('click', function(e) {
                Sage.User.Courses.showDeleteCourse($(this).attr('data-course'));
                e.preventDefault();
            });
        },

        bindFormEvents: function() {
            this.bindFormCancelEvent();
            this.bindModalEvents();
        },

        bindFormCancelEvent: function() {
            var modal = this.getModal();
            $('input[action="cancel"]', modal).once().on('click', function(e) {
                e.preventDefault();
                modal.modal('hide');
                return false;
            });
        },

        bindModalEvents: function() {
            this.getModal().once().on('hide.bs.modal', $.proxy(function(e) {
                if ($('.alert', Sage.User.Courses.getModal()).length > 0) {
                    window.location.reload();
                }
            }, window));
        },

        getAddCourseUrl: function() {
            return (typeof Drupal.settings.Sage.User.addCourseUrl != 'undefined') ? Drupal.settings.Sage.User.addCourseUrl : '';
        },

        getEditCourseUrl: function(id) {
            var url = (typeof Drupal.settings.Sage.User.editCourseUrl != 'undefined') ? Drupal.settings.Sage.User.editCourseUrl : '';
            return unescape(url).replace('%', id);
        },

        getDeleteCourseUrl: function(id) {
            var url = (typeof Drupal.settings.Sage.User.deleteConfirmCourseUrl != 'undefined') ? Drupal.settings.Sage.User.deleteConfirmCourseUrl : '';
            return unescape(url).replace('%', id);
        },

        showAddCourse: function() {
            var path = this.getAddCourseUrl();
            this.loadForm(path, this.FORM, this.bindFormEvents, Drupal.t('Add course'));
        },

        showEditCourse: function(id) {
            var path = this.getEditCourseUrl(id);
            this.loadForm(path, this.FORM, this.bindFormEvents, Drupal.t('Edit course'));
        },

        showDeleteCourse: function(id) {
            var path = this.getDeleteCourseUrl(id);
            this.loadForm(path, this.FORM, null, Drupal.t('Delete course'));
        },

        getCourseSubjectCallback: function() {
            var url = (typeof Drupal.settings.Sage.User.getCourseSubjectUrl != 'undefined') ? Drupal.settings.Sage.User.getCourseSubjectUrl : '';
            return unescape(url).replace(/%/, '%tid').replace(/$/, '/%QUERY');
        }

    }, Sage.AjaxModal);

})(jQuery);;
/**
 * @file
 *  User information support.
 */
Sage.User = Sage.User || {};

(function($) {

    // User information object.
    Sage.User.Info = {

        // status of the user.
        loggedIn: false,

        // information about the user.
        name: '',
        surname: '',

        initialize: function(status, data) {
            this.loggedIn = (status);
            this.name = this.getParameter(data, 'name');
            this.surname = this.getParameter(data, 'surname');
        },

        getParameter: function(data, name) {
            return (typeof data[name] != 'undefined') ? data[name] : '';
        },

        getName: function() {
            return this.name;
        },

        getSurname: function() {
            return this.surname;
        }
    }

})(jQuery);;
/**
 * @file
 *  Institutions support.
 */
Sage.User = Sage.User || {};

(function($) {

    Drupal.behaviors.Institutions = {
        attach: function(context) {
            Sage.User.Institutions.initialize(context);
        }
    };

    Drupal.ajax.prototype.commands.showAddInstitution = function(ajax, response, status) {
        Sage.User.Institutions.showAddInstitution();
    };

    // Institutions object.
    Sage.User.Institutions = $.extend({}, {

        genericDepartments: false,

        FORM: 'institution-form',

        SEARCH: 'search-institution',
        SEARCH_GO: 'search-institution-go',
        INSTITUTION_NAME: 'institution-name',
        INSTITUTION_SELECT: 'institution-name-select',
        INSTITUTION_ID: 'institutionId',
        DEPARTMENT_SELECT: 'department-name-select',
        DEPARTMENT_GENERIC: 'department-name',
        COUNTRY: 'country',
        CITY: 'locality',
        POSTCODE: 'post_code',
        STATE: 'state',
        PHONE_NUMBER: 'contact_number',
        ADDRESS: 'location',
        ADDRESS2: 'location1',
        ADDRESS3: 'location2',

        initialize: function(context) {
            this.processFields(context);
            this.bindEvents(context);
        },

        getParent: function(element) {
            return (element.closest('fieldset').length > 0) ? element.closest('fieldset') : element.closest('form');
        },

        getSearch: function(context) {
            return this.getElementByName(this.SEARCH, context);
        },

        getSearchGo: function(context) {
            return this.getElementById(this.SEARCH_GO, context);
        },

        getInstitutionSelect: function(context) {
            return this.getElementByName(this.INSTITUTION_SELECT, context);
        },

        getInstitutionInput: function(context) {
            return this.getElementByName(this.INSTITUTION_NAME, context);
        },

        getDepartmentSelect: function(context) {
            return this.getElementByName(this.DEPARTMENT_SELECT, context);
        },

        getDepartmentGenericInput: function(context) {
            return this.getElementByName(this.DEPARTMENT_GENERIC, context);
        },

        showGenericDepartments: function() {
            return this.genericDepartments;
        },

        setShowGenericDepartments: function(value) {
            this.genericDepartments = value;
        },

        getIdFromOption: function(option) {
            return $.trim($(option).attr('data-id')) || '';
        },

        getInstitutionIdFromOption: function(option) {
            return $.trim($(option).attr('data-institution')) || '';
        },

        getDepartmentIdFromOption: function(option) {
            return $.trim($(option).attr('data-department')) || '';
        },

        getCityFromOption: function(option) {
            return $.trim($(option).attr('data-city')) || '';
        },

        getStateFromOption: function(option) {
            return $.trim($(option).attr('data-state')) || '';
        },

        getLocationFromOption: function(option) {
            return $.trim($(option).attr('data-address')) || '';
        },

        getLocation1FromOption: function(option) {
            return $.trim($(option).attr('data-address2')) || '';
        },

        getLocation2FromOption: function(option) {
            return $.trim($(option).attr('data-address3')) || '';
        },

        getCountryFromOption: function(option) {
            return $.trim($(option).attr('data-country')) || '';
        },

        getPostCodeFromOption: function(option) {
            return $.trim($(option).attr('data-postcode')) || '';
        },

        getPhoneFromOption: function(option) {
            return $.trim($(option).attr('data-phone')) || '';
        },

        processFields: function(context) {
            this.processDeparmentVisibility(context);
        },

        processDeparmentVisibility: function(context) {
            var select = this.getDepartmentSelect(context);
            var input = this.getDepartmentGenericInput(context);
            if (this.showGenericDepartments()) {
                this.hideElement(select);
                this.showElement(input);
            } else {
                this.hideElement(input);
            }
        },

        bindEvents: function(context) {
            this.bindSearchEvents(context);
            this.bindAddInstitutionEvent(context);
            this.bindEditInstitutionEvent(context);
            this.bindDeleteInstitutionEvent(context);
            this.bindInstitutionDropdown(context);
            this.bindDepartmentDropdown(context);
        },

        bindSearchEvents: function(context) {
            this.getSearch(context).once().on('keyup', $.proxy(function(e) {
                var value = $(e.currentTarget).val();
                if (value.length >= 2) {
                    this.getSearchGo(context).removeClass('element-invisible');
                } else {
                    this.getSearchGo(context).addClass('element-invisible');
                }
            }, this));
            this.getSearchGo(context).once().on('click', $.proxy(function(e) {
                e.preventDefault();
                this.hideElement(this.getInstitutionSelect(context));
                this.hideElement(this.getDepartmentSelect(context));
                this.getSearch(context).trigger('custom:go');
            }, this));
        },

        bindInstitutionDropdown: function(context) {
            this.getInstitutionSelect(context).once().on('change', $.proxy(function(e) {
                var element = $(e.currentTarget);
                var option = $('option:selected', element);
                this.setInstitutionDetails(element, option);
            }, this));
        },

        bindDepartmentDropdown: function(context) {
            this.getDepartmentSelect(context).once().on('change', $.proxy(function(e) {
                var element = $(e.currentTarget);
                var option = $('option:selected', element);
                if (this.getIdFromOption(option) < 0) {
                    this.setShowGenericDepartments(true);
                    this.processFields(context);
                    return;
                }
                this.setDepartmentDetails(element, option);
            }, this));
        },

        bindAddInstitutionEvent: function(context) {
            $('#add-institution', context).once().on('click', $.proxy(function(e) {
                var element = $(e.currentTarget);
                this.showAddInstitution();
                e.preventDefault();
            }, this));
        },

        bindEditInstitutionEvent: function(context) {
            $('a[data-action="edit"][data-institution]', context).once().on('click', function(e) {
                Sage.User.Institutions.showEditInstitution($(this).attr('data-institution'));
                e.preventDefault();
            });
        },

        bindDeleteInstitutionEvent: function(context) {
            $('a[data-action="delete"][data-institution]', context).once().on('click', function(e) {
                Sage.User.Institutions.showDeleteInstitution($(this).attr('data-institution'));
                e.preventDefault();
            });
        },

        bindFormEvents: function() {
            this.bindSearchEvents();
            this.bindFormCancelEvent();
            this.bindModalEvents();
            this.bindValidation();
        },

        bindFormCancelEvent: function() {
            var modal = this.getModal();
            $('input[action="cancel"]', modal).once().on('click', function(e) {
                e.preventDefault();
                modal.modal('hide');
                return false;
            });
        },

        setInstitutionDetails: function(element, option) {
            this.setShowGenericDepartments(false);
            var parent = this.getParent(element);
            element.attr('institutionId', this.getInstitutionIdFromOption(option));
            this.getElementByName(this.INSTITUTION_NAME, parent).val(this.getInstitutionIdFromOption(option));
            this.getElementByAttr(this.DEPARTMENT_GENERIC, parent).attr('parent', this.getInstitutionIdFromOption(option)).closest('div.form-item').fadeIn();
            this.getElementByName(this.COUNTRY, parent).val(this.getCountryFromOption(option));
        },

        setDepartmentDetails: function(element, option) {
            element.attr('departmentId', this.getDepartmentIdFromOption(option));
            var parent = (element.closest('fieldset').length > 0) ? element.closest('fieldset') : element.closest('form');
            if (department = this.getDepartmentIdFromOption(option)) {
                this.getElementByName(this.DEPARTMENT_GENERIC, parent).val();
            }
            this.getElementByName(this.CITY, parent).setValueIfNotEmpty(this.getCityFromOption(option));
            this.getElementByName(this.PHONE_NUMBER, parent).setValueIfNotEmpty(this.getPhoneFromOption(option));
            this.getElementByName(this.STATE, parent).setValueIfNotEmpty(this.getStateFromOption(option));
            this.getElementByName(this.ADDRESS, parent).setValueIfNotEmpty(this.getLocationFromOption(option));
            this.getElementByName(this.ADDRESS2, parent).setValueIfNotEmpty(this.getLocation1FromOption(option));
            this.getElementByName(this.ADDRESS3, parent).setValueIfNotEmpty(this.getLocation2FromOption(option));
            this.getElementByName(this.POSTCODE, parent).setValueIfNotEmpty(this.getPostCodeFromOption(option));
        },

        bindModalEvents: function() {
            this.getModal().on('hide.bs.modal', $.proxy(function(e) {
                if ($('.alert', Sage.User.Institutions.getModal()).length > 0) {
                    window.location.reload();
                }
            }, window));
        },

        bindValidation: function() {
            var modal = this.getModal();
            $(modal).delegate('a[locality]', 'click', function(e) {
                e.preventDefault();
                $('[name="' + Sage.User.Institutions.CITY + '"]').val($(this).attr('locality'));
            });
            $(modal).delegate('a[state]', 'click', function(e) {
                e.preventDefault();
                $('[name="' + Sage.User.Institutions.STATE + '"]').val($(this).attr('state'));
            });
        },

        getAddInstitutionUrl: function() {
            return (typeof Drupal.settings.Sage.User.addInstitutionUrl != 'undefined') ? Drupal.settings.Sage.User.addInstitutionUrl : '';
        },

        getEditInstitutionUrl: function(id) {
            var url = (typeof Drupal.settings.Sage.User.editInstitutionUrl != 'undefined') ? Drupal.settings.Sage.User.editInstitutionUrl : '';
            return unescape(url).replace('%', id);
        },

        getDeleteInstitutionUrl: function(id) {
            var url = (typeof Drupal.settings.Sage.User.deleteConfirmInstitutionUrl != 'undefined') ? Drupal.settings.Sage.User.deleteConfirmInstitutionUrl : '';
            return unescape(url).replace('%', id);
        },

        showAddInstitution: function() {
            var path = this.getAddInstitutionUrl();
            this.loadForm(path, this.FORM, this.bindFormEvents, Drupal.t('Add institution'));
        },

        showEditInstitution: function(id) {
            var path = this.getEditInstitutionUrl(id);
            this.loadForm(path, this.FORM, this.bindFormEvents, Drupal.t('Edit institution'));
        },

        showDeleteInstitution: function(id) {
            var path = this.getDeleteInstitutionUrl(id);
            this.loadForm(path, this.FORM, null, Drupal.t('Delete institution'));
        }
    }, Sage.AjaxModal);

})(jQuery);;
/**
 * @file
 *  Add personal details form support.
 */
Sage.User = Sage.User || {};
Drupal.behaviors = Drupal.behaviors || {};

(function($) {
    Drupal.behaviors.personalDetailsForm = {
        attach: function(context, settings) {
            $('#sage-user-personal-details-form', context).once('attach-personal-details', function() {
                Sage.User.PersonalDetailsForm.initialize(context);
            });
        }
    };

    // Personal details form object.
    Sage.User.PersonalDetailsForm = {

        initialize: function(context) {
            this.hideEditPersonalDetails();
            this.bindEvents(context);
        },

        bindEvents: function(context) {
            this.bindEditPersonalDetailsEvent(context);
        },

        bindEditPersonalDetailsEvent: function(context) {
            // Show the form and enable submission when clicking the edit button.
            $('#edit-personal-details-button', context).click(function() {
                $(this).hide();
                Sage.User.PersonalDetailsForm.hidePersonalDetailsSummary(context);
                Sage.User.PersonalDetailsForm.showEditPersonalDetails(context);
            });
        },

        hideEditPersonalDetails: function(context) {
            $('#sage-user-personal-details-form', context).hide();
        },

        showEditPersonalDetails: function(context) {
            $('#sage-user-personal-details-form', context).show();
        },

        hidePersonalDetailsSummary: function(context) {
            $('#personal-details-summary', context).hide();
        }
    };
})(jQuery);;
/**
 * @file
 *  Add registration form support.
 */
Sage.User = Sage.User || {};

(function($) {

    Drupal.behaviors.RegistrationForm = {
        attach: function(context) {
            Sage.User.RegistrationForm.initialize(context);
        }
    };

    // Areas of interest object.
    Sage.User.RegistrationForm = $.extend({}, {

        ROLE0: 'role0',
        ROLE1: 'role1',

        initialize: function(context) {
            this.bindEvents(context);
            this.bindHandlers();
            this.updateAreasOfInterestField(null, {
                items: $('input:accordionElement')
            });
        },

        bindEvents: function(context) {
            this.bindKeepInTouchEvents(context);
        },

        bindKeepInTouchEvents: function(context) {
            var country = $('select[name="country"], select[name$="[country]"]', context);
            country.on('change', $.proxy(function(e) {
                var element = $(e.currentTarget);
                this.updateKeepInTouch(element.val(), context);
            }, this));
            this.updateKeepInTouch(country.val(), context);
        },

        updateKeepInTouch: function(value, context) {
            if (/register/.test(window.location.href)) {
                var url = Drupal.settings.basePath + 'ajax/get-default-opt-in-by-country/' + value;
                if (value) {
                    $.get(url, function(data) {
                        if (data['optIn'] == 1) {
                            $("#edit-keep-in-touch-1").prop("checked", true);
                        } else {
                            $("#edit-keep-in-touch-0").prop("checked", false);
                            $("#edit-keep-in-touch-1").prop("checked", false);
                        }
                    });
                }
            }
        },

        bindHandlers: function() {
            Sage.events.bind(Sage.User.AreasOfInterest.EVENT_CHANGE, $.proxy(this.updateAreasOfInterestField, this));
        },

        getAreasOfInterestListLimit: function() {
            return (typeof Drupal.settings.Sage.User.limitAOI != 'undefined') ? Drupal.settings.Sage.User.limitAOI : 8;
        },

        updateAreasOfInterestField: function(e, data) {
            var info = Sage.User.AreasOfInterest.getInfo();
            info.empty();
            var expand = Drupal.theme('Expand', this.getAreasOfInterestListLimit());
            info.append(Drupal.theme('pillBoxes', data.items.filter(":checked:parentUnchecked"), expand));
            Sage.Content.ExpandList.addBehaviour(info);
        }
    }, Sage.Dom)

})(jQuery);;
/**
 * @file
 *  Schools support.
 */
Sage.User = Sage.User || {};

(function($) {

    Drupal.behaviors.Schools = {
        attach: function(context) {
            Sage.User.Schools.initialize(context);
        }
    };

    // Schools object.
    Sage.User.Schools = $.extend({}, {

        newSchool: false,

        FORM: 'school-form',
        FORM_DISTRICT: 'district-form',

        SEARCH: 'search-school',
        SEARCH_GO: 'search-school-go',
        SCHOOL_NAME: 'school-name',
        SCHOOL_SELECT: 'school-name-select',
        SCHOOL_ID: 'schoolId',
        SCHOOL_CUSTOM: 'schoolCustom',
        COUNTRY: 'country',
        CITY: 'locality',
        POSTCODE: 'post_code',
        STATE: 'state',
        ADDRESS: 'location',

        initialize: function(context) {
            this.processFields(context);
            this.bindEvents(context);
        },

        getParent: function(element) {
            return (element.closest('fieldset').length > 0) ? element.closest('fieldset') : element.closest('form');
        },

        getSearch: function(context) {
            return this.getElementByName(this.SEARCH, context);
        },

        getSearchGo: function(context) {
            return this.getElementById(this.SEARCH_GO, context);
        },

        getSchoolSelect: function(context) {
            return this.getElementByName(this.SCHOOL_SELECT, context);
        },

        getSchoolInput: function(context) {
            return this.getElementByName(this.SCHOOL_NAME, context);
        },

        getSchoolCustom: function(context) {
            return this.getElementByName(this.SCHOOL_CUSTOM, context);
        },

        isNewSchool: function() {
            return this.newSchool;
        },

        isSchoolCustom: function(element) {
            var parent = this.getParent(element);
            return this.getSchoolCustom(parent).val() == 1;
        },

        setSchoolCustom: function(element) {
            var parent = this.getParent(element);
            this.getSchoolCustom(parent).val(1);
            this.getSchoolSelect(parent).attr('data-required-validation', 0);
            this.getSchoolInput(parent).attr('data-required-validation', 1);
            if (typeof Sage.Form.Validation != "undefined") {
                Sage.Form.Validation.showSuccess(this.getSchoolSelect(parent));
            }
        },

        setSchoolNotCustom: function(context) {
            this.getSchoolCustom(context).val(0);
            this.getSchoolSelect(context).attr('data-required-validation', 1);
            this.getSchoolInput(context).attr('data-required-validation', 0);
            if (typeof Sage.Form.Validation != "undefined") {
                Sage.Form.Validation.showSuccess(this.getSchoolInput(context));
            }
        },

        getIdFromOption: function(option) {
            return $.trim($(option).attr('data-id')) || '';
        },

        getSchoolIdFromOption: function(option) {
            return $.trim($(option).attr('data-id')) || '';
        },

        getSchoolNameFromOption: function(option) {
            return $.trim($(option).text()) || '';
        },

        getCityFromOption: function(option) {
            return $.trim($(option).attr('data-city')) || '';
        },

        getStateFromOption: function(option) {
            return $.trim($(option).attr('data-state')) || '';
        },

        getLocationFromOption: function(option) {
            return $.trim($(option).attr('data-address')) || '';
        },

        getCountryFromOption: function(option) {
            return $.trim($(option).attr('data-country')) || '';
        },

        getPostCodeFromOption: function(option) {
            return $.trim($(option).attr('data-postcode')) || '';
        },

        processFields: function(context) {
            this.processSchoolVisibility(context);
        },

        processSchoolVisibility: function(context) {
            var select = this.getSchoolSelect(context);
            var input = this.getSchoolInput(context);
            if (!this.isSchoolForced() && (this.isSchoolCustom($(context)) || this.isNewSchool())) {
                this.hideElement(select);
                this.showElement(input);
                this.setSchoolCustom(select);
            } else {
                this.setSchoolNotCustom(context);
                this.hideElement(input);
            }
        },

        bindEvents: function(context) {
            this.bindChangeCountryEvent(context);
            this.bindSearchEvents(context);
            this.bindSchoolDropdown(context);
        },

        bindChangeCountryEvent: function(context) {
            this.getElementByName(this.COUNTRY, context).on('change', $.proxy(function(e) {
                this.setSchoolNotCustom(document);
            }, this));
        },

        bindSearchEvents: function(context) {
            this.getSearch(context).once().on('keyup', $.proxy(function(e) {
                var value = $(e.currentTarget).val();
                if (value.length >= 2) {
                    this.getSearchGo(context).removeClass('element-invisible');
                } else {
                    this.getSearchGo(context).addClass('element-invisible');
                }
            }, this));
            this.getSearchGo(context).once().on('click', $.proxy(function(e) {
                e.preventDefault();
                this.setSchoolNotCustom(context);
                this.hideElement(this.getSchoolSelect(context));
                this.getSearch(context).trigger('custom:go');
            }, this));
        },

        bindSchoolDropdown: function(context) {
            this.getSchoolSelect(context).once().on('change', $.proxy(function(e) {
                var element = $(e.currentTarget);
                var option = $('option:selected', element);
                if (this.getIdFromOption(option) < 0) {
                    this.setSchoolCustom(element);
                    this.processFields(context);
                    return;
                }
                this.setSchoolDetails(element, option);
            }, this));
        },

        bindFormEvents: function() {
            this.bindSearchEvents();
            this.bindFormCancelEvent();
            this.bindModalEvents();
            this.bindValidation();
        },

        bindFormCancelEvent: function() {
            var modal = this.getModal();
            $('input[action="cancel"]', modal).once().on('click', function(e) {
                e.preventDefault();
                modal.modal('hide');
                return false;
            });
        },

        setSchoolDetails: function(element, option) {
            var parent = this.getParent(element);
            element.attr('schoolId', this.getSchoolIdFromOption(option));
            this.getElementByName(this.SCHOOL_NAME, parent).val(this.getSchoolNameFromOption(option));
            this.getElementByName(this.COUNTRY, parent).val(this.getCountryFromOption(option));
            this.getElementByName(this.CITY, parent).setValueIfNotEmpty(this.getCityFromOption(option));
            this.getElementByName(this.STATE, parent).setValueIfNotEmpty(this.getStateFromOption(option));
            this.getElementByName(this.ADDRESS, parent).setValueIfNotEmpty(this.getLocationFromOption(option));
            this.getElementByName(this.POSTCODE, parent).setValueIfNotEmpty(this.getPostCodeFromOption(option));
        },

        bindModalEvents: function() {
            this.getModal().on('hide.bs.modal', $.proxy(function(e) {
                if ($('.alert', Sage.User.Schools.getModal()).length > 0) {
                    window.location.reload();
                }
            }, window));
        },

        bindValidation: function() {
            var modal = this.getModal();
            $(modal).delegate('a[locality]', 'click', function(e) {
                e.preventDefault();
                $('[name="' + Sage.User.Schools.CITY + '"]').val($(this).attr('locality'));
            });
            $(modal).delegate('a[state]', 'click', function(e) {
                e.preventDefault();
                $('[name="' + Sage.User.Schools.STATE + '"]').val($(this).attr('state'));
            });
        },

        isSchoolForced: function() {
            return (typeof Drupal.settings.Sage.School != 'undefined') ? Drupal.settings.Sage.School.forceSchoolSelect : '';
        }
    }, Sage.AjaxModal);

})(jQuery);;
/**
 * @file
 *  Reviews support.
 */
Sage.User = Sage.User || {};

(function($) {

    $(document).ready(function() {
        Sage.User.SessionExpires.initialize();
    });

    // Session expires object.
    Sage.User.SessionExpires = $.extend({}, Sage.AjaxModal, {

        interval: '',
        timeout: '',

        MODAL_IDENTIFIER: 'session',

        initialize: function() {
            this.startPoll();
        },

        getForm: function() {
            return $('#session-expires');
        },

        startPoll: function() {
            this.interval = window.setInterval($.proxy(this.check, this), 300000);
        },

        getLoginUrl: function() {
            return (typeof Drupal.settings.Sage.Session.loginUrl != 'undefined') ? Drupal.settings.Sage.Session.loginUrl : '';
        },

        getLogoutUrl: function() {
            return (typeof Drupal.settings.Sage.Session.logoutUrl != 'undefined') ? Drupal.settings.Sage.Session.logoutUrl : '';
        },

        getAutoLogoutUrl: function() {
            return (typeof Drupal.settings.Sage.Session.autoLogoutUrl != 'undefined') ? Drupal.settings.Sage.Session.autoLogoutUrl : '';
        },

        getRenewUrl: function() {
            return (typeof Drupal.settings.Sage.Session.renewUrl != 'undefined') ? Drupal.settings.Sage.Session.renewUrl : '';
        },

        getExpiration: function() {
            var cookie = (typeof Drupal.settings.Sage.Session.expiration != 'undefined') ? Drupal.settings.Sage.Session.expiration : '';
            return $.cookie(cookie);
        },

        isExpired: function() {
            return parseInt(Date.now() / 1000) > parseInt(this.getExpiration());
        },

        isAboutExpire: function() {
            return parseInt(Date.now() / 1000) > (parseInt(this.getExpiration()) - 300);
        },

        getExpireTimeInterval: function() {
            return (((parseInt(this.getExpiration()) - 2) - (parseInt(Date.now() / 1000))) * 1000);
        },

        check: function() {
            if (this.getExpiration() && this.isAboutExpire()) {
                clearInterval(this.interval);
                this.hide();
                var interval = this.getExpireTimeInterval();
                this.timeout = window.setTimeout($.proxy(this.autoLogout, this), interval);
                this.showMessage();
            }
        },

        showMessage: function() {
            this.hide();
            this.setModalId(this.MODAL_IDENTIFIER);
            var content = this.getForm().clone().removeClass('element-invisible').html();
            var modal = Sage.Bootstrap.Modal.addContainer(this.getModalId(), content, Drupal.t('Session is about to expire.'));
            var that = this;
            modal.delegate('a', 'click', function(e) {
                e.preventDefault();
                var element = $(this);
                element.data('session') == 'yes' ? that.renewSession() : that.cancelSession();
            });
            this.show();
        },

        renewSession: function() {
            var that = this;
            clearTimeout(this.timeout);
            $.getJSON(this.getRenewUrl())
                .done(function(data) {
                    if (typeof data.status != undefined && data.status) {
                        return that.hide();
                    }
                    window.location.reload();
                });
        },

        cancelSession: function() {
            clearTimeout(this.timeout);
            var redirect = this.getLogoutUrl();
            if (redirect) {
                window.location.href = redirect;
            }
            this.hide();
        },

        autoLogout: function() {
            clearTimeout(this.timeout);
            var redirect = this.getAutoLogoutUrl();
            if (redirect) {
                window.location.href = redirect;
            }
        },

        avoidIframe: function() {
            if (top != self) {
                top.location.replace(top.Sage.User.SessionExpires.getLoginUrl());
            }
        }
    });

})(jQuery);;
/**
 * @file
 *  User status support.
 */
Sage.User = Sage.User || {};

(function($) {

    // We only want to initialize this once, and it's not attached to any element so we can not use once.
    $(document).ready(function() {
        Sage.User.Status.initialize();
    });

    // Status object.
    Sage.User.Status = {

        EVENT_CHANGE: 'sage:status:change',

        initialize: function() {
            this.hideLinks();
            this.check();
        },

        check: function() {
            $.ajax(this.getStatusUrl(), {
                    dataType: 'json',
                    xhrFields: {
                        withCredentials: true
                    }
                })
                .done($.proxy(this.success, this))
                .fail($.proxy(this.error, this))
                .always($.proxy(this.complete, this));
        },

        recheck: function() {
            this.check();
        },

        getStatusUrl: function() {
            return (typeof Drupal.settings.Sage.Status.statusUrl != 'undefined') ? Drupal.settings.Sage.Status.statusUrl : '';
        },

        getLoggedUrl: function() {
            return (typeof Drupal.settings.Sage.Status.loggedUrl != 'undefined') ? Drupal.settings.Sage.Status.loggedUrl : '';
        },

        success: function(data) {
            Sage.User.Info.initialize(data.status, data);
            Sage.events.trigger(this.EVENT_CHANGE, data);
            this.showLinks(data.status);
            this.showMessages(data.messages);
        },

        error: function(data) {

        },

        complete: function(data) {

        },

        hideLinks: function() {
            $('[user-status]').parent('li').addClass('element-invisible');
        },

        showLinks: function(status) {
            var status = (status) ? 1 : 0;
            $('[user-status="' + status + '"]').parent('li').removeClass('element-invisible');
        },

        showMessages: function(messages) {
            if (typeof messages != 'undefined') {
                if (typeof messages.i != 'undefined') {
                    $.each(messages.i, function(key, message) {
                        Sage.Form.Message.addInfoMessage(message);
                    });
                }
                if (typeof messages.w != 'undefined') {
                    $.each(messages.w, function(key, message) {
                        Sage.Form.Message.addWarningMessage(message);
                    });
                }
                if (typeof messages.e != 'undefined') {
                    $.each(messages.e, function(key, message) {
                        Sage.Form.Message.addErrorMessage(message);
                    });
                }
            }
        }
    }

})(jQuery);;
/**
 * @file
 *  Themed items in javascript related with the module.
 */
(function($) {

    Drupal.theme.prototype.pillBoxes = function(items, expand) {
        var output = '<div class="field-items">';
        $.each(items, function(key, item) {
            output += Drupal.theme('pillBox', $(item));
        });
        output += (typeof expand == 'string') ? expand : '';
        output += '</div>';
        return output;
    }

    Drupal.theme.prototype.pillBox = function(item) {
        return '<div class="pill">' + item.attr('description') + '<a href="#" class="pill-close" identifier="' + item.attr('identifier') + '">x</a></div>';
    }

    Drupal.theme.prototype.Expand = function(limit) {
        return '<a collapse="' + limit + '" href="#" class="button-square">' + Drupal.t('+ MORE') + '</a>';
    }

})(jQuery);;
/**
 * @file
 *  Login Block.
 */
Sage.User = Sage.User || {};

(function($) {

    Drupal.behaviors.LoginBlock = {
        attach: function(context) {
            Sage.User.LoginBlock.initialize(context);
        }
    };

    // Login block object.
    Sage.User.LoginBlock = {

        context: null,

        initialize: function(context) {
            this.context = context;
            this.bindEvents();
        },

        bindEvents: function() {
            this.bindUserStatus();
            this.bindBodyMouseup();
        },

        bindUserStatus: function() {
            Sage.events.bind(Sage.User.Status.EVENT_CHANGE, $.proxy(function(event, data) {
                if (data.status == 0) {
                    this.bindLoginLink();
                }
            }, this));
        },

        bindBodyMouseup: function() {
            $('body', this.context).mouseup($.proxy(this.hideLoginBlock, this));
        },

        bindLoginLink: function() {
            this.getLoginLink().hover($.proxy(this.showLoginBlock, this));
        },

        getLoginLink: function() {
            return $('[login-box-trigger]', this.context);
        },

        getLoginBlock: function() {
            return $('#login-form-block', this.context);
        },

        showLoginBlock: function() {
            this.getLoginBlock().css(this.calculateLoginBoxPosition()).show();
        },

        calculateLoginBoxPosition: function() {
            var link = this.getLoginLink();
            var linkPosition = link.position();
            return {
                'left': linkPosition.left - (this.getLoginBlock().outerWidth() / 2) + (link.width() / 2),
                'top': linkPosition.top + link.height()
            }
        },

        hideLoginBlock: function(ev) {
            if (!this.getLoginBlock().is(ev.target) && this.getLoginBlock().has(ev.target).length === 0) {
                this.getLoginBlock().hide();
            }
        }
    };

})(jQuery);;
(function($) {

    /**
     * UI Improvements for the Content Editing Form
     */
    Drupal.behaviors.panopolyAdmin = {
        attach: function(context, settings) {
            // Make the permalink field full width.
            var width = $('#node-edit #edit-title').width() - $('#node-edit .form-item-path-alias label').width() - $('#node-edit .form-item-path-alias .field-prefix').width() - 10;
            $('#node-edit .form-item-path-alias input').css('width', width);

            // Hide the body label in Javascript if requested, which allows the summary
            // Javacript to continue working.
            $('#node-edit .panopoly-admin-hide-body-label .form-item-body-und-0-value label', context)
                .once('panopoly-admin-hide-body-label')
                .wrapInner('<span class="element-invisible"></span>')
                .css('text-align', 'right');

            if ($('#node-edit .form-item-field-featured-image-und-0-alt label')) {
                $('#node-edit .form-item-field-featured-image-und-0-alt label').html('Alt Text');
            }
        }
    }

    /**
     * Automatically Upload Files/Images Attached
     */
    Drupal.behaviors.panopolyAutoUpload = {
        attach: function(context, settings) {
            $('#node-edit input#edit-field-featured-image-und-0-upload').next('input[type="submit"]').hide();
            $('form', context).delegate('#node-edit input#edit-field-featured-image-und-0-upload', 'change', function() {
                $(this).next('input[type="submit"]').mousedown();
            });
        }
    };

    /**
     * Automatically fill in a menu link title, if possible.
     *
     * NOTE: This behavior is a copy and paste from the Core Menu module's menu.js
     * script. It has been adapted to update proper targeting. This brings back
     * the core functionality.
     */
    Drupal.behaviors.panopolyLinkAutomaticTitle = {
        attach: function(context) {
            $('.pane-node-form-menu', context).each(function() {
                // Try to find menu settings widget elements as well as a 'title' field in
                // the form, but play nicely with user permissions and form alterations.
                var $checkbox = $('.form-item-menu-enabled input', this);
                var $link_title = $('.form-item-menu-link-title input', context);
                var $title = $(this).closest('form').find('.form-item-title input');
                // Bail out if we do not have all required fields.
                if (!($checkbox.length && $link_title.length && $title.length)) {
                    return;
                }
                // If there is a link title already, mark it as overridden. The user expects
                // that toggling the checkbox twice will take over the node's title.
                if ($checkbox.is(':checked') && $link_title.val().length) {
                    $link_title.data('menuLinkAutomaticTitleOveridden', true);
                }
                // Whenever the value is changed manually, disable this behavior.
                $link_title.keyup(function() {
                    $link_title.data('menuLinkAutomaticTitleOveridden', true);
                });
                // Global trigger on checkbox (do not fill-in a value when disabled).
                $checkbox.change(function() {
                    if ($checkbox.is(':checked')) {
                        if (!$link_title.data('menuLinkAutomaticTitleOveridden')) {
                            $link_title.val($title.val());
                        }
                    } else {
                        $link_title.val('');
                        $link_title.removeData('menuLinkAutomaticTitleOveridden');
                    }
                    $checkbox.closest('fieldset.vertical-tabs-pane').trigger('summaryUpdated');
                    $checkbox.trigger('formUpdated');
                });
                // Take over any title change.
                $title.keyup(function() {
                    if (!$link_title.data('menuLinkAutomaticTitleOveridden') && $checkbox.is(':checked')) {
                        $link_title.val($title.val());
                        $link_title.val($title.val()).trigger('formUpdated');
                    }
                });
            });
        }
    };

})(jQuery);;
(function($) {
    Drupal.behaviors.panopolyMagic = {
        attach: function(context, settings) {
            /**
             * Title Hax for Panopoly
             *
             * Replaces the markup of a node title pane with
             * the h1.title page element
             */
            if ($.trim($('.pane-node-title .pane-content').html()) == $.trim($('h1.title').html())) {
                $('.pane-node-title .pane-content').html('');
                $('h1.title').hide().clone().prependTo('.pane-node-title .pane-content');
                $('.pane-node-title h1.title').show();
            }
        }
    };
})(jQuery);

(function($) {
    // Used to only update preview after changes stop for a second.
    var timer;

    // Used to make sure we don't wrap Drupal.wysiwygAttach() more than once.
    var wrappedWysiwygAttach = false;

    // Used to make sure we don't wrap insertLink() on the Linkit field helper
    // more than once.
    var wrappedLinkitField = false;

    // Triggers the CTools autosubmit on the given form. If timeout is passed,
    // it'll set a timeout to do the actual submit rather than calling it directly
    // and return the timer handle.
    function triggerSubmit(form, timeout) {
        var $form = $(form),
            preview_widget = $('#panopoly-form-widget-preview'),
            submit;
        if (!preview_widget.hasClass('panopoly-magic-loading')) {
            preview_widget.addClass('panopoly-magic-loading');
            submit = function() {
                if (document.contains(form)) {
                    $form.find('.ctools-auto-submit-click').click();
                }
            };
            if (typeof timeout === 'number') {
                return setTimeout(submit, timeout);
            } else {
                submit();
            }
        }
    }

    // Used to cancel a submit. It'll clear the timer and the class marking the
    // loading operation.
    function cancelSubmit(form, timer) {
        var $form = $(form),
            preview_widget = $('#panopoly-form-widget-preview');
        preview_widget.removeClass('panopoly-magic-loading');
        clearTimeout(timer);
    }

    function onWysiwygChangeFactory(editorId) {
        return function() {
            var textarea = $('#' + editorId),
                form = textarea.get(0).form;

            if (textarea.hasClass('panopoly-textarea-autosubmit')) {
                // Wait a second and then submit.
                cancelSubmit(form, timer);
                timer = triggerSubmit(form, 1000);
            }
        };
    }

    // A function to run before Drupal.wysiwyg.editor.attach.tinymce() with the
    // same arguments.
    function wysiwygTinymceBeforeAttach(context, params, settings) {
        var onWysiwygChange = onWysiwygChangeFactory(params.field);
        settings['setup'] = function(editor) {
            editor.onChange.add(onWysiwygChange);
            editor.onKeyUp.add(onWysiwygChange);
        };
    }

    // A function to run before Drupal.wysiwyg.editor.attach.markitup() with the
    // same arguments.
    function wysiwygMarkitupBeforeAttach(context, params, settings) {
        var onWysiwygChange = onWysiwygChangeFactory(params.field);
        $.each(['afterInsert', 'onEnter'], function(index, funcName) {
            settings[funcName] = onWysiwygChange;
        });
    }

    // Used to wrap a function with a beforeFunc (we use it for wrapping
    // Drupal.wysiwygAttach()).
    function wrapFunctionBefore(parent, name, beforeFunc) {
        var originalFunc = parent[name];
        parent[name] = function() {
            beforeFunc.apply(this, arguments);
            return originalFunc.apply(this, arguments);
        };
    }

    // Used to wrap a function with an afterFunc (we use it for wrapping
    // insertLink() on the Linkit field helper);
    function wrapFunctionAfter(parent, name, afterFunc) {
        var originalFunc = parent[name];
        parent[name] = function() {
            var retval = originalFunc.apply(this, arguments);
            afterFunc.apply(this, arguments);
            return retval;
        };
    }

    /**
     * Improves the Auto Submit Experience for CTools Modals
     */
    Drupal.behaviors.panopolyMagicAutosubmit = {
        attach: function(context, settings) {
            // Move focus to preview after it's shown.
            $('body').once(function() {
                if (typeof Drupal.CTools !== 'undefined' && typeof Drupal.CTools.Modal !== 'undefined' && typeof Drupal.CTools.Modal.modal_display) {
                    var modal_display = Drupal.CTools.Modal.modal_display;
                    Drupal.CTools.Modal.modal_display = function(ajax, response, status) {
                        var url = ajax.url,
                            params = {},
                            widget_name;

                        // Do the parent operation.
                        modal_display(ajax, response, status);

                        // Parse the GET arguments.
                        url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
                            params[key] = value;
                        })
                        if (params['panopoly_magic_preview'] == 'manual') {
                            widget_name = decodeURIComponent(params['preview_panes']).split(',').pop();
                            widget_name.replace(':', '-');
                            widget_name.replace(/[^a-zA-Z0-9_]/g, '');
                            // Need to defer until current set of behaviors is done, because Panels
                            // will move the focus to the first widget by default.
                            setTimeout(function() {
                                $('#modal-content .panopoly-magic-preview-' + widget_name + ' :focusable:first').focus();
                            }, 0);
                        } else if (params['panopoly_magic_preview'] == 'single') {
                            // Ditto.
                            setTimeout(function() {
                                $('#modal-content .panopoly-magic-preview :focusable:first').focus();
                            }, 0);
                        }
                    };
                }
            });

            // Replaces click with mousedown for submit so both normal and ajax work.
            $('.ctools-auto-submit-click', context)
                .click(function(event) {
                    if ($(this).hasClass('ajax-processed')) {
                        event.stopImmediatePropagation();
                        $(this).trigger('mousedown');
                        return false;
                    }
                });

            // e.keyCode: key
            var discardKeyCode = [
                16, // shift
                17, // ctrl
                18, // alt
                20, // caps lock
                33, // page up
                34, // page down
                35, // end
                36, // home
                37, // left arrow
                38, // up arrow
                39, // right arrow
                40, // down arrow
                9, // tab
                13, // enter
                27 // esc
            ];

            // Special handling for link field widgets. This ensures content which is ahah'd in still properly autosubmits.
            $('.field-widget-link-field input:text', context).addClass('panopoly-textfield-autosubmit').addClass('ctools-auto-submit-exclude');

            // Handle text fields and textareas.
            $('.panopoly-textfield-autosubmit, .panopoly-textarea-autosubmit', context)
                .once('ctools-auto-submit')
                .bind('keyup blur', function(e) {
                    var $element;
                    $element = $('.panopoly-magic-preview .pane-title', context);

                    cancelSubmit(e.target.form, timer);

                    // Filter out discarded keys.
                    if (e.type !== 'blur' && $.inArray(e.keyCode, discardKeyCode) > 0) {
                        return;
                    }

                    // Set a timer to submit the form a second after the last activity.
                    timer = triggerSubmit(e.target.form, 1000);
                });

            // Handle WYSIWYG fields.
            if (!wrappedWysiwygAttach && typeof Drupal.wysiwyg != 'undefined' && typeof Drupal.wysiwyg.editor.attach.tinymce == 'function' && typeof Drupal.wysiwyg.editor.attach.markitup == 'function') {
                wrapFunctionBefore(Drupal.wysiwyg.editor.attach, 'tinymce', wysiwygTinymceBeforeAttach);
                //wrapFunctionBefore(Drupal.wysiwyg.editor.attach, 'markitup', wysiwygMarkitupBeforeAttach);
                wrappedWysiwygAttach = true;

                // Since the Drupal.behaviors run in a non-deterministic order, we can
                // never be sure that we wrapped Drupal.wysiwygAttach() before it was
                // used! So, we look for already attached editors so we can detach and
                // re-attach them.
                $('.panopoly-textarea-autosubmit', context)
                    .once('panopoly-magic-wysiwyg')
                    .each(function() {
                        var editorId = this.id,
                            instance = Drupal.wysiwyg.instances[editorId],
                            format = instance ? instance.format : null,
                            trigger = instance ? instance.trigger : null;

                        if (instance && instance.editor != 'none') {
                            params = Drupal.settings.wysiwyg.triggers[trigger];
                            if (params) {
                                Drupal.wysiwygDetach(context, params[format]);
                                Drupal.wysiwygAttach(context, params[format]);
                            }
                        }
                    });
            }

            // Handle autocomplete fields.
            $('.panopoly-autocomplete-autosubmit', context)
                .once('ctools-auto-submit')
                .bind('keyup blur', function(e) {
                    // Detect when a value is selected via TAB or ENTER.
                    if (e.type === 'blur' || e.keyCode === 13) {
                        // We defer the submit call so that it happens after autocomplete has
                        // had a chance to fill the input with the selected value.
                        triggerSubmit(e.target.form, 0);
                    }
                });

            // Prevent ctools auto-submit from firing when changing text formats.
            $(':input.filter-list').addClass('ctools-auto-submit-exclude');

            // Handle Linkit fields.
            if (!wrappedLinkitField && typeof Drupal.linkit !== 'undefined') {
                var linkitFieldHelper = Drupal.linkit.getDialogHelper('field');
                if (typeof linkitFieldHelper !== 'undefined') {
                    wrapFunctionAfter(linkitFieldHelper, 'insertLink', function(data) {
                        var element = document.getElementById(Drupal.settings.linkit.currentInstance.source);
                        triggerSubmit(element.form);
                    });
                    wrappedLinkitField = true;
                }
            }

        }
    }
})(jQuery);;
(function($) {

    Drupal.behaviors.PanelsAccordionStyle = {
        attach: function(context, settings) {
            for (region_id in Drupal.settings.accordion) {
                var accordion = Drupal.settings.accordion[region_id];
                if (jQuery('#' + region_id).hasClass("ui-accordion")) {
                    jQuery('#' + region_id).accordion("refresh");
                } else {
                    jQuery('#' + region_id).accordion(accordion.options);
                }
            }
        }
    };

})(jQuery);;
/**
 * @file
 *  Add facet link related behaviours.
 */
var Sage = Sage || {};
Sage.ApacheSolr = Sage.ApacheSolr || {};

(function($) {

    Drupal.behaviors.ApacheSolrFacetLinks = {
        attach: function(context) {
            // Attach functionality to discipline facet links.
            $('#facetapi-facet-search-apisage-product-index-block-field-disciplines', context).once('attach-facet-links', function() {
                var disciplineFacetLinks = new Sage.ApacheSolr.FacetLinks($(this), 5, 0);
                disciplineFacetLinks.addFacetViewMore();
            });
            // Attach functionality to course facet links.
            $('#facetapi-facet-search-apisage-product-index-block-field-courses', context).once('attach-facet-links', function() {
                var disciplineFacetLinks = new Sage.ApacheSolr.FacetLinks($(this), 5, 0);
                disciplineFacetLinks.addFacetViewMore();
            });
        }
    };

    /**
     * Facet link collapse behaviours.
     *
     * Facet link lists can be trimmed to an initial number to show. Facets can also
     * have an additional secondary limit of items shown based on the result count
     * for that given item.
     *
     * e.g. On load show 5 links initially, click to expand all facets with a search
     * result count of over 5, then click again to reveal all.
     *
     * @param {jQuery} $facetListElement
     *  The jQuery element containing the facet links.
     * @param {number} itemLimit
     *  The initial limit of facet links to show.
     * @param countLimit
     *  If supplied, items with a minimum of this count (take from results) will
     *  be shown after the first click.
     *
     * @constructor
     */
    Sage.ApacheSolr.FacetLinks = function($facetListElement, itemLimit, countLimit) {
        this.initialize($facetListElement, itemLimit, countLimit);
    };

    $.extend(Sage.ApacheSolr.FacetLinks.prototype, {
        facet_id: null,
        indexLimit: 4,
        countLimit: 0,
        $facetListElement: null,
        $viewMoreElement: null,

        /**
         * Initialize the facet link object.
         *
         * @param {jQuery} $facetListElement
         * @param {number} itemLimit
         * @param {number} countLimit
         */
        initialize: function($facetListElement, itemLimit, countLimit) {
            this.$facetListElement = $facetListElement;
            this.facet_id = $facetListElement.attr('id');
            this.indexLimit = itemLimit - 1;
            this.countLimit = countLimit;
        },

        /**
         * Check if the view more button should be implemented.
         *
         * @returns {bool}
         */
        hasMoreChildrenThanLimit: function() {
            return this.$facetListElement.children().length > this.indexLimit;
        },

        /**
         * Checks if the count limit should be implemented.
         *
         * @returns {bool}
         */
        hasCountLimit: function() {
            return this.countLimit > 0;
        },

        /**
         * Reset the count limit.
         */
        resetCountLimit: function() {
            this.countLimit = 0;
        },

        /**
         * Attach view more behaviour to facet link list.
         */
        addFacetViewMore: function() {
            if (this.hasMoreChildrenThanLimit()) {
                this.addViewMoreButton();
                this.hideFacetLinks();
                this.insertViewMoreButton();
                this.attachViewMoreBehaviour();
            }
        },

        /**
         * Hide the links we will not show.
         */
        hideFacetLinks: function() {
            this.$facetListElement.find('> li:gt(' + this.indexLimit + ')').hide();
        },

        /**
         * Insert the view more button.
         */
        insertViewMoreButton: function() {
            this.$viewMoreElement.insertAfter(this.$facetListElement);
        },

        /**
         * Get the view more button.
         */
        addViewMoreButton: function() {
            this.$viewMoreElement = $('<a />')
                .attr('data-facet-toggle', this.facet_id)
                .attr('href', '')
                .text(Drupal.t('View more'))
                .addClass('l-block brand-color-15 anchor-camouflaged');
        },

        /**
         * Attach the behaviours to the view more button.
         */
        attachViewMoreBehaviour: function() {
            this.$viewMoreElement.click($.proxy(function(event) {
                event.preventDefault();
                if (this.hasCountLimit() && this.hasMoreChildrenThanSoftLimit()) {
                    this.addClickWithCountLimit();
                } else {
                    this.addClickDefaultBehaviour();
                }
            }, this));
        },

        /**
         * Check if the view more to limit should be implemented.
         *
         * @returns {bool}
         */
        hasMoreChildrenThanSoftLimit: function() {
            return this.getChildrenToCountLimit().length > 0;
        },

        /**
         * Add the behaviour when count limit is in place.
         */
        addClickWithCountLimit: function() {
            this.showChildrenToClickLimit();
            // Reset count limit so the default behavior will now apply.
            this.resetCountLimit();
        },

        /**
         * Get the children up to the count limit.
         *
         * @returns {jQuery}
         */
        getChildrenToCountLimit: function() {
            var minimumCount = this.countLimit;
            return this.$facetListElement.children().filter(function() {
                return parseInt($(this).children().attr('data-count')) > minimumCount;
            })
        },

        /**
         * Show child elements up to the point of the count limit.
         */
        showChildrenToClickLimit: function() {
            this.getChildrenToCountLimit().slideDown();
        },

        /**
         * Default expand behaviour.
         */
        addClickDefaultBehaviour: function() {
            this.$facetListElement.find('> li').slideDown();
            this.$viewMoreElement.remove();
        }
    });
})(jQuery);;
/**
 * @file
 *  Add search form related behaviours.
 */
var Sage = Sage || {};
Sage.ApacheSolr = Sage.ApacheSolr || {};

(function($) {

    Drupal.behaviors.SearchForm = {
        attach: function(context) {
            Sage.ApacheSolr.SearchForm.initialize(context);
        }
    };

    Sage.ApacheSolr.TypeaheadOptions = {

        staticFilters: function(options) {
            return function findMatches(query, process) {
                var items = Drupal.settings.Sage.ApacheSolr.typeaheadOptions;
                var options = [];
                $.each(items, function(i, data) {
                    var object = $.extend({}, data);
                    options[i] = object;
                    options[i]['search'] = query;
                    options[i]['value'] = options[i]['value'].replace('!search', query);
                });
                process(options);
            };
        },

        bloodHound: new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('part_field_partial_title'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: {
                url: '%SERVER/?%FIELD_LIST&%FILTERS&queryType=%QUERY_TYPE&q=%QUERY',
                rateLimitWait: 100,
                replace: function(url, query) {
                    return url
                        .replace('%SERVER', Sage.ApacheSolr.TypeaheadOptions.getSolrAppUrl())
                        .replace('%FIELD_LIST', Sage.ApacheSolr.TypeaheadOptions.getFieldList())
                        .replace('%QUERY_TYPE', Sage.ApacheSolr.TypeaheadOptions.getQueryType())
                        .replace('%FILTERS', Sage.ApacheSolr.TypeaheadOptions.getQueryFilters())
                        .replace('%QUERY', query);
                },
                filter: function(suggestions) {
                    $.each(suggestions, function(index, item) {
                        if (typeof item.tm_sage_apachesolr_path_alias != 'undefined') {
                            suggestions[index]['redirect'] = item.tm_sage_apachesolr_path_alias
                        }
                        if (typeof item.item_id != 'undefined') {
                            suggestions[index]['id'] = item.item_id
                        }
                    });
                    return suggestions;
                }
            }
        }),

        getSolrAppUrl: function() {
            return typeof Drupal.settings.Sage.ApacheSolr.solrAppUrl != 'undefined' ? Drupal.settings.Sage.ApacheSolr.solrAppUrl : '';
        },

        getFieldList: function() {
            return 'fl=tm_title,item_id,tm_sage_apachesolr_path_alias,ss_field_custom_cover_image,tm_field_subtitle';
        },

        getQueryType: function() {
            return 'product';
        },

        getQueryFilters: function() {
            return 'fq=im_sage_apachesolr_domain_access_node:"' + Sage.Domain.getDomainID() + '"' +
                '&fq=sm_sage_apachesolr_available_on_domain:"' + Sage.Domain.getWebsiteID() + '"' +
                '&fq=index_id:"sage_product_index"';
        },

        getSuggestionTemplate: function(data) {
            var output = '<p>';
            if (typeof data.ss_field_custom_cover_image != 'undefined' && data.ss_field_custom_cover_image != '') {
                output += '<img class="l-element-left" src="' + data.ss_field_custom_cover_image + '" />';
            }
            output += '<strong>' + data.tm_title + '</strong>';
            if (typeof data.tm_field_subtitle != 'undefined' && data.tm_field_subtitle != '') {
                output += ', ' + data.tm_field_subtitle;
            }
            output += '</p>';
            return output;
        }
    };

    // Institutions object.
    Sage.ApacheSolr.SearchForm = $.extend({}, {

        typeaheadDatum: null,

        initialize: function() {
            if (this.enableTypeAheadSuggestions()) {
                Sage.ApacheSolr.TypeaheadOptions.bloodHound.initialize();
            }
            this.bindEvents();
        },

        enableTypeAheadSuggestions: function() {
            return (typeof Drupal.settings.Sage.ApacheSolr.enableTypeAheadSuggestions != 'undefined') ? Drupal.settings.Sage.ApacheSolr.enableTypeAheadSuggestions : false;
        },

        bindEvents: function() {
            this.bindTypeahead();
            this.bindSubmit();
        },

        bindTypeahead: function() {
            var input = this.getFormInputText();
            var typeahead = input.once().typeahead({
                hint: true,
                minLength: 2,
                highlight: true
            }, [{
                    name: 'search-filters',
                    displayKey: 'value',
                    source: Sage.ApacheSolr.TypeaheadOptions.staticFilters([])
                },
                {
                    name: 'search-results',
                    source: Sage.ApacheSolr.TypeaheadOptions.bloodHound.ttAdapter(),
                    templates: {
                        suggestion: Sage.ApacheSolr.TypeaheadOptions.getSuggestionTemplate
                    }
                }
            ]).on('typeahead:selected', $.proxy(function(e, datum) {
                e.preventDefault();
                this.typeaheadDatum = datum;
                this.disableButton();
                this.disableEnter();
                this.redirectIfNecessary(datum);
                this.filterIfNecessary(datum);
                return false;
            }, this));
        },

        bindSubmit: function() {
            this.getForm().on('submit', $.proxy(function(e) {
                Sage.events.trigger('sage:search', this.typeaheadDatum);
            }, this));
        },

        disableButton: function() {
            this.getForm().find('input[type="submit"]').unbind('click');
        },

        disableEnter: function() {
            this.getForm().on("keyup keypress", function(e) {
                var code = e.keyCode || e.which;
                if (code == 13) {
                    e.preventDefault();
                    return false;
                }
            });
        },

        redirectIfNecessary: function(datum) {
            if (datum['redirect']) {
                var url = unescape(datum['redirect']).replace('!search', datum['search']);
                window.location.href = url;
            }
            if (datum['id']) {
                window.location.href = this.getContentRedirectUrl(datum['id']);
            }
        },

        filterIfNecessary: function(datum) {
            if (datum['filter']) {
                if (typeof datum['filter'] == 'string') {
                    this.getFormInputFilter().val(datum['filter']);
                }
                this.getFormInputText().val(datum['search']);
                this.getFormInputAction().val(datum['action']);
                this.getForm().submit();
            }
        },

        getForm: function() {
            return $('form[id$="sage-search-product"],form[id$="sage-search-content"],form[id$="sage-search-author"],form[id$="sage-search-institute"]');
        },

        getFormInputText: function() {
            return this.getForm().find('input[type="text"]');
        },

        getFormInputFilter: function() {
            return this.getForm().find('input[type="hidden"][name="filter"]');
        },

        getFormInputAction: function() {
            return this.getForm().find('input[type="hidden"][name="action"]');
        },

        getContentRedirectUrl: function(id) {
            var url = (typeof Drupal.settings.Sage.ApacheSolr.contentRedirectUrl != 'undefined') ? Drupal.settings.Sage.ApacheSolr.contentRedirectUrl : '';
            return unescape(url).replace('%', id);
        }

    }, Sage.AjaxModal);

})(jQuery);;
/**
 * @file
 *  Add search tab related behaviours.
 */
var Sage = Sage || {};
Sage.ApacheSolr = Sage.ApacheSolr || {};
(function($) {

    $(document).ready(function() {
        Sage.ApacheSolr.Tabbing.initialize();
    });

    Sage.ApacheSolr.Tabbing = {

        COOKIE_NAME_TYPEAHEAD_DATUM: 'typeahead',

        parsedTypeaheadDatum: null,

        initialize: function() {
            this.bindSearchEvent();
            this.updateTabLinks();
        },

        bindSearchEvent: function() {
            Sage.events.bind('sage:search', $.proxy(function(e, datum) {
                this.setTypeaheadDatumCookie(datum);
            }, this));
        },

        setTypeaheadDatumCookie: function(datum) {
            // If datum is undefined, no filters have been applied, so this will reset
            // the cookie.
            datum = datum || {};
            $.cookie(this.COOKIE_NAME_TYPEAHEAD_DATUM, JSON.stringify(datum), {
                path: '/'
            });
        },

        getTyeaheadDatum: function() {
            if (this.parsedTypeaheadDatum === null) {
                this.parsedTypeaheadDatum = $.parseJSON($.cookie(this.COOKIE_NAME_TYPEAHEAD_DATUM)) || {};
            }
            return this.parsedTypeaheadDatum;
        },

        getTyeaheadAction: function() {
            var datum = this.getTyeaheadDatum();
            return (typeof datum.action === 'string') ? '' : datum.action;
        },

        getTyeaheadFilter: function() {
            var datum = this.getTyeaheadDatum();
            return (typeof datum.filter === 'string') ? datum.filter : '';
        },

        updateTabLinks: function() {
            var that = this;
            this.getSearchTabs().each(function() {
                if (that.typeaheadActionIsForTab($(this))) {
                    that.updateTabLink($(this));
                }
            })
        },

        getSearchTabs: function() {
            return $('.menu-name-menu-sage-search-pages a');
        },

        typeaheadActionIsForTab: function($tab) {
            var action = this.getTyeaheadAction();
            return $tab.attr('href').indexOf('/' + action + '/') >= 0;
        },

        updateTabLink: function($tab) {
            var filter = this.getTyeaheadFilter();
            if (filter) {
                $tab.attr('href', $tab.attr('href') + '?filter=' + encodeURIComponent(filter));
            }
        }
    };

})(jQuery);;
Drupal.behaviors.sage_ccavenue = {
    attach: function(context, settings) {
        jQuery('#sage-ccavenue-redirect-form', context).once('sage_ccavenue').delay(50).submit();
        jQuery('#edit-submitted-same-billing-address-1').on('change', function() {
            if (jQuery(this).is(':checked')) {
                jQuery('#set-billing-address input, #set-billing-address select').attr('readonly', true);
                jQuery('.webform-component--shipping-address--shipping-address input').trigger('blur');
            } else {
                jQuery('#set-billing-address input, #set-billing-address select').attr('readonly', false);
            }
        });
        jQuery('#webform-client-form-1099121 input,#webform-client-form-1099121 select').bind('keypress keyup blur change', function() {
            if (jQuery('#edit-submitted-same-billing-address-1').is(':checked')) {
                jQuery('#edit-submitted-billing-details-billing-address-line-1').val(jQuery('#edit-submitted-shipping-address-shipping-address').val());
                jQuery('#edit-submitted-billing-details-billing-address-line-2').val(jQuery('#edit-submitted-shipping-address-address-line-2').val());
                jQuery('#edit-submitted-billing-details-billing-address-line-3').val(jQuery('#edit-submitted-shipping-address-address-line-3').val());
                jQuery('#edit-submitted-billing-details-billing-country').val(jQuery('#edit-submitted-shipping-address-country').val());
                jQuery('#edit-submitted-billing-details-billing-state').val(jQuery('#edit-submitted-shipping-address-state').val());
                jQuery('#edit-submitted-billing-details-billing-city').val(jQuery('#edit-submitted-shipping-address-city').val());
                jQuery('#edit-submitted-billing-details-billing-pin-zip-code').val(jQuery('#edit-submitted-shipping-address-pin-zip-code').val());
            }
        });
    }
};;
/**
 * @file
 *  Add currency related behaviours.
 */
var Sage = Sage || {};
Sage.Commerce = Sage.Commerce || {};

(function($) {

    Sage.Commerce.Currency = {

        EVENT_CHANGE: 'sage:currency:change',

        initialize: function(context) {
            this.setCurrencies(this.getCurrencies());
            this.bindEvents();
        },

        changeCurrencies: function(currency) {
            this.setCurrencies(currency);
            this.processPage(document);
        },

        bindEvents: function() {
            this.bindCurrenciesSwitcherEvent();
            this.bindReloadOnChange();
        },

        bindCurrenciesSwitcherEvent: function() {
            var currency_switcher = $('#block-sage-commerce-sage-commerce-currency-switcher select');
            currency_switcher.val(this.getCurrencies());
            currency_switcher.bind('change', function() {
                Sage.Commerce.Currency.changeCurrencies($(this).val());
            });
        },

        bindReloadOnChange: function() {
            Sage.events.bind(Sage.Commerce.Currency.EVENT_CHANGE, function(event) {
                if (Sage.Commerce.Currency.isReloadRequired()) {
                    location.reload();
                }
            });
        },

        getCurrenciesCookieName: function() {
            return (typeof Drupal.settings.Sage.Commerce.Currency.currencyCookie != 'undefined') ? Drupal.settings.Sage.Commerce.Currency.currencyCookie : '';
        },

        getCurrencies: function() {
            return this.readCurrencies() || this.getDefaultCurrencies();
        },

        getDefaultCurrencies: function() {
            return (typeof Drupal.settings.Sage.Commerce.Currency.defaultCurrencies != 'undefined') ? Drupal.settings.Sage.Commerce.Currency.defaultCurrencies : ['USD'];
        },

        isReloadRequired: function() {
            return (typeof Drupal.settings.Sage.Commerce.Currency.reloadOnCurrencyChange != 'undefined') ? Boolean(Drupal.settings.Sage.Commerce.Currency.reloadOnCurrencyChange) : FALSE;
        },

        readCurrencies: function() {
            return $.cookie(this.getCurrenciesCookieName());
        },

        setCurrencies: function(currency) {
            if (this.getCurrencies() != currency) {
                $.cookie(this.getCurrenciesCookieName(), currency, {
                    path: '/',
                    secure: true
                });
                Sage.events.trigger(this.EVENT_CHANGE);
            }
        },

        resetCurrencies: function() {
            $.cookie(this.getCurrenciesCookieName(), null, {
                path: '/',
                secure: true
            });
        },

        getElements: function(context) {
            return $('[data-currency]', context);
        },

        getCurrentDomainId: function() {
            return (typeof Drupal.settings.Sage.Commerce.Currency.domain != 'undefined') ? Drupal.settings.Sage.Commerce.Currency.domain : 1;
        },

        processPage: function(context) {
            var elements = this.getElements(context);
            elements.each($.proxy(this.processElement, this));
            elements.filter(':visible').each($.proxy(this.appendRegionIfNecessary, this));
        },

        processElement: function(delta, element) {
            element = $(element);
            var currencies = this.getCurrencies();
            (currencies.indexOf(element.data('currency')) !== -1) ? element.show(): element.hide();
        },

        appendRegionIfNecessary: function(delta, element) {
            element = $(element);
            if (element.siblings('[data-currency]:visible').length > 0) {
                var region = this.getRegionFromCurrency(element.data('currency'));
                if (region) {
                    element.prepend(Drupal.t(region) + ': ');
                }
            }
        },

        getRegionFromCurrency: function(currency) {
            return this.getRegionsMap()[currency] != undefined ? this.getRegionsMap()[currency] : '';
        },

        getRegionsMap: function() {
            return (typeof Drupal.settings.Sage.Commerce.Currency.regionsForCurrencies != 'undefined') ? Drupal.settings.Sage.Commerce.Currency.regionsForCurrencies : {};
        }

    };

    $(document).ready(function() {
        Sage.Commerce.Currency.initialize(document);
    });

    Drupal.behaviors.Currency = {
        attach: function(context, settings) {
            Sage.Commerce.Currency.processPage(context);
        }
    };
})(jQuery);;
/**
 * @file
 *  Add cart related behaviours.
 */
var Sage = Sage || {};
Sage.Commerce = Sage.Commerce || {};

(function($) {

    Sage.Commerce.Cart = {

        EVENT_CHANGE: 'sage:cart:change',
        EVENT_SHOW: 'sage:cart:show',
        EVENT_HIDE: 'sage:cart:hide',

        cart: null,

        data: '',

        process: false,

        defaultCallback: null,

        visible: false,

        displayMessage: false,

        initialize: function() {
            this.defaultCallback = this.setData;
            this.getCartContent();
            this.bindEvents();
        },

        update: function() {
            Sage.User.Status.recheck();
        },

        reload: function() {
            this.getCartContent($.proxy(this.reloadCart, this));
        },

        getMessageContainer: function() {
            return $('#cart-messages', this.getCartContainer());
        },

        hideMessageContainer: function() {
            this.getMessageContainer().addClass('element-invisible');
        },

        showMessageContainer: function() {
            this.getMessageContainer().removeClass('element-invisible');
        },

        toggleMessageContainer: function() {
            if (this.displayMessage) {
                this.showMessageContainer();
                window.setTimeout($.proxy(function() {
                    this.hideMessageContainer();
                }, this), 8000);
                this.displayMessage = false;
            }
        },

        setData: function(data) {
            this.data = data;
        },

        bindEvents: function() {
            this.bindUserStatus();
            this.bindCartStatus();
            this.bindCartDropdowns($('#views-form-commerce-cart-form-default'));
        },

        bindUserStatus: function() {
            Sage.events.bind(Sage.User.Status.EVENT_CHANGE, $.proxy(function(event, data) {
                // Set the cart link html (data comes from sage_commerce_sage_user_status_alter())
                this.getCartLink().html(data.cartInfo);
                this.bindShowEvent();
                this.bindHideEvent();
            }, this));
        },

        bindCartStatus: function() {
            Sage.events.bind(this.EVENT_CHANGE, $.proxy(function(event, data) {
                this.getCartContent(this.showCartTemporary);
            }, this));
        },

        bindCartDropdowns: function(context) {
            $('select', context).on('change', function(e) {
                $(this).closest('form').find('input[action="update"]').click();
            });
        },

        bindShowEvent: function() {
            this.getCartLink().bind('mouseover click', $.proxy(function(e) {
                $(e.currentTarget).unbind('blur');
                this.showCart(this.data);
                return false;
            }, this));
        },

        bindHideEvent: function() {
            $('body').on('click', $.proxy(function() {
                this.hideCart();
            }, this));
        },

        getCartContainer: function() {
            return $('#block-sage-commerce-sage-commerce-cart');
        },

        getCartContent: function(callback) {
            this.process = true;
            $.get(
                    Sage.Commerce.Cart.getCartUrl(), {
                        dataType: 'json'
                    }
                )
                .done($.proxy(function(data) {
                    this.setData(data);
                    this.process = false;
                    (typeof callback != 'undefined') ? callback(data): this.defaultCallback(data);
                    this.defaultCallback = this.setData;
                    this.toggleMessageContainer();
                }, this));
        },

        _getCartLinkContainer: function() {
            return $('#cart-link-wrapper .l-cart-link-container', this.getCartContainer());
        },

        getCartLink: function() {
            return $('a.cart', this._getCartLinkContainer());
        },

        checkCart: function(data) {
            if (typeof data.cart == 'undefined') {
                if (this.process) {
                    this.defaultCallback = this.showCartTemporary;
                } else {
                    this.getCartContent(this.showCartTemporary);
                }
                return false;
            }
            return true;
        },

        showCart: function(data) {
            if (!this.visible && this.checkCart(data)) {
                this.cart = this._getCartLinkContainer().popover({
                        placement: 'bottom',
                        template: Drupal.theme('popoverTemplate', 'cart', false),
                        content: data.cart,
                        html: true
                    })
                    .on('show.bs.popover', $.proxy(function() {
                        this.visible = true;
                        Sage.events.trigger(this.EVENT_SHOW);
                    }, this))
                    .on('hide.bs.popover', $.proxy(function() {
                        this.visible = false;
                        Sage.events.trigger(this.EVENT_HIDE);
                    }, this));
                this.cart.popover('show');
                Sage.events.trigger(this.EVENT_SHOW);
            }
        },

        showCartTemporary: function(data) {
            this.showCart(data);
            window.setTimeout($.proxy(function() {
                this.hideCart();
            }, this), 5000);
        },

        hideCart: function() {
            if (this.cart) {
                this.cart.popover('destroy');
                this.visible = false;
                this.cart = null;
            }
        },

        reloadCart: function(data) {
            this.hideCart();
            this.showCartTemporary(data);
        },

        isCartVisible: function() {
            return this.cart.popover.hasClass('in');
        },

        getCartUrl: function() {
            return (typeof Drupal.settings.Sage.Commerce.Cart.cartUrl != 'undefined') ? Drupal.settings.Sage.Commerce.Cart.cartUrl : '';
        }
    };

    $.fn.addToCartAjaxResponse = function(info) {
        if (typeof info.error != 'undefined') {
            var content = info.error.join('<br/>');
            return Sage.Bootstrap.Modal.addContainer('ajax-response', content).modal('show');
        }
        Sage.Commerce.Cart.displayMessage = true;
        Sage.Commerce.Cart.update();
        Sage.Commerce.Cart.reload();
    };

    $(document).ready(function() {
        Sage.Commerce.Cart.initialize();
    });

})(jQuery);;
/**
 * @file
 *  Add promo code related behaviours.
 */
var Sage = Sage || {};
Sage.Discount = Sage.Discount || {};

(function($) {
    $(document).ready(function() {
        Sage.Discount.PromoCode.initialize();
    });

    Drupal.behaviors.PromoCodes = {
        attach: function(context, settings) {
            Sage.Discount.PromoCode.bindReleaseDiscount(context);
        }
    };

    Sage.Discount.PromoCode = {

        initialize: function() {
            if (Sage.path.isParameterPresent(this.getPromoQueryParamName())) {
                this.setPromoCookie(Sage.path.getParameter(this.getPromoQueryParamName()));
            }
            if (Sage.path.isParameterPresent(this.getPriorityQueryParamName())) {
                if (Sage.path.getParameter(this.getPriorityQueryParamName()).length <= 10) {
                    this.setPriorityCookie(Sage.path.getParameter(this.getPriorityQueryParamName()));
                }
            }
        },

        bindReleaseDiscount: function(context) {
            $('.pill-close', context).on('click', function(e) {
                $(this).siblings('input').trigger('mousedown');
                e.preventDefault();
            })
        },

        getPromoQueryParamName: function() {
            return (typeof Drupal.settings.Sage.Discount.promoQueryParam != 'undefined') ? Drupal.settings.Sage.Discount.promoQueryParam : '';
        },

        getPriorityQueryParamName: function() {
            return (typeof Drupal.settings.Sage.Discount.priorityQueryParam != 'undefined') ? Drupal.settings.Sage.Discount.priorityQueryParam : '';
        },

        getPromoCookieName: function() {
            return (typeof Drupal.settings.Sage.Discount.promoCookieName != 'undefined') ? Drupal.settings.Sage.Discount.promoCookieName : '';
        },

        getPriorityCookieName: function() {
            return (typeof Drupal.settings.Sage.Discount.priorityCookieName != 'undefined') ? Drupal.settings.Sage.Discount.priorityCookieName : '';
        },

        setPromoCookie: function(value) {
            jQuery.cookie(this.getPromoCookieName(), value, {
                path: '/',
                domain: Sage.path.getUrlBaseHostname(),
                secure: true
            });
        },

        setPriorityCookie: function(value) {
            jQuery.cookie(this.getPriorityCookieName(), value, {
                path: '/',
                domain: Sage.path.getUrlBaseHostname(),
                secure: true
            });
        }
    }
})(jQuery);;
/**
 * @file
 *  Anchor based behaviours.
 */
Sage.Content = Sage.Content || {};

(function($) {

    // We only want to initialize this once, and it's not attached to any element so we can not use once.
    $(document).ready(function() {
        Sage.Content.Anchor.initialize();
    });

    Sage.Content.Anchor = {

        TYPE_ISBN: 'isbn',

        TYPE_PREVIEW: 'preview',

        initialize: function() {
            var fragment = this.getUrlFragment();
            if (fragment) {
                var trimmed = fragment.replace(/-/g, '');
                var elements = $('[anchor="' + fragment + '"], [anchor="' + trimmed + '"]');
                elements.each($.proxy(this.processAnchor, this));
            }
        },

        getUrlFragment: function() {
            var fragment = Sage.path.getUrlFragment();
            return fragment.replace(/^#/, '');
        },

        processAnchor: function(idx, element) {
            switch (this.getType(element)) {
                case this.TYPE_ISBN:
                    this.processISBN(element);
                    break;
            }
        },

        getType: function(element) {
            return $(element).attr('anchor-type');
        },

        processISBN: function(element) {
            var product = $(element).parent('div').attr('product');
            var select = $('#sage-commerce-purchase-options-select');
            select.val(product).change();
            $(element).addClass('strong');
        }

    }

})(jQuery);;
/**
 * @file
 *  Courses based behaviours.
 */
Sage.Content = Sage.Content || {};

(function($) {

    Drupal.behaviors.ExpandList = {
        attach: function(context) {
            Sage.Content.ExpandList.initialize(context);
        }
    };

    Sage.Content.ExpandList = {

        initialize: function(context) {
            this.addBehaviour($('#term-courses', context));
        },

        getExpandLink: function(element) {
            return element.find('[collapse]');
        },

        getExpandElements: function(element) {
            var parent = element.closest('.field-items');
            var elements = parent.children('div');
            if (elements.length == 0) {
                elements = parent.children('span');
            }
            return elements;
        },

        addBehaviour: function(element) {
            var link = this.getExpandLink(element);
            (this.getExpandElements(link).length - 1 >= link.attr('collapse')) ? this.start(link): this.stop(link);
        },

        start: function(link) {
            this.collapse(link);
            link.on('click', $.proxy(function(e) {
                e.preventDefault();
                this.toggle(link);
            }, this));
        },

        stop: function(link) {
            link.hide();
        },

        toggle: function(element) {
            (element.attr('collapse')) ? this.collapse(element): this.expand(element);
        },

        expand: function(element) {
            var limit = element.attr('expand');
            this.getExpandElements(element).each(function(key, value) {
                $(this).show();
            });
            element.text(Drupal.t('- LESS'));
            element.removeAttr('expand').attr('collapse', limit);
        },

        collapse: function(element) {
            var limit = element.attr('collapse');
            this.getExpandElements(element).each(function(key, value) {
                var item = $(this);
                (key < limit || item.find('[collapse]').length) ? item.show(): item.hide();
            });
            element.text(Drupal.t('+ MORE'));
            element.removeAttr('collapse').attr('expand', limit);
        }
    }

})(jQuery);;
/**
 * @file
 *  Add report review related behaviours.
 */
Sage.Content = Sage.Content || {};
Drupal.settings = Drupal.settings || {};

(function($) {

    Drupal.behaviors.ReportReview = {
        attach: function(context) {
            Sage.Content.ReportReview.initialize(context);
        }
    };

    Sage.Content.ReportReview = {

        FORM: 'sage-content-report-review-form',

        context: null,

        initialize: function(context) {
            this.context = context;
            this.bindEvents();
        },

        bindEvents: function() {
            this.bindShowEvent();
            this.bindCloseEvent();
            this.bindCharacterCountEvent();
        },

        bindShowEvent: function() {
            $('[data-report-review]', this.context).once('bind-review-events', function() {
                $(this).click(function(event) {
                    event.preventDefault();
                    Sage.Content.ReportReview.showEventChain($(this));
                });
            });
        },

        showEventChain: function($element) {
            var id = $element.attr('data-report-review');
            this.destroyAllPopovers();
            this.addPopover($element);
            this.showPopover(id);
            this.getPopoverContent(id);
        },

        destroyAllPopovers: function() {
            $('[data-report-review]').popover('destroy');
        },

        addPopover: function($element) {
            $element.popover({
                placement: 'bottom',
                content: '<div id="report-review" class="review-popover">Loading</div>',
                html: true,
                trigger: 'manual'
            });
        },

        showPopover: function(id) {
            $('[data-report-review="' + id + '"]').popover('show');
            Sage.Content.ReportReview.getPopoverContent($(this).attr('data-report-review'));
        },

        getPopoverContent: function(id) {
            var path = Sage.Content.ReportReview.getReportReviewUrl(id);
            $.getJSON(path, function(response, status) {
                id = this.FORM;
                var drupalAjax = new Drupal.ajax(id, this, {
                    url: path
                });
                drupalAjax.success(response, status);
            });
        },

        getReportReviewUrl: function(id) {
            var url = (typeof Drupal.settings.Sage.Content.reportReviewUrl != 'undefined') ? Drupal.settings.Sage.Content.reportReviewUrl : '';
            return decodeURI(url).replace('%node', id);
        },

        getReportReviewMaxLength: function() {
            return (typeof Drupal.settings.Sage.Content.reportReviewMaxLength != 'undefined') ? Drupal.settings.Sage.Content.reportReviewMaxLength : 200;
        },

        bindCloseEvent: function() {
            $('[data-dismiss="review-popover"]', this.context).click(function(event) {
                event.preventDefault();
                Sage.Content.ReportReview.destroyAllPopovers();
            });
        },

        bindCharacterCountEvent: function() {
            var $userInput = $('#' + this.FORM + ' textarea');
            var $message = $('#' + this.FORM + ' .description');
            var maxLength = this.getReportReviewMaxLength();
            Sage.characterCounter.initialize($userInput, $message, maxLength);
        }
    };
})(jQuery);;
/**
 * @file
 *  More/Less collapse items.
 */
Sage.Content = Sage.Content || {};

(function($) {

    Sage.Content.Collapse = {

        context: null,

        initialize: function(context) {
            this.context = context;
            this.showLess();
            this.bindMoreEvent();
            this.bindLessEvent();
        },

        /**
         * Binds behaviours to more button
         */
        bindMoreEvent: function() {
            this.getShowMoreButton().click($.proxy(this.showMore, this));
        },

        /**
         * Binds behaviours to less button
         */
        bindLessEvent: function() {
            this.getShowLessButton().click($.proxy(this.showLess, this));
        },

        /**
         * Behaviour to show "more" elements
         */
        showMore: function() {
            this.getShowMoreButton().hide();
            this.getShowLessButton().show();
            this.getCollapsibleElements().show();
        },

        /**
         * Behaviour to show "less" elements
         */
        showLess: function() {
            this.getShowLessButton().hide();
            this.getShowMoreButton().show();
            this.getCollapsibleElements().hide();
        },

        /**
         * Get show "more" button.
         * @returns {*|HTMLElement}
         */
        getShowMoreButton: function() {
            return $('#buttonMore', this.context);
        },

        /**
         * Get show "less" button
         * @returns {*|HTMLElement}
         */
        getShowLessButton: function() {
            return $('#buttonLess', this.context);
        },

        /**
         * Gets the elements in the collapse list.
         * @returns {*|HTMLElement}
         */
        getCollapsibleElements: function() {
            return $('#moreElements', this.context);
        }

    };

    Drupal.behaviors.SageCollapse = {
        attach: function(context) {
            Sage.Content.Collapse.initialize(context);
        }
    };

})(jQuery);;