import { Server } from 'miragejs';
import handler from './handlers/handler';
import * as peopleJson from './data/people.json';
import * as filmJson from './data/films.json';

class MirageServer {
  public server?: Server;

  constructor() {}

  start() {
    this.server = this.server ? this.server : new Server();
    this.server.namespace = '/api';
    this.setHandlers(this.server);
    console.log('Mirage Server is started.');
  }

  stop() {
    if (this.server) {
      this.server.shutdown();
      this.server = undefined;
      console.log('Mirage Server is stopped.');
    } else {
      console.log('Mirage Server has been already stopped.');
    }
  }

  private setHandlers(server: Server) {
    server.get('https://api.chucknorris.io/jokes/random', () => {
      return { value: 'chuck norris api mocked' };
    });
    handler(server, Array.from(peopleJson), '/people');
    handler(server, Array.from(filmJson), '/films');
  }
}

const mirageServer = new MirageServer();

export default mirageServer;
