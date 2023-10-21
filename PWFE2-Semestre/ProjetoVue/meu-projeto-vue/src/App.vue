<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/filmes">Catálogo De Filmes</router-link> |
    <router-link to="/livros">Catálogo De Livros</router-link> |
  </nav>
  <div>
    <router-view/>
    <footer>
      <h1>Rodapé do Site</h1>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #35495e;
  /* Cor de fundo escura */
  color: #fff;
  /* Texto branco */
  text-align: center;
  /* Espaçamento acima e abaixo do texto */
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  padding: 20px;
  background-color: #35495e;
  /* Cor de fundo escura */
  color: #fff;
  /* Texto branco */
  text-align: center;
  /* Espaçamento acima e abaixo do texto */
  font-weight: bold;
}
</style>
