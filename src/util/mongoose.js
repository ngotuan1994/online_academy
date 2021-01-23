module.exports = {
    arrayMongooseObject : function(mongooseArray){
        return mongooseArray.map( mongooseArray => mongooseArray.toObject());
    },
    mongooseObject : function(object){
        return object ? object.toObject() : object;
    }
}