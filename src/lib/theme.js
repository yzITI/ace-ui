import { writable } from 'svelte/store'

export const color = writable({
  primary: '',
  secondary: ''
})
