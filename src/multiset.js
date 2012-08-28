$.stl.multiset = function (size) {

    var excludedMembers = {
        get: true
    };

    var containerMembers = $.stl.getContainerMembers(excludedMembers, true);
    var uniqueMembers = {};

    var instance = $.extend({type: 'multiset'}, containerMembers, uniqueMembers);
    instance.create(size);
    return instance;
};
