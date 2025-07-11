[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19866040&assignment_repo_type=AssignmentRepo)

# MongoDB Books Collection Assignment

This assignment focuses on practicing MongoDB fundamentals using a sample **Books** collection. You will insert documents, perform CRUD operations, write advanced queries, create aggregation pipelines, and optimize queries using indexing.

---

## 📋 Assignment Overview

You will:
1. Set up a MongoDB database and collection
2. Insert sample book documents
3. Run basic and advanced queries with filtering, sorting, and projection
4. Create aggregation pipelines for data analysis
5. Implement indexes to improve query performance

---

## 📂 Files Included

| File Name       | Description                                           |
|-----------------|-------------------------------------------------------|
| `books_queries.js` | MongoDB script containing all queries and tasks      |
| `README.md`       | Instructions on how to run the MongoDB script         |

---

## ✅ Getting Started

1. Accept the GitHub Classroom assignment invitation.
2. Clone your personal repository.
3. Install MongoDB locally **OR** create a free MongoDB Atlas account.
4. Make sure **Node.js** and **mongosh** are installed (or use MongoDB Compass).
5. Open the `books_queries.js` file and run the queries as shown below.

---

## 🚀 How to Run the Queries

### Option 1: MongoDB Compass Playground *(Recommended for beginners)*
1. Open **MongoDB Compass**.
2. Click **Playgrounds** → **New Playground**.
3. Paste the entire `books_queries.js` script.
4. Connect to your MongoDB database.
5. Click **Run** to execute.

---

### Option 2: VS Code (with MongoDB Extension)
1. Install the **MongoDB for VS Code** extension.
2. Connect to your MongoDB server.
3. Open `books_queries.js` in VS Code.
4. Highlight a query or section.
5. Run the query using `MongoDB: Run Selected Lines` from Command Palette (`Ctrl+Shift+P`).

---

### Option 3: MongoDB Shell (mongosh)
1. Open terminal and run:
```bash
mongosh "mongodb://localhost:27017"
Switch to your database:

use plp_bookstore
Paste queries from books_queries.js into the shell and execute.

