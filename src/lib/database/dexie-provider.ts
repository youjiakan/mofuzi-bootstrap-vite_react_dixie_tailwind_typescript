import Dexie from 'dexie'
import type { DatabaseProvider, User } from './types'

class AppDatabase extends Dexie {
  users!: Dexie.Table<User, number>

  constructor() {
    super('AppDatabase')
    this.version(1).stores({
      users: '++id, name, email, created_at'
    })
  }
}

export class DexieProvider implements DatabaseProvider {
  private db: AppDatabase

  constructor() {
    this.db = new AppDatabase()
  }

  async createUser(name: string, email: string) {
    return await this.db.users.add({
      name,
      email,
      created_at: new Date().toISOString()
    })
  }

  async getUserById(id: number) {
    return await this.db.users.get(id)
  }

  async getUserByEmail(email: string) {
    return await this.db.users.where('email').equals(email).first()
  }

  async getAllUsers() {
    return await this.db.users.orderBy('created_at').reverse().toArray()
  }

  async updateUser(id: number, name: string, email: string) {
    await this.db.users.update(id, { name, email })
    return id
  }

  async deleteUser(id: number) {
    await this.db.users.delete(id)
  }
}
