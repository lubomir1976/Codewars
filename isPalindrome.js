function isPalindrome(line) {
 
    let q=line.split('').reverse().join('');
    return q==line;
  
  }