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

Meteor.methods({
	clearComments: function() {
		Comments.remove({});
		return "{status: 'okay' }";
	}
});

Meteor.methods({
	insertComment: function(doc) {
		doc.date = new Date();
		console.log("Got" + doc);
		return Comments.insert(doc);
	}
});