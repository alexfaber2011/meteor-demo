var randomCommand = function() {
	var current = Router.current().path;
	if(current === "/")
	{
		var choice = (Math.random() >= 0.5);
		// Add a vote
		if(choice)
		{
			var specials = Specials.find({}).fetch();
			var randomIndex = Math.floor( Math.random() * specials.length );
			var choiceSpecial = specials[randomIndex];
			Specials.update({_id: choiceSpecial._id}, { $inc: { votes: 1}});
		// Otherwise add a new comment
		} else {
			if(Comments.find({}).count() >= 7){
				Meteor.call("clearComments");
			}
			var fakeName = Fake.user({ fields: ['fullname'] }).fullname;
			var fakeComment = Fake.sentence([7]);
			Comments.insert({
				name: fakeName,
				date: new Date(),
				comment: fakeComment
			});
		}
	}
}
Meteor.setInterval(randomCommand, 2000);
