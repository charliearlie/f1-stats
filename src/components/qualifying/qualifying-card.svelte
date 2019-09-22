<script>
  export let driverData;
</script>

<style>
  .result {
    display: flex;
    border-bottom: 1px solid #eee;
    height: 80px;
    justify-content: space-between;
    min-width: 300px;
    max-width: 500px;
    margin: 10px auto;
    padding: 10px;
  }

  .left {
    display: flex;
    justify-content: flex-start;
  }

  .position {
    display: flex;
    font-size: 26px;
    font-weight: bold;
    text-align: left;
    width: 80px;
  }

  .driver {
    text-align: left;
  }

  .driver > h2 {
    font-size: 16px;
    margin: 0;
    margin-bottom: 4px;
  }

  .driver > p {
    margin: 0;
    opacity: 0.8;
  }

  .times {
    display: flex;
    flex-direction: column-reverse;
  }

  .time {
    display: grid;
    grid-template-columns: 25px 75px;
    font-size: 12px;
    margin: 5px 0;
  }

  .time:last-of-type {
    font-weight: 800;
    margin-top: 0;
  }
</style>

<div class="result">
  <div class="left">
    <div class="position">{driverData.position}</div>
    <div class="driver">
      <h2>{driverData.driver}</h2>
      <p>{driverData.constructor}</p>
    </div>
  </div>
  <div class="times">
    {#each driverData.qualifyingSessions as session, i}
      <p class="time">
        <span>Q{i + 1}:</span>
        <span>{session || 'N/A'}</span>
      </p>
    {/each}
  </div>
</div>
