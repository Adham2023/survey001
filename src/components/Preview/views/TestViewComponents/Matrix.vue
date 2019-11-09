<template>
 <div id="inspire">
      <v-simple-table style="border-color: transparent">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Products</th>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
          <th class="text-left">Size</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in 5" :key="i">
            <td>Snikers</td>
          <td>
              <v-switch v-model="switch1" :label="`Switch 1: ${switch1.toString()}`"></v-switch>
          </td>
          <td>
              <v-text-field placeholder="price">
              </v-text-field>
          </td>
          <td>
              <v-select :items="sizes" v-model="size" outlined>

              </v-select>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
 </div>
</template>

<script>
  export default {
    data () {
      return {
          switch1: true,
          size: "",
          sizes: [
              {
                  text: 'Large',
                  value: 'L'
              },
              {
                  text: 'Medium',
                  value: "M"
              },
              {
                  text: "Small",
                  value: "S"
              }

          ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  }
</script>

<style>

</style>