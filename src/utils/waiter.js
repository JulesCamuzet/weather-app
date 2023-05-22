const waiter = (timeMs) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeMs);
  })
}

export default waiter;