import React from 'react';
import TodoList from './components/TodoList';
import { useState } from "react"
import { ImageCard } from './ImageCard';


export function App() {
  const [imagens, setImagens] = useState<{ src: string; legenda: string }[]>([]);
  const [novaSrc, setNovaSrc] = useState("");
  const [novaLegenda, setNovaLegenda] = useState("");
  function adicionarImagem() {
    if (!novaSrc || !novaLegenda) return; // evita campos vazios

    const novaImagem = { src: novaSrc, legenda: novaLegenda };
    setImagens([...imagens, novaImagem]); // adiciona ao array
    setNovaSrc("");
    setNovaLegenda("");
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
