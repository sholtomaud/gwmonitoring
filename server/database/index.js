var dbHydstra = {};

dbHydstra.Normalisation = require('./normalisation/normalise');    

    
/*    
    

mongoose.connection.on('error',function(error){
  console.log(error);
});

dbObject.connection = mongoose.connect(config.mongooseConnection)

dbObject.User = require('./schemas/user');


dbObject.Application = require('./schemas/application');
*/

module.exports = dbHydstra;

