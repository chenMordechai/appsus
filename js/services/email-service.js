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
    query

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
    // console.log('chen',booksDB)
    return Promise.resolve(emailsDB);
}



function generateEmails() {

    return [{
            id: '14geh5',
            title: 'title',
            txt: 'txt',
            from: 'from',
            date: 'date',
            isRead: true,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'title',
            txt: 'txt',
            from: 'from',
            date: utilService.makeDate(),
            isRead: true,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'title',
            txt: 'txt',
            from: 'from',
            date: utilService.makeDate(),
            isRead: true,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'title',
            txt: 'txt',
            from: 'from',
            date: utilService.makeDate(),
            isRead: true,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'title',
            txt: 'txt',
            from: 'from',
            date: utilService.makeDate(),
            isRead: false,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'title',
            txt: 'txt',
            from: 'from',
            date: utilService.makeDate(),
            isRead: false,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'title',
            txt: 'txt',
            from: 'from',
            date: utilService.makeDate(),
            isRead: false,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'title',
            txt: 'txt',
            from: 'from',
            date: utilService.makeDate(),
            isRead: false,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'title',
            txt: 'txt',
            from: 'from',
            date: utilService.makeDate(),
            isRead: false,
            isFavorite: false,
            isTrash: false
        },
        {
            id: utilService.makeId(),
            title: 'title',
            txt: 'txt',
            from: 'from',
            date: utilService.makeDate(),
            isRead: false,
            isFavorite: false,
            isTrash: false
        }
    ]
}