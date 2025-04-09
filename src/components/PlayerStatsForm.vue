<template>
  <div class="penalty-form mb-4">
    <h4 class="penalty-header text-center">Add Stat</h4>
    <div class="row g-2">
      <div class="col-4">
        <input class="form-control form-control-sm" v-model="local.player" placeholder="Player #" />
      </div>
      <div class="col-6 offset-2">
        <div class="btn-group btn-group-sm w-100">
          <button class="btn btn-outline-primary" :class="{active: local.team === 'home'}" @click="local.team = 'home'">Home</button>
          <button class="btn btn-outline-primary" :class="{active: local.team === 'away'}" @click="local.team = 'away'">Away</button>
        </div>
      </div>
      <div class="col-12">
        <div class="btn-group btn-group-sm w-100">
          <button class="btn btn-outline-success" :class="{active: local.type === 'goal'}" @click="local.type = 'goal'">Goal</button>
          <button class="btn btn-outline-success" :class="{active: local.type === 'assist'}" @click="local.type = 'assist'">Assist</button>
          <button class="btn btn-outline-success" :class="{active: local.type === 'shot'}" @click="local.type = 'shot'">Shot</button>
          <button class="btn btn-outline-success" :class="{active: local.type === 'shotOnGoal'}" @click="local.type = 'shotOnGoal'">Shot On</button>
        </div>
      </div>
      <div class="col-12">
        <div class="btn-group btn-group-sm w-100">
          <button class="btn btn-outline-dark" :class="{active: local.type === 'groundBall'}" @click="local.type = 'groundBall'">Ground Ball</button>
          <button class="btn btn-outline-dark" :class="{active: local.type === 'causedTO'}" @click="local.type = 'causedTO'">Caused TO</button>
          <button class="btn btn-outline-dark" :class="{active: local.type === 'save'}" @click="local.type = 'save'">Save</button>
          <button class="btn btn-outline-dark" :class="{active: local.type === 'faceOff'}" @click="local.type = 'faceOff'">Face Off</button>
          <button class="btn btn-outline-dark" :class="{active: local.type === 'faceOffWin'}" @click="local.type = 'faceOffWin'">FO Win</button>
        </div>
      </div>
      <div class="col-6 offset-3">
        <button class="btn btn-primary w-100" @click="$emit('addPlayerStat', local)">Add Player Stat</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, watch } from 'vue'
const props = defineProps(['newPlayerStat'])
const local = reactive({ ...props.newPlayerStat })
watch(() => props.newPlayerStat, val => Object.assign(local, val))
</script>