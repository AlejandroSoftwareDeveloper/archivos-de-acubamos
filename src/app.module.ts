import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasModule } from './categorias/categorias.module';
import { OpinionesModule } from './opiniones/opiniones.module';

@Module({
  imports: [
TypeOrmModule.forRoot({
     type: 'postgres',
     host: 'localhost',
     port: 5432,
     password: 'institucional',
     username: 'institucional',
     entities: [__dirname + "/**/*.entity.{js,ts}"],
     database: 'institucionaldb',
     synchronize: true,
     logging: true,
}),
   CategoriasModule,
   OpinionesModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
