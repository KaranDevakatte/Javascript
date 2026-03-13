# DOM Events
DOM events tell what to do when some action has occurred jaise ki user ne kisi key ko press kiya ya form fill karke submit button click kiya etc. There are multiple types of events. jaise ki mouse events, form events, keyboard events etc.

# inline event
yaha pe HTML tag ke andar hi js likha jaata hai but problem arise hab hum aisee hi multiple elements ke liye same event lagana ho tho haar element ke andar same line of code likhna padhta so code bulky hojata.

# event 
the problem with this is ki hum ek se jyada function assign nhi kar sakte for a particular event

# add event listeners
yaha pe hum single element ke liye multiple event listeners ko add kar sakte hai

# Event Object
an object which is inbuilt which gives information about the event triggered for example event have a target property which will tell event triggered due to which element.

# Event Listeners for Element
event listener can be added for any elements

# this in Event Listener
for normal function this is the object or element jis element ke liye event listener likha gaya hai wohi hoga this for callback.

# Keyboard Events

# Form Events
extracting the data from the form

use event.preventDefault() method to prevent default behaviour jaise ki form submit hote hi action waale url pe chala jaata hai which is default behaviour, to prevent this we use event.preventDefault() method.

# Event Bubbling
when there is nested elements aur jab haar element ke liye event listener add kiye jaate hai tho jab child element ka event trigger hota hai waise hi woh apne parents ka event bhi trigger kar deta hai.

To Stop this we should use event.stopPropagation() method

# Todo App
we can add new task
we can delete any task using delete button
we cannot add task which is empty
a line through will be generated when we click on any task

# Event Delegation
yaha pe hum event bubbling ka concept use karte hai, hum yaha parent element ke liye event listener add karte hai aur child element apne parent ka event trigger karte hai.