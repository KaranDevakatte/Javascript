# JS Call Stack
it keep track of functions which is currently executing. for example consider ki there are multiple functions calling each other tho pata kaise chalega ki konsa function abhi execute ho raha hai. 

stack is a data structure which follow LIFO (last in first out phenomenon) such functions jab call hote hai they are stored in stack. aur jo function sabse last mai call hua hai wohi phele execution complete karta hai.

# JS is single threaded
matlab hai ki at a time js can only perform one task.

# callback
callback are function jo ki as argument pass hue hote hai in another function.

# Asynchronous Nature of JS

# Event Loop

console.log("Hello!");

setTimeout(() => {
    console.log("JS");
},1000);

console.log("Welcome to");

basically we are talking about this above example : yaha pe js ko 2sec ke liye rukhna chahiye tha but js wait nhi karta aur phele hello print hota hai fir welcome to and lastly JS. we have talked about js is single threaded at a time it can only perform one task but how it js printing text as well as waiting for other function to get executed. so basically js tho apna kaam kar raha hai here settimeout function is taken care by browser. tho one by one jaise jaise commands call stack mai add hote hai jaise hi settimeout waala call stack mai add hua tho settimeout function alag se chalta hai and it will be removed from call stack so js is free to move to next command aur jaise hi settimeout mai delay complete hojata hai woh callback queue mai add hota hai, tho event loop check karta hai ki kya call stack empty hai agar haa tho callback function ko queue se nikal ke call stack mai add kiya jaata hai fir JS check karta hai kya call stack empty hai agar nhi tho woh execute kar deta hai.

# Flow : 
setTimeout func -> callstack -> browser (web api) -> callback queue -> event loop -> call stack