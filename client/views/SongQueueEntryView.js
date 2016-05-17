// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!


  


  //Wrapper added by Joel
  render: function() {
    //from solution repo
    return this.$el.html(this.templates(this.model.attributes));
  }


});
