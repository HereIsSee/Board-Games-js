
import { 
    getRookMoves, getKnightMoves, getBishopMoves, 
    getQueenMoves, 
    getKingMoves, 
    getPawnMoves, 
    getPawnCaptures 
} from './getMoves';

describe('Chess Piece Moves', () => {
    describe('Rook Moves', () => {
        const position = Array.from({length: 8}, () => new Array(8).fill(''));

        test('should return correct moves from an empty board', () => {
            position[0][0] = 'wr'; expect(getRookMoves({position, piece: 'wr', rank: 0, file: 0})).toEqual(expect.arrayContaining([[1,0], [2,0], [3,0], [4,0], [5,0], [6,0], [7,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7]]));
        });

        test('should return moves blocked by own piece', () => {
            position[2][0] = 'wr'; expect(getRookMoves({position, piece: 'wr', rank: 0, file: 0})).toEqual(expect.arrayContaining([[1,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7]]));
        });

        test('should return empty array from corner with surrounding own pieces', () => {
            position[0][1] = 'wn'; 
            position[1][0] = 'wp';
            expect(getRookMoves({position, piece: 'wr', rank: 0, file: 0})).toEqual([]);
        });
    });

    describe('Knight Moves', () => {
        const position = Array.from({length: 8}, () => new Array(8).fill(''));

        test('should return correct moves from center of empty board', () => {
            position[4][4] = 'wn'; 
            expect(getKnightMoves({position, rank: 4, file: 4})).toEqual(expect.arrayContaining([[2,3], [2,5], [3,2], [3,6], [5,2], [5,6], [6,3], [6,5]]));
        });

        test('should return empty array when surrounded by own pieces', () => {
            position[4][3] = 'wn'; 
            position[2][2] = 'wp';
            position[2][4] = 'wp';
            position[3][1] = 'wp';
            position[3][5] = 'wp';
            position[5][1] = 'wp';
            position[5][5] = 'wp';
            position[6][2] = 'wp';
            position[6][4] = 'wp';
            expect(getKnightMoves({position, rank: 4, file: 3})).toEqual([]);
        });
    });

    describe('Bishop Moves', () => {
        const position = Array.from({length: 8}, () => new Array(8).fill(''));

        test('should return correct moves from center of empty board', () => {
            position[3][3] = 'wb'; expect(getBishopMoves({position, piece: 'wb', rank: 3, file: 3})).toEqual(expect.arrayContaining([[2,2], [1,1], [0,0], [4,4], [5,5], [6,6], [7,7], [4,2], [5,1], [6,0], [2,4], [1,5], [0,6]]));
        });
    });

    describe('Queen Moves', () => {
        const position = Array.from({length: 8}, () => new Array(8).fill(''));

        test('should return correct moves from center of empty board', () => {
            position[3][3] = 'wq'; 
            expect(getQueenMoves({position, piece: 'wq', rank: 3, file: 3})).toEqual(expect.arrayContaining([...getBishopMoves({position, piece: 'wq', rank: 3, file: 3}), ...getRookMoves({position, piece: 'wq', rank: 3, file: 3})]));
        });
    });

    describe('King Moves', () => {
        const position = Array.from({length: 8}, () => new Array(8).fill(''));

        test('should return correct moves from center of empty board', () => {
            position[3][3] = 'wk'; expect(getKingMoves({position, piece: 'wk', rank: 3, file: 3})).toEqual(expect.arrayContaining([[2,2], [2,3], [2,4], [3,2], [3,4], [4,2], [4,3], [4,4]]));
        });
    });

    describe('Pawn Moves', () => {
        const position = Array.from({length: 8}, () => new Array(8).fill(''));

        test('should return forward move on empty board', () => {
            position[1][4] = 'wp'; expect(getPawnMoves({position, piece: 'wp', rank: 1, file: 4})).toEqual(expect.arrayContaining([[2,4],[3,4]]));
        });

        test('should not return any move when blocked by another piece', () => {
            position[2][4] = 'bp';
            expect(getPawnMoves({position, piece: 'wp', rank: 1, file: 4})).toEqual([]);
        });
    });

    describe('Pawn Captures', () => {
        const position = Array.from({length: 8}, () => new Array(8).fill(''));

        test('should return diagonal capture moves', () => {
            position[2][3] = 'bp'; position[2][5] = 'bp'; expect(getPawnCaptures({position, piece: 'wp', rank: 1, file: 4})).toEqual(expect.arrayContaining([[2,3],[2,5]]));
        });
    });
});
