var assert = require( "assert" );
var Park = require( "../park.js" );
var Dinosaur = require( "../dinosaur.js" );

describe('Dinosaur Tests', function(){
    var park;
    var barney;

    beforeEach(function(){
      park = new Park({name: "Jurasic"});
      barney = new Dinosaur({name:"Barney", type: "Tyrannosaurus", offsprings: 4});
      godzilla = new Dinosaur({name:"Godzilla", type: "Godzillasaurus", offsprings: 1});
      theodore = new Dinosaur({name:"Theodore", type: "Tyrannosaurus", offsprings: 100});
      badRap = new Dinosaur({name:"Bad Rap", type: "Velociraptor", offsprings: 100});

    })

    it('can get park name', function(){
      assert.strictEqual("Jurasic", park.name);
    })

    it('starts with no animals in enclosure', function(){
      assert.strictEqual(0, park.enclosure.length);
    })

    it('can add dinosaur to enclosure', function(){
      park.addDinosaur( barney );
      assert.strictEqual(1, park.enclosure.length);
    })

    it('can count dinosaurs by type', function(){
      // park.removeType( aType );
      park.addDinosaur( barney );
      park.addDinosaur( godzilla );
      park.addDinosaur( theodore );

      var sameType = park.countDinosaursByType("Godzillasaurus");
      assert.strictEqual(1, sameType.length);
    })

    it('can delete dinosars by type', function(){
      park.addDinosaur( barney );
      park.addDinosaur( godzilla );
      park.addDinosaur( theodore );
      park.addDinosaur( badRap );

      park.removeDinosaursByType("Tyrannosaurus");
      assert.strictEqual(2, park.enclosure.length);
    })

    it('can delete dinosars by type', function(){
      park.addDinosaur( barney );
      park.addDinosaur( godzilla );
      park.addDinosaur( theodore );

      var group = park.countDinosaursByNumberOfOffsprings(3);
      assert.strictEqual(2, group.length);
    })

    it('can delete dinosaurs in array', function(){
      park.addDinosaur( barney );
      park.addDinosaur( godzilla );
      park.addDinosaur( theodore );
      var group = [barney, godzilla];
      park.deleteManyDinos(group);
      assert.strictEqual(1, park.enclosure.length);
    })





})
