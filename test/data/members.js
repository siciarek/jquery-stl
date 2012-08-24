var stlTypesMembers = {

    vector: {
        variables: [
            "type",

            "reference", // Allocator::reference
            "const_reference", // Allocator::const_reference
            "iterator", // Random access iterator
            "const_iterator", // Constant random access iterator
            "size_type", // Unsigned integral type (usually same as size_t)
            "difference_type", // Signed integral type (usually same as ptrdiff_t)
            "value_type", // T
            "allocator_type", // Allocator
            "pointer", // Allocator::pointer
            "const_pointer", // Allocator::const_pointer
            "reverse_iterator", // reverse_iterator<iterator>
            "const_reverse_iterator" // reverse_iterator<const_iterator>
        ],
        methods: [
            "new",
            "destructor",
            "asg",
            "begin",
            "end",
            "rbegin",
            "rend",
            "size",
            "max_size",
            "empty",
            "resize",
            "front",
            "back",
            "get",
            "at",
            "assign",
            "insert",
            "erase",
            "swap",
            "clear",
            "push_back",
            "pop_back",
            "capacity",
            "reserve"
        ]
    },

    deque: {
        variables: [
            "type",

            "reference", // Allocator::reference
            "const_reference", // Allocator::const_reference
            "iterator", // Random access iterator
            "const_iterator", // Constant random access iterator
            "size_type", // Unsigned integral type (usually same as size_t)
            "difference_type", // Signed integral type (usually same as ptrdiff_t)
            "value_type", // T
            "allocator_type", // Allocator
            "pointer", // Allocator::pointer
            "const_pointer", // Allocator::const_pointer
            "reverse_iterator", // reverse_iterator<iterator>
            "const_reverse_iterator" // reverse_iterator<const_iterator>
        ],
        methods: [
            "new",
            "destructor",
            "asg",
            "begin",
            "end",
            "rbegin",
            "rend",
            "size",
            "max_size",
            "empty",
            "resize",
            "front",
            "back",
            "get",
            "at",
            "assign",
            "insert",
            "erase",
            "swap",
            "clear",
            "push_front",
            "pop_front",
            "push_back",
            "pop_back"
        ]
    },

    list: {
        variables: [
            "type"
        ],
        methods: [
            "new",
            "destructor",
            "asg",
            "begin",
            "end",
            "rbegin",
            "rend",
            "size",
            "max_size",
            "empty",
            "resize",
            "front",
            "back",
            "assign",
            "insert",
            "erase",
            "swap",
            "clear",
            "push_front",
            "pop_front",
            "push_back",
            "pop_back",

            "splice",
            "remove",
            "remove_if",
            "unique",
            "merge",
            "sort",
            "reverse"

        ]
    },

    set: {
        variables: [
            'type'
        ],
        methods: [
            "new",
            "destructor",
            "asg",
            "begin",
            "end",
            "rbegin",
            "rend",
            "size",
            "max_size",
            "empty",
            "insert",
            "erase",
            "swap",
            "clear",
            "key_comp",
            "value_comp",
            "find",
            "count",
            "lower_bound",
            "upper_bound",
            "equal_range"
        ]
    },

    multiset: {
        variables: [
            'type'
        ],
        methods: [
            "new",
            "destructor",
            "asg",
            "begin",
            "end",
            "rbegin",
            "rend",
            "size",
            "max_size",
            "empty",
            "insert",
            "erase",
            "swap",
            "clear",
            "key_comp",
            "value_comp",
            "find",
            "count",
            "lower_bound",
            "upper_bound",
            "equal_range"
        ]
    },

    map: {
        variables: [
            'type'
        ],
        methods: [
            "new",
            "destructor",
            "asg",
            "begin",
            "end",
            "rbegin",
            "rend",
            "size",
            "max_size",
            "empty",
            "get",
            "insert",
            "erase",
            "swap",
            "clear",
            "key_comp",
            "value_comp",
            "find",
            "count",
            "lower_bound",
            "upper_bound",
            "equal_range"
        ]
    },

    multimap: {
        variables: [
            'type'
        ],
        methods: [
            "new",
            "destructor",
            "asg",
            "begin",
            "end",
            "rbegin",
            "rend",
            "size",
            "max_size",
            "empty",
            "insert",
            "erase",
            "swap",
            "clear",
            "key_comp",
            "value_comp",
            "find",
            "count",
            "lower_bound",
            "upper_bound",
            "equal_range"
        ]
    },

    bitset: {
        variables: [
            'type'
        ],
        methods: [
            "new",
            "operators",
            "size",
            "get",
            "count",
            "set",
            "reset",
            "flip",
            "to_ulong",
            "to_string",
            "test",
            "any",
            "none"
        ]
    },

    stack: {
        variables: [
            'type'
        ],
        methods: [
            "new",
            'size',
            'empty',
            'top',
            'push',
            'pop'
        ]
    },

    queue: {
        variables: [
            'type'
        ],
        methods: [
            "new",
            'size',
            'empty',
            'front',
            'back',
            'push',
            'pop'
        ]
    },

    priority_queue: {
        variables: [
            'type'
        ],
        methods: [
            "new",
            'size',
            'empty',
            'top',
            'push',
            'pop'
        ]
    }
};