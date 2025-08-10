// import React, { useState } from 'react'
// import { useAuth } from '../context/AuthContext'
// import { useTheme } from '../context/ThemeContext'

// const Dashboard = () => {
//   const { user } = useAuth()
//   const { isDarkMode } = useTheme()
//   const [notes, setNotes] = useState([
//     { id: 1, title: 'Welcome Note', content: 'Welcome to NoteMaster! This is your first note.', createdAt: new Date() },
//     { id: 2, title: 'Sample Note', content: 'You can create, edit, and delete notes here.', createdAt: new Date() }
//   ])
//   const [newNote, setNewNote] = useState({ title: '', content: '' })
//   const [showForm, setShowForm] = useState(false)

//   const addNote = (e) => {
//     e.preventDefault()
//     if (newNote.title.trim() && newNote.content.trim()) {
//       const note = {
//         id: Date.now(),
//         title: newNote.title,
//         content: newNote.content,
//         createdAt: new Date()
//       }
//       setNotes([note, ...notes])
//       setNewNote({ title: '', content: '' })
//       setShowForm(false)
//     }
//   }

//   const deleteNote = (id) => {
//     setNotes(notes.filter(note => note.id !== id))
//   }

//   return (
//     <div style={{ padding: '2rem' }}>
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '2rem'
//       }}>
//         <h1 style={{ color: isDarkMode ? '#fff' : '#333' }}>
//           My Notes
//         </h1>
//         <button
//           onClick={() => setShowForm(!showForm)}
//           style={{
//             padding: '0.75rem 1.5rem',
//             backgroundColor: '#007bff',
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }}
//         >
//           {showForm ? 'Cancel' : '+ Add Note'}
//         </button>
//       </div>

//       {/* Add Note Form */}
//       {showForm && (
//         <div style={{
//           backgroundColor: isDarkMode ? '#2d2d2d' : '#f8f9fa',
//           padding: '1.5rem',
//           borderRadius: '10px',
//           marginBottom: '2rem',
//           border: '1px solid',
//           borderColor: isDarkMode ? '#444' : '#dee2e6'
//         }}>
//           <h3 style={{ 
//             marginBottom: '1rem',
//             color: isDarkMode ? '#fff' : '#333'
//           }}>
//             Create New Note
//           </h3>
//           <form onSubmit={addNote}>
//             <input
//               type="text"
//               placeholder="Note title..."
//               value={newNote.title}
//               onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 marginBottom: '1rem',
//                 border: '1px solid',
//                 borderColor: isDarkMode ? '#555' : '#ddd',
//                 borderRadius: '5px',
//                 backgroundColor: isDarkMode ? '#444' : '#fff',
//                 color: isDarkMode ? '#fff' : '#333'
//               }}
//             />
//             <textarea
//               placeholder="Write your note content..."
//               value={newNote.content}
//               onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
//               rows="4"
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 marginBottom: '1rem',
//                 border: '1px solid',
//                 borderColor: isDarkMode ? '#555' : '#ddd',
//                 borderRadius: '5px',
//                 backgroundColor: isDarkMode ? '#444' : '#fff',
//                 color: isDarkMode ? '#fff' : '#333',
//                 resize: 'vertical'
//               }}
//             />
//             <button
//               type="submit"
//               style={{
//                 padding: '0.75rem 1.5rem',
//                 backgroundColor: '#28a745',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '5px',
//                 cursor: 'pointer'
//               }}
//             >
//               Save Note
//             </button>
//           </form>
//         </div>
//       )}

//       {/* Notes Grid */}
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
//         gap: '1.5rem'
//       }}>
//         {notes.map(note => (
//           <div
//             key={note.id}
//             style={{
//               backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
//               padding: '1.5rem',
//               borderRadius: '10px',
//               boxShadow: isDarkMode ? '0 2px 4px rgba(0,0,0,0.3)' : '0 2px 4px rgba(0,0,0,0.1)',
//               border: '1px solid',
//               borderColor: isDarkMode ? '#444' : '#e9ecef'
//             }}
//           >
//             <div style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'flex-start',
//               marginBottom: '1rem'
//             }}>
//               <h3 style={{ 
//                 margin: 0, 
//                 color: isDarkMode ? '#fff' : '#333',
//                 flexGrow: 1
//               }}>
//                 {note.title}
//               </h3>
//               <button
//                 onClick={() => deleteNote(note.id)}
//                 style={{
//                   backgroundColor: '#dc3545',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '3px',
//                   padding: '0.25rem 0.5rem',
//                   cursor: 'pointer',
//                   fontSize: '12px'
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//             <p style={{ 
//               color: isDarkMode ? '#ccc' : '#666',
//               lineHeight: '1.5',
//               marginBottom: '1rem'
//             }}>
//               {note.content}
//             </p>
//             <small style={{ color: isDarkMode ? '#888' : '#999' }}>
//               Created: {note.createdAt.toLocaleDateString()}
//             </small>
//           </div>
//         ))}
//       </div>

