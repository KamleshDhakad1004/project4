let header =document.querySelector(".input-div");
// const displayInput ="";
let exp ="";
let ans;
let fname = true;
let sname = true;


function getvalue(val) {
    console.log("hello")
    if  (val === "+") {
        exp += "+";
    }
    else if  ( val === "-") {
        exp += "-"
    }
    else if  (val === "/" ) {
        exp += "/";
    }
    else if (val === "*") {
        exp += "*";
    }
    else {
        exp += val;
    }
    header.innerHTML = exp;
  console.log(exp)

}

function deletefun()  {
    exp = exp.toString();
    if(exp.length>0) {
        exp = exp.substring (0,exp.length - 1);
        console.log(exp);
        header.innerHTML = exp;
    }


}

 function resetfun() {
        header.innerHTML= 0 ;
        exp = "";
}



function setfun() {
    let output = document.querySelector('.input-div')
    let answer = eval(output.innerHTML)
    output.innerHTML = answer.toString().substring(0,6)
    exp = answer.toString().substring(0,6)  


}

