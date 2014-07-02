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
				{ key: 'votes', label: 'Votes'},
				{ key: '_id', label: 'Modify', tmpl: Template.adminModifyItem }
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
	},
});

Template.admin.events({
	'click .delete-button': function () {
		Comments.remove({_id: this._id});
	},

	'click .modify-button': function () {
		Session.set('editSpecialId', this._id);
		var editSpecialModal = {
			template: Template.editSpecial,
			title: "Edit Special",
			buttons: {
				cancel: {
					closeModalOnClick: true,
					"class": "btn-close",
					label: "Close"
				}
			}
		}
		var rd_offer_special = ReactiveModal.initDialog(editSpecialModal);
    	return rd_offer_special.show();
	},

	'click .table-btn': function() {
		var current = Session.get('table-coll');
		if(current === 'comments')
		{
			Session.set('table-coll', 'specials');
		} else {
			Session.set('table-coll', 'comments');
		}
	},

	'click #new-special': function() {
	    var addSpecialModal = {
	    	template: Template.addSpecial,
	    	title: "Add Special",
	    	buttons: {
	    	cancel: {
	        	closeModalOnClick: true,
	        	"class": "btn-close",
	        	label: "close"
	        }
	      }
	    };
		var rd_offer = ReactiveModal.initDialog(addSpecialModal);
    	return rd_offer.show();
	}
});