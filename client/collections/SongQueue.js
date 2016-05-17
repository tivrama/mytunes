// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({


  initialize: function() {
    // these are listening to songModel events
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.ended, this);
  },


  //the below functions are from the solution video
  enqueue: function(){
    //if the last song in the SongQueue, then paly
    if(this.length === 1) {
      this.playFirst(); //see playFirst function below..
    }
  },

  dequeue: function() {
    if (this.at(0) === song) {
      this.playNext(); //see playNext function below
    }
    else {
      this.remove(song);
    }
  },

  playNext: function() {
    this.shift();
    if (this.length >= 1) {
      this.playFirst();
    }
    else {
      this.trigger('stop');
    }
  },

  playFirst: function() {
    this.at(0).play();
  }





});