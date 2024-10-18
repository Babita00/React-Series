# Context: an alternative to passing props

## createContext

- createContext lets you create a context that components can provide or read.

```jsx
const SomeContext = createContext(defaultValue);
```

## To Call createContext outside of any components to create a context.

createContext(defaultValue)

```jsx
import { createContext } from "react";

const ThemeContext = createContext("light");
```

## SomeContext.Provider

Wrap your components into a context provider to specify the value of this context for all components inside:

```jsx
function App() {
  const [theme, setTheme] = useState("light");
  // ...
  return (
    <ThemeContext.Provider value={theme}>
      <Page />
    </ThemeContext.Provider>
  );
}
```

## Using `useContext` Hook in React

The `useContext` hook makes it easy to share data between components without passing props through every level. It allows direct access to a context’s value from any component.

### 1. Create a Context

Use `React.createContext()` to define a "global" value that can be shared across components.

### 2. Provide the Context Value

You use the Provider component that comes with the context to specify the value of the context. The Provider wraps the components that need access to the context.

```jsx
<ThemeContext.Provider value={theme}>
  <Page />
</ThemeContext.Provider>
```

### 3. Consume the Context Value

Any component can use the useContext hook to access the context's value without passing props.

```jsx
import { useContext } from "react";
import { MyContext } from "./MyContext";

const Component = () => {
  const value = useContext(MyContext);
  return <div>{value}</div>;
};
```
