# Redux ToolKit

```jsx
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: () => {},
    removeTOdo: () => {},
  },
});
```

in this code unlike useContext we not wely define functin we also define functionality here

```jsx
state, action;
```

- state :- current state
- action :- whichever data is passing

# Code Explanation for `Remove`

```jsx
removeTodo: (state, action) => {
  state.todos = state.todos.filter((todo) => todo.id !== action.payload);
},
```

### What's Happening Here:

#### 1. Function Signature:

- `removeTodo` is a function that takes two arguments:
  - `state`: The current state of the Redux slice.
  - `action`: An object containing information about what needs to change in the state.

#### 2. Purpose:

- This reducer's purpose is to remove a specific todo item from the todos array.

### 3. How It Works:

- `state.todos` is an array that contains multiple todo objects.

  - Suppose the state looks like this:

  ```jsx
  state = {
    todos: [
      { id: 1, title: "Learn React", completed: false },
      { id: 2, title: "Build a Redux app", completed: true },
      { id: 3, title: "Explore Redux Toolkit", completed: false },
    ],
  };
  ```

  - `state.todos` is an array with 3 objects in it.

           - If you want to access the entire list of todos, you use:
          ```jsx
          [
            { id: 1, title: "Learn React", completed: false },
            { id: 2, title: "Build a Redux app", completed: true },
            { id: 3, title: "Explore Redux Toolkit", completed: false },
            ];
            ```
            - If you want to access a specific todo, like the first one:
            ```jsx
            state.todos[0];
            ```

    Output:

```jsx
{ id: 1, title: "Learn React", completed: false }
```

- If you want to access a specific property (e.g., the title of the first todo):

```jsx
state.todos[0].title;
```

Output:

```jsx
"Learn React";
```

- The reducer uses the `filter()` method to create a new array that excludes the todo with the matching id provided by `action.payload`.

#### 4. The Filtering Logic:

- `state.todos.filter((todo) => todo.id !== action.payload)`:
  - The `filter` method goes through each item `(todo)` in the `todos` array.
  - It checks if `todo.id` is not equal to `action.payload`.
  - If the condition is `true`, it keeps that item in the new array.
  - If the condition is `false`, it removes that item from the new array.

#### 5. Updating the State:

- The resulting filtered array (which no longer includes the todo with the given id) is assigned back to `state.todos`.
- Redux Toolkit uses Immer under the hood, so it handles the immutability of the state for you. You can directly modify `state.todos` as shown.

## Example Walkthrough

```jsx
state = {
  todos: [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a Redux app", completed: true },
    { id: 3, title: "Explore Redux Toolkit", completed: false },
  ],
};
```

And the action object is:

```JSX
action = {
  type: 'todos/removeTodo',
  payload: 2, // id of the todo to remove
};
```

#### When `removeTodo` is called:

- The filter function runs through each todo:

  - `{ id: 1, title: 'Learn React' } → 1 !== 2` → Keep it.
  - `{ id: 2, title: 'Build a Redux app' } → 2 !== 2` → Remove it.
  - `{ id: 3, title: 'Explore Redux Toolkit' } → 3 !== 2` → Keep it.

- The updated todos array becomes:

```JSX
[
  { id: 1, title: 'Learn React', completed: false },
  { id: 3, title: 'Explore Redux Toolkit', completed: false },
];
```

So, the `todo` with `id: 2` has been removed from the state.

### Remove can also be done as:

```jsx
removeTodo: (state, action) => {
  const { id } = action.payload;
  state.todos = state.todos.filter((todo) => todo.id !== id);
};
```
