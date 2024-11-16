<script setup lang="ts">
import { Button } from '../shad-cn-ui/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../shad-cn-ui/ui/card';
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '../shad-cn-ui/ui/tabs';

import LandingQuestions from './LandingQuestions.vue';

const animalsQuestion = {
	id: 1,
	text: "What is the largest land animal?",
	options: [
		{ text: "African Elephant" },
		{ text: "Blue Whale" },
		{ text: "Giraffe" },
		{ text: "Hippopotamus" }
	],
	correct: "African Elephant"
};

const moviesQuestion = {
	id: 2,
	text: "Which movie won the Academy Award for Best Picture in 1994?",
	options: [
		{ text: "Forrest Gump" },
		{ text: "Pulp Fiction" },
		{ text: "The Shawshank Redemption" },
		{ text: "The Lion King" }
	],
	correct: "Forrest Gump"
};

const scienceQuestion = {
	id: 3,
	text: "What is the chemical symbol for water?",
	options: [
		{ text: "H2O" },
		{ text: "O2" },
		{ text: "CO2" },
		{ text: "NaCl" }
	],
	correct: "H2O"
};

const videoGamesQuestion = {
	id: 4,
	text: "Which video game features a character named Link?",
	options: [
		{ text: "The Legend of Zelda" },
		{ text: "Super Mario Bros." },
		{ text: "Final Fantasy" },
		{ text: "Minecraft" }
	],
	correct: "The Legend of Zelda"
};

const sportsQuestion = {
	id: 5,
	text: "Which country won the FIFA World Cup in 2018?",
	options: [
		{ text: "France" },
		{ text: "Brazil" },
		{ text: "Germany" },
		{ text: "Argentina" }
	],
	correct: "France"
};
</script>

<template>
	<div class="flex flex-col items-center justify-center min-h-screen dark:bg-d-bg bg-l-bg ">
		<h1 class="text-4xl sm:text-4xl lg:text-6xl mt-5 mb-10 text-center dark:text-l-accent text-d-primary">Explore
			Different Categories!</h1>
		<div class="flex flex-wrap justify-center items-center px-4 sm:px-6 py-4 sm:py-5">
			<Tabs default-value="animals" class="w-full sm:w-[600px] md:w-[800px] mx-auto">
				<TabsList class="grid w-full grid-cols-5">
					<TabsTrigger value="animals">
						<svg fill="currentColor" width="50" height="50" viewBox="0 0 64 64" id="Layer_1_1_"
							version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink">

							<g>
								<path
									d="M38.024,39.992c0.232-0.496,0.501-0.977,0.808-1.438l-1.664-1.109C35.75,39.572,35,42.048,35,44.605V57h1   c0.592,0,1.15,0.26,1.531,0.713c0.387,0.459,0.542,1.046,0.437,1.653C37.807,60.298,36.888,61,35.83,61   c-1.425,0-2.727-0.722-3.482-1.93C30.158,55.565,29,51.529,29,47.396v-2.791c0-2.557-0.75-5.033-2.168-7.16l-1.664,1.109   c0.307,0.461,0.576,0.942,0.808,1.438C25.677,41.261,23.622,49,18,49v2c3.355,0,5.66-1.952,7.203-4.197   C25.793,46.923,26.393,47,27,47v0.396c0,4.507,1.263,8.911,3.652,12.734C31.775,61.927,33.711,63,35.83,63   c2.017,0,3.783-1.416,4.108-3.292c0.205-1.18-0.115-2.376-0.877-3.282c-0.542-0.645-1.264-1.094-2.062-1.299v-8.127   c0.004,0,0.008,0.001,0.012,0.001c0.603,0,1.2-0.077,1.787-0.195C40.342,49.049,42.646,51,46,51v-2   C40.378,49,38.323,41.261,38.024,39.992z M26.289,44.955c0.248-0.491,0.464-0.973,0.651-1.433c0.036,0.359,0.06,0.72,0.06,1.084   v0.386C26.763,44.992,26.526,44.979,26.289,44.955z M37,44.993v-0.387c0-0.364,0.025-0.725,0.06-1.084   c0.187,0.461,0.404,0.944,0.652,1.435C37.474,44.98,37.237,44.993,37,44.993z" />

								<path
									d="M52.515,14c-2.534,0-4.916,0.987-6.707,2.778l-2.76,2.76c-0.555-0.565-1.171-1.08-1.827-1.559   C42.341,16.257,43,14.205,43,12c0-6.065-4.935-11-11-11S21,5.935,21,12c0,2.208,0.66,4.261,1.784,5.986   c-0.656,0.479-1.27,0.994-1.825,1.559l-2.766-2.766C16.401,14.987,14.019,14,11.485,14C6.255,14,2,18.255,2,23.485   c0,2.534,0.987,4.916,2.778,6.707l2.198,2.198c0.741,0.741,1.285,1.666,1.573,2.674C9.548,38.56,12.784,41,16.418,41h2.099   c0.334,0.946,0.825,1.837,1.458,2.626l1.561-1.251C20.531,41.122,20,39.609,20,38c0-0.9,0.173-1.784,0.514-2.625l0.181-0.446   l-0.235-0.419C19.491,32.786,19,30.932,19,29c0-2.389,0.782-4.687,2.178-6.63C24,25.323,27.865,27,32,27   c4.139,0,8.006-1.68,10.828-4.637c1.399,1.944,2.183,4.245,2.183,6.637c0,1.932-0.491,3.786-1.459,5.509l-0.235,0.419l0.181,0.446   c0.341,0.841,0.514,1.725,0.514,2.625c0,1.713-0.625,3.361-1.76,4.641l1.496,1.327c0.776-0.875,1.36-1.885,1.743-2.968h2.091   c3.634,0,6.87-2.44,7.869-5.935c0.288-1.008,0.832-1.933,1.573-2.674l2.198-2.198C61.013,28.401,62,26.019,62,23.485   C62,18.255,57.745,14,52.515,14z M32,21c-4.278,0-7.862-3.004-8.771-7.011C24.963,14.91,27.879,16,32,16s7.037-1.09,8.771-2.011   C39.862,17.996,36.278,21,32,21z M32,3c3.382,0,6.331,1.877,7.869,4.643c-0.43,0.326-1.183,0.827-2.258,1.281l0.778,1.842   c0.968-0.409,1.715-0.853,2.261-1.226c0.181,0.636,0.29,1.301,0.326,1.986C39.992,12.22,36.98,14,32,14s-7.992-1.78-8.976-2.474   c0.036-0.683,0.144-1.346,0.325-1.981C24.78,10.522,27.661,12,32,12c1.476,0,2.904-0.173,4.247-0.515l-0.494-1.938   C34.572,9.848,33.309,10,32,10c-4.263,0-6.898-1.628-7.868-2.359C25.67,4.877,28.619,3,32,3z M4,23.485   C4,19.358,7.358,16,11.485,16c1.357,0,2.654,0.366,3.793,1.039C15.015,17.017,14.752,17,14.485,17C9.255,17,5,21.255,5,26.485   c0,0.241,0.022,0.522,0.054,0.817C4.372,26.158,4,24.852,4,23.485z M17.38,25.941C16.221,24.139,14.232,23,12,23v2   c1.899,0,3.55,1.192,4.167,2.975C14.99,27.348,13.665,27,12.299,27H12v2h0.299c1.944,0,3.78,0.92,4.956,2.462   c0.238,1.244,0.636,2.455,1.237,3.612C18.165,36.019,18,37,18,38c0,0.335,0.026,0.669,0.063,1h-1.645   c-2.746,0-5.191-1.844-5.946-4.485c-0.381-1.334-1.101-2.558-2.082-3.539l-0.541-0.541C7.419,29.401,7,27.479,7,26.485   C7,22.358,10.358,19,14.485,19c1.937,0,3.758,0.737,5.156,2.068C18.56,22.536,17.8,24.192,17.38,25.941z M32,25   c-3.649,0-7.051-1.511-9.508-4.158c0.468-0.466,0.981-0.894,1.531-1.29C26.029,21.67,28.859,23,32,23   c3.143,0,5.975-1.332,7.981-3.453c0.55,0.396,1.063,0.824,1.532,1.289C39.056,23.486,35.651,25,32,25z M53.527,34.515   C52.772,37.156,50.328,39,47.582,39H45.95c0.037-0.331,0.062-0.664,0.062-1c0-1-0.165-1.981-0.492-2.926   c0.603-1.163,1.003-2.38,1.24-3.631C47.936,29.914,49.765,29,51.701,29H52v-2h-0.299c-1.366,0-2.69,0.348-3.868,0.975   C48.45,26.192,50.101,25,52,25v-2c-2.226,0-4.211,1.132-5.371,2.926c-0.422-1.746-1.183-3.399-2.263-4.864   C45.763,19.734,47.581,19,49.515,19C53.642,19,57,22.358,57,26.485c0,0.994-0.419,2.915-0.849,3.95l-0.541,0.541   C54.628,31.957,53.909,33.181,53.527,34.515z M58.946,27.303C58.978,27.007,59,26.726,59,26.485C59,21.255,54.745,17,49.515,17   c-0.266,0-0.53,0.017-0.793,0.039C49.86,16.366,51.158,16,52.515,16C56.642,16,60,19.358,60,23.485   C60,24.852,59.628,26.158,58.946,27.303z" />

								<circle cx="39" cy="31" r="1" />

								<circle cx="25" cy="31" r="1" />

							</g>
						</svg>
					</TabsTrigger>
					<TabsTrigger value="movies">
						<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink" width="50px" height="50px" viewBox="0 0 64 64"
							enable-background="new 0 0 64 64" xml:space="preserve" class="py-1">
							<g>
								<circle fill="currentColor" cx="20" cy="12" r="1" />
								<path fill="currentColor" d="M63.585,29.188c-0.262-0.188-0.598-0.241-0.901-0.137L52,32.612V26c0-2.211-1.789-4-4-4h-4.372
		C46.864,19.852,49,16.177,49,12c0-6.629-5.374-12-12-12c-4.923,0-9.149,2.968-11,7.211C24.149,2.968,19.923,0,15,0
		C8.374,0,3,5.371,3,12c0,4.177,2.136,7.852,5.372,10H4c-2.211,0-4,1.789-4,4v34c0,2.211,1.789,4,4,4h44c2.211,0,4-1.789,4-4v-6.613
		l10.684,3.562C62.787,56.983,62.894,57,63,57c0.207,0,0.412-0.064,0.585-0.188C63.846,56.623,64,56.321,64,56V30
		C64,29.679,63.846,29.377,63.585,29.188z M37,49c0,0.552-0.447,1-1,1H16c-0.553,0-1-0.448-1-1V37c0-0.552,0.447-1,1-1h20
		c0.553,0,1,0.448,1,1V49z M12,17c0-1.656,1.344-3,3-3s3,1.344,3,3s-1.344,3-3,3S12,18.656,12,17z M34,17c0-1.656,1.344-3,3-3
		s3,1.344,3,3s-1.344,3-3,3S34,18.656,34,17z M45,12c0,1.656-1.344,3-3,3s-3-1.344-3-3s1.344-3,3-3S45,10.344,45,12z M37,4
		c1.656,0,3,1.344,3,3s-1.344,3-3,3s-3-1.344-3-3S35.344,4,37,4z M32,9c1.656,0,3,1.344,3,3s-1.344,3-3,3s-3-1.344-3-3
		S30.344,9,32,9z M26,16.789c0.929,2.131,2.456,3.938,4.372,5.211h-8.744C23.544,20.728,25.071,18.92,26,16.789z M23,12
		c0,1.656-1.344,3-3,3s-3-1.344-3-3s1.344-3,3-3S23,10.344,23,12z M15,4c1.656,0,3,1.344,3,3s-1.344,3-3,3s-3-1.344-3-3
		S13.344,4,15,4z M7,12c0-1.656,1.344-3,3-3s3,1.344,3,3s-1.344,3-3,3S7,13.656,7,12z M58,53.279l-6-2V34.72l6-1.999V53.279z
		 M62,54.612l-2-0.667V32.055l2-0.667V54.612z" />
								<circle fill="currentColor" cx="15" cy="17" r="1" />
								<circle fill="currentColor" cx="10" cy="12" r="1" />
								<circle fill="currentColor" cx="15" cy="7" r="1" />
								<circle fill="currentColor" cx="37" cy="17" r="1" />
								<circle fill="currentColor" cx="37" cy="7" r="1" />
								<circle fill="currentColor" cx="32" cy="12" r="1" />
								<circle fill="currentColor" cx="42" cy="12" r="1" />
								<rect x="17" y="38" fill="currentColor" width="18" height="10" />
							</g>
						</svg>
					</TabsTrigger>
					<TabsTrigger value="science">
						<svg width="50px" height="50px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
							stroke-width="3" stroke="currentColor" fill="none">
							<ellipse cx="31.95" cy="32" rx="8.99" ry="24.73" stroke-linecap="round" />
							<ellipse cx="31.95" cy="32" rx="8.99" ry="24.73"
								transform="translate(-11.74 43.67) rotate(-60)" stroke-linecap="round" />
							<ellipse cx="32.05" cy="32.15" rx="24.73" ry="8.99"
								transform="translate(-11.78 20.33) rotate(-30)" stroke-linecap="round" />
							<circle cx="32.2" cy="32.15" r="2.88" stroke-linecap="round" />
						</svg>
					</TabsTrigger>
					<TabsTrigger value="video-games">
						<svg fill="currentColor" height="50px" width="50px" version="1.1" id="Layer_1"
							xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 512.001 512.001" xml:space="preserve">
							<g>
								<g>
									<path d="M408.232,291.133c-5.993,0-10.857,4.853-10.857,10.857c0,5.993,4.864,10.857,10.857,10.857
			c6.004,0,10.857-4.864,10.857-10.857C419.089,295.986,414.236,291.133,408.232,291.133z" />
								</g>
							</g>
							<g>
								<g>
									<path d="M382.697,265.587c-6.004,0-10.857,4.853-10.857,10.857c0,5.993,4.853,10.857,10.857,10.857
			c5.993,0,10.857-4.864,10.857-10.857C393.554,270.44,388.69,265.587,382.697,265.587z" />
								</g>
							</g>
							<g>
								<g>
									<path d="M382.697,316.668c-6.004,0-10.857,4.864-10.857,10.857c0,6.004,4.853,10.857,10.857,10.857
			c5.993,0,10.857-4.853,10.857-10.857C393.554,321.531,388.69,316.668,382.697,316.668z" />
								</g>
							</g>
							<g>
								<g>
									<path d="M357.151,291.133c-6.004,0-10.857,4.853-10.857,10.857c0,5.993,4.853,10.857,10.857,10.857
			c5.993,0,10.857-4.864,10.857-10.857C368.008,295.986,363.144,291.133,357.151,291.133z" />
								</g>
							</g>
							<g>
								<g>
									<path d="M154.849,291.133h-14.689v-14.689c0-5.996-4.861-10.857-10.857-10.857s-10.857,4.861-10.857,10.857v14.689h-14.678
			c-5.996,0-10.857,4.861-10.857,10.857c0,5.995,4.861,10.857,10.857,10.857h14.678v14.678c0,5.996,4.86,10.857,10.857,10.857
			s10.857-4.861,10.857-10.857v-14.678h14.689c5.996,0,10.857-4.862,10.857-10.857C165.705,295.993,160.845,291.133,154.849,291.133
			z" />
								</g>
							</g>
							<g>
								<g>
									<path d="M235.687,278.105c-5.996,0-10.857,4.86-10.857,10.857v26.045c0,5.996,4.861,10.857,10.857,10.857
			c5.996,0,10.857-4.861,10.857-10.857v-26.045C246.544,282.965,241.683,278.105,235.687,278.105z" />
								</g>
							</g>
							<g>
								<g>
									<path d="M276.313,278.105c-5.996,0-10.857,4.86-10.857,10.857v26.045c0,5.996,4.861,10.857,10.857,10.857
			c5.996,0,10.857-4.861,10.857-10.857v-26.045C287.169,282.965,282.309,278.105,276.313,278.105z" />
								</g>
							</g>
							<g>
								<g>
									<path d="M129.303,221.52c-44.366,0-80.459,36.098-80.459,80.47c0,44.365,36.094,80.458,80.459,80.458
			c44.371,0,80.47-36.093,80.47-80.458C209.772,257.618,173.674,221.52,129.303,221.52z M129.303,360.734
			c-32.392,0-58.745-26.352-58.745-58.744c0-32.398,26.352-58.756,58.745-58.756c32.397,0,58.756,26.358,58.756,58.756
			C188.059,334.381,161.701,360.734,129.303,360.734z" />
								</g>
							</g>
							<g>
								<g>
									<path d="M382.697,221.52c-44.371,0-80.47,36.098-80.47,80.47c0,44.365,36.098,80.458,80.47,80.458
			c44.365,0,80.459-36.093,80.459-80.458C463.156,257.618,427.062,221.52,382.697,221.52z M382.697,360.734
			c-32.398,0-58.756-26.352-58.756-58.744c0-32.398,26.358-58.756,58.756-58.756c32.392,0,58.745,26.358,58.745,58.756
			C441.443,334.381,415.09,360.734,382.697,360.734z" />
								</g>
							</g>
							<g>
								<g>
									<path d="M336.068,172.676h-3.8c-5.996,0-10.857,4.861-10.857,10.857c0,5.996,4.861,10.857,10.857,10.857h3.8
			c5.996,0,10.857-4.861,10.857-10.857C346.924,177.536,342.064,172.676,336.068,172.676z" />
								</g>
							</g>
							<g>
								<g>
									<path d="M382.697,172.676h-14.689c-5.996,0-10.857,4.861-10.857,10.857c0,5.995,4.861,10.857,10.857,10.857h14.689
			c59.325,0,107.589,48.27,107.589,107.6c0,59.325-48.264,107.589-107.589,107.589c-29.617,0-57.216-11.783-77.711-33.176
			c-2.048-2.138-4.88-3.346-7.84-3.346h-82.293c-2.961,0-5.792,1.208-7.84,3.346c-20.495,21.393-48.094,33.176-77.711,33.176
			c-59.325,0-107.589-48.264-107.589-107.589c0-59.331,48.264-107.6,107.589-107.6h167.41c5.996,0,10.857-4.862,10.857-10.857
			c0-5.996-4.86-10.857-10.857-10.857h-3.257v-27.782c0-5.996-4.86-10.857-10.857-10.857h-15.742V91.566
			c0-5.996-4.861-10.857-10.857-10.857c-5.996,0-10.857,4.861-10.857,10.857v42.471h-15.742c-5.996,0-10.857,4.86-10.857,10.857
			v27.782h-89.242C58.005,172.676,0,230.685,0,301.989c0,71.298,58.005,129.303,129.303,129.303
			c34.018,0,65.818-12.932,90.07-36.522h73.255c24.251,23.589,56.051,36.522,90.07,36.522c71.298,0,129.303-58.005,129.303-129.303
			C512,230.685,453.995,172.676,382.697,172.676z M240.258,155.75h31.484v14.939h-31.484V155.75z" />
								</g>
							</g>
						</svg>
					</TabsTrigger>
					<TabsTrigger value="sports">
						<svg fill='currentColor' width="50px" height="50px" viewBox="0 0 48 48"
							xmlns="http://www.w3.org/2000/svg" class="py-1">
							<title>sports-soccer</title>
							<g id="Layer_2" data-name="Layer 2">
								<g id="invisible_box" data-name="invisible box">
									<rect width="48" height="48" fill="none" />
								</g>
								<g id="Q3_icons" data-name="Q3 icons">
									<g>
										<polygon fill="currentColor" stroke="currentColor"
											points="17.5 21.6 20 29 28 29 30.5 21.6 24 17 17.5 21.6" />
										<path fill="currentColor" stroke="currentColor"
											d="M45.5,19.1A22.1,22.1,0,0,0,24,2a21.2,21.2,0,0,0-4.9.6A22,22,0,0,0,24,46a28.1,28.1,0,0,0,4.9-.5A22.1,22.1,0,0,0,45.5,19.1Zm-7,15.6-1.1-3.3H29.5l-2.6,7.6,2.8,2-1.7.5a18.1,18.1,0,0,1-4,.4,17.9,17.9,0,0,1-5.7-.9l2.8-2-2.6-7.6H10.6L9.5,34.7a17,17,0,0,1-3-6.7A14.8,14.8,0,0,1,6,23.9l2.8,2,6.3-4.8-2.3-7.6H9.4a18.3,18.3,0,0,1,9.2-6.6l-1.1,3.2L24,14.7l6.5-4.6L29.4,6.8a18.6,18.6,0,0,1,9.3,6.7H35.2l-2.3,7.6,6.3,4.8L42,23.8A18.9,18.9,0,0,1,38.5,34.7Z" />
									</g>
								</g>
							</g>
						</svg>
					</TabsTrigger>
				</TabsList>
				<TabsContent value="animals">
					<Card class="flex flex-col items-center dark:border-none">
						<CardHeader class="text-center">
							<CardTitle class="text-[1.5rem]">Animals</CardTitle>
							<CardDescription class="text-[1.2rem]">
								Love animals? Find out how much!
							</CardDescription>
						</CardHeader>
						<CardContent class="flex justify-center items-center space-y-2">
							<LandingQuestions :question="animalsQuestion" />
						</CardContent>
						<CardFooter class="w-full flex justify-center mb-6">
							<router-link to="/quiz">
								<Button
								class="bg-l-primary hover:bg-l-accent dark:bg-l-accent dark:hover:bg-opacity-50 dark:text-white text-[1.2rem] p-6">Animals
								Trivia</Button>
							</router-link>
						</CardFooter>
					</Card>
				</TabsContent>

				<TabsContent value="movies">
					<Card class="flex flex-col items-center dark:border-none">
						<CardHeader class="text-center">
							<CardTitle class="text-[1.5rem]">Movies</CardTitle>
							<CardDescription class="text-[1.2rem]">
								Think you're a movie buff? Put your knowledge to the test!
							</CardDescription>
						</CardHeader>
						<CardContent class="flex justify-center items-center space-y-2">
							<LandingQuestions :question="moviesQuestion" />
						</CardContent>
						<CardFooter class="w-full flex justify-center mb-6">
							<router-link to="/quiz">
								<Button
								class="bg-l-primary hover:bg-l-accent dark:bg-l-accent dark:hover:bg-opacity-50 dark:text-white text-[1.2rem] p-6">Movies
								Trivia</Button>
							</router-link>

						</CardFooter>
					</Card>
				</TabsContent>

				<TabsContent value="science">
					<Card class="flex flex-col items-center dark:border-none">
						<CardHeader class="text-center">
							<CardTitle class="text-[1.5rem]">Science</CardTitle>
							<CardDescription class="text-[1.2rem]">
								Curious about the world? Challenge your science smarts!
							</CardDescription>
						</CardHeader>
						<CardContent class="flex justify-center items-center space-y-2">
							<LandingQuestions :question="scienceQuestion" />
						</CardContent>
						<CardFooter class="w-full flex justify-center mb-6">
							<router-link to="/quiz">
								<Button
								class="bg-l-primary hover:bg-l-accent dark:bg-l-accent dark:hover:bg-opacity-50 dark:text-white text-[1.2rem] p-6">Science
								Trivia</Button>
							</router-link>
						</CardFooter>
					</Card>
				</TabsContent>

				<TabsContent value="video-games">
					<Card class="flex flex-col items-center dark:border-none">
						<CardHeader class="text-center">
							<CardTitle class="text-[1.5rem]">Video Games</CardTitle>
							<CardDescription class="text-[1.2rem]">
								Game on! Test how well you know your favorite worlds!
							</CardDescription>
						</CardHeader>
						<CardContent class="flex justify-center items-center space-y-2">
							<LandingQuestions :question="videoGamesQuestion" />
						</CardContent>
						<CardFooter class="w-full flex justify-center mb-6">
							<router-link to="/quiz">
								<Button
								class="bg-l-primary hover:bg-l-accent dark:bg-l-accent dark:hover:bg-opacity-50 dark:text-white text-[1.2rem] p-6">Video Games
								Trivia</Button>
							</router-link>
						</CardFooter>
					</Card>
				</TabsContent>

				<TabsContent value="sports">
					<Card class="flex flex-col items-center dark:border-none">
						<CardHeader class="text-center">
							<CardTitle class="text-[1.5rem]">Sports</CardTitle>
							<CardDescription class="text-[1.2rem]">
								Are you a true sports fan? Let’s see how much you know!
							</CardDescription>
						</CardHeader>
						<CardContent class="flex justify-center items-center space-y-2">
							<LandingQuestions :question="sportsQuestion" />
						</CardContent>
						<CardFooter class="w-full flex justify-center mb-6">
							<router-link to="/quiz">
								<Button
								class="bg-l-primary hover:bg-l-accent dark:bg-l-accent dark:hover:bg-opacity-50 dark:text-white text-[1.2rem] p-6">Sports
								Trivia</Button>
							</router-link>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	</div>
</template>