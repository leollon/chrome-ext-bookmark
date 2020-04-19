'use strict';

let add = document.getElementById('listBookmarks');

add.addEventListener('click', function() {
    chrome.tabs.create({url: 'dashboard.html'})
})

