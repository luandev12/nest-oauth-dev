import { Injectable } from '@nestjs/common';

import { LoggerService } from '@app/logger/logger.service';
import { Logger } from '@app/logger/logger.decorator';

@Injectable()
export class AppService {
  constructor(@Logger('AppService') private logger: LoggerService) {}

  getHello(): string {
    this.logger.log('Hello World');
    return 'Hello World!';
  }
}
