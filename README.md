# 📚 Parâmetros e Escopo em Java - Apresentação Interativa

Uma apresentação web interativa sobre conceitos fundamentais de **Parâmetros e Escopo em Java**, desenvolvida para o curso Técnico de Informática - 2° Ano, disciplina de Lógica de Programação II.

## 🎯 Objetivo

Esta apresentação tem como objetivo ensinar de forma prática e visual os conceitos de:
- **Escopo de Variáveis** (Local, Classe e Global)
- **Passagem de Parâmetros** por valor
- **Boas Práticas** de programação
- **Efeitos Colaterais** vs **Funções Puras**

## 🚀 Funcionalidades

### 📖 Apresentação de Slides
- **7 slides interativos** com conteúdo didático
- Navegação por botões ou teclas de seta (← →)
- Transições suaves entre slides
- Design responsivo e moderno

### 🧪 Demonstrações Práticas
- **Demonstração de Modificação**: Mostra como arrays são modificados diretamente
- **Demonstração de Cópia**: Ilustra como criar cópias sem afetar o original
- **Algoritmo de Ordenação**: Implementação do Bubble Sort
- **Comparação Visual**: Diferença entre funções com e sem efeitos colaterais

### 🎨 Interface Moderna
- Design com **glassmorphism** e gradientes suaves
- Cores pastéis para melhor experiência visual
- Animações e transições fluidas
- Ícones e elementos visuais intuitivos

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da apresentação
- **CSS3**: Estilos customizados e animações
- **JavaScript**: Lógica de navegação e demonstrações
- **Tailwind CSS**: Framework CSS para estilização rápida
- **Google Fonts**: Tipografia (Inter)

## 📁 Estrutura do Projeto

```
├── index.html      # Arquivo principal da apresentação
├── main.js         # Lógica JavaScript (navegação e demos)
├── style.css       # Estilos customizados
└── README.md       # Documentação do projeto
```

## 🎮 Como Usar

### Executar Localmente
1. Clone ou baixe os arquivos do projeto
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Use os botões de navegação ou as teclas ← → para navegar entre os slides

### Navegação
- **Botões**: Use "Anterior" e "Próximo" na parte inferior
- **Teclado**: Teclas de seta esquerda (←) e direita (→)
- **Contador**: Visualize o progresso (slide atual / total)

### Demonstrações Interativas
No **Slide 6 - Atividade Prática**, você encontrará:
- Botão **"Demonstrar Modificação"**: Modifica o array original
- Botão **"Demonstrar Cópia"**: Cria uma cópia ordenada
- Botão **"Resetar"**: Restaura o array ao estado inicial

## 📚 Conteúdo dos Slides

1. **Slide 1**: Título e apresentação do curso
2. **Slide 2**: Conceitos de Escopo de Variáveis
3. **Slide 3**: Exemplos práticos de Escopo
4. **Slide 4**: Passagem de Parâmetros por Valor
5. **Slide 5**: Boas Práticas de Programação
6. **Slide 6**: Atividade Prática Interativa
7. **Slide 7**: Resumo e Conclusões

## 🎓 Conceitos Abordados

### Escopo de Variáveis
- **Local**: Variáveis dentro de métodos ou blocos
- **Classe**: Variáveis de instância da classe
- **Global**: Variáveis estáticas acessíveis globalmente

### Passagem de Parâmetros
- Como Java passa parâmetros **por valor**
- Diferença entre tipos primitivos e objetos
- Impacto na modificação de dados

### Boas Práticas
- **Imutabilidade**: Preferir dados que não mudam
- **Funções Puras**: Evitar efeitos colaterais
- **Nomenclatura Clara**: Usar nomes descritivos
- **Responsabilidade Única**: Uma função, uma responsabilidade

## 🔧 Funcionalidades JavaScript

### Navegação de Slides
```javascript
showSlide(index)     // Exibe slide específico
changeSlide(direction) // Navega entre slides
```

### Demonstrações
```javascript
demonstrarModificacao() // Modifica array original
demonstrarCopia()       // Cria cópia ordenada
resetarDemo()          // Reseta demonstração
ordenarArray(array)    // Algoritmo Bubble Sort
```

## 🎨 Personalização

### Cores
O projeto usa um sistema de cores pastéis definido no Tailwind CSS:
- `pastel-blue`, `pastel-purple`, `pastel-pink`
- `pastel-green`, `pastel-yellow`, `pastel-orange`
- `soft-blue`, `soft-purple`, `soft-pink`
- `soft-green`, `soft-yellow`, `soft-orange`

### Animações
- **Transição de slides**: Efeito slide-in suave
- **Hover effects**: Transformações em elementos interativos
- **Glassmorphism**: Efeito de vidro com blur

## 🌐 Compatibilidade

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móveis (design responsivo)

## 📝 Licença

Este projeto é de uso educacional, desenvolvido para fins didáticos no curso Técnico de Informática.

## 👨‍💻 Contribuição

Sugestões e melhorias são bem-vindas! Este material pode ser adaptado para outras disciplinas ou conceitos de programação.

---

**Desenvolvido para:** Curso Técnico de Informática - 2° Ano  
**Disciplina:** Lógica de Programação II  
**Tema:** Parâmetros e Escopo em Java