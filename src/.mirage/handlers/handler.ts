import { Request, Server } from 'miragejs';
import { PagingService } from '../utils/paging.service';
import { FilteringService } from '../utils/filtering.service';

export default function handler(server: Server, json: any[], resourcePath: string) {
  const resource = resourcePath;
  const data: any[] = Array.from(json);
  const paging = new PagingService(server.namespace, resource);
  const filtering = new FilteringService(data);

  server.get(`${resource}`, (schema, request: Request) => {
    const filteredData = filtering.filter(request.queryParams);
    return paging.create(filteredData, request.queryParams['page'], request.queryParams);
  });

  server.get(`${resource}/:id`, (schema, request: Request) => {
    const id = request.params.id;
    return data.find((item) => item.url.includes(id));
  });

  server.post(`${resource}`, (schema, request) => {
    let attrs = JSON.parse(request.requestBody);
    attrs.id = 4;
    return { reminder: attrs };
  });
}
