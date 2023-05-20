// ==UserScript==
// @name        HideCookieNotification
// @description Hide cookie notification in local documentation.
// @match       file:///*/Editor/Data/Documentation/*.html*
// @version     0
// @grant       none
// ==/UserScript==

;(function () {
	'use strict'
	let css = `
    #onetrust-consent-sdk {display: none;
}    
    `
	GM_addStyle(css)
})
