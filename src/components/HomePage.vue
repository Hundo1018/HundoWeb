<template>
	
	<v-layout>
		<v-system-bar height="30" color="primary-darken">歡迎</v-system-bar>
		<v-app-bar height="45" color="primary">歡迎</v-app-bar>
			<v-navigation-drawer width="150" color="primary-darken" permanent>
				<v-list-item>
					<v-list-item-title class="text-h6">
						Application
          </v-list-item-title>
          <v-list-item-subtitle>
						subtext
          </v-list-item-subtitle>
					<v-divider></v-divider>
      </v-list-item>
			</v-navigation-drawer>
		<v-main>
			
			<v-card
				height="1000"
				color="surface"
				elevation="4">
				
				<v-card-text 
					color="surface"
					elevation="4"
					variant="outlined"
				>
					文字再測試
				</v-card-text>
			</v-card>
		</v-main>
	</v-layout>
	<!-- <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax> -->

</template>
<script setup lang="ts">
//
</script>
  