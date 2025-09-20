// React is a library of the javascript for building a user interface 
// react is declarative , efficient , and flexible 
/*

it is fast and component base

develop and maintained by facebook 

react use the virtual dom

react can be used in ecommerce , qa website , business website , social media , dashboard 

react use JSX template for ui 

focus on the view in MVC 

one way data binding

use vertual dom 

for routing use react router

for state masnagement use redux , recoil or context api



*/

//  to open a project forlder  :  npm create vite@latest my-react-app -- --template react

/*

1 . component is a building block 
2 . every piece of ui is a component 
3 . component is a java script function
4 . their name always begin with a capital letter 
5 . they return jsx markup 

*/

/*
advantages of using the component  :

1 . reusibity 
2 . fast development
3 . design consistency 
4 . maintainability  
*/

/*

JSX :

1 . JSX stand for javascript xml 
2 . babel or typescript 
3 . return a single root element 
4 . to return multiple element we have to put those element in a single parent element 
5 . if we want to return multiple element we have to use the empty tag or fragment
6 . have to use all the cloosing tag 
7 . must have to use the camelCase 
8 . use of curly bracket and double curly bracket 

*/

/*

to style a conponent :

1 . we can write a class in the app.css
2 . we can make a object and then we can place it in the style tag with the curly bracket 
3 . to use multiword property we have to use the camel case instead of hiphen . 
4 . we have to use the className instead of class because class is a redeifne reserve keyword of javascript . thats why we have to use the className insteaf of the class keyword .
5 . we can write the class name In the className keyword 
6 . if we create object then wer can write the object name in the style in the curly bracket 
7 . again we can write the styling code inside the style tag as a object inside the double curly bracket 

*/

/*

to get the dynamic data we can use the props . props contain the object . 
we can use the name of the property of the props object from where we called this . like we we call the profile function and there is a element for the name  . we can simply use the <Profile name="name"></Profile>

and then we can use the props as a parameter and then use the props inside a curly bracket like calling a property of a object . like name : {props.name}

use the props to communicate with each other 
we can pass any js value through the props including the objects, arrays , function , and component too .

props are unidirectional 
thats mean props can be send by the parent component to the child component but not from the child component to the parent component 

*/

/*

conditional rendering is a process od displaying differnet content base on certain condition .
1 . improve user experience 
2 . improve performance 
3 . simplified code
4 . flexibility


we can do ...
1 . if statement 
2 . and oparator &&
3 . ternary opearator ?
4 . or oparator 




*/

/*

component is a small unit of a website just a jsx function 

jsx  is a html like javascript 

conditional rendering is 6 typehow to loop through and array and show component 

props is a destruvtring 


*/