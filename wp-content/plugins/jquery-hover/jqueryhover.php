<?php
/**
 * Plugin Name: Jquery Hover
 * Plugin URI:  http://walloos.com
 * Text Domain: jqueryhover
 * Domain Path: /languages
 * Description: Giúp tạo các hiệu ứng ô vuông khi rê chuột lên sản phẩm, để hoạt động cần có element với ID="msb-products"
 * Author:      Anh Vo
 * Author URI:  http://walloos.com
 * Version:     1.1
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
    if (is_page('san-pham')) {
        wp_enqueue_script(
         '_mw_adminimize_remove_footer',
         WP_PLUGIN_URL . '/jquery-hover/js/main-product.js',
         array( 'jquery' )
        );
    }
 }
