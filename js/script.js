// menuBtn

	var menuBtn = document.querySelector(".menuBtn");
	var menuList = document.querySelector(".menu");
	var span;
	menuBtn.addEventListener("click", function(event){
		
		var displayValue = window.getComputedStyle(menuList).display;
		
		if (displayValue == "none") {
			menuList.style.display = "block";
			menuList.style.opacity = "1";

			span = document.querySelectorAll(".menuBtn span");
			
			span[0].style.transform = "rotate(45deg)";
			span[0].style.top = "19px";
			
			span[1].style.display = "none";
			
			span[2].style.transform = "rotate(-45deg)";
			span[2].style.top = "19px";
		}
		else if (displayValue == "block") {
			menuList.style.display = "none";
			
			span[0].style.transform = "rotate(0deg)";
			span[0].style.top = "8px";
			
			span[1].style.display = "block";
			
			span[2].style.transform = "rotate(0deg)";
			span[2].style.top = "28px";

		}
	})