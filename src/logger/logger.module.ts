import { DynamicModule } from '@nestjs/common';
import { LoggerService } from '@app/logger/logger.service';
import { createLoggerProviders } from '@app/logger/logger.providers';

export class LoggerModule {
  static forRoot(): DynamicModule {
    const prefixedLoggerProviders = createLoggerProviders();
    return {
      module: LoggerModule,
      providers: [
        {
          provide: LoggerService,
          useClass: LoggerService,
        },
        ...prefixedLoggerProviders,
      ],
      exports: [LoggerService, ...prefixedLoggerProviders],
    };
  }
}
