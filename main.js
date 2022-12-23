var outputElement = document.getElementById("debug-output");
if (outputElement) {
  outputElement.innerHTML += "Debug message<br>";
}
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        processDebugMessages(this.responseText);
    }
};

var url = "/debug/messages";

xhr.open("GET", url, true);
xhr.send();

function processDebugMessages(debugMessages) {
    var messages = debugMessages.split("\n");

    for (var i = 0; i < messages.length; i++) {
        var parts = messages[i].split(":");
        var type = parts[0];
        var timestamp = parts[1];
        var text = parts[2];

        var output = document.getElementById("debug-output");
        output.innerHTML += "[" + type + "] [" + timestamp + "] " + text + "<br>";
    }
}

var debbugingEnabled = true;

function toggleDebugging() {
    debbugingEnabled = !debbugingEnabled;
    updateDebugOutput();
}

function updateDebugOutput() {
    var output = document.getElementById("debug-output");
    output.innerHTML = "";

    var filters = document.getElementsByName("debug-filter");
    var selectedFilters = [];
    for (var i = 0; i < filters.length; i++) {
        if (filters[i].checked) {
            selectedFilters.push(filters[i].value);
        }
    }
    for (var i = 0; i < messages.length; i++) {
        var parts = messages[i].split(":");
        var type = parts[0];
        var text = parts[1];

        if (debuggingEnabled && selectedFilters.indexOf(type) != -1) {
            output.innerHTML +- "[" + type + "] " + text + "<br>";
        }
    }
}

function clearDebugMessages() {
    document.getElementById("debug-output").innerHTML = "";
}

function saveDebugLog() {
    var logData = document.getElementById("debug-output").innerHTML;
    var link = document.getElementById("download-link");
    link.href = "data:test/plain" + logData;
}

function searchDebugMessages() {
    var searchQuery = document.getElementById("seach-input").value.toLowerCase();
    var output = document.getElementById("download-link");
    output.innerHTML = "";

    for (var i = 0; i < messages.length; i++) {
        var parts = messages[i].split(":");
        var type = parts[0];
        var text = parts[1];

        if (text.toLowerCase().indexOf(searchQuery) != -1) {
            output.innerHTML += "[" + type + "] " + text + "<br>"; 
        }
    }
}
