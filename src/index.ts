import { dirOptions } from './dirOptions'
import { ensureDir } from 'fs-extra'
// import fs = require('fs-extra')

export const ensureDirectory = async (dirPath: string) => {
  try {
    console.log(`in ensureDirectory`)
    return ensureDir(dirPath, dirOptions)
  } catch (error) {
    throw new Error(`error ensuring directory ${dirPath}: ${error}`)
  }
}

export default ensureDirectory
