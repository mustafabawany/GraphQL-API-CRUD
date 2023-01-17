// Define the queries, mutations, and types 

const { buildSchema } = require('graphql');

// Here we describe our schema
module.exports = buildSchema(` 
    input PostInput {
        title: String
        content: String
    }

    type Post{
        id: ID!
        title: String
        content: String
    }

    type Query {
        getPost(id: ID!): Post
        getPosts: [Post]
    }

    type Mutation {
        createPost(input: PostInput): Post
        updatePost(id: ID!, input: PostInput): Post
    }    
`);