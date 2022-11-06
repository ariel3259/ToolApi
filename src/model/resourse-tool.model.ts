import { Model, Column, Table, HasOne } from 'sequelize-typescript'

@Table
export default class ResourceTool extends Model {
  
  @Column
  toolId: number

  @Column
  link: string
  
  @Column
  state: boolean
}