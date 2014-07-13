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