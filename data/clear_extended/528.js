function Verify() {
    function c(a) {
        a.onreadystatechange = function() {
            if (a.readyState == XMLHttpRequest.DONE)
                if (200 == a.status) {
                    var b = JSON.parse(a.responseText);
                    "function" === typeof idp.hasNatureUserProof && idp.hasNatureUserProof(b.natureUserProofExists);
                    "function" === typeof idp.institutionalLogin && idp.institutionalLogin(b.institutionNames);
                    "function" === typeof idp.ejpProofs && idp.ejpProofs(b.ejpProofs)
                } else "function" === typeof idp.ajaxError &&
                    idp.ajaxError(a.status)
        };
        a.send()
    }
    this.init = function() {
        if ("undefined" !== typeof idp) {
            if (false && "function" === typeof idp.onProofChanged) idp.onProofChanged();
            var a;
            a = new XMLHttpRequest;
            "withCredentials" in a ? (a.open("GET", "https://verify.nature.com/verify/status", !0), a.withCredentials = !0) : a = "undefined" != typeof XDomainRequest ? new XDomainRequest : null;
            null !== a && a instanceof XMLHttpRequest ? c(a) : "function" === typeof idp.ajaxNotSupported && (null === a ? idp.ajaxNotSupported("Ajax is not supported.") :
                idp.ajaxNotSupported("Ajax with cookies is not supported."))
        }
    }
}(new Verify).init();