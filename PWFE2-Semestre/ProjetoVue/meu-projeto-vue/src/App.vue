<template>
  <div id="app">
    <header>
      <h1>Meu Catálogo de Filmes e Livros</h1>
      <button @click="mostrar">Catalogo</button>
    </header>
    <main>
      <CatalogoDeLivros />
      <CatalogoDeFilmes />
    </main>
    <footer>
      <h1>Rodapé do Site</h1>
    </footer>
  </div>
</template>
  
<script>
import CatalogoDeFilmes from "@/components/CatalogoDeFilmes.vue";
import CatalogoDeLivros from "./components/CatalogoDeLivros.vue";

export default {
  components: {
    CatalogoDeFilmes,
    CatalogoDeLivros,
  },
}
</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

header {

  background-color: #35495e;
  color: #fff;
  padding: 10px 0;
}

footer {
  background-color: #35495e;
  /* Cor de fundo escura */
  color: #fff;
  /* Texto branco */
  text-align: center;
  padding: 10px 0;
  /* Espaçamento acima e abaixo do texto */
}
</style>