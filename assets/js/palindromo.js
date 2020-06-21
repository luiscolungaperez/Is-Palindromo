const formatWord = (word) => {
  let newWord = "";
  const wordLower = word.toLowerCase();
  for (let i = 0; i < wordLower.length; i++) {
    if (wordLower[i] !== " ") {
      newWord = newWord + wordLower[i];
    }
  }
  return newWord;
};

const isPalindrome = (word) => {
  const newWord = formatWord(word);

  i = 0;
  j = newWord.length - 1;

  while (newWord[i] === newWord[j]) {
    if (i === j || (i !== j && newWord[i] === newWord[j])) {
      return "Es palindromo";
      break;
    }
    i++;
    j--;
  }

  if (newWord[i] !== newWord[j]) {
    return "No es palindromo";
  }
};

const execute = () => {
  words = document.getElementById("word").value;
  document.getElementById("content").innerHTML = words;
  document.getElementById("result").innerHTML = isPalindrome(words);
  document.getElementById("word").value = "";
};
