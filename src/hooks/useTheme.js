import { useState, useEffect } from 'react'

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? match[2] : null
}

function setCookie(name, value) {
  const expires = new Date(Date.now() + 365 * 864e5).toUTCString()
  document.cookie = `${name}=${value}; expires=${expires}; path=/`
}

export function useTheme() {
  const [theme, setTheme] = useState(() => getCookie('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    setCookie('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return { theme, toggleTheme }
}
