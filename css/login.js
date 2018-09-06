/*
* @Author: 11911
* @Date:   2018-08-31 10:06:43
* @Last Modified by:   11911
* @Last Modified time: 2018-09-01 15:07:11
*/

// let res=document.getElementsByClassName(".close");
// let open=document.querySelectorAll("a");
// let openbox=document.querySelectorAll(".login");
// console.log(res);
// res.onclick=function () {
//     openbox.style.display="none";
// }
window.onload=function () {
let res=document.getElementsByClassName("close")[0];
let open=document.getElementsByClassName("login-one")[0];
let oBlack=document.querySelectorAll(".black")[0];
let openbox=document.getElementsByClassName("login-box")[0];
let adds=document.getElementsByClassName("login-one")[1];
let oBlack1=document.querySelectorAll(".black")[1];
let openbox1=document.getElementsByClassName("login-box")[1];
let res1=document.getElementsByClassName("close")[1];
let login=document.getElementsByClassName("login-one")[2];
let login1=document.getElementsByClassName("login-one")[3];

console.log(adds);
// 点击注册链接跳转至注册页面
login.onclick=function(){
    openbox.style.display="none";
    oBlack.style.display="none";
	openbox1.style.display="block";
    oBlack1.style.display="block";
    document.body.style.overflow="hidden";

    return false;
}
login1.onclick=function(){
	openbox1.style.display="none";
    oBlack1.style.display="none";
    // document.body.style.overflow="auto";

	openbox.style.display="block";
    oBlack.style.display="block";
    document.body.style.overflow="hidden";
	return false;
}
open.onclick=function(){
    openbox.style.display="block";
    oBlack.style.display="block";
    document.body.style.overflow="hidden";

    return false;
}

res.onclick=function () {
    openbox.style.display="none";
    oBlack.style.display="none";
    document.body.style.overflow="auto";
}
adds.onclick=function(){
    openbox1.style.display="block";
    oBlack1.style.display="block";
    document.body.style.overflow="hidden";

    return false;
}
res1.onclick=function () {
    openbox1.style.display="none";
    oBlack1.style.display="none";
    document.body.style.overflow="auto";
}

}