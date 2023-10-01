// 3. Considere o array abaixo:
const movies = [
    { movie: "Um Sonho de Liberdade", releaseYear: 1994 },
    { movie: "O Poderoso Chefão", releaseYear: 1972 },
    { movie: "O Poderoso Chefão II", releaseYear: 1974 },
    { movie: "Batman: O Cavaleiro das Trevas", releaseYear: 2008 },
    { movie: "A Lista de Schindler", releaseYear: 1993 },
    { movie: "12 Homens e uma Sentença", releaseYear: 1957 },
    { movie: "Pulp Fiction: Tempo de Violência", releaseYear: 1994 },
    { movie: "O Senhor dos Anéis: O Retorno do Rei", releaseYear: 2003 },
    { movie: "Três Homens em Conflito", releaseYear: 1966 },
    { movie: "Clube da Luta", releaseYear: 1999 }
  ]
  
  // a. Crie uma função que retorne um novo array contendo apenas os nomes dos filmes;
  
  function nameMovie(movies) {
    return movies.map(justMovies => justMovies.movie);
  };
  
  const moviesFiveStar = nameMovie(movies);
  // console.log(moviesFiveStar)
  
  //  b. Crie uma função que retorne um novo array contendo apenas os anos de lançamento dos filmes;
  
  function ageMovie() {
    return movies.map(justAge => justAge.releaseYear);
  }
  
  const ageFiveStar = ageMovie(movies);
  // console.log(ageFiveStar)
  
  // c. Crie uma função que retorne um novo array com os filmes que comecem pela letra 'O';
  
  function findMovie(movies) {
    const filmLetter = [];
  
    for (const film of movies) {
        if (film.movie.includes('o')) {
            filmLetter.push(film);
        }
    }
    return filmLetter;
  }
  
  const filmLetter = findMovie(movies);
  // console.log(filmLetter)
  
  
  // d. Crie uma função que retorne um novo array com os filmes que tenham sido lançados DEPOIS de 1995;
  // >1995
  
  
  function oldMovie(movies) {
    
    const numerosFiltrados = movies.filter(function(film) {
      return film.releaseYear > 1995;
    });
  
    return numerosFiltrados;
  }
  
  const resultado = oldMovie(movies);
  
  console.log(resultado);