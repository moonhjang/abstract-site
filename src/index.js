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
}

class Comment {
    constructor({content,author}) {
        this.content = content;
        this.author = author;
    } 
}


module.exports = {
    Site, 
    Board,
    Article,
    Comment,
};