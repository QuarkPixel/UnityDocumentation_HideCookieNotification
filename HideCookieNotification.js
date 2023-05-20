// ==UserScript==
// @name        HideCookieNotification
// @namespace   https://github.com/QuarkPixel/UnityDocumentation_HideCookieNotification
// @description Hide cookie notification in local documentation.
// @match       file:///*/Editor/Data/Documentation/*.html*
// @version     0.0.2
// @author     QuarkPixel
// @grant       none
// ==/UserScript==

{
	let style = document.createElement('style')
	style.type = 'text/css'
	let text = document.createTextNode('#onetrust-consent-sdk{display: none;}')
	style.appendChild(text)
	let head = document.getElementsByTagName('head')[0]
	head.appendChild(style)
}
