/**
 * RBE Utilities & Functions module
 * This file is meant to be a part of www.resourcebasedeconomy.org website environment
 * Purpose: custom functions storage, used by any other module inside RBE namespace
 * Author: <scsmash3r@gmail.com>
 * Copyleft (ɔ) 2019 [SC]Smash3r
 * @uses [jquery.js >= 1.12.4] as primary functional dependency
 * @preserve
 */

/**
 * JSHint options
 * @see https://jshint.com/docs/options/
 */
/* globals jQuery: false */
/* jshint esversion: 6 */
/* jshint maxparams: 3 */
/* jshint undef: true */
/* jshint unused: true */
/* jshint browser: true */

/* Define global namespaces */
if ("undefined" == typeof RBE) {
    var RBE = {};
}

/* Sub-entity in RBE that we will be working with */
if (!RBE.utils) {
    RBE.utils = {};
}

/* Define RBE.utils module when jQuery document is ready */
jQuery(document).ready(function() {
    (function() {
        "use strict";

        /**
         * Calculate a 32 bit FNV-1a hash
         * Found here: https://gist.github.com/vaiorabbit/5657561
         * Ref.: http://isthe.com/chongo/tech/comp/fnv/
         *
         * @param {string} str the input value
         * @param {boolean} [asString=false] set to true to return the hash value as
         *     8-digit hex string instead of an integer
         * @param {integer} [seed] optionally pass the hash of the previous chunk
         * @returns {integer | string}
         */
        var hashFnv32a = function(str, asString, seed) {
            /*jshint bitwise:false */
            var i, l,
                hval = (seed === undefined) ? 0x811c9dc5 : seed;

            for (i = 0, l = str.length; i < l; i++) {
                hval ^= str.charCodeAt(i);
                hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
            }
            if (asString) {
                // Convert to 8 digit hex string
                return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
            }
            return hval >>> 0;
        };

        /**
         * Cuts string to defined length
         *
         * @param {string} [string] the input value
         * @param {integer} [length] how much symbols from the beginning to cut
         * @returns {string}
         */
        var cutString = function(string, length = 100) {
            if (jQuery.trim(string).length <= length) {
                return string;
            }

            return jQuery.trim(string).substring(0, length).split(" ").slice(0, -1).join(" ") + "...";
        };

        /* Take out only needed info to global scope */
        this.hashFnv32a = hashFnv32a;
        this.cutString = cutString;

    }).call(RBE.utils);

    /* This functions namespace should not be initted; it only can be used inside another modules */
    window.console.log('RBE.utils object created');
});