/**
 * jQuery STL queue Plugin v1.0b
 * https://github.com/siciarek/jquery-stl
 *
 * Copyright 2012, Jacek Siciarek
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

    $.stl.queue = function (container) {

        var containerMembers = $.stl.getContainerAdaptorMembers({
            top: true
        });

        var uniqueMembers = {
            /**
             * Remove element
             * Removes the element on top of the stack, effectively reducing its size by one
             *
             * @return {*}
             */
            pop: function () {
                return this.container.pop_front();
            }
        };

        var instance = $.extend({}, containerMembers, uniqueMembers);
        instance.new(container);
        return instance;
    };

})(jQuery, document);