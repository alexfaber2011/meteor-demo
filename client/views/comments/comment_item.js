Template.commentItem.helpers({
	comments: function() {
		return Comments.find({});
	}
});