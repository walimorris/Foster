const handlers = require('../handlers');

test('home page renders', () => {
    const request = {};
    const response = { render: jest.fn() };
    handlers.home(request, response);
    expect(response.render.mock.calls[0][0]).toBe('home');
});