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
        let boardname =this.boards.find(name => name.notice === board)
        return boardname;
    }

    total(){
        console.log(this.boards)
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
            if (article.subject === null || article.aubject === ''){
                throw Error()
            } else if (article.conetent=== null || article.conetent === ''){
                throw Error()   
            } else if (article.author === null || article.author === ''){
                throw Error()
            } else {
                this.boards.push(article)
            }
        } else {
            throw Error()
        }
    }

    getAllArticles() {
        return this.boards
    }


}

class Article extends Board {
    constructor({subject,content,author}) {
        super()
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.id = '공지사항-'+ Math.random(); 
        this.createdDate = new Date().toISOString();
    } 

    reply(comment) {
        if (this.subject !== '아직 게시하지 않은 공지사항입니다.'){
            this.boards.push(comment)
        } else {
            throw Error()
        }
        console.log(super.total,  '아티클 보드')
    }

    getAllArticles() {
        return this.boards
    }
}

class Comment {
    constructor({content,author}) {
        this.content = content;
        this.author = author;
    } 
}







mySite = new Site();
const noticeBoard = new Board('공지사항');  //board클래스에 공지사항을 넣어


mySite.addBoard(noticeBoard);       //noticeboard를 추가해줘
mySite.findBoardByName('공지사항'); //공지사항을 찾아줘
console.log(mySite.findBoardByName('공지사항'),'공지사항을 찾아줘')

const publishedArticle = new Article({
    subject: '첫번째 공지사항입니다.',
    content: '테스트 코드는 수정하면 안됩니다.',
    author: '강승현',
});
noticeBoard.publish(publishedArticle);

const draftArticle = new Article({
    subject: '아직 게시하지 않은 공지사항입니다.',
    content: '댓글을 달 수 없어야 합니다',
    author: '강승현',
});


const comment = new Comment({
    content: '넵!',
    author: '댕댕이',
});
publishedArticle.reply(comment);



const comment2 = new Comment({
    content: '넵!',
    author: '댕댕이',
});
draftArticle.reply(comment2);

console.log(mySite.boards,'최종')