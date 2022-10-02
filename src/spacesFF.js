import supertest from 'supertest';
import myCredentials from '../framework_api/config/urls';
const { myUrl } = myCredentials;

 /** Describe functions for FlowFast Developers API website
 to create Space, get Spaces and don't return it if token is invalid
 
 * @param {string} space 
 * @param {number} spaceId
 * @returns {object} answer from server
 */
 
const Space = {
    createNewSpace: (space) => {
        return supertest(myUrl)
        .post('/spaces')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.token}`)
        .send(space)
    },
    getListSpaces: () => {
        return supertest(myUrl)
        .get('/spaces')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.token}`)
    },
    getSpace: (spaceId) => {
        return supertest(myUrl)
        .get(`/spaces/${spaceId}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.token}`)
    },
    donotcreateNewSpace: (space) => {
        return supertest(myUrl)
        .post('/spaces')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.invalidToken}`)
        .send(space)
    },
}

export default Space;
