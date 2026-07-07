import { useState } from 'react'

interface Task {
  id: number
  title: string
  text: string
  done: boolean
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState('')
  const [input, setInput] = useState('')

  // Agregar tarea
  function addTask() {
    if (!title.trim() || !input.trim()) return

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: title.trim(),
        text: input.trim(),
        done: false,
      },
    ])

    setTitle('')
    setInput('')
  }

  // Eliminar tarea
  function removeTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  // Marcar como completada
  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    )
  }

  return (
    <div
      style={{
        maxWidth: 500,
        margin: '40px auto',
        padding: 20,
        border: '1px solid #ddd',
        borderRadius: 10,
        background: '#fafafa',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Gestor de Tareas</h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          marginBottom: 20,
        }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Titulo ..."
          style={inputStyle}
        />

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Descripción de la tarea"
          style={inputStyle}
        />

        <button
          onClick={addTask}
          style={buttonStyle}
        >
          Agregar
        </button>
      </div>

      {tasks.length === 0 ? (
        <p style={{ color: '#777', textAlign: 'center' }}>
          No hay tareas registradas.
        </p>
      ) : (
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: 12,
                marginBottom: 10,
                border: '1px solid #ddd',
                borderRadius: 8,
                background: '#fff',
              }}
            >
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />

              <div style={{ flex: 1 }}>
                <strong
                  style={{
                    textDecoration: task.done ? 'line-through' : 'none',
                    color: task.done ? '#999' : '#000',
                  }}
                >
                  {task.title}
                </strong>

                <p
                  style={{
                    margin: '4px 0 0',
                    textDecoration: task.done ? 'line-through' : 'none',
                    color: task.done ? '#999' : '#555',
                  }}
                >
                  {task.text}
                </p>
              </div>

              <button
                onClick={() => removeTask(task.id)}
                style={deleteButtonStyle}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {tasks.length > 0 && (
        <p
          style={{
            marginTop: 20,
            textAlign: 'center',
            color: '#555',
          }}
        >
          Completadas: {tasks.filter((t) => t.done).length} de {tasks.length}
        </p>
      )}
    </div>
  )
}

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '14px',
}

const buttonStyle = {
  padding: '10px',
  background: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '15px',
}

const deleteButtonStyle = {
  background: '#e53935',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  padding: '6px 10px',
  cursor: 'pointer',
}