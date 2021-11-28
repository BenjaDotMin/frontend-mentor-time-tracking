const currentHours = document.querySelectorAll("h3");
const previousHours = document.querySelectorAll(".card-content p span");
const periods = document.querySelectorAll("ul li");

const fetchData = async period => {
  const allData = await fetch("./wwwroot/js/data.json").then(r => r.json()).catch(() => console.log("Something went wrong"));

  currentHours.forEach((currentHour, i) => {
    currentHour.style.opacity=0;
    setTimeout(() => {
        currentHour.innerHTML = `${allData[i].timeframes[period].current}hrs`;
        currentHour.style.opacity=1;
    }, 300);
  });

  previousHours.forEach((currentHour, i) => {
    currentHour.style.opacity=0;
    setTimeout(() => {
      currentHour.innerHTML = `${allData[i].timeframes[period].previous}hrs`;
      currentHour.style.opacity=1;
    }, 300);    
  });
}

periods.forEach(period => period.addEventListener("click", () => {
    if(period.classList.contains("active")) return;
    periods.forEach(p => p.classList.remove("active"));
    period.classList.add("active");
    fetchData(period.dataset.period);    
}));

