# 📚 Library Management API (Built with express.js)

## 🚀 Getting Started

### 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone
   ```
2. Install dependencies

   ## npm install

3. Run the app in developement mode:

## npm run start:dev

📄 All available scripts can be found in the scripts section of the package.json file.

Books Section

=> [GET] /api/books -> Get all books
=> [POST] /api/books -> Create a new book
Body:{title: string,author: string,genre: Genre,isbn: string,description: string,copies: number,available: boolean}

⚠️ While creating a book, all fields are required.

=> [GET] /api/books/:id -> Get single book
=> [PUT] /api/books/:id -Update a books
Body:{title: string,author: string,genre: Genre,isbn: string,description: string,copies: number,available: boolean}

✅ While updating, all fields are optional.

Borrow Section

=> [GET] /api/borrow -> Get all borrows list
=> [POST] /api/borros -> Create a new borrow
Body : {book: ObjectId,quantity: number,dueDate: Date}

⚠️ While creating a book, all fields are required.

🛠 Technologies Used

## Node.js

## Express.js

## TypeScript

## MongoDB / Mongoose

📌 Notes
Make sure MongoDB is running if you're using a database.
Make sure you have added .env file in your code.
PORT="Must be provide a port number"
DB_PASSWORD="Your mongodb password"
DB_USER="Your mongodb database username"

📬 Contact
If you face any issues or want to contribute, feel free to open an issue or a pull request.

© 2025 Library Management by Md.Abdullah al sadid
