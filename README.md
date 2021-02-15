# Floating Video Pro

Chrome extension that allows you to force online videos into a floating top most window that can be viewed while you do other stuff.

Google chrome has released a feature called Picture in Picture mode that is avaiable from version 70+.
The purpose of this chrome extension is to automate this for you in one click, continuous clicks will change video incase there are multiple videos on the page. 

There are other ways to force a video into Picture in Picture mode without the use of this extension such as:

- Javascript Injection:
```sh
    javascript:document.getElementsByTagName("video")[0].requestPictureInPicture();
```

- Or opening the developer console and entering:
```sh
    document.getElementsByTagName("video")[0].requestPictureInPicture();
```

The index can be incremented depending on the number of videos on the site.

This extension handles all of that for you automatically, safe/fully open source and you can build from the source as unpackaged.

### Installation

You can install this extension automatically from: https://chrome.google.com/webstore/detail/floating-video-pro/eahphalndmiganhjibpfedaokkcpmjhn

or by downloading the latest releases or ziping the extension contents and loading it unpackaged.
