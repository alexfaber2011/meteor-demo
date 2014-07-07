Template.commentList.helpers({
	comments: function() {
		return Comments.find({});
	},
	numComments: function() {
		return Comments.find({}).count();
	}
});