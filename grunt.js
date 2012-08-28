/*global module:false*/
module.exports = function (grunt) {
    // readOptionalJSON
    // by Ben Alman
    // https://gist.github.com/2876125
    function readOptionalJSON(filepath) {
        var data = {};
        try {
            data = grunt.file.readJSON(filepath);
            grunt.verbose.write("Reading " + filepath + "...").ok();
        } catch (e) {
        }
        return data;
    }

    // Project configuration.
    grunt.initConfig({

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


        pkg: '<json:jquery-stl.jquery.json>',
        meta: {
            banner: '/*!\n * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? " * " + pkg.homepage + "\n" : "" %>' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>' +
                '\n */',
            header: '(function ($, document, undefined) {\n\n',
            footer: '\n\n})(jQuery, document);\n'
        },
        concat: {
            dist: {
                src: [
                    '<banner:meta.banner>',

                    '<file_strip_banner:src/exceptions.js>',
                    '<file_strip_banner:src/iterators.js>',

                    '<banner:meta.header>',
                    '<file_strip_banner:src/stl.js>',

                    '<file_strip_banner:src/vector.js>',
                    '<file_strip_banner:src/deque.js>',
                    '<file_strip_banner:src/list.js>',

                    '<file_strip_banner:src/set.js>',
                    '<file_strip_banner:src/multiset.js>',
                    '<file_strip_banner:src/map.js>',
                    '<file_strip_banner:src/multimap.js>',

                    '<file_strip_banner:src/bitset.js>',

                    '<file_strip_banner:src/stack.js>',
                    '<file_strip_banner:src/queue.js>',
                    '<file_strip_banner:src/priority_queue.js>',
                    '<banner:meta.footer>'
                ],
                dest: 'dist/jquery.stl.js'
            }
        },
        min: {
            dist: {
                src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
                dest: 'dist/jquery.stl.min.js'
            }
        },

        jshint: (function () {
            function jshintrc(path) {
                return readOptionalJSON((path || "") + ".jshintrc") || {};
            }

            return {
                options: jshintrc(),
                globals: {
                    i: true,

                    random_access_iterator: true,
                    reverse_random_access_iterator: true,

                    JqueryStlNullPointerException: true,
                    JqueryStlNotImplementedYetException: true,
                    JqueryStlOutOfRangeException: true,
                    JqueryStlObjectTypeMismatchException: true,
                    JqueryStlObjectInvalidInterfaceException: true,
                    JqueryStlMaximumContainerSizeException: true
                }
            };
        })(),

        lint: {
            files: [
                'grunt.js',
                'dist/jquery.stl.js'
            ]
        },

        qunit: {
            files: [
                "test/index.html",
                "test/minified.html"
            ]
        },

        uglify: {

        }
    });

    // Default task.
    grunt.registerTask('default', 'concat min lint qunit');
    grunt.registerTask('sntx', 'concat lint');
    grunt.registerTask('test', 'concat qunit');
};
