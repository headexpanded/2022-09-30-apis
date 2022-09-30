let isConnected = false;
const strNotConnected = "you are NOT connected";
const strConnected = "you are connected";

//with a ternary

console.log(isConnected ? strConnected : strNotConnected);

//in a template string

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  isConnected = !isConnected;
  const msg = `you are${isConnected ? "" : " not"} connected.`;
  console.log(msg);
});

const user2 = {
  username: "toto21",
  status: isConnected ? "connected" : "disconnected",
};
