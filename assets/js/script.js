console.log('starting by DuDuX');
//alert('site em desenvolvimento');

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

function discordview() {
    swal({
        title: "Discord Abaixo!",
        text: "» dudu.wside «",
        icon: "warning",
    });
}

function embreve() {
    swal({
      title: "Aviso!",
      text: "Sistema Em Desenvolvimento...",
      icon: "info", /* "warning", "error", "success" e "info" */
    });
}

function emdev() {
    swal({
        title: "Aviso-!",
        text: "Em desenvolvimento...",
        icon: "warning",
    });
}

function htmlshow() {
    swal({
      title: "HTML5",
      text: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo.",
      icon: "warning", /* "warning", "error", "success" e "info" */
    });
}
function cssshow() {
    swal({
      title: "CSS3",
      text: "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos.",
      icon: "warning", /* "warning", "error", "success" e "info" */
    });
}
function jsshow() {
    swal({
      title: "JavaScript",
      text: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
      icon: "warning", /* "warning", "error", "success" e "info" */
    });
}
function designshow() {
    swal({
      title: "Design",
      text: "Ser designer, é ser um artista, onde você desconta seus sentimentos e ideias, em suas artes!",
      icon: "warning", /* "warning", "error", "success" e "info" */
    });
}