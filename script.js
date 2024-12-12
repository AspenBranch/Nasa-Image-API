document.getElementById('fetchButton').addEventListener('click', fetchNASAImage);
async function fetchNASAImage() {
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=9IdX7NDd1e2VbivMxusx6DPUzEaLK1YoRpjGh41O`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.media_type === 'image') {
      document.getElementById('output').innerHTML = `
        <h2>${data.title}</h2>
        <img src="${data.url}" alt="${data.title}" style="display: block;margin-left: auto;margin-right: auto;
  width: 40%;border-color: azure;border-width: 30px;">
        <p>${data.explanation}</p>
      `;
    } else {
      document.getElementById('output').innerHTML = `<p>Media type not supported.</p>`;
    }
  } catch (error) {
    document.getElementById('output').innerHTML = `<p>HAHA, I DONT WANT TO GIVE YOU ANY: ${error}</p>`;
  }
}
