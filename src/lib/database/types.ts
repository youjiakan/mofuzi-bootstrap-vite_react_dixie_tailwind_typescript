export interface User {
  id?: number
  name: string
  email: string
  created_at: string
}

export interface DatabaseProvider {
  createUser(name: string, email: string): Promise<number | undefined>
  getUserById(id: number): Promise<User | undefined>
  getUserByEmail(email: string): Promise<User | undefined>
  getAllUsers(): Promise<User[]>
  updateUser(id: number, name: string, email: string): Promise<number | undefined>
  deleteUser(id: number): Promise<void>
}

export interface DatabaseConfig {
  type: 'dexie' | 'supabase'
  supabaseUrl?: string
  supabaseKey?: string
}
