UserSchema = new SimpleSchema({
	name: {
		type: String,
		max: 100
	},
	joined: {
		type: Date,
		optional: true
	},
	comments: {
		type: Number,
		max: 1000
	} 
});

Users = new Meteor.Collection('users', {schema: UserSchema});
Comments.allow({
	insert: function(){ return true },
	update: function(){ return true },
	remove: function(){ return true }
});

Meteor.methods({
	insertUser: function(doc) {
		doc.date = new Date();
		console.log("Got" + doc);
		return Comments.insert(doc);
	}
});