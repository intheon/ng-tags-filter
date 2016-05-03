let currentlySelected = [];

function switchMe(target){

	let ac = $(target).hasClass("active");

	if (!ac)
	{
		$(target).addClass("active");
	}
	else if (ac)
	{
		$(target).removeClass("active");
	}
		
}

function isSelectedInArr(tag, event){

	let isOn = $(event).hasClass("active");

	if (isOn)
	{
		currentlySelected.push(tag);
		currentlySelected = $.unique(currentlySelected);
	}
	else if (!isOn)
	{
		$(currentlySelected).each((pointer, arrVal) => {
			if (tag == arrVal)
			{
				currentlySelected.splice(pointer, 1);
			}
		})
	}

	return currentlySelected;
}

function TagsSrv(){
	return ["Concrete", "Wooden", "Outdoor", "Indoor", "Street", "Ramps"];
}

function ParksSrv(){

	const arr = [
		{
			skateparkName: "Kingston",
			skateparkLocation: "London",
			skateparkTags: ["Outdoor", "Concrete", "Ramps"]
		},
		{
			skateparkName: "Mile End",
			skateparkLocation: "London",
			skateparkTags: ["Outdoor", "Street"]
		},
		{
			skateparkName: "Better Extreme",
			skateparkLocation: "London",
			skateparkTags: ["Indoor", "Wooden"]
		},
		{
			skateparkName: "Clitheroe",
			skateparkLocation: "Clitheroe",
			skateparkTags: ["Outdoor", "Ramps"]
		}
	];

	return arr;
}