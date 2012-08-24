/**
 * jQuery STL bitset Plugin v0.4b
 * https://github.com/siciarek/jquery-stl
 *
 * Copyright 2012, Jacek Siciarek
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

    $.stl.bitset = function (size) {

        var defaultMembers = $.stl.getContainerMembers({}, true);

        var containerMembers = {

            container: null,

            new: function(val) {

            },

            // TODO: implement operators
            operators: {
                /*
                 bitset<N>& operator&= (const bitset<N>& rhs);
                 bitset<N>& operator|= (const bitset<N>& rhs);
                 bitset<N>& operator^= (const bitset<N>& rhs);
                 bitset<N>& operator<<= (size_t pos);
                 bitset<N>& operator>>= (size_t pos);
                 bitset<N> operator~() const;
                 bitset<N> operator<<(size_t pos) const;
                 bitset<N> operator>>(size_t pos) const;
                 bool operator== (const bitset<N>& rhs) const;
                 bool operator!= (const bitset<N>& rhs) const;
                 */
            },


            size: function() {
                if(this.container == null) {
                    return 0;
                }

                this.container.length();
            },

            get: defaultMembers['get'],

            count: defaultMembers['size']
        };

        var uniqueMembers = {

            set: function() {

            },

            reset: function() {

            },

            flip: function() {

            },

            to_ulong: function() {

            },

            to_string: function() {

            },

            test: function() {

            },

            any: function() {

            },

            none: function() {

            }
        };

        var instance = $.extend({type: 'bitset'}, containerMembers, uniqueMembers);
        instance.new(size);
        return instance;
    };

})(jQuery, document);
