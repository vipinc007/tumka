<!DOCTYPE html>
<html lang="en" ng-app="myApp">

  <head>
    <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
          <title>vcfactory | tumka</title>
          <!-- Bootstrap -->
				  <link href="css/bootstrap.min.css" rel="stylesheet">
				  <link href="css/custom.css" rel="stylesheet">
				  <link href="css/toaster.css" rel="stylesheet">
				  <link rel="stylesheet" href="css/ngtable.css">
					<style>
					  a {
					  color: orange;
					  }
					</style>
              </head>

  <body ng-cloak="">
    
		<header-html title="tumka"></header-html> 
    
      <div class="container" style="margin-top:20px;">
        <div data-ng-view="" id="ng-view" class="slide-animation"></div>
      </div>
    </body>
  <toaster-container toaster-options="{'time-out': 3000}"></toaster-container>
  <!-- Libs -->
  <script src="js/angular.min.js"></script>
  <script src="js/angular-route.min.js"></script>
  <script src="js/angular-animate.min.js" ></script>
  <script src="js/toaster.js"></script>
  <script src="js/ngtable.js"></script>
  <script src="js/underscore.js"></script>
  <script src="app/app.js"></script>
  <script src="app/data.js"></script>
  <script src="app/Header.js"></script>
  <script src="app/homeCtrl.js"></script>
  <script src="app/dashboardCtrl.js"></script>
  

</html>

