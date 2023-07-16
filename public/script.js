let ctx = document.getElementById("barChart").getContext("2d");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
    ],
    datasets: [
      {
        label: "取引先数",
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const header = document.querySelector(".site-header");
const img = document.querySelector(".home-img");

window.addEventListener("scroll", () => {
  const imgBottom = img.offsetHeight;
  if (window.scrollY > imgBottom) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

window.dispatchEvent(new Event("scroll"));
