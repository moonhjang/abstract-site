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

    publish(article) {
        if (this.notice !== '사이트에 추가되지 않은 게시판'){
            this.boards.push(article)
             //id  규칙
            //규칙을 이용 아이디가 만든다. 
        } else {
            console.log('error')
        }
    }

    getAllArticles() {
        return this.boards

    }
}

class Article extends Board{
    constructor({subject,content,author}) {
        super()
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.id = '공지사항-'+ Math.random();
        this.createdDate = new Date().toISOString();
        console.log(this.createdDate)
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

const article2 = new Article({
    subject: '두번째 공지사항입니다.',
    content: 'DB나 웹서버를 이용할 필요는 없습니다.',
    author: '강승현',
});
noticeBoard.publish(article2);

console.log(noticeBoard.notice)
console.log(noticeBoard.getAllArticles(), [article, article2])