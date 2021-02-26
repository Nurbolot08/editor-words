let words = document.getElementById('words')
let input = document.getElementById('input')
let output = document.getElementById('output')
let btn = document.getElementById('btn')

//
// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     let result = input.value.split(' ').map(el => {
//         if (words.value.split(' ').includes(el)) {
//             return '***'
//         }
//         return el
//     }).join(' ')
//     output.value = result
// })

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let text = input.value
    words.value.split(' ').forEach(el => {
        let regexp = new RegExp(el, 'gi')
        text = text.replace(regexp,'****')
    })
    output.value = text
})




// let str = 'my name is name for name'
// str = str.replace(/name/g,'ivan')
// console.log(str)

//console.log(['света','наташа','марина'].includes('наташа'))
// console.log('s'.match(/[a-z]/i))






















