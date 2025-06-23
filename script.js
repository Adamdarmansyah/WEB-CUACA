document.getElementById("getWeather").addEventListener("click", function () {
    const city = document.getElementById("city").value;
    const apiKey = "32dadcfb1e0db9d87dee0272a7918e71"; // Ganti dengan API key kamu
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Kota tidak ditemukan");
            }
            return response.json();
        })
        .then(data => {
            const location = data.name + ", " + data.sys.country;
            const temperature = data.main.temp + "°C";
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            document.getElementById("location").textContent = location;
            document.getElementById("temperature").textContent = temperature;
            document.getElementById("description").textContent = description;
            document.getElementById("icon").src = iconUrl;

            // Tampilkan hasil cuaca
            const weatherDiv = document.getElementById("weather");
            weatherDiv.classList.remove("hidden");
            weatherDiv.classList.add("show");
        })
        .catch(error => {
            alert("Terjadi kesalahan: " + error.message);
        });
});