//       {notes.length === 0 && (
//         <div style={{
//           textAlign: 'center',
//           padding: '3rem',
//           color: isDarkMode ? '#888' : '#666'
//         }}>
//           <p>No notes yet. Create your first note!</p>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Dashboard
























// import React, { useState, useEffect } from 'react'
// import { useAuth } from '../context/AuthContext'
// import { useTheme } from '../context/ThemeContext'
// import API from '../utils/api' // <-- we'll create this

// const Dashboard = () => {
//   const { user } = useAuth()
//   const { isDarkMode } = useTheme()
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState({ title: '', content: '' })
//   const [showForm, setShowForm] = useState(false)
//   const [loading, setLoading] = useState(false)

//   // Fetch notes from backend
//   useEffect(() => {
//     fetchNotes()
//   }, [])

//   const fetchNotes = async () => {
//     try {
//       setLoading(true)
//       const { data } = await API.get('/notes')
//       if (data.success) setNotes(data.notes)
//     } catch (error) {
//       console.error('Error fetching notes:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const addNote = async (e) => {
//     e.preventDefault()
//     if (!newNote.title.trim() || !newNote.content.trim()) return

//     try {
//       const { data } = await API.post('/notes', newNote)
//       if (data.success) {
//         setNotes([data.note, ...notes])
//         setNewNote({ title: '', content: '' })
//         setShowForm(false)
//       }
//     } catch (error) {
//       console.error('Error adding note:', error)
//     }
//   }

//   const deleteNote = async (id) => {
//     if (!window.confirm('Delete this note?')) return
//     try {
//       const { data } = await API.delete(`/notes/${id}`)
//       if (data.success) {
//         setNotes(notes.filter(note => note._id !== id))
//       }
//     } catch (error) {
//       console.error('Error deleting note:', error)
//     }
//   }

//   return (
//     <div style={{ padding: '2rem' }}>
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '2rem'
//       }}>
//         <h1 style={{ color: isDarkMode ? '#fff' : '#333' }}>
//           My Notes
//         </h1>
//         <button
//           onClick={() => setShowForm(!showForm)}
//           style={{
//             padding: '0.75rem 1.5rem',
//             backgroundColor: '#007bff',
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }}
//         >
//           {showForm ? 'Cancel' : '+ Add Note'}
//         </button>
//       </div>

//       {/* Add Note Form */}
//       {showForm && (
//         <div style={{
//           backgroundColor: isDarkMode ? '#2d2d2d' : '#f8f9fa',
//           padding: '1.5rem',
//           borderRadius: '10px',
//           marginBottom: '2rem',
//           border: '1px solid',
//           borderColor: isDarkMode ? '#444' : '#dee2e6'
//         }}>
//           <h3 style={{
//             marginBottom: '1rem',
//             color: isDarkMode ? '#fff' : '#333'
//           }}>
//             Create New Note
//           </h3>
//           <form onSubmit={addNote}>
//             <input
//               type="text"
//               placeholder="Note title..."
//               value={newNote.title}
//               onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 marginBottom: '1rem',
//                 border: '1px solid',
//                 borderColor: isDarkMode ? '#555' : '#ddd',
//                 borderRadius: '5px',
//                 backgroundColor: isDarkMode ? '#444' : '#fff',
//                 color: isDarkMode ? '#fff' : '#333'
//               }}
//               required
//             />
//             <textarea
//               placeholder="Write your note content..."
//               value={newNote.content}
//               onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
//               rows="4"
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 marginBottom: '1rem',
//                 border: '1px solid',
//                 borderColor: isDarkMode ? '#555' : '#ddd',
//                 borderRadius: '5px',
//                 backgroundColor: isDarkMode ? '#444' : '#fff',
//                 color: isDarkMode ? '#fff' : '#333',
//                 resize: 'vertical'
//               }}
//               required
//             />
//             <button
//               type="submit"
//               style={{
//                 padding: '0.75rem 1.5rem',
//                 backgroundColor: '#28a745',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '5px',
//                 cursor: 'pointer'
//               }}
//             >
//               Save Note
//             </button>
//           </form>
//         </div>
//       )}

//       {/* Notes Grid */}
//       {loading ? (
//         <p>Loading notes...</p>
//       ) : (
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
//           gap: '1.5rem'
//         }}>
//           {notes.map(note => (
//             <div
//               key={note._id}
//               style={{
//                 backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
//                 padding: '1.5rem',
//                 borderRadius: '10px',
//                 boxShadow: isDarkMode ? '0 2px 4px rgba(0,0,0,0.3)' : '0 2px 4px rgba(0,0,0,0.1)',
//                 border: '1px solid',
//                 borderColor: isDarkMode ? '#444' : '#e9ecef'
//               }}
//             >
//               <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'flex-start',
//                 marginBottom: '1rem'
//               }}>
//                 <h3 style={{
//                   margin: 0,
//                   color: isDarkMode ? '#fff' : '#333',
//                   flexGrow: 1
//                 }}>
//                   {note.title}
//                 </h3>
//                 <button
//                   onClick={() => deleteNote(note._id)}
//                   style={{
//                     backgroundColor: '#dc3545',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '3px',
//                     padding: '0.25rem 0.5rem',
//                     cursor: 'pointer',
//                     fontSize: '12px'
//                   }}
//                 >
//                   Delete
//                 </button>
//               </div>
//               <p style={{
//                 color: isDarkMode ? '#ccc' : '#666',
//                 lineHeight: '1.5',
//                 marginBottom: '1rem'
//               }}>
//                 {note.content}
//               </p>
//               <small style={{ color: isDarkMode ? '#888' : '#999' }}>
//                 Created: {new Date(note.createdAt).toLocaleDateString()}
//               </small>
//             </div>
//           ))}
//         </div>
//       )}

