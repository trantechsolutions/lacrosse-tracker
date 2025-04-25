<template>
  <div class="container-fluid py-3 pb-5">
    <HeaderSection :isPublicView="false" />

    <!-- <ScoreSection :isPublicView="false" /> -->
    <div class="row">
      <div class="col-6">
        <PenaltyForm />
      </div>
      <div class="col-6">
        <PlayerStatsForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useScoreboardStore, useAuthStore } from "@/stores/store";

import HeaderSection from "@/components/HeaderSection.vue";
import ScoreSection from "@/components/ScoreSection.vue";
import PenaltyForm from "@/components/PenaltyForm.vue";
import PlayerStatsForm from "@/components/PlayerStatsForm.vue";

const props = defineProps({ isPublicView: Boolean })
</script>
