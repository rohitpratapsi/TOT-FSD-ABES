// var a=12;
// console.log("hii="+a)
// var a=30;
// console.log(typeof(a));

// let a=12;
// let a=30;
// console.log(a);

function selectLanguage(lang){
    let data;
    if(lang=="java"){
        function javaCompiler(){
        console.log("Java compiler is being executed");


    }
    data=javaCompiler();

}
else if(lang=="c"){
    function cCompiler(){
        console.log("c comiler is being excuted ")
    }
else {
    console.log("select Lang")
}
data=cCompiler();

}
else if(lang=="c")
    function cCompiler(){
        console.log("c comiler is being excuted ")
    }

    data=cCompiler();
}
else
    {
console.log("Selected Language compiler is not found");
    }
}
selectLanguage("python");
}
