function extract_filename(param)
{
 i=param.length;
 while (param.substring(i,i+1)!="/" && i>0) i--;
 if (i>0) return param.substring(i+1,param.length)
 else return "";
}

function create_link()
{
 salat="mqaaiylwtsox:rJfevntsg.bRzahancukjem@ugjmmxi.ödäe+";
 url="";
 i=0;
 while (i<salat.length){
  url=url+salat.substring(i,i+1);
  i+=2;
 }
 document.location.href=url;
}


if (parent.frames.length==0)
 window.location.replace("index.html?"+extract_filename(window.location.href));
else 
 if (parent.frames[1].location.href!=window.location.href)
  window.location.replace("index.html?"+extract_filename(window.location.href));
