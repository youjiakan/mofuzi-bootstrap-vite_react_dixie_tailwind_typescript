import type { DatabaseConfig, DatabaseProvider } from './types'
import { DexieProvider } from './dexie-provider'
import { SupabaseProvider } from './supabase-provider'

export * from './types'

let dbInstance: DatabaseProvider | null = null

export function initializeDatabase(config: DatabaseConfig): DatabaseProvider {
  if (dbInstance) return dbInstance

  switch (config.type) {
    case 'dexie':
      dbInstance = new DexieProvider()
      break
    case 'supabase':
      if (!config.supabaseUrl || !config.supabaseKey) {
        throw new Error('Supabase configuration missing')
      }
      dbInstance = new SupabaseProvider(config.supabaseUrl, config.supabaseKey)
      break
    default:
      throw new Error('Invalid database type')
  }

  return dbInstance
}

export function getDatabase(): DatabaseProvider {
  if (!dbInstance) {
    throw new Error('Database not initialized')
  }
  return dbInstance
}
