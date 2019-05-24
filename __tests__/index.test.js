'use strict';

let fileReader = require('../index.js');

jest.mock('fs');

describe('File Reader Module', () => {
  it('returns an error when given a bad file', () => {
    let file = 'bad.txt';

    return fileReader.readFile(file)
      .then()
      .catch(err => expect(err).toBeDefined());
  });

  it('returns file contents when given a good file', () => {
    let file = ['File Contents'];
  
    return fileReader.readFile(file)
      .then(data => expect(data).toBeDefined())
      .catch();
  });

  
});

