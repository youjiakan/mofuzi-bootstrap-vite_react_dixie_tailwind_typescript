import React from 'react';
import { useEffect } from 'react'
import { initializeDatabase } from './lib/database'
import { populateSampleData } from './lib/sampleData'
import { UserList } from './components/UserList'

function App() {
  useEffect(() => {
    const initDb = async () => {
      // Initialize database (defaults to Dexie)
      initializeDatabase({
        type: 'dexie',
        // Uncomment and add credentials to use Supabase
        // type: 'supabase',
        // supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
        // supabaseKey: import.meta.env.VITE_SUPABASE_KEY,
      })
      
      // Populate sample data if needed
      await populateSampleData()
    }
    
    initDb()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">User Management</h1>
        <UserList />
      </div>
    </div>
  )
}

export default App
