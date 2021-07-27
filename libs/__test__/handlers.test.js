const handlers = require('../handlers');

test('home page renders', () => {
    const request = {};
    const response = { render: jest.fn() };
    handlers.home(request, response);
    expect(response.render.mock.calls[0][0]).toBe('home');
});

test('about page renders', () => {
    const request = {};
    const response = { render: jest.fn() };
    handlers.about(request, response);
    expect(response.render.mock.calls[0][0]).toBe('about');
});

test('locations page renders', () => {
    const request = {};
    const response = { render: jest.fn() };
    handlers.locations(request, response);
    expect(response.render.mock.calls[0][0]).toBe('locations');
});

test('404 page renders', () => {
    const request = {};
    const response = { render: jest.fn() };
    handlers.notFound(request, response);
    expect(response.render.mock.calls[0][0]).toBe('404');
});