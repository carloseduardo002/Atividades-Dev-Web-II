# 📝 React + TypeScript – To-Do List

Este projeto demonstra os principais conceitos de React com TypeScript apresentados em aula, incluindo:

- Componentização
- Estado com `useState`
- Eventos
- Props
- Tipagem com TypeScript
- Estrutura de pastas organizada

---

---

## 🎯 Exercício – Galeria de Imagens

### Objetivo
Crie uma **galeria de imagens** usando os conceitos apresentados no exemplo da To-Do List.

### Instruções

1. **Crie um componente `ImageCard`**
   - Props: `src` (URL da imagem), `legenda` (string)
   - Exiba a imagem com uma legenda abaixo.

2. **No `App.tsx`, crie um estado para armazenar as imagens**
   - Dica: `useState<{ src: string; legenda: string }[]>`

3. **Adicione um formulário com inputs para adicionar novas imagens**
   - Input para URL
   - Input para legenda
   - Botão que adiciona ao array de imagens

4. **Renderize a lista de `ImageCard` com `.map()`**
   - Baseie-se na lógica usada na lista de tarefas.

### Exemplo esperado:

```tsx
<ImageCard src="https://placecats.com/neo_banana/300/200" legenda="Gatinho fofo" />
```
