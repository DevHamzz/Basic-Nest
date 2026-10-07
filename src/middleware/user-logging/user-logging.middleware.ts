import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UserLoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    if (req.body && typeof req.body.name === 'string') {
      req.body.name = req.body.name.toUpperCase();
    }

    console.log(`[UserLogging] ${req.method} ${req.originalUrl}`);
    next();
  }
}
