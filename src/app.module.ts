import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigurationModule } from './config/config.module';

@Module({
  imports: [ConfigurationModule, UsersModule, AuthModule, DatabaseModule],
})
export class AppModule {}
