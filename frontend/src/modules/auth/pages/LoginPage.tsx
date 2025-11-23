import axios from "axios";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try{
        const response = await axios.post('http://localhost:5000/login', {
            email,
            password
        }, {
          withCredentials: true
        });
        console.log('Login successful:', response.data);
    } catch (err: any) {
        setError(err.response?.data?.message || 'Login failed');
    } finally {
        setLoading(false);
    }
   }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
        </label>
        <label>
          password:
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
        </label>
        <button type="submit">Login</button>
      </form>
        {loading && <p>Loading...</p>}
        {error && <p style={{color: 'red'}}>{error}</p>}
    </section>
  );
};

export default LoginPage;
