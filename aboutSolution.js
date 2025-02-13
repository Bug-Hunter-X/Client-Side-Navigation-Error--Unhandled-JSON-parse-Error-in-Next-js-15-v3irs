```javascript
// pages/aboutSolution.js

export default function About() {
  let data = null;
  try {
    data = JSON.parse(localStorage.getItem('user'));
  } catch (error) {
    console.error('Error parsing user data from localStorage:', error);
  }

  return (
    <div>
      <h1>About Page</h1>
      {data && <p>Welcome, {data.name}!</p>}
      {!data && <p>You are not logged in.</p>}
    </div>
  );
}
```