// all this file does is to choose a random icon to 
// display as favicon.ico.

function setIcon() {
    var icon = Math.floor(Math.random()) * 2;
    var iconName;
    if (icon === 0) {
        iconName = 'next.png';
    } else {
        iconName = 'cursor.png';
    }
    (function() {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = iconName;
        document.getElementsByTagName('head')[0].appendChild(link);
    })();
}

setIcon()