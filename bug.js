```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here.  The dependency array is empty,
    // so this runs only once on mount and never again.
    // This will likely lead to unexpected behavior if you expect
    // count to update the interval. 
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Update every 1 second

    // Missing cleanup function to clear the interval on unmount
    // or when the component is no longer needed.
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```