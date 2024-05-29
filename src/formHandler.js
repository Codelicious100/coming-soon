document.querySelector("form[name='waitlist']").addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("Form submission triggered"); // Add this line
  const form = event.target;
  const formData = new FormData(form);

  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    });
    alert("You're on the waitlist! 🎉");
    form.reset();
  } catch (error) {
    alert("There was an error submitting the form. Please try again.");
  }
});
