// ITERATOR:

var random_access_iterator = function(collection, findex) {

    if (typeof collection === 'undefined') {

        throw new JqueryStlNullPointerException();
    }

    this.direction = 1;
    this.collection = collection;
    this.findex = findex;
    this.collectionShouldHave = ['at', 'size'];

    if (typeof this.collection !== 'object') {

        throw new JqueryStlObjectTypeMismatchException();
    }

    for (var i in this.collectionShouldHave) {
        if (typeof collection[this.collectionShouldHave[i]] === 'undefined') {

            throw new JqueryStlObjectInvalidInterfaceException();
        }
    }
};

random_access_iterator.prototype.val = function () {
    return this.collection.at(this.findex);
};

// Operators:

/**
 * operator<
 * @param iterator
 * @return {Boolean}
 * @throws JqueryStlObjectTypeMismatchException
 */
random_access_iterator.prototype.lt = function (iterator) {

    if (iterator instanceof random_access_iterator) {
        return this.findex <= iterator.findex;
    }


    throw new JqueryStlObjectTypeMismatchException();
};

/**
 * operator++
 */
random_access_iterator.prototype.pp = function () {

    this.findex += this.direction;
};

/**
 * operator--
 */
random_access_iterator.prototype.mm = function () {

    this.findex -= this.direction;
};



// REVERSE ITERATOR:


var reverse_random_access_iterator = function(collection, findex) {

    if (typeof collection === 'undefined') {

        throw new JqueryStlNullPointerException();
    }

    this.direction = -1;
    this.collection = collection;
    this.findex = findex;
    this.collectionShouldHave = ['at', 'size'];

    if (typeof this.collection !== 'object') {

        throw new JqueryStlObjectTypeMismatchException();
    }

    for (var i in this.collectionShouldHave) {
        if (typeof collection[this.collectionShouldHave[i]] === 'undefined') {

            throw new JqueryStlObjectInvalidInterfaceException();
        }
    }
};

reverse_random_access_iterator.prototype.val = function () {
    return this.collection.at(this.findex);
};

// Operators:

/**
 * operator<
 * @param iterator
 * @return {Boolean}
 * @throws JqueryStlObjectTypeMismatchException
 */
reverse_random_access_iterator.prototype.lt = function (iterator) {

    if (iterator instanceof reverse_random_access_iterator) {
        return this.findex >= iterator.findex;
    }


    throw new JqueryStlObjectTypeMismatchException();
};

/**
 * operator++
 */
reverse_random_access_iterator.prototype.pp = function () {

    this.findex += this.direction;
};

/**
 * operator--
 */
reverse_random_access_iterator.prototype.mm = function () {

    this.findex -= this.direction;
};
