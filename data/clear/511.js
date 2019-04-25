var locationApiUrl = "https://dev.virtualearth.net/REST/v1/Locations";
var apiGeoKey = "sTpxHCYR4FTGnCG8Xyvs~8zP_m4PenqxGvLqv1RWjNw~AhUOabwx86TCto41-4IWTZBf3Yi7d-nSDWkDs1IhANlZcCvWyv9XC5BSUp343Pcu";
var geocodeRequest = "";
var itemToGet = "";
var mapPointFlag = false;
var mapPointCount = 0;
var userLat = 34.058333;
var userLong = -118.230902;
var closestLocationLat = 0.0;
var closestLocationLong = 0.0;
var entryType = "";
var locatedCitySpan = document.getElementsByClassName("located-city-name");
var locationTextBoxValue = "";
var calculatedCity = "";
var cookieSetFlag = false;
var myLocation = "";
var cookieName = "selectedLocationDetails";
var cookieValue = null;
var cookies = null;

//Add Set Location to Utility Links Bar

function showLocation() {
    var newItem = document.createElement("LI");
    newItem.setAttribute('id', 'setLocation');
    var textnode = document.createTextNode("Set Location");
    newItem.appendChild(textnode);
    var list = document.getElementsByClassName("utility-links");
    list[1].insertBefore(newItem, list[1].childNodes[2]);
    var locationItem = document.getElementById("setLocation");
    locationItem.innerHTML = '<a role="tab" data-toggle="collapse" href="#locationSettings" onclick="showAddLocation()" aria-expanded="false" aria-controls="locationSettings" class="geo-lookup" aria-selected="false" id="ui-collapse-649"><span class="ca-gov-icon-compass" aria-hidden="true"></span> <span class="located-city-name">Set Location</span></a>';
}

showLocation();

//Modify locationSettings Div area and show it

function showAddLocation() {

    var element = document.getElementById("locationSettings");
    var classDetails = element.className;
    if (classDetails.indexOf("show") > -1) {
        element.className = element.className.replace(/\bshow\b/g, "");
    } else {
        element.className = element.className.replace(/\bcollapsed\b/g, "collapsed show");
        var locationSettingHtml = "";

        cookies = document.cookie.split(/\s*;\s*/);

        for (var i = 0; i < cookies.length; i++) {
            if (cookies[i].substring(0, cookieName.length + 1) === cookieName + "=") {
                cookieValue = decodeURIComponent(cookies[i].substring(cookieName.length + 1));
                myLocation = cookieValue;
                break;
            }
        }

        if (myLocation.length > 0) {
            cookieSetFlag === true;
            var selectedLocationDetailParts = myLocation.split("^");
            locationTextBoxValue = selectedLocationDetailParts[2];
        } else {
            locationTextBoxValue = "";
        }

        locationSettingHtml += "    <div class=\"container p-y\">";
        locationSettingHtml += "		<button type=\"button\" class=\"close\" data-toggle=\"collapse\" data-target=\"#locationSettings\" aria-expanded=\"false\" aria-controls=\"locationSettings\" aria-label=\"Close\">";
        locationSettingHtml += "            <span aria-hidden=\"true\">&times;</span>";
        locationSettingHtml += "        </button>";
        locationSettingHtml += "            <div class=\"form-group form-inline\">";
        locationSettingHtml += "                <label for=\"locationZipCode\">Saving your California location allows us to provide you with more relevant information.</label><br />";
        locationSettingHtml += "                <input type=\"input\" class=\"form-control\" id=\"locationInput\" placeholder=\"Enter Zip Code or City\" value = \"" + locationTextBoxValue + "\" style=\"margin-right: 3px;margin-top: 2px;\">";
        locationSettingHtml += "                <button type=\"button\" onclick=\"processZipCity();\" class=\"btn btn-default btn-md\" style=\"margin-right: 3px;margin-top: 3px;\">Set Location</button>";
        locationSettingHtml += "                <button id=\"locationClear\" onclick=\"clearSelectedLocation();\" type=\"button\" class=\"btn btn-default btn-md\" style=\"margin-right: 10px;margin-top: 3px;\">Clear</button>";
        locationSettingHtml += "                <button type=\"button\" class=\"btn btn-default btn-md\" onclick=\"getMyLocationDetails();\" style=\"margin-top: 3px;\">Use My Location</button>";
        locationSettingHtml += "            </div>";
        locationSettingHtml += "        </div>";

        element.innerHTML = locationSettingHtml;
    }

    document.getElementById("locationInput")
        .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                processZipCity();
                blur();
            }
        });

    var clearTestText = locationTextBoxValue;
    if (!(clearTestText.length > 1)) {
        document.getElementById("locationClear").disabled = true;
    } else {
        document.getElementById("locationClear").disabled = false;
    }
}

