// =============================================
//  MongoDB Books Collection - All Queries
// =============================================

// ====================================
// Task 1: Inserting Documents into the Collection
// ====================================

db.books.insertMany([
  {
    title: "Book A",
    author: "Author X",
    genre: "Fiction",
    price: 19.99,
    published_year: 2015
  },
  {
    title: "Book B",
    author: "Author Y",
    genre: "Non-Fiction",
    price: 25.50,
    published_year: 2018
  },
  {
    title: "Book C",
    author: "Author X",
    genre: "Fiction",
    price: 15.75,
    published_year: 2020
  },
  {
    title: "Book D",
    author: "Author Z",
    genre: "Science Fiction",
    price: 22.00,
    published_year: 2010
  }
]);


// ====================================
//  Task 2: Basic Queries
// ====================================

// 1. Find all books
db.books.find();


// 2. Find books by a specific author (e.g., "Author X")
db.books.find({ author: "Author X" });


// 3. Find books cheaper than a specific price (e.g., price < 20)
db.books.find({ price: { $lt: 20 } });


// 4. Find books published after a specific year (e.g., after 2015)
db.books.find({ published_year: { $gt: 2015 } });


// ====================================
//  Task 3: Advanced Queries
// ====================================

// 1. Find books in a specific genre sorted by price (ascending)
db.books.find({ genre: "Fiction" }).sort({ price: 1 });


// 2. Find books with either of two genres
db.books.find({ genre: { $in: ["Fiction", "Science Fiction"] } });


// 3. Find books with titles containing a specific keyword (case-insensitive)
db.books.find({ title: { $regex: "Book", $options: "i" } });


// ====================================
//  Task 4: Aggregation Pipelines
// ====================================

// 1. Calculate average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);


// 2. Find the author with the most books
db.books.aggregate([
  { $group: { _id: "$author", bookCount: { $sum: 1 } } },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]);


// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $project: {
      decade: { $concat: [{ $substr: [{ $toString: "$published_year" }, 0, 3] }, "0s"] }
    }
  },
  { $group: { _id: "$decade", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
]);


// ====================================
//  Task 5: Indexing
// ====================================

// 1. Create index on title for faster search
db.books.createIndex({ title: 1 });


// 2. Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });


// 3. Use explain() to show performance improvement
db.books.find({ title: "Book A" }).explain("executionStats");
