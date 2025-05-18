interface Post {
  name: string;
  username: string;
  location: string;
  avatar: string;
  post: string;
  comment: string;
  likes: number;
}

export const posts: Post[] = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "src/assets/avatar-vangogh.jpg",
    post: "src/assets/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "src/assets/avatar-courbet.jpg",
    post: "src/assets/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "src/assets/avatar-ducreux.jpg",
    post: "src/assets/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];
