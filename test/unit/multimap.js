
module("multimap", {
    setup: function() {
        multimap = jQuery.stl.multimap();
    },
    teardown: function() {
        delete multimap;
    }
});

test("constructor test (no params)", 5, function () {
    var multimap = null;

    ok(multimap == null, 'Initially variable should be NULL');

    multimap = jQuery.stl.multimap();

    ok(multimap != null, 'Constructor returned value != NULL');
    ok(typeof multimap.new != 'undefined', 'multimap has defined constructor');
    equal(typeof multimap, 'object', 'Constructor returned object');
    equal(multimap.type, 'multimap', 'Constructor returned proper multimap object');
});

test("constructor test (with params)", 1, function () {
    equal(multimap.size(), 0, 'multimap size should equal to 0 if constructor was called with no params');
});

test("destructor test", 1, function () {
    ok(typeof multimap.destructor != 'undefined', 'multimap has defined destructor');
});


test("members existence test", function () {

    var expectedMembers = stlTypesMembers.multimap;

    var members = {variables: [], methods: []};

    for(var key in multimap) {

        if(key == 'container')
        {
            continue;
        }

        if(typeof multimap[key] == 'function')
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
