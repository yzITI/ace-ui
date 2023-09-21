import { writable } from 'svelte/store'

export default writable({
  primary: '#3b82f6',
  info: '#0ea5e9',
  success: '#22c55e',
  warning: '#eab308',
  error: '#ef4444',
  default: '#6b7280'
})
