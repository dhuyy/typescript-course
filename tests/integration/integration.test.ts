import { app, request, expect } from './config/helpers';

describe('Integration tests', () => {
  describe('GET /api/users', () => {
    it('should return a JSON with all users.', done => {
      request(app)
        .get('/api/users')
        .end((error, res) => {
          expect(res.status).to.equal(200);
        })
    });
  });

  describe('GET /api/users/:id', () => {
    it('should return a JSON with a user who owns the params id.', done => {
      request(app)
        .get(`/api/users/${1}`)
        .end((error, res) => {
          expect(res.status).to.equal(200);
        })
    });
  });

  describe('POST /api/users', () => {
    it('should create a new user and return a JSON with the created user.', done => {
      const user = {
        name: 'Vandhuy Martins'
      };

      request(app)
        .post('/api/users')
        .send(user)
        .end((error, res) => {
          expect(res.status).to.equal(200);
        })
    });
  });

  describe('PUT /api/users', () => {
    it('should update a user and return a JSON with the updated user.', done => {
      const user = {
        id: '1',
        name: 'Vandhuy Fernandes Martins'
      };

      request(app)
        .put('/api/users')
        .send(user)
        .end((error, res) => {
          expect(res.status).to.equal(200);
        })
    });
  });

  describe('DELETE /api/users/:id', () => {
    it('should delete a user.', done => {
      request(app)
        .delete(`/api/users/${1}`)
        .end((error, res) => {
          expect(res.status).to.equal(200);
        })
    });
  });
});
