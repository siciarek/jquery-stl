
module("set", {
    setup: function() {
        set = jQuery.stl.set();
    },
    teardown: function() {
        delete set;
    }
});

test("constructor test (no params)", 5, function () {
    var set = null;

    ok(set == null, 'Initially variable should be NULL');

    set = jQuery.stl.set();

    ok(set != null, 'Constructor returned value != NULL');
    ok(typeof set.new != 'undefined', 'set has defined constructor');
    equal(typeof set, 'object', 'Constructor returned object');
    equal(set.type, 'set', 'Constructor returned proper set object');
});

test("constructor test (with params)", 1, function () {
    equal(set.size(), 0, 'set size should equal to 0 if constructor was called with no params');
});

test("destructor test", 1, function () {
    ok(typeof set.destructor != 'undefined', 'set has defined destructor');
});


test("members existence test", function () {

    var expectedMembers = stlTypesMembers.set;

    var members = {variables: [], methods: []};

    for(var key in set) {

        if(key == 'container')
        {
            continue;
        }

        if(typeof set[key] == 'function')
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
