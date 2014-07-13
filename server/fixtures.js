if(Comments.find().count() === 0 ) {
	Comments.insert({
		name: 'Bob John',
		date: new Date(),
		comment: 'I really enjoyed the specials'
	});

	Comments.insert({
		name: 'Sarah Jo',
		date: new Date(),
		comment: 'My favorite spot EVER!'
	});

	Comments.insert({
		name: 'Tommy Ander',
		date: new Date(),
		comment: 'Come for the food!'
	});

	Comments.insert({
		name: 'James Gram',
		date: new Date(),
		comment: 'Was super crowded last night'
	});
}

if(Users.find().count() === 0 ) {
	Users.insert({
		name: 'Bob John',
		joined: new Date(),
		comments: 1
	});

	Users.insert({
		name: 'Sarah Jo',
		joined: new Date(),
		comments: 1
	});

	Users.insert({
		name: 'Tommy Ander',
		joined: new Date(),
		comments: 1,
	});

	Users.insert({
		name: 'James Gram',
		joined: new Date(),
		comments: 1
	});
}