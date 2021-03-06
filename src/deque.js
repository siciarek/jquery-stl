$.stl.deque = function (size) {

    var containerMembers = $.stl.getContainerMembers();
    var uniqueMembers = {};
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

    var instance = $.extend({type: 'deque'}, containerVariables, containerMembers, uniqueMembers);
    instance.create(size);

    instance.iterator = new random_access_iterator(instance, 1, 0, size - 1);

    instance.begin = function () {
        return this.iterator;
    };
    instance.end = function () {
        return this.iterator.last();
    };

    return instance;
};
