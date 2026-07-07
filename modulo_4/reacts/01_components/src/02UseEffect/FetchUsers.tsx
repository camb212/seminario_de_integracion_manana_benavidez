// src/components/FetchUser.tsx

import { useState, useEffect } from 'react'

interface Company {
  name: string
  catchPhrase: string
  bs: string
}

interface User {
  id:       number
  name:     string
  email:    string
  username: string
  company:  Company
}

export default function FetchUser() {
  const [userId,  setUserId]  = useState(1)
  const [users,    setUsers]    = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  useEffect(() => {
    // Flag de cancelación para evitar race conditions
    let cancelled = false

    async function fetchUser() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: User = await res.json()

        if (!cancelled) setUsers(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    // 1. ¡No olvides invocar la función!
    fetchUser()

    // 2. Retorna la función de limpieza para activar el flag
    return () => {
      cancelled = true
    }
  }, [userId]) // 3. Escucha los cambios de userId

  return (
    <div style={{ maxWidth: 360, padding: 20 }}>
      {/* Botón opcional para probar que cambia el estado e interactúa con el useEffect */}
      <button 
        onClick={() => setUserId(prev => prev + 1)}
        style={{ marginBottom: 12, padding: '6px 12px', cursor: 'pointer' }}
      >
        Siguiente Usuario (ID: {userId + 1})
      </button>

      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {users && !loading && (
        <div style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600 }}>{users.name}</p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            @{users.username}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {users.email}
          </p>
        </div>
      )}
    </div>
  )
}