var assert = require( "assert" );
var Dinosaur = require( "../dinosaur.js");

describe('Dinosaur Tests', function(){
    var dino;

    beforeEach(function(){
      dino = new Dinosaur({name:"x45", type: "Tyrannosaurus", offsprings: 4});
    })

    it('can get dinosaur name', function(){
      assert.strictEqual("x45", dino.name);
    })

    it('can get dinosaur type', function(){
      assert.strictEqual("Tyrannosaurus", dino.type);
    })

    it("can get dinosaur's offsprings", function(){
      assert.strictEqual(4, dino.offsprings);
    })

})
