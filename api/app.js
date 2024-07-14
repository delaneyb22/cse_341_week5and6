const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

app.use(express.json());

const collection1Route = require('./routes/collection1.route');
const collection2Route = require('./routes/collection2.route');

app.use('/api/v1/collection1', collection1Route);
app.use('/api/v1/collection2', collection2Route);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});