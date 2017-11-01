import { Application, Request, Response } from 'express';

class Routes {
  constructor(app: Application) {
    this.getRoutes(app);
  }

  getRoutes(app: Application): void {
    app.get('/', (req: Request, res: Response) => {
      res.send('Hello World!');
    });
  }
}

export default Routes;
