
export default {
    query
}

function query() {
    console.log('notes', notes)
    return Promise.resolve(notes)
}

let notes = [
    {
        id: 'kfjkf',
        type: 'txt',
        info: {
            label: 'i am label of txt',
            opts: ['a', 'b', 'c']

        }
    },
    {
        id: 'mklrf',
        type: 'imag',
        info: {
            label: 'i am label of txt',
            opts: ['a', 'b', 'c']

        }
    },
    {
        id: 'jfyeu',
        type: 'todos',
        info: {
            label: 'i am label of txt',
            opts: ['a', 'b', 'c']

        }
    }
]

