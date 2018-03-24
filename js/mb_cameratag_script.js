Mb_cameratag = {
    init:function(){
        Mb_cameratag.set_observe_publish_event();
        Mb_cameratag.set_first_step_click_validation();
        Mb_cameratag.set_input_focus_animation();
        Mb_cameratag.set_upload_after_file_select();


        if($("html").attr("lang") == "pt"){
            Mb_cameratag.translations();
        }
    },
    is_mobile:function(){
        var isMobile = false; //initiate as false
        // device detection
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){
            isMobile = true;
        }
        return isMobile;
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
            var user_email = $("#mb_cameratag_email").val(),
                user_name = $("#mb_cameratag_name").val();

            if (user_name == ""){
                user_name = "Not filled";
            }

            if (Mb_cameratag.validateEmail(user_email)) {
                $(".mb_cameratag_stage").css({
                    "transform": "translateX(-50%)",
                    "-ms-transform": "translateX(-50%)",
                    "-webkit-transform": "translateX(-50%)"
                });
                CameraTag.cameras["mb_cameratag_myCamera"].setMetadata({
                    email: user_email,
                    name: user_name
                });
            } else {
                swal("Erro", "Verifica se o campo de email está devidamente preenchido", "error").then(function(){
                    $("#mb_cameratag_email").focus();
                });
            }
        });
    },
    set_observe_publish_event:function(){
        CameraTag.observe("mb_cameratag_myCamera", "published", function(obj){
            var user_email = $("#mb_cameratag_email").val();
            var data = {
                video_url : obj.medias.mp4,
                email : user_email
            };
            console.log(data);
        })
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
    validateEmail:function(email) {
       var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(email);
    },
    set_upload_after_file_select:function(){
       CameraTag.observe("mb_cameratag_myCamera", "uploadFileSelected", function(obj){
           myCamera = CameraTag.cameras["mb_cameratag_myCamera"];

           if(Mb_cameratag.is_mobile()){
               swal("Alerta", "O upload de videos do telemóvel foi desativado. Por favor utilize uma das restantes opções disponiveis. Obrigado", "error");
           }else{
               myCamera.startUpload();
           }
       });


    }
}
var $ = jQuery;
$(function(){
    Mb_cameratag.init();
});
