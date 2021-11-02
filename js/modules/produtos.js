export default function initAbaProdutos() {
  const produtos = document.getElementById('produtos');
  if (produtos != null) {
    const botoes = document.querySelectorAll('.btn-padrao');
    const abas = document.querySelectorAll('.tipo-bike > div');
    abas[0].classList.add('aba-ativa');
    botoes[0].classList.add('botao-ativo');
    
    function tabAtiva(index) {
      abas.forEach(item => {
        item.classList.remove('aba-ativa');
      });
      botoes.forEach(item => {
        item.classList.remove('botao-ativo');
      });
      abas[index].classList.add('aba-ativa');
      botoes[index].classList.add('botao-ativo');
    }
    
    botoes.forEach((itemAba, index) => {
      itemAba.addEventListener('click', () => {
        tabAtiva(index);
      });
    });
    
    // Passeio Mini Galeria
    const iconesPasseio = document.querySelectorAll('.icones-passeio > div');
    const imgsPasseio = document.querySelectorAll('.imagens-passeio > div');
    imgsPasseio[0].classList.add('img-ativa');
    iconesPasseio[0].classList.add('icone-ativo');
    
    function imgPasseioAtiva(index) {
      imgsPasseio.forEach(imagem => {
        imagem.classList.remove('img-ativa');
      });
      iconesPasseio.forEach(icone => {
        icone.classList.remove('icone-ativo');
      });
      imgsPasseio[index].classList.add('img-ativa')
      iconesPasseio[index].classList.add('icone-ativo');
    }

    iconesPasseio.forEach((item, index) => {
      item.addEventListener('mouseover', () => {
        imgPasseioAtiva(index);
      });
    });
    
    // Esporte Mini Galeria
    const iconesEsporte = document.querySelectorAll('.icones-esporte > div');
    const imgsEsporte = document.querySelectorAll('.imagens-esporte > div');
    imgsEsporte[0].classList.add('img-ativa');
    iconesEsporte[0].classList.add('icone-ativo');
    
    function imgEsporteAtiva(index) {
      imgsEsporte.forEach(imagem => {
        imagem.classList.remove('img-ativa');
      });
      iconesEsporte.forEach(icone => {
        icone.classList.remove('icone-ativo');
      });
      imgsEsporte[index].classList.add('img-ativa');
      iconesEsporte[index].classList.add('icone-ativo');
    }
    
    iconesEsporte.forEach((item, index) => {
      item.addEventListener('mouseover', () => {
        imgEsporteAtiva(index);
      });
    });
    
    // Retro Mini Galeria
    const iconesRetro = document.querySelectorAll('.icones-retro > div');
    const imgsRetro = document.querySelectorAll('.imagens-retro > div');
    
    imgsRetro[0].classList.add('img-ativa');
    iconesRetro[0].classList.add('icone-ativo');
    
    function imgRetroAtiva(index) {
      imgsRetro.forEach(imagem => {
        imagem.classList.remove('img-ativa');
      });
      iconesRetro.forEach(icone => {
        icone.classList.remove('icone-ativo');
      });
      imgsRetro[index].classList.add('img-ativa');
      iconesRetro[index].classList.add('icone-ativo');
    }
    
    iconesRetro.forEach((item, index) => {
      item.addEventListener('mouseover', () => {
        imgRetroAtiva(index);
      });
    });
  }
}

