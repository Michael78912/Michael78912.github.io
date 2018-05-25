function getPlatform(){
    var p = navigator.platform;
    if (p.startsWith('Win')) {
        return "Windows";
    } else if (p.startsWith('Linux')) {
        return "Linux";
    } else {
        return "Other";
    }
}

function putPlatformOnButton() {
    var msg, errmsg;
    if (getPlatform() == "Windows") {
        msg = "download for Windows"
        errmsg = "";
    } else if (getPlatform() == "Linux") {
        msg = "download for Linux"
        errmsg = "";
    } else {
        msg = "source code"
        errmsg = "Sorry, the playable version is not available on your system :(";
    }
    document.getElementById("platform").innerHTML = msg;
    document.getElementById("errmsg").innerHTML = errmsg;
    
}