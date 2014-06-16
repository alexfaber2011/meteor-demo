if(Comments.find().count() === 0 ) {
	Comments.insert({
		name: 'Bob Johnson',
		date: moment(),
		comment: 'I really enjoyed the specials'
	});

	Comments.insert({
		name: 'Sarah Jo',
		date: moment(),
		comment: 'My favorite spot EVER!'
	});
	
	Comments.insert({
		name: 'Tommy Anderson',
		date: moment(),
		comment: 'Come for the food! Stay for the awesome website!'
	});

	Comments.insert({
		name: 'James Gram',
		date: moment(),
		comment: 'Was super crowded last night :('
	});
}