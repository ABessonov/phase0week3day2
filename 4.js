function repeatStr(num,str){
  let strNew ='';
  for (i=0;i<num;i++){
    strNew=strNew+str;
  }
  return strNew;
}

module.exports = repeatStr;
