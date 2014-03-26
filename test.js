var assert = require('assert');
var metadata = require('./');

describe('ec2-metadata', function(){
  it('should return the instance id', function(done){
    metadata('instance-id', function(err, id){
      assert(id);
      done();
    });
  });
});