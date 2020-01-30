const pasteSentiment = require('../src/client/js/pasteText');

test('pasteSentiment should not be blank', () => {
    expect(pasteSentiment).not.toBeNull()
});

