const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Use the date object
const today = new Date();

// Get the current year
year.innerHTML = <span>${today.getFullYear()}</span>;

// Get the last modified date
const modifiedDate = new Date(document.lastModified);
lastModified.innerHTML = `<span class="modified">Last Modification: ${new Intl.DateTimeFormat(
  "en-US",
  {
    dateStyle: "short",
    timeStyle: "short",
  }
).format(modifiedDate)}</span>`;

if (!document.lastModified) {
  lastModified.innerHTML = "Last Modification: Not Available";
}
