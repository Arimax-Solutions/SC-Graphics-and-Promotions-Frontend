import React, {useState} from 'react';
import img from '../assets/sign.png'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const loginData = {
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Login successful');

        window.location.href = '/admin';

      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
      <div className="flex min-h-screen">
        {/* Left side */}
        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
        </div>

        {/* Right side */}
        <div className="w-1/2 flex flex-col justify-between bg-gradient-to-r from-blue-900 to-blue-600 text-white p-12">
          <div></div>

          <div className="flex flex-col justify-center items-center w-full">
            <h2 className="text-4xl font-extrabold mb-10 text-gray-100">Admin Panel Login</h2>
            <form className="w-full max-w-sm space-y-6" onSubmit={handleLogin}>
              <div className="relative">
                <input
                    type="text"
                    id="username"
                    className="w-full p-4 rounded bg-gray-200 text-gray-800 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
              </div>
              <div className="relative">
                <input
                    type="password"
                    id="password"
                    className="w-full p-4 rounded bg-gray-200 text-gray-800 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
             
              <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
              >
                Sign In
              </button>
            </form>
          </div>

          <div className="border-t border-gray-300 mt-8">
            <p className="text-center text-gray-300 text-xs pt-6">Developed by Arimax Solutions</p>
          </div>
        </div>
      </div>
  );
}

export default Login;
