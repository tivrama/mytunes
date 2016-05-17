// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  //
  initialize: function() {
    this.collection.on("add", this.render, this);
  },

  initialize: function() {
    this.collection.on("remove", this.render, this);
  },

  //In original repo
  render: function() {

  },


});