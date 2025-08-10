import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const NotFound = () => {
  const { isDarkMode } = useTheme()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '4rem', 
        margin: '0',
        color: isDarkMode ? '#fff' : '#333'
      }}>
        404
      </h1>
      <h2 style={{ 
        color: isDarkMode ? '#ccc' : '#666',
        marginBottom: '1rem'
      }}>
        Page Not Found
      </h2>
      <p style={{ 
        color: isDarkMode ? '#888' : '#999',
        marginBottom: '2rem'
      }}>
        The page you're looking for doesn't exist.
      </p>
      <Link 
        to="/"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px'
        }}
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound