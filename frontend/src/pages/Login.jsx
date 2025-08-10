// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'
// import { useTheme } from '../context/ThemeContext'

// const Login = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)
  
//   const { login } = useAuth()
//   const { isDarkMode } = useTheme()
//   const navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     setError('')

//     const result = await login(email, password)
    
//     if (result.success) {
//       navigate('/dashboard')
//     } else {
//       setError(result.message)
//     }
    
//     setLoading(false)
//   }

//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       minHeight: '80vh'
//     }}>
//       <div style={{
//         backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
//         padding: '2rem',
//         borderRadius: '10px',
//         boxShadow: isDarkMode ? '0 4px 6px rgba(0,0,0,0.3)' : '0 4px 6px rgba(0,0,0,0.1)',
//         width: '100%',
//         maxWidth: '400px'
//       }}>
//         <h2 style={{ 
//           textAlign: 'center', 
//           marginBottom: '1.5rem',
//           color: isDarkMode ? '#fff' : '#333'
//         }}>
//           Login to NoteMaster
//         </h2>

//         {error && (
//           <div style={{
//             backgroundColor: '#f8d7da',
//             color: '#721c24',
//             padding: '0.75rem',
//             borderRadius: '5px',
//             marginBottom: '1rem'
//           }}>
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '1rem' }}>
//             <label style={{ 
//               display: 'block', 
//               marginBottom: '0.5rem',
//               color: isDarkMode ? '#fff' : '#333'
//             }}>
//               Email:
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 border: '1px solid',
//                 borderColor: isDarkMode ? '#555' : '#ddd',
//                 borderRadius: '5px',
//                 backgroundColor: isDarkMode ? '#444' : '#fff',
//                 color: isDarkMode ? '#fff' : '#333'
//               }}
//             />
//           </div>

//           <div style={{ marginBottom: '1.5rem' }}>
//             <label style={{ 
//               display: 'block', 
//               marginBottom: '0.5rem',
//               color: isDarkMode ? '#fff' : '#333'
//             }}>
//               Password:
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 border: '1px solid',
//                 borderColor: isDarkMode ? '#555' : '#ddd',
//                 borderRadius: '5px',
//                 backgroundColor: isDarkMode ? '#444' : '#fff',
//                 color: isDarkMode ? '#fff' : '#333'
//               }}
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             style={{
//               width: '100%',
//               padding: '0.75rem',
//               backgroundColor: '#007bff',
//               color: 'white',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: loading ? 'not-allowed' : 'pointer',
//               opacity: loading ? 0.6 : 1
//             }}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         <p style={{ 
//           textAlign: 'center', 
//           marginTop: '1rem',
//           color: isDarkMode ? '#fff' : '#333'
//         }}>
//           Don't have an account? <Link to="/signup" style={{ color: '#007bff' }}>Sign up</Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Login











// import React, { useState } from 'react'
// import { useAuth } from '../context/AuthContext'
// import { useTheme } from '../context/ThemeContext'
// import API from '../utils/api'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//   const { login } = useAuth()
//   const { isDarkMode } = useTheme()
//   const navigate = useNavigate()
  
//   const [formData, setFormData] = useState({ email: '', password: '' })
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState('')

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError('')
//     setLoading(true)

//     try {
//       const { data } = await API.post('/auth/login', formData)
//       if (data.success) {
//         localStorage.setItem('token', data.token)
//         login(data.user) // update AuthContext
//         navigate('/dashboard')
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div style={{
//       maxWidth: '400px',
//       margin: '3rem auto',
//       padding: '2rem',
//       backgroundColor: isDarkMode ? '#2d2d2d' : '#fff',
//       borderRadius: '10px',
//       border: '1px solid',
//       borderColor: isDarkMode ? '#444' : '#ddd'
//     }}>
//       <h2 style={{ color: isDarkMode ? '#fff' : '#333', marginBottom: '1rem' }}>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           style={{
//             width: '100%',
//             padding: '0.75rem',
//             marginBottom: '1rem',
//             borderRadius: '5px',
//             border: '1px solid',
//             borderColor: isDarkMode ? '#555' : '#ccc',
//             backgroundColor: isDarkMode ? '#444' : '#fff',
//             color: isDarkMode ? '#fff' : '#333'
//           }}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           style={{
//             width: '100%',
//             padding: '0.75rem',
//             marginBottom: '1rem',
//             borderRadius: '5px',
//             border: '1px solid',
//             borderColor: isDarkMode ? '#555' : '#ccc',
//             backgroundColor: isDarkMode ? '#444' : '#fff',
//             color: isDarkMode ? '#fff' : '#333'
//           }}
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           style={{
//             width: '100%',
//             padding: '0.75rem',
//             backgroundColor: '#007bff',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }}
//         >
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//     </div>
//   )
// }

// export default Login






















import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { login } = useAuth()
  const { isDarkMode } = useTheme()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const result = await login(email, password)
    
    if (result.success) {
      navigate('/dashboard')
    } else {
      setError(result.message || 'Login failed')
    }
    
    setLoading(false)
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh'
    }}>
      <div style={{
        backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: isDarkMode ? '0 4px 6px rgba(0,0,0,0.3)' : '0 4px 6px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: isDarkMode ? '#fff' : '#333' }}>
          Login to NoteMaster
        </h2>

        {error && (
          <div style={{
            backgroundColor: '#f8d7da',
            color: '#721c24',
            padding: '0.75rem',
            borderRadius: '5px',
            marginBottom: '1rem'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: isDarkMode ? '#fff' : '#333' }}>
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid',
                borderColor: isDarkMode ? '#555' : '#ddd',
                borderRadius: '5px',
                backgroundColor: isDarkMode ? '#444' : '#fff',
                color: isDarkMode ? '#fff' : '#333'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: isDarkMode ? '#fff' : '#333' }}>
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid',
                borderColor: isDarkMode ? '#555' : '#ddd',
                borderRadius: '5px',
                backgroundColor: isDarkMode ? '#444' : '#fff',
                color: isDarkMode ? '#fff' : '#333'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '1rem', color: isDarkMode ? '#fff' : '#333' }}>
          Don’t have an account? <Link to="/signup" style={{ color: '#007bff' }}>Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
