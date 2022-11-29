const projetos = [{
    imgUrl: '.././imgs/gradient.jpg',
    title: 'Gerador de Gradient',
    btn: 'Ver Projeto'   
}]

const container = document.createElement('div')
const img = document.createElement('img')
const title = document.createElement('span')
const btn = document.createElement('button')

projetos.map((projeto) => {
    img.src = projeto.imgUrl
    title.innerText = projeto.title
    btn.innerText = projeto.btn
    container.append(img, title, btn)
    document.querySelector('.containerProjetos').appendChild(container)
})

