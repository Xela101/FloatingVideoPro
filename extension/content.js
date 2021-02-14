(() => {
  let videos = Array.from(document.getElementsByTagName("video"));
  if(videos.length>0){
    let videoInPictureModeIndex = videos.findIndex(video => document.pictureInPictureElement === video);
    let nextVideoForInPictureMode = videoInPictureModeIndex === -1 ? 0 : videoInPictureModeIndex === videos.length-1 ? 0 : ++videoInPictureModeIndex;
    videos[nextVideoForInPictureMode].requestPictureInPicture();
  }
})();