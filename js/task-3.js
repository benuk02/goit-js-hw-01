"use strict"
function getElementWidth(content, padding, border) {
    content = Number.parseFloat(content);
    padding = Number.parseFloat(padding);
    border = Number.parseFloat(border);
    const getElementWidth = content + (2 * padding) + (2 * border);
    return getElementWidth;

}

