module.exports = {
  name: 'events-client',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/events-client',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
