import clone from '@shared/mixins/clone';
import { Request, Response, Server } from 'miragejs';
import { FilteringService } from '../utils/filtering.service';
import { PagingService } from '../utils/paging.service';

type StoreOps = {
  idKey: string;
  resolveId: (id: any) => any;
  nextId: (lastId: any) => any;
};

export default function handler<T>(server: Server, json: any[], resourcePath: string, storeOps?: StoreOps) {
  const resource = resourcePath;
  const data: any[] = Array.from(json);
  const paging = new PagingService(server.namespace, resource);
  const filtering = new FilteringService(data);

  let lastId = resolveId(data, storeOps);

  server.get(`${resource}`, (schema, request: Request) => {
    const filteredData = clone(filtering.filter(request.queryParams));
    return paging.create(filteredData, request.queryParams['page'], request.queryParams);
  });

  server.get(`${resource}/:id`, (schema, request: Request) => {
    const id = request.params.id;
    return clone(data.find((item) => item.url.includes(id)));
  });

  server.post(`${resource}`, (schema, request) => {
    const id = createId(lastId, storeOps);
    const idKey = getIdKey(storeOps);
    let entity = JSON.parse(request.requestBody);

    if (!entity) return new Response(400);

    entity[idKey] = id;
    entity.url = entity.url + id;
    data.push(entity);

    return new Response(201, { created: id }, entity);
  });

  server.delete(`${resource}/:id`, (schema, request: Request) => {
    const id = request.params.id;
    const item = data.find((item) => item.url.includes(id));

    const index = data.indexOf(item, 0);
    if (index > -1) {
      return data.splice(index, 1)[0];
    }

    return {};
  });

  server.put(`${resource}/:id`, (schema, request: Request) => {
    const id = request.params.id;
    const item = data.find((item) => item.url.includes(id));
    const entity = JSON.parse(request.requestBody);
    Object.assign(item, entity);
    return clone(data.find((item) => item.url.includes(id)));
  });
}

function resolveId(data: any[], storeOps?: StoreOps): any {
  return storeOps?.resolveId(data[data.length - 1][storeOps.idKey]) || data.length;
}

function createId(lastId: any, storeOps?: StoreOps): any {
  return storeOps?.nextId(lastId) || lastId + 1;
}

function getIdKey(storeOps?: StoreOps) {
  return storeOps?.idKey || 'id';
}
