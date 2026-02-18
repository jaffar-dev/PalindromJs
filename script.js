const form = document.getElementById('palindrome-form');
const input = document.getElementById('text-input');
const resultPalindrome = document.getElementById('result');

const isPalindrome = (str) => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

form.addEventListener('submit', (e) => {
  // Preventing the page from reloading on form submission
  e.preventDefault(); 
  
  const userText = input.value;

  input.classList.remove('error');
  resultPalindrome.classList.remove('result-success', 'result-failure');

  if (userText.trim() === '') {
    resultPalindrome.innerHTML = "Please input a value";
    resultPalindrome.classList.add('result-failure');
    input.classList.add('error');
    return;
  }

  // Check for palindrome and apply styling classes
  if (isPalindrome(userText)) {
    resultPalindrome.innerHTML = `<strong>${userText}</strong> is a palindrome.`;
    resultPalindrome.classList.add('result-success');
  } else {
    resultPalindrome.innerHTML = `<strong>${userText}</strong> is not a palindrome.`;
    resultPalindrome.classList.add('result-failure');
  }
  
  // Clearing the input field for the next check
  form.reset();
});