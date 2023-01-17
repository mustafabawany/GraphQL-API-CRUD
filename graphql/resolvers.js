// Define the logic to handle incoming queries
const Post = require('../models/post');

database = {};

module.exports = {
    getPost: ({id}) => {
        if(!database[id]){
            throw new Error('No post with ${id}');
        }

        return new Post(id, database[id]);
    },

    getPosts: () => {
        var posts = [];
        for (var id in database) {
            if(database.hasOwnProperty(id)) {
                var post = database[id];
                posts.push(new Post(id,post));
            }
        }
        return posts;
    },

    createPost: ({input}) => {
        var id = require('crypto').randomBytes(10).toString('hex');
        database[id] = input;
        return new Post(id, input);
    },

    updatePost: ({id, input}) => {
        if(!database[id]) {
            throw new Error("No posts with ${id}");
        }
        database[id] = input;
        return new Post(id, input);
    }
}