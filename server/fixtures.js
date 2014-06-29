if(Comments.find().count() === 0 ) {
	Comments.insert({
		name: 'Bob Johnson',
		date: new Date(),
		comment: 'I really enjoyed the specials'
	});

	Comments.insert({
		name: 'Sarah Jo',
		date: new Date(),
		comment: 'My favorite spot EVER!'
	});
	
	Comments.insert({
		name: 'Tommy Anderson',
		date: new Date(),
		comment: 'Come for the food! Stay for the awesome website!'
	});

	Comments.insert({
		name: 'James Gram',
		date: new Date(),
		comment: 'Was super crowded last night :('
	});
}

if(Specials.find().count() === 0) {
	Specials.insert({
		name: 'Pizza',
		available: new Date(),
		description: 'Taste good when eat',
		votes: 0
	});
	Specials.insert({
		name: 'Pizza1',
		available: new Date(),
		description: 'Tastesda good when eat',
		votes: 0
	});	
	Specials.insert({
		name: 'Burger',
		available: new Date(),
		description: 'Taste REALLY GOOD when eat',
		votes: 0
	});		
}