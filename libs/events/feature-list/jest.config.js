module.exports = {
  name: 'events-feature-list',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/events/feature-list',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
