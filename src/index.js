class Site {
    constructor() {
        this.boards = [];
      }
    
    addBoard(board) {
        if (this.boards.find(name => name.notice === board.notice)){
            throw Error()
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

module.exports = {
    Site, 
    Board,
    Article,
    Comment,
};
