<script>
  import { onMount } from "svelte";
  import ApiService from "../../services/api-service";
  import QualifyingCard from "./qualifying-card.svelte";
  import Loading from "../loading.svelte";

  const api = new ApiService();
  $: qualiData = null;
  onMount(async () => {
    qualiData = await api.getLatestRoundQualifyingData();
  });
</script>

<h1>Latest qualifying</h1>
{#if qualiData}
  <h1>{qualiData.raceName}</h1>
  <h2>{qualiData.circuit}</h2>
  {#each qualiData.results as result}
    <QualifyingCard driverData={result} />
  {/each}
{:else}
  <Loading />
{/if}
