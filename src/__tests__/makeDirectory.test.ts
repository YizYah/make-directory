import { ensureDirectory } from '../index'
import { ensureDir } from 'fs-extra'

const mode = 0o2775
// const sinon = require('sinon')

const ensureDirMock = async (dir: any, mode: string) => {
  console.log('in ensureDir Mock...')
  return `dir made ${dir} with mode ${mode}`
}
// jest.mock('fs')
jest.mock('ensureDir', ensureDirMock)
// jest.mock('fs', () => () => ({
//     ensureDir: ensureDirMock,
//   }),
// )

test('makeDirectory', async () => {
  const sampleDir = 'home/yisroel/temp/bogusName'
  let ensureDireStub: any
  // beforeEach(() => {
  //   ensureDireStub = sinon.stub(fs, 'ensureDir').callsFake(ensureDirMock)
  // })
  //
  // afterEach(() => {
  //   ensureDireStub.restore()
  // })

  expect(await ensureDirectory(sampleDir))
    .toBe(`dir made ${sampleDir} with mode ${mode}`)
})
