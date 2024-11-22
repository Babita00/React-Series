# React Quiz Questions and Answers

## Questions and Answers

### Question 1:

**What is the correct command to create a new React project?**

- `npx create-react-app myReactApp`(correct)
- `npx create-react-app`
- `npm create-react-app`
- `npm create-react-app myReactApp`

---

### **Question 2:**

**What does `myReactApp` refer to in the following command?**
`npx create-react-app myReactApp`

- The name you want to use for the new app (correct)
- The type of app to create
- A reference to an existing app
- The directory to create the new app in

---

### **Question 3:**

**What command is used to start the React local development server?**

- `npm start`(correct)
- `npm run dev`
- `npm build`
- `npm serve`

---

### **Question 4:**

**What is the default local host port that a React development server uses?**

- `8080`
- `5000`
- `3500`
- `3000` (Correct)

---

### **Question 5:**

**To develop and run React code, Node.js is required.**

- True (True)
- False

---

### **Question 6:**

**What type of element will be rendered from the following code?**

```javascript
function Car() {
  return <h1>Ford Mustang</h1>;
}

const root = createRoot(document.getElementById("root"));
root.render(<Car />);
```

- Component
- h1 (Correct)
- ReactDom
- div

### **Question 7:**

**What is the children prop?**

- A property that lets you pass data to child components
- A property that lets you set an object as a property
- A property that adds child values to state
- A property that lets you nest components in other components (Correct answer )

### **Question 8:**

**Which keyword creates a constant in JavaScript?**

- const (Correct)
- let
- var
- constant

### **Question 9:**

**A copy of the 'real' DOM that is kept in memory is called what?**

- Shadow DOM
- Virtual DOM (Correct)
- DOM
- React DOM

### **Question 10:**

**React component names must begin with an uppercase letter.**

- True (Correct)
- False

### **Question 11:**

**Which operator can be used to conditionally render a React component?**

- ::
- ||
- ??
- && (Correct)

### **Question 12:**

**When rendering a list using the JavaScript map() method, what is required for each element rendered?**

- key (Correct)
- index
- id
- data

### **Question 13:**

**What tool does React use to compile JSX?**

- ReactDOM
- Babel (Correct)
- React Router
- JSX Compiler

### **Question 14:**

**How can you optimize performance for a function component that always renders the same way?**

- Use the useReducer Hook.
- Use the shouldComponentUpdate lifecycle method.
- Use the useMemo Hook.
- Wrap it in the React.memo higher-order component. (Correct answer )

### **Question 15:**

**What props will be available to the following component?**

<Car {...props} />

- children
- only static ones
- all of them (Correct answer)
- only updated ones

### **Question 16:**

**What is a common use case for ref?**

- To refer to a function
- To directly access a DOM node (Correct answer)
- To refer to another JavaScript file
- To bind the function

### **Question 17:**

**How can you combine the following arrays using the spread operator?**

```jsx
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
```

- const combined = [...array1, ...array2]; (Correct answer)
- const combined = ...array1 + ...array2;
- const combined = array1 + array2;
- const combined = [array1, array2];

### **Question 18:**

**React can only render elements in the root document element.**

- True
- False (Correct answer)

### **Question 19:**

**What is the correct syntax to import a Component from React?**

- `import { Component } from 'react'`(Correct)
- `import Component from 'react'`
- `import [ Component ] from 'react'`
- `import React.Component from 'reac`t'

### **Question 20:**

**Find the bug in this code:**

```jsx
function car({ make, model }) {
  return (
    <h1>
      {make} {model}
    </h1>
  );
}
```

- The first letter of the function must be capitalized (Correct answer)
- Add parenthesis around the return value
- Remove the return statement
- Wrap the return in a fragment

### **Question 21:**

**React separates the user interface into components. How are components combinded to create a user interface?**

- By putting them in a folder structure
- With webpack
- With code splitting
- By nesting components (Correct answer)

### **Question 22:**

**Although React Hooks generally replace class components, there are no plans to remove classes from React.**

- True (Correct answer)
- False

### **Question 23:**

**Which of the following is NOT a rule for React Hooks?**

- Hooks can be called in Class or Function components (Correct answer)
- Hooks can only be called inside React Function components
- Hooks cannot be conditional
- Hooks can only be called at the top level of a component

### **Question 24:**

**What is the output of the following code?**

```js const make = 'Ford';
const model = "Mustang";
const car = { make, model };
console.log(car);
```

- {make: 'Ford', model: 'Mustang'} (Correct answer)
- {{make: 'Ford', model: 'Mustang'}}
- {car: {make: 'Ford', model: 'Mustang'}}
- {{car: 'Ford', car: 'Mustang'}}

### **Question 25:**

**Why should you avoid copying the values of props into a component's state?**

- Because you should never mutate state (Correct answer)
- Because prop values cannot be stored in state
- Because you want to allow data to flow back up to the parent
- Because that would create two instances of the same state that could become out of sync
