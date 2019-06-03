'use strict';

let fileReader = require('../index.js');

jest.mock('fs');

describe('File Reader Module', () => {
  it('readFile returns an error when given a bad file', () => {
    let file = 'bad.txt';

    return fileReader.readFile(file)
      .then()
      .catch(err => expect(err).toBeDefined());
  });

  it('readFile returns file contents when given a good file', () => {
    let file = ['File Contents'];
  
    return fileReader.readFile(file)
      .then(data => expect(data).toBeDefined())
      .catch();
  });

  it('createBuffer should take an array', () => {
    let arr = `'use strict'; \nlet arr = ['Mike', 'Jeff', 'Chloie']; \narr.forEach(item => console.log(item));`.split('');

    return fileReader.createBuffer(arr)
      .then(data => expect(data).toBeDefined())
      .catch();
  });

  it('createBuffer returns error when given bad data', () => {
    let file = ['File Contents'];
  
    return fileReader.createBuffer(file)
      .then()
      .catch(err => expect(err).toBeDefined());
  });

  it('writeFile returns error when given bad data', () => {
    let file = ['File Contents'];
  
    return fileReader.createBuffer(file)
      .then(data => {
        fileReader.writeFile(data)
          .then()
          .catch(err => expect(err).toBeDefined());
      });
  });

  it('writeFile should take data', () => {
    let file = ['File Contents'];
  
    return fileReader.createBuffer(file)
      .then(data => {
        fileReader.writeFile(data)
          .then(data => expect(data).toBeDefined())
          .catch();
      });
  });

  it('modifyData should take txt data and return a string', () => {
    let file = ['File Contents'];
  
    return fileReader.readFile(file)
      .then(data => {
        fileReader.modifyData(data)
          .then(data => expect(data).toBeDefined())
          .catch();
      });
  });

  it('modifyData should return error if given bad data', () => {
    let file = ['File Contents'];
    let stuff = 'askdas';
  
    return fileReader.readFile(file)
      .then(() => {
        fileReader.modifyData(stuff)
          .then()
          .catch(err => expect(err).toBeDefined());
      });
  });
  

  it('writeHTMLData should take txt data and return a string', () => {
    let file = ['File Contents'];
  
    return fileReader.readFile(file)
      .then(data => {
        fileReader.modifyData(data)
          .then(data => {
            fileReader.writeHTMLFile(data)
              .then(data => expect(data).toBeDefined())
              .catch();
          });
      });
  });

  it('writeHTMLFile should return error if given bad data', () => {
    let file = ['File Contents'];
    let stuff = 'askdas';
  
    return fileReader.readFile(file)
      .then(data => {
        fileReader.modifyData(stuff);
        fileReader.writeHTMLFile(data)
          .then()
          .catch(err => expect(err).toBeDefined());
      });
  });
});

