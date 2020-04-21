'use strict';

$('#list').on('click', function () {
    // chrome.tabs.create({ url: 'chrome://bookmarks/' });
    chrome.tabs.create({ url: 'dashboard.html' });
})

$('#sync').on('click', syncBookmark);

function send(bookmarks) {
    console.log(bookmarks);
}

function syncBookmark() {
    let bookmarks = {};
    chrome.bookmarks.getTree(function (bookmarkTreeNodes) {
        dumpTreeNodes(bookmarkTreeNodes, bookmarks);
    });
    send(bookmarks);
}

function dumpTreeNodes(bookmarkNodes, node) {

    for (let i = 0; i < bookmarkNodes.length; i++) {
        dumpNode(bookmarkNodes[i], node);
    }
    return;
}

function dumpNode(bookmarkNode, node) {
    let currentNode = node;
    if (bookmarkNode.title) {
        if (bookmarkNode.url) {
            node.urls[bookmarkNode.title] = bookmarkNode.url;
        } else {
            node[bookmarkNode.title] = { urls: {} };
            currentNode = node[bookmarkNode.title];
        }
    }
    if (bookmarkNode.children && bookmarkNode.children.length > 0) {
        dumpTreeNodes(bookmarkNode.children, currentNode);
    }
    return;
}
