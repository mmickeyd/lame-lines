require('dotenv').config();
const app = require('./routes');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server is working at port ' + port);
});