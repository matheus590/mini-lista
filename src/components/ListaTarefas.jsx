import { useState } from 'react'
export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState([])
  const [texto, setTexto] = useState('')

  function adicionarTarefa() {
    if (texto.trim() === '') return

    setTarefas((prev) => [...prev, texto.trim()])
    setTexto('')
  }

  function removerTarefa(indexRemover) {
    setTarefas((prev) =>
      prev.filter((_, index) => index !== indexRemover)
    )
  }

  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>

      <input
        type="text"
        value={texto}
        onChange={(event) => setTexto(event.target.value)}
        placeholder="Digite uma tarefa"
      />

      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={`${tarefa}-${index}`}>
            {tarefa}{' '}
            <button onClick={() => removerTarefa(index)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
