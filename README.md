# Memorial Genealógico - Família Ribeiro de Carvalho

Aplicação React moderna e profissional para preservação e apresentação do patrimônio genealógico da Família Ribeiro de Carvalho.

## Características

- ✨ **Design Profissional**: Interface elegante com paleta de cores históricas (tons terrosos)
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🎨 **Componentes Modernos**: Construído com React 18 + TypeScript
- ⚡ **Performance Otimizada**: Vite para build rápido e eficiente
- 🎯 **Seções Organizadas**:
  - Membros da família com detalhes genealógicos
  - Linha do tempo com marcos importantes
  - Galeria de fotos com categorias
  - Documentários em vídeo
  - Contribuições e depoimentos

## Stack Tecnológico

- **React 18**: UI library moderna
- **TypeScript**: Type safety total
- **Vite**: Build tool ultrarrápido
- **Tailwind CSS**: Styling utilitário
- **Lucide React**: Ícones modernos

## Estrutura do Projeto

```
familia-ribeiro-app/
├── client/
│   ├── src/
│   │   ├── components/      # Componentes React reutilizáveis
│   │   ├── pages/           # Páginas principais
│   │   ├── data/            # Dados genealógicos
│   │   ├── types/           # Tipos TypeScript
│   │   ├── App.tsx          # Componente principal
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Estilos globais
│   ├── index.html           # HTML base
│   └── tailwind.config.ts   # Configuração Tailwind
├── package.json             # Dependências e scripts
├── vite.config.ts          # Configuração Vite
└── tsconfig.json           # Configuração TypeScript
```

## Começar a Usar

### Instalação

```bash
# Instalar dependências
npm install

# Ou com yarn
yarn install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Servidor rodará em http://localhost:3000
```

### Build para Produção

```bash
# Fazer build otimizado
npm run build

# Pré-visualizar build
npm run preview
```

## Dados Genealógicos

Os dados da família estão centralizados em `client/src/data/familyData.ts`, facilitando atualizações e manutenção.

### Estrutura de Dados

- **Members**: Membros da família com dados genealógicos
- **Timeline**: Marcos históricos importantes
- **Gallery**: Fotografias organizadas por categorias
- **Videos**: Documentários familiares

### Atualizando Dados

Para adicionar ou atualizar informações genealógicas, edite o arquivo `familyData.ts` e as mudanças aparecerão automaticamente.

## Imagens e Mídia

As imagens e vídeos estão hospedados no repositório GitHub:
```
https://raw.githubusercontent.com/marciovasj7-glitch/familia-ribeiro/main/
```

As referências são codificadas com URL encoding para caracteres especiais.

## Deploy

### No Vercel (Recomendado)

1. Fazer push para GitHub
2. Conectar repositório no Vercel
3. Vercel detectará automaticamente a configuração Vite
4. Deploy automático em cada push

### Variáveis de Ambiente

Criar arquivo `.env.local` na raiz do projeto (se necessário):

```env
VITE_API_URL=sua_url_aqui
```

## Desenvolvimento Futuro

- [ ] Busca genealógica avançada
- [ ] Árvore genealógica interativa
- [ ] Sistema de comentários
- [ ] Exportar árvore em PDF
- [ ] Painel administrativo para edição

## Contribuindo

Este é um projeto dedicado à preservação da memória familiar. Contribuições para melhorias são bem-vindas!

## Licença

Todos os direitos reservados à Família Ribeiro de Carvalho.

---

*"A memória é o tesouro da família. Através destes registros, garantimos que as vozes de nossos antepassados ecoem para sempre."*
