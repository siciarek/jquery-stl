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
/*

 Member 	Where defined 	Description
 value_type 	stack 	See below.
 size_type 	stack 	See below.

 ### stack() 	Default Constructible 	The default constructor. Creates an empty stack.
 stack(const stack&) 	Assignable 	The copy constructor.

 stack& operator=(const stack&) 	Assignable 	The assignment operator.

 ### bool empty() const 	stack 	See below.
 ### size_type size() const 	stack 	See below.

 ### value_type& top() 	stack 	See below.
 ### const value_type& top() const 	stack 	See below.

 ### void push(const value_type&) 	stack 	See below.
 ### void pop() [3] 	stack 	See below.

 bool operator==(const stack&, const stack&) 	stack 	See below.
 bool operator<(const stack&, const stack&) 	stack 	See below.

 ### value_type 	The type of object stored in the stack. This is the same as T and Sequence::value_type.
 ### size_type 	An unsigned integral type. This is the same as Sequence::size_type.
 ### bool empty() const 	Returns true if the stack contains no elements, and false otherwise. S.empty() is equivalent to S.size() == 0.
 ### size_type size() const 	Returns the number of elements contained in the stack.
 ### value_type& top() 	Returns a mutable reference to the element at the top of the stack. Precondition: empty() is false.
 ### const value_type& top() const 	Returns a const reference to the element at the top of the stack. Precondition: empty() is false.
 ### void push(const value_type& x) 	Inserts x at the top of the stack. Postconditions: size() will be incremented by 1, and top() will be equal to x.
 ### void pop() 	Removes the element at the top of the stack. [3] Precondition: empty() is false. Postcondition: size() will be decremented by 1.
 bool operator==(const stack&, const stack&) 	Compares two stacks for equality. Two stacks are equal if they contain the same number of elements and if they are equal element-by-element. This is a global function, not a member function.
 bool operator<(const stack&, const stack&) 	Lexicographical ordering of two stacks. This is a global function, not a member function.

 */
    $.stl.stack = function (size) {

        var instance = {

            /**
             * Variables for C++ STL compatibility
             */
            value_type: 'var',

            size_type: typeof 1,

            container: null,

            empty: function () {
                return this.container.empty();
            },

            top: function () {
                this.container.back();
            },

            push: function (value) {
                this.container.push_back(value);
            },

            pop: function () {
                return this.container.pop_back();
            },

            new: function (container) {

                if (typeof container == 'undefined') {
                    throw 'No container defined';
                }

                this.container = container;
            }
        }

        instance.new(size);

        return instance;
    };

})(jQuery, document);
