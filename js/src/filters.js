function tagFilter(){

	return function (itemsToFilter, clickedTags) {

		let returnArr = [];

		/*

		console.log("full items:" , itemsToFilter);

		console.log("clicked items:" , clickedTags);

		angular.forEach(itemsToFilter, (value, key) => {

			angular.forEach(clickedTags, (value2, key2) => {

				console.log("welcome to the loop of doom");
				if (value == value2)
				{
					returnArr.push(value2)
					console.log("we have a match");
					console.log("match is: ", value2)
				}

			});

		})

		*/

		return returnArr;
	};

}

function deepFilter(){

	return function(allTags, clickedTags){

		if (!allTags || !clickedTags) return;
		else
		{
			let toReturn = [];

			console.log(allTags);
			console.log(clickedTags);

			angular.forEach(allTags, (value, key) => {

				angular.forEach(value.skateparkTags, (value2, key2) => {
					if (value2 == clickedTags)
					{
						toReturn.push(value);
					}
				});

			});

			return toReturn;

		}

	}

}
