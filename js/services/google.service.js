import {storageService} from './storage.service.js'



export default {
    getBookFromGoogle
    
}


function getBookFromGoogle(searchStr){
    var prmRes = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchStr}`)
var prmBooks= prmRes.then(res=>{
    // console.log('google-books:', res.data.items)
    // storageService.store('google-books', res.data.items)
    return res.data.items
})
return prmBooks
}

