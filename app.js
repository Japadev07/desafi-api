const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 

const app = express();


app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ MongoDB conectado com sucesso!'))
  .catch(err => console.error('❌ Erro ao conectar ao MongoDB:', err));


app.use('/users', require('./routes/users'));
app.use('/posts', require('./routes/posts'));
app.use('/categories', require('./routes/categories'));


app.get('/', (req, res) => {
  res.send('🚀 API funcionando!');
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
