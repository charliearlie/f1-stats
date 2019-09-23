<script>
  import { Router, Route } from "svelte-routing";
  import Header from "./components/header.svelte";
  import Qualifying from "./pages/qualifying-page.svelte";

  export let url = "";
</script>

<style>
  main {
    padding-top: 130px;
    text-align: center;
    margin: auto;
    max-width: 1200px;
  }
</style>

<Router {url}>
  <Header />

  <main>
    <Route path="/">
      <Qualifying />
    </Route>
    <Route path="/about">
      <div>Abouty McAboutyface</div>
    </Route>
  </main>
</Router>
