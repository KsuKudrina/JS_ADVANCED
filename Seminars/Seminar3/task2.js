const inputEl = document.querySelector("#input-text");
      const savedText = document.querySelector("#saved-text");
      let cloud = JSON.parse(localStorage.getItem("cloud")) || [];

      const updateCloud = () => {
        savedText.innerHTML = "";
        cloud.forEach((item) => {
          const cloudItem = document.createElement("p");
          cloudItem.textContent = item;
          savedText.append(cloudItem);
        });
        localStorage.setItem("cloud", JSON.stringify(cloud));
      };

      savebtn.addEventListener("click", () => {
        const newItem = inputEl.value.trim();
        if (newItem != "") {
          cloud.push(newItem);
          inputEl.value = "";
          updateCloud();
        }
        alert("Текст сохранен");
      });

      loadbtn.addEventListener("click", () => {
        savedText.textContent = cloud ? cloud : "Пусто";
      });

      clearbtn.addEventListener("click", () => {
        localStorage.removeItem("cloud");
        savedText.innerHTML = "";
        alert("Текст удален");
      });