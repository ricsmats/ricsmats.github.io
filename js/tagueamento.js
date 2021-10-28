// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
const menuEmail = document.getElementsByClassName('menu-lista-link menu-lista-contato');
for (var i = 0; i < menuEmail.length; i++) {
    (function (index) {
        menuEmail[index].addEventListener("click", function () {
            ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
        })
    })(i);
};

document.getElementById('aceito').addEventListener('input', function (e) {
    if (e.target.checked) {
        ga('send', 'event', 'contato', 'aceito', 'preencheu')
    }
})
