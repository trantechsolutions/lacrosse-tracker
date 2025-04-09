<template>
  <div class="penalty-form mb-4">
    <h4 class="penalty-header text-center">Add Penalty</h4>
    <div class="row g-2">
      <div class="col-4">
        <input
          type="text"
          class="form-control form-control-sm"
          v-model="local.player"
          placeholder="Player #"
        />
      </div>
      <div class="col-4 offset-4">
        <input
          class="btn-check"
          type="checkbox"
          v-model="local.releasable"
          id="btn-releaseable"
        />
        <label
          class="btn btn-outline-success btn-sm w-100"
          for="btn-releaseable"
          >Releasable</label
        >
      </div>
      <div class="col-6">
        <div class="btn-group btn-group-sm w-100">
          <button
            class="btn btn-outline-primary"
            :class="{ active: local.team === 'home' }"
            @click="local.team = 'home'"
          >
            Home
          </button>
          <button
            class="btn btn-outline-primary"
            :class="{ active: local.team === 'away' }"
            @click="local.team = 'away'"
          >
            Away
          </button>
        </div>
      </div>
      <div class="col-6">
        <div class="btn-group btn-group-sm w-100">
          <button
            class="btn btn-outline-danger"
            :class="{ active: local.duration === 30 }"
            @click="local.duration = 30"
          >
            30s
          </button>
          <button
            class="btn btn-outline-danger"
            :class="{ active: local.duration === 60 }"
            @click="local.duration = 60"
          >
            1:00
          </button>
          <button
            class="btn btn-outline-danger"
            :class="{ active: local.duration === 120 }"
            @click="local.duration = 120"
          >
            2:00
          </button>
        </div>
      </div>
      <div class="col-12">
        <div class="btn-group btn-group-sm w-100">
          <button
            class="btn btn-outline-dark"
            :class="{ active: local.category === 'crosscheck' }"
            @click="local.category = 'crosscheck'"
          >
            Crosscheck
          </button>
          <button
            class="btn btn-outline-dark"
            :class="{ active: local.category === 'slash' }"
            @click="local.category = 'slash'"
          >
            Slash
          </button>
          <button
            class="btn btn-outline-dark"
            :class="{ active: local.category === 'trip' }"
            @click="local.category = 'trip'"
          >
            Trip
          </button>
          <button
            class="btn btn-outline-dark"
            :class="{ active: local.category === 'unnecessaryroughness' }"
            @click="local.category = 'unnecessaryroughness'"
          >
            Unnecessary Roughness
          </button>
          <button
            class="btn btn-outline-dark"
            :class="{ active: local.category === 'other' }"
            @click="local.category = 'other'"
          >
            Other
          </button>
        </div>
      </div>
      <div class="col-6 offset-3">
        <button
          class="btn btn-primary w-100"
          @click="$emit('addPenalty', local)"
        >
          Add Penalty
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, watch } from "vue";
const props = defineProps({
  newPenalty: Object,
  gameClock: Number
});

const emit = defineEmits(["addPenalty"]);

const local = reactive({
  ...props.newPenalty,
});

watch(
  () => props.newPenalty,
  (val) => {
    Object.assign(local, val);
  }
);

const handleSubmit = () => {
  // Emit the new penalty to the parent component
  emit('addPenalty', { 
    ...local, 
    startGameClock: props.gameClock, 
    endGameClock: props.gameClock - local.duration 
  })
};
</script>
