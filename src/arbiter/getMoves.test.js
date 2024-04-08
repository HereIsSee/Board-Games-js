const { getBishopMoves, getQueenMoves, getRookMoves, getKnightMoves } = require('./getMoves'); // Import the function you want to test

//----------------------Bishop moves-------------------------------------
test('Bishop moves correctly diagonally', () => {
    const position = [
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','wb','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','','']
    ];
    const result = getBishopMoves({ position, piece: 'wb', rank: 3, file: 3 });
    expect(result).toEqual([[ 2, 2 ], [ 1, 1 ],
        [ 0, 0 ], [ 4, 4 ],
        [ 5, 5 ], [ 6, 6 ],
        [ 7, 7 ], [ 4, 2 ],
        [ 5, 1 ], [ 6, 0 ],
        [ 2, 4 ], [ 1, 5 ],
        [ 0, 6 ]]);
});

test('Bishop moves correctly when all possible moves are blocked', () => {
    const position = [
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','wp','','wp','','',''],
        ['','','','wb','','','',''],
        ['','','wp','','wp','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','','']
    ];
    const result = getBishopMoves({ position, piece: 'wb', rank: 3, file: 3 });
    expect(result).toEqual([]);
});

test('Bishop moves correctly when in the corner', () => {
    const position = [
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','','wb']
    ];
    const result = getBishopMoves({ position, piece: 'wb', rank: 7, file: 7 });
    expect(result).toEqual([[ 6, 6 ], [ 5, 5 ],
        [ 4, 4 ], [ 3, 3 ],
        [ 2, 2 ], [ 1, 1 ],
        [ 0, 0 ]]);
});

test('Bishop takes enemy pieces', () => {
    const position = [
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','bp',''],
        ['','','','','','','','wb']
    ];
    const result = getBishopMoves({ position, piece: 'wb', rank: 7, file: 7 });
    expect(result).toEqual([[ 6, 6 ]]);
});
test('BIshop moves from starting pposition', () => {
    const position = [
        ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
        ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
        ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"]
    ];
    const result = getQueenMoves({ position, piece: 'wb', rank: 0, file: 2 });
    expect(result).toEqual([]);
});
//----------------------Queen moves-------------------------------------
test('Qeen moves on empty board', () => {
    const position = [
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','wq','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','','']
    ];
    const result = getQueenMoves({ position, piece: 'wq', rank: 3, file: 3 });
    expect(result).toEqual([[ 2, 2 ], [ 1, 1 ], [ 0, 0 ],
        [ 4, 4 ], [ 5, 5 ], [ 6, 6 ],
        [ 7, 7 ], [ 4, 2 ], [ 5, 1 ],
        [ 6, 0 ], [ 2, 4 ], [ 1, 5 ],
        [ 0, 6 ], [ 2, 3 ], [ 1, 3 ],
        [ 0, 3 ], [ 4, 3 ], [ 5, 3 ],
        [ 6, 3 ], [ 7, 3 ], [ 3, 2 ],
        [ 3, 1 ], [ 3, 0 ], [ 3, 4 ],
        [ 3, 5 ], [ 3, 6 ], [ 3, 7 ]]);
});

test('Qeen moves on from corner', () => {
    const position = [
        ['wq','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','','']
    ];
    const result = getQueenMoves({ position, piece: 'wq', rank: 0, file: 0 });
    expect(result).toEqual([[ 1, 1 ], [ 2, 2 ], [ 3, 3 ],
        [ 4, 4 ], [ 5, 5 ], [ 6, 6 ],
        [ 7, 7 ], [ 1, 0 ], [ 2, 0 ],
        [ 3, 0 ], [ 4, 0 ], [ 5, 0 ],
        [ 6, 0 ], [ 7, 0 ], [ 0, 1 ],
        [ 0, 2 ], [ 0, 3 ], [ 0, 4 ],
        [ 0, 5 ], [ 0, 6 ], [ 0, 7 ]]);
});

test('Qeen moves blocked by friendly pieces', () => {
    const position = [
        ['wq','','','','','','',''],
        ['wp','wp','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','','']
    ];
    const result = getQueenMoves({ position, piece: 'wq', rank: 0, file: 0 });
    expect(result).toEqual([[ 0, 1 ], [ 0, 2 ],
        [ 0, 3 ], [ 0, 4 ],
        [ 0, 5 ], [ 0, 6 ],
        [ 0, 7 ]]);
});
test('Qeen moves takes enemy piece', () => {
    const position = [
        ['wq','bq','','','','','',''],
        ['wp','wp','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','','']
    ];
    const result = getQueenMoves({ position, piece: 'wq', rank: 0, file: 0 });
    expect(result).toEqual([[ 0, 1 ]]);
});

test('Qeen moves from starting pposition', () => {
    const position = [
        ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
        ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
        ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"]
    ];
    const result = getQueenMoves({ position, piece: 'wq', rank: 0, file: 3 });
    expect(result).toEqual([]);
});

//----------------------Rook moves-------------------------------------
test('Rook moves on empty board', () => {
    const position = [
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','wr','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','','']
    ];
    const result = getRookMoves({ position, piece: 'wr', rank: 3, file: 3 });
    expect(result).toEqual([[2, 3], [1, 3], [0, 3], 
        [4, 3], [5, 3], [6, 3], [7, 3],
        [3, 2], [3, 1], [3, 0], [3, 4], [3, 5], [3, 6], [3, 7]
    ]);
});

test('Rook moves blocked by friendly pieces', () => {
    const position = [
        ['wr','','','','','','',''],
        ['wp','wp','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','','']
    ];
    const result = getRookMoves({ position, piece: 'wq', rank: 0, file: 0 });
    expect(result).toEqual([[ 0, 1 ], [ 0, 2 ],
        [ 0, 3 ], [ 0, 4 ],
        [ 0, 5 ], [ 0, 6 ],
        [ 0, 7 ]]);
});

test('Rook moves takes enemy piece', () => {
    const position = [
        ['wr','bq','','','','','',''],
        ['wp','wp','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','','']
    ];
    const result = getRookMoves({ position, piece: 'wq', rank: 0, file: 0 });
    expect(result).toEqual([[ 0, 1 ]]);
});

//----------------------Knight moves-------------------------------------
test('Knight moves from starting position', () => {
    const position = [
        ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
        ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
        ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"]
    ];
    const result = getKnightMoves({ position, piece: 'wn', rank: 7, file: 1});
    expect(result).toEqual([[5, 0], [5, 2]
    ]);
});

test('Knight moves when there is only one possible move', () => {
    const position = [
        ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
        ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ["bp",'','','','','','',''],
        ['', "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
        ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"]
    ];
    const result = getKnightMoves({ position, piece: 'wn', rank: 7, file: 1});
    expect(result).toEqual([[5,2]
    ]);
});