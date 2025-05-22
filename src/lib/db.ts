import Dexie, { type Table } from 'dexie'

export interface User {
  id?: number
  name: string
  email: string
  created_at: string
}

class AppDatabase extends Dexie {
  users!: Table<User>

  constructor() {
    super('AppDatabase')
    this.version(1).stores({
      users: '++id, name, email, created_at'
    })
  }
}

export const db = new AppDatabase()

export const dbHelpers = {
  async createUser(name: string, email: string) {
    return await db.users.add({
      name,
      email,
      created_at: new Date().toISOString()
    })
  },

  async getUserById(id: number) {
    return await db.users.get(id)
  },

  async getUserByEmail(email: string) {
    return await db.users.where('email').equals(email).first()
  },

  async getAllUsers() {
    return await db.users.orderBy('created_at').reverse().toArray()
  },

  async updateUser(id: number, name: string, email: string) {
    return await db.users.update(id, { name, email })
  },

  async deleteUser(id: number) {
    return await db.users.delete(id)
  }
}
