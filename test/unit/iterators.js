module("iterators", {
    setup: function () {
        iterator = {};
        testcollection = {
            container: [2, 3, 4],


            at: function (n) {

                if (n >= this.container.length) {
                    throw new JqueryStlOutOfRangeException();
                }

                return this.container[n];
            },
            size: function () {
                return this.container.length;
            }
        };

        vector = {
            container: [],

            begin: function () {
                return new random_access_iterator(this, 0);
            },

            end: function () {
                return new random_access_iterator(this, this.size());
            },

            push_back: function (val) {
                this.container.push(val);
            },

            at: function (n) {

                if (n >= this.container.length) {
                    throw new JqueryStlOutOfRangeException();
                }

                return this.container[n];
            },

            size: function () {
                return this.container.length;
            }
        };
    },
    teardown: function () {
        delete iterator;
    }
});

test("random_access_iterator constructor test", function () {

    throws(
        function () {
            iterator = new random_access_iterator();
        },
        JqueryStlNullPointerException,
        'method should throw exception if no collection was given as a parameter'
    );

    throws(
        function () {
            iterator = new random_access_iterator(0);
        },
        JqueryStlObjectTypeMismatchException(),
        'method should throw exception if collection is of invalid type'
    );

    throws(
        function () {
            iterator = new random_access_iterator({});
        },
        JqueryStlObjectInvalidInterfaceException(),
        'method should throw exception if collection has invalid interface'
    );

    iterator = new random_access_iterator(testcollection, 0);
    ok(true);


    for (i = 0; i < testcollection.container.length; i++) {
        strictEqual(testcollection.container[i], iterator.val());
        iterator.pp();
    }

    throws(
        function () {
            iterator.val();
        },
        JqueryStlOutOfRangeException(),
        'method should throw exception if iterator is out of range'
    );
});

test('random_access_iterator val, pp test', function() {
    var size = 2;
    var temp = [];

    vector = $.stl.vector();

    for (var i = 0; i < size; i++) {
        var x = i;
        vector.push_back(x);
        temp.push(x);
    }

    var xx = 0;

    for (var it = vector.begin(); it.lt(vector.end()); it.pp()) {
        strictEqual(it.val(), temp.shift(), 'ok ' + xx++);
    }

    strictEqual(temp.length, 0);
});


test('reverse_random_access_iterator val, pp test', function() {
    var size = 10;
    var temp = [];

    vector = $.stl.vector();

    for (var i = 0; i < size; i++) {
        var x = i;
        vector.push_back(x);
        temp.push(x);
    }

    var xx = 0;

    for (var rit = vector.rbegin(); rit.lt(vector.rend()); rit.pp()) {
        strictEqual(rit.val(), temp.pop(), 'ok ' + xx++);
    }

    strictEqual(temp.length, 0);
});
