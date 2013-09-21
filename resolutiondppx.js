// Filename: resolutiondppx.js  
// Timestamp: 2013.09.21-15:03:57 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

var resolutiondppx = ((typeof module === 'object') ? module : {}).exports = {
  // 1, 1.5, 2, 2.25, 2.5, 2.75, 3
  getThisRes : function () {
    var r = 1;

    if (typeof window === 'object') {
      if ('devicePixelRatio' in window) {
        r = window.devicePixelRatio;
      } else if ('matchMedia' in window) {
        if (window.matchMedia('(min-resolution: 3dppx)').matches) { 
          r = 3;
        } else if (window.matchMedia('(min-resolution: 2dppx)').matches) { 
          r = 2;
        } else if (window.matchMedia('(min-resolution: 1dppx)').matches) { 
          r = 1;
        }
      }
    }

    if (typeof r === 'number' && r > 1) {
      while (r % 25) r--;    
    }

    return r;
  },
  toString : function () {
    return this.r || (this.r = this.getThisRes());
  }
};
