function MediaScanner() { 
}

MediaScanner.prototype.scanMedia = function(filePath, success, err){
	console.log("MediaScanner.scanMedia()");
	cordova.exec(success, err, "MediaScanner", "mediaScanner", [filePath]);
}

 var mediaScanner = new MediaScanner();
 module.exports = mediaScanner;
