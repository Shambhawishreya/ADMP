
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


var firstName = "";
		var lastName = "";
		var email = "";
		var dType = "";
		var receipt = "";
		var anon = "";
		var list = "";
		var amount = "";
		
		$('.set-amount').autoGrow(0);
		
		/*
			if(isiPad || jQuery.browser.mobile){
				$('#team').hide()
				$('.team-mobile').show();	
			}else{
				$('#team').show()
				$('.team-mobile').hide();
			}
		*/
		
		//Set & Highlight Donation Amount
		$(".button").click(function(){
			$(".button").removeClass("selected");
			$(this).addClass("selected");
			
			$(this).find("input").focus();
		});
		
		//Grow the donation box if they type more than 4 numbers
		$(".set-amount").keyup(function(){
			
			if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
		       this.value = this.value.replace(/[^0-9\.]/g, '');
		    }

		});
		
		
		$("input").on("change", function(){
			// $(".donation-box").css("height", "500px");
			
			firstName = $("#firstName").val();
			lastName = $("#lastName").val();
			email = $("#email").val();
			
			if ( $("#one-time").prop( "checked" ) ){
				dType = "One-Time";
			}
			if ( $("#monthly").prop( "checked" ) ){
				dType = "Monthly";
			}

		});

		function CropFunc() {
			document.getElementById("main_section").style.display = "none";
			document.getElementById("DisplayFrame").style.display = "block";
			document.getElementById("AboutFrame").style.display = "none";
		}
		
		//   
		function WeatherFunc() {
			document.getElementById("main_section").style.display = "none";
			document.getElementById("DisplayFrame").style.display = "block";
			document.getElementById("AboutFrame").style.display = "none";
		}
		function DisplayFunc() {
			document.getElementById("main_section").style.display = "none";
			document.getElementById("AboutFrame").style.display = "block";
			document.getElementById("DisplayFrame").style.display = "none";
		  }



// 		  $(function(){
//     $('#button').click(function(){ 
//         if(!$('#iframe').length) {
//                 $('#iframeHolder').html('<iframe id="iframe" src="//player.vimeo.com/video/90429499" width="700" height="450"></iframe>');
//         }
//     });   
// });

//       function launchUrl(owner) {
//     $('#main_section').hide();
//     var link = $(owner).attr('href');
//     $('#CropFrame').load(link, function(response) {
//         $('#CropFrame').show();
//     });
// }
		