class Site {
    constructor() {
        this.boards = [];
      }
    
    addBoard(board) {
        if (this.boards.find(name => name.notice === board)){
            throw Error()
        } else {
            this.boards.push(board.notice);
        }
    }
    
    findBoardByName(boardname){
        this.boards.find(boardname => boardname.notice)
        return boardname;
    }

    // findBoardByName(boardname){
    //     if(this.boards.find(board => board.notice === boardname)) {
    //         return boardname;
    //     } else {
    //         throw Error()
    //     }
    // }

}
   

class Board {
    constructor(notice) {
        this.notice = notice;
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
