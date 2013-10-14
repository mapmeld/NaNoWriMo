var paras = document.getElementsByTagName("p");

for(var p=0;p<paras.length;p++){
  paras[p].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + paras[p].innerHTML;
}