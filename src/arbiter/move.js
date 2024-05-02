import { copyPosition } from "../helper"
export const moveCheckers = ({position,piece,rank,file,x,y}) => {
    const newPosition = copyPosition(position)
    if(piece === 'bc' && x === 7)
    {
        newPosition[rank][file] = ''
        newPosition[x][y]='bx'
        return newPosition
    }
    if(piece === 'wc' && x === 7)
    {
        newPosition[rank][file] = ''
        newPosition[x][y]='wx'
        return newPosition
    }
    //From here
    for (let i = 1; i < 8; i++) {
        if (position?.[x-i]?.[y-i] === undefined)
        {
            break
        }
                
        if(x - rank > i && y - file >i)
        {
            newPosition[x-1][y-1]=''
        } 
    }
    for (let i = 1; i < 8; i++) {
        if (position?.[x-i]?.[y+i] === undefined)
        {
            break
        }
                
        if(x - rank > 1 && file - y >1)
        {
            newPosition[x-1][y+1]=''
        } 
    }
    for (let i = 1; i < 8; i++) {
        if (position?.[x+i]?.[y+i] === undefined)
        {
            break
        }
                
        if(rank - x > 1 && file - y >1)
        {
            newPosition[x+1][y+1]=''
        } 
    }
    for (let i = 1; i < 8; i++) {
        if (position?.[x+i]?.[y-i] === undefined)
        {
            break
        }
                
        if(rank - x > 1 && y - file >1)
        {
            newPosition[x+1][y-1]=''
        } 
    }
    newPosition[rank][file] = ''
    newPosition[x][y] = piece
    return newPosition   
}

export const movePiece = ({position,piece,rank,file,x,y}) => {

    const newPosition = copyPosition(position)

    if(piece.endsWith('k') && Math.abs(y - file) > 1){ // Castles
        if (y === 2){ // Castles Long
            newPosition[rank][0] = ''
            newPosition[rank][3] = piece.startsWith('w') ? 'wr' : 'br'
        }
        if (y === 6){ // Castles Short
            newPosition[rank][7] = ''
            newPosition[rank][5] = piece.startsWith('w') ? 'wr' : 'br'
        }
    }

    newPosition[rank][file] = ''
    newPosition[x][y] = piece
    return newPosition
}
export const movePawn = ({position,piece,rank,file,x,y}) => {
    const newPosition = copyPosition(position)
    // EnPassant, looks like capturing an empty cell
    // Detect and delete the pawn to be removed
    if (!newPosition[x][y] && x !== rank && y !== file) 
        newPosition[rank][y] = ''
    newPosition[rank][file] = ''
    newPosition[x][y] = piece
    return newPosition
}