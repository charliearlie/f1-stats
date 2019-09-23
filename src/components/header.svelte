<script>
  import { Link } from "svelte-routing";

  import { SubheaderNavigationContent } from "../utils/navigation-content";
</script>

<style type="text/sass">
  .header-wrapper {
    position: fixed;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.19);
    height: 120px;
    justify-content: space-between;
    top: 0;
    width: 100%;
    z-index: 5;
  }

  .header {
    display: flex;
    align-items: center;
    height: 55px;
    margin: auto;
    max-width: 1200px;
    width: 100%;
  }

  .header-content {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
  }

  nav {
    display: flex;
    align-items: center;
  }

  .nav-item {
    margin-right: 10px;
  }

  h2 {
    margin: 0;
  }

  .title {
    color: black;
    text-transform: uppercase;
  }

  .subheader {
    display: flex;
    align-items: center;
    background: #e10600;
    height: 65px;
    justify-content: center;
  }

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    max-width: 1200px;
    padding: 0;
    li {
      color: white;
      font-weight: 500;
      font-size: 18px;
      margin-right: 25px;
    }
  }
</style>

<div class="header-wrapper">
  <div class="header">
    <div class="header-content">
      <h2>
        <Link class="title" to="/about">F1 Stats</Link>
      </h2>
      <nav>
        <div class="nav-item">
          <Link to="/about">Stats</Link>
        </div>
        <div class="nav-item">Races</div>
        <div class="nav-item">Qualifying</div>
      </nav>
    </div>
  </div>
  <div class="subheader">
    <div class="header-content">
      <ul>
        {#each SubheaderNavigationContent as item}
          <li>{item.name}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>