// ##############################################  SET HOMEPAGE BACKGROUND IMAGE ##############################################

function showRegionalImage() {

    var processBackgroundImage = true;

    var imageLocationExistsTestVariable = document.getElementById("spanCaption");
    if (typeof imageLocationExistsTestVariable === 'undefined' || imageLocationExistsTestVariable === null) {
        processBackgroundImage = false;
    }

    var today = new Date();
    today.setHours(today.getHours() - 8);

    var userDateTime = new Date(today.toString()).toISOString();
    computedBackgroundLocationValues = "";
    var itemsToShow = "";
    var regionImageFlag = false;
    var regionImageCount = 0;

    function getRegionImageInfo() {
        if (regionImageCount === 0) {
            processJsonData.provideImageNameDetails(userLong, userLat, userDateTime);
        }
        regionImageCount += 1;
        if (regionImageFlag === false) {
            if (regionImageCount < 200) {
                itemsToShow = computedBackgroundLocationValues;
                if (itemsToShow.length > 0) {
                    regionImageFlag = true;
                    setTimeout(getRegionImageInfo, 100);
                } else {
                    setTimeout(getRegionImageInfo, 100);
                }
            } else {
                regionImageFlag = true;
                itemsToShow = "no details";
                setTimeout(getRegionImageInfo, 100);
            }
        } else {
            var itemsArray = itemsToShow.split("|");

            var regionStorage = "";

            switch (itemsArray[0].toUpperCase()) {
                case "UPSTATE CALIFORNIA":
                    regionStorage = "us";
                    break;
                case "SACRAMENTO":
                    regionStorage = "sac";
                    break;
                case "BAY AREA":
                    regionStorage = "ba";
                    break;
                case "CENTRAL COAST":
                    regionStorage = "cc";
                    break;
                case "CENTRAL VALLEY":
                    regionStorage = "cv";
                    break;
                case "CENTRAL SIERRA":
                    regionStorage = "cs";
                    break;
                case "LOS ANGELES":
                    regionStorage = "la";
                    break;
                case "ORANGE":
                    regionStorage = "or";
                    break;
                case "INLAND EMPIRE":
                    regionStorage = "ie";
                    break;
                case "SAN DIEGO/IMPERIAL":
                    regionStorage = "sd";
                    break;
                default:
                    regionStorage = "none";
            }

            if (userLong === -118.230902 && userLat === 34.058333) {
                regionStorage = "-" + itemsArray[2].toLowerCase() + "-" + itemsArray[1].toLowerCase();
            } else {
                regionStorage = regionStorage + "-" + itemsArray[2].toLowerCase() + "-" + itemsArray[1].toLowerCase();
            }
            var homepageBackgroundImageArray = [];
            homepageBackgroundImageArray[0] = "us-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Winter/Day/GettyImages-183408195.jpg|Fern Canyon in Redwood National Park|State of California";
            homepageBackgroundImageArray[1] = "us-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Winter/Day/GettyImages-622903540.jpg|Mount Shasta|State of California";
            homepageBackgroundImageArray[2] = "us-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Winter/Day/GettyImages-615387556.jpg|Hidden Beach in Del Norte Coast Redwoods State Park|State of California";
            homepageBackgroundImageArray[3] = "us-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Winter/Night/GettyImages-509054139.jpg|Trinidad Lighthouse|State of California";
            homepageBackgroundImageArray[4] = "us-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Winter/Night/GettyImages-650151608.jpg|Shasta Caverns|State of California";
            homepageBackgroundImageArray[5] = "us-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/UpState/Winter/Night/GettyImages-546006690.jpg|Sundial Bridge|State of California";
            homepageBackgroundImageArray[6] = "sac-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Winter/Day/GettyImages-167374170.jpg|Rainbow Bridge|State of California";
            homepageBackgroundImageArray[7] = "sac-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Winter/Day/Winter-Day-090-P66699.jpg|Old Sacramento State Historic Park|California State Parks";
            homepageBackgroundImageArray[8] = "sac-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Winter/Day/Winter-Day-090-P71929.jpg|Sugar Pine State Park|California State Parks";
            homepageBackgroundImageArray[9] = "sac-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Winter/Night/GettyImages-89156284.jpg|Emerald Bay|State of California";
            homepageBackgroundImageArray[10] = "sac-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Winter/Night/GettyImages-91813393.jpg|Delta King Hotel|State of California";
            homepageBackgroundImageArray[11] = "sac-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Sacramento-Region/Winter/Night/GettyImages-167079984.jpg|Sacramento River near Tower Bridge|State of California";
            homepageBackgroundImageArray[12] = "ba-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Winter/Day/GettyImages-468064405.jpg|Golden Gate Bridge San Francisco|State of California";
            homepageBackgroundImageArray[13] = "ba-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Winter/Day/GettyImages-472849244.jpg|San Francisco Harbor|State of California";
            homepageBackgroundImageArray[14] = "ba-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Winter/Day/Parks-090-P91716.jpg|Emeryville Crescent State Marine Reserve|California State Parks";
            homepageBackgroundImageArray[15] = "ba-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Winter/Night/GettyImages-147314487.jpg|Presidio Park|State of California";
            homepageBackgroundImageArray[16] = "ba-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Winter/Night/GettyImages-477851056.jpg|Transamerica Pyramid|State of California";
            homepageBackgroundImageArray[17] = "ba-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Bay-Area/Winter/Night/GettyImages-504788164.jpg|Twin Peaks|State of California";
            homepageBackgroundImageArray[18] = "cc-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Winter/Day/Bixby-Bridge-Khomishen.jpg|Bixby Creek Bridge|State of California";
            homepageBackgroundImageArray[19] = "cc-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Winter/Day/Parks-090-P85388.jpg|Robert H. Meyer Memorial State Beach|California State Parks";
            homepageBackgroundImageArray[20] = "cc-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Winter/Day/Parks-090-P84011.jpg|Morro Strand State Beach|California State Parks";
            homepageBackgroundImageArray[21] = "cc-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Winter/Night/GettyImages-484508880.jpg|Point Pinos Monterey|State of California";
            homepageBackgroundImageArray[22] = "cc-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Winter/Night/GettyImages-968539992.jpg|Morro Bay|State of California";
            homepageBackgroundImageArray[23] = "cc-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Coast/Winter/Night/GettyImages-500734570.jpg|Ventura California|State of California";
            homepageBackgroundImageArray[24] = "cv-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Winter/Day/GettyImages-479830548.jpg|California State Route 155|State of California";
            homepageBackgroundImageArray[25] = "cv-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Winter/Day/GettyImages-529249535.jpg|Kings River|State of California";
            homepageBackgroundImageArray[26] = "cv-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Winter/Day/GettyImages-518012227.jpg|Wind Turbines near Bakersfield|State of California";
            homepageBackgroundImageArray[27] = "cv-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Winter/Night/GettyImages-477499518.jpg|Farmhouse in rural countryside|State of California";
            homepageBackgroundImageArray[28] = "cv-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Winter/Night/SRA-090-P86997.jpg|San Luis Reservoir State Recreation Area|California State Parks";
            homepageBackgroundImageArray[29] = "cv-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Valley/Winter/Night/GettyImages-498491011.jpg|San Luis Reservoir|State of California";
            homepageBackgroundImageArray[30] = "cs-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Winter/Day/GettyImages-508070596.jpg|Yosemite Valley along the Merced River|State of California";
            homepageBackgroundImageArray[31] = "cs-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Winter/Day/GettyImages-623771514.jpg|Hot Creek Geologic Site|State of California";
            homepageBackgroundImageArray[32] = "cs-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Winter/Day/Parks-090-P74609.jpg|Calaveras Big Trees State Park|California State Parks";
            homepageBackgroundImageArray[33] = "cs-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Winter/Night/GettyImages-494305198.jpg|Twin Lakes at Mammoth Lakes|State of California";
            homepageBackgroundImageArray[34] = "cs-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Winter/Night/GettyImages-1028386212.jpg|South Tufa at Mono Lake|State of California";
            homepageBackgroundImageArray[35] = "cs-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Central-Sierra/Winter/Night/GettyImages-638043258.jpg|Yosemite Park|State of California";
            homepageBackgroundImageArray[36] = "la-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Winter/Day/GettyImages-466502378.jpg|Los Angeles Cityscape|State of California";
            homepageBackgroundImageArray[37] = "la-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Winter/Day/GettyImages-639915340.jpg|Los Angeles County|State of California";
            homepageBackgroundImageArray[38] = "la-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Winter/Day/GettyImages-623099772.jpg|Santa Monica Beach|State of California";
            homepageBackgroundImageArray[39] = "la-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Winter/Night/GettyImages-488811698.jpg|Downtown Los Angeles|State of California";
            homepageBackgroundImageArray[40] = "la-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Winter/Night/GettyImages-638015368.jpg|Los Angeles Hills|State of California";
            homepageBackgroundImageArray[41] = "la-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Los-Angeles/Winter/Night/GettyImages-504746580.jpg|Los Angeles|State of California";
            homepageBackgroundImageArray[42] = "or-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Winter/Day/GettyImages-467925506.jpg|Laguna Beach Canyon Hiking Trail|State of California";
            homepageBackgroundImageArray[43] = "or-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Winter/Day/GettyImages-626434804.jpg|Laguna Beach|State of California";
            homepageBackgroundImageArray[44] = "or-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Winter/Day/SP-090-P78550.jpg|Crystal Cove State Park|California State Parks";
            homepageBackgroundImageArray[45] = "or-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Winter/Night/GettyImages-146835642.jpg|Beach in Orange County|State of California";
            homepageBackgroundImageArray[46] = "or-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Winter/Night/GettyImages-522487393.jpg|Venice Beach|State of California";
            homepageBackgroundImageArray[47] = "or-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Orange-County/Winter/Night/GettyImages-508815680.jpg|Huntington Beach|State of California";
            homepageBackgroundImageArray[48] = "ie-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Winter/Day/GettyImages-499403336.jpg|Joshua Tree National Park|State of California";
            homepageBackgroundImageArray[49] = "ie-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Winter/Day/GettyImages-915594002.jpg|Mount San Jacinto|State of California";
            homepageBackgroundImageArray[50] = "ie-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Winter/Day/GettyImages-533010055.jpg|Lake Fulmor in San Jacinto Mountains Reserve|State of California";
            homepageBackgroundImageArray[51] = "ie-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Winter/Night/GettyImages-468652782.jpg|Joshua Tree National Park|State of California";
            homepageBackgroundImageArray[52] = "ie-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Winter/Night/GettyImages-520640877.jpg|San Bernardino Mountains|State of California";
            homepageBackgroundImageArray[53] = "ie-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/Inland-Empire/Winter/Night/GettyImages-520638071.jpg|Coachella Valley|State of California";
            homepageBackgroundImageArray[54] = "sd-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Winter/Day/GettyImages-464831546.jpg|Hotel del Coronado|State of California";
            homepageBackgroundImageArray[55] = "sd-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Winter/Day/GettyImages-506540906.jpg|Jolla Beach Pier|State of California";
            homepageBackgroundImageArray[56] = "sd-day-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Winter/Day/Winter-Day-090-P79061.jpg|Anza-Borrego Desert State Park|California State Parks";
            homepageBackgroundImageArray[57] = "sd-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Winter/Night/Winter-Night-090-P82320.jpg|Silver Strand State Beach in San Diego|California State Parks";
            homepageBackgroundImageArray[58] = "sd-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Winter/Night/GettyImages-909410960.jpg|La Jolla|State of California";
            homepageBackgroundImageArray[59] = "sd-night-spring|https://california.azureedge.net/cdt/CAgovPortal/Hero-Banner-Images/San-Diego-Imperial/Winter/Night/GettyImages-936649786.jpg|San Diego|State of California";

            var homepageArrayLength = homepageBackgroundImageArray.length;

            var selectedRegionArray = [];
            var selectedRegionCount = 0;

            for (var i = 0; i < homepageArrayLength; i++) {
                if (homepageBackgroundImageArray[i].indexOf(regionStorage) > -1) {
                    selectedRegionArray[selectedRegionCount] = homepageBackgroundImageArray[i];
                    selectedRegionCount += 1;
                }
            }

            var arrayItemToUse = selectedRegionArray[Math.floor(Math.random() * selectedRegionCount)];

            var itemToUseDataSet = arrayItemToUse.split("|");



            document.getElementById("spanCaption").innerHTML = itemToUseDataSet[2];
            document.getElementById("abbrCopy").innerHTML = "&copy; " + itemToUseDataSet[3];
            document.getElementsByClassName("et_pb_section_0")[0].style.backgroundImage = "url('" + itemToUseDataSet[1] + "')";

            document.getElementsByClassName("main-content")[0].style.paddingTop = "5px";



        }
    }


    if (processBackgroundImage === true) {

        setTimeout(getRegionImageInfo, 250);
    }
}

