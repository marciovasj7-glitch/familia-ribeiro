# 🚀 Começar Rápido

Instruções rápidas para rodar a aplicação localmente e fazer deploy.

## 1️⃣ Instalação Local

```bash
# Entrar no diretório
cd familia-ribeiro-app

# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Abrir em http://localhost:3000
```

## 2️⃣ Fazer Build

```bash
# Build otimizado para produção
npm run build

# Pré-visualizar build
npm run preview
```

## 3️⃣ Deploy no GitHub + Vercel

### Opção Rápida (Recomendada)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login (se não tiver)
vercel login

# Deploy automático
vercel --prod
```

### Opção Manual

```bash
# Fazer push para GitHub
git add .
git commit -m "Deploy aplicação React genealógica"
git push origin main

# Depois acessar vercel.com e conectar repositório GitHub
```

## 4️⃣ URLs Importantes

- **Repositório**: https://github.com/marciovasj7-glitch/familia-ribeiro
- **Deploy**: Será fornecido pelo Vercel (ex: `https://familia-ribeiro.vercel.app`)
- **GitHub Raw**: https://raw.githubusercontent.com/marciovasj7-glitch/familia-ribeiro/main

## ✅ Verificações Pós-Deploy

- [ ] Todas as fotos carregam
- [ ] Vídeos funcionam
- [ ] Layout responsivo em mobile
- [ ] Navegação entre seções funciona
- [ ] Tempo de carregamento aceitável

## 🔧 Configurações Importantes

### Adicionar/Atualizar Dados Genealógicos

Editar: `client/src/data/familyData.ts`

### Mudar Cores/Design

Editar: `client/src/index.css` (CSS variables)

### Adicionar Novas Seções

1. Criar componente em `client/src/components/`
2. Importar em `client/src/App.tsx`
3. Adicionar à seção correta

## 💡 Dicas

- Use `npm run dev` para desenvolvimento com hot reload
- Use `npm run check` para verificar tipos TypeScript
- Use `npm run format` para formatar código

## 🆘 Precisa de Ajuda?

Ver `DEPLOYMENT.md` para guia completo de troubleshooting.

---

**Tudo pronto!** A aplicação está profissional, moderna e pronta para produção. ✨
