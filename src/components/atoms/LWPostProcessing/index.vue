<template>
	<div class="lw-post-processing">
	</div>
</template>

<style lang="scss">
.lw-post-processing{
	position: absolute;
	min-height: 200px;
	min-width: 200px;
	overflow: hidden;
	pointer-events: none;
	&:before{
		content: "";
		position: absolute;
		top: -80px;
		right: -80px;
		bottom: -80px;
		left: -80px;
		background: radial-gradient(
			circle,
			transparent,
			rgba(black, .2)
		);
	}
	&:after{
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url(/images/scan.png);
		background-repeat: repeat;
		opacity: .03;
	}
}
</style>
