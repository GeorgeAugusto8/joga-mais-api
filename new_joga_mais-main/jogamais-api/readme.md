# Criação do Projeto
npm install -g sequelize-cli express-generator
npm install -g sequelize-auto
npm install -g mysql
express -–view pug jogamais-api

# Dependências
npm install
npm install --save sequelize mysql2 uuid dotenv validator jsonwebtoken

# Iniciar o sequelize (ORM)
sequelize init

# Configurar DB
config/config.json

# Gerar Models
sequelize-auto -o "./models" -d jogamais -h db-jogamais-dev.cetw69cxogb0.us-east-2.rds.amazonaws.com -u admin -x %ZsS2!qgYCMV -p 3306 -e mysql

# Configurar variáveis de ambiente 
.env

# Carregar configurações no app.js (primeira linha)
require('dotenv').config();