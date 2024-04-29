export const getCharacter = file => String.fromCharCode(file + 96)

export const createPositionChess = () =>{

    const position = new Array(8).fill('').map(x=> new Array(8).fill(''))
    for(let i=0; i< 8; i++)
    {
        position[1][i]='wp';
        position[6][i]='bp';
    }
    
    position[0][0] = 'wr'
    position[0][1] = 'wn'
    position[0][2] = 'wb'
    position[0][3] = 'wq'
    position[0][4] = 'wk'
    position[0][5] = 'wb'
    position[0][6] = 'wn'
    position[0][7] = 'wr'

    position[7][0] = 'br'
    position[7][1] = 'bn'
    position[7][2] = 'bb'
    position[7][3] = 'bq'
    position[7][4] = 'bk'
    position[7][5] = 'bb'
    position[7][6] = 'bn'
    position[7][7] = 'br'

    return position
}

export const createPositionCheckers = () =>{

    const position = new Array(8).fill('').map(x=> new Array(8).fill(''))
    for(let i=0; i< 8; i+=2)
    {
        position[0][i]='wc';
    }
    for(let i=1; i< 8; i+=2)
    {
        position[1][i]='wc';
    }
    for(let i=0; i< 8; i+=2)
    {
        position[2][i]='wc';
    }


    for(let i=1; i< 8; i+=2)
    {
        position[5][i]='bc';
    }
    for(let i=0; i< 8; i+=2)
    {
        position[6][i]='bc';
    }
    for(let i=1; i< 8; i+=2)
    {
        position[7][i]='bc';
    }

    return position
}

export const createPositionChessRandom = () =>{

    const position = new Array(8).fill('').map(x=> new Array(8).fill(''))
    for(let i=0; i< 4; i++)
    {
        let randomNumber1 = Math.ceil(Math.random() * 5);
        let randomNumber2 = Math.ceil(Math.random() * 5);

        position[1][i]='w'+PieceSelection(randomNumber1);
        position[0][i]='w'+PieceSelection(randomNumber2);

        position[6][i]='b'+PieceSelection(randomNumber1);
        position[7][i]='b'+PieceSelection(randomNumber2);
    }
    for(let i=5; i< 8; i++)
    {
        let randomNumber1 = Math.ceil(Math.random() * 5);
        let randomNumber2 = Math.ceil(Math.random() * 5);

        position[1][i]='w'+PieceSelection(randomNumber1);
        position[0][i]='w'+PieceSelection(randomNumber2);

        position[6][i]='b'+PieceSelection(randomNumber1);
        position[7][i]='b'+PieceSelection(randomNumber2);
    }
    let randomNumber = Math.ceil(Math.random() * 5);
    position[1][4] = 'w'+PieceSelection(randomNumber);
    
    position[6][4] = 'b'+PieceSelection(randomNumber);

    position[0][4] = 'wk'
    
    position[7][4] = 'bk'
    

    return position
}
function PieceSelection (number){
    switch(number){
        case 1:
            return 'p';
            break;
        case 2:
            return 'b';
            break;
        case 3:
            return 'n';
            break;
        case 4:
            return 'r';
            break;
        case 5:
            return 'q';
            break;
        default:
            return 'p';
    }
}

export const copyPosition = position => {
    const newPosition = new Array(8).fill('').map(x=> new Array(8).fill(''))

    for(let rank = 0; rank < 8; rank++){
        for(let file = 0; file < 8; file++){
            newPosition[rank][file]=position[rank][file]
        }
    }
    return newPosition
    
}

export const areSameColorTiles = (coords1,coords2) => 
    (coords1.x + coords1.y) % 2 === (coords2.x + coords2.y)


export const findPieceCoords = (position,type) => {
    let results = []
    position.forEach((rank,i) => {
        rank.forEach((pos,j) => {
            if(pos === type)
                results.push({x:i,y:j})
        })
    })
    return results
}