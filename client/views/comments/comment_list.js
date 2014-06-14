Template.commentList.helpers({
	comments: function() {
		return Comments.find({});
	}
});

Template.commentList.events({
	'click .demo_button': function(event) {
		Comments.insert({
			name: 'Franky Jones',
			date: moment(),
			comment: 'A wonderful place to take a date'
		});

		Comments.insert({
			name: 'Dennis Murphy',
			date: moment(),
			comment: 'Best burgers in town!'
		});
		
		Comments.insert({
			name: 'Lisa Robinson',
			date: moment(),
			comment: 'Meh, it was pretty good'
		});

		Comments.insert({
			name: 'Raymond Cox',
			date: moment(),
			comment: 'Reminds me of my moms cooking, but better!'
		});
	},

	'click .clear_button': function(event) {
		Meteor.call("clearComments");
	}
});