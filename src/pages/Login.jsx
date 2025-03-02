const [access, setAccess] = useState(false);
const handleLogin = () => {
  const password = prompt("Enter Admin Password:");
  if (password === "your-secret") setAccess(true);
};

return access ? <AdminForm /> : <button onClick={handleLogin}>Admin Login</button>;
