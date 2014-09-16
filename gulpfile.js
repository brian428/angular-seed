// Required Libraries
var gulp = require( "gulp" ),
    coffee = require( "gulp-coffee" ),
    coffeelint = require( "gulp-coffeelint" ),
    js2coffee = require( "gulp-js2coffee" );
    gutil = require( "gulp-util" );
    ts = require( "gulp-type" ),
    tslint = require( "gulp-tslint" ),
    tsdoc = require( "gulp-typedoc" ),
    concat = require( "gulp-concat-sourcemap" )
    sourcemaps = require( "gulp-sourcemaps" );
    
// Config variables
var appName = "angular-seed-test",
    coffeeAppRoot = "./coffee",
    jsAppRoot = "./app",
    outputRoot = jsAppRoot + "/release/js",
    sourceMapSourceRoot = "../../src/ts",
    tsAppRoot = "./app/src/ts",
    tsDefRoot = "./app/src/ts_definitions",
    tsPaths = [ tsAppRoot + "/**/*.ts", tsDefRoot + "/libs/**/*.ts" ];
    
// Error logging    
var errorHandler = function( text ) {
    gutil.log( gutil.colors.cyan( text ) );
};

// TypeScript compile task
var tsProject = ts.createProject({
    declarationFiles: false,
    noExternalResolve: true,
    sortOutput: true,
    sourceRoot: "./"
});

gulp.task( "scripts", function() {
    console.log( "Compiling TypeScript to: " + jsAppRoot + "/release/js/" + appName + "-all.js" );
    var tsResult = gulp.src( tsPaths )
                       .pipe( sourcemaps.init() )
                       .pipe( ts( tsProject )
                       .on( "error", errorHandler ) );

    // Comment in to generate definition files for application classes.
    //tsResult.dts.pipe( gulp.dest( tsDefRoot + "/app" ).on( "error", errorHandler ) );
    
    tsResult.js.pipe( concat( appName + "-all.js" ) )
               .pipe( sourcemaps.write( "./", { sourceRoot: sourceMapSourceRoot } ) )
               .pipe( gulp.dest( outputRoot )
               .on( "error", errorHandler )
               .on( "error", gutil.beep ) );
});

gulp.task( "watch", [ "scripts" ], function() {
    console.log( "Watching for changes to TypeScript source folders: " + tsPaths );
    gulp.watch( tsPaths, [ "scripts" ] );
});

gulp.task( "compile", [ "scripts" ] );


gulp.task( "scriptsWithSourceMapsButNoConcat", function() {
    var tsResult = gulp.src( tsPaths )
                       .pipe( sourcemaps.init() )
                       .pipe( ts( tsProject )
                       .on( "error", errorHandler )
                       .on( "error", gutil.beep ) );

    tsResult.dts.pipe( gulp.dest( tsDefRoot + "/app" ) );
    
    tsResult.js.pipe( sourcemaps.write( { sourceRoot: tsAppRoot, addComment: true } ) )
               .pipe( gulp.dest( jsAppRoot )
               .on( "error", errorHandler )
               .on( "error", gutil.beep ) );
});




// CoffeeScript compile task
gulp.task( "coffee", function() {
  gulp.src( coffeeAppRoot + "/**/*.coffee" )
      .pipe( coffee( { bare: true, sourceMap: false } )
      .on( "error", errorHandler )
      .on( "error", gutil.beep ) )
      .pipe( gulp.dest( jsAppRoot ) );
} );

// CoffeeScript linter task
gulp.task( "lint", function() {
  gulp.src( coffeeAppRoot + "/**/*.coffee" )
    .pipe( coffeelint( { opt: { 
        indentation: { value: 1 },
        no_tabs: { level: "ignore" }, 
        no_trailing_whitespace: { value: true, level: "warn" }, 
        max_line_length: { value: 200, level: "warn" } 
    } } ) )
    .pipe( coffeelint.reporter() );
} );

// Grouped compile and lint task
gulp.task( "compilecoffee", [ "lint", "coffee" ] );

// Watch task to continuously compile and lint
gulp.task( "watchcoffee", [ "compile" ], function() {
  gulp
    .watch( coffeeAppRoot + "/**/*.coffee", [ "compile" ] );
} );

// Convert JavaScript source into CoffeeScript
gulp.task( "js2coffee", function() {
  gutil.log( jsAppRoot + "/**/*.js" );
  gulp.src( jsAppRoot + "/**/*.js" )
    .pipe( js2coffee().on( "error", errorHandler ) )
    .pipe( gulp.dest( coffeeAppRoot ) )
} );

// Default task
gulp.task( "default", [ "watch" ] );
