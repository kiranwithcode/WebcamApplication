 // CAMERA SETTINGS.
Webcam.set({
    width: 350,
    height: 350,
    image_format: 'jpeg',
    jpeg_quality: 100
});
Webcam.attach('#camera');

// TAKE A SNAPSHOT.
takeSnapShot = function () {
    Webcam.snap(function (data_uri) {
        downloadImage('kiran', data_uri);
        document.getElementById("results").innerHTML=
        // `<img src="' + data_uri + '" />`;
        '<img src="' + data_uri + '" id="" width="200px" height="180px" position:"cover" />'
    });
}

// DOWNLOAD THE IMAGE.
downloadImage = function (name, datauri) {
    var a = document.createElement('a');
    a.setAttribute('download', Date.now() + '.png');
    a.setAttribute('href', datauri);
    a.click();
}