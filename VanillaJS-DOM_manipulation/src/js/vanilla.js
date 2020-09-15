let mainCount = 0;

setTimeout(() => {
  const modernist = document.getElementById("modernist");
  modernist.textContent = "What's up, Doc?";
  modernist.style.fontSize = "26px";
  modernist.style.fontStyle = "italic";
  modernist.style.color = "#00BFFF";
}, 1500);

const hiddenElement = (e) => {
  e.target.style.visibility = "hidden";
  if (menuArr.filter((it) => it.style.visibility).length === menuArr.length) {
    mainFunction();
  }
};

const phrase = () => {
  const curcus = document.querySelector(".curcus");
  mainCount += 1;
  if (mainCount === 1) {
    curcus.style.fontSize = "26px";
    curcus.textContent =
      "По-моему, вам крайне необходимо взять меня на работу, ребята!";
    curcus.style.color = "#ADFF2F";
  }
  if (mainCount === 2) {
    curcus.style.fontSize = "26px";
    curcus.textContent =
      "Ну хватит, хватит, я согласен, но есть несколько условий!";
    curcus.style.color = "#7FFFD4";
  }
  if (mainCount === 3) {
    curcus.style.fontSize = "32px";
    curcus.textContent = "Всё, договорились, где расписаться?!";
    curcus.style.color = "#FF8C00";
    menuArr.forEach((item) =>
      item.removeEventListener("mouseover", hiddenElement)
    );
  }
};

const mainFunction = () => {
  const curcus = document.querySelector(".curcus");
  const image = document.getElementById("counter");
  let counter = 4;

  image.children[0].remove();
  curcus.textContent = "меню появится через:";
  curcus.style.color = "#FFF";
  curcus.style.fontSize = "38px";
  image.style.width = "380px";
  image.style.textAlign = "center";
  image.style.fontSize = "50px";

  const stopInterval = setInterval(() => {
    counter -= 1;
    image.textContent = counter;
  }, 1000);
  setTimeout(() => {
    clearInterval(stopInterval);
    menuArr.map((it) => (it.style.visibility = ""));
    phrase();
    image.removeAttribute("style");
    image.textContent = "";
    const img = document.createElement("IMG");
    image.appendChild(img).setAttribute("src", "img/png1.png");
  }, 4000);
};

const menuArr = Array.from(document.querySelector(".menu").children);

menuArr.forEach((item) => item.addEventListener("mouseover", hiddenElement));
