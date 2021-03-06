<?php
/**
 * The Footer widget areas.
 *
 * @package WordPress
 * @subpackage primal
 * @since primal 1.0
 */
?>

<?php
	/* The footer widget area is triggered if any of the areas
	 * have widgets. So let's check that first.
	 *
	 * If none of the sidebars have widgets, then let's bail early.
	 */
	if (   ! is_active_sidebar( 'first-footer-widget-area'  )
		&& ! is_active_sidebar( 'second-footer-widget-area' )
		&& ! is_active_sidebar( 'third-footer-widget-area' )
		&& ! is_active_sidebar( 'fourth-footer-widget-area' )
	)
		return;
	// If we get this far, we have widgets. Let's do this.
?>

<?php if ( is_active_sidebar( 'first-footer-widget-area' ) ) : ?>
					<ul class="widget-footer column large-12">
						<?php dynamic_sidebar( 'first-footer-widget-area' ); ?>
					</ul>
<?php endif; ?>

<?php if ( is_active_sidebar( 'second-footer-widget-area' ) ) : ?>
					<ul class="widget-footer column medium-4 large-2 border-bottom">
						<?php dynamic_sidebar( 'second-footer-widget-area' ); ?>
					</ul>
<?php endif; ?>

<?php if ( is_active_sidebar( 'third-footer-widget-area' ) ) : ?>
					<ul class="widget-footer column medium-4 large-2 border-bottom">
						<?php dynamic_sidebar( 'third-footer-widget-area' ); ?>
					</ul>
<?php endif; ?>

<?php if ( is_active_sidebar( 'five-footer-widget-area' ) ) : ?>
					<ul class="widget-footer column medium-4 large-2 border-bottom">
						<?php dynamic_sidebar( 'five-footer-widget-area' ); ?>
					</ul>
<?php endif; ?>

<?php if ( is_active_sidebar( 'fourth-footer-widget-area' ) ) : ?>
					<ul class="widget-footer column medium-12 large-6">
						<?php dynamic_sidebar( 'fourth-footer-widget-area' ); ?>
					</ul>
<?php endif; ?>


