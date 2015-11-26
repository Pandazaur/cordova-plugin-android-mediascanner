# cordova-plugin-android-mediascanner
Plugin for Cordova 5.X to trigger a media scan on Android terminal.

## Installation
First download the plugin in a folder:
```shell
git clone https://github.com/Pandazaur/cordova-plugin-android-mediascanner.git
```

Then go in your project folder and type:
```shell
cordova plugin add /path/to/cordova-plugin-android-mediascanner
```

## Usage
You need to include the Javascript file:
```html
<script type="text/javascript" src="MediaScanner.js"></script>
```

Now you wan trigger a media scan on a file like this:
```javascript
MediaScanner.scanMedia('/path/to/your/file/fileToScan.txt',
                                    function () {
                                        console.log("Media scan completed");
                                    }, function (err) {
                                        console.log(err);
                                    });
```
