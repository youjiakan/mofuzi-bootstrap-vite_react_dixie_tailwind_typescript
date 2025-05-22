import { createClient, SupabaseClient } from '@supabase/supabase-js'
import type { DatabaseProvider, User } from './types'

export class SupabaseProvider implements DatabaseProvider {
  private client: SupabaseClient

  constructor(supabaseUrl: string, supabaseKey: string) {
    this.client = createClient(supabaseUrl, supabaseKey)
  }

  async createUser(name: string, email: string) {
    const { data, error } = await this.client
      .from('users')
      .insert([{ name, email, created_at: new Date().toISOString() }])
      .select()
      .single()

    if (error) throw error
    return data?.id
  }

  async getUserById(id: number) {
    const { data, error } = await this.client
      .from('users')
      .select()
      .eq('id', id)
      .single()

    if (error) throw error
    return data as User
  }

  async getUserByEmail(email: string) {
    const { data, error } = await this.client
      .from('users')
      .select()
      .eq('email', email)
      .single()

    if (error) throw error
    return data as User
  }

  async getAllUsers() {
    const { data, error } = await this.client
      .from('users')
      .select()
      .order('created_at', { ascending: false })

    if (error) throw error
    return data as User[]
  }

  async updateUser(id: number, name: string, email: string) {
    const { data, error } = await this.client
      .from('users')
      .update({ name, email })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data?.id
  }

  async deleteUser(id: number) {
    const { error } = await this.client
      .from('users')
      .delete()
      .eq('id', id)

    if (error) throw error
  }
}
