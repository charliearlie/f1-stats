<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let promise = getRandomNumber();

  async function getRandomNumber() {
    const res = await fetch(
      `https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new`
    );
    const text = await res.text();

    // We can send this number to a parent component too!
    dispatch("randomnumber", {
      number: text
    });

    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  }

  function handleClick() {
    promise = getRandomNumber();
  }
</script>

{#await promise}
  <p>Loading...</p>
{:then num}
  <p>The random number is {num}</p>
{/await}

<button on:click|once={handleClick}>Pick a random number</button>
