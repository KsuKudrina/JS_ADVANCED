const mockDatabase = [
    { title: "Новость 1", content: "Содержимое новости 1..." },
    { title: "Новость 2", content: "Содержимое новости 2..." },
    { title: "Новость 3", content: "Содержимое новости 3..." },
    // ... другие статьи
  ];

  const button = document.querySelector(".load-button");
  const newsContainer = document.querySelector(".news-container");

  function fetchNews() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          reject("Ошибка загрузки");
        } else {
          resolve(mockDatabase);
        }
      }, 2000);
    });
  }

  button.addEventListener("click", () => {
    fetchNews()
      .then((data) => {
        data.forEach((e) => {
          newsContainer.insertAdjacentHTML(
            "beforeend",
            `
      <div>
        <h3 class="title">${e.title}</h3>
        <p class="content">${e.content}</p>
    </div>`
          );
        });
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  });