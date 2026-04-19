const activityName = document.getElementById("activity-name");

async function fetchActivity() {
  const response = await fetch("https://apis.scrimba.com/bored/api/activity");
  const data = await response.json();
  activityName.innerHTML = data.activity;
}

document
  .getElementById("get-activity")
  .addEventListener("click", fetchActivity);
