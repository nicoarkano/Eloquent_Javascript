number =1;
while (number< 101) {
	setNumber(number);
	number ++;
	}

 function setNumber(val){
	  if (val%3 === 0 && val%5 !==0 ) {
    console.log("Fizz");
             }else if (val%5 === 0 && val%3!==0){
              console.log("Buzz");}
              
      else if (val%5 ===0 && val%5 === 0){
             	console.log("FizzBuzz");
    
              } else console.log(val);
	        } 
console.log("Soy buenísimo");