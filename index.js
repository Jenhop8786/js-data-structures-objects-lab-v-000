// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  newDriver = {...driver};
  newDriver[key] = value;
  return newDriver;
  
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
  
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  
}