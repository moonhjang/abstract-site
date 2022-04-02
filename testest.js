class Site {
    constructor() {
        this.boards = [];
      }
    
    addBoard(board) {
        if (this.boards.find(name => name.notice === board.notice)){

        } else {
            this.boards.push(board)
        }
    }

    
    findBoardByName(board){
        this.boards.find(name => name.notice === board)
        return board;
    }

}
   

class Board {
    constructor(notice) {
        if (notice === '' || notice === null){
            throw Error() 
        } else {
            this.notice = notice;
        }
    }
}

class Article {}

class Comment {}



const mySite = new Site();

const _board = new Board('공지사항');
const _board2 = new Board('');
const _board3 = new Board(null);

console.log(_board.notice, '확인')
console.log(_board2.notice, '확인')
console.log(_board3.notice, '확인')



