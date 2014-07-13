CommentsSchema = new SimpleSchema({
	name: {
		type: String,
		max: 100
	},
	date: {
		type: Date,
		optional: true
	},
	comment: {
		type: String,
		max: 1000
	} 
});

Comments = new Meteor.Collection('comments', {schema: CommentsSchema});
Comments.allow({
	insert: function(){ return true },
	update: function(){ return true },
	remove: function(){ return true }
});

Comments.before.remove(function (userId, doc) {
	var user = Users.findOne({name: doc.name});
	Users.update({_id: user._id}, { $inc: {comments: -1} });
});