module.exports = {
  name: 'demo-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/demo-ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
