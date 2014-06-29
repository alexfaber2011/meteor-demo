Template.admin.helpers({
	comments: function() {
		return Comments.find({});
	},
	specials: function() {
		return Specials.find({});
	},
	tableInit: function() {
		Session.set('table-coll', 'comments');
	},
	settingsComments: function() {
		return {
			useFontAwesome: true,
			fields: [ 
				{ key: 'name', label: 'Name'},
				{ key: 'date', label: 'Date'},
				{ key: 'comment', label: 'Comment'},
				{ key: '_id', label: 'Delete', tmpl: Template.adminCommentDelete } 
			]
		};
	},
	settingsSpecials: function() {
		return {
			useFontAwesome: true,
			fields: [ 
				{ key: 'name', label: 'Name'},
				{ key: 'available', label: 'Date'},
				{ key: 'description', label: 'Description'},
				{ key: 'votes', label: 'Votes'} 
			]
		};
	},

	displayComments: function() {
		return (Session.get('table-coll') === 'comments');
	},
	displaySpecials: function() {
		return (Session.get('table-coll') === 'specials');
	},
	currentTable: function() {
		var current = Session.get('table-coll');
		return (current.charAt(0).toUpperCase() + current.slice(1));
	}
});

Template.admin.events({
	'click .delete-button': function () {
		Comments.remove({_id: this._id});
	},

	'click .table-btn': function() {
		var current = Session.get('table-coll');
		if(current === 'comments')
		{
			Session.set('table-coll', 'specials');
		} else {
			Session.set('table-coll', 'comments');
		}
	}
});