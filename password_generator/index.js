const lowerCase="abcdefghijklmnopqrstuvwxyz";
const upperCase="QWERTYUIOPASDFGHJKLZXCVBNM";
const numbers="1234567890";
const symbol="!@#$%&*()_-+=\}{:^|][};'/.,<>?";

const length1=document.getElementById("length");
const password1=document.getElementById("passwords");
const button=document.getElementById("gen_password");
const number1=document.getElementById("numbers");
const lowercase1=document.getElementById("lowercase");
const uppercase1=document.getElementById("uppercase");
const symbol1=document.getElementById("symbols");
const copy=document.getElementById("copy_btn");

button.addEventListener("click",function(){
    // const length=lengthl.value;
    let characters="";
    let new_pass="";
    
    if(lowercase1.checked){
        characters+=lowerCase;
    }
    if(uppercase1.checked){
        characters+=upperCase;
    }
    if(number1.checked){
        characters+=numbers;
    }
    if(symbol1.checked){
        characters+=symbol;
    }
    for(let i=0;i<length1.value;i++){
       
        new_pass+=characters.charAt(Math.floor(Math.random()*characters.length));
    }
    console.log(new_pass);
    password1.value=new_pass;
});

copy.addEventListener("click",function(){
    password1.select();
    document.execCommand("copy")
})
