var Labreport = (function() {
	//Selectors 
	var navButtons = document.querySelectorAll('button.nav');
	var timer = document.querySelector('.timer');
	//Statics
	var vis = ' visually-hidden';
	var act = ' active';
	var spa = ' ';
	var co = '.content.active';
	var navb = 'activeNav';
	//



	//Navigation
	for(var i = 0; i < navButtons.length;i++)
	{navButtons[i].addEventListener('click',function() {
			//button clicked state
			var allactive = document.querySelectorAll('.activeNav');
			var nove = allactive[0].className.split(' ');
			allactive[0].className = nove[0] + spa + nove[1];
			console.log(allactive[0]);
			this.className = this.className + spa + navb;
			//navigation
			var active = document.querySelector(co);
			var more = active.className.split(spa);
			active.className = more[0] + vis;
			var classnames = this.className.split(spa);
			var target = document.getElementById(classnames[0]);
			var c = target.className.split(spa);
			target.className = c[0] + act;
	});}
		

	Element.prototype.s =  function(s) {
		
	}

	function ajax() {


	}

	function timeline() {
		
	}	

		// title
	


	//image fits to screen
	(function() {
		var nice = document.querySelector('#lo');
		var image = document.querySelector('#header img');
		window.onresize = function(event) {
		 	frontimage();
		 	title();				
    	};

    	function title() {
    		var width = document.body.clientWidth,
    		 mid = width / 2,
			mid1 = mid - 270;
		 	nice.style.left = mid1 + 'px';

    	}
    	function frontimage() {
    		var width = document.body.clientWidth,
    		height = document.body.clientHeight,
    		percentage = height * 0.40,
			backwidth = width +200;
			image.src = 'https://unsplash.it/'+backwidth+'/250/?random';		
    	}
    	title();
    	frontimage();

    	function documentwidth() {
    		document.header.style.overflow = 'hidden';
    	}
    	documentwidth();

    	function keypressCheck(e) { 
   			 var e = window.event||e; // Handle browser compatibility
    		var keyID = e.keyCode;
   			 //space pressed
   			 if (keyID == 39) {
      			  e.preventDefault(); // Prevent the default action
       			 anotherFunction();
   		 }
}


	})();


	return {
		s: Element.prototype.s = function(s) {
			var x = document.createTextNode(s);
			this.appendChild(x);
		}, 

	}

})();
