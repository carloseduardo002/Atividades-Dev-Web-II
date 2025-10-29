import React from 'react';
import TodoList from './components/TodoList';
import { useState } from "react"
import { ImageCard } from './imageCard';

// Componente principal da aplicação.
// Aqui poderíamos definir rotas ou layout principal.

export function App() {
  const [imagens, setImagens] = useState<{ src: string; legenda: string }[]>([]);
  const [novaSrc, setNovaSrc] = useState("");
  const [novaLegenda, setNovaLegenda] = useState("");
  function adicionarImagem() {
    if (!novaSrc || !novaLegenda) return;

    const novaImagem = { src: novaSrc, legenda: novaLegenda };
    setImagens([...imagens, novaImagem]);
    setNovaSrc("");
    setNovaLegenda("");
  }

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Minha Lista de Tarefas 📝</h1>
      <TodoList />
    </div>
  );
}

 return (
    <div style={{ padding: "20px" }}>
      <h1>Galeria de Imagens</h1>

      <input
        type="text"
        placeholder="URL da imagem"
        value={novaSrc}
        onChange={(e) => setNovaSrc(e.target.value)}
      />

      <input
        type="text"
        placeholder="Legenda"
        value={novaLegenda}
        onChange={(e) => setNovaLegenda(e.target.value)}
      />

      <button onClick={adicionarImagem}>Adicionar Imagem</button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
        {imagens.map((img, index) => (
          <ImageCard key={index} src={img.src} legenda={img.legenda} />
        ))}
      </div>
    </div>
  );
}

export default App;
