# DOM 
It is programming interface that represent HTML document as tree like structure in javascript.
so js can manipulate the document.

Document is root node/object present at top aur uske andar bhaaki ke html elements in form of node
or object present hote hai.

To Manipulate it is a 2 step process :
1- select element
2- manipulate content

# Selecting Element
# getElementById("idname");
1- document.getElementById("idname"); //returns single object or null if id not 

# getElementByClassName("className");
2- document.getElementsByClassName("className"); //return html collection or empty collection if class not found

# getElementByTagName("tagName");
3- document.getElementsByTagName("tagName"); ////return html collection or empty collection if tag not found

# querySelector("selector");
4- document.querySelector("selector"); //returns first matching value

# querySelectorAll("selector");
5- document.querySelectorAll("selector"); //returns nodelist
document.querySelector("tagname/#idname/.className/selectors");

# Difference btw html collection and nodelist
html collection is live, means agar DOM change tho automatically collection update hojayega.
But nodelist is static, jo ki update nhi hoga automatically jab DOM change hota hai.

# Manipulating Content
# innerText
1- innerText : shows only visible content displayed on screen. for example if some portion of content is hidden which is not visible on screen will not be shown in innerText property as well.

# innerHTML
2- innerHTML : this property gives complete markup which includes the html tags.

# textContent
3- textContent : this property shows complete full text means content which is not visible on screen can also be accessed through this property.

# Manipulating Attributes
firstly select an element
elem = document.querySelector("selector");

# getAttribute("attributeName");
1- elem.getAttribute("attributeName"); 
//it will return value for the attribute or null if attribute is not present.

# setAttribute("attributeName",value);
2- elem.setAttribute("attributeName",value);
//yaha pe attribute ki new value set hojati hai aur agar attribute phele se present nhi tha tho attribute create hota hai aur uski value set hojati hai.

But the problem here is ki jab hum value set karte hai attribute ki tho value overwrite hojati hai which means agar phele se values assign thai attribute ko tho woh saare values nikal ke new value mai set hojata hai.

some more methods like
# element.hasAttribute("src")
# element.removeAttribute("src")

# Style Manipulation
document.querySelector("selector").style.color = "red";
document.querySelector("selector").style.backgroundColor = "yellow";

But yaha style object sirf inline style ko access kar pata hai. 

# classList Property
iss property ke use se pata chalta hai all classes of an element

document.querySelector("selector").classList; //

document.querySelector("selector").classList.add("className");

document.querySelector("selector").classList.remove("className");

document.querySelector("selector").classList.contains("className");

document.querySelector("selector").classList.toggle("className");

# Navigation on Page
document.querySelector("selector").parentElement;
document.querySelector("selector").children;
document.querySelector("selector").childElementCount;
document.querySelector("selector").nextElementSibling;
document.querySelector("selector").previousElementSibling;

# Creating Elements on Page
let elem = document.createElement("element");
elem.innerText = "Hey i am new element";

let body = document.querySelector("body");
body.append(elem);
body.appendChild(elem);
body.insertAdjacentElement("position",elem);
position : afterbegin, beforebegin, afterend, beforeend

# Removing Elements from Page
elem.remove();
body.removeChild(elem);