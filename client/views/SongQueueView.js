// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  //Joel's solution (did pass tests)
  initialize: function() {
    this.collection.on("add remove", this.render, this);
    this.render();
  },

  // initialize: function() {
  //   this.collection.on("remove", this.render, this);
  // },

  //Render wrapper was in original repo
  render: function() {
    //solution from Solution repo
    this.$el.children().detach();

    // solution from repo
    return this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model:song}).render();
      })
    );
  },


});