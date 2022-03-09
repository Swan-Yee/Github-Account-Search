"use strict";

// varible
let root = document.documentElement;
let btnMode = document.getElementById("btn-mode");
let url = "https://api.github.com/users/";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let get = (param) => document.getElementById(`${param}`);
let inputSearch = get("input-search");
let btnSearch = get("btn-search");
let image = get("image");
let name = get("name");
let userName = get("userName");
let joinedDate = get("joinedDate");
let bio = get("bio");
let repo = get("repo");
let followers = get("followers");
let following = get("following");
let user_location = get("user_location");
let twitter = get("twitter");
let website = get("website");
let company = get("company");

let darkMode = false;

// search by button
btnSearch.addEventListener("click", function () {
  if (inputSearch.value !== "") {
    getUserData(inputSearch.value);
  }
});

inputSearch.addEventListener("input", function () {
  if (inputSearch.value !== "") {
    getUserData(inputSearch.value);
  }
});

// get User Data
function getUserData(data) {
  fetch(url + data)
    .then((response) => response.json())
    .then((data) => {
      insertData(data);
    })
    .catch((error) => {
      throw error;
    });
}

// Insert Data
function insertData(data) {
  if (data.message != "Not Found") {
    function checkNull(para1, para2) {
      if (para1 == null || para1 == "") {
        para2.parentElement.classList.add("opacity-50");
        return "Not available";
      } else {
        para2.parentElement.classList.remove("opacity-50");
        return `${para1}`;
      }
    }

    name.innerHTML = data.name;
    userName.innerHTML = `@${data.login}`;
    image.src = data.avatar_url;
    userName.href = data.html_url;
    let datesegments = data.created_at.split("T").shift().split("-");
    joinedDate.innerHTML = `Joined ${datesegments[2]} ${
      months[datesegments[1] - 1]
    } ${datesegments[0]}`;

    if (data.bio) {
      bio.innerHTML = data.bio;
    } else {
      bio.innerHTML = "This profile has no bio";
    }

    repo.innerHTML = data.public_repos;
    followers.innerHTML = data.followers;
    following.innerHTML = data.following;

    twitter.innerHTML = checkNull(data.twitter_username, twitter);
    website.innerHTML = checkNull(data.blog, website);
    company.innerHTML = checkNull(data.company, company);
    user_location.innerHTML = checkNull(data.location, user_location);
  }
}

// Night mode change
btnMode.addEventListener("click", function () {
  if (darkMode == false) {
    root.classList.add("dark");
    darkMode = true;
  } else {
    root.classList.remove("dark");
    darkMode = false;
  }
});

// check nightmode on at local storage
window.onload = function () {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  getUserData("octocat");
};
