<?php $app_id = get_option('mb_camaccess_token');?>
<?php if(!isset($app_id) || $app_id == false || $app_id == ""){?>

    <?php if(current_user_can('administrator')){?>
        <h2><?php _e("CameraTag Não configurado")?></h2>
        <p><a href="<?= admin_url( 'admin.php?page=cameratag_wordpress_plugin%2Finc%2Foptions_page.php' );?>"><?php _e("Clique Aqui")?></a> <?php _e("para inserir o id da sua app cameratag.")?></p>
    <?php }?>

<?php }else{?>

    <?php // steps wrap ------------------------------------------------->?>
    <div id="mb_cameratag_form" class="mb_cameratag_form">

        <?php // steps stage -------------------------------------------->?>
        <div class="mb_cameratag_stage">

            <?php // the step ------------------------------------------->?>
            <div class="mb_cameratag_stage_slide">
                <div class="mb_cameratag_inner_slide">
                    <a class="mb_cameratag_select_prompt"><?php _e("Preenche com os teus dados")?></a>
                    <div class="mb_cameratag_row">
                        <div class="mb_cameratag_input_wrap">
                            <p>
                                <label for="mb_cameratag_name"><?php _e("O teu nome")?></label>
                                <input type="text" id="mb_cameratag_name" name="mb_cameratag_name">
                            </p>
                        </div>
                        <div class="mb_cameratag_input_wrap">
                            <p>
                                <label for="mb_cameratag_email"><?php _e("O teu email")?></label>
                                <input type="email" id="mb_cameratag_email" name="mb_cameratag_email">
                            </p>
                        </div>
                    </div>
                    <div class="mb_cameratag_nav">
                        <a class="next_step_button" id="trigger_validate_email"><?php _e("Próximo passo")?> <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
            <?php // end the step --------------------------------------->?>

            <?php // the step ------------------------------------------->?>
            <div class="mb_cameratag_stage_slide">
                <div class="mb_cameratag_inner_slide">
                    <camera data-app-id='<?=$app_id?>' id='mb_cameratag_myCamera' data-upload-on-select='false'></camera>
                </div>
            </div>
            <?php // end the step --------------------------------------->?>

        </div>
        <?php //end step stage ------------------------------------------>?>

    </div>
    <?php // end the exercise form wrap --------------------------------->?>

<?php }?>
