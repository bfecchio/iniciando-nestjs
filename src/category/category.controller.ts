import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category-dto';

@Controller('categories')
export class CategoryController {

    constructor(
        private readonly categoryService: CategoryService
    ) {}

    @Get()
    async findAll() {
        return await this.categoryService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        return this.categoryService.findOne(id);
    }

    @Post()
    async create(@Body() categoryData: CategoryDto) {
        return await this.categoryService.create(categoryData);
    }

    @Put(':id')
    async update(@Param() params, @Body() categoryData: CategoryDto) {
        return await this.categoryService.update(params.id, categoryData);
    }

    @Delete(':id')
    async delete(@Param('id') id) {
        return await this.categoryService.delete(id);
    }
}
