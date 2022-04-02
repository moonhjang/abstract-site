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
        this.notice = notice;
    }
}

class Article {}

class Comment {}



const mySite = new Site();

const noticeBoard1 = new Board('공지사항');
const noticeBoard2 = new Board('공지사항');

mySite.addBoard(noticeBoard1);
mySite.addBoard(noticeBoard2);

console.log(mySite.boards)

