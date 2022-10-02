import supertest from 'supertest';
import myCredentials from '../framework_api/config/urls';
const { myUrl } = myCredentials;

 /** Describe functions for FlowFast Developers API website
 to create, get, update Boards and don't create or remove if it's incorrect
 
 * @param {string} board 
 * @param {number} spaceId 
 * @param {number} boardId
 * @returns {object} answer from server
 */

const SpaceBoard = {
    createNewBoard: (spaceId, board) => { 
        return supertest(myUrl)
        .post(`/spaces/${spaceId}/boards`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.token}`)
        .send(board)
    },
    getBoardsList: (spaceId) => {
        return supertest(myUrl)
        .get(`/spaces/${spaceId}/boards`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.token}`)
    },
    getBoard: (spaceId, boardId) => { 
        return supertest(myUrl)
        .get(`/spaces/${spaceId}/boards/${boardId}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.token}`)
    },
    updateBoard: (spaceId, boardId, board) => { 
        return supertest(myUrl)
        .patch(`/spaces/${spaceId}/boards/${boardId}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.token}`)
        .send(board)
    },
    doNotCreateNewBoard: (spaceId, board) => { 
        return supertest(myUrl)
        .post(`/spaces/${spaceId}/boards`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.invalidToken}`)
        .send(board)
    },
    doNotRemoveBoard: (spaceId) => { 
        return supertest(myUrl)
        .delete(`/spaces/${spaceId}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${myCredentials.token}`)
    }
}

export default SpaceBoard;