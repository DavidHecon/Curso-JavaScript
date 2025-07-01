import { useState } from 'react'
import InventoryManager from './InventoryManager';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <h1>Bienvenido al Gestor de Inventario</h1>
      <InventoryManager />
    </div>
  )
}

export default App
