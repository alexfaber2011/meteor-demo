Template.commentList.helpers({
	comments: function () {
		return Comments.find({});
	},
});

Template.commentList.events({
	'submit form' : function(event, template) {
	    event.preventDefault();
	    var name = $(event.currentTarget).find(".comment-name").val();
	    var comment = $(event.currentTarget).find(".comment-comment").val();
	    
	    console.log(name);
	    console.log(comment);

	    if(name && comment)
	    {
	    	var currUser = Users.findOne({name: name});
	    	if(currUser)
	    	{
	    		Users.update({_id: currUser._id}, {$inc: { comments: 1} });

	    	} else {
	    		var newUser = {
	    			name: name,
	    			joined: new Date(),
	    			comments: 1
	    		};
	    		Users.insert(newUser);
	    	}

	    	Comments.insert({
	    		name: name,
				date: new Date(),
				comment: comment
	    	});

	    	$('#comment-input').val('');

	    } else {
	    	//I dont do Error handling on sudays
	    }
	},
});