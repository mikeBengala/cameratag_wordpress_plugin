<!doctype html>
<html lang="pt">
<head>
    <?php $app_id = "a-73f30cb0-10e6-0136-88fd-0adeb7a592e0";?>
    <meta charset="utf-8">
    <title>Cameratag Miguel Bengala exercicio</title>
    <link rel='stylesheet' href='css/cameratag.css'></link>
    <link rel='stylesheet' href='css/mb_cameratag_style.min.css'></link>
    <script src='https://code.jquery.com/jquery-3.3.1.min.js' type='text/javascript'></script>
    <script src="js/sweetalert.min.js" type="text/javascript"></script>
    <script src='js/cameratag.min.js' type='text/javascript'></script>
    <script src="js/mb_cameratag_script.js" type="text/javascript"></script>
</head>
<body>
<section class="mb_cameratag" style="background-image:url(img/background.jpg);">

    <?php // wrap for max-width --------------------------------------------->?>
    <div class="mb_cameratag_form_wrap">

        <?php // some Description for context ------------------------------->?>
        <div class="mb_videotag_description_wrap">
            <h2 style="text-align:center;">Submete já o teu Video Pitch</h2>
            <div class="mb_cameratag_content">
                <p style="text-align:center;">
                    A submissão deste formulário consiste em dois passos. No primeiro passo agradecemos que escreva as suas informações pessoais nos campos nome e email. No segundo passo deve fazer upload do seu video usando uma das opções disponiveis.
                </p>
            </div>
        </div>
        <?php // end some description for context --------------------------->?>

        <?php // picture frame ---------------------------------------------->?>
        <div class="mb_cameratag_form_frame" style="background-image:url(img/frame_01.png);"></div>
        <?php // end picture frame ------------------------------------------>?>

        <?php // steps wrap ------------------------------------------------->?>
        <div id="mb_cameratag_form" class="mb_cameratag_form">

            <?php // steps stage -------------------------------------------->?>
            <div class="mb_cameratag_stage">

                <?php // the step ------------------------------------------->?>
                <div class="mb_cameratag_stage_slide">
                    <a class="mb_cameratag_select_prompt">Preenche com os teus dados</a>
                    <div class="mb_cameratag_row">
                        <div class="mb_cameratag_input_wrap">
                            <p>
                                <label for="mb_cameratag_name">O teu nome</label>
                                <input type="text" id="mb_cameratag_name" name="mb_cameratag_name">
                            </p>
                        </div>
                        <div class="mb_cameratag_input_wrap">
                            <p>
                                <label for="mb_cameratag_email">O teu email</label>
                                <input type="email" id="mb_cameratag_email" name="mb_cameratag_email">
                            </p>
                        </div>
                    </div>
                    <div class="mb_cameratag_nav">
                        <a class="next_step_button" id="trigger_validate_email">Próximo passo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <?php // end the step --------------------------------------->?>

                <?php // the step ------------------------------------------->?>
                <div class="mb_cameratag_stage_slide">
                    <camera data-app-id='<?=$app_id?>' id='mb_cameratag_myCamera' data-upload-on-select='false'></camera>

                    <?php /*
                    <div class="mb_cameratag_nav">
                        <input id="mb_cameratag_submit" type="submit" value="Submeter">
                    </div>
                    */?>

                </div>
                <?php // end the step --------------------------------------->?>

            </div>
            <?php //end step stage ------------------------------------------>?>

        </div>
        <?php // end the exercise form wrap --------------------------------->?>

        <?php // picture frame ---------------------------------------------->?>
        <div class="mb_cameratag_form_frame" style="background-image:url(img/frame_02.png);"></div>
        <?php // end picture frame ------------------------------------------>?>

    <?php // end wrap for max-width ----------------------------------------->?>

</section>
</body>
</html>
