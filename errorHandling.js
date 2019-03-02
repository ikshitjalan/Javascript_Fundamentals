try {
  //code here
  throw new Error('my new custom error')
}

catch (error){
  console.log('error' , error);
}
finally{
  console.log('....continuing');
}
