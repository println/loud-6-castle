import { Server } from 'miragejs';
import peopleHandler from './handlers/people-handler';

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
    peopleHandler(server);
  }
}

const mirageServer = new MirageServer();

export default mirageServer;
