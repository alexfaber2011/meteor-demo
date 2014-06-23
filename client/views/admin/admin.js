Template.admin.helpers({
	comments: function() {
		return Comments.find({});
	},
	settings: function() {
		return {
			useFontAwesome: true,
			fields: [ 
				{ key: 'name', label: 'Name'},
				{ key: 'date', label: 'Date'},
				{ key: 'comment', label: 'Comment'},
				{ key: '_id', label: 'Delete', tmpl: Template.adminCommentDelete } 
			]
		};
	}
});