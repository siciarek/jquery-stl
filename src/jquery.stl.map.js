/**
 * jQuery STL map Plugin v0.5b
 * https://github.com/siciarek/jquery-stl
 *
 * Copyright 2012, Jacek Siciarek
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

    $.stl.map = function (size) {

        var excludedMembers = {};

        var containerMembers = $.stl.getContainerMembers(excludedMembers, true);
        var uniqueMembers = {};

        var instance = $.extend({type: 'map'}, containerMembers, uniqueMembers);
        instance.create(size);
        return instance;
    };

})(jQuery, document);
