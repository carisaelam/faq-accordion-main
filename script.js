import faqData from "./faqData.js";

const faqItemsContainer = document.querySelector(".faq__items__container");

//map over faqData and return a card instance for each question
const faqItemCards = faqData.map(
  (item, index) =>
    `<div class="faq__item">
    <div class="faq__question__container">
      <h2 class="faq__question">
        ${item.question}
      </h2>
      <img
        src="assets/images/icon-plus.svg"
        alt="plus icon"
        class="plus__sign"
        data-index="${index}"
      />
    </div>
    <p class="faq__answer" >
     ${item.answer}
    </p>
    </div>`
);

//append itemCards to faqItemContainer
const faqItems = document.createElement("div");
faqItems.innerHTML = faqItemCards.join("");
faqItemsContainer.appendChild(faqItems);

const plusSigns = document.querySelectorAll(".plus__sign");

//expand answer
function expand(e) {
  const index = e.target.dataset.index;
  const answer = document.querySelector(
    `.faq__item:nth-child(${parseInt(index) + 1}) .faq__answer`
  );
  const selectedPlus = e.target;
  if (answer.style.display === "" || answer.style.display === "none") {
    answer.style.display = "block";
    selectedPlus.src = "assets/images/icon-minus.svg"; // Change plus sign to minus
  } else {
    answer.style.display = "none";
    selectedPlus.src = "assets/images/icon-plus.svg"; // Change minus sign to plus
  }
}

plusSigns.forEach((plusSign) => {
  plusSign.src = "assets/images/icon-plus.svg";
  plusSign.addEventListener("click", expand);
});
