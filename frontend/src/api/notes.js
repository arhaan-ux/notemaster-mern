import axios from 'axios'

// Use your backend URL from .env
const API_URL = import.meta.env.VITE_API_BASE_URL + '/notes'

// Get all notes for the logged-in user
export const getNotes = async (token) => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

// Create a new note
export const createNote = async (noteData, token) => {
  const res = await axios.post(API_URL, noteData, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

// Delete a note
export const deleteNote = async (id, token) => {
  const res = await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}
