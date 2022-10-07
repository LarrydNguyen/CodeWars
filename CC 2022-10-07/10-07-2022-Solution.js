// Remove anchor from URL
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    //P: string
    //R: string but part of the string
    //E: ('www.codewars.com#about')// 'www.codewars.com'
        //('www.codewars.com/katas/?page=1#about')// 'www.codewars.com/katas/?page=1'
    //P: see if there is a # 
      // if there is find the index of the # and slice it from the beginning to the index of the #
    if(url.includes('#')){
      let indexNum = url.indexOf('#')
      return url.slice(0, indexNum)
    }else {
      return url
    }
  }