
module("bitset", {
    setup: function() {
        bitset = jQuery.stl.bitset();
    },
    teardown: function() {
        delete bitset;
    }
});

test("constructor test (no params)", 5, function () {
    var bitset = null;

    ok(bitset == null, 'Initially variable should be NULL');

    bitset = jQuery.stl.bitset();

    ok(bitset != null, 'Constructor returned value != NULL');
    ok(typeof bitset.new != 'undefined', 'bitset has defined constructor');
    equal(typeof bitset, 'object', 'Constructor returned object');
    equal(bitset.type, 'bitset', 'Constructor returned proper bitset object');
});

test("constructor test (with params)", 1, function () {
    equal(bitset.size(), 0, 'bitset size should equal to 0 if constructor was called with no params');
});

test("members existence test", function () {

    var expectedMembers = stlTypesMembers.bitset;

    var members = {variables: [], methods: []};

    for(var key in bitset) {

        if(key == 'container')
        {
            continue;
        }

        if(key == 'operators' || typeof bitset[key] == 'function')
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
