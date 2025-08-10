// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { ThemeProvider } from './context/ThemeContext'
// import { AuthProvider } from './context/AuthContext'
// import Navbar from './components/Navbar'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import Dashboard from './pages/Dashboard'
// import NotFound from './pages/NotFound'
// import ProtectedRoute from './components/ProtectedRoute'
// import './index.css'

// function App() {
//   return (
//     <ThemeProvider>
//       <AuthProvider>
//         <Router>
//           <div className="App">
//             <Navbar />
//             <main className="main-content">
//               <Routes>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route 
//                   path="/" 
//                   element={
//                     <ProtectedRoute>
//                       <Dashboard />
//                     </ProtectedRoute>
//                   } 
//                 />
//                 <Route 
//                   path="/dashboard" 
//                   element={
//                     <ProtectedRoute>
//                       <Dashboard />
//                     </ProtectedRoute>
//                   } 
//                 />
//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//             </main>
//           </div>
//         </Router>
//       </AuthProvider>
//     </ThemeProvider>
//   )
// }

// export default App



















import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './index.css'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="App">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route 
                  path="/" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
