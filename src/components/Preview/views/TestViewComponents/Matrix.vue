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
              <component :is="'Swtch'" />
              <!-- <v-switch value input-value="true"></v-switch> -->
          </td>
          <td>
              <component :is="'Txt'" placeHolder="price" />
          </td>
          <td>
              <component :is="'Slect'" :selectionItems="sizes"/>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
 </div>
</template>

<script>
import Slect from './MatrixComponents/Slect';
import Swtch from './MatrixComponents/Switch';
import Txt from './MatrixComponents/Txt';
  export default {
    components: {
      Slect,
      Swtch,
      Txt
    },
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