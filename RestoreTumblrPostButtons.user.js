// ==UserScript==
// @name         RestoreTumblrPostButtons
// @namespace    https://github.com/Saltssaumure/restore-tumblr-post-buttons
// @version      0.1
// @description  Restores the reblog/like/reply buttons to their original positions.
// @author       Saltssaumure
// @grant        GM_addStyle
// @run-at       document-start
// @include      https://www.tumblr.com/dashboard*
// @license      GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// ==/UserScript==

(function() {

    GM_addStyle (`

    /* Footer box */
    .G6mnk .MCavR {
        justify-content: flex-end;
    }

    /* Reblog etc. buttons */
    .G6mnk .MCavR .sfGru {
        margin-left: 1.5rem;
    }

    /* Note count */
    .gstmW {
        position: absolute;
        bottom: 10px;
    }

    `)

}) ();