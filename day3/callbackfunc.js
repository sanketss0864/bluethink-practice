function logger(value){
    console.log(value)

}
async function log(myfunc) {
    const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    const value = await response.json();
    myfunc(value)
  }
  
  log(logger)