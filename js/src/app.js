// Self execute (avoids polluting global scope)
(() => {

	angular
		.module("ngFilterApp", [])
		.service("TagsSrv", TagsSrv)
		.service("ParksSrv", ParksSrv)
		.service("isSelectedInArr", isSelectedInArr)
		.service("switchMe", switchMe)
		.filter("tagFilter", tagFilter)
		.filter("deepFilter", deepFilter)
		.controller("MainCtrl", MainCtrl)

})();

