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
		description: 'Our special pizza on home made crust!',
		votes: 0
	});
	Specials.insert({
		name: 'Friday Night Fish Fry',
		available: new Date(),
		description: 'Caught fresh, fried fresh',
		votes: 0
	});	
	Specials.insert({
		name: 'Buffalo Burger',
		available: new Date(),
		description: 'Not your average burger',
		votes: 0
	});		
}