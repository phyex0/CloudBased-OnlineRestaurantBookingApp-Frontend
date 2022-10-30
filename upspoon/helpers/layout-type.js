export const isUser = (url) => {
  if (url.includes("user")) {
    return true;
  }
  return false;
};
