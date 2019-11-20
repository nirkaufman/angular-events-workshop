module.exports = {
  name: 'events-feature-single-event',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/events/feature-single-event',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
