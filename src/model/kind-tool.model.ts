import { Model, Column, Table } from 'sequelize-typescript'

@Table
export default class KindTool extends Model {
  @Column
  kind: string

  @Column({ defaultValue: true })
  state: boolean
}