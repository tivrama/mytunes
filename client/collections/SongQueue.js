// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  //queue for added songs????
  queue: [],

  initialize: function(){
    // console.log('SongQueue')//works
  },

  enqueue: function(){ //added by Joel // not working
    console.log('SongModel, enqueue: ', this.model)
    //add a song into the song SongQueue
    queue.push(this.model);
    console.log(queue)
  }




});