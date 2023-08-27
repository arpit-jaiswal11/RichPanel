const changePlanBtn = document.getElementById("changePlanBtn");
changePlanBtn.addEventListener("click", () => {
  window.location = "/";
});

document.getElementById("cancelBtn").addEventListener("click", () => {
  axios
    .post(`/subscribe/cancel`)
    .then((response) => {
      window.location.href = `/dashboard`;
    })
    .catch((error) => {
      console.error("Plan Change Failed", error);
    });
});
