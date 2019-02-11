function outer(x,y){

	this.x = x;
	this.y = y;
  
	function inner(){
	    console.log(this.x);       
	}
  
	inner.call(this);
  }

  var x = new outer(1,2);