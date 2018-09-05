const platforms = {
    'Linux': "https://github.com/Michael78912/sci-10-notes/blob/master/dist/sci-10-notes-linux?raw=true",
    'Win32': "https://github.com/Michael78912/sci-10-notes/blob/master/dist/sci-10-notes-win32.exe?raw=true"
}

function nice_platform () {
    return "Download For " + {
        'Linux': 'Linux',
        'Win32': 'Windows'
    }[navigator.platform]
}

function get_link () {
    return platforms[navigator.platform];
}

function main () {
    console.log(document.getElementById("main-button-link"));
    console.log(document.getElementById("main-button"))
    console.log(document.getElementById("1"))
    document.getElementById("main-button-link").href = get_link();
    document.getElementById("main-button").innerHTML = nice_platform();
}

