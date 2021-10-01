
const commaClass = (value) => {
  if(value === "0")return 0;
  let output = "";
  let decimal = "";
  let isNeg = false;
  if(value.includes(".")){
      output = value.substring(0, value.indexOf("."));
      decimal = value.substring(value.indexOf("."));
  }else{
      output = value;
  }
  if(parseFloat(value)<0){
      isNeg = true;
      output = output.substring(1)
  }
  if(value.length>10){
      return value=(parseFloat(value).toFixed(8)).toString()
  }
  return isNeg
  ? "-" + parseFloat(output).toLocaleString()+ decimal
  : parseFloat(output).toLocaleString()+ decimal;
};

export default commaClass
