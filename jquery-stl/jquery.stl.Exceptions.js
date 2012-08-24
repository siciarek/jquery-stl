/**
 * jQuery STL Library Exceptions v0.4b
 * https://github.com/siciarek/jquery-stl
 *
 * Based on: http://www.cplusplus.com/reference/stl/
 *
 * Copyright 2012, Jacek Siciarek
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */

function JqueryStlNotImplementedYetException() {
    this.code = '1000';
    this.message = 'Not implemented yet';
}

function JqueryStlIndexOutOfBoundException() {
    this.code = '1001';
    this.message = 'Index out of bound';
}

function JqueryStlObjectTypeMismatchException() {
    this.code = '2000';
    this.message = 'Object type mismatch';
}

function JqueryStlContainerInvalidInterfaceException() {
    this.code = '2001';
    this.message = 'Container interface is invalid';
}

function JqueryStlMaximumContainerSizeException() {
    this.code = '2002';
    this.message = 'Maximum container size exceeded';
}
