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
            remove: function (value) {
                var temp = [];

                for(var i = 0; i < this.size(); i++) {
                    if(this.container[i] != value) {
                        temp.push(this.container[i]);
                    }
                }

                this.container = temp;
            },
            remove_if: function () {

            },
            unique: function (binary_pred) {

                binary_pred = binary_pred | function(a, b) { return a == b; };

                var tempa = {};
                var temp = [];

                for(var i = 0; i < this.size(); i++) {
                    tempa[this.container[i].toSource()] = i;
                }

                for(var key in tempa) {
                    temp.push(this.container[tempa[key]]);
                }

                this.container = temp;
            },
            merge: function () {

            },
            sort: function () {

            },
            reverse: function () {
                var temp = [];

                for(var i = 0; i < this.size(); i++) {
                    temp.unshift(this.container[i]);
                }

                this.container = temp;
            }
        };

        var instance = $.extend({type: 'list'}, containerMembers, uniqueMembers);
        instance.new(size);
        return instance;
    };

})(jQuery, document);
