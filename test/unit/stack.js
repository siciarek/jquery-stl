
module("stack", {
    setup: function() {
        stack = jQuery.stl.stack();
    },
    teardown: function() {
        delete stack;
    }
});

test("constructor test (no params)", 5, function () {
    stack = null;

    ok(stack == null, 'Initially variable should be NULL');

    stack = jQuery.stl.stack();

    ok(stack != null, 'Constructor returned value != NULL');
    ok(typeof stack.new != 'undefined', 'stack has defined constructor');
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
        /Container has no required interface/,
        'constructor should throw exception if container given as parameter has no required interface'
    );

    throws(
        function () {
            stack = $.stl.stack({});
        },
        /Container has no required interface/,
        'constructor should throw exception if container given as parameter has no required interface'
    );

    throws(
        function () {
            stack = $.stl.stack("ABC");
        },
        /Container has no proper type/,
        'constructor should throw exception if container given as parameter has no proper type'
    );

    throws(
        function () {
            stack = $.stl.stack(123);
        },
        /Container has no proper type/,
        'constructor should throw exception if container given as parameter has no proper type'
    );

    throws(
        function () {
            stack = $.stl.stack(function(){});
        },
        /Container has no proper type/,
        'constructor should throw exception if container given as parameter has no proper type'
    );
});
