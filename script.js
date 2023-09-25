function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

   const img = document.querySelector('#profile img')

   if(html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute(
      'alt',
      'Mike Bryto usando oculos escuro, sorrindo e de camisa preta com fundo de cor gradiente azul com roxo'
    )
   }else{
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute(
      'alt',
      'Mike Bryto usando oculos, sorrindo e de camisa preta com fundo de cor gradiente azul com roxo'
    )
   }
}