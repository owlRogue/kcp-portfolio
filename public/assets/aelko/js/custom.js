	var webStuff       = "> Jira       <br>> Git        <br>> SVN       ";
	var moreWebStuff   = "> Vim	   <br>> SSH        <br>> Screen    ";
	var codeStuff      = "> AWS        <br>> EC2        <br>> Heroku    ";
	var moreCodeStuff  = "> Java       <br>> Python     <br>> SQL       ";
	var utilitiesStuff = "> NodeJS     <br>> Golang     <br>> PHP       ";
	var platformStuff  = "> Postgres   <br>> Redis      <br>> Docker    ";
	var titleSpeed = -30
	var speed = -200;
	var typeTitleOne = function () {
	      $(".titleOne").typed({
		strings: ["[AGILE]"],
		typeSpeed: titleSpeed 
	      });
	}	
	var typeTitleTwo= function () {
	      $(".titleTwo").typed({
		strings: ["[WORKSPACE]"],
		typeSpeed: titleSpeed 
	      });
	}	
	var typeTitleThree= function () {
	      $(".titleThree").typed({
		strings: ["[SERVE]"],
		typeSpeed: titleSpeed 
	      });
	}	
	var typeTitleFour= function () {
	      $(".titleFour").typed({
		strings: ["[CODE]"],
		typeSpeed: titleSpeed 
	      });
	}	
	var typeTitleFive= function () {
	      $(".titleFive").typed({
		strings: ["[CODE]"],
		typeSpeed: titleSpeed 
	      });
	}	
	var typeTitleSix = function () {
	      $(".titleSix").typed({
		strings: ["[FAVORITES]"],
		typeSpeed: titleSpeed 
	      });
	}	
	var typeWebStuff = function () {
	      $(".typedWebStuff").typed({
		strings: [webStuff],
		typeSpeed: titleSpeed 
	      });
	}	
	var typeMoreWebStuff = function () {
	      $(".typedMoreWebStuff").typed({
		strings: [moreWebStuff],
		typeSpeed: speed 
	      });
	}	
	var typeCodeStuff = function () {
	      $(".typedCodeStuff").typed({
		strings: [codeStuff],
		typeSpeed: speed 
	      });
	}	
	var typeMoreCodeStuff = function () {
	      $(".typedMoreCodeStuff").typed({
		strings: [moreCodeStuff],
		typeSpeed: speed 
	      });
	}	
	var typeUtilitiesStuff = function () {
	      $(".typedUtilitiesStuff").typed({
		strings: [utilitiesStuff],
		typeSpeed: speed 
	      });
	}	
	var typePlatformStuff = function () {
	      $(".typedPlatformStuff").typed({
		strings: [platformStuff],
		typeSpeed: speed 
	      });
	}	
window.onload = function() {
	$(function(){
		var titleStart = 500;
		var titleDelay = 200;	
		setTimeout(typeTitleOne, titleStart);
		setTimeout(typeTitleTwo, titleStart + titleDelay);
		setTimeout(typeTitleThree, titleStart + 2*titleDelay);
		setTimeout(typeTitleFour, titleStart + 3*titleDelay);
		setTimeout(typeTitleFive, titleStart + 4*titleDelay);
		setTimeout(typeTitleSix, titleStart + 5*titleDelay);
		var start = titleStart + 6*titleDelay + 500;
		var delay = 500;
		setTimeout(typeWebStuff, start);
		setTimeout(typeMoreWebStuff, start + delay);
		setTimeout(typeCodeStuff, start + delay*2 + 50);
		setTimeout(typeMoreCodeStuff, start + delay*3 + 150);
		setTimeout(typeUtilitiesStuff, start + delay*4 + 150);
		setTimeout(typePlatformStuff, start + delay*5 + 150);
	});
}
