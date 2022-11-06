import { Model, Column, Table } from 'sequelize-typescript'

@Table
export default class KindEnterprise extends Model {
  @Column
  enterprise: string

  @Column({ defaultValue: true })
  state: boolean
}