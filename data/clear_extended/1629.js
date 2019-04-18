/*!---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
"use strict";
var _amdLoaderGlobal = this,
    AMDLoader;
(function(AMDLoader) {
    var global = _amdLoaderGlobal,
        isWebWorker = typeof global.importScripts == "function",
        Utilities, ConfigurationOptionsUtil, Configuration, ModuleIdResolver, Module, ModuleManager;
    if (typeof global.define != "function" || !global.define.amd) {
        (function() {
            global.console || (global.console = {});
            global.console.log || (global.console.log = function() {});
            global.console.warn || (global.console.warn = global.console.log);
            global.console.error || (global.console.error = global.console.log)
        })();
        Utilities = function() {
            function Utilities() {}
            return Utilities.startsWith = function(haystack, needle) {
                return haystack.length >= needle.length && haystack.substr(0, needle.length) === needle
            }, Utilities.endsWith = function(haystack, needle) {
                return haystack.length >= needle.length && haystack.substr(haystack.length - needle.length) === needle
            }, Utilities.containsQueryString = function(url) {
                return url.indexOf("?") >= 0
            }, Utilities.isAbsolutePath = function(url) {
                return Utilities.startsWith(url, "http://") || Utilities.startsWith(url, "https://") || Utilities.startsWith(url, "/")
            }, Utilities.forEachProperty = function(obj, callback) {
                if (obj) {
                    var key;
                    for (key in obj) obj.hasOwnProperty(key) && callback(key, obj[key])
                }
            }, Utilities.isEmpty = function(obj) {
                var isEmpty = !0;
                return Utilities.forEachProperty(obj, function() {
                    isEmpty = !1
                }), isEmpty
            }, Utilities.isArray = function(obj) {
                return Array.isArray ? Array.isArray(obj) : Object.prototype.toString.call(obj) === "[object Array]"
            }, Utilities.recursiveClone = function(obj) {
                if (!obj || typeof obj != "object") return obj;
                var result = Utilities.isArray(obj) ? [] : {};
                return Utilities.forEachProperty(obj, function(key, value) {
                    result[key] = value && typeof value == "object" ? Utilities.recursiveClone(value) : value
                }), result
            }, Utilities.generateAnonymousModule = function() {
                return "===anonymous" + Utilities.NEXT_ANONYMOUS_ID++ + "==="
            }, Utilities.isAnonymousModule = function(id) {
                return id.indexOf("===anonymous") === 0
            }, Utilities.NEXT_ANONYMOUS_ID = 1, Utilities
        }();
        ConfigurationOptionsUtil = function() {
            function ConfigurationOptionsUtil() {}
            return ConfigurationOptionsUtil.validateConfigurationOptions = function(options) {
                function defaultOnError(err) {
                    if (err.errorCode === "load") {
                        console.error('Loading "' + err.moduleId + '" failed');
                        console.error("Detail: ", err.detail);
                        console.error("Here are the modules that depend on it:");
                        console.error(err.neededBy);
                        return
                    }
                    if (err.errorCode === "factory") {
                        console.error('The factory method of "' + err.moduleId + '" has thrown an exception');
                        console.error(err.detail);
                        return
                    }
                }
                return options = options || {}, typeof options.baseUrl != "string" && (options.baseUrl = ""), typeof options.paths != "object" && (options.paths = {}), typeof options.bundles != "object" && (options.bundles = []), typeof options.shim != "object" && (options.shim = {}), typeof options.catchError == "undefined" && (options.catchError = isWebWorker), typeof options.urlArgs != "string" && (options.urlArgs = ""), typeof options.onError != "function" && (options.onError = defaultOnError), typeof options.ignoreDuplicateModules == "object" && Utilities.isArray(options.ignoreDuplicateModules) || (options.ignoreDuplicateModules = []), options.baseUrl.length > 0 && (Utilities.endsWith(options.baseUrl, "/") || (options.baseUrl += "/")), typeof options.syncLoadModules == "object" && Utilities.isArray(options.syncLoadModules) || (options.syncLoadModules = []), options
            }, ConfigurationOptionsUtil.mergeConfigurationOptions = function(overwrite, base) {
                typeof overwrite == "undefined" && (overwrite = null);
                typeof base == "undefined" && (base = null);
                var result = Utilities.recursiveClone(base || {});
                return Utilities.forEachProperty(overwrite, function(key, value) {
                    key === "bundles" && typeof result.bundles != "undefined" ? Utilities.isArray(value) ? result.bundles = result.bundles.concat(value) : Utilities.forEachProperty(value, function(key, value) {
                        var bundleConfiguration = {
                            location: key,
                            modules: value
                        };
                        result.bundles.push(bundleConfiguration)
                    }) : key === "ignoreDuplicateModules" && typeof result.ignoreDuplicateModules != "undefined" ? result.ignoreDuplicateModules = result.ignoreDuplicateModules.concat(value) : key === "syncLoadModules" && typeof result.syncLoadModules != "undefined" ? result.syncLoadModules = result.syncLoadModules.concat(value) : key === "paths" && typeof result.paths != "undefined" ? Utilities.forEachProperty(value, function(key2, value2) {
                        return result.paths[key2] = value2
                    }) : key === "shim" && typeof result.shim != "undefined" ? Utilities.forEachProperty(value, function(key2, value2) {
                        return result.shim[key2] = value2
                    }) : result[key] = Utilities.recursiveClone(value)
                }), ConfigurationOptionsUtil.validateConfigurationOptions(result)
            }, ConfigurationOptionsUtil
        }();
        AMDLoader.ConfigurationOptionsUtil = ConfigurationOptionsUtil;
        Configuration = function() {
            function Configuration(options) {
                this.options = ConfigurationOptionsUtil.mergeConfigurationOptions(options);
                this._createIgnoreDuplicateModulesMap();
                this._createSyncLoadModulesMap();
                this._createSortedPathsRules();
                this._createShimModules();
                this._createOverwriteModuleIdToPath()
            }
            return Configuration.prototype._createOverwriteModuleIdToPath = function() {
                var i, bundle, location, j;
                for (this.overwriteModuleIdToPath = {}, i = 0; i < this.options.bundles.length; i++)
                    if (bundle = this.options.bundles[i], location = bundle.location, bundle.modules)
                        for (j = 0; j < bundle.modules.length; j++) this.overwriteModuleIdToPath[bundle.modules[j]] = location
            }, Configuration.prototype._createIgnoreDuplicateModulesMap = function() {
                this.ignoreDuplicateModulesMap = {};
                for (var i = 0; i < this.options.ignoreDuplicateModules.length; i++) this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[i]] = !0
            }, Configuration.prototype._createSyncLoadModulesMap = function() {
                this.syncLoadModulesMap = {};
                for (var i = 0; i < this.options.syncLoadModules.length; i++) this.syncLoadModulesMap[this.options.syncLoadModules[i]] = !0
            }, Configuration.prototype._createSortedPathsRules = function() {
                var _this = this;
                this.sortedPathsRules = [];
                Utilities.forEachProperty(this.options.paths, function(from, to) {
                    _this.sortedPathsRules.push({
                        from: from,
                        to: to
                    })
                });
                this.sortedPathsRules.sort(function(a, b) {
                    return b.from.length - a.from.length
                })
            }, Configuration.prototype._ensureShimModule1 = function(path, shimMD) {
                for (var dependencyId, i = 0; i < shimMD.length; i++) dependencyId = shimMD[i], this.shimModules.hasOwnProperty(dependencyId) || this._ensureShimModule1(dependencyId, []);
                this.shimModules[path] = {
                    dependencies: shimMD,
                    callback: null
                }
            }, Configuration.prototype._ensureShimModule2 = function(path, shimMD) {
                this.shimModules[path] = {
                    dependencies: shimMD.deps || [],
                    callback: function() {
                        for (var depsValues = [], initReturnValue, pieces, obj, i, _i = 0; _i < arguments.length - 0; _i++) depsValues[_i] = arguments[_i + 0];
                        if (typeof shimMD.init == "function" && (initReturnValue = shimMD.init.apply(global, depsValues), typeof initReturnValue != "undefined")) return initReturnValue;
                        if (typeof shimMD.exports == "function") return shimMD.exports.apply(global, depsValues);
                        if (typeof shimMD.exports == "string") {
                            for (pieces = shimMD.exports.split("."), obj = global, i = 0; i < pieces.length; i++) obj && (obj = obj[pieces[i]]);
                            return obj
                        }
                        return shimMD.exports || {}
                    }
                }
            }, Configuration.prototype._createShimModules = function() {
                var _this = this;
                this.shimModules = {};
                Utilities.forEachProperty(this.options.shim, function(path, shimMD) {
                    if (shimMD) {
                        if (Utilities.isArray(shimMD)) {
                            _this._ensureShimModule1(path, shimMD);
                            return
                        }
                        _this._ensureShimModule2(path, shimMD)
                    }
                })
            }, Configuration.prototype.cloneAndMerge = function(options) {
                return new Configuration(ConfigurationOptionsUtil.mergeConfigurationOptions(options, this.options))
            }, Configuration.prototype.getOptionsLiteral = function() {
                return this.options
            }, Configuration.prototype._applyPaths = function(moduleId) {
                for (var pathRule, i = 0, len = this.sortedPathsRules.length; i < len; i++)
                    if (pathRule = this.sortedPathsRules[i], Utilities.startsWith(moduleId, pathRule.from)) return pathRule.to + moduleId.substr(pathRule.from.length);
                return moduleId
            }, Configuration.prototype.addUrlArgsIfNecessary = function(url) {
                if (this.options.urlArgs) {
                    var hasUrlArgs = url.indexOf("?") >= 0;
                    return hasUrlArgs ? url + "&" + this.options.urlArgs : url + "?" + this.options.urlArgs
                }
                return url
            }, Configuration.prototype.moduleIdToPath = function(moduleId) {
                var result = moduleId;
                return this.overwriteModuleIdToPath.hasOwnProperty(result) ? (result = this.overwriteModuleIdToPath[result], Utilities.isAbsolutePath(result) || (result = this.options.baseUrl + result)) : Utilities.endsWith(result, ".js") || Utilities.isAbsolutePath(result) || (result = this._applyPaths(result), Utilities.isAbsolutePath(result) || (result = this.options.baseUrl + result), Utilities.endsWith(result, ".js") || Utilities.containsQueryString(result) || (result = result + ".js")), this.addUrlArgsIfNecessary(result)
            }, Configuration.prototype.requireToUrl = function(url) {
                var result = url;
                return Utilities.isAbsolutePath(result) || (result = this._applyPaths(result), Utilities.isAbsolutePath(result) || (result = this.options.baseUrl + result)), this.addUrlArgsIfNecessary(result)
            }, Configuration.prototype.isShimmed = function(moduleId) {
                return this.shimModules.hasOwnProperty(moduleId)
            }, Configuration.prototype.getShimmedModuleDefine = function(moduleId) {
                return this.shimModules[moduleId]
            }, Configuration.prototype.isDuplicateMessageIgnoredFor = function(moduleId) {
                return this.ignoreDuplicateModulesMap.hasOwnProperty(moduleId)
            }, Configuration.prototype.isSyncLoadFor = function(moduleId) {
                return this.syncLoadModulesMap.hasOwnProperty(moduleId)
            }, Configuration.prototype.shouldCatchError = function() {
                return this.options.catchError
            }, Configuration.prototype.onError = function(err) {
                this.options.onError(err)
            }, Configuration
        }();
        AMDLoader.Configuration = Configuration;
        ModuleIdResolver = function() {
            function ModuleIdResolver(config, fromModuleId) {
                this._config = config;
                var lastSlash = fromModuleId.lastIndexOf("/");
                this.fromModulePath = lastSlash !== -1 ? fromModuleId.substr(0, lastSlash + 1) : ""
            }
            return ModuleIdResolver.prototype._normalizeModuleId = function(moduleId) {
                for (var parts = moduleId.split("/"), i = 0; i < parts.length; i++) parts[i] === "." || parts[i] === "" ? (parts.splice(i, 1), i--) : i > 0 && parts[i] === ".." && parts[i - 1] !== ".." && (parts.splice(i - 1, 2), i -= 2);
                return parts.join("/")
            }, ModuleIdResolver.prototype.resolveModule = function(moduleId) {
                var result = moduleId;
                return Utilities.isAbsolutePath(result) || (Utilities.startsWith(result, "./") || Utilities.startsWith(result, "../")) && (result = this._normalizeModuleId(this.fromModulePath + result)), result
            }, ModuleIdResolver.prototype.moduleIdToPath = function(moduleId) {
                return this._config.moduleIdToPath(moduleId)
            }, ModuleIdResolver.prototype.requireToUrl = function(url) {
                return this._config.requireToUrl(url)
            }, ModuleIdResolver.prototype.shouldCatchError = function() {
                return this._config.shouldCatchError()
            }, ModuleIdResolver.prototype.onError = function(err) {
                this._config.onError(err)
            }, ModuleIdResolver
        }();
        AMDLoader.ModuleIdResolver = ModuleIdResolver;
        Module = function() {
            function Module(id, dependencies, callback, errorback, moduleIdResolver) {
                this._id = id;
                this._dependencies = dependencies;
                this._dependenciesValues = [];
                this._callback = callback;
                this._errorback = errorback;
                this._moduleIdResolver = moduleIdResolver;
                this._exports = {};
                this._exportsPassedIn = !1;
                this._digestDependencies();
                this._unresolvedDependenciesCount === 0 && this._complete()
            }
            return Module.prototype._digestDependencies = function() {
                var i, len, d, bangIndex, pluginId, pluginParam;
                for (this._unresolvedDependenciesCount = this._dependencies.length, this._managerDependencies = [], this._managerDependenciesMap = {}, i = 0, len = this._dependencies.length; i < len; i++) {
                    if (d = this._dependencies[i], !d) {
                        console.warn("Please check module " + this._id + ", the dependency list looks broken");
                        this._dependenciesValues[i] = null;
                        this._unresolvedDependenciesCount--;
                        continue
                    }
                    d === "exports" ? (this._exportsPassedIn = !0, this._dependenciesValues[i] = this._exports, this._unresolvedDependenciesCount--) : d === "module" ? (this._dependenciesValues[i] = {
                        id: this._id
                    }, this._unresolvedDependenciesCount--) : d === "require" ? this.addManagerDependency(d, i) : (bangIndex = d.indexOf("!"), bangIndex >= 0 ? (pluginId = d.substring(0, bangIndex), pluginParam = d.substring(bangIndex + 1, d.length), d = this._moduleIdResolver.resolveModule(pluginId) + "!" + pluginParam) : d = this._moduleIdResolver.resolveModule(d), this.addManagerDependency(d, i))
                }
            }, Module.prototype.addManagerDependency = function(dependency, index) {
                if (this._managerDependenciesMap.hasOwnProperty(dependency)) throw new Error("Module " + this._id + " contains multiple times a dependency to " + dependency);
                this._managerDependencies.push(dependency);
                this._managerDependenciesMap[dependency] = index
            }, Module.prototype.renameDependency = function(oldDependencyId, newDependencyId) {
                if (!this._managerDependenciesMap.hasOwnProperty(oldDependencyId)) throw new Error("Loader: Cannot rename an unknown dependency!");
                var index = this._managerDependenciesMap[oldDependencyId];
                delete this._managerDependenciesMap[oldDependencyId];
                this._managerDependenciesMap[newDependencyId] = index
            }, Module.prototype.getId = function() {
                return this._id
            }, Module.prototype.getModuleIdResolver = function() {
                return this._moduleIdResolver
            }, Module.prototype.isExportsPassedIn = function() {
                return this._exportsPassedIn
            }, Module.prototype.getExports = function() {
                return this._exports
            }, Module.prototype.getDependencies = function() {
                return this._managerDependencies
            }, Module.prototype._invokeFactory = function() {
                var producedError = null,
                    returnedValue = null;
                if (this._moduleIdResolver.shouldCatchError()) try {
                    returnedValue = this._callback.apply(global, this._dependenciesValues)
                } catch (e) {
                    producedError = e
                } else returnedValue = this._callback.apply(global, this._dependenciesValues);
                return {
                    returnedValue: returnedValue,
                    producedError: producedError
                }
            }, Module.prototype._complete = function() {
                var producedError = null,
                    r;
                if (this._callback && (typeof this._callback == "function" ? (r = this._invokeFactory(), producedError = r.producedError, producedError || typeof r.returnedValue == "undefined" || this._exportsPassedIn && !Utilities.isEmpty(this._exports) || (this._exports = r.returnedValue)) : this._exports = this._callback), producedError) this.getModuleIdResolver().onError({
                    errorCode: "factory",
                    moduleId: this._id,
                    detail: producedError
                })
            }, Module.prototype.cleanUp = function() {
                this._dependencies = null;
                this._dependenciesValues = null;
                this._callback = null;
                this._moduleIdResolver = null;
                this._managerDependencies = null;
                this._managerDependenciesMap = null
            }, Module.prototype.onDependencyError = function(err) {
                return this._errorback ? (this._errorback(err), !0) : !1
            }, Module.prototype.resolveDependency = function(id, value) {
                if (!this._managerDependenciesMap.hasOwnProperty(id)) throw new Error("Cannot resolve a dependency I do not have!");
                this._dependenciesValues[this._managerDependenciesMap[id]] = value;
                delete this._managerDependenciesMap[id];
                this._unresolvedDependenciesCount--;
                this._unresolvedDependenciesCount === 0 && this._complete()
            }, Module.prototype.isComplete = function() {
                return this._unresolvedDependenciesCount === 0
            }, Module
        }();
        AMDLoader.Module = Module;
        ModuleManager = function() {
            function ModuleManager(scriptLoader) {
                this._config = new Configuration;
                this._scriptLoader = scriptLoader;
                this._modules = {};
                this._knownModules = {};
                this._inverseDependencies = {};
                this._dependencies = {};
                this._inversePluginDependencies = {};
                this._queuedDefineCalls = [];
                this._loadingScriptsCount = 0
            }
            return ModuleManager.prototype.enqueueDefineModule = function(id, dependencies, callback) {
                this._loadingScriptsCount === 0 ? this.defineModule(id, dependencies, callback, null) : this._queuedDefineCalls.push({
                    id: id,
                    dependencies: dependencies,
                    callback: callback
                })
            }, ModuleManager.prototype.enqueueDefineAnonymousModule = function(dependencies, callback) {
                this._queuedDefineCalls.push({
                    id: null,
                    dependencies: dependencies,
                    callback: callback
                })
            }, ModuleManager.prototype.defineModule = function(id, dependencies, callback, errorback, moduleIdResolver) {
                if (typeof moduleIdResolver == "undefined" && (moduleIdResolver = new ModuleIdResolver(this._config, id)), this._modules.hasOwnProperty(id)) {
                    this._config.isDuplicateMessageIgnoredFor(id) || console.warn("Duplicate definition of module '" + id + "'");
                    return
                }
                var m = new Module(id, dependencies, callback, errorback, moduleIdResolver);
                this._modules[id] = m;
                this._resolve(m)
            }, ModuleManager.prototype._relativeRequire = function(moduleIdResolver, dependencies, callback, errorback) {
                if (typeof dependencies == "string") return this.synchronousRequire(dependencies, moduleIdResolver);
                this.defineModule(Utilities.generateAnonymousModule(), dependencies, callback, errorback, moduleIdResolver)
            }, ModuleManager.prototype.synchronousRequire = function(id, moduleIdResolver) {
                var moduleId, m;
                if (typeof moduleIdResolver == "undefined" && (moduleIdResolver = new ModuleIdResolver(this._config, id)), moduleId = moduleIdResolver.resolveModule(id), !this._modules.hasOwnProperty(moduleId)) throw new Error("Check dependency list! Synchronous require cannot resolve module '" + moduleId + "'. This is the first mention of this module!");
                if (m = this._modules[moduleId], !m.isComplete()) throw new Error("Check dependency list! Synchronous require cannot resolve module '" + moduleId + "'. This module has not been resolved completely yet.");
                return m.getExports()
            }, ModuleManager.prototype.configure = function(params, shouldOverwrite) {
                this._config = shouldOverwrite ? new Configuration(params) : this._config.cloneAndMerge(params)
            }, ModuleManager.prototype.getConfigurationOptions = function() {
                return this._config.getOptionsLiteral()
            }, ModuleManager.prototype._onLoad = function(id) {
                var defineCall;
                if (this._loadingScriptsCount--, this._config.isShimmed(id)) defineCall = this._config.getShimmedModuleDefine(id), this.defineModule(id, defineCall.dependencies, defineCall.callback, null);
                else if (this._queuedDefineCalls.length === 0) console.warn("No define call received from module " + id + ". This might be a problem.");
                else
                    while (this._queuedDefineCalls.length > 0)
                        if (defineCall = this._queuedDefineCalls.shift(), defineCall.id === id || defineCall.id === null) {
                            defineCall.id = id;
                            this.defineModule(defineCall.id, defineCall.dependencies, defineCall.callback, null);
                            break
                        } else this.defineModule(defineCall.id, defineCall.dependencies, defineCall.callback, null);
                if (this._loadingScriptsCount === 0)
                    while (this._queuedDefineCalls.length > 0) defineCall = this._queuedDefineCalls.shift(), defineCall.id === null ? console.warn("Found an unmatched anonymous define call in the define queue. Ignoring it!") : this.defineModule(defineCall.id, defineCall.dependencies, defineCall.callback, null)
            }, ModuleManager.prototype._onLoadError = function(id, err) {
                var i, len;
                this._loadingScriptsCount--;
                var error = {
                        errorCode: "load",
                        moduleId: id,
                        neededBy: this._inverseDependencies[id] ? this._inverseDependencies[id].slice(0) : [],
                        detail: err
                    },
                    seenModuleId = {},
                    queueElement, someoneNotified = !1,
                    queue = [];
                for (queue.push(id), seenModuleId[id] = !0; queue.length > 0;)
                    if (queueElement = queue.shift(), this._modules[queueElement] && (someoneNotified = this._modules[queueElement].onDependencyError(error) || someoneNotified), this._inverseDependencies[queueElement])
                        for (i = 0, len = this._inverseDependencies[queueElement].length; i < len; i++) seenModuleId.hasOwnProperty(this._inverseDependencies[queueElement][i]) || (queue.push(this._inverseDependencies[queueElement][i]), seenModuleId[this._inverseDependencies[queueElement][i]] = !0);
                if (!someoneNotified) this._config.onError(error)
            }, ModuleManager.prototype._onModuleComplete = function(id, exports) {
                var i, len, inverseDependencyId, inverseDependency, inverseDependencies, inversePluginDependencies, inversePluginDependencyId, inversePluginDependency;
                if (this._inverseDependencies.hasOwnProperty(id))
                    for (inverseDependencies = this._inverseDependencies[id], delete this._inverseDependencies[id], i = 0, len = inverseDependencies.length; i < len; i++) inverseDependencyId = inverseDependencies[i], inverseDependency = this._modules[inverseDependencyId], inverseDependency.resolveDependency(id, exports), inverseDependency.isComplete() && this._onModuleComplete(inverseDependencyId, inverseDependency.getExports());
                if (this._inversePluginDependencies.hasOwnProperty(id))
                    for (inversePluginDependencies = this._inversePluginDependencies[id], delete this._inversePluginDependencies[id], i = 0, len = inversePluginDependencies.length; i < len; i++) inversePluginDependencyId = inversePluginDependencies[i].moduleId, inversePluginDependency = this._modules[inversePluginDependencyId], this._resolvePluginDependencySync(inversePluginDependencyId, inversePluginDependencies[i].dependencyId, exports), inversePluginDependency.isComplete() && this._onModuleComplete(inversePluginDependencyId, inversePluginDependency.getExports());
                Utilities.isAnonymousModule(id) ? (delete this._modules[id], delete this._dependencies[id]) : this._modules[id].cleanUp()
            }, ModuleManager.prototype._hasDependencyPath = function(from, to) {
                var i, len, inQueue = {},
                    queue = [],
                    element, dependencies, dependency;
                for (queue.push(from), inQueue[from] = !0; queue.length > 0;)
                    if (element = queue.shift(), this._dependencies.hasOwnProperty(element))
                        for (dependencies = this._dependencies[element], i = 0, len = dependencies.length; i < len; i++) {
                            if (dependency = dependencies[i], dependency === to) return !0;
                            inQueue.hasOwnProperty(dependency) || (inQueue[dependency] = !0, queue.push(dependency))
                        }
                return !1
            }, ModuleManager.prototype._findCyclePath = function(from, to, depth) {
                var path, dependencies, i, len;
                if (from === to || depth === 50) return [from];
                if (!this._dependencies.hasOwnProperty(from)) return null;
                for (dependencies = this._dependencies[from], i = 0, len = dependencies.length; i < len; i++)
                    if (path = this._findCyclePath(dependencies[i], to, depth + 1), path !== null) return path.push(from), path;
                return null
            }, ModuleManager.prototype._createRequire = function(moduleIdResolver) {
                var _this = this,
                    result = function(dependencies, callback, errorback) {
                        return _this._relativeRequire(moduleIdResolver, dependencies, callback, errorback)
                    };
                return result.toUrl = function(id) {
                    return moduleIdResolver.requireToUrl(moduleIdResolver.resolveModule(id))
                }, result
            }, ModuleManager.prototype._resolvePluginDependencySync = function(moduleId, dependencyId, plugin) {
                var _this = this,
                    m = this._modules[moduleId],
                    moduleIdResolver = m.getModuleIdResolver(),
                    bangIndex = dependencyId.indexOf("!"),
                    pluginId = dependencyId.substring(0, bangIndex),
                    pluginParam = dependencyId.substring(bangIndex + 1, dependencyId.length),
                    normalize = function(_arg) {
                        return moduleIdResolver.resolveModule(_arg)
                    },
                    oldDependencyId, load;
                pluginParam = typeof plugin.normalize == "function" ? plugin.normalize(pluginParam, normalize) : normalize(pluginParam);
                plugin.dynamic ? (load = function(value) {
                    m.resolveDependency(dependencyId, value);
                    m.isComplete() && _this._onModuleComplete(moduleId, m.getExports())
                }, load.error = function(err) {
                    _this._config.onError({
                        errorCode: "load",
                        moduleId: dependencyId,
                        neededBy: [moduleId],
                        detail: err
                    })
                }, plugin.load(pluginParam, this._createRequire(moduleIdResolver), load, this._config.getOptionsLiteral())) : (oldDependencyId = dependencyId, dependencyId = pluginId + "!" + pluginParam, m.renameDependency(oldDependencyId, dependencyId), this._resolveDependency(moduleId, dependencyId, function(moduleId) {
                    var load = function(value) {
                        _this.defineModule(dependencyId, [], value, null)
                    };
                    load.error = function(err) {
                        _this._config.onError({
                            errorCode: "load",
                            moduleId: dependencyId,
                            neededBy: _this._inverseDependencies[dependencyId] ? _this._inverseDependencies[dependencyId].slice(0) : [],
                            detail: err
                        })
                    };
                    plugin.load(pluginParam, _this._createRequire(moduleIdResolver), load, _this._config.getOptionsLiteral())
                }))
            }, ModuleManager.prototype._resolvePluginDependencyAsync = function(moduleId, dependencyId) {
                var m = this._modules[moduleId],
                    bangIndex = dependencyId.indexOf("!"),
                    pluginId = dependencyId.substring(0, bangIndex);
                this._inversePluginDependencies[pluginId] = this._inversePluginDependencies[pluginId] || [];
                this._inversePluginDependencies[pluginId].push({
                    moduleId: moduleId,
                    dependencyId: dependencyId
                });
                this._modules.hasOwnProperty(pluginId) || this._knownModules.hasOwnProperty(pluginId) || (this._knownModules[pluginId] = !0, this._loadModule(m.getModuleIdResolver(), pluginId))
            }, ModuleManager.prototype._resolvePluginDependency = function(moduleId, dependencyId) {
                var bangIndex = dependencyId.indexOf("!"),
                    pluginId = dependencyId.substring(0, bangIndex);
                this._modules.hasOwnProperty(pluginId) && this._modules[pluginId].isComplete() ? this._resolvePluginDependencySync(moduleId, dependencyId, this._modules[pluginId].getExports()) : this._resolvePluginDependencyAsync(moduleId, dependencyId)
            }, ModuleManager.prototype._resolveShimmedDependency = function(moduleId, dependencyId, loadCallback) {
                var defineInfo = this._config.getShimmedModuleDefine(dependencyId);
                defineInfo.dependencies.length > 0 ? this.defineModule(Utilities.generateAnonymousModule(), defineInfo.dependencies, function() {
                    return loadCallback(dependencyId)
                }, null, new ModuleIdResolver(this._config, dependencyId)) : loadCallback(dependencyId)
            }, ModuleManager.prototype._resolveDependency = function(moduleId, dependencyId, loadCallback) {
                var m = this._modules[moduleId],
                    cyclePath, dependency, dependencyValue;
                this._modules.hasOwnProperty(dependencyId) && this._modules[dependencyId].isComplete() ? m.resolveDependency(dependencyId, this._modules[dependencyId].getExports()) : (this._dependencies[moduleId].push(dependencyId), this._hasDependencyPath(dependencyId, moduleId) ? (console.warn("There is a dependency cycle between '" + dependencyId + "' and '" + moduleId + "'. The cyclic path follows:"), cyclePath = this._findCyclePath(dependencyId, moduleId, 0), cyclePath.reverse(), cyclePath.push(dependencyId), console.warn(cyclePath.join(" => \n")), dependency = this._modules.hasOwnProperty(dependencyId) ? this._modules[dependencyId] : null, dependency && dependency.isExportsPassedIn() && (dependencyValue = dependency.getExports()), m.resolveDependency(dependencyId, dependencyValue)) : (this._inverseDependencies[dependencyId] = this._inverseDependencies[dependencyId] || [], this._inverseDependencies[dependencyId].push(moduleId), this._modules.hasOwnProperty(dependencyId) || this._knownModules.hasOwnProperty(dependencyId) || (this._knownModules[dependencyId] = !0, this._config.isShimmed(dependencyId) ? this._resolveShimmedDependency(moduleId, dependencyId, loadCallback) : loadCallback(dependencyId))))
            }, ModuleManager.prototype._loadModule = function(anyModuleIdResolver, moduleId) {
                var _this = this;
                this._loadingScriptsCount++;
                this._scriptLoader.load(anyModuleIdResolver.moduleIdToPath(moduleId), function() {
                    return _this._onLoad(moduleId)
                }, function(err) {
                    return _this._onLoadError(moduleId, err)
                }, _this._config.isSyncLoadFor(moduleId))
            }, ModuleManager.prototype._resolve = function(m) {
                var _this = this,
                    i, len, id, dependencies, dependencyId, moduleIdResolver, loadCallback;
                for (id = m.getId(), dependencies = m.getDependencies(), moduleIdResolver = m.getModuleIdResolver(), this._dependencies[id] = [], loadCallback = function(moduleId) {
                        return _this._loadModule(moduleIdResolver, moduleId)
                    }, i = 0, len = dependencies.length; i < len; i++)
                    if (dependencyId = dependencies[i], dependencyId === "require") {
                        m.resolveDependency(dependencyId, this._createRequire(moduleIdResolver));
                        continue
                    } else dependencyId.indexOf("!") >= 0 ? this._resolvePluginDependency(id, dependencyId) : this._resolveDependency(id, dependencyId, loadCallback);
                m.isComplete() && this._onModuleComplete(id, m.getExports())
            }, ModuleManager
        }();
        AMDLoader.ModuleManager = ModuleManager;
        var OnlyOnceScriptLoader = function() {
                function OnlyOnceScriptLoader(actualScriptLoader) {
                    this.actualScriptLoader = actualScriptLoader;
                    this.callbackMap = {}
                }
                return OnlyOnceScriptLoader.prototype.load = function(scriptSrc, callback, errorback, syncLoad) {
                    var _this = this,
                        scriptCallbacks = {
                            callback: callback,
                            errorback: errorback
                        };
                    if (this.callbackMap.hasOwnProperty(scriptSrc)) {
                        this.callbackMap[scriptSrc].push(scriptCallbacks);
                        return
                    }
                    this.callbackMap[scriptSrc] = [scriptCallbacks];
                    this.actualScriptLoader.load(scriptSrc, function() {
                        return _this.triggerCallback(scriptSrc)
                    }, function(err) {
                        return _this.triggerErrorback(scriptSrc, err)
                    }, syncLoad)
                }, OnlyOnceScriptLoader.prototype.triggerCallback = function(scriptSrc) {
                    var scriptCallbacks = this.callbackMap[scriptSrc],
                        i;
                    for (delete this.callbackMap[scriptSrc], i = 0; i < scriptCallbacks.length; i++) scriptCallbacks[i].callback()
                }, OnlyOnceScriptLoader.prototype.triggerErrorback = function(scriptSrc, err) {
                    var scriptCallbacks = this.callbackMap[scriptSrc],
                        i;
                    for (delete this.callbackMap[scriptSrc], i = 0; i < scriptCallbacks.length; i++) scriptCallbacks[i].errorback(err)
                }, OnlyOnceScriptLoader
            }(),
            BrowserScriptLoader = function() {
                function BrowserScriptLoader() {}
                return BrowserScriptLoader.prototype.attachListenersV1 = function(script, callback, errorback) {
                    var unbind = function() {
                            script.detachEvent("onreadystatechange", loadEventListener);
                            script.addEventListener && script.removeEventListener("error", errorEventListener)
                        },
                        loadEventListener = function(e) {
                            (script.readyState === "loaded" || script.readyState === "complete") && (unbind(), callback())
                        },
                        errorEventListener = function(e) {
                            unbind();
                            errorback(e)
                        };
                    script.attachEvent("onreadystatechange", loadEventListener);
                    script.addEventListener && script.addEventListener("error", errorEventListener)
                }, BrowserScriptLoader.prototype.attachListenersV2 = function(script, callback, errorback) {
                    var unbind = function() {
                            script.removeEventListener("load", loadEventListener);
                            script.removeEventListener("error", errorEventListener)
                        },
                        loadEventListener = function(e) {
                            unbind();
                            callback()
                        },
                        errorEventListener = function(e) {
                            unbind();
                            errorback(e)
                        };
                    script.addEventListener("load", loadEventListener);
                    script.addEventListener("error", errorEventListener)
                }, BrowserScriptLoader.prototype.load = function(scriptSrc, callback, errorback, syncLoad) {
                    var script = document.createElement("script");
                    syncLoad !== !0 && script.setAttribute("async", "async");
                    script.setAttribute("type", "text/javascript");
                    global.attachEvent ? this.attachListenersV1(script, callback, errorback) : this.attachListenersV2(script, callback, errorback);
                    script.setAttribute("src", scriptSrc);
                    document.getElementsByTagName("head")[0].appendChild(script)
                }, BrowserScriptLoader
            }(),
            WorkerScriptLoader = function() {
                function WorkerScriptLoader() {
                    this.loadCalls = [];
                    this.loadTimeout = -1
                }
                return WorkerScriptLoader.prototype.load = function(scriptSrc, callback, errorback, syncLoad) {
                    var _this = this;
                    this.loadCalls.push({
                        scriptSrc: scriptSrc,
                        callback: callback,
                        errorback: errorback
                    });
                    navigator.userAgent.indexOf("Firefox") >= 0 ? this._load() : this.loadTimeout === -1 && (this.loadTimeout = setTimeout(function() {
                        _this.loadTimeout = -1;
                        _this._load()
                    }, 0))
                }, WorkerScriptLoader.prototype._load = function() {
                    var loadCalls = this.loadCalls,
                        i, len, scripts, errorOccured;
                    for (this.loadCalls = [], len = loadCalls.length, scripts = [], i = 0; i < len; i++) scripts.push(loadCalls[i].scriptSrc);
                    errorOccured = !1;
                    try {
                        importScripts.apply(null, scripts)
                    } catch (e) {
                        for (errorOccured = !0, i = 0; i < len; i++) loadCalls[i].errorback(e)
                    }
                    if (!errorOccured)
                        for (i = 0; i < len; i++) loadCalls[i].callback()
                }, WorkerScriptLoader
            }(),
            scriptLoader = isWebWorker ? new OnlyOnceScriptLoader(new WorkerScriptLoader) : new OnlyOnceScriptLoader(new BrowserScriptLoader);
        var moduleManager = new ModuleManager(scriptLoader),
            DefineFunc = function() {
                function DefineFunc(id, dependencies, callback) {
                    typeof id != "string" && (callback = dependencies, dependencies = id, id = null);
                    typeof dependencies == "object" && Utilities.isArray(dependencies) || (callback = dependencies, dependencies = null);
                    dependencies || (dependencies = ["require", "exports", "module"]);
                    id ? moduleManager.enqueueDefineModule(id, dependencies, callback) : moduleManager.enqueueDefineAnonymousModule(dependencies, callback)
                }
                return DefineFunc.amd = {
                    jQuery: !0
                }, DefineFunc
            }(),
            RequireFunc = function() {
                function RequireFunc() {
                    if (arguments.length === 1) {
                        if (arguments[0] instanceof Object && !Utilities.isArray(arguments[0])) {
                            RequireFunc.config(arguments[0]);
                            return
                        }
                        if (typeof arguments[0] == "string") return moduleManager.synchronousRequire(arguments[0])
                    }
                    if ((arguments.length === 2 || arguments.length === 3) && Utilities.isArray(arguments[0])) {
                        moduleManager.defineModule(Utilities.generateAnonymousModule(), arguments[0], arguments[1], arguments[2]);
                        return
                    }
                    throw new Error("Unrecognized require call");
                }
                return RequireFunc.config = function(params, shouldOverwrite) {
                    typeof shouldOverwrite == "undefined" && (shouldOverwrite = !1);
                    moduleManager.configure(params, shouldOverwrite)
                }, RequireFunc.getConfig = function() {
                    return moduleManager.getConfigurationOptions()
                }, RequireFunc.reset = function() {
                    moduleManager = new ModuleManager(scriptLoader)
                }, RequireFunc
            }();
        isWebWorker || (window.onload = function() {
            for (var main, scripts = document.getElementsByTagName("script"), i = 0, len = scripts.length; i < len; i++)
                if (main = scripts[i].getAttribute("data-main"), main) break;
            main && moduleManager.defineModule(Utilities.generateAnonymousModule(), [main], null, null, new ModuleIdResolver(new Configuration, ""))
        });
        typeof global.require != "undefined" && typeof global.require != "function" && RequireFunc.config(global.require);
        global.define = DefineFunc;
        global.require = RequireFunc
    }
})(AMDLoader || (AMDLoader = {}));