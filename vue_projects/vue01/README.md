#Vue tutorials

## Vue APIs
Vue offers two API styles: Options API and Composition API

## Attribute binding
In Vue, mustaches are only used for text interpolation. To bind an attribute to a dynamic value, we use the v-bind directive:
`<div v-bind:id="dynamicId"></div>
`
The part after the colon `(:id)` is the "argument" of the directive. Here, the element's `id` attribute will be synced with the `dynamicId` property from the component's state.

Because v-bind is used so frequently, it has a dedicated shorthand syntax:
 ## Directives:
 A directive is a special attribute that starts with the v- prefix. They are part of Vue's template syntax. Similar to text interpolations, directive values are JavaScript expressions that have access to the component's state
 ### types of directives
 - v-model is like an html attribute. It binds a variable to an input and displays it.
 It is called data-binding with two ways data directives
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

 ## States
 State that can trigger updates when changed is considered `reactive`. We can declare `reactive` state using Vue's `reactive()` API. Objects created from `reactive()` are JavaScript Proxies that work just like normal objects:
```
import { reactive } from 'vue'

const counter = reactive({
  count: 0
})

console.log(counter.count) // 0
counter.count++
```