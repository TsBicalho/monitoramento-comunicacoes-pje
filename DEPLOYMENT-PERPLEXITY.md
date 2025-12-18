# 🚀 Guia de Deploy - Monitoramento de Comunicações PJe

## Opções de Deployment

Este documento mostra como publicar a aplicação em diferentes plataformas.

---

## 1️⃣ VERCEL (Recomendado - Grátis e Rápido)

### ✅ Vantagens:
- Deploy automático com GitHub
- SSL grátis
- Funções serverless
- Domínio grátis em `.vercel.app`

### 📋 Passos:

#### 1. Acessar Vercel
```bash
https://vercel.com
```

#### 2. Fazer login com GitHub
- Clique em "Sign in with GitHub"
- Autorize o acesso ao seu repositório

#### 3. Importar Projeto
- Clique em "Add New..." → "Project"
- Selecione `monitoramento-comunicacoes-pje`
- Clique em "Import"

#### 4. Configurar Variáveis de Ambiente
Vá para "Settings" → "Environment Variables":

```
MONGODB_URI = seu_mongodb_atlas_uri
JWT_SECRET = sua_chave_secreta_forte
NODE_ENV = production
PORT = 3000
```

#### 5. Deploy Automático
```bash
git push origin main
```

✅ Seu site estará em: `https://seu-projeto.vercel.app`

---

## 2️⃣ RAILWAY (Excelente para Backend Node.js)

### ✅ Vantagens:
- Suporte completo para Node.js
- MongoDB incluso
- Ambiente pronto para produção

### 📋 Passos:

#### 1. Acessar Railway
```bash
https://railway.app
```

#### 2. Login com GitHub

#### 3. Criar Novo Projeto
- Clique em "Start a New Project"
- Selecione "Deploy from GitHub repo"
- Escolha `monitoramento-comunicacoes-pje`

#### 4. Adicionar MongoDB
- Click em "Add Service"
- Selecione "MongoDB"
- Railway criará automaticamente

#### 5. Configurar Variáveis
Vá para o projeto → "Variables":

```
MONGODB_URI = ${{ Postgres.DATABASE_URL }}
JWT_SECRET = sua_chave_secreta
NODE_ENV = production
```

✅ Deploy automático após cada push

---

## 3️⃣ RENDER (Ótimo para Full Stack)

### ✅ Vantagens:
- Suporte Node.js + PostgreSQL
- Auto-deploy via GitHub
- Free tier generoso

### 📋 Passos:

#### 1. Acessar Render
```bash
https://render.com
```

#### 2. Novo Web Service
- "New" → "Web Service"
- Conecte GitHub
- Selecione repositório

#### 3. Configurações
- **Name**: `monitoramento-pje`
- **Environment**: Node
- **Start Command**: `npm start`
- **Plan**: Free

#### 4. Environment Variables
```
MONGODB_URI = seu_connection_string
JWT_SECRET = sua_chave_secreta
NODE_ENV = production
```

✅ Deploy em: `https://monitoramento-pje.onrender.com`

---

## 4️⃣ HEROKU (Clássico, Pagamento Necessário)

### 📋 Passos:

```bash
# 1. Instalar CLI do Heroku
npm install -g heroku

# 2. Fazer login
heroku login

# 3. Criar app
heroku create seu-app-monitoramento

# 4. Adicionar variáveis
heroku config:set MONGODB_URI=seu_uri
heroku config:set JWT_SECRET=sua_chave

# 5. Deploy
git push heroku main
```

✅ Deploy em: `https://seu-app-monitoramento.herokuapp.com`

---

## 5️⃣ AWS AMPLIFY (Mais Complexo, Mais Poderoso)

### 📋 Passos:

```bash
# 1. Instalar Amplify CLI
npm install -g @aws-amplify/cli

# 2. Configurar
amplify configure

# 3. Inicializar
amplify init

# 4. Adicionar hosting
amplify add hosting

# 5. Deploy
amplify publish
```

✅ Deploy em: `https://seu-dominio.amplifyapp.com`

---

## 🌐 PARA USAR COM PERPLEXITY LABS

Perplexity Labs não tem uma plataforma de deployment direto, MAS você pode:

### Opção A: Deploy em Vercel + usar em Perplexity

1. Deploy o backend em Vercel (conforme acima)
2. No Perplexity, você pode:
   - Referenciar a API: `https://seu-projeto.vercel.app/api/`
   - Integrar via webhooks
   - Usar como LLM context

### Opção B: Usar Perplexity como Frontend

Crie uma "app" dentro do Perplexity Labs:

```javascript
// Arquivo para Perplexity Labs
const API_URL = 'https://seu-projeto.vercel.app/api';

async function buscarResultados() {
  const res = await fetch(`${API_URL}/resultados`);
  return res.json();
}

// Integrar no Perplexity
```

---

## 📊 COMPARAÇÃO DE PLATAFORMAS

| Plataforma | Preço | Node | MongoDB | Setup | Deploy |
|-----------|-------|------|---------|-------|--------|
| **Vercel** | Free | ✅ | ❌ | Fácil | Auto |
| **Railway** | Free | ✅ | ✅ | Médio | Auto |
| **Render** | Free | ✅ | ❌ | Médio | Auto |
| **Heroku** | $7/mês | ✅ | ✅ | Fácil | Manual |
| **AWS** | $1-50/mês | ✅ | ✅ | Difícil | Auto |

---

## ✅ RECOMENDAÇÃO FINAL

**Para seu caso (Advogado, Legal Tech):**

1. **Melhor Custo-Benefício**: RAILWAY
   - Grátis com MongoDB
   - Deploy automático
   - Suporte completo

2. **Mais Rápido**: VERCEL + Atlas
   - Vercel para frontend
   - MongoDB Atlas (grátis) para dados
   - Deploy em 2 minutos

3. **Full Stack Ideal**: RAILWAY
   - Tudo em um único lugar
   - Sem configurações extras
   - Pronto para produção

---

## 🔐 SEGURANÇA EM PRODUÇÃO

Antes de fazer deploy:

```bash
# 1. Criar .env.production
MONGODB_URI=production_uri
JWT_SECRET=chave_muito_forte_32_caracteres
NODE_ENV=production

# 2. Habilitar HTTPS (todas plataformas fazem)

# 3. Rate limiting
# 4. CORS configurado
# 5. Helmet ativado
```

---

## 📱 PRÓXIMAS ETAPAS

1. Escolher plataforma (recomendo Railway)
2. Fazer deploy
3. Testar endpoints
4. Monitorar logs
5. Configurar domínio customizado
6. Integrar com seu sistema

**Você precisa de ajuda com deployment? Use este guia!** 🚀
