
module("priority_queue", {
    setup: function() {
        priority_queue = jQuery.stl.priority_queue();
    },
    teardown: function() {
        delete priority_queue;
    }
});

test("size, empty, top, push, pop methods test", function () {

    expect(4011);

    var size = 1000;
    var temp = [];

    strictEqual(priority_queue.empty(), true, 'empty priority_queue');
    strictEqual(priority_queue.size(), 0, 'empty priority_queue size check');

    for(var i = 0; i < size; i++) {
        var element = Math.floor(Math.random() * 1000);
        priority_queue.push(element);

        temp.push(element);
        temp = temp.sort(function(a, b){ return a-b });
        temp.reverse();

        strictEqual(priority_queue.top(), temp[0], 'top');
    }

    strictEqual(priority_queue.empty(), false, 'not empty priority_queue');
    strictEqual(priority_queue.size(), size, 'not empty priority_queue size check');

    for(i = 0; i < temp.length; i++) {
        strictEqual(priority_queue.size(), size - i, 'size');
        strictEqual(priority_queue.top(), temp[i], 'top');
        strictEqual(priority_queue.pop(), temp[i], 'pop');
    }

    strictEqual(priority_queue.empty(), true, 'empty priority_queue');
    strictEqual(priority_queue.size(), 0, 'empty priority_queue size check');

//  http://www.cplusplus.com/reference/stl/priority_queue/top/

    var mypq;

    mypq = $.stl.priority_queue();

    mypq.push(10);
    mypq.push(20);
    mypq.push(15);

    strictEqual(mypq.top(), 20, 'top');

//  http://www.cplusplus.com/reference/stl/priority_queue/pop/

    mypq = $.stl.priority_queue();

    mypq.push(30);
    mypq.push(100);
    mypq.push(25);
    mypq.push(40);

    temp = [100, 40, 30, 25];

    while (!mypq.empty()) {
        strictEqual(temp.shift(), mypq.pop(), 'pop');
    }
});

test("constructor test (no params)", 5, function () {
    priority_queue = null;

    ok(priority_queue == null, 'Initially variable should be NULL');

    priority_queue = jQuery.stl.priority_queue();

    ok(priority_queue != null, 'Constructor returned value != NULL');
    ok(typeof priority_queue.new != 'undefined', 'priority_queue has defined constructor');
    equal(typeof priority_queue, 'object', 'Constructor returned object');
    equal(priority_queue.type, 'priority_queue', 'Constructor returned proper priority_queue object');
});

test("constructor test (with params)", 7, function () {

    equal(priority_queue.container.type, 'vector', 'if connstructor is called with no params container should be "deque"');

    var deque = $.stl.deque();

    priority_queue = $.stl.priority_queue(deque);

    equal(priority_queue.container.type, 'deque', 'you can change container');

    throws(
        function () {
            var set = $.stl.set();
            priority_queue = $.stl.priority_queue(set);
        },
        JqueryStlContainerInvalidInterfaceException,
        'constructor should throw exception if container given as parameter has no required interface'
    );

    throws(
        function () {
            priority_queue = $.stl.priority_queue({});
        },
        JqueryStlContainerInvalidInterfaceException,
        'constructor should throw exception if container given as parameter has no required interface'
    );

    throws(
        function () {
            priority_queue = $.stl.priority_queue("ABC");
        },
        JqueryStlObjectTypeMismatchException,
        'constructor should throw exception if container given as parameter has no proper type'
    );

    throws(
        function () {
            priority_queue = $.stl.priority_queue(123);
        },
        JqueryStlObjectTypeMismatchException,
        'constructor should throw exception if container given as parameter has no proper type'
    );

    throws(
        function () {
            priority_queue = $.stl.priority_queue(function(){});
        },
        JqueryStlObjectTypeMismatchException,
        'constructor should throw exception if container given as parameter has no proper type'
    );
});


test("members existence test", function () {

    var expectedMembers = stlTypesMembers.priority_queue;

    var members = {variables: [], methods: []};

    for(var key in priority_queue) {

        if(key == 'container')
        {
            continue;
        }

        if(typeof priority_queue[key] == 'function')
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

