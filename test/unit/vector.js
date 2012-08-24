module("vector", {
    setup: function () {
        vector = jQuery.stl.vector();
    },
    teardown: function () {
        delete vector;
    }
});

test("iterators (begin, end) test", function () {

    expect(22);

    var size = 10;
    var temp = [];

    for (var i = 0; i <= size; i++) {
        var x = Math.random();
        vector.push_back(x);
        temp.push(x);
    }

    var c = 0;

    for (var it = vector.begin(); it.lt(vector.end()); it.pp()) {
        strictEqual(it.val(), temp[c++]);
    }

    vector = $.stl.vector();
    temp = [];

    for (var i = 0; i <= size; i++) {
        var x = {name: 'element' + i, number: Math.random()};
        vector.push_back(x);
        temp.push(x);
    }

    c = 0;

    for (var it = vector.begin(); it.lt(vector.end()); it.pp()) {
        strictEqual(it.val(), temp[c++]);
    }
});

test("swap test", function () {

    expect(19);

    var first = $.stl.vector();
    var second = $.stl.vector();

    var f = [4, 5, 6];
    var s = [104, 105, 106, 107];

    for (var i in f) {
        first.push_back(f[i]);
    }

    for (var i in s) {
        second.push_back(s[i]);
    }

    strictEqual(first.size(), f.length);
    strictEqual(second.size(), s.length);

    for (var i = 0; i < first.size(); i++) {
        strictEqual(first.at(i), f[i]);
    }

    for (var i = 0; i < second.size(); i++) {
        strictEqual(second.at(i), s[i]);
    }

    first.swap(second);

    strictEqual(first.size(), s.length);
    strictEqual(second.size(), f.length);

    for (var i = 0; i < first.size(); i++) {
        strictEqual(first.at(i), s[i]);
    }

    for (var i = 0; i < second.size(); i++) {
        strictEqual(second.at(i), f[i]);
    }

    throws(
        function () {
            first.swap({});
        },
        JqueryStlObjectTypeMismatchException,
        'method should throw exception if no vector object was given as a parameter'
    );
});

test("front and back test", function () {

    var myvector = $.stl.vector();

    myvector.push_back(78);
    myvector.push_back(16);

    // now front equals 78, and back 16

    equal(myvector.front(), 78);

    myvector = $.stl.vector();

    myvector.push_back(10);
    myvector.push_back(40);
    myvector.push_back(90);

    equal(myvector.back(), 90);

    myvector.pop_back();

    equal(myvector.back(), 40);
});

test("constructor test (no params)", 5, function () {
    var vector = null;

    ok(vector == null, 'Initially variable should be NULL');

    vector = jQuery.stl.vector();

    ok(vector != null, 'Constructor returned value != NULL');
    ok(typeof vector.new != 'undefined', 'vector has defined constructor');
    equal(typeof vector, 'object', 'Constructor returned object');
    equal(vector.type, 'vector', 'Constructor returned proper vector object');
});

test("constructor test (with params)", function () {

    expect(105);

    var vector = null;

    vector = jQuery.stl.vector();
    equal(vector.size(), 0, 'vector size should equal to 0 if constructor was called with no params');

    var size = 0;
    vector = jQuery.stl.vector(size);
    equal(vector.size(), size, 'vector size should equal to 0 if constructor was called with 0');

    size = 125;
    vector = jQuery.stl.vector(size);
    equal(vector.size(), size, 'vector size should be equal to ' + size + ' if constructor was called with ' + size);

    size = vector.max_size() + 1;

    throws(
        function () {
            vector = jQuery.stl.vector(size);
        },
        JqueryStlMaximumContainerSizeException,
        'constructor should throw exception if maximum available size was exceeded'
    );

    size = 100;
    var value = 124;

    vector = jQuery.stl.vector(size, value);
    equal(vector.size(), size, 'vector size should be equal to ' + size + ' if constructor was called with ' + size);

    while (!vector.empty()) {
        var x = vector.back();
        strictEqual(x, value, 'Repetitive sequence constructor test');
        vector.pop_back();
    }
});

test("destructor test", 1, function () {
    ok(typeof vector.destructor != 'undefined', 'vector has defined destructor');
});


test("members existence test", function () {

    var expectedMembers = stlTypesMembers.vector;

    var members = {variables: [], methods: []};

    for (var key in vector) {

        if (key == 'container') {
            continue;
        }

        if (typeof vector[key] == 'function') {
            members['methods'].push(key);
        }
        else {
            members['variables'].push(key);
        }
    }

    deepEqual(expectedMembers, members);
});
