import { copyPosition } from "../helper"
export const moveCheckers = ({position,piece,rank,file,x,y}) => {
    const newPosition = copyPosition(position)
    
    let number =0
    if(number === 0){
        for (let i = 1; i < 8; i++) {
            if (position?.[x-i]?.[y-i] === undefined)
            {
                break
            }
                    
            if(x - rank > i && y - file >i)
            {
                newPosition[x-i][y-i]=''
                number=1
                
            } 
        }
    }
    if(number === 0){
        for (let i = 1; i < 8; i++) {
            if (position?.[x-i]?.[y+i] === undefined)
            {
                break
            }
                    
            if(x - rank > i && file - y >i)
            {
                newPosition[x-i][y+i]=''
                number=1
                
            } 
        }
    }
    if(number === 0){
        for (let i = 1; i < 8; i++) {
            if (position?.[x+i]?.[y+i] === undefined)
            {
                break
            }
                    
            if(rank - x > i && file - y >i)
            {
                newPosition[x+i][y+i]=''
                number=1
                
            } 
        }
    }
    if(number === 0){
        for (let i = 1; i < 8; i++) {
            if (position?.[x+i]?.[y-i] === undefined)
            {
                break
            }
                    
            if(rank - x > i && y - file >i)
            {
                newPosition[x+i][y-i]=''
                number=1
                
            } 
        }
    }
    
    
    if(piece === 'bc' && x === 0)
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