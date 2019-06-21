import {
    storageService
} from './storage.service.js'
import {
    utilService
} from './util.service.js'

export const emailService = {
    getEmailById,
    dleateEmail,
    generateEmails,
    query,
<<<<<<< HEAD
    hendleSentEmail,
    createEmail,
=======
    sortEmail
>>>>>>> 34bfa4058709f3653bd393d59896609909bc3551

}

const EMAIL_KEY = 'emails';

var emailsDB = [];



function getEmailById(emailId) {
    var emailById = query()
        .then(emails => {
            const email = emails.find(email => email.id === emailId);
            return Promise.resolve(email)
        })
    return emailById
}

function dleateEmail(emailId) {
    console.log('delete in the service', emailId)
    const emailIdx = emailsDB.findIndex(email => email.id === emailId)
    console.log(emailIdx)
    emailsDB.splice(emailIdx, 1)
    storageService.store(EMAIL_KEY, emailsDB)
}

function sortByCreated() {
    gTodos.sort(function (a, b) {
        return b.created - a.created;
    });
}


function sortEmail(emails,sort) {
    if (sort === 'Title') {
        console.log('in service title')
        emails.sort(function (a, b) {
            var nameA = a.title.toUpperCase();
            var nameB = b.title.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
    } else {
        console.log('in service title/all')
        emails.sort(function (a, b) {
            return b.data - a.data;
        });
    }

}


//   function saveReview(bookId, bookReview) {
//     const book = booksDB.find(book => book.id === bookId)
//     book.reviews.unshift(bookReview)
//     console.log('booooooook', book)
//     storageService.store(BOOKS_KEY, booksDB)

//   }

function query() {
    var emails = storageService.load(EMAIL_KEY);
    if (!emails) {
        emails = generateEmails();
        storageService.store(EMAIL_KEY, emails)
    }
    emailsDB = emails
    // console.log('emailsssss',emailsDB)
    return Promise.resolve(emailsDB);
}

function hendleSentEmail(title, from, txt) {
    const newEmail = createEmail(title, from, txt)
    console.log('the newEmail is: ', newEmail)
    //     const book = booksDB.find(book => book.id === bookId)
    emailsDB.unshift(newEmail)
    console.log('newEmail', newEmail)
    console.log('i have one more email?', emailsDB)
    storageService.store(EMAIL_KEY, emailsDB)
    
    
    }


    function createEmail(title = 'My dear friend', from = 'anonymos', txt = 'hello friend') {
        return {
            id: utilService.makeId(),
            title: title,
            txt: txt,
            from: from,
            date: utilService.makeDate(),
            isRead: false,
            isFavorite: false,
            isTrash: false

        }

    }


  


function generateEmails() {

    return [{
            id: utilService.makeId(),
            title: 'title',
            txt: utilService.makeLorem(100),
            from: 'from',
            date: utilService.makeDate(),
            isRead: true,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'title',
            txt: utilService.makeLorem(200),
            from: 'from',
            date: utilService.makeDate(),
            isRead: true,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'ferfesf',
            txt: utilService.makeLorem(150),
            from: 'from',
            date: utilService.makeDate(),
            isRead: true,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'judjdjdjdididid',
            txt: utilService.makeLorem(50),
            from: 'from',
            date: utilService.makeDate(),
            isRead: true,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'title',
            txt: utilService.makeLorem(67),
            from: 'from',
            date: utilService.makeDate(),
            isRead: false,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'title',
            txt: utilService.makeLorem(270),
            from: 'from',
            date: utilService.makeDate(),
            isRead: false,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'title',
            txt: utilService.makeLorem(400),
            from: 'from',
            date: utilService.makeDate(),
            isRead: false,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'title',
            txt: utilService.makeLorem(445),
            from: 'from',
            date: utilService.makeDate(),
            isRead: false,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'title',
            txt: utilService.makeLorem(500),
            from: 'from',
            date: utilService.makeDate(),
            isRead: false,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'title',
            txt: utilService.makeLorem(340),
            from: 'from',
            date: utilService.makeDate(),
            isRead: false,
            isFavorite: false,
            isTrash: false
        }
    ]
}