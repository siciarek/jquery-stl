
module("stack", {
    setup: function() {
        stack = jQuery.stl.stack();
    },
    teardown: function() {
        delete stack;
    }
});

test("size, empty, top, push, pop methods test", 104, function () {
    var size = 25;
    var temp = [];

    strictEqual(stack.empty(), true, 'empty stack');
    strictEqual(stack.size(), 0, 'empty stack size check');

    for(var i = 0; i < size; i++) {
        var element = Math.random();
        stack.push(element);
        strictEqual(element, stack.top(), 'top');
        temp.push(element);
    }

    strictEqual(stack.empty(), false, 'not empty stack');
    strictEqual(stack.size(), size, 'not empty stack size check');

    for(i = temp.length - 1; i >= 0; i--) {
        strictEqual(i + 1, stack.size(), 'size');
        strictEqual(temp[i], stack.top(), 'top');
        strictEqual(temp[i], stack.pop(), 'pop');
    }
});

test("constructor test (no params)", 5, function () {
    stack = null;

    ok(stack == null, 'Initially variable should be NULL');

    stack = jQuery.stl.stack();

    ok(stack != null, 'Constructor returned value != NULL');
    ok(typeof stack.create != 'undefined', 'stack has defined constructor');
    equal(typeof stack, 'object', 'Constructor returned object');
    equal(stack.type, 'stack', 'Constructor returned proper stack object');
});

test("constructor test (with params)", 7, function () {

    equal(stack.container.type, 'deque', 'if connstructor is called with no params container should be "deque"');

    var vector = $.stl.vector();

    stack = $.stl.stack(vector);

    equal(stack.container.type, 'vector', 'you can change container');

    throws(
        function () {
            var set = $.stl.set();
            stack = $.stl.stack(set);
        },
        JqueryStlObjectInvalidInterfaceException,
        'constructor should throw exception if container given as parameter has no required interface'
    );

    throws(
        function () {
            stack = $.stl.stack({});
        },
        JqueryStlObjectInvalidInterfaceException,
        'constructor should throw exception if container given as parameter has no required interface'
    );

    throws(
        function () {
            stack = $.stl.stack("ABC");
        },
        JqueryStlObjectTypeMismatchException,
        'constructor should throw exception if container given as parameter has no proper type'
    );

    throws(
        function () {
            stack = $.stl.stack(123);
        },
        JqueryStlObjectTypeMismatchException,
        'constructor should throw exception if container given as parameter has no proper type'
    );

    throws(
        function () {
            stack = $.stl.stack(function(){});
        },
        JqueryStlObjectTypeMismatchException,
        'constructor should throw exception if container given as parameter has no proper type'
    );
});


test("members existence test", function () {

    var expectedMembers = stlTypesMembers.stack;

    var members = {variables: [], methods: []};

    for(var key in stack) {

        if(key == 'container')
        {
            continue;
        }

        if(typeof stack[key] == 'function')
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

