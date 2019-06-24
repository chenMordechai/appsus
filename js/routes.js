
import homepageCmp from './pages/homepage.cmp.js';
import bookApp from './pages/book-app.cmp.js'
import bookDetails from './pages/book-details.cmp.js'
// import bookAdd from './pages/Book-add.cmp/js'
import emailApp from './pages/email-app.cmp.js';
import emailDetails from './pages/email-details.cmp.js';
import noteCmp from './pages/note.cmp.js';


export default [
    { path: '/', component: homepageCmp },
    { path: '/note', component: noteCmp },
    { path: '/book', component: bookApp },
    { path: '/book/:bookId', component: bookDetails },
    // { path: '/book/bookAdd', component: bookAdd },
    { path: '/email', component: emailApp},
    { path: '/email/:emailId', component: emailDetails },
]
