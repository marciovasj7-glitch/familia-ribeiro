# Guia de Deployment - Memorial Genealógico

Este documento contém as instruções para fazer o deployment da aplicação React no GitHub e Vercel.

## Pré-requisitos

- Node.js 18+ instalado
- Git instalado
- Conta no GitHub
- Conta no Vercel (opcional, mas recomendado)
- GitHub Personal Access Token (se ainda não tiver)

## Passo 1: Preparar o Repositório Local

```bash
# Clonar ou acessar o repositório
cd familia-ribeiro-app

# Instalar dependências
npm install

# Verificar se tudo funciona localmente
npm run dev

# Fazer build para testes
npm run build
```

## Passo 2: Fazer Push para o GitHub

### Opção A: Novo Repositório

```bash
# Inicializar git (se não estiver já inicializado)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "feat: aplicação React profissional com Vite + TypeScript

- Arquitetura moderna com componentes React reutilizáveis
- Design responsivo com Tailwind CSS
- Dados genealógicos estruturados
- Integração com fotos do GitHub
- Otimizado para performance e SEO"

# Renomear branch para main
git branch -M main

# Adicionar remote do GitHub
git remote add origin https://github.com/SEU_USUARIO/familia-ribeiro.git

# Fazer push
git push -u origin main
```

### Opção B: Atualizar Repositório Existente

```bash
# Adicionar novo remote ou atualizar
git remote set-url origin https://github.com/marciovasj7-glitch/familia-ribeiro.git

# Fazer commit
git add .
git commit -m "refactor: transformar em aplicação React moderna"

# Push
git push origin main
```

## Passo 3: Deploy no Vercel

### Opção A: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel --prod
```

### Opção B: Via Interface Web

1. Acessar https://vercel.com/dashboard
2. Clicar em "New Project"
3. Conectar repositório GitHub
4. Selecionar projeto `familia-ribeiro`
5. Vercel detectará automaticamente:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Clicar em "Deploy"

### Opção C: GitHub Actions (Automático)

1. Criar arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: vercel/action@v4
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

2. Adicionar secrets no GitHub:
   - `VERCEL_TOKEN`: Token do Vercel
   - `VERCEL_ORG_ID`: ID da organização
   - `VERCEL_PROJECT_ID`: ID do projeto

## Passo 4: Verificar Deploy

1. Acessar URL do Vercel fornecida
2. Verificar se todas as seções carregam corretamente
3. Testar responsividade em mobile
4. Testar vídeos e imagens

## Troubleshooting

### Erro: "Module not found"

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Erro: "Port already in use"

```bash
# Kill processo na porta 3000
lsof -ti:3000 | xargs kill -9

# Ou especificar outra porta
npm run dev -- --port 3001
```

### Imagens não carregam

Verificar se as URLs do GitHub estão corretas:
- Usar formato raw: `https://raw.githubusercontent.com/...`
- Fazer URL encoding de caracteres especiais

### Build falha no Vercel

1. Verificar logs no Vercel Dashboard
2. Garantir que TypeScript está correto: `npm run check`
3. Limpar cache do Vercel e fazer redeploy

## Atualizar Aplicação

Depois do deployment inicial, para atualizar:

```bash
# Fazer mudanças locais
npm run dev  # testar

# Commit e push
git add .
git commit -m "feat: descrição da mudança"
git push origin main

# Vercel detectará automaticamente e fará redeploy
```

## Variáveis de Ambiente

Se precisar de variáveis de ambiente:

1. Criar arquivo `.env.local` localmente
2. Adicionar no Vercel Dashboard:
   - Settings > Environment Variables
   - Adicionar variáveis
   - Redeploy

## Performance

Para otimizar performance:

1. Usar `npm run build` localmente para testar otimizações
2. Analisar bundle size: `npm run build -- --analyze`
3. Otimizar imagens antes de adicionar
4. Considerar lazy loading para componentes pesados

## Rollback

Se precisar voltar a uma versão anterior:

```bash
git log --oneline  # ver commits
git revert COMMIT_HASH  # revert específico
git push origin main
```

Vercel detectará o push e fará redeploy automático.

---

**Pronto!** Sua aplicação genealógica agora está online e acessível globalmente! 🎉
