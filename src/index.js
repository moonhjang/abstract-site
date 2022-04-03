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

module.exports = {
    Site, 
    Board,
    Article,
    Comment,
};
