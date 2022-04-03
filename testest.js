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
   
        // this.notice.findOne(name => console.log(name.subject))
        if (this.notice !== '사이트에 추가되지 않은 게시판'){
            if (article.subject === null || article.aubject === ''){
                console.log(article.subject, 'error')
            } else if (article.conetent=== null || article.conetent === ''){
                console.log(article.conetent, 'error')
           
            } else if (article.author === null || article.author === ''){
                console.log(article.author,'error')
            } else {
                this.boards.push(article)
            }
             //id  규칙
            //규칙을 이용 아이디가 만든다. 
        } else {
            console.log('진짜 error')
        }
    }

    getAllArticles() {
        return this.boards
    }
}

class Article {
    constructor({subject,content,author}) {
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.id = '공지사항-'+ Math.random(); 
        this.createdDate = new Date().toISOString();
    } 
}


class Comment {}

//기본셋팅
mySite = new Site();
const noticeBoard = new Board('공지사항');
mySite.addBoard(noticeBoard);
//기본셋팅

mySite.findBoardByName('공지사항');

const article = new Article({
    subject: '첫번째 공지사항입니다.',
    content: '테스트 코드는 수정하면 안됩니다.',
    author: '강승현',
});
noticeBoard.publish(article);  //pass
console.log(noticeBoard.publish(article), 'pass')


const article2 = new Article({
    subject: null,
    content: null,
    author: '',
});
noticeBoard.publish(article2);  //fail
console.log(noticeBoard.publish(article2), 'fail')