module.exports = class Post {
    constructor(id, {title,content} ){
        this.id = id;
        this.title = title;
        this.content = content;
    }
};