/**
 * jQuery STL deque Plugin v1.0b
 * https://github.com/siciarek/jquery-stl
 *
 * Copyright 2012, Jacek Siciarek
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

    $.stl.deque = function (size) {

        var containerMembers = $.stl.getContainerMembers();
        var uniqueMembers = {};

        var instance = $.extend({}, containerMembers, uniqueMembers);
        instance.new(size);
        return instance;
    };

})(jQuery, document);
