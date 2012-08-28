$.stl.map = function (size) {

    var excludedMembers = {};

    var containerMembers = $.stl.getContainerMembers(excludedMembers, true);
    var uniqueMembers = {};

    var instance = $.extend({type: 'map'}, containerMembers, uniqueMembers);
    instance.create(size);
    return instance;
};
