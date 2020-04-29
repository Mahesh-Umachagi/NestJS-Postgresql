import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/base-entity';

@Entity('companies')
export class Company extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;
  @Column({ type: 'varchar', length: 100, nullable: true })
  domain: string;
  @Column({ type: 'text', nullable: true, default: null })
  description: string;
}
