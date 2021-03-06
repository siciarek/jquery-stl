$.stl.vector = function (size, value) {

    var containerMembers = $.stl.getContainerMembers({
        push_front: true,
        pop_front: true
    });

    var uniqueMembers = {

        /**
         *  Construct vector
         * Constructs a vector container object, initializing its contents depending on the constructor version used:
         *
         * explicit vector ( const Allocator& = Allocator() );
         *     Default constructor: constructs an empty vector, with no content and a size of zero.
         *
         * explicit vector ( size_type n, const T& value= T(), const Allocator& = Allocator() );
         *     Repetitive sequence constructor: Initializes the vector with its content set to a repetition, n times, of copies of value.
         *
         * template <class InputIterator> vector ( InputIterator first, InputIterator last, const Allocator& = Allocator() );
         *     Iteration constructor: Iterates between first and last, setting a copy of each of the sequence of elements as the content of the container.
         *
         * vector ( const vector<T,Allocator>& x );
         *     Copy constructor: The vector is initialized to have the same contents (copies) and properties as vector x.
         *
         * @param n
         * @param value
         */
        create: function (n, value) {

            n = n || -1;

            if (n < 0) {
                n = 0;
            }

            if (typeof value === 'undefined') {
                value = null;
            }

            if (n > this.max_size()) {
                throw new JqueryStlMaximumContainerSizeException();
            }

            this.container = [];

            for (var i = 0; i < n; i++) {
                this.container.push(value);
            }
        },

        capacity: function () {
            return this.size();
        },

        reserve: function (size) {
            if (size > this.max_size()) {
                throw new JqueryStlMaximumContainerSizeException();
            }

            if (size > 0) {

                var temp = [];

                for (var i = 0; i < this.size(); i++) {
                    temp[i] = this.container[i];
                }

                this.container = [];

                for (i = 0; i < size; i++) {
                    this.container.push(null);
                }

                for (i = 0; i < temp.length; i++) {
                    this.container[i] = temp[i];
                }
            }
        }
    };

    var containerVariables = {
        reference: null, // Allocator::reference
        const_reference: null, // Allocator::const_reference
        iterator: null, // Random access iterator
        const_iterator: null, // Constant random access iterator
        size_type: null, // Unsigned integral type (usually same as size_t)
        difference_type: null, // Signed integral type (usually same as ptrdiff_t)
        value_type: 'var', // T
        allocator_type: null, // Allocator
        pointer: null, // Allocator::pointer
        const_pointer: null, // Allocator::const_pointer
        reverse_iterator: null, // reverse_iterator<iterator>
        const_reverse_iterator: null // reverse_iterator<const_iterator>
    };

    var instance = $.extend({type: 'vector'}, containerVariables, containerMembers, uniqueMembers);
    instance.create(size, value);

    return instance;
};