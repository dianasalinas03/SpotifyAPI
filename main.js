async function searchMusic() {
  let query = document.getElementById("search").value;
  let url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`;

  let options = {
      method: "GET",
      headers: {
"X-RapidAPI-Key": "ca0095175bmsh362d46f7276a872p1e55f1jsnd3c5a42853aa",
"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
}

  };

  try {
      let response = await fetch(url, options);
      let data = await response.json();
      let results = document.getElementById("results");
      results.innerHTML = "";

      data.data.forEach(song => {
          let li = document.createElement("li");
          li.innerHTML = `<strong>${song.title}</strong> - ${song.artist.name} <br>
                          <audio controls>
                              <source src="${song.preview}" type="audio/mpeg">
                              Tu navegador no soporta el audio.
                          </audio>`;
          results.appendChild(li);
      });
  } catch (error) {
      console.error("Error al obtener los datos:", error);
      alert("Hubo un error al buscar. Inténtalo de nuevo.");
  }
}