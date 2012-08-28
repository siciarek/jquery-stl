$.stl.multimap = function (size) {

    var excludedMembers = {
        get: true
    };

    var containerMembers = $.stl.getContainerMembers(excludedMembers, true);
    var uniqueMembers = {};

    var instance = $.extend({type: 'multimap'}, containerMembers, uniqueMembers);
    instance.create(size);
    return instance;
};