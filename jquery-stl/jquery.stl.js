/**
 * jQuery STL Library Plugin v0.5b
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

    $.stl = {

        getContainerAdaptorMembers: function (exclude) {

            exclude = exclude || {};

            var temp = {};

            var instance = {

                container: null,

                //// basic members:

                /**
                 * Constructor
                 *
                 * @param container
                 */
                new: function (container) {

                    if (typeof container == 'undefined') {
                        container = $.stl.deque();
                    }

                    if (typeof container != 'object') {
                        throw new JqueryStlObjectTypeMismatchException();
                    }

                    this.container = container;
                },

                //// capacity:

                /**
                 * Returns actual size of the stack
                 *
                 * @return {Number}
                 */
                size: function () {
                    return this.container.size();
                },

                /**
                 * Returns true if the stack contains no elements, and false otherwise.
                 * S.empty() is equivalent to S.size() == 0.
                 *
                 * @return {Boolean}
                 */
                empty: function () {
                    return this.container.empty();
                },

                //// element access:

                front: function () {
                    return this.container.front();
                },

                back: function () {
                    return this.container.back();
                },

                /**
                 * Returns element from the top of the stack
                 * @return {*}
                 */
                top: function () {
                    return this.container.back();
                },

                //// modifiers:

                /**
                 * Adds a new element at the top of the stack, above its current top element.
                 * The content of this new element is initialized to a copy of x.
                 * @param value
                 */
                push: function (x) {
                    this.container.push_back(x);
                },

                /**
                 * Remove element
                 * Removes the element on top of the stack, effectively reducing its size by one
                 *
                 * @return {*}
                 */
                pop: function () {
                    return this.container.pop_back();
                }
            };

            for (var key in instance) {
                if (typeof exclude[key] == 'undefined') {
                    temp[key] = instance[key];
                }
            }

            return temp;
        },

        getContainerMembers: function (exclude, assoc) {

            exclude = exclude || {};
            assoc = assoc || false;

            var temp = {};

            var sequence = {

                container: [],

//// basic members:

                /**
                 * Constructor
                 *
                 * @param size
                 */
                new: function (size) {

                    if (typeof size == 'undefined') {
                        size = 0;
                    }

                    this.resize(size);
                },

                /**
                 * Destructor - TODO: make it work ;-)
                 */
                destructor: function () {
                    delete this;
                },

                /**
                 * Objects comparator, should be implemented in specific classes
                 * @param obj
                 * @return {Boolean}
                 */
                asg: function (obj) {

                    return true;
                },

//// TODO: iterators:

                begin: function () {
                    if (this.size() == 0) {
                        return null;
                    }
                    return this.container[0];
                },

                end: function () {
                    if (this.size() == 0) {
                        return null;
                    }
                    return this.container[this.size() - 1];
                },

                rbegin: function () {
                    return this.end();
                },

                rend: function () {
                    return this.begin();
                },

//// capacity:

                /**
                 * Current number of vector instance elements.
                 *
                 * @return {Number}
                 */
                size: function () {
                    return this.container.length;
                },

                /**
                 * Max number of vector elements,
                 * due to restrictions in Javascript's memory.
                 *
                 * @return {Number}
                 */
                max_size: function () {
                    return Math.pow(2, 32) - 1;
                },

                /**
                 * Returns true if vector instance has no elements, false otherwise.
                 *
                 * @return {Boolean}
                 */
                empty: function () {
                    return this.container.length == 0;
                },

                /**
                 * Changes size of base container.

                 * @param sz
                 * @param c
                 * @return {Number}
                 */
                resize: function (sz, c) {

                    if (typeof sz == 'undefined') {
                        sz = 0;
                    }

                    if (typeof c == 'undefined') {
                        c = null;
                    }

                    if (sz > this.max_size()) {
                        throw new JqueryStlMaximumContainerSizeException();
                    }

                    if (sz > 0) {

                        var temp = [];

                        for (var i = 0; i < this.size(); i++) {
                            temp[i] = this.container[i];
                        }

                        this.container = [];

                        for (var i = 0; i < sz; i++) {
                            this.container.push(c);
                        }

                        for (var i = 0; i < temp.length; i++) {
                            this.container[i] = temp[i];
                        }
                    }
                },

//// element access:

                /**
                 * Returns first element
                 * @return {*}
                 */
                front: function () {
                    if (this.size() == 0) {
                        return null;
                    }
                    return this.container[0];
                },

                /**
                 * Returns last element
                 * @return {*}
                 */
                back: function () {
                    if (this.size() == 0) {
                        return null;
                    }
                    return this.container[this.size() - 1];
                },

                /**
                 * Implementation of C++ STL vector operator[]
                 *
                 * @param n
                 */
                get: function (n) {
                    if (this.size() < n + 1) {
                        throw new JqueryStlIndexOutOfBoundException();
                    }

                    return this.container[n];
                },

                /**
                 * Access element
                 * Returns a reference to the element at position n in the vector.
                 *
                 * @param n
                 */
                at: function (n) {
                    if (this.size() < n + 1) {
                        throw new JqueryStlIndexOutOfBoundException();
                    }

                    return this.container[n];
                },

//// modifiers:

                /**
                 * Assign vector content
                 * Assigns new content to the vector object, dropping all the elements contained in the vector before the call and replacing them by those specified by the parameters:
                 * In the first version (with iterators), the new contents are a copy of the elements in the sequence between first and last (in the range [first,last)).
                 *
                 * In the second version, the new content is the repetition n times of copies of element u.
                 *
                 * @param first
                 * @param last
                 * @param n
                 * @param u
                 */
                assign: function (first, last, n, u) {
                    throw new JqueryStlNotImplementedYetException();
                },

                insert: function (pos, value) {
                    if (this.size() < pos + 1) {
                        throw new JqueryStlIndexOutOfBoundException();
                    }

                    if (pos < 0) {
                        throw new JqueryStlIndexOutOfBoundException();
                    }

                    this.container[pos] = value;
                },

                /**
                 * Erases the element at position pos.
                 * Erases the range [pos, last)
                 *
                 * @param pos
                 * @param last (optional)
                 */
                erase: function (pos, last) {
                    last = last || pos;

                    if (this.size() < last + 1) {
                        throw new JqueryStlIndexOutOfBoundException();
                    }

                    if (pos < 0) {
                        throw new JqueryStlIndexOutOfBoundException();
                    }

                    var temp = [];

                    for (var i = pos; i <= last; i++) {
                        temp.push[this.container[i]];
                    }

                    this.container = temp;
                },

                /**
                 * Swap content
                 * Exchanges the content of the vector by the content of vec, which is another vector of the same type.
                 * Sizes may differ.
                 *
                 * @param vec
                 * @throws JqueryStlObjectTypeMismatchException
                 */
                swap: function (vec) {
                    if (!(typeof vec == 'object' && typeof vec.type != 'undefined' && vec.type == this.type)) {
                        throw new JqueryStlObjectTypeMismatchException();
                    }

                    var temp = [];

                    for (var i in this.container) {
                        temp.push(this.container[i]);
                    }

                    this.clear();

                    for (var i in vec.container) {
                        this.push_back(vec.container[i]);
                    }

                    vec.clear();

                    for (var i in temp) {
                        vec.push_back(temp[i]);
                    }
                },

                /**
                 * Erases all of the elements.
                 */
                clear: function () {
                    this.erase(0, this.size() - 1);
                },

                push_front: function (value) {
                    this.container.unshift(value);
                },

                pop_front: function () {
                    return this.container.shift();
                },

                push_back: function (value) {
                    this.iterator.bindex++;
                    this.container.push(value);
                },

                pop_back: function () {
                    return this.container.pop();
                }

            };

            var associative = {

                new: function (size) {

                },

// observers:

                key_comp: function () {

                },

                value_comp: function () {

                },

// operations:

                find: function () {

                },

                count: function () {

                },

                lower_bound: function () {

                },

                upper_bound: function () {

                },

                equal_range: function () {

                }
            };

            var assoc_exclude = {
                resize: true,
                front: true,
                back: true,

                at: true,
                assign: true,

                push_front: true,
                pop_front: true,
                push_back: true,
                pop_back: true
            };

            for (var key in sequence) {

                if ((assoc == true) && (typeof assoc_exclude[key] != 'undefined')) {
                    continue;
                }

                if (typeof exclude[key] == 'undefined') {
                    temp[key] = sequence[key];
                }
            }

            if (assoc == true) {
                for (var key in associative) {
                    if (typeof exclude[key] == 'undefined') {
                        temp[key] = associative[key];
                    }
                }
            }

            return temp;
        }
    };

    var stltypes = {
        // Sequence Containers:

        vector: function () {
        },
        deque: function () {
        },
        list: function () {
        },

        // Associative Containers:

        set: function () {
        },
        multiset: function () {
        },
        map: function () {
        },
        multimap: function () {
        },
        bitset: function () {
        },

        // Container Adaptors:

        stack: function () {
        },
        queue: function () {
        },
        priority_queue: function () {
        }
    };

    $.stl = $.extend($.stl, stltypes);


    var scripts = document.getElementsByTagName('script');
    var path = null;

    for (var i in scripts) {
        if (typeof scripts[i].src != 'undefined' && scripts[i].src.match(/jquery\.stl/)) {
            var pathrx = /^(.*?jquery\.stl\.)(?:.*?)$/g;
            var match = pathrx.exec(scripts[i].src);
            path = match[1];
        }
    }

    document.write('<scr' + 'ipt type="text/javascript" src="' + path + 'exceptions' + '.js"></scr' + 'ipt>');
    document.write('<scr' + 'ipt type="text/javascript" src="' + path + 'iterators' + '.js"></scr' + 'ipt>');

    for (var type in stltypes) {
        document.write('<scr' + 'ipt type="text/javascript" src="' + path + type + '.js"></scr' + 'ipt>');
    }

})(jQuery, document);