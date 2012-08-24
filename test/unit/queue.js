
module("queue", {
    setup: function() {
        queue = jQuery.stl.queue();
    },
    teardown: function() {
        delete queue;
    }
});

test("size, empty, front, back, push, pop methods test", 104, function () {
    var size = 25;
    var temp = [];

    strictEqual(queue.empty(), true, 'empty queue');
    strictEqual(queue.size(), 0, 'empty queue size check');

    for(var i = 0; i < size; i++) {
        var element = Math.random();
        queue.push(element);
        strictEqual(element, queue.back(), 'back');
        temp.unshift(element);
    }

    strictEqual(queue.empty(), false, 'not empty queue');
    strictEqual(queue.size(), size, 'not empty queue size check');

    for(i = temp.length - 1; i >= 0; i--) {
        strictEqual(i + 1, queue.size(), 'size');
        strictEqual(temp[i], queue.front(), 'top');
        strictEqual(temp[i], queue.pop(), 'pop');
    }
});

test("constructor test (no params)", 5, function () {
    queue = null;

    ok(queue == null, 'Initially variable should be NULL');

    queue = jQuery.stl.queue();

    ok(queue != null, 'Constructor returned value != NULL');
    ok(typeof queue.new != 'undefined', 'queue has defined constructor');
    equal(typeof queue, 'object', 'Constructor returned object');
    equal(queue.type, 'queue', 'Constructor returned proper queue object');
});

test("constructor test (with params)", 7, function () {

    equal(queue.container.type, 'deque', 'if connstructor is called with no params container should be "deque"');

    var vector = $.stl.vector();

    queue = $.stl.queue(vector);

    equal(queue.container.type, 'vector', 'you can change container');

    throws(
        function () {
            var set = $.stl.set();
            queue = $.stl.queue(set);
        },
        JqueryStlContainerInvalidInterfaceException,
        'constructor should throw exception if container given as parameter has no required interface'
    );

    throws(
        function () {
            queue = $.stl.queue({});
        },
        JqueryStlContainerInvalidInterfaceException,
        'constructor should throw exception if container given as parameter has no required interface'
    );

    throws(
        function () {
            queue = $.stl.queue("ABC");
        },
        JqueryStlObjectTypeMismatchException,
        'constructor should throw exception if container given as parameter has no proper type'
    );

    throws(
        function () {
            queue = $.stl.queue(123);
        },
        JqueryStlObjectTypeMismatchException,
        'constructor should throw exception if container given as parameter has no proper type'
    );

    throws(
        function () {
            queue = $.stl.queue(function(){});
        },
        JqueryStlObjectTypeMismatchException,
        'constructor should throw exception if container given as parameter has no proper type'
    );
});


test("members existence test", function () {

    var expectedMembers = stlTypesMembers.queue;

    var members = {variables: [], methods: []};

    for(var key in queue) {

        if(key == 'container')
        {
            continue;
        }

        if(typeof queue[key] == 'function')
        {
            members['methods'].push(key);
        }
        else
        {
            members['variables'].push(key);
        }
    }

    deepEqual(expectedMembers, members);
});

