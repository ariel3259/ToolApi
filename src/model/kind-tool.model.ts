import { Model, Column, Table } from 'sequelize-typescript';

@Table
export default class KindTool extends Model {
  @Column
  kind: string;

  @Column
  adminId: string;

  @Column({ defaultValue: true })
  state: boolean;
}
