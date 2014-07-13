Template.commentList.helpers({
	comments: function () {
		return Comments.find({});
	}
});