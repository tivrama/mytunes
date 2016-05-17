// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event on an instance of a SongModel will also trigger that event on all collections that SongModel instance belongs to.
    // Why do we need to pass along the keyword this when we trigger the 'play' event?
    this.trigger('play', this);
  },


  //added controler by joel
  enqueue: function(){
    this.trigger('enqueue', this);
  },


  //added by Joel and passes tests.
  dequeue: function(){
    this.trigger('dequeue', this);
  },

  //added by Joel and passes tests.
  ended: function(){
    this.trigger('ended', this);
  }

});
