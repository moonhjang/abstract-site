class Site {
    constructor() {
        this.boards = [];
      }
    
    addBoard(board) {
        console.log(board,'naem:공지사항')
        if (this.boards.find(name => name.notice === board.notice)){

        } else {
            this.boards.push(board)
            console.log(this.boards,'들어갔나')
        }
    }
   
    findBoardByName(board){
        console.log(board, this.boards,'추가된 게시판 ---pass')
        let boardname = this.boards.find(name => name.notice === board)
        console.log(boardname, '보드네임')
        return boardname;
    }

    publish(){
        return this.boards
    }
}
   

class Board extends Site {
    constructor(notice) {
        super()                //Site에 있는 정보를 어떻게 가져오지?
        this.notice = notice; 
        console.log(this.notice, 'this notices')
        
        if (notice === '' || notice === null){
            throw Error()
        }
    }

    publish(article){
        console.log(this.notice)
        if (this.notice !== '사이트에 추가되지 않은 게시판'){
            return this.boards.push(article)
        } else {
            console.log('error')
        }

    }
}

class Article {
    constructor({subject,content,author}) {
        this.subject = subject;
        this.content = content;
        this.author = author;
    }   
}


class Comment {}


const mySite = new Site();

const noticeBoard = new Board('공지사항');
mySite.addBoard(noticeBoard);

const article = new Article({
    subject: '첫번째 공지사항입니다.',
    content: '테스트 코드는 수정하면 안됩니다.',
    author: '강승현',
});

noticeBoard.publish(article);

console.log(article.id.startsWith('공지사항-'),'True여야함')