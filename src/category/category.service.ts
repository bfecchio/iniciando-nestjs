import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/models/category.entity';
import { Repository } from 'typeorm';
import { CategoryDto } from './dto/category-dto';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ){ }

    async findAll() {
        return await this.categoryRepository.find();
    }

    async findOne(id: Number) {
        return await this.categoryRepository.findOneOrFail({ id });
    }

    async create(categoryData: CategoryDto) {        
        const category = this.categoryRepository.create(categoryData);
        return await this.categoryRepository.save(category);
    }

    async update(id: Number, categoryData: CategoryDto) {
        let toUpdate = await this.categoryRepository.findOne({ id });
        let updated = Object.assign(toUpdate, categoryData);

        return await this.categoryRepository.save(updated);
    }

    async delete(id: Number) {
        return await this.categoryRepository.delete({ id });
    }

}
