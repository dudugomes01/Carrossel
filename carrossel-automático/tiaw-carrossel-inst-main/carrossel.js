onload = () => {
  //---------- dados fakes ----------
  var imagens = [
    {
      id: 0,
      nomeInst: "Instituição de Caridade",
      categoria: 0,
      imagem:
        "img/home 1.png",
    },

    {
      id: 1,
      nomeInst: "Instituição de Roupas",
      categoria: 1,
      imagem:
        "img/home 2.png",
    },

    {
      id: 2,
      nomeInst: "Instituição de Livros",
      categoria: 0,
      imagem:
        "img/home 5.png",
    },
    
    {
      id: 3,
      nomeInst: "Instituição de Brinquedos",
      categoria: 3,
      imagem:
        "img/home 6.png",
    },
    /*{
       id: 3,
      nomeInst: "Instituição de Brinquedos",
      categoria: 3,
      imagem:
        "img/home 7.png",
    },*/
  ];
  //---------------------------------

  //------- guardando os dados fakes no localStorage -------
  localStorage.setItem("fakes", JSON.stringify(imagens));

  //------- apresentar as imagens do localStorage -------
  var divImagens = document.getElementById("carrossel_img"); //pega a div que será colocada o código das imagens
  var olIndicadores = document.getElementById("indicadores"); //pega a div que será colocada o código dos indicadores

  var imgs = JSON.parse(localStorage.getItem("fakes")); //pega, em forma de objeto, o JSON salvo no localStorage

  let colocarIMG = ""; //variável na qual o código da imagem será inserido
  let colocarIndicador = ""; //variável na qual o código do indicador será inserido

  //for para inserir todas as imagens salvas no localStorage
  for (let i = 0; i < imgs.length; i++) {
    let imgInfo = imgs[i];

    if (i == 0) {
      //--- adicionando a div com a ativação do carrossel ---
      // += para ir adicionando de acordo com a quantidade de itens no localStorage
      colocarIMG += `<div class="carousel-item active" data-bs-interval="400">`;

      //--- adicionando o indicador no carrossel ---
      colocarIndicador += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" class="active" ></li>`;
    } else {
      //--- adicionando a div do carrossel ---
      colocarIMG += `<div class="carousel-item" data-bs-interval="400">`;

      //--- adicionando o indicador no carrossel ---
      colocarIndicador += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" ></li>`;
    }

    carrossel_img.onclick = () => {
      if (imgInfo.categoria == 0) {
        imgInfo.categoria = "Livros";
      } else if (imgInfo.categoria == 1) {
        imgInfo.categoria = "Roupas";
      } else if (imgInfo.categoria == 3) {
        imgInfo.categoria = "Brinquedos";
      }

      alert(
        `ID:  ${imgInfo.id} \nNone:  ${imgInfo.nomeInst} \nCategoria:  ${imgInfo.categoria}`
      );
    };

    colocarIMG += `<img class="img_car" src="${imgInfo.imagem}" alt="ID ${imgInfo.id}" width="100%" height="450">
      </div>`;
  }

  divImagens.innerHTML = colocarIMG; //adicionar o código novo no HTML
  olIndicadores.innerHTML = colocarIndicador; //adicionar o código novo no HTML

  //------- alerta para quando os botões ilustrativos forem acionados -------
  add.onclick = () => {
    alerta();
  };

  excluir.onclick = () => {
    alerta();
  };

  alterar.onclick = () => {
    alerta();
  };

  //------- função de alerta -------
  function alerta() {
    alert(
      "Função não disponível! Botão ilustrativo!\nAguarde a sprint 4. Obrigada!"
    );
  }
};
