import request from 'supertest'
import server from '../index'

describe('GET /duties', () => {
    it('Gets all duties', async() => {
        const res = await request(server)
        .get('/duties')

        expect(res.statusCode).toEqual(200)
    })
})

describe('GET SINGLE /duties', () => {
    it('Gets a duty', async() => {
        const res = await request(server)
        .get('/duties/1')

        expect(res.statusCode).toEqual(200)
    })
})

describe('POST /duties', () => {
    it('creates a duty', async() => {
        const res = await request(server)
        .post('/duties')
        .send({ name: 'This is a test duty'})

        expect(res.statusCode).toEqual(201)
    })

    it('returns bad request if the name is missing', async() => {
        const res = await request(server)
        .post('/duties')
        .send()

        expect(res.statusCode).toEqual(400)
    })
})

describe('UPDATE /duties', () => {
    it('updates a duty', async() => {
        const res = await request(server)
        .put('/duties/1')
        .send({ name: 'This is a test duty updated.'})

        expect(res.statusCode).toEqual(200)
    })

    it('returns bad request if the name is missing', async() => {
        const res = await request(server)
        .put('/duties/1')
        .send()

        expect(res.statusCode).toEqual(400)
    })
})

describe('DELETE /duties', () => {
    it('deletes a duty', async() => {
        const res = await request(server)
        .delete('/duties/1')

        expect(res.statusCode).toEqual(200)
    })
})