var file_name = (typeof(process.argv[2]) == "undefined") ? "inc.js" : process.argv[2];
var fs = require('fs');
var path = require('path');
var compressor = require('node-minify');
var dir = process.cwd();
var file = dir + "/" + file_name;
var incorporate = require(file);
var export_file = dir + "/" + incorporate.export;

incorporate.files = function(){
    var absolute = [];
    incorporate.files.forEach(function(file){
        absolute.push(path.resolve(dir,file));
    });
    return absolute;
}();

new compressor.minify({
    type: 'gcc',
    fileIn: incorporate.files,
    fileOut: export_file,
    callback: function(err){
        if(err){
            console.log("There was an error!");
            console.log(err);
        }else{
            console.log("Success: script.js created");
        }
    }
});