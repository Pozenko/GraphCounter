describe("Grapf counter function", function(){
	it("from 1 to 2", function(){
		assert.equal(pointerFunc(1,2,arr), 7);
	});
	it("from 1 to 3", function(){
		assert.equal(pointerFunc(1,3,arr), 9);
	});
	it("from 1 to 4", function(){
		assert.equal(pointerFunc(1,4,arr), 20);
	});
	it("from 1 to 5", function(){
		assert.equal(pointerFunc(1,5,arr), 20);
	});
	it("from 1 to 6", function(){
		assert.equal(pointerFunc(1,6,arr), 11);
	});
});