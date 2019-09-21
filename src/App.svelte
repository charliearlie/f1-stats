<script>
  import Button from "./Button.svelte";
  import RandomNumber from "./random-number.svelte";

  let count = 0;
  let numbersToSum = [1, 2, 3, 4];

  $: sum = numbersToSum.reduce((t, n) => t + n, 0);

  //   This is called a reactive declaration. Meaning this tells Svelte that this value needs to be
  //   refetched as the variable (count) it's relying on has changed
  $: doubled = count * 2;

  //  You can even use reactive declarations for running if statements
  $: if (count === 10) {
    console.log("Count is 10!");
  }

  function handleClick() {
    count = count + 1;
  }

  function addNumber() {
    numbersToSum = [...numbersToSum, numbersToSum.length + 1];
  }

  function handleRandomNumber(event) {
    alert(event.detail.number);
  }
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<main>
  <Button answer={42} />

  <button on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
  </button>
  <p>{numbersToSum.join(' + ')} = {sum}</p>
  <button on:click={addNumber}>Add number to sum</button>

  <!-- Conditional rendering -->
  {#if count > 10}
    <h1>The count is higher than 10</h1>
  {:else if count > 5}
    <h3>The count is greater than 5</h3>
  {:else}
    <h4>Greater than 0</h4>
  {/if}

  <RandomNumber on:randomnumber={handleRandomNumber} />
</main>
