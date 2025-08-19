import { useState } from 'react'
import { Link } from 'react-router-dom'
import { requestPasswordReset } from '../api/auth.js'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    try {
      await requestPasswordReset({ email })
      alert('If this were connected, a reset link would be sent.')
    } catch (error) {
      console.error(error)
      alert('Reset API not configured. Replace endpoint in src/api/auth.js')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="auth-wrapper">
      <form className="auth-card" onSubmit={handleSubmit}>
        <div className="auth-title">Forgot password</div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="field" placeholder="Email" required />
        <button type="submit" className="primary" disabled={submitting}>{submitting ? 'Sending...' : 'Send reset link'}</button>
        <div style={{ marginTop: 12 }}>
          <Link to="/login" className="muted-link">Back to login</Link>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword


