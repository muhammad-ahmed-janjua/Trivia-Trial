<template>
	<header :class="{ 'scrolled-nav': scrollPosition }">
		<nav>
			<div class="branding">
				<img src="../../assets/img/trivia-time-logo (1).png" alt="">
			</div>
		</nav>
		<ul v-show="!mobile" class="navigation">
			<li>
				<router-link
				class="link" :to="{ name: 'Home' }">
					Home
				</router-link>
			</li>
			<li>
				<router-link
				class="link" :to="{ name: 'About' }">
					Home
				</router-link>
			</li>
			<li>
				<router-link
				class="link" :to="{ name: 'Breh' }">
					Home
				</router-link>
			</li>
			<li>
				<router-link
				class="link" :to="{ name: 'Bro' }">
					Home
				</router-link>
			</li>
		</ul>
		<div @click="toggleMobileNav" v-show="mobile" :class=" { 'icon-active' : movibleNav }">
			<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
		</div>
		<Transition name="mobile-nav">
			<ul v-show="mobileNav" class="dropdown-nav">
			<li>
				<router-link
				class="link" :to="{ name: 'Home' }">
					Home
				</router-link>
			</li>
			<li>
				<router-link
				class="link" :to="{ name: 'About' }">
					Home
				</router-link>
			</li>
			<li>
				<router-link
				class="link" :to="{ name: 'Breh' }">
					Home
				</router-link>
			</li>
			<li>
				<router-link
				class="link" :to="{ name: 'Bro' }">
					Home
				</router-link>
			</li>
		</ul>			
		</Transition>
	</header>
	<div></div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>