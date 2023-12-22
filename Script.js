'use strict';

let btn = document.getElementsByClassName("btn_disable");
let css = ".btn_disable:hover {background: #fff; color:#000 }"
let style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);

let titles = {
    tilte: "Title",
    content: "Lorem ipsum",
    
};