(function() {
	'use strict';
//  body controller
	angular
		.module('cs_demo')
		.controller('BodyCtrl',bodyCtrl);


	angular
		.module('cs_demo')
		.constant('QUOTE',{ 'quote': 'The only thing that is constant is change.', 'author': 'Heraclitus'});

	function bodyCtrl ($scope, $location){
		var vm = this;
		vm.activeTab = 'step3';
		vm.subjects = ['Math', 'Physics', 'Chemistry', 'Hindi', 'English'];
		
		vm.bodyBgColor={'background-color':'#ffffff'}
		vm.isActive = isActive;
		vm.isAbout = isAbout;
		vm.isTabs = isTabs;
		vm.dropboxitemselected = dropboxitemselected;
		// nav bar functions
		// adds the active class to the chosen nav item
		function dropboxitemselected(a){
			console.log('selected item: ',a);
		}
		function isActive(viewLocation) {
				return viewLocation === $location.path();
		};
		// this lightens the nav items on the dark background of the about page
		function isAbout(bmd){
			return $location.path() === '/about';
		}
		function isTabs(bmd){
			return $location.path() === '/tabs';
		}
	};

// main view controller
	angular
		.module('cs_demo')
		.controller('MainCtrl', mainCtrl);

	function mainCtrl($scope, QUOTE , heroesFactory ){
		var vm = this;
		// readme content
		vm.readMe = false;
		vm.toggleReadme = toggleReadme;

		function toggleReadme(){
			this.readMe = !this.readMe;
		}

			// data binding
			vm.orderProp = 'name';
			vm.heroes = {};
			var promise = heroesFactory.getHeroes();
			promise.then(function(heroData){
				vm.heroes = heroData;
			});


			// filters
			vm.gettysburg = 'Four score and seven years ago our fathers brought forth, upon this continent, a new nation, conceived in liberty, and dedicated to the proposition that /"all men are created equal./"';


			// directives
			vm.customer = {
				name: 'Naomi',
				address: '1600 Amphitheatre'
			};




			vm.quote = {};
			vm.quote = QUOTE;


	};


// restCalls view controller
	angular
		.module('cs_demo')
		.controller('RestCallsCtrl', restCallsCtrl);

	function restCallsCtrl($scope, $routeParams, restCallsFactory) {
		var vm = this;
		vm.artist = 'jack johnson';
		var promise = restCallsFactory.getItunesMusic(vm.artist.replace(/ /g, '+'));
		promise.then(function(musicData){
			vm.iTunes = musicData;
		});

		var promise = restCallsFactory.getOpenNotifySpacePeople();
		promise.then(function(spaceData){
			vm.spacePeeps = spaceData;
		});

		vm.author = 'terry pratchett';
		var promise = restCallsFactory.getGoogleBooks(vm.author.replace(/ /g, '+'));
		promise.then(function(bookData){
			vm.books = bookData;
		});
	};





})();
