//**Returns count of a given symbol(x or 0) in a given row **//
const countInRow = (symbol, row) => row.filter(el => el === symbol).length;
//**Returns true if count of a given symbol in a given row equals to 3 **//
const hasWonInRow = (symbol, row) => countInRow(symbol, row) === 3;
//**Returns count of a given symbol(x or 0) in a given column **//
const countInColumn = (symbol, colNumber, ...rows) => rows.map(row => row[colNumber]).filter(el => el === symbol).length;
//**Returns true if count of a given symbol in a given column equals to 3 **//
const hasWonInColumn = (symbol, colNumber, ...rows) => countInColumn(symbol, colNumber, ...rows) === 3;
//**Returns count of a given symbol(x or y) in the left slant**//
const countInLeftSlant = (symbol, ...rows) => {
    const [row0, row1, row2] = rows;
    return [row0[0], row1[1], row2[2]].filter(el => el === symbol).length;
};
//**Returns true if count of a given symbol in a given slant(left) equals to 3 **//
const hasWonInLeftSlant = (symbol, ...rows) => countInLeftSlant(symbol, ...rows) === 3;
//**Returns count of a given symbol(x or y) in the right slant**//
const countInRightSlant = (symbol, ...rows) => {
    const [row0, row1, row2] = rows;
    return [row0[2], row1[1], row2[0]].filter(el => el === symbol).length;
};
//**Returns true if count of a given symbol in a given slant(right) equals to 3 **//
const hasWonInRightSlant = (symbol, ...rows) => countInRightSlant(symbol, ...rows) === 3;
//**Returns true if a count of given symbol in one of the lines,columns or slants equals to 3**//
export const resultForSymbol = (symbol, board) => {
    const rows = Object.keys(board).map(row => board[row]);
    return [
        {line: 'row0', won: hasWonInRow(symbol, board[0])},
        {line: 'row1', won: hasWonInRow(symbol, board[1])},
        {line: 'row2', won: hasWonInRow(symbol, board[2])},
        {line: 'column0', won: hasWonInColumn(symbol, 0, ...rows)},
        {line: 'column1', won: hasWonInColumn(symbol, 1, ...rows)},
        {line: 'column2', won: hasWonInColumn(symbol, 2, ...rows)},
        {line: 'leftSlant', won: hasWonInLeftSlant(symbol, ...rows)},
        {line: 'rightSlant', won: hasWonInRightSlant(symbol, ...rows)}
    ]
        .reduce((answer, nextCheck) => {
            return nextCheck.won ? nextCheck : answer;
        }, {won: false});
};