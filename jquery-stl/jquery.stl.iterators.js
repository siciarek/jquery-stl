function random_access_iterator(collection, direction, findex, bindex) {
    direction = direction || 1;
    findex = findex || 0;
    bindex = bindex || (collection.size() > 0 ? collection.size() - 1 : 0);

    this.collection = collection;
    this.direction = direction;
    this.findex = findex;
    this.bindex = bindex;
}

random_access_iterator.prototype.reset = function() {
    this.findex = 0;
    this.bindex = (collection.size() > 0 ? collection.size() - 1 : 0);
};

random_access_iterator.prototype.lt = function (iterator) {
    if(iterator instanceof random_access_iterator)
    {
        return this.findex < iterator.findex;
    }
    throw new JqueryStlObjectTypeMismatchException();
};

random_access_iterator.prototype.val = function () {
    return this.collection.at(this.findex);
};

random_access_iterator.prototype.last = function () {
    //alert(this.collection.container);
    var nc = $.extend({}, this.collection);
    return new random_access_iterator(nc, this.direction, this.bindex, this.bindex);
};

random_access_iterator.prototype.pp = function () {
    this.findex += 1 * this.direction;
};

random_access_iterator.prototype.mm = function () {
    this.findex -= 1 * this.direction;
};
