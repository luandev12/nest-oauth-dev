import { DataSource } from 'typeorm';

import { configService } from '@app/config.service';

export default new DataSource(configService.getDataSourceConfig());
