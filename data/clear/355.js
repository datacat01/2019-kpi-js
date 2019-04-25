//Waiting onload to be fired to start init
var isInitialized = false;

function init_rapid_yaft() {
    if (isInitialized) {
        return;
    }
    isInitialized = true;

    // rapidConf and yaftConf objects should be defined in the mark up

    // this is needed for nav timings to be fired
    myRapidInstance.beaconPerformanceData({
        perf_navigationtime: 2
    }, {
        /*additional logdata*/ });


    var perfData = {};

    //Yaft init
    window.YAFT.init(yaftConf, function(aftData, aftError) {
        const aft = Math.round(aftData.aft);
        const timeToVisuallyComplete = Math.round(aftData.visuallyComplete);
        const startRender = Math.round(aftData.startRender);

        if (aft) {
            recordPerfData('common', 'AFT', aft);
            recordPerfData('common', 'AFT1', aft);
        }

        if (timeToVisuallyComplete) {
            recordPerfData('common', 'VIC', timeToVisuallyComplete);
        }

        if (startRender) {
            recordPerfData('common', 'STR', startRender);
        }


        recordPerfData('user', 'foo', 1000);

        myRapidInstance.beaconPerformanceData(perfData);
        perfData = {};
    });

    //collect ad load times call YAFT.triggerCustomTiming before the AFT calculation finishes it
    var adLoadTimeout = yaftConf.maxWaitTime - 100;
    setTimeout(function() {
        if (typeof darlaAdTimings !== "undefined") {
            for (var adId in darlaAdTimings) {
                var adStartTime = darlaAdTimings[adId].started;
                var adLoadTime = darlaAdTimings[adId].loaded || adLoadTimeout;
                window.YAFT.triggerCustomTiming(adId, adStartTime, adLoadTime);
            }
        }

    }, adLoadTimeout);

    // This is helper function which is used in YAFT init callback function to record user and common timings
    function recordPerfData(type, name, value) {
        if (type === 'common') {
            if (!perfData.perf_commontime) {
                perfData.perf_commontime = {};
            }

            if (!perfData.perf_commontime.initialPageLoad) {
                perfData.perf_commontime.initialPageLoad = {};
            }

            perfData.perf_commontime.initialPageLoad[name] = value;

            return true;
        } else if (type === 'user') {
            if (!perfData.perf_usertime) {
                perfData.perf_usertime = {};
            }

            if (!perfData.perf_usertime.utm) {
                perfData.perf_usertime.utm = {};
            }

            perfData.perf_usertime.utm[name] = value;

            return true;
        }

        return false;
    }
}

//if you do not need images to be loaded to do stuff, use DOMContentLoaded event
//document.addEventListener('DOMContentLoaded', init_rapid_yaft, false);
window.addEventListener('load', init_rapid_yaft, false);