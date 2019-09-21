<script>
  export let answer;

  const employees = [
    {
      name: "Charlie",
      role: "Front end developer",
      age: 29
    },
    {
      name: "Lorenzo",
      role: "Front end developer",
      age: 28
    }
  ];
</script>

{#each employees as employee (employee.name)}
  <h2>{employee.name}</h2>
{/each}
