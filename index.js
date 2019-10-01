// Your code here
let i;
function mapToNegativize(sourceArray){
  let newArr= [];
  for(i = 0;i < sourceArray.length; i++){
    newArr.push(sourceArray[i] * -1);
  }
  return newArr;
}
function mapToNoChange(sourceArray){
    let newArr= [];
  for(i = 0;i < sourceArray.length; i++){
    newArr.push(sourceArray[i]);
  }
  return newArr;
}
function mapToDouble(sourceArray){
    let newArr= [];
  for(i = 0;i < sourceArray.length; i++){
    newArr.push(sourceArray[i] * 2);
  }
  return newArr;
}
function 