//       {notes.length === 0 && !loading && (
//         <div style={{
//           textAlign: 'center',
//           padding: '3rem',
//           color: isDarkMode ? '#888' : '#666'
//         }}>
//           <p>No notes yet. Create your first note!</p>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Dashboard


























import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import api from "../api/api"; // we created this in Step 4

const Dashboard = () => {
  const { user } = useAuth();
  const { isDarkMode } = useTheme();

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch notes from backend
  const fetchNotes = async () => {
    try {
      const res = await api.get("/notes");
      setNotes(res.data.notes || []);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a new note
  const addNote = async (e) => {
    e.preventDefault();
    if (!newNote.title.trim() || !newNote.content.trim()) return;

    try {
      const res = await api.post("/notes", newNote);
      setNotes([res.data.note, ...notes]);
      setNewNote({ title: "", content: "" });
      setShowForm(false);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete note
  const deleteNote = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <h1 style={{ color: isDarkMode ? "#fff" : "#333" }}>My Notes</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {showForm ? "Cancel" : "+ Add Note"}
        </button>
      </div>

      {/* Add Note Form */}
      {showForm && (
        <div
          style={{
            backgroundColor: isDarkMode ? "#2d2d2d" : "#f8f9fa",
            padding: "1.5rem",
            borderRadius: "10px",
            marginBottom: "2rem",
            border: "1px solid",
            borderColor: isDarkMode ? "#444" : "#dee2e6",
          }}
        >
          <h3
            style={{
              marginBottom: "1rem",
              color: isDarkMode ? "#fff" : "#333",
            }}
          >
            Create New Note
          </h3>
          <form onSubmit={addNote}>
            <input
              type="text"
              placeholder="Note title..."
              value={newNote.title}
              onChange={(e) =>
                setNewNote({ ...newNote, title: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.75rem",
                marginBottom: "1rem",
                border: "1px solid",
                borderColor: isDarkMode ? "#555" : "#ddd",
                borderRadius: "5px",
                backgroundColor: isDarkMode ? "#444" : "#fff",
                color: isDarkMode ? "#fff" : "#333",
              }}
            />
            <textarea
              placeholder="Write your note content..."
              value={newNote.content}
              onChange={(e) =>
                setNewNote({ ...newNote, content: e.target.value })
              }
              rows="4"
              style={{
                width: "100%",
                padding: "0.75rem",
                marginBottom: "1rem",
                border: "1px solid",
                borderColor: isDarkMode ? "#555" : "#ddd",
                borderRadius: "5px",
                backgroundColor: isDarkMode ? "#444" : "#fff",
                color: isDarkMode ? "#fff" : "#333",
                resize: "vertical",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Save Note
            </button>
          </form>
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <p style={{ color: isDarkMode ? "#ccc" : "#555" }}>Loading notes...</p>
      ) : notes.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "3rem",
            color: isDarkMode ? "#888" : "#666",
          }}
        >
          <p>No notes yet. Create your first note!</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {notes.map((note) => (
            <div
              key={note._id}
              style={{
                backgroundColor: isDarkMode ? "#2d2d2d" : "#ffffff",
                padding: "1.5rem",
                borderRadius: "10px",
                boxShadow: isDarkMode
                  ? "0 2px 4px rgba(0,0,0,0.3)"
                  : "0 2px 4px rgba(0,0,0,0.1)",
                border: "1px solid",
                borderColor: isDarkMode ? "#444" : "#e9ecef",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    color: isDarkMode ? "#fff" : "#333",
                    flexGrow: 1,
                  }}
                >
                  {note.title}
                </h3>
                <button
                  onClick={() => deleteNote(note._id)}
                  style={{
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "3px",
                    padding: "0.25rem 0.5rem",
                    cursor: "pointer",
                    fontSize: "12px",
                  }}
                >
                  Delete
                </button>
              </div>
              <p
                style={{
                  color: isDarkMode ? "#ccc" : "#666",
                  lineHeight: "1.5",
                  marginBottom: "1rem",
                }}
              >
                {note.content}
              </p>
              <small style={{ color: isDarkMode ? "#888" : "#999" }}>
                Created: {new Date(note.createdAt).toLocaleDateString()}
              </small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
