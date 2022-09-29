const ICONS_DIR = 'src/renderer/assets/'

const windowsOS = {
  win: {
    icon: ICONS_DIR + 'sunrin_256.png',
    publisherName: 'michal',
    target: 'nsis'
  },

  nsis: {
    differentialPackage: true
  }
}
module.exports = {
  productName: 'transcription-translator',
  appId: 'com.science.dnaproject',
  artifactName: 'setup-${version}.${ext}',
  directories: {
    output: 'build'
  },
  // default files: https://www.electron.build/configuration/contents
  files: [
    'package.json',
    {
      from: 'dist/main/',
      to: 'dist/main/'
    },
    {
      from: 'dist/renderer',
      to: 'dist/renderer/'
    }
  ],
  extraResources: [
    {
      from: 'src/extraResources/',
      to: ''
    }
  ],
  ...windowsOS
}
