Template.adminCommentItem.helpers({
  commentToDel: function() {
  	return Comments.findOne({});
  }
});