
<?php
// create custom plugin settings menu
add_action('admin_menu', 'mb_cameratagcreate_menu');
function mb_cameratagcreate_menu() {
	//create new top-level menu
	add_menu_page('Cameratag', 'Cameratag', 'administrator', __FILE__, 'mb_cameratagsettings_page' , 'dashicons-video-alt2' );
	//call register settings function
	add_action( 'admin_init', 'register_mb_cameratagsettings' );
}
function register_mb_cameratagsettings() {
	//register our settings
	register_setting( 'mb-cameratagsettings-group', 'mb_camaccess_token' );
}
function mb_cameratagsettings_page() {
?>
<div class="wrap">
<h1>Cameratag Options</h1>

<form method="post" action="options.php">
    <?php settings_fields( 'mb-cameratagsettings-group' ); ?>
    <?php do_settings_sections( 'mb-cameratagsettings-group' ); ?>
    <table class="form-table">
        <tr valign="top">
        <th scope="row">Cameratag app id <br /><small> <a href="https://cameratag.com/apps" target="_blank">Get it here</a></small></th>
        <td><input type="text" name="mb_camaccess_token" value="<?php echo esc_attr( get_option('mb_camaccess_token') ); ?>" /></td>
        </tr>
    </table>

    <?php submit_button(); ?>

</form>
</div>
<?php } ?>
