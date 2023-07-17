//Задача № 1
function cachingDecoratorNew(func) {
  let cache = {};
  function wrapper(...args) {
    const hash = md5(args);
    if (hash in cache) {
      console.log('Из кэша: ' + cache[hash]);
        return ('Из кэша: ' + cache[hash]);
    };

    const result = func(...args);
    cache[hash] = result;
    if (Object.keys(cache).length > 5) {
        delete cache[Object.keys(cache)[0]]
    };
    console.log('Вычисляем: ' + result);
    return ('Вычисляем: ' + result);
  };
  return wrapper;
};

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timerId = null;

  function resultFunction (...args) {
    if (!timerId) {
      func(...args);
      resultFunction.count++;
    };

    resultFunction.allCount++;

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
      resultFunction.count++;
    }, delay)
  };

  resultFunction.count = 0;
  resultFunction.allCount = 0;
 
  return resultFunction;
};
