fs.mkdir('my/new/folder/create', { recursive: true }, (err) => { if (err) throw err; });

fs.mkdir("/tmp/test/", function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("notfound");
});

fs.readdir(dir, (err, files) => {
    if (err) console.error(err);
    else {
        console.log('Files', files);
    }
});