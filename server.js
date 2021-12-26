const debug = require('debug')('passbird:server');
const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => debug(`Listening on ${port}...`));
