$.stl.priority_queue = function (container) {

    var defaultMembers = $.stl.getContainerAdaptorMembers({
        front: true,
        back: true
    });

    var uniqueMembers = {
        /**
         * Constructor
         *
         * @param container
         */
        create: function (container) {

            if (typeof container === 'undefined') {
                container = $.stl.vector();
            }

            if (typeof container !== 'object') {
                throw new JqueryStlObjectTypeMismatchException();
            }

            this.container = container;
        },

        push: function (x) {
            this.container.push_back(x);
            this.container.container = this.container.container.sort(function (a, b) {
                return a - b;
            });
            this.container.container = this.container.container.reverse();
        },

        pop: function (x) {
            this.container.container = this.container.container.reverse();
            var element = this.container.pop_back();
            this.container.container = this.container.container.reverse();
            return element;
        },

        /**
         * Returns element from the top of the stack
         * @return {*}
         */
        top: function () {
            return this.container.front();
        }
    };

    var instance = $.extend({type: 'priority_queue'}, defaultMembers, uniqueMembers);

    var containerShouldHave = [
        'front',
        'push_back',
        'pop_back'
    ];

    instance.create(container);

    for (var i in containerShouldHave) {
        if (containerShouldHave.hasOwnProperty(i)) {
            var method = containerShouldHave[i];
            if (typeof instance.container[method] === 'undefined') {
                throw new JqueryStlObjectInvalidInterfaceException();
            }
        }
    }

    return instance;
};