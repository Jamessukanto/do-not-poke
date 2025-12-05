# Q6: State vs Props in React

Explain the difference between state and props in React.


| Aspect | Props | State |
|--------|-------|-------|
| **Source** | Parent component | Component itself |
| **Can change?** | Read-only, immutable. You can still pass state and its setter as props, then update the parent state | Yes - using `setState()` or `setState` function |
| **When to use** | For local component data that changes | For data from parent or shared data |


<!-- --------------------------- Notes --------------------------- -->

## Examples

### Props
```jsx
function Parent() {
  return <Child name="John" age={25} />;
}

function Child({ name, age }) {
  return <p>{name} is {age} years old</p>;
  // Cannot do: name = "Jane"
}
```

### State 
```jsx
function Counter() {
  const [count, setCount] = useState(0); 
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* Can change: setCount(count + 1) */}
    </div>
  );
}
```

### Combining Both
```jsx
// Parent with state
function App() {
  const [users, setUsers] = useState([]); // State
  
  return <UserList users={users} />; // Pass state as props
}

// Child receives props
function UserList({ users }) { // Props
  return (
    <div>
      {users.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}
```
