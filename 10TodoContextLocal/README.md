# Imporatant point from this project

## 1. Where does todos come from in the TodoProvider?

```jsx

<TodoProvider
  value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
>
```

In your `App.js`, you have this line:

```jsx
const [todos, setTodo] = useState([]);
```

- The `todos` state is declared using the `useState` hook, starting as an empty array `([])`.

- The `addTodo`, `updateTodo`, `deleteTodo`, and `toggleComplete` functions manipulate this todos state.

- The value prop of `TodoProvider` shares the todos array and these functions with any child components using the context.

## 2. How does the addTodo function work?

Here's the `addTodo` function:

```jsx
const addTodo = (todo) => {
  setTodo((prev) => [...prev, { id: Date.now(), ...todo }]);
};
```

- `setTodo` is used to update the todos state.

- It takes the current list of todos `(prev) `and adds a new todo object to the end of the array.

  - #### if you modify the addTodo function like this:

  ```jsx
  const addTodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  ```

  - The new `todo` object `{ id: Date.now(), ...todo }` is added at the beginning of the array.

- The new todo object has:
  - A unique `id` using `Date.now()`.
  - All the properties of the `todo` object passed as an argument.
- Example: If you call `addTodo({ todo: "Buy groceries" })`, the new state will look like:

```jsx
[{ id: 123456789, todo: "Buy groceries", completed: false }];
```

## 3. Does the .map() method in <div> return each todo?

Here's the code:

```jsx
<div className="flex flex-wrap gap-y-3">
  {todos.map((todo) => (
    <div key={todo.id} className="w-full">
      <TodoItem todo={todo} />
    </div>
  ))}
</div>
```

- The `map()` method iterates over each item in the `todos` array.

- For each todo item, it returns a <div> element that contains the `TodoItem` component.

- Each `TodoItem` receives a single `todo` object as a prop.
- The `key` attribute is used to uniquely identify each element, which helps React optimize rendering.

## 4. Why are methods declared but not defined in TodoContext?

In `TodoContext.js`, you have:

```jsx
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});
```

- These are just default values for the context. They act as placeholders.

- When you use `createContext`, you can provide default values in case a component tries to consume the context without being wrapped in a TodoProvider.
- The real implementations of these methods (`addTodo, updateTodo`, etc.) are provided by `App.js` when you pass them through TodoProvider:

```jsx
<TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
```

- Now, any component using `useTodo()` will access the actual functions provided by the App component, not the placeholders.

## 5. Why do we have default todos in TodoContext?

```jsx
todos: [
  {
    id: 1,
    todo: "Todo msg",
    completed: false,
  },
],
```

- This default todo is just a sample item in case no todos are available.
- It ensures that if the context is used without a `TodoProvider`, the consuming components don't break due to `undefined` or missing values.

- When `App.js` provides its own todos state to the context, this default value is overridden.
