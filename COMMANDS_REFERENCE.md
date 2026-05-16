# 📖 Referência de Comandos

Todos os comandos importantes para desenvolvimento e deploy.

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar servidor local com hot reload
npm run dev

# Build para produção
npm run build

# Pré-visualizar build
npm run preview

# Verificar tipos TypeScript
npm run check

# Formatar código
npm run format
```

## 🚀 Deploy

### Vercel CLI
```bash
# Instalar Vercel CLI (uma vez)
npm i -g vercel

# Login
vercel login

# Deploy para produção
vercel --prod

# Deploy para preview
vercel

# Ver logs
vercel logs
```

### GitHub + Vercel Web
```bash
# 1. Fazer push para GitHub
git add .
git commit -m "feat: mensagem do commit"
git push origin main

# 2. Acessar vercel.com e conectar repositório
# 3. Vercel detectará automaticamente e fará deploy
```

## 📝 Git Workflow

```bash
# Configurar git (primeira vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Inicializar repositório
git init
git remote add origin https://github.com/usuario/repo.git

# Trabalhar com mudanças
git status                          # Ver status
git add .                           # Adicionar todos
git commit -m "mensagem"            # Commitar
git push origin main                # Fazer push
git pull origin main                # Puxar mudanças

# Ver histórico
git log --oneline                   # Ver commits
git diff                            # Ver mudanças
```

## 📦 Npm Scripts Personalizados

Se quiser adicionar novos scripts, edite `package.json`:

```json
{
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "preview": "vite preview --host",
    "check": "tsc --noEmit",
    "format": "prettier --write .",
    "analyze": "npm run build -- --analyze"  // novo
  }
}
```

## 🔍 Debugging

```bash
# Verificar se há erros TypeScript
npm run check

# Verificar se há problemas de build
npm run build

# Rodar com mais logs
npm run dev -- --debug

# Listar versões de dependências
npm list
npm list --depth=0  // apenas top-level
```

## 📦 Gerenciar Dependências

```bash
# Adicionar pacote
npm install nome-pacote

# Adicionar como dev dependency
npm install --save-dev nome-pacote

# Atualizar pacotes
npm update

# Remover pacote
npm uninstall nome-pacote

# Limpar cache npm
npm cache clean --force

# Reinstalar tudo
rm -rf node_modules package-lock.json
npm install
```

## 🗂️ Estrutura de Pastas Quick Reference

```
familia-ribeiro-app/
├── client/
│   ├── src/
│   │   ├── components/  → Componentes React
│   │   ├── data/        → Dados (familyData.ts)
│   │   ├── types/       → Tipos TypeScript
│   │   └── App.tsx      → Componente principal
│   ├── index.html       → HTML base
│   └── tailwind.config.ts → Estilos
├── package.json         → Dependências
└── README.md           → Documentação
```

## 🎨 Editar Dados/Design

### Adicionar Nova Foto
1. Fazer upload da foto para GitHub: `/familia-ribeiro/`
2. Editar `client/src/data/familyData.ts`
3. Adicionar item em `gallery`

### Mudar Cores
Editar `client/src/index.css`:
```css
:root {
  --primary: #6b4423;      /* Mude a cor aqui */
  --secondary: #3d5a3d;
  /* ... */
}
```

### Adicionar Nova Seção
1. Criar arquivo em `client/src/components/MinhaSecao.tsx`
2. Importar em `client/src/App.tsx`
3. Adicionar interface em `client/src/types/index.ts`

## 🔐 Variáveis de Ambiente

Criar arquivo `.env.local` (nunca fazer commit):

```env
VITE_API_URL=https://api.exemplo.com
VITE_GITHUB_TOKEN=seu_token_aqui
```

Acessar em código:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## ✨ Performance Tips

```bash
# Analisar bundle size
npm run build -- --report

# Verificar tempo de build
time npm run build

# Limpar cache antes de build
rm -rf dist
npm run build
```

## 🆘 Troubleshooting Rápido

| Problema | Solução |
|----------|---------|
| Porta 3000 ocupada | `npm run dev -- --port 3001` |
| Erro de dependências | `npm install` |
| Erro de tipos | `npm run check` |
| Build quebrado | `rm -rf dist && npm run build` |
| Vercel deploy falhou | Verificar `DEPLOYMENT.md` |
| Imagens não carregam | Verificar URL do GitHub |

## 📚 Documentação Rápida

- **Como usar**: `QUICK_START.md`
- **Deployment completo**: `DEPLOYMENT.md`
- **Resumo do projeto**: `PROJECT_SUMMARY.md`
- **README completo**: `README.md`

---

**Dica**: Salve este arquivo e consulte quando precisar! 💾
