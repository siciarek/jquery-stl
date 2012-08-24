
module("multiset", {
    setup: function() {
        multiset = jQuery.stl.multiset();
    },
    teardown: function() {
        delete multiset;
    }
});

test("constructor test (no params)", 5, function () {
    var multiset = null;

    ok(multiset == null, 'Initially variable should be NULL');

    multiset = jQuery.stl.multiset();

    ok(multiset != null, 'Constructor returned value != NULL');
    ok(typeof multiset.new != 'undefined', 'multiset has defined constructor');
    equal(typeof multiset, 'object', 'Constructor returned object');
    equal(multiset.type, 'multiset', 'Constructor returned proper multiset object');
});

test("constructor test (with params)", 1, function () {
    equal(multiset.size(), 0, 'multiset size should equal to 0 if constructor was called with no params');
});

test("destructor test", 1, function () {
    ok(typeof multiset.destructor != 'undefined', 'multiset has defined destructor');
});


test("members existence test", function () {

    var expectedMembers = stlTypesMembers.multiset;

    var members = {variables: [], methods: []};

    for(var key in multiset) {

        if(key == 'container')
        {
            continue;
        }

        if(typeof multiset[key] == 'function')
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
