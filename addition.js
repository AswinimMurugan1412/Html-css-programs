function submit(){
    a=document.getElementById("ainput").value;
    b=document.getElementById("binput").value;
    c=parseInt(a)+parseInt(b);
    document.getElementById("answer").innerHTML=c;
}