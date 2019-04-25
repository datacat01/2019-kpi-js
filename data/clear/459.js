var clickLogger = {
    url: window.location.pathname,
    template: undefined,
    experiment: undefined,
    treatment: undefined,
    generalClickTrackSelector: ".cta,[data-click-track],.base-header a",
    LOG_PATH: "/survey-logging/ajax_logging/",
    logClickEvent: function() {
        var request = new XMLHttpRequest,
            data = {
                action_type: "click",
                url: clickLogger.url,
                visual_element: this.nodeName || this.type,
                cta_text: this.textContent.trim() || this.value,
                cta_order: this.getAttribute("data-order") || "",
                link_url: this.getAttribute("href") || ""
            };
        if (clickLogger.template !== undefined) {
            data["template"] = clickLogger.template
        }
        if (clickLogger.experiment !== undefined) {
            data["experiment"] = clickLogger.experiment
        }
        if (clickLogger.treatment !== undefined) {
            data["treatment"] = clickLogger.treatment
        }
        if (this.type === "radio" && this.id) {
            var selector = "label[for=" + this.id + "]";
            var label = document.querySelector(selector);
            var text = label.innerHTML || "";
            if (text) {
                data.cta_text = text
            }
        }
        var formData = new FormData;
        for (key in data) {
            formData.append(key, data[key])
        }
        request.open("POST", clickLogger.LOG_PATH, true);
        request.send(formData)
    },
    getPageLoadInfo: function() {
        var experiment_node = document.getElementById("experiment-info");
        if (experiment_node) {
            var _treatment = experiment_node.getAttribute("data-assignment"),
                _experiment = experiment_node.getAttribute("data-experiment-name");
            if (_treatment && _experiment) {
                this.treatment = _treatment;
                this.experiment = _experiment
            }
        }
        var template_node = document.getElementById("template-info");
        if (template_node) {
            var _template = template_node.getAttribute("data-template-name");
            if (_template) {
                this.template = _template
            }
        }
    },
    init: function() {
        this.getPageLoadInfo();
        var trackSelectors = [this.generalClickTrackSelector];
        for (idx in trackSelectors) {
            var clickTrackArray = document.querySelectorAll(trackSelectors[idx]);
            Array.prototype.forEach.call(clickTrackArray, function(cta) {
                cta.addEventListener("click", clickLogger.logClickEvent)
            })
        }
    }
};
document.addEventListener("DOMContentLoaded", function() {
    clickLogger.init()
});