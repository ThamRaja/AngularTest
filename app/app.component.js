(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: `
    <img src="../../static/angularTest.png" style="height: 600px; width: 400px;"> 
		<div id="boob_l" onclick="shakeIt('boob_l');"></div>
		<div id="boob_r" onclick="shakeIt('boob_r');"></div>
	<script>
		function shakeIt(b){
			var boob= document.getElementById(b);
			var prevX = boob.style.top;
			boob.style.top = '240px';
			setTimeout(function(){boob.style.top = prevX;},250);
		}
	</script>
    `,
  styles: [`
  #boob_l {
  position:absolute;
  left:30px;
  top:230px;
  width: 120px;
  height:110px;
  background: #ffcc7c;
  border-radius: 120px/110px;
  transform: skew(-5deg);
  box-shadow: inset 0px -10px 0px 0px #ffbb7c;
  transition: 0.5s;
}

#boob_r {
  position:absolute;
  left:170px;
  top:230px;
  width: 120px;
  height:110px;
  background: #ffcc7c;
  border-radius: 120px/110px;
  transform: skew(5deg);
  box-shadow: inset 0px -10px 0px 0px #ffbb7c;
  transition: 0.5s;
}
#boob_l:before {
  content:'';
  position:fixed;
  left:30px;
  top:70px;
  width: 25px;
  height:25px;
  background: #ee997c;
  border-radius: 20px/20px;
  transform: skew(5deg);
}
#boob_r:before {
  content:'';
  position:fixed;
  left:70px;
  top:70px;
  width: 25px;
  height:25px;
  background: #ee997c;
  border-radius: 20px/20px;
  transform: skew(-5deg);
}
#boob_l:after {
  content:'';
  position:fixed;
  left:35px;
  top:80px;
  width: 10px;
  height:10px;
  background: #C67867;
  border-radius: 20px/20px;
  transform: skew(5deg);
}
#boob_r:after {
  content:'';
  position:fixed;
  left:80px;
  top:80px;
  width: 10px;
  height:10px;
  background: #C67867;
  border-radius: 20px/20px;
  transform: skew(-5deg);
}
`]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));