<template>
  <table ref="table">
	<thead>
		<tr>
			<th></th>
			<th>
				<select id="types">
					<option selected="">number</option>
					<option>boolean</option>
          <option>text</option>
				</select>
        <v-icon>keyboard_arrow_down</v-icon>
			</th>
			<th id="addCol" @click="addCol">+</th>
		</tr>
		<tr>
			<th>Label</th>
			<th contenteditable="">New column</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td contenteditable=""></td>
			<td></td>
		</tr>
		<tr>
			<td id="addRow" @click="addRow">+</td>
		</tr>
	</tbody>
</table>
</template>

<script>
export default {

}
</script>

<style>

</style>