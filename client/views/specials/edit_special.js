Template.editSpecial.helpers({
	editingSpecial: function() {
		return Specials.findOne({_id: Session.get("editSpecialId")});
	}
});