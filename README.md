# GraphQL-API-CRUD

<p>Created a Graphql CRUD API using NodeJS & ExpressJS</p>

Npm Packages Used:
<ul>
  <li>graphql</li>
  <li>express-graphql</li>
 </ul>

## Some example queries and mutations

```
mutation createPost($input:PostInput){
  createPost(input: $input){
    id 
    title
    content
  }
}
```
```
query getPost($id:ID!){
  getPost(id: $id){
    id
    title
    content
  }
}
```
```
query getPosts{
  getPosts{
    id
    title
    content
  }
}
```

```
mutation updatePost($id: ID! , $input:PostInput){
  updatePost(id:$id, input:$input){
    id
    title
    content
  }
}
```
