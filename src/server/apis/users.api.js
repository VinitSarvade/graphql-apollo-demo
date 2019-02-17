const { RESTDataSource } = require('apollo-datasource-rest');
const { baseUrl } = require('../constants');

class UsersApi extends RESTDataSource {
  get baseURL() {
    return baseUrl
  };

  willSendRequest(request) {
    request.headers.set('Content-Type', 'application/json');
    request.headers.set('Accept', 'application/json');
  }

  async getAll() {
    const response = await this.get('/users', { per_page: 20 });
    return response.data;
  }

  async getUser(id) {
    const response = await this.get(`/users/${id}`)
    return response.data;
  }

  async create(user) {
    try {
      const response = await this.post('/users', JSON.stringify(user));
      return response;
    }
    catch (e) {
      console.error(e);
    }
  }
}

module.exports = UsersApi;
