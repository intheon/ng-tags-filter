function MainCtrl($filter){


	this.tags = TagsSrv();
	this.parks = ParksSrv();
	this.filteredParks = this.parks;

	this.tagsSelected;

	this.performFilter = function(tag, event) {

		let allParks = this.parks;
		let filtered = null;

		switchMe(event.currentTarget);
		this.tagsSelected = isSelectedInArr(tag, event.currentTarget);

		filtered = $filter("deepFilter")(this.parks, this.tagsSelected);

		if (filtered.length == 0)
		{
			this.filteredParks = allParks
		}
		else
		{
			this.filteredParks = filtered
		}


	};


}
