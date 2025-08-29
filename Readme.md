<!-- Question-1 -->
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
<!-- Answer-1 -->
getElementById= selects one element by its id.
getElementsByClassName= selects all elements with that class.
querySelector= selects first element matching a CSS selector.
querySelectorAll= selects all elements matching a CSS selector (static NodeList).
<!-- Question-2 -->
How do you create and insert a new element into the DOM?
<!-- Answer-2 -->
createElement()= makes the element
Add content/attributes= textContent, className, etc.
appendChild()= inserts it into the DOM.
<!-- Question-3 -->
What is Event Bubbling and how does it work?
<!-- Answer-3 -->
When an event happens on an element, it first triggers on that element and then bubbles up to its parent elements one by one until the root.
<!-- Question-4 -->
What is Event Delegation in JavaScript? Why is it useful?
<!-- Answer-4 -->
Instead of adding event listeners to multiple child elements, you add one listener to a parent and handle events for its children using event.target
<!-- Question-5 -->
What is the difference between preventDefault() and stopPropagation() methods?
<!-- Answer-5 -->
preventDefault()= stops the default browser action (like link navigation or form submission).
stopPropagation()= stops the event from bubbling or capturing to parent/ancestor elements.