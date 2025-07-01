import React, { useReducer, useRef, useCallback, useState, useEffect } from "react";

const initialState = {
  products: JSON.parse(localStorage.getItem("inventory")) || [],
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        products: [...state.products, { id: Date.now(), name: action.name, quantity: 1 }],
      };
    case "increment":
      return {
        products: state.products.map((p) =>
          p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
        ),
      };
    case "decrement":
      return {
        products: state.products.map((p) =>
          p.id === action.id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
        ),
      };
    case "remove":
      return { products: state.products.filter((p) => p.id !== action.id) };
    case "clear":
      return { products: [] };
    default:
      return state;
  }
}

export default function InventoryManager() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(state.products));
  }, [state.products]);

  const handleAddProduct = () => {
    if (inputRef.current.value.trim() !== "") {
      dispatch({ type: "add", name: inputRef.current.value });
      inputRef.current.value = "";
    }
  };

  const handleIncrement = useCallback((id) => {
    dispatch({ type: "increment", id });
  }, []);

  const handleDecrement = useCallback((id) => {
    dispatch({ type: "decrement", id });
  }, []);

  const filteredProducts = state.products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Gestor de Inventario</h2>
      <input ref={inputRef} type="text" placeholder="Nombre del producto" />
      <button onClick={handleAddProduct}>Agregar Producto</button>
      <input
        type="text"
        placeholder="Buscar productos"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "clear" })}>Vaciar Inventario</button>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - Cantidad: {product.quantity}
            <button onClick={() => handleIncrement(product.id)}>+</button>
            <button onClick={() => handleDecrement(product.id)}>-</button>
            <button onClick={() => dispatch({ type: "remove", id: product.id })}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
