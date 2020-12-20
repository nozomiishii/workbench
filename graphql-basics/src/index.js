import { GraphQLServer } from 'graphql-yoga';

const users = [
  { id: '1', name: 'nozomi', email: 'nozomi@gmail.com', comment: '1' },
  { id: '2', name: 'waon', email: 'waon@gmail.com', comment: '1' },
  { id: '3', name: 'mocha', email: 'mocha@gmail.com', comment: '2' },
];

const posts = [
  {
    id: 1,
    title: 'aaaa',
    body:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rem ex, architecto dolor, atque ipsum consequuntur animi cum pariatur cupiditate reprehenderit, eligendi inventore eos? Eligendi rem expedita ullam doloremque placeat.',
    author: '1',
  },
  {
    id: 2,
    title: 'bbb',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, facere?',
    author: '1',
  },
  {
    id: 3,
    title: 'ccc',
    body:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tempora iure, omnis officia adipisci libero!',
    author: '2',
  },
];

const comments = [
  { id: '1', text: 'Lorem ipsum dolor sit amet.', author: '1' },
  { id: '2', text: 'fafds Lorem ipsum dolor sit amet.', author: '1' },
  { id: '3', text: 'vadvda Lorem ipsum dolor sit amet.', author: '2' },
];

const typeDefs = `
  type Query{
    users(query:String):[User!]!
    posts(query:String):[Post!]!
    me: User!
    post: Post!
    comments: [Comment!]!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts:[Post!]!
    comments: [Comment]
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    author: User!
  }

  type Comment {
    id: String!
    text: String!
    author: User!
  }
`;

const resolvers = {
  Query: {
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }
      return posts.filter(
        (post) =>
          post.title.toLowerCase().includes(args.query.toLowerCase()) ||
          post.body.toLowerCase().includes(args.query.toLowerCase())
      );
    },
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }
      return users.filter((user) => user.name.toLowerCase().includes(args.query.toLowerCase()));
    },
    comments() {
      return comments;
    },
    me() {
      return {
        id: '1234',
        name: 'nozomi',
        email: 'nozmoi@email.com',
        age: 29,
      };
    },
    post() {
      return {
        id: '11111',
        title: 'books',
        body: 'test',
      };
    },
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => user.id === parent.author);
    },
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter((post) => post.author === parent.id);
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => comment.id === parent.comment);
    },
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find((user) => user.id === parent.author);
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log('the server is up'));
