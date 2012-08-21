jquery-stl
==========

C++ Standard Template Library port (containers, iterators, algorithms, etc) for jquery

## Installation

Include scripts *after* the jQuery library (unless you are packaging scripts somehow else):

    <script type="text/javascript" src="/path/to/jquery.stl.js"></script>
    <script type="text/javascript" src="/path/to/jquery.stl/jquery.stl.vector.js"></script>
    <script type="text/javascript" src="/path/to/jquery.stl/jquery.stl.stack.js"></script>

## Usage

### Container classes

#### Sequences

vector

    var vector1 = $.stl.vector();

    vector1.push_back(4);
    vector1.push_back(23);
    vector1.push_back(19);

    while(vector1.size() > 0) {
        alert(vector1.pop_back());
    }

#### Container adaptors 

stack

    var stack = $.stl.stack($.stl.vector());

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