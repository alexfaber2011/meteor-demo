Template.commentList.helpers({
	comments: function() {
		return Comments.find({});
	}
});

Template.commentList.events({
	'click .demo_button': function(event) {
		Comments.insert({
			name: 'Franky Jones',
			date: new Date(),
			comment: 'A wonderful place to take a date'
		});

		Comments.insert({
			name: 'Dennis Murphy',
			date: new Date(),
			comment: 'Best burgers in town!'
		});
		
		Comments.insert({
			name: 'Lisa Robinson',
			date: new Date(),
			comment: 'Meh, it was pretty good'
		});

		Comments.insert({
			name: 'Raymond Cox',
			date: new Date(),
			comment: 'Reminds me of my moms cooking!'
		});
	},

	'click .clear_button': function(event) {
		Meteor.call("clearComments");
	}
});