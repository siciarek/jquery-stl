/**
 * jQuery STL stack Plugin v1.0b
 * https://github.com/siciarek/jquery-stl
 *
 * Copyright 2012, Jacek Siciarek
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

    $.stl.stack = function (container) {

        var containerMembers = $.stl.getContainerAdaptorMembers({
            front: true,
            back: true
        });

        var uniqueMembers = {};

        var instance = $.extend({type: 'stack'}, containerMembers, uniqueMembers);
        instance.new(container);
        return instance;
    };

})(jQuery, document);
