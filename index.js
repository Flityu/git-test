function throttled(fn, delay=500) {
  let timer = null
  return (...args) => {
    if(!timer){
      timer = setTimeout(() => {
        console.log(this)
        fn.apply(this,args)
      },delay);
    }
  }
}
export default throttled
