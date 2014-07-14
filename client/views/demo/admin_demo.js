var collections = ['Comments','Users'];
Template.adminDemo.helpers({
	tableName: function() {
		var curr = Session.get('index');
		if(curr) {
			return collections[curr];
		} else {
			return collections[0];
		}
	},

	tableColl: function() {
		var curr = Session.get('index');
		switch(curr) {
			case 0:
				return Comments.find({});
			case 1:
				return Users.find({});
			default:
				Session.set('index', 0);
				return Comments.find({});
		}
	},
	
	settings: function() {
		var curr = Session.get('index');
		switch(curr) {
			case 0:
				return {
					useFontAwesome: true,
					rowsPerPage: 5,
					fields: [
						{ key: 'name', label: 'Name'},
						{ key: 'comment', label: 'Comment'},
						{ key: '_id', label: 'Delete', tmpl: Template.commentDelete }
					]
				};

			case 1:
				return {
					useFontAwesome: true,
					rowsPerPage: 5,
					fields: [
						{ key: 'name', label: 'Name'},
						{
        					key: 'joined',
        					label: 'Joined',
        					fn: function (value, object) { return moment(value).format("MMM Do YYYY"); }
						},
						{ key: 'comments', label: 'Comments'}
					]
				};
				
			default:
				return {
					useFontAwesome: true,
					rowsPerPage: 5,
					fields: [

						{ key: 'name', label: 'Name'},
						{ key: 'comment', label: 'Comment'},
						{ key: '_id', label: 'Delete', tmpl: Template.commentDelete }
					]
				};
		}
	}
});

Template.adminDemo.events({
	'click .delete-button': function () {
		Comments.remove({_id: this._id});
	},
	'click #btn-left' : function() {
		var currentIndex = Session.get('index');
		if(currentIndex === 0) {
			currentIndex = (collections.length - 1);
			Session.set('index', currentIndex);
		} else {
			Session.set('index', (currentIndex-1));
		}
	},
	'click #btn-right' : function() {
		var currentIndex = Session.get('index');
		if(currentIndex === (collections.length-1)) {
			Session.set('index', 0);
		} else {
			Session.set('index', (currentIndex+1));
		}
	},
});