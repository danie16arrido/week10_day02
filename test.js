var myArray = [1, 2, 3, 4, 5, 3];

var remove = function( number ){
  for(var i = 0; i < myArray.length; i++){
      console.log("Im in index: " + i);
      if(myArray[i] === number){
        console.log("\tbefore deleting: " +  myArray );
        myArray.splice(i, 1);
        console.log( "\tafter deleting: " + myArray );
      }
    }
}
remove( 3 );
console.log("end: " + myArray);
