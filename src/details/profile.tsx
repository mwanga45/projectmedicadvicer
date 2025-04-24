
import { useState } from "react"
import "./profile.css"
import React from "react"

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    occupation: "",
    location: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="profile-container">
      <div className="form-section">
        <h2>Profile Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="occupation">Occupation</label>
            <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} rows={4}></textarea>
          </div>
           <div className="container-btn">
          <button type="submit" className="submit-btn">Create Profile</button>
           </div>
          
        </form>
      </div>

      {submitted && (
        <div className="profile-card">
          <h2>Profile Details</h2>
          <div className="profile-info">
            <div className="info-item">
              <span className="label">Name:</span>
              <span className="value">{formData.name}</span>
            </div>

            <div className="info-item">
              <span className="label">Email:</span>
              <span className="value">{formData.email}</span>
            </div>

            {formData.occupation && (
              <div className="info-item">
                <span className="label">Occupation:</span>
                <span className="value">{formData.occupation}</span>
              </div>
            )}

            {formData.location && (
              <div className="info-item">
                <span className="label">Location:</span>
                <span className="value">{formData.location}</span>
              </div>
            )}

            {formData.bio && (
              <div className="info-item bio">
                <span className="label">Bio:</span>
                <p className="value">{formData.bio}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