// ############################################## SHOW FILTED MAP ##############################################

function showFilteredMap() {
    var mapPointFlag = false;
    var mapPointCount = 0;

    function getMapPoints() {
        if (mapPointCount === 0) {
            document.getElementById("map_toc").innerHTML = "";
            closestLocationLat = 0.0;
            closestLocationLong = 0.0;
            if (isAgencyPageFlag === true) {
                processJsonData.showFilteredAgencyMap('map_toc', 'map_array', 'mapssection', userLong, userLat, pageAgencyId, 500, 'en');
            } else {
                processJsonData.showFilteredServiceMap('map_toc', 'map_array', 'mapssection', userLong, userLat, pageAgencyId, pageServiceId, 500, 'en');
            }
        }
        mapPointCount += 1;
        if (mapPointFlag === false) {
            if (mapPointCount < 150) {
                var mapTestVariable = document.getElementById("map_toc");
                if (typeof mapTestVariable === 'undefined' || mapTestVariable === null) {
                    setTimeout(getMapPoints, 100);
                } else {
                    if (document.getElementById("map_toc").innerHTML.indexOf("-- DONE --") > -1) {
                        var mapItems = document.getElementById("map_array").innerHTML;
                        set_servicesesrimap(11, closestLocationLong, closestLocationLat, mapItems, 'esrimap_canvas');
                        var elt = document.getElementById('service_locations');
                        elt.style.cssText = "";
                        mapPointFlag = true;
                    } else {
                        setTimeout(getMapPoints, 100);
                    }
                }
            } else {
                mapPointFlag = true;
            }
        }
    }

    var serviceLocationTestVariable = document.getElementById("mapssection");
    if (!(typeof serviceLocationTestVariable === 'undefined' || serviceLocationTestVariable === null)) {
        setTimeout(getMapPoints, 750);
    }
}

