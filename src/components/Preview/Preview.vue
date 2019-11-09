<template>
  <v-sheet color="blue-grey darken-3">
	  <v-content style="  padding:0;" >
		  <v-card height="100%">
			<v-tabs
			v-model="tab"
			width="100%"
			background-color="blue-grey darken-3"
			centered
			dark
			text
			icons-and-text
			>
			<v-tabs-slider></v-tabs-slider>
			<v-tab href="#tab-1">
				Plain View
				<v-icon>mdi-file-document-box-search-outline</v-icon>
			</v-tab>
			<v-tab href="#tab-2">
				Test View
				<v-icon>mdi-eye</v-icon>
			</v-tab>
			</v-tabs>
				<v-tabs-items v-model="tab" height="100%" >
					<v-tab-item
						value="tab-1"
						style="height: 80vh; overflow-x: auto; overflow-y: auto; padding:0;"
					>
						<PlainView />
					</v-tab-item>
					<v-tab-item
						value="tab-2"
						style="height: 80vh; overflow-x: auto; overflow-y: auto; padding:0;"
					>
						<TestView />
					</v-tab-item>
				</v-tabs-items>
  		</v-card>
	  </v-content>
  </v-sheet>
</template>
<script>
import PlainView from './views/PlainView';
import TestView from './views/TestView';
  export default {
	  components: {
		  PlainView,
		  TestView
	  },
		data () {
		return {
			tab: null,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		}
		},
  }
</script>

<style>

</style>