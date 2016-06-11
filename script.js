var fs = require('fs');
var spawn = require('child_process').spawn;

var startPath = process.argv[2];
var endPath = process.argv[3];

bless(startPath, endPath);

fs.watchFile(startPath, function() {
  bless(startPath, endPath);
});

function bless(startPath, endPath) {
  spawn(
    process.env.comspec,
    ['/c ', 'blessc', startPath, endPath],
    { stdio: 'inherit' }
  );
}