// Process location based on selection
cookies = document.cookie.split(/\s*;\s*/);

for (var i = 0; i < cookies.length; i++) {
    if (cookies[i].substring(0, cookieName.length + 1) === cookieName + "=") {
        cookieValue = decodeURIComponent(cookies[i].substring(cookieName.length + 1));
        myLocation = cookieValue;
        break;
    }
}

if (myLocation.length > 0) {
    cookieSetFlag === true;
    var selectedLocationDetailParts = myLocation.split("^");
    userLat = selectedLocationDetailParts[0];
    userLong = selectedLocationDetailParts[1];
    locatedCitySpan[0].innerHTML = selectedLocationDetailParts[2];
    if (document.getElementById('setLocationMapButton') !== null) {
        document.getElementById('setLocationMapButton').innerHTML = "<span class=\"ca-gov-icon-compass\" aria-hidden=\"true\"></span>&nbsp; Showing results near " + selectedLocationDetailParts[2];
    }
} else {
    userLat = 34.058333;
    userLong = -118.230902;
}

showFilteredMap();
showRegionalImage();


function clearSelectedLocation() {
    setCookie("selectedLocationDetails", '', 365);
    document.getElementById("locationClear").disabled = true;
    locatedCitySpan[0].innerHTML = "Set Location";
    document.getElementById('locationInput').value = "";
    if (document.getElementById('setLocationMapButton') !== null) {
        document.getElementById('setLocationMapButton').innerHTML = "<span class=\"ca-gov-icon-compass\" aria-hidden=\"true\"></span>&nbsp; Set location to show nearby results";
    }
    userLat = 34.058333;
    userLong = -118.230902;
    showFilteredMap();
    showRegionalImage();
}

