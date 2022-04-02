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
   
    findBoardByName(board) {
        let boardname =this.boards.find(name => name.notice === board)
        return boardname;   
    }
}
   

class Board extends Site {
    constructor(notice) {
        super()                //Site에 있는 정보를 어떻게 가져오지?
        this.notice = notice;      
        if (notice === '' || notice === null){
            throw Error()
        }
    }

    publish(article){
        if (this.notice !== '사이트에 추가되지 않은 게시판'){
            this.boards.push(article)
             //id  규칙
            //규칙을 이용 아이디가 만든다. 
        } else {
            console.log('error')
        }

    }
}

class Article extends Board{
    constructor({subject,content,author}) {
        super()
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.id = '공지사항-'+ Math.random(); 
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