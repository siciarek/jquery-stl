
module("map", {
    setup: function() {
        map = jQuery.stl.map();
    },
    teardown: function() {
        delete map;
    }
});

test("constructor test (no params)", 5, function () {
    var map = null;

    ok(map == null, 'Initially variable should be NULL');

    map = jQuery.stl.map();

    ok(map != null, 'Constructor returned value != NULL');
    ok(typeof map.create != 'undefined', 'map has defined constructor');
    equal(typeof map, 'object', 'Constructor returned object');
    equal(map.type, 'map', 'Constructor returned proper map object');
});

test("constructor test (with params)", 1, function () {
    equal(map.size(), 0, 'map size should equal to 0 if constructor was called with no params');
});

test("destructor test", 1, function () {
    ok(typeof map.destructor != 'undefined', 'map has defined destructor');
});


test("members existence test", function () {

    var expectedMembers = stlTypesMembers.map;

    var members = {variables: [], methods: []};

    for(var key in map) {

        if(key == 'container')
        {
            continue;
        }

        if(typeof map[key] == 'function')
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
