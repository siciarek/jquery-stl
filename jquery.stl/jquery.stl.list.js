/**
 * jQuery STL list Plugin v1.0b
 * https://github.com/siciarek/jquery-stl
 *
 * Based on: http://www.cplusplus.com/reference/stl/
 *
 * Copyright 2012, Jacek Siciarek
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

    $.stl.list = function (size) {

        var containerMembers = $.stl.getContainerMembers({
            at: true,
            get: true
        });

        var uniqueMembers = {
            splice: function () {

            },
            remove: function () {

            },
            remove_if: function () {

            },
            unique: function () {

            },
            merge: function () {

            },
            sort: function () {

            },
            reverse: function () {

            }
        };

        var instance = $.extend({}, containerMembers, uniqueMembers);
        instance.new(size);
        return instance;
    };

})(jQuery, document);
