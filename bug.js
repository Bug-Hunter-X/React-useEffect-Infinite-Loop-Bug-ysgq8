```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: this will cause an infinite loop
    setCount(count + 1);
  }, []); // Empty dependency array means this runs only once, right?

  return <div>Count: {count}</div>;
}
```