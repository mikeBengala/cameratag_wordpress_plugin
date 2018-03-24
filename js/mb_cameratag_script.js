Mb_cameratag = {
    init:function(){
        Mb_cameratag.set_submit_event();
        Mb_cameratag.set_observe_events();
        Mb_cameratag.disable_mobile_upload();
        Mb_cameratag.set_first_step_click_validation();
        Mb_cameratag.set_input_focus_animation();
        if($("html").attr("lang") == "pt"){
            Mb_cameratag.translations();
        }
    },
    set_input_focus_animation:function(){
        $(".mb_cameratag_input_wrap p").focusin(function() {
            $(this).addClass("selected");
        });
        $(".mb_cameratag_input_wrap p").focusout(function() {
            var this_input_value = $(this).find("input").val();
            if(this_input_value == ""){
                $(this).removeClass("selected");
            }
        });
    },
    set_first_step_click_validation:function(){
        $("#trigger_validate_email").click(function(){
            var user_email = $("#mb_cameratag_email").val();
            if (Mb_cameratag.validateEmail(user_email)) {
                $(".mb_cameratag_stage").css({
                    "transform": "translateX(-50%)",
                    "-ms-transform": "translateX(-50%)",
                    "-webkit-transform": "translateX(-50%)"
                });
            } else {
                swal("Erro", "Verifica se o campo de email está devidamente preenchido", "error").then(function(){
                    $("#mb_cameratag_email").focus();
                });

            }
        });
    },
    set_observe_events:function(){
        CameraTag.observe("mb_cameratag_myCamera", "published", function(obj){
            var data = {
                video_url : obj.medias.mp4,
                email : $("#mb_cameratag_email").val()
            };
            console.log(data);
        })
    },
    disable_mobile_upload:function(){
        $("#mb_cameratag_form").on("click", ".câmaratag_sms_link", function(e){
            e.stopPropagation();
        });
    },
    translations:function(){
        CT_i18n = []
        CT_i18n[0] = CT_i18n[0] || "To record this video using your mobile phone please visit <<url>> in your mobile browser"
        CT_i18n[1] = CT_i18n[1] || "Your mobile device does not support video uploading"
        CT_i18n[2] = CT_i18n[2] || "Please install Flash Player 11 or higher: https://get.adobe.com/flashplayer"
        CT_i18n[3] = CT_i18n[3] || "Unable to embed video recorder. Please make sure you have Flash Player 11 or higher installed"
        CT_i18n[4] = CT_i18n[4] || "Escolhe um dos seguintes métodos para submeter o teu video pitch";
        CT_i18n[5] = CT_i18n[5] || "Gravar com camara";
        CT_i18n[6] = CT_i18n[6] || "Upload de ficheiro";
        CT_i18n[7] = CT_i18n[7] || "Gravar com telefone";
        CT_i18n [8] = CT_i18n [8] || "acenar para a camara"
        CT_i18n [9] = CT_i18n [9] || "gravação em"
        CT_i18n [10] = CT_i18n [10] || "upload ..."
        CT_i18n [11] = CT_i18n [11] || "clique para parar de gravar"
        CT_i18n [12] = CT_i18n [12] || "clique para pular a revisão"
        CT_i18n [13] = CT_i18n [13] || "Aceitar"
        CT_i18n [14] = CT_i18n [14] || "Regravar"
        CT_i18n [15] = CT_i18n [15] || "Revisar gravação"
        CT_i18n [16] = CT_i18n [16] || "por favor espere enquanto nós empurramos pixels"
        CT_i18n [17] = CT_i18n [17] || "Obrigado"
        CT_i18n [18] = CT_i18n [18] || "Insira seu <b> número de telefone celular </ b> abaixo e enviaremos um link para você para a gravação de celular"
        CT_i18n [19] = CT_i18n [19] || "Enviar link para celular"
        CT_i18n [20] = CT_i18n [20] || "cancelar"
        CT_i18n [21] = CT_i18n [21] || "Verifique o seu telefone para obter instruções de gravação em dispositivos móveis"
        CT_i18n [22] = CT_i18n [22] || "ou aponte seu navegador para celular"
        CT_i18n [23] = CT_i18n [23] || "drop file to upload"
        CT_i18n [24] = CT_i18n [24] || "enviando sua mensagem"
        CT_i18n [25] = CT_i18n [25] || "Por favor, digite seu número de telefone!"
        CT_i18n [26] = CT_i18n [26] || "que não parece ser um número de telefone válido"
        CT_i18n [27] = CT_i18n [27] || "Não é possível enviar SMS."
        CT_i18n [28] = CT_i18n [28] || "Nenhuma camara detectada"
        CT_i18n [29] = CT_i18n [29] || "Nenhum microfone detectado"
        CT_i18n [30] = CT_i18n [30] || "Acesso à camara negado"
        CT_i18n [31] = CT_i18n [31] || "Conexão perdida com o servidor"
        CT_i18n [32] = CT_i18n [32] || "Falha na reprodução"
        CT_i18n [33] = CT_i18n [33] || "Incapaz de conectar"
        CT_i18n [34] = CT_i18n [34] || "Não é possível publicar sua gravação."
        CT_i18n [35] = CT_i18n [35] || "Não é possível enviar dados de formulário."
        CT_i18n [36] = CT_i18n [36] || "carregando seu vídeo"
        CT_i18n [37] = CT_i18n [37] || "reprodução de vídeo em buffer"
        CT_i18n [38] = CT_i18n [38] || "publicando"
        CT_i18n [39] = CT_i18n [39] || "conectando ..."
        CT_i18n [40] = CT_i18n [40] || "negociando firewall ..."
        CT_i18n [41] = CT_i18n [41] || "Oh não! Parece que o seu navegador parou o gravador"
        CT_i18n [42] = CT_i18n [42] || "Isso não parece ser um arquivo de vídeo válido. Continuar assim mesmo?"
        CT_i18n [43] = CT_i18n [43] || "Gravar ou enviar um vídeo"
        CT_i18n [44] = CT_i18n [44] || "Toque para começar"
        CT_i18n [45] = CT_i18n [45] || "Escolha um método para enviar sua foto"
        CT_i18n [46] = CT_i18n [46] || "Captura da Webcam"
        CT_i18n [47] = CT_i18n [47] || "Enviar um arquivo"
        CT_i18n [48] = CT_i18n [48] || "Escolha qual camara e microfone você gostaria de usar"
        CT_i18n [49] = CT_i18n [49] || "Toque aqui para tirar ou carregar uma foto"
        CT_i18n [50] = CT_i18n [50] || "Ajustes de Imagem / Filtros"
        CT_i18n [51] = CT_i18n [51] || "Pan & Zoom"
        CT_i18n [52] = CT_i18n [52] || "Fumaça"
        CT_i18n [53] = CT_i18n [53] || "Murica"
        CT_i18n [54] = CT_i18n [54] || "Brilho contraste"
        CT_i18n [55] = CT_i18n [55] || "Visão noturna"
        CT_i18n [56] = CT_i18n [56] || "Posterize"
        CT_i18n [57] = CT_i18n [57] || "Zinco"
        CT_i18n [58] = CT_i18n [58] || "Baga"
        CT_i18n [59] = CT_i18n [59] || "Camara espiã"
        CT_i18n [60] = CT_i18n [60] || "Revista"
        CT_i18n [61] = CT_i18n [61] || "Cross Hatch"
        CT_i18n [62] = CT_i18n [62] || "Flare"
        CT_i18n [63] = CT_i18n [63] || "Matiz / Saturação"
        CT_i18n [64] = CT_i18n [64] || "Vibração"
        CT_i18n [65] = CT_i18n [65] || "Denoise"
        CT_i18n [66] = CT_i18n [66] || "Unsharp Mask"
        CT_i18n [67] = CT_i18n [67] || "Barulho"
        CT_i18n [68] = CT_i18n [68] || "Sépia"
        CT_i18n [69] = CT_i18n [69] || "Vinheta"
        CT_i18n [70] = CT_i18n [70] || "Zoom Blur"
        CT_i18n [71] = CT_i18n [71] || "Triangle Blur"
        CT_i18n [72] = CT_i18n [72] || "Mudança de inclinação"
        CT_i18n [73] = CT_i18n [73] || "Lente fora de foco"
        CT_i18n [74] = CT_i18n [74] || "Redemoinho"
        CT_i18n [75] = CT_i18n [75] || "Bulge / Pinch"
        CT_i18n [76] = CT_i18n [76] || "Tinta"
        CT_i18n [77] = CT_i18n [77] || "Edge Work"
        CT_i18n [78] = CT_i18n [78] || "Pixelate hexagonal"
        CT_i18n [79] = CT_i18n [79] || "Dot Screen"
        CT_i18n [80] = CT_i18n [80] || "Cor meio-tom"
        CT_i18n [82] = CT_i18n [82] || "Ângulo"
        CT_i18n [83] = CT_i18n [83] || "Tamanho"
        CT_i18n [84] = CT_i18n [84] || "Escala"
        CT_i18n [85] = CT_i18n [85] || "Raio"
        CT_i18n [86] = CT_i18n [86] || "Força"
        CT_i18n [87] = CT_i18n [87] || "Brilho"
        CT_i18n [88] = CT_i18n [88] || "Blur Radius"
        CT_i18n [89] = CT_i18n [89] || "Raio de gradiente"
        CT_i18n [90] = CT_i18n [90] || "Matiz"
        CT_i18n [91] = CT_i18n [91] || "Saturação"
        CT_i18n [92] = CT_i18n [92] || "Movimento"
        CT_i18n [93] = CT_i18n [93] || "Número de cores"
        CT_i18n [94] = CT_i18n [94] || "Gama"
        CT_i18n [95] = CT_i18n [95] || "Cor"
        CT_i18n [96] = CT_i18n [96] || "Luminosidade"
        CT_i18n [97] = CT_i18n [97] || "Contraste"
        CT_i18n [98] = CT_i18n [98] || "Parando"
        CT_i18n [99] = CT_i18n [99] || "Não é possível ativar a camara ou o microfone"
    },
    set_submit_event:function(){
        $("#mb_cameratag_submit").click(function(){
           var user_email = $("#mb_cameratag_email").val();
           if (Mb_cameratag.validateEmail(user_email)) {
               CameraTag.cameras["mb_cameratag_mycamera"].setMetadata({
                   email: user_email
               });
           } else {
               swal("Erro", "Verifica se o campo de email está devidamente preenchido", "error");
           }
        })
    },
    validateEmail:function(email) {
       var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(email);
    }
}
var $ = jQuery;
$(function(){
    Mb_cameratag.init();
});
