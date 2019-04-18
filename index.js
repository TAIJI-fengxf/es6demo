// var a="FXF";
// console.log(a);

// let a="asd";
// window.onload=function () {
//     console.log(a);
// }
// ----------------------------------------------
// var a="aaa";
// {
//     let a="xxx";
// }
// console.log(a);
// ----------------------------------------------
// for(let i=0;i<10;i++){
//     console.log("循环体中："+i);
// }
// console.log("循环体外："+i);
// ----------------------------------------------
// let[a,b,c,d]=[1,2,3];
// console.log(d);
// ----------------------------------------------
// let[a,b="fxf"]=['冯新发',undefined];
// console.log(a+b);
// let[a,b="fxf"]=['冯新发',null];
// console.log(a+b);
// ----------------------------------------------
// let{foo,bar}={bar:'asd',foo:'xxx'};
// console.log(foo+bar);
// ----------------------------------------------
// let foo;
// ({foo}={foo:'jc'});
// console.log(foo);
// ----------------------------------------------
// const  [a,b,c,d,e]='lkjgf';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// ----------------------------------------------
// function taiji(...arg) {
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[4]);
// }
// taiji(1,2,3);
// ----------------------------------------------
// let arr1=['www','taiji','com'];
// // let arr2=arr1;
// let arr2=[...arr1];//并未改变arr1
// console.log(arr2);
// arr2.push('ll');
// console.log(arr1);
// console.log(arr2);
// ----------------------------------------------
//rest...
// function taiji(second,a,...arg) {
//     console.log(arg.length);
// }
// taiji(0,1,2,3,4,5,6,7);
// ----------------------------------------------
//ES5写法
// let fxf='冯新发';
// let blog='你好，'+fxf+'。很高兴见到你';
// document.write(blog);
//ES6写法
// let fxf='冯新发';
// let blog=`你好，${fxf}。很高兴见到你`;//`为Tab上的键
// document.write(blog);
// ----------------------------------------------
//字符串模板对运算的支持
// let a=1;
// let b=2;
// let result=`${a+b}`;
// document.write(result);
// ----------------------------------------------
//字符串查找
//ES5写法
// let fxf='冯新发';
// let blog='你好，我是冯新发。很高兴见到你';
// document.write(blog.indexOf(fxf)>0);
//ES6写法
// document.write(blog.includes(fxf));
//判断开头是否存在
// document.write(blog.startsWith(fxf));
//判断结尾是否存在
// document.write(blog.endsWith(fxf));
// ----------------------------------------------
//6.数字操作
//二进制
// let binary=0B010101;
// console.log(binary);
//如何判断是否是数字
// let a=11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('fxf'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));
// //ES5判读NaN
// console.log("#########################");
// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log(isNaN('taiji'));
// console.log(isNaN(123));
// console.log(isNaN({}));
// console.log(isNaN(100+'2a'));
// console.log("#########################");
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN('taiji'));
// console.log(Number.isNaN(123));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN(100+'2a'));
// console.log(Number.isNaN(parseInt("abc")));
// //如何判断是否是数字
// let a=918.1
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));
// ----------------------------------------------
// let lj=Math.pow(2,53)-1;
// console.log(lj);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// ----------------------------------------------
//ES6新增数组知识
// let json={
//     '0':'fxf',
//     '1':'冯新发',
//     '2':'学生',
//     length:3
//     // length:4
//     //length必须写 转数组时长度为数字
// }
// console.log(json);
// let arr=Array.from(json);
// console.log(arr);
// ----------------------------------------------
//Array.Of方法
// let arr=Array.of(3,4,5,6);
// console.log(arr);
//find()实力方法
// let arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr.find(function (value,index,arr) {
//     return value >5;
//     // return  index>7;
// }));
//fill
// let arr=['hi','fxf','冯新发','你好'];
// let a=arr.fill("web",1,3);
// console.log(a);
//fill左闭右开










