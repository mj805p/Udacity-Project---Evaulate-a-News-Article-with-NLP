const postData = require('../src/client/js/postTextToServer');

test('postData should not be blank', () => {
    expect(postData).not.toBeNull()
});

