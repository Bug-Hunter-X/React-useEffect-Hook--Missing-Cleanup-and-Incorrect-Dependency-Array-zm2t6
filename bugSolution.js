```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); 

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [count]); // Add count to the dependency array

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```