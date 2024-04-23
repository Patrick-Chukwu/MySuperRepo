#Vue tutorials

 - v-model is like an html attribute. It binds a variable to an input and displays it.
 It is called data-binding with two ways data directives

 ## Directives:
 - v-model
 - v-if: it displays its content if the variable is truthy and otherwise does not display it at all in the dom
 - v-show:  v-show is like v-if but it only turn display to none while still keeping content on the DOM 
 - v-else-if: also like v-if, but the else-if case
 - v-else: the else case of the v-if structure
 v-cloak it's used to correct unnecessary view. You'd attach it to the parent container in HTML and style it a display of none to prevent the refresh displays

 ## Events
 ### Events directives
 - v-on it can be used to detect any event. Example `v-on:click`
 - @click: this is the same thing as `v-on:click`. it's an onClick function

 ### Method
 This is an object of functions
 e.g