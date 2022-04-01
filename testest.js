
class Site {
    constructor() {
        this.boards = [];
      }
    
    addBoard(boardname) {
        this.boards.push(boardname.notice);
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

///////

const mySite = new Site();   
console.log(mySite)   // Site {boards: []}

const noticeBoard = new Board('공지사항');
console.log(noticeBoard)  //공지사항

mySite.addBoard(noticeBoard)
console.log(mySite.boards)

// console.log("notice",mySite.boards)  //undefined
// console.log('here',noticeBoard.b)                   //undefined                                

// mySite.findBoardByName('공지사항')



