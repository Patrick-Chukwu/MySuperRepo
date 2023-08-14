# Summary of all lessons:
 Here is a summary of all Kelvin Powel's 21 days of responsive designs. This document contains key lessons of each day. 
## Day 1
 - Define width either in parent or child container in percentage.
 - Avoid Height. Use padding in the  container instead. It gives gives between the container background and content
 

 ## Day 2
 ##### em vs rem
 - ###### em relates to the element's parent. by default `` 1em = 16px``.
 - ###### rem, "root em", always references the root em which is equivalent to 16px.

    - Use em for padding and margin because it will reference the font-size of the element not the parent.
    - Use rem for font-sizes. It is more consistent and predictable.

 ## Day 3
- Always set max-width for content in the container. It caters for bigger screens while still maintaining responsiveness for smaller screens. preferably ``max-width : 750px``.

## Day 7
##### A tale of width vs max-width.
 -for mobile fi
 - This might be a useful way to think about it: if the element would render wider than what max-width says it can be, max-width wins.
 Scenarios:

 - Parent is 1000px wide
    - Width says element should be 600px wide. That doesn’t break the max-width rule, so 600px it is!
    - Width says element should be 1000px wide. That breaks max-width rule, so forces element down to 600px.
Parent is 320px wide
Width says element should be 600px wide. That breaks the max-width rule which says element can only be at most 320px wide, so 320px it is!
Width says element should be 320px wide. That doesn’t break the max-width rule, so 320px it is!