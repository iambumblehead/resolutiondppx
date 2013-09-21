resolutiondppx
==============
**(c)[Bumblehead][0], 2013** [MIT-license](#license)  

### OVERVIEW:

Get the pixel-based resolution of the host device.

Include this script and then do something like this:

```javascript
console.log("device resolution is " + resolutiondppx);
// device resolution is 1
```

[0]: http://www.bumblehead.com                            "bumblehead"

---------------------------------------------------------
#### <a id="more-information"></a>More Information:

device resolution is obtained differently depending upon browser (webkit or non-webkit). 

Webkit supports pixel-based resolutions (dots per pixel, dppx, dots/pixel). The W3C [added standards][3] for pixel resolution styles. New browsers [support][4] them (not the way webkit does). 

Webkit environments provide easy access to device resolution:

```javascript
// webkit
resolution = window.devicePixelRatio;
// spidermonkey
window.matchMedia('(min-resolution: 2dppx)').matches
```

Example `devicePixelRatio` values are `1`, `2` and `2.25`. [This document][5] has examples using these values.

Better understand this script by [viewing its source][6].


[1]: https://developer.mozilla.org/en-US/docs/Web/API/window.matchMedia
"matchmedia"
[2]: http://caniuse.com/matchmedia "matchmedia"
[3]: http://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/ "pixel"
[4]: https://developer.mozilla.org/en-US/docs/Web/CSS/resolution "resolution style"
[5]: http://www.quirksmode.org/blog/archives/2012/07/more_about_devi.html
"matchmedia"
[6]: https://github.com/iambumblehead/resolutiondppx/blob/master/resolutiondppx.js 
"resolutiondppx source"

---------------------------------------------------------
#### <a id="install"></a>INSTALL:

resolutiondppx may be downloaded directly or installed through `npm`.

 * **npm**   

 ```bash
 $ npm install resolutiondppx
 ```

 * **Direct Download**
 
 ```bash  
 $ git clone https://github.com/iambumblehead/resolutiondppx.git
 $ cd resolutiondppx && npm install
 ```

---------------------------------------------------------

#### <a id="usage">USAGE:

Coerce `resolutiondppx` to a string value.

  ```javascript
  console.log("device resolution is " + resolutiondppx);
  // device resolution is 1
  console.log("" + resolutiondppx);
  // 1
  console.log("resolution is :res".replace(/:res/, resolutiondppx);
  // resolution is 1
  ```

---------------------------------------------------------

#### <a id="license">License:

 ![scrounge](http://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2012 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
