/**
 * jQuery STL Library Iterators v0.5b
 * https://github.com/siciarek/jquery-stl
 *
 * Based on: http://www.cplusplus.com/reference/stl/
 *
 * Copyright 2012, Jacek Siciarek
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
function random_access_iterator(collection, findex, direction) {
    direction = direction || 1;
    findex = findex || 0;


    if(typeof collection == 'undefined') {
        throw new JqueryStlNullPointerException();
    }

    this.collection = collection;

    this.direction = direction;
    this.findex = findex;
    this.collectionShouldHave = ['at', 'size'];

    if(typeof this.collection != 'object') {
        throw new JqueryStlObjectTypeMismatchException();
    }

    for(var i in this.collectionShouldHave)
    {
        if(typeof collection[this.collectionShouldHave[i]] == 'undefined')
        {
            throw new JqueryStlObjectInvalidInterfaceException();
        }
    }
}

random_access_iterator.prototype.reset = function() {
    this.findex = (this.direction == 1 ? 0 : this.collection.size() - 1);
};

random_access_iterator.prototype.val = function () {
    console.log(this.findex);
    return this.collection.at(this.findex);
};

random_access_iterator.prototype.lt = function (iterator) {

    if(iterator instanceof random_access_iterator)
    {
        console.log(this.findex + " | " + iterator.findex + ' | ' + this.collection.container.toSource());

        return this.findex < iterator.findex;
    }

    /*jshint undef:false */
    throw new JqueryStlObjectTypeMismatchException();
};

random_access_iterator.prototype.pp = function () {

    this.findex += this.direction;
};

random_access_iterator.prototype.mm = function () {

    var temp = this.findex - this.direction;

    if(!(temp >= 0 && temp < this.collection.size() - 1))
    {
        throw JqueryStlOutOfRangeException();
    }

    this.findex = temp;
};
