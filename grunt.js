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

        pkg: '<json:jquery-stl.jquery.json>',
        meta: {
            banner: '/*!\n * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? " * " + pkg.homepage + "\n" : "" %>' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>' +
                '\n */'
        },
        concat: {
            dist: {
                src: [
                    '<banner:meta.banner>',
                    '<file_strip_banner:src/jquery.stl.exceptions.js>',
                    '<file_strip_banner:src/jquery.stl.iterators.js>',
                    '<file_strip_banner:src/jquery.stl.js>',

                    '<file_strip_banner:src/jquery.stl.vector.js>',
                    '<file_strip_banner:src/jquery.stl.deque.js>',
                    '<file_strip_banner:src/jquery.stl.list.js>',

                    '<file_strip_banner:src/jquery.stl.set.js>',
                    '<file_strip_banner:src/jquery.stl.multiset.js>',
                    '<file_strip_banner:src/jquery.stl.map.js>',
                    '<file_strip_banner:src/jquery.stl.multimap.js>',

                    '<file_strip_banner:src/jquery.stl.bitset.js>',

                    '<file_strip_banner:src/jquery.stl.stack.js>',
                    '<file_strip_banner:src/jquery.stl.queue.js>',
                    '<file_strip_banner:src/jquery.stl.priority_queue.js>'
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
            files: "test/index.html"
        },

        uglify: {

        }
    });

    // Default task.
    grunt.registerTask('default', 'concat min lint qunit');
};
