import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasModule } from './categorias/categorias.module';
import { Categoria } from './categorias/entities/categoria.entity';

@Module({
  // imports: [
// TypeOrmModule.forRoot({
//      type: 'postgres',
//      host: 'localhost',
//      port: 5432,
//      password: 'institucional',
//      username: 'institucional',
//      entities: [Categoria],
//      database: 'institucionaldb',
//      synchronize: true,
//      logging: true,
// }),
   // CategoriasModule,
// ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
