import "./model";
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import schema from './schema';

const app = express();
const graphqlPath = '/graphql';
app.use(cors());
// Replace with your mongoLab URI
const MONGO_URI = 'mongodb://admin:admin123@ds145486.mlab.com:45486/comviva-assignment';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {useNewUrlParser: true});

mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(express.static(path.join(__dirname, '../build')));

// Route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
  

const server = new ApolloServer({schema});

//Mount a jwt or other authentication middleware that is run before the GraphQL execution
//app.use(path, jwtCheck);

server.applyMiddleware({ app, graphqlPath });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)