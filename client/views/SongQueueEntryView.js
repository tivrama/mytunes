// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  //from solution repo
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td> <td>%= title %></td>'),

  


  //Wrapper added by Joel
  render: function() {
    //from solution repo
    return this.$el.html(this.template(this.model.attributes));
  }


});
