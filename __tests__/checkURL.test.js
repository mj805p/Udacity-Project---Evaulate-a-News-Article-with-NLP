const checkForHTTP = require('../src/client/js/checkURL');

test('makes sure checkForHTTP is not blank', () => {
    expect(checkForHTTP).not.toBeNull();
});