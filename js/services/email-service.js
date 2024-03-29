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
    hendleSentEmail,
    createEmail,
    sortEmail,
    faviriteEmail,
    markRead,
    showFavorite,
    getDeleted

}

const EMAIL_KEY = 'emails';

var emailsDB = [];
var recentlyDeleted = [];

console.log(recentlyDeleted , 'recently deleted')

function getEmailById(emailId) {
    var emailById = query()
    .then(emails => {
        const email = emails.find(email => email.id === emailId);
        return Promise.resolve(email)
    })
    return emailById
}

function dleateEmail(emailId) {
    // console.log('delete in the service', emailId)
console.log(this.email,'this.email')
    const emailIdx = emailsDB.findIndex(email => email.id === emailId)
    const deletedEmail = emailsDB.find(email => email.id === emailId)
    // console.log(deletedEmail , 'deleted')
    // console.log(recentlyDeleted ,'recently deleted in the function' ) //null ???
    recentlyDeleted.push(deletedEmail)
    storageService.store('recently-deleted', recentlyDeleted)
    // console.log(emailIdx)
    emailsDB.splice(emailIdx, 1)
    storageService.store(EMAIL_KEY, emailsDB)
    // console.log(emailsDB)
}

function getDeleted(){
    var deletedEmails = storageService.load('recently-deleted');
    if(!deletedEmails){
        deletedEmails =[]
    }
    recentlyDeleted = deletedEmails
    // console.log('emailsssss',emailsDB)
    return Promise.resolve(recentlyDeleted);
}


function faviriteEmail(emailId) {
    // console.log('faviorite in the service', emailId)
    const email = emailsDB.find(email => email.id === emailId);
    // console.log( email.isFavorite)
    email.isFavorite = !email.isFavorite
    console.log('email(in the service)=', email)
    storageService.store(EMAIL_KEY, emailsDB)

}


function markRead(emailId) {
    console.log('in the service', emailId)
    const email = emailsDB.find(email => email.id === emailId);
    email.isRead = !email.isRead
    console.log('email.isRead', email.isRead)
    storageService.store(EMAIL_KEY, emailsDB)



}

function sortByCreated() {
    gTodos.sort(function (a, b) {
        return b.created - a.created;
    });
}


function sortEmail(emails, sort) {
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
            return dateToNum(b.date) - dateToNum(a.date);
        });
    }

}

function dateToNum(d) {
    var c = d.split('-')
    return Number(c[2] + c[1] + c[0]);
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

function showFavorite() {
    console.log('in the service')
    // console.log('this.emails',this.emails)
    // return this.emails.filter(email =>email.isFavorite === true)
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
            date: '02-05-2019',
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
            date: '02-05-2019',
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
            date: '13-08-1990',
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




// emails.sort(function (a, b) {
//     const x = a.date
//     const s =x.replace('-','')
//     const z = s.replace('-','')
//     const y = z.substr(4,7)
//     // const m = z.substr(2,3)
//     // const d = z.substr(0,1)

//     // console.log(d)

//     const xx = b.date
//     const ss =xx.replace('-','')
//     const zz = ss.replace('-','')
//     const yy = zz.substr(4,7)
//     // const mm = zz.substr(2,3)
//     // const dd = zz.substr(0,1)



//     return  zz-z ;
//     // y-yy && m-mm && d-dd
// });