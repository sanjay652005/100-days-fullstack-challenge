
    const searchBtn = document.getElementById("searchBtn");
    const randomBtn = document.getElementById("randomBtn");
    const resultCard = document.getElementById("resultCard");
    const toggleMode = document.querySelector(".toggle-mode");
    const body = document.body;

    async function fetchCountry(country) {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${country}?fullText=true`
        );
        if (!response.ok) throw new Error("Country not found");
        const data = await response.json();
        displayCountry(data[0]);
      } catch (error) {
        alert("❌ " + error.message);
        resultCard.style.display = "none";
      }
    }

    function displayCountry(country) {
      resultCard.style.display = "block";
      document.getElementById("flag").src = country.flags.svg;
      document.getElementById("name").textContent = country.name.common;
      document.getElementById("capital").textContent = country.capital
        ? country.capital[0]
        : "N/A";
      document.getElementById("population").textContent =
        country.population.toLocaleString();
      document.getElementById("languages").textContent = Object.values(
        country.languages || {}
      ).join(", ");
      const currency = country.currencies
        ? Object.values(country.currencies)[0].name
        : "N/A";
      document.getElementById("currency").textContent = currency;

      const bordersDiv = document.getElementById("borders");
      bordersDiv.innerHTML = "";
      if (country.borders) {
        country.borders.forEach((code) => {
          const btn = document.createElement("span");
          btn.textContent = code;
          btn.classList.add("border-btn");
          btn.addEventListener("click", () => fetchBorderCountry(code));
          bordersDiv.appendChild(btn);
        });
      }
    }

    async function fetchBorderCountry(code) {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${code}`
        );
        const data = await res.json();
        displayCountry(data[0]);
      } catch (error) {
        alert("Failed to load border country.");
      }
    }

    function randomCountry() {
      const randomList = [
        "India",
        "Japan",
        "Brazil",
        "Canada",
        "Egypt",
        "France",
        "Australia",
        "Mexico",
        "Kenya",
        "Thailand",
      ];
      const random = randomList[Math.floor(Math.random() * randomList.length)];
      fetchCountry(random);
    }

    searchBtn.addEventListener("click", () => {
      const country = document.getElementById("countryInput").value.trim();
      if (country) fetchCountry(country);
    });

    randomBtn.addEventListener("click", randomCountry);

    toggleMode.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      toggleMode.textContent = body.classList.contains("dark-mode")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
    });
  