//Write a function that when given a URL as a string, parses out just the domain name and return it as a string. For example: 

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("http://www.cnet.com") == "cnet"

// download jsbench.me for test cases bench marks. 

// .split()
// .replace()


// string with special characters
// return only the domain name nothing else 
// split.() the string and determine where the domain would start/end
// .replace the url with just the domain

function domainName(url) {
    let arr = url.replace('https://', '').replace('http://', '').split('.')
    if (arr[0] === 'www') {
      return arr[1]
    } else {
      return arr[0]
    }
  }
  
  console.log(domainName("http://github.com/carbonfive/raygun"), 'github')
  console.log(domainName("http://www.zombie-bites.com"), 'zombie-bites')
  console.log(domainName("https://www.cnet.com"), 'cnet')
  
  
  
  
  // Another solution:
  
  // function domainName(url) {
  //   return
  // url.replace('https://', '').replace('http://', '').replace('www','').split('.')[0]
  // }
  
  // console.log(domainName("http://github.com/carbonfive/raygun"), 'github')
  // console.log(domainName("http://www.zombie-bites.com"), 'zombie-bites')
  // console.log(domainName("https://www.cnet.com"), 'cnet')