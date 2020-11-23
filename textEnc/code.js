$(document).ready(function () {
    $("#action").click(function () {

        var str = $("#textAction").val();

        var res = str.replace(/a/g, "@").replace(/i/g, "!").replace(/l/g, "1")
            .replace(/o/g, "0").replace(/s/g, "$").replace(/e/g, "3").replace(/A/g, "@")
            .replace(/I/g, "!").replace(/L/g, "1").replace(/O/g, "0").replace(/S/g, "$").replace(/E/g, "3");


        $("#resultAction").text(res);


    });
	
	document.getElementById("copyButton").addEventListener("click", function() {
    copyToClipboard(document.getElementById("resultAction"));
});

function copyToClipboard(elem) {
	  // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    
    // copy the selection
    var succeed;
    try {
    	  succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }
    
    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}


});
