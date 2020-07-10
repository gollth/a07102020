export default function flashMessage(message, setPostMessage) {
  setPostMessage(message);
  setTimeout(() => {
    setPostMessage({ message: null });
  }, 1600);
}