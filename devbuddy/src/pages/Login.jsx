import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../api/auth.js'

function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const [submitting, setSubmitting] = useState(false)

  function updateField(event) {
    const { name, value, type, checked } = event.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    try {
      await login({ email: form.email, password: form.password })
      navigate('/signup')
    } catch (error) {
      console.error(error)
      alert('Login API not configured. Replace with real endpoint in src/api/auth.js')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="auth-wrapper">
      <form className="auth-card" onSubmit={handleSubmit}>
        <div className="auth-title">Log in to DevBuddy</div>
        <input name="email" value={form.email} onChange={updateField} type="email" className="field" placeholder="Email" required />
        <input name="password" value={form.password} onChange={updateField} type="password" className="field" placeholder="Password" required />
        <div className="row">
          <label>
            <input name="remember" type="checkbox" checked={form.remember} onChange={updateField} /> {' '}Remember me
          </label>
          <Link to="/forgot-password" className="muted-link">Forgot password?</Link>
        </div>
        <button type="submit" className="primary" disabled={submitting}>{submitting ? 'Logging in...' : 'Log in'}</button>

        <div className="divider"><span>or</span></div>
        <button type="button" className="oauth-btn">Continue with GitForge</button>
        <button type="button" className="oauth-btn">Continue with SearchEngineCo</button>
        <div style={{ marginTop: 12, fontSize: 13, color: '#6b6f7b' }}>
          New here? <Link to="/signup">Create an account</Link>
        </div>
      </form>
    </div>
  )
}

export default Login


