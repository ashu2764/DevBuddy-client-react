import { request } from './client.js'

export function login({ email, password }) {
  return request('/auth/login', { method: 'POST', body: { email, password } })
}

export function signup({ name, email, password }) {
  return request('/auth/signup', { method: 'POST', body: { name, email, password } })
}

export function requestPasswordReset({ email }) {
  return request('/auth/forgot-password', { method: 'POST', body: { email } })
}


