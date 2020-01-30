const handleSubmit = require('../src/client/js/formHandler');

test('handleSubmit should not be blank', () => {
    expect(handleSubmit).not.toBeNull()
});

