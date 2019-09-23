<script>
  import Qualifying from "../components/qualifying/qualifying.svelte";
</script>

<style>
  .qualifying {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 3fr 1fr;
  }

  .content,
  .results {
    background: white;
    box-shadow: 0 0 14px 0 rgba(53, 64, 82, 0.05);
    padding: 10px;
  }
</style>

<div class="qualifying">
  <div class="results">
    <Qualifying />
  </div>
  <div class="content" />
</div>
