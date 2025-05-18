import "./style.css";
import logo from "./assets/logo.png";
import userAvatar from "./assets/user-avatar.jpeg";
import heartIcon from "./assets/icon-heart.png";
import dmIcon from "./assets/icon-dm.png";
import commentIcon from "./assets/icon-comment.png";
import { setupCounter } from "./counter.ts";
import { posts } from "./posts.ts";
import type Post from "./posts.ts";

function renderCardHeader(post: Post): string {
  return `
     <div class="card-header padding ">
            <img 
              src="${post.avatar}" 
              alt="user profile photo of ${post.name}" 
              class="avatar-img card-img round"
              loading="lazy" 
              />
            <div>
              <h2>${post.name}</h2>
              <p>${post.location}</p>
            </div>
        </div>
  `;
}

function renderCardContent(post: Post): string {
  return `
     <div class="card-description padding">
          <ul class="card-icons">
            <li>
              <button class="btn"><img src="${heartIcon}" alt=""/></button>
            </li>
            <li>
              <img src="${commentIcon}" alt=""/>
            </li>
            <li>
              <img src="${dmIcon}" alt=""/>
            </li>
          </ul>
          <p>
            <span class="like-count">${post.likes}</span>
            <span>likes</span>
          </p>
          <p>
            <span>${post.username}</span>
            ${post.comment}
          </p>
        </div>
  `;
}

function renderCardImg(post: Post): string {
  return `
      <div>
          <img src="${post.post}" alt="photo of ${post.name}" class="card-main-img"  loading="lazy"  />
        </div>
  `;
}

function renderCards() {
  return posts
    .map(
      (post: Post) => `
      <div class="container card">
        ${renderCardHeader(post)}
        ${renderCardImg(post)}
        ${renderCardContent(post)}
      </div> 
  `
    )
    .join("");
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header>
    <div class="container">
      <div class="images padding">
        <img src="${logo}"  alt="Oldagram logo - stylized black script text" class="logo-img">
        <img src="${userAvatar}"  alt="user profile photo in oval frame"  class="avatar-img round">
      </div> 
    </div>
  </header>
  <main>
    ${renderCards()} 
  </main>
`;

const btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".btn");
const spansList: NodeListOf<HTMLSpanElement> =
  document.querySelectorAll(".like-count");
//console.log("spanlist",spansList)
//console.log("btns",btns)

setupCounter(btns, spansList);
