import NProgress from "nprogress";

export const handleUrlProgress = (router) => {
  router.events.on("routeChangeStart", handleStart);
  router.events.on("routeChangeComplete", handleStop);
  router.events.on("routeChangeError", handleStop);

  return () => {
    router.events.off("routeChangeStart", handleStart);
    router.events.off("routeChangeComplete", handleStop);
    router.events.off("routeChangeError", handleStop);
  };
};

const handleStart = (url) => {
  NProgress.start();
};

const handleStop = () => {
  NProgress.done();
};
