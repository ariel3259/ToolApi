import { Model, Column, Table } from 'sequelize-typescript'

@Table
export default class FavoriteTool extends Model {
  @Column
  userId: string
  
  @Column
  adminId: string

  @Column({ defaultValue: true })
  state: boolean
}