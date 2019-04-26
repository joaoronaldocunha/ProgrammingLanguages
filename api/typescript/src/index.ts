import express from "express";

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Get request!" );
} );

app.post( "/", ( req, res ) => {
    res.send( "Post request!" );
} );

app.put( "/", ( req, res ) => {
    res.send( "Put request!" );
} );

app.delete( "/", ( req, res ) => {
    res.send( "delete request!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