function getMyLocationDetails() {
    mapPointFlag = false;
    mapPointCount = 0;
    getMyLatLong();
}

function getMyLatLong() {
    entryType = "Dynamic";
    if (mapPointCount === 0) {
        userLat = 34.058333;
        userLong = -118.230902;
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    mapPointCount += 1;
    if (mapPointFlag === false) {
        if (userLat === 34.058333) {
            if (userLong === -118.230902) {
                //console.log(userLat + " -  " + userLong + " (" + mapPointCount + ") ");
            } else {
                mapPointFlag = true;
            }
        } else {
            mapPointFlag = true;
        }
        if (mapPointCount >= 700) {
            mapPointFlag = true;
        }
        window.setTimeout(getMyLatLong, 100); /* this checks the flag every 100 milliseconds*/
    } else {
        itemToGet = userLat + "," + userLong;
        geocodeRequest = locationApiUrl + "/" + itemToGet + "?maxResults=1&key=" + apiGeoKey + "&jsonp=GeocodeCallback";
        CallRestService(geocodeRequest);
    }
}

function showPosition(position) {
    userLong = position.coords.longitude;
    userLat = position.coords.latitude;
}

function processZipCity() {
    entryType = "Manual";
    itemToGet = document.getElementById('locationInput').value;

    if (isNaN(itemToGet)) {
        itemToGet = itemToGet + ", CA";
        geocodeRequest = locationApiUrl + "?query=" + itemToGet + "&maxResults=1&key=" + apiGeoKey + "&jsonp=GeocodeCallback"; //", CA" +
        CallRestService(geocodeRequest);
    } else {
        if (itemToGet.length === 5) {
            geocodeRequest = locationApiUrl + "?query=" + itemToGet + "&maxResults=1&key=" + apiGeoKey + "&jsonp=GeocodeCallback";
            CallRestService(geocodeRequest);
        } else {
            alert('Location not found.');
            document.getElementById('locationInput').value = "";
        }
    }
}

function GeocodeCallback(result) {
    document.getElementById('locationInput').value = "";

    var locationHolder = locatedCitySpan[0].innerHTML;

    if (typeof result.resourceSets[0].resources[0] !== "undefined") {

        if (result.resourceSets[0].resources[0].address.adminDistrict === "CA") {
            if (entryType === "Manual") {
                calculatedCity = "";
                calculatedCity += result.resourceSets[0].resources[0].address.locality;
                document.getElementById('locationInput').value = calculatedCity;
                if (document.getElementById('setLocationMapButton') !== null) {
                    if (calculatedCity !== "undefined") {
                        document.getElementById('setLocationMapButton').innerHTML = "<span class=\"ca-gov-icon-compass\" aria-hidden=\"true\"></span>&nbsp; Showing results near " + calculatedCity;
                    }
                }
            } else {
                calculatedCity = result.resourceSets[0].resources[0].address.formattedAddress;
                calculatedCityParts = calculatedCity.split(",");

                if (calculatedCityParts.length > 2) {
                    calculatedCity = calculatedCityParts[calculatedCityParts.length - 2];
                }

                if (calculatedCity.length > 0) {
                    document.getElementById('locationInput').value = calculatedCity;
                    if (document.getElementById('setLocationMapButton') !== null) {
                        document.getElementById('setLocationMapButton').innerHTML = "<span class=\"ca-gov-icon-compass\" aria-hidden=\"true\"></span>&nbsp; Showing results near " + calculatedCity;
                    }
                } else {
                    calculatedCity = "undefined";
                }
            }

            if (calculatedCity.indexOf("undefined") > -1) {
                if (typeof result.resourceSets[0].resources[0].address.adminDistrict2 === 'undefined') {
                    locatedCitySpan[0].innerHTML = "Not Found";
                    document.getElementById('locationInput').value = "";
                } else {
                    calculatedCity = result.resourceSets[0].resources[0].address.adminDistrict2;
                    if (calculatedCity.indexOf("undefined") > -1) {
                        locatedCitySpan[0].innerHTML = "Not Found";
                        document.getElementById('locationInput').value = "";
                    } else {
                        var countyFormatting = result.resourceSets[0].resources[0].address.adminDistrict2.replace("Co.", "County");
                        locatedCitySpan[0].innerHTML = countyFormatting;
                        document.getElementById('locationInput').value = countyFormatting;
                        if (document.getElementById('setLocationMapButton') !== null) {
                            document.getElementById('setLocationMapButton').innerHTML = "<span class=\"ca-gov-icon-compass\" aria-hidden=\"true\"></span>&nbsp; Showing results near " + countyFormatting;
                        }
                    }
                }
            } else {
                locatedCitySpan[0].innerHTML = calculatedCity;
            }

            if (!(locatedCitySpan[0].innerHTML === "Not Found")) {
                if (typeof result.resourceSets[0].resources[0].point.coordinates[0] !== "undefined" && typeof result.resourceSets[0].resources[0].point.coordinates[1] !== "undefined") {
                    document.getElementById("locationClear").disabled = false;
                    var selectLocationToStore = result.resourceSets[0].resources[0].point.coordinates[0] + "^" + result.resourceSets[0].resources[0].point.coordinates[1] + "^" + document.getElementById('locationInput').value;
                    setCookie("selectedLocationDetails", selectLocationToStore, 365);
                    showAddLocation();
                    userLat = result.resourceSets[0].resources[0].point.coordinates[0];
                    userLong = result.resourceSets[0].resources[0].point.coordinates[1];
                    showFilteredMap();
                    showRegionalImage();
                }
            } else {
                locatedCitySpan[0].innerHTML = locationHolder;
                alert('Location not found.');
            }
        } else {
            alert('Please enter a location in California.');
        }
    } else {
        alert('Please enter a location in California.');
    }
}

function CallRestService(request) {
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", request);
    document.body.appendChild(script);
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 86400000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}