import { Server } from 'hapi';
import { routes } from './routes';

const server = new Server({ load: { sampleInterval: 1000 }, port: 4300 });
server.route(routes);
server.start().catch(e => console.error(e));
console.log('Server Started');
