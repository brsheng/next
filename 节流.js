function throttle(fn, delay) {
  let start = Date.now();
  return function () {
    let last = Date.now();
    if (last - start > delay) {
      fn.apply(this, arguments);
      start = last;
    }
  }
}