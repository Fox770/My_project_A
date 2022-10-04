import BuildBoard, { updatedBoard, newBoard, boardByTariff } from '../framework_api/fixtures/builder/newBoard';
import SpaceBoard from '../src/spaceBoardsFF';

describe('Testing Space Boards in FlowFast Developers API', () => {
    
    const spaceId = 78193
    const boardId = 188166

    /** Positive Space Boards tests */
    test('Creates New Board with builder /post 200', async () => { 
        const board = new BuildBoard().addTitle().addCover().addColumns().addLanes()

        const response = await SpaceBoard.createNewBoard(spaceId, board)
        expect(response.status).toEqual(200)
        expect.objectContaining({
            title: expect.any({String}),
            first_image_is_cover: expect.any({Boolean}),
            columns: expect.any([Array]),
          })
    }),
    test('Returns list of Boards /get 200', async () => { 
        const response = await SpaceBoard.getBoardsList(spaceId)
        expect(response.status).toEqual(200)
        expect.objectContaining({
            space_id: 78193,
            title: expect.any({String}),
            board_id: expect.any({Number}),
            columns: expect.any([Array]),
          })
    }),
    test('Returns Board from account /get 200', async () => { 
        const response = await SpaceBoard.getBoard(spaceId, boardId)
        expect(response.status).toEqual(200)
        expect.objectContaining({
            space_id: 78193,
            board_id: 188166,
            title: 'Carl'
          })
    }),
    test('Updates Board from account /patch 200', async () => { 
        const response = await SpaceBoard.updateBoard(spaceId, boardId, updatedBoard)
        expect(response.status).toEqual(200)
        expect.objectContaining({
            space_id: 78193,
            board_id: 188168,
            title: expect.any({String}),
            first_image_is_cover: expect.any({Boolean}),
          })
    }),
    /** Negative Space Boards tests */
    test('Does not Create New Board without required field /Validation error 400', async () => { 
        const board = new BuildBoard().addTitle().addLanes()

        const response = await SpaceBoard.createNewBoard(spaceId, board)
        expect(response.status).toEqual(400)
        expect(response.body).toEqual({message: "Board should have required property 'columns'"}) 
    }),
    test('Does not Create New Board with Invalid token /401', async () => { 
        const spaceId = 78000

        const response = await SpaceBoard.doNotCreateNewBoard(spaceId, newBoard)
        expect(response.status).toEqual(401)
        expect(response.text).toEqual('Unauthorized')
    }),  
    test('Does not Update Board /Feature is not supported by tariff 402', async () => { 
        const response = await SpaceBoard.updateBoard(spaceId, boardId, boardByTariff)
        expect(response.status).toEqual(402)
        expect.objectContaining({message: "Your tariff doesn't include 'Add lanes' feature for board"})
    }),  
    test('Does not Delete Board /Forbiden 403', async () => { 
        const spaceId = 100000

        const response = await SpaceBoard.doNotRemoveBoard(spaceId)
        expect(response.status).toEqual(403)
        expect.objectContaining('Forbiden')
    })
});
