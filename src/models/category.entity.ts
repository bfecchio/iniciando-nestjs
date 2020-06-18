import { Entity, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: 'categories' })
export class Category extends BaseEntity {

    @Column({ type: 'varchar', length: 180, nullable: false })
    name: string;

}
