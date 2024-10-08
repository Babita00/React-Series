# Using useContext Hook in React

The `useContext` hook provides an easy way to share data between components without manually passing props at every level.

# 1. Create a Context:

First, you create a context using the React.createContext() method. This provides a way to define a "global" value that can be shared across components.

```jsx
const MyContext = React.createContext();
```

# 2. Provide the Context Value

You use the Provider component that comes with the context to specify the value of the context. The Provider wraps the components that need access to the context.

```jsx
<MyContext.Provider value={value}>
  <MyComponent />
</MyContext.Provider>
```

# 3. Consume the Context Value

Any component can use the useContext hook to access the context's value without passing props.

```jsx
const contextValue = useContext(MyContext);
```
