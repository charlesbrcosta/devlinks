// Verifica o valor no localStorage e aplica/remove a class "light"
function toggleLightMode() {
  const element = document.body

  //Verifica se a class light ja esta aplicada ao elemento
  const isLightMode = element.classList.contains("light")

  // Verifica se não está em modo light, adicione a classe "light" e armazene no localStorage
  if (!isLightMode) {
    element.classList.add("light")
    localStorage.setItem("isLightMode", "true")
  } else { // Remove a classe "light" e do localStorage
    element.classList.remove("light")
    localStorage.removeItem("isLightMode")
  }
}
// verifica o valor no localStorage ao carregar a página
function checkLightModeOnLoad() {
  const isLightMode = localStorage.getItem('isLightMode') === "true"
  if(isLightMode) {
    const element = document.body
    element.classList.add("light")
  }
}
// Chame a função de verificação no carregamento da página
checkLightModeOnLoad()

// function toggleMode(){
//   const html = document.documentElement
//   html.classList.toggle("light")

//    const img = document.querySelector('#profile img')

//    if(html.classList.contains('light')){
//     img.setAttribute('src', './assets/avatar-light.png')
//     img.setAttribute(
//       'alt',
//       'Mike Bryto usando oculos escuro, sorrindo e de camisa preta com fundo de cor gradiente azul com roxo'
//     )
//    }else{
//     img.setAttribute('src', './assets/avatar.png')
//     img.setAttribute(
//       'alt',
//       'Mike Bryto usando oculos, sorrindo e de camisa preta com fundo de cor gradiente azul com roxo'
//     )
//    }
// }