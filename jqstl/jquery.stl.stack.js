/**
 * jQuery STL stack Plugin v0.4b
 * https://github.com/siciarek/jquery-stl
 *
 * Copyright 2012, Jacek Siciarek
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

    $.stl.stack = function (container) {

        var defaultMembers = $.stl.getContainerAdaptorMembers({
            front: true,
            back: true
        });

        var containerShouldHave = [
            'back',
            'push_back',
            'pop_back'
        ];


        var uniqueMembers = {};

        var instance = $.extend({type: 'stack'}, defaultMembers, uniqueMembers);

        instance.new(container);

        for(var i in containerShouldHave)
        {
            var method = containerShouldHave[i];
            if(typeof instance.container[method] == 'undefined')
            {
                throw new JqueryStlContainerInvalidInterfaceException();
            }
        }

        return instance;
    };

})(jQuery, document);
