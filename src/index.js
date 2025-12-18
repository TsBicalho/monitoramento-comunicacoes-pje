const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const logger = require('./config/logger');
const { initializeScheduler } = require('./services/scheduler');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static('../public'));

// Conectar MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => logger.info('✅ Conectado ao MongoDB'))
  .catch(err => logger.error('❌ Erro MongoDB:', err));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// API Endpoints
app.post('/api/monitors', (req, res) => {
  try {
    const { termo, tipo_busca, frequencia, horario, notificacoes } = req.body;
    res.json({ 
      success: true, 
      message: 'Monitor criado com sucesso',
      data: { termo, tipo_busca, frequencia, horario, notificacoes }
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/resultados', (req, res) => {
  res.json({ 
    success: true,
    data: [
      {
        id: '1',
        numero_processo: '2389971-15.2025.8.26.0000',
        tribunal: 'TJSP',
        data: '18/12/2025',
        tipo: 'Intimação',
        partes: ['CLELIA DE OLIVEIRA SILVA', 'ELIAS DOS SANTOS PARDIM'],
        advogados: ['THIAGO DA SILVA BICALHO']
      }
    ]
  });
});

// Inicializar scheduler
initializeScheduler();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`🎉 Servidor rodando na porta ${PORT}`);
});

module.exports = app;
