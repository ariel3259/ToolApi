import { Model, Column, Table } from 'sequelize-typescript'

@Table
export default class ResourceTool extends Model {
  
  @Column
  toolId: number

  @Column
  link: string

  @Column
  adminId: number

  @Column
  state: boolean

}