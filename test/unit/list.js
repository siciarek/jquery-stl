
module("list", {
    setup: function() {
        list = jQuery.stl.list();
    },
    teardown: function() {
        delete list;
    }
});

test("constructor test (no params)", 5, function () {
    var list = null;

    ok(list == null, 'Initially variable should be NULL');

    list = jQuery.stl.list();

    ok(list != null, 'Constructor returned value != NULL');
    ok(typeof list.new != 'undefined', 'list has defined constructor');
    equal(typeof list, 'object', 'Constructor returned object');
    equal(list.type, 'list', 'Constructor returned proper list object');
});

test("constructor test (with params)", 4, function () {

    var list = null;

    list = jQuery.stl.list();
    equal(list.size(), 0, 'list size should equal to 0 if constructor was called with no params');

    var size = 0;
    list = jQuery.stl.list(size);
    equal(list.size(), size, 'list size should equal to 0 if constructor was called with 0');

    size = 125;
    list = jQuery.stl.list(size);
    equal(list.size(), size, 'list size should be equal to ' + size + ' if constructor was called with ' + size);

    size = list.max_size() + 1;

    throws(
        function () {
            list = jQuery.stl.list(size);
        },
        'constructor should throw exception if maximum available size was exceeded'
    );
});

test("destructor test", 1, function () {
    ok(typeof list.destructor != 'undefined', 'list has defined destructor');
});


test("members existence test", function () {

    var expectedMembers = stlTypesMembers.list;

    var members = {variables: [], methods: []};

    for(var key in list) {

        if(key == 'container')
        {
            continue;
        }

        if(typeof list[key] == 'function')
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
