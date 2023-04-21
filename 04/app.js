// function commonLetters(word1, word2) {
//   let count = 0;
//   let w1 = word1.split('');
//   let w2 = word2.split('');
//   for (let i = 0; i < w1.length; i++) {
//     const letter = w1[i];
//     if (!w2.includes(letter)) {
//       for (let j = 0; j < w2.length; j++) {
//         if (w2[j] === letter) {
//           w2 = w2.splice(j, 1);
//           count++;
//           break;
//         }
//       }
//     }

//   }
//   return count;
// }

// const word1 = "codewars";
// const word2 = "hackerrank";
// console.log(commonLetters(word1, word2));
// console.log(commonLetters(word2, word1));
function commonLetters(word1, word2) {
    let count = 0;
    let i = 0;
    while (i < word1.length) {
      const letter = word1.charAt(i);
      if (word2.includes(letter)) {
        word2 = word2.replace(letter, '');
        i++;
      } else {
        word1 = word1.substring(0, i) + word1.substring(i + 1);
        count++;
      }
    }
    count += word2.length;
    return count;
  };
  
  const word1 = "hello";
  const word2 = "helo";
  console.log('Removed letters in total: ' + commonLetters(word1, word2));