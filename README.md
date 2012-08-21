jquery-stl
==========

C++ Standard Template Library port (containers, iterators, algorithms, etc) for jquery.
According to [STL Containers - C++ Reference](http://www.cplusplus.com/reference/stl/)

## Installation

Include scripts *after* the jQuery library (unless you are packaging scripts somehow else):

    <script type="text/javascript" src="/path/to/jquery.stl.js"></script>
    <script type="text/javascript" src="/path/to/jquery.stl/jquery.stl.vector.js"></script>
    <script type="text/javascript" src="/path/to/jquery.stl/jquery.stl.stack.js"></script>

## Limitations

At the moment constructors should be called in jQuery way, with optional parameter:

    var vector1 = $.stl.vector();
    var vector2 = $.stl.vector(34);

Destructor, if needed, should be called explicitly:

    vector1.destroy();

There is no need nor possibility to Template support &lt;T&gt;.

Common operators are implemented with methods:

    operator=  : eq(obj)
    operator[] : get(n)

## Demo page

[http://siciarek.linuxpl.info/jquery-stl/demo/index.html](http://siciarek.linuxpl.info/jquery-stl/demo/index.html)

## Usage

### Container classes

#### Sequences

vector

    var myvector = $.stl.vector();

    var sum = 0;
    myvector.push_back(100);
    myvector.push_back(200);
    myvector.push_back(300);

    while (!myvector.empty()) {
        sum += myvector.back();
        myvector.pop_back();
    }

deque

    var mydeque = $.stl.deque();
    var output = [];

    mydeque.push_back(100);
    mydeque.push_back(200);
    mydeque.push_back(300);

    while (!mydeque.empty()) {
        output.push(mydeque.front());
        mydeque.pop_front();
    }
    
    alert(output.toSource());
    

#### Container adaptors 

stack

    var stack = $.stl.stack();

    stack.push(100);
    stack.push(200);
    stack.push(300);
    stack.push(400);

    while(stack.empty() == false) {
        alert(stack.pop());
    }

## Development

- Source hosted at [GitHub](https://github.com/siciarek/jquery-stl)
- Report issues, questions, feature requests on [GitHub Issues](https://github.com/siciarek/jquery-stl/issues)

## Authors

[Jacek Siciarek](https://github.com/siciarek)