
module("vector", {
    setup: function() {
        vector = jQuery.stl.vector();
    },
    teardown: function() {
        delete vector;
    }
});

test("front and back test", function() {

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

test("constructor test (with params)", 4, function () {

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
        'constructor should throw exception if maximum available size was exceeded'
    );
});

test("destructor test", 1, function () {
    ok(typeof vector.destructor != 'undefined', 'vector has defined destructor');
});


test("members existence test", function () {

    var expectedMembers = stlTypesMembers.vector;

    var members = {variables: [], methods: []};

    for(var key in vector) {

        if(key == 'container')
        {
            continue;
        }

        if(typeof vector[key] == 'function')
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
