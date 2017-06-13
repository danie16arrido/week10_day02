var Park = function(options){
  this.name = options.name;
  this.enclosure = [];
}

Park.prototype = {
  addDinosaur: function( dinosaur ){
    this.enclosure.push( dinosaur );
  },
  countDinosaursByType: function( aType ){
    var sameType = this.enclosure.filter(function( dino ){
      return dino.type === aType;
    })
    return sameType;
  },

  removeDinosaursByType: function( aType ){
    for(var i = 0; i < this.enclosure.length; i++){
      if(this.enclosure[i].type === aType){
        this.enclosure.splice(i, 1);
      }
    }
  },

  countDinosaursByNumberOfOffsprings: function( number ){
    var offspringsCount = this.enclosure.filter(function( dino ){
      return dino.offsprings > number;
    })
    return offspringsCount;
  },

  deleteManyDinos: function( myArray ){
    for(var i = 0; i < this.enclosure.length; i++){
      for( var j = 0; j < myArray.length; j++){
        if(this.enclosure[i].name === myArray[j].name){
          this.enclosure.splice(i, 1);
        }
      }
    }
  }
};





module.exports = Park;
