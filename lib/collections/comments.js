Comments = new Meteor.Collection('comments');
Comments.allow({
	insert: true;
	update: true;
	remove: true;
	fetch: true;
	transform:  true;
});