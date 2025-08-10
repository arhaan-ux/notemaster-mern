import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const { user, logout } = useAuth()
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <nav style={{
      padding: '1rem 2rem',
      backgroundColor: isDarkMode ? '#2d2d2d' : '#f8f9fa',
      borderBottom: '1px solid',
      borderColor: isDarkMode ? '#444' : '#dee2e6',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{ margin: 0, color: isDarkMode ? '#fff' : '#333' }}>
        📝 NoteMaster
      </h1>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          style={{
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: isDarkMode ? '#444' : '#e9ecef',
            color: isDarkMode ? '#fff' : '#333',
            cursor: 'pointer'
          }}
        >
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>

        {/* User Info and Logout */}
        {user && (
          <>
            <span style={{ color: isDarkMode ? '#fff' : '#333' }}>
              Welcome, {user.username}!
            </span>
            <button
              onClick={logout}
              style={{
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#dc3545',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar