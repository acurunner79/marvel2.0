import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '../AppState'


const SearchForm = () => {

    const { state } = useAppState()

    const navigate = useNavigate()
    
    const [formData, setFormData] = useState({})
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    state.searchInput = formData.name
    
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/character-display', {searchInput: state.searchInput})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type='text'
                    name='name'
                    value={formData.characterName}
                    onChange={handleChange}
                />
            </label>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SearchForm
