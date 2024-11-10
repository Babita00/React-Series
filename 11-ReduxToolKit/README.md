# Redux ToolKit

1. `Create Store` - single source of truth
   it has configureStore
   introduce reducer

2. `Create Slice`(functions) method(createSlice)
   `Slice has name, initialState, reducers :{key: function}`
   Access of two things (State, action)
   state = state value in the store
   action = action.payload
   export individual functionality
   export main source export

3. Add Todo - Give values to State i.e Dispatch Courier = use method `useDispatch()`
   `dispatch(addTodo())`

4. Take Values - `useSelector((state) =>state.todos) `state ka access chaiye
   variable me values lelo ek baar aagaie uske baad pure JS concept hai

# Code Explanation

## For `Remove`

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

# Code Explanation for `Update`

#### 1. Purpose:

- The `updateTodo` function is used to update a specific todo in the todos array.

#### 2. Parameters:

- `state`: The current state of the slice.
- `action`: Contains the data to update, passed through `action.payload`.

#### 3. How It Works:

`action.payload` is expected to have:

```jsx
{
  id, updatedData;
}
```

- `id`: The ID of the todo to be updated.
- `updatedData`: An object with the new values for the todo.

- It uses the `map()` method to go through each `todo` in the `todos` array.
  - If `todo.id` matches the `id` from `action.payload`, it updates that todo with the new data using` { ...todo, ...updatedData }`.
  - If `todo.id` does not match, it keeps the `todo` as it is.

## Example Walkthrough

Suppose your state looks like this:

```jsx
state = {
  todos: [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a Redux app", completed: true },
    { id: 3, title: "Explore Redux Toolkit", completed: false },
  ],
};
```

If you dispatch this action:

```jsx
action = {
  type: "todo/updateTodo",
  payload: {
    id: 2,
    updatedData: { title: "Build an advanced Redux app", completed: false },
  },
};
```

Here's what happens:

- The `updateTodo` reducer will find the todo with `id: 2`.
- It will update the `title` and completed properties based on `updatedData`.

Updated `todos` array:

```jsx
[
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Build an advanced Redux app", completed: false },
  { id: 3, title: "Explore Redux Toolkit", completed: false },
];
```

#### updateTodo can be written as:-

```jsx
updateTodo: (state, action) => {
  state.todos = state.todos.map((todo) =>
    todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
  );
};
```
