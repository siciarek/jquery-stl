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

    /*
     ### value_type 	Container 	The type of object, T, stored in the vector.
     pointer 	Container 	Pointer to T.
     reference 	Container 	Reference to T
     const_reference 	Container 	Const reference to T
     ### size_type 	Container 	An unsigned integral type.
     difference_type 	Container 	A signed integral type.
     iterator 	Container 	Iterator used to iterate through a vector.
     const_iterator 	Container 	Const iterator used to iterate through a vector.
     reverse_iterator 	Reversible Container 	Iterator used to iterate backwards through a vector.
     const_reverse_iterator 	Reversible Container 	Const iterator used to iterate backwards through a vector.

     ### iterator begin() 	Container 	Returns an iterator pointing to the beginning of the vector.
     ### iterator end() 	Container 	Returns an iterator pointing to the end of the vector.
     ### const_iterator begin() const 	Container 	Returns a const_iterator pointing to the beginning of the vector.
     ### const_iterator end() const 	Container 	Returns a const_iterator pointing to the end of the vector.
     ### reverse_iterator rbegin() 	Reversible Container 	Returns a reverse_iterator pointing to the beginning of the reversed vector.
     ### reverse_iterator rend() 	Reversible Container 	Returns a reverse_iterator pointing to the end of the reversed vector.
     ### const_reverse_iterator rbegin() const 	Reversible Container 	Returns a const_reverse_iterator pointing to the beginning of the reversed vector.
     ### const_reverse_iterator rend() const 	Reversible Container 	Returns a const_reverse_iterator pointing to the end of the reversed vector.

     ### size_type size() const 	Container 	Returns the size of the vector.
     ### size_type max_size() const 	Container 	Returns the largest possible size of the vector.
     ### size_type capacity() const 	vector 	See below.
     ### bool empty() const 	Container 	true if the vector's size is 0.

     ### reference operator[](size_type n) 	Random Access Container 	Returns the n'th element.
     ### const_reference operator[](size_type n) const 	Random Access Container 	Returns the n'th element.

     ### vector() 	Container 	Creates an empty vector.
     ### vector(size_type n) 	Sequence 	Creates a vector with n elements.
     vector(size_type n, const T& t) 	Sequence 	Creates a vector with n copies of t.
     vector(const vector&) 	Container 	The copy constructor.
     template <class InputIterator> vector(InputIterator, InputIterator) Sequence 	Creates a vector with a copy of a range.
     ~vector() 	Container 	The destructor.
     vector& operator=(const vector&) 	Container 	The assignment operator
     ### void reserve(size_t) 	vector 	See below.

     ### reference front() 	Sequence 	Returns the first element.
     ### const_reference front() const 	Sequence 	Returns the first element.
     ### reference back() 	Back Insertion Sequence 	Returns the last element.
     ### const_reference back() const 	Back Insertion Sequence 	Returns the last element.

     ### void push_back(const T&) 	Back Insertion Sequence 	Inserts a new element at the end.
     ### void pop_back() 	Back Insertion Sequence 	Removes the last element.
     void swap(vector&) 	Container 	Swaps the contents of two vectors.

     iterator insert(iterator pos, const T& x)  Sequence 	Inserts x before pos.
     template <class InputIterator> void insert(iterator pos, InputIterator f, InputIterator l) Sequence 	Inserts the range [first, last) before pos.
     void insert(iterator pos, size_type n, const T& x) Sequence 	Inserts n copies of x before pos.

     iterator erase(iterator pos) 	Sequence 	Erases the element at position pos.
     iterator erase(iterator first, iterator last) 	Sequence 	Erases the range [first, last)

     void clear() 	Sequence 	Erases all of the elements.
     void resize(n, t = T()) 	Sequence 	Inserts or erases elements at the end such that the size becomes n.

     bool operator==(const vector&, const vector&) Forward Container 	Tests two vectors for equality. This is a global function, not a member function.
     bool operator<(const vector&,  const vector&) Forward Container 	Lexicographical comparison. This is a global function, not a member function.

     # size_type capacity() const 	Number of elements for which memory has been allocated. capacity() is always greater than or equal to size(). [2] [3]
     # void reserve(size_type n) 	If n is less than or equal to capacity(), this call has no effect. Otherwise, it is a request for allocation of additional memory. If the request is successful, then capacity() is greater than or equal to n; otherwise, capacity() is unchanged. In either ca
     */

    $.stl.vector = function (size) {

        size = size || 0;

        var instance = {

            /**
             * Variables for C++ STL compatibility
             */
            value_type: 'var',

            size_type: typeof 1,

            container: [],

            /**
             * Implementation of C++ STL vector operator[]
             *
             * @param n
             */
            at: function (n) {
                if (this.size() < n + 1) {
                    throw 'Index Out of Bound';
                }

                return this.container[n];
            },

///////////

            front: function () {
                if (this.size() == 0) {
                    return null;
                }
                return this.at(0);
            },

            back: function () {
                if (this.size() == 0) {
                    return null;
                }
                return this.at(this.size() - 1);
            },

            begin: function () {
                if (this.size() == 0) {
                    return null;
                }
                return this.at(0);
            },

            end: function () {
                if (this.size() == 0) {
                    return null;
                }
                return this.at(this.size() - 1);
            },

            rbegin: function () {
                return this.begin();
            },

            rend: function () {
                return this.end();
            },

///////////

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
             * Added for C++ STL <vector> compatibilty,
             * in this implementation is max_size alias.
             *
             * @return {Number}
             */
            capacity: function () {
                return this.max_size();
            },

            /**
             * Changes size of base container.
             *
             * @return {Number}
             */
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
                        this.container.push(0);
                    }

                    for (var i = 0; i < temp.length; i++) {
                        this.container[i] = temp[i];
                    }
                }
            },

            /**
             * Returns true if vector instance has no elements, false otherwise.
             *
             * @return {Boolean}
             */
            empty: function () {
                return this.container.length == 0;
            },

///////////

            insert: function (pos, value) {

            },

            erase: function (first, last) {

            },

            push_back: function (value) {
                this.container.push(value);
            },

            pop_back: function () {
                return this.container.pop();
            },

            new: function (size) {
                this.reserve(size);
            }
        };

        instance.new(size);

        return instance;
    };

})
    (jQuery, document);
