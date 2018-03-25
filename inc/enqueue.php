<?php
function mb_cameratag_enqueue() {
    // Register scripts-------------------------------------------------------->
    wp_enqueue_script( 'sweetalert', plugins_url( '../js/sweetalert.min.js', __FILE__ ), array( 'jquery')  );
    wp_enqueue_script( 'cameratag', plugins_url( '../js/cameratag.min.js', __FILE__ ), array( 'jquery', 'sweetalert')  );
    wp_enqueue_script( 'mb_cameratag_script', plugins_url( '../js/mb_cameratag_script.js', __FILE__ ), array( 'jquery', 'sweetalert', 'cameratag')  );
    // End Register scripts --------------------------------------------------->

    // Register styles -------------------------------------------------------->
    wp_enqueue_style( 'cameratag_style', plugins_url( '../css/cameratag.css', __FILE__ ) );
    wp_enqueue_style( 'mb_cameratag_style', plugins_url( '../css/mb_cameratag_style.min.css', __FILE__ ) );
    // End Register Styles ---------------------------------------------------->
}
add_action('wp_enqueue_scripts', 'mb_cameratag_enqueue');
?>
