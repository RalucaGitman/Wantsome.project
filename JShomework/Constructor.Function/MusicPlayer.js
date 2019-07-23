function musicPlayer(songs = []) {
  this.songs = songs;
  //this.currentSong;
  this.play = function() {
    if (this.currentSong == undefined) { //starea initiala a playerului(nu reda nici o melodie)
      this.currentSong = songs[0];
    }
    console.log("play: " + this.currentSong);
  };
  this.pause = function() {
    console.log("pause: " + this.currentSong);
  };
  this.stop = function() {
    console.log("stop " + this.currentSong);
    this.currentSong = undefined;
  };
  this.nextTrack = function() {
    let songIndex = songs.indexOf(this.currentSong);
    this.currentSong = songs[songIndex+1];
    this.play();
  };
  this.previousTrack = function() {
    let songIndex = songs.indexOf(this.currentSong);
    this.currentSong = songs[songIndex-1];
    this.play();
  };
  this.addTrackToQueue = function(newSong) {
    songs.push(newSong);
    songs.sort();
    console.log("added new song " + newSong);
  };
  this.removeTrackFromQueue = function(oldsong) {
      if(oldsong == this.currentSong) {
          this.stop();
      }
    songs.splice(songs.indexOf(oldsong), 1);
    console.log("removed song " + oldsong);
  };
  this.showNextTrack = function() {
    let songIndex = songs.indexOf(this.currentSong);
    console.log("show next track " + songs[songIndex+1]);
  };
  this.showPlaylist = function() {
    console.log(songs);
  };
}
var myPlaylist = new musicPlayer(["a", "b", "c", "d"]);
myPlaylist.play();
myPlaylist.nextTrack();
//myPlaylist.nextTrack();
//myPlaylist.stop();
myPlaylist.removeTrackFromQueue("b");
myPlaylist.showPlaylist();
myPlaylist.addTrackToQueue("b");
myPlaylist.showPlaylist();
myPlaylist.showNextTrack();

