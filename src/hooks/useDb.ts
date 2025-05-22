import { useState, useCallback } from 'react'
import { getDatabase } from '../lib/database'
import type { User } from '../lib/database'

export function useDb() {
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)
  const db = getDatabase()

  const createUser = useCallback(
    async (name: string, email: string) => {
      try {
        setLoading(true)
        setError(null)
        return await db.createUser(name, email)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
        throw err
      } finally {
        setLoading(false)
      }
    },
    [db]
  )

  const getUser = useCallback(async (id: number) => {
    try {
      setLoading(true)
      setError(null)
      return await db.getUserById(id)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'))
      throw err
    } finally {
      setLoading(false)
    }
  }, [db])

  const getAllUsers = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      return await db.getAllUsers()
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'))
      throw err
    } finally {
      setLoading(false)
    }
  }, [db])

  const updateUser = useCallback(
    async (id: number, name: string, email: string) => {
      try {
        setLoading(true)
        setError(null)
        return await db.updateUser(id, name, email)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
        throw err
      } finally {
        setLoading(false)
      }
    },
    [db]
  )

  const deleteUser = useCallback(async (id: number) => {
    try {
      setLoading(true)
      setError(null)
      return await db.deleteUser(id)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'))
      throw err
    } finally {
      setLoading(false)
    }
  }, [db])

  return {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser,
    error,
    loading,
  }
}
