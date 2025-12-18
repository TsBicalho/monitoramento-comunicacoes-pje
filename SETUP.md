# Guia de Configuração - Monitoramento de Comunicações PJe

## 📋 Pré-requisitos

- Node.js v18+
- MongoDB 5.0+
- Git

## 🚀 Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/TsBicalho/monitoramento-comunicacoes-pje.git
cd monitoramento-comunicacoes-pje
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```bash
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/monitoramento-pje
JWT_SECRET=sua_chave_secreta_aqui_muito_forte_32_caracteres
PJE_BASE_URL=https://comunica.pje.jus.br/consulta
SCHEDULE_TIME=07:00
```

## 🔧 Executando o Projeto

### Modo desenvolvimento

```bash
npm run dev
```

### Modo produção

```bash
npm start
```

## 📁 Estrutura de Pastas

```
src/
├── config/           # Configurações (DB, Logger, Env)
├── services/         # Serviços (Scraper, Scheduler, Notifications)
├── controllers/      # Controladores (Lógica de negócio)
├── routes/           # Rotas da API
├── models/           # Schemas MongoDB
├── middleware/       # Middlewares (Auth, Errors)
└── utils/            # Utilitários

tests/
├── unit/
├── integration/
└── e2e/
```

## 🗄️ Banco de Dados

### Iniciar MongoDB

```bash
# Com Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Ou natively
mongod
```

## 🧪 Testes

```bash
# Executar testes
npm test

# Modo watch
npm run test:watch

# Com cobertura
npm run test -- --coverage
```

## 📚 API Endpoints

### Criar Monitor

```
POST /api/monitors
Content-Type: application/json

{
  "termo": "thiago da silva bicalho",
  "tipo_busca": "teor",
  "frequencia": "diaria",
  "horario": "07:00",
  "notificacoes": ["email", "push"]
}
```

### Listar Resultados

```
GET /api/resultados?monitor_id=xxx&limit=50&skip=0
```

## 🔐 Segurança

- Todos os endpoints requerem autenticação JWT
- Senhas são hashadas com bcrypt
- CORS configurado
- Helmet para headers de segurança

## 🐛 Troubleshooting

### Erro: MongoDB connection refused

Verifique se o MongoDB está rodando:

```bash
mongosh
```

### Erro: Port 3000 already in use

Mude a porta no `.env`:

```bash
PORT=3001
```

## 📖 Documentação Adicional

- [Arquitetura](./ARCHITECTURE.md)
- [API Completa](./API.md)
