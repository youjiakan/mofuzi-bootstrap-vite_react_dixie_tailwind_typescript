import { getDatabase } from './database'

const sampleUsers = [
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Smith', email: 'jane@example.com' },
  { name: 'Bob Wilson', email: 'bob@example.com' },
  { name: 'Alice Brown', email: 'alice@example.com' },
  { name: 'Charlie Davis', email: 'charlie@example.com' }
]

export async function populateSampleData() {
  const db = getDatabase()
  const users = await db.getAllUsers()
  
  if (users.length === 0) {
    console.log('Populating sample data...')
    for (const user of sampleUsers) {
      await db.createUser(user.name, user.email)
    }
    console.log('Sample data populated!')
  }
}
