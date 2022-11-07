import { Model, Column, Table } from 'sequelize-typescript';

@Table
export default class Tool extends Model {
  @Column
  name: string;

  @Column
  sectionId: number;

  @Column
  typeId: number;

  @Column
  enterpriseId: number;

  @Column({ defaultValue: true })
  state: boolean;

  @Column
  adminId: string;
}
