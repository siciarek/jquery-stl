$.stl.queue = function (container) {

    var defaultMembers = $.stl.getContainerAdaptorMembers({
        top: true
    });

    var uniqueMembers = {
        /**
         * Remove element
         * Removes the element on top of the stack, effectively reducing its size by one
         *
         * @return {*}
         */
        pop: function () {
            return this.container.pop_front();
        }
    };

    var containerShouldHave = [
        'front',
        'back',
        'push_back',
        'pop_back'
    ];

    var instance = $.extend({type: 'queue'}, defaultMembers, uniqueMembers);

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