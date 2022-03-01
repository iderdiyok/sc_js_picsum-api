let output = document.querySelector('.articles')

fetch('https://picsum.photos/v2/list')
  .then(response => response.json())
  .then(data => {
      console.log(data);
    data.forEach(element => {
        output.innerHTML += `
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <div class="img" style="background-image:url(${element.download_url})"></div>
                    <div class="caption">
                        <h3>${element.author}</h3>
                        <a href="${element.url}">See More!</a>
                    </div>
                </div>
            </div>
        `
    });
})