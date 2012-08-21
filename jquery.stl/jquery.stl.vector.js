/**
 * jQuery STL vector Plugin v1.0b
 * https://github.com/siciarek/jquery-stl
 *
 * Copyright 2012, Jacek Siciarek
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

    $.stl.vector = function (size) {

        var containerMembers = $.stl.getContainerMembers({
            push_front: true,
            pop_front: true
        });

        var uniqueMembers = {

            capacity: function () {
                return this.size();
            },

            reserve: function (size) {
                if (size > this.max_size()) {
                    throw 'Max jQuery.stl.vector size is: ' + this.max_size();
                }

                if (size > 0) {

                    var temp = [];

                    for (var i = 0; i < this.size(); i++) {
                        temp[i] = this.container[i];
                    }

                    this.container = [];

                    for (var i = 0; i < size; i++) {
                        this.container.push(null);
                    }

                    for (var i = 0; i < temp.length; i++) {
                        this.container[i] = temp[i];
                    }
                }
            }
        };

        var instance = $.extend({}, containerMembers, uniqueMembers);
        instance.new(size);
        return instance;
    };

})
    (jQuery, document);
