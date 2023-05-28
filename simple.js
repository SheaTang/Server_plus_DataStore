var low = require("lowdb");
var fs = require("lowdb/adapters/FileSync");
var adapter = new fs("db.json");
var db = low(adapter);

// init the data store
// ---------------------------
db.defaults({ posts: [] }).write();

console.log(db.get("posts").value());

// count posts
// ----------------------------
// YOUR CODE

// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE
// init the data store
// ---------------------------
// Set some Defaults
db.defaults({ posts: [] }).write();

db.get("posts").remove().write();
console.log(db.get("posts").value());

// add post----------------------------
// YOUR CODE
db.get("posts").push({ id: 1, title: "post 1", published: true }).write();
db.get("posts").push({ id: 2, title: "post 2", published: false }).write();
db.get("posts").push({ id: 3, title: "post 3", published: true }).write();
db.get("posts").push({ id: 4, title: "post 4", published: false }).write();

// count posts
let count = db.get("posts").size().value();
console.log("count", count);
// find all posts ids
// ----------------------------
// YOUR CODE
let allPosts = db
  .get("posts")
  .value()
  .map((post) => post.id);
console.log("allPosts", allPosts);

// all matches of published false
// ----------------------------
// YOUR CODE
let unpublished = db.get("posts").filter({ published: false }).value();
console.log("unpublished", unpublished);

// find post with published false
// ----------------------------
// YOUR CODE
let unpublishedPost = db.get("posts").find({ published: false }).value();
console.log("unpublishedPost", unpublishedPost);
