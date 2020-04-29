import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
