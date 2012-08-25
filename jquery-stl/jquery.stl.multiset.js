/**
 * jQuery STL multiset Plugin v0.5b
 * https://github.com/siciarek/jquery-stl
 *
 * Copyright 2012, Jacek Siciarek
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

    $.stl.multiset = function (size) {

        var excludedMembers = {

            get: true
       };

        var containerMembers = $.stl.getContainerMembers(excludedMembers, true);
        var uniqueMembers = {};

        var instance = $.extend({type: 'multiset'}, containerMembers, uniqueMembers);
        instance.new(size);
        return instance;
    };

})(jQuery, document);
