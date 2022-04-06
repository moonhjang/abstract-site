class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        if (this.boards.find(name => name.notice === board.notice)){
            throw Error()
        } else {
            this.boards.push(board);
            board.confirm = true
        }
    }

    findBoardByName(boardname) {
        let boardnames = this.boards.find(name => name.notice === boardname)
        return boardnames;
    }

}
   

class Board extends Site {
    constructor(notice) {
        super()
        if (notice === '' || notice === null){
            throw Error()
        } else {
            this.notice = notice;
            this.confirm = false;
            this.id = '공지사항-'+ Math.random(); 
            this.createdDate = new Date().toISOString();
        }
    }

    publish(article){
        if (this.confirm === true){
            if (article.subject === '' || article.subject === null){
                throw Error()
            } else if (article.content === '' || article.content === null){
                throw Error()
            } else if (article.author === '' || article.author === null){
                throw Error()
            } else {
                this.boards.push(article)
                article.check = true; 
            }              
        } else {
            throw Error()
        }
    }

    getAllArticles(){
        return this.boards
    }
}

class Article extends Board {
    constructor({subject, content, author}) {
        super()
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.check = false; 
        this.id = '공지사항-'+ Math.random(); 
        this.createdDate = new Date().toISOString();
        
    }

    reply(comment) {
        if (this.check === true){
            if (comment.content === '' || comment.content === null){
                throw Error()
            } else if (comment.author === '' || comment.author === null){
                throw Error()
            } else {
            this.boards.push(comment)
            }
        } else {
            throw Error()
        }
    }

    getAllComments(){
        return this.boards
    }
}

class Comment{
    constructor({content, author}) {
        this.content = content;
        this.author = author;
        this.id = '공지사항-'+ Math.random(); 
        this.createdDate = new Date().toISOString();
    }
}


module.exports = {
    Site, 
    Board,
    Article,
    Comment,
};



