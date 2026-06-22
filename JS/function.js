// function types
// Named function

// function add(a,b){
//     console.log(a+b);    
// }
// add(10,5)

// anomous function

// function(a,b){
//     console.log(a+b);    
// }
// (10,5)

// IIF
(function(a,b){
    console.log(a-b);    
}
(10,5))

// Fun with Expression

let mul=function(p,q){
    console.log(p*q);
}
mul(10,3)

// Arrow Function ()=>

let square=((r,s)=>{
    console.log(r*s);
    
})
square(5,5)

// Nested function

function grandparent(){
    console.log("I am GP");
    
    function parent(){
        console.log("I am Parent");

        function child(){
            console.log("I am Child");
        }
        return child
    }
    return parent
}
grandparent()()()