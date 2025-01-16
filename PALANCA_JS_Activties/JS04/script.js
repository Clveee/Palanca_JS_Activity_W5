const startInput = document.getElementById("start-date");
const endInput = document.getElementById("end-date");
const calculateButton = document.getElementById("calculate-button");
const resultDiv = document.getElementById("result");

calculateButton.addEventListener("click", () => {
  const startDate = new Date(startInput.value);
  const endDate = new Date(endInput.value);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    resultDiv.textContent = "Invalid date format. Please use dd/mm/yyyy.";
    return;
  }

  const difference = Math.abs(endDate.getTime() - startDate.getTime());
  const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

  resultDiv.textContent = `The difference between the two dates is ${days} days.`;
});