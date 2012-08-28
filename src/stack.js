$.stl.stack = function (container) {

    var defaultMembers = $.stl.getContainerAdaptorMembers({
        front: true,
        back: true
    });

    var containerShouldHave = [
        'back',
        'push_back',
        'pop_back'
    ];


    var uniqueMembers = {};

    var instance = $.extend({type: 'stack'}, defaultMembers, uniqueMembers);

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
