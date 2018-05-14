// @flow

import Dream from '../entities/Dream'
import { Identifiable } from '../entities/Identifiable'

import MemoryStore from '../store/MemoryStore'

interface Payload {
  text: string;
}

interface Request {
  params: Identifiable & Payload;
  query: Object;
}

interface Response {
  json(any): Response;
  status(number): Response;
}

type Next = (_: Error) => any

type Handler = (req: Request, res: Response, next: Next) => any

export default class DreamController {
  get: Handler;
  post: Handler;
  delete: Handler;
  getAll: Handler;
  dreamStore: MemoryStore;

  constructor(dreamStore: MemoryStore) {
    this.dreamStore = dreamStore;
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.delete = this.delete.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  get(req: Request, res: Response, next: Next) {
    const dream = this.dreamStore.get(req.params.id);

    if (dream) {
      res.json(dream);
    } else {
      res.status(404).json({
        error: 'Not found',
      });
    }
  }

  post(req: Request, res: Response, next: Next) {
    try {
      const dream = new Dream();
      dream.id = `${Date.now()}`;
      dream.created_at = new Date();
      dream.value = req.query.text;

      this.dreamStore.set(dream);
      res.json(dream);
    } catch(e) {
      next(e);
    }
  }

  delete(req: Request, res: Response, next: Next) {
    try {
      this.dreamStore.unset(req.params.id);
      res.json({});
    } catch(e) {
      next(e);
    }
  }

  getAll(req: Request, res: Response, next: Next) {
    try {
      res.json(this.dreamStore.getAll());
    } catch(e) {
      next(e);
    }
  }
}
