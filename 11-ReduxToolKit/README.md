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

# Dispatch Concept

```jsx
const [input, setInput] = useState("");
```

- `useState` is a React Hook that lets you add state to your functional component.
- Here, `input` is a state variable that holds the current value of the input field.
- `setInput` is a function used to update the value of `input`.
- Initially, `input` is set to an empty string `("")`.

```jsx
const dispatch = useDispathch();
```

- `useDispatch` is a Hook provided by React-Redux.
- It gives you access to the Redux store's `dispatch` function, which allows you to send (or "dispatch") actions to your Redux store.
  By calling `useDispatch()`, you get the dispatch function which you can use to trigger actions like `addTodo`, `removeTodo`, etc.

```jsx
const addTodoHandler = (e) => {
  e.preventDefault();
  dispatch(addTodo(input));
  setInput("");
};
```

1. e.preventDefault();

- This prevents the default behavior of the form submission.
- By default, submitting a form reloads the page, but here we want to handle the form submission with JavaScript only, so we prevent the page from reloading.

2. dispatch(addTodo(input));

- This line dispatches an action to the Redux store.
- The `addTodo` function is an action creator imported from your `TodoSlice`.
- When you call `addTodo(input)`, it returns an action object like:

```jsx
{ type: "todo/addTodo", payload: input }
```

- `dispatch` sends this action to the Redux store.
- The Redux store will then pass this action to the relevant reducer (in this case, your `addTodo` reducer), which will update the state based on the action.

3. setInput("");

- This line resets the input field to an empty string after adding a new todo.
- It updates the `input` state to `""`, which clears the text box.

## How dispatch Works in This Example

When you type something in the input field and press the "Add Todo" button:

1. State is Updated:

   - Whatever you type is stored in the input state via setInput(e.target.value).

2. Form Submission:

- When you submit the form, `addTodoHandler` is triggered.

3. Action is Dispatched:

- The `dispatch(addTodo(input))` line creates an action with the current input value as its payload and sends it to your Redux store.

4. Redux Reducer Updates State:

- The addTodo reducer in your TodoSlice takes this action and adds the new todo to the todos array in your Redux state.

5. Input is Cleared:

- `setInput("")` clears the input field for the next todo.

6. Looping Through the Todos Array

```jsx
{
  todos.map((todo) => (
    <li key={todo.id}>
      {todo.text}
      <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
    </li>
  ));
}
```

Explanation:
`{todos.map(...)}:`

- This loops through each todo in the todos array.
- todo represents each individual object in the array.

  Example: If todos is:

```jsx
[
  { id: 1, text: "Learn Redux" },
  { id: 2, text: "Build a project" },
];
```

The map function will go through each item one by one.

First Iteration:

`todo is { id: 1, text: "Learn Redux" }`

Renders:

```jsx
<li key={1}>
  Learn Redux
  <button onClick={() => dispatch(removeTodo(1))}>X</button>
</li>
```

Second Iteration:

`todo is { id: 2, text: "Build a project" }`
Renders:

```jsx
<li key={2}>
  Build a project
  <button onClick={() => dispatch(removeTodo(2))}>X</button>
</li>
```

Line Breakdown:

- `<li key={todo.id}>:`
  Creates a list item (<li>) for each todo.

- `key={todo.id}` is a unique identifier for React to efficiently manage the list. -` {todo.text}`: Displays the text of the todo, like "Learn Redux".

` <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>:`

- This button, when clicked, will dispatch the `removeTodo` action with the todo.id as a parameter.
- This means it will remove the todo item with the matching id from the list.
