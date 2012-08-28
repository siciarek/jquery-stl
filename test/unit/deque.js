
module("deque", {
    setup: function() {
        deque = jQuery.stl.deque();
    },
    teardown: function() {
        delete deque;
    }
});

test("constructor test (no params)", 5, function () {
    var deque = null;

    ok(deque == null, 'Initially variable should be NULL');

    deque = jQuery.stl.deque();

    ok(deque != null, 'Constructor returned value != NULL');
    ok(typeof deque.create != 'undefined', 'deque has defined constructor');
    equal(typeof deque, 'object', 'Constructor returned object');
    equal(deque.type, 'deque', 'Constructor returned proper deque object');
});

test("constructor test (with params)", 4, function () {

    var deque = null;

    deque = jQuery.stl.deque();
    equal(deque.size(), 0, 'deque size should equal to 0 if constructor was called with no params');

    var size = 0;
    deque = jQuery.stl.deque(size);
    equal(deque.size(), size, 'deque size should equal to 0 if constructor was called with 0');

    size = 125;
    deque = jQuery.stl.deque(size);
    equal(deque.size(), size, 'deque size should be equal to ' + size + ' if constructor was called with ' + size);

    size = deque.max_size() + 1;

    throws(
        function () {
            deque = jQuery.stl.deque(size);
        },
        'constructor should throw exception if maximum available size was exceeded'
    );
});

test("destructor test", 1, function () {
    ok(typeof deque.destructor != 'undefined', 'deque has defined destructor');
});


test("members existence test", function () {

    var expectedMembers = stlTypesMembers.deque;

    var members = {variables: [], methods: []};

    for(var key in deque) {

        if(key == 'container')
        {
            continue;
        }

        if(typeof deque[key] == 'function')
        {
            members['methods'].push(key);
        }
        else
        {
            members['variables'].push(key);
        }
    }

    deepEqual(members, expectedMembers);
});
