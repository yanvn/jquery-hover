<?php
/**
 * Plugin Name: Jquery Hover
 * Plugin URI:  https://wordpress.org/plugins/jqueryhover/
 * Text Domain: jqueryhover
 * Domain Path: /languages
 * Description: Visually compresses the administrative meta-boxes so that more admin page content can be initially seen. The plugin that lets you hide 'unnecessary' items from the WordPress administration menu, for all roles of your install. You can also hide post meta controls on the edit-area to simplify the interface. It is possible to simplify the admin in different for all roles.
 * Author:      Anh Vo
 * Author URI:  http://walloos.com/
 * Version:     1.0
 * License:     GPLv3+
 *
 * @package WordPress
 * @author  Anh Vo <yan@walloos.com>
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 * @version 2017-05-15
 */

 add_action('wp_head', 'add_jquery_hover');

 function add_jquery_hover() {
    if (is_front_page()) {
        wp_enqueue_script(
         '_mw_adminimize_remove_footer',
         WP_PLUGIN_URL . '/jquery-hover/js/main.js',
         array( 'jquery' )
        );
    }
 }
