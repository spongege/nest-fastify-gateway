import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  // 在 MongoDB 里面使用的是 ObjectIdColumn 作为类似 MySQL 的自增主键，来保证数据唯一性，只是类似，并不是跟普通自增主键一样会递增，把它看成 uuid 类似即可
  @ObjectIdColumn()
  id?: number;

  @Column({ default: null })
  name: string;
}
