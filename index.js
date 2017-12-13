var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  newObj = {};
  Object.assign(newObj,object,{key:value})
  return newObj
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.key = value
  return object
}

function deleteFromObjectByKey(object, key){
  newObj = Object.assign({},object)
  delete newObj[key]
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
}

