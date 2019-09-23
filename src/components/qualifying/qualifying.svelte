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

<div>
  <h1>Latest qualifying</h1>
  {#if qualiData}
    <h1>{qualiData.raceName}</h1>
    <h2>{qualiData.circuit}</h2>
    {#each qualiData.results as result, i}
      <QualifyingCard driverData={result} position={i + 1} />
    {/each}
  {:else}
    <Loading />
  {/if}
</div>
