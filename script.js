// Q1.

function counter(){
    var counter = 0;

    function IncreaseCounter() {
         return counter += 1;
    };

    return IncreaseCounter;
    }

    var counter = counter();
    alert(counter());
    alert(counter());
    alert(counter());
    alert(counter());

// Q2.

    let count = 0;
        (function () {
        if (count === 0) {
            let count = 1;
            console.log(count);
        }
        console.log(count); 
        })();

 // Q3. 
     for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
          console.log(i);
        }, 1000);
      }   

 //   Q4.
     function areaWidth(width){
 
        function areaBreadth(breadth){
             
            return width * breadth;
          }
          return areaBreadth(10);
        }
        console.log(areaWidth(10));   
       

    //   Q5.

    function counter(){
        var counter = 0;
        
        function IncreaseCounter() {
            return counter += 1;
        };
        return IncreaseCounter;
        }
        var counter = counter();
        console.log(counter());
        console.log(counter());
        console.log(counter());
        console.log(counter());    


    // Q6.
    
    var a = 12;
    (function () {
        alert(a);
    })();        

  // Q7.

  var a = 10;
  var x = (function () {
  var a = 12;
      return function () {
      alert(a);
      };
  })();
  x();          

  // Q8.
 var globalVar = "xyz";

 (function outerFunc(outerArg) {
 var outerVar = 'a';

 (function innerFunc(innerArg) {
 var innerVar = 'b';

 console.log(
 "outerArg = " + outerArg + "\n" +
 "innerArg = " + innerArg + "\n" +
 "outerVar = " + outerVar + "\n" +
 "innerVar = " + innerVar + "\n" +
 "globalVar = " + globalVar);

})(456);
})(123);
