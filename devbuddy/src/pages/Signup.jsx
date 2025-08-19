import { useState } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../api/auth.js'

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [submitting, setSubmitting] = useState(false)

  function updateField(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    setSubmitting(true)
    try {
      await signup({ name: form.name, email: form.email, password: form.password })
      alert('Signup API not configured. Replace with real endpoint in src/api/auth.js')
    } catch (error) {
      console.error(error)
      alert('Signup failed')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="auth-wrapper">
      <form className="auth-card" onSubmit={handleSubmit}>
        <div className="auth-title">Get started for free</div>
        <input name="name" value={form.name} onChange={updateField} type="text" className="field" placeholder="Full name" required />
        <input name="email" value={form.email} onChange={updateField} type="email" className="field" placeholder="Email" required />
        <input name="password" value={form.password} onChange={updateField} type="password" className="field" placeholder="Password" required />
        <input name="confirmPassword" value={form.confirmPassword} onChange={updateField} type="password" className="field" placeholder="Confirm password" required />
        <button type="submit" className="primary" disabled={submitting}>{submitting ? 'Signing up...' : 'Sign Up'}</button>

        <div style={{ textAlign: 'center', marginTop: 10, color: '#6b6f7b', fontSize: 12 }}>Or continue with</div>
        <button type="button" className="oauth-btn">Continue with GitHub</button>
        <button type="button" className="oauth-btn">Continue with Google</button>
        <div style={{ marginTop: 12, fontSize: 13, color: '#6b6f7b' }}>
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </form>
    </div>
  )
}

export default Signup


