import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriasService {

constructor( @InjectRepository(Categoria) private readonly categoriaRepository: Repository<Categoria>,) {}

  create(createCategoriaDto: CreateCategoriaDto) {
        const categoria: Categoria = new Categoria();
        categoria.name = createCategoriaDto.name;
        categoria.descripcion = createCategoriaDto.descripcion;
        return this.categoriaRepository.save(categoria);
  }
  //
  findAll(): Promise<Categoria[]> {
        return this.categoriaRepository.find();
  }

  findOne(id: number): Promise<Categoria | null>{
        return this.categoriaRepository.findOneBy({ id });
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria >{
        const categoria: Categoria = new Categoria();
        categoria.name = updateCategoriaDto.name;
        categoria.descripcion = updateCategoriaDto.descripcion;
        return this.categoriaRepository.save(categoria);
  }

  remove(id: number): Promise<{ affected?: number | null} > {
        return this.categoriaRepository.delete(id);
  }
}
