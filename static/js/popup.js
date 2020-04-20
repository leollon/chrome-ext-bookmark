'use strict';

$('#list').on('click', function() {
    chrome.tabs.create({url: 'dashboard.html'})
})

