<template>
	<div class="header">
		<div class='brand'>
			<img alt="HPE logo" src="@/images/hpe-logo.png">
		</div>
		<div class="userMenu">
			<p>{{ userProfile.userName }}</p>
		</div>
		
	</div>
</template>

<script>
export default {
	name: 'Header',
	props: {
		userProfile: {
			type: Object,
			// default: {
			// 	userProfile: {
			// 		userName: 'fix'
			// 	}
			// }
		}
	},
	created: function () {
		// eslint-disable-next-line
		// console.log('--- props:', this.$props.userProfile);
	}
}
</script>

<style lang="scss" src="@/styles/header.scss"></style>
