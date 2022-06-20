const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const prod_1 = $('.prod_1') ?  $('.prod_1') : ''
const prod_2 = $('.prod_2') ?  $('.prod_2') : ''
const prod_3 = $('.prod_3') ?  $('.prod_3') : ''
const prods_1 = $('.prod-1')
const prods_2 = $('.prod-2')
const prods_3 = $('.prod-3')
const buys = $$('.ctroller button')

const btnBuy = $$('.card button')

function changeContent(prod, prods) {
    $('.activeBtn').classList.remove('activeBtn')
    $('.active').classList.remove('active')
    prod.classList.add('activeBtn')
    prods.classList.add('active')
}
function changeHdColor(color, textColor) {
    $('header').style.backgroundColor = color
}
const app = {

    handleEvent: () => {
        // click buy 
        buys.forEach(element => {
            element.onclick = () => {
                alert('Hết Hàng !')
            }
        });
        
        // 
        prod_1.onclick = () => {
            changeContent(prod_1, prods_1)
            changeHdColor('#ccdbeb')
        }
        
        prod_2.onclick = () => {
            changeContent(prod_2, prods_2)
            changeHdColor('#fff')
        }
        
        prod_3.onclick = () => {
            changeContent(prod_3, prods_3)
            changeHdColor('#ccc', '#fff')
        }
        
    },
    start: () => {
        app.handleEvent()
    },
}
app.start()

  
