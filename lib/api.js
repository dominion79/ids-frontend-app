import { createClient } from 'contentful'
import config from'../config'

const client = createClient({
  space: config.space,
  accessToken: config.accessToken
})

export async function getAllServices() {
  const entries = await client.getEntries({
    content_type: 'service'
  })
  return entries
}

export async function getAllSectors() {
  const entries = await client.getEntries({
    content_type: 'sector'
  })
  return entries
}

export async function getAllClients() {
  const entries = await client.getEntries({
    content_type: 'client'
  })
  return entries
}