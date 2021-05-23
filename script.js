(function() {
  const eleInput = document.getElementById('search');
  let clicks = 0;
  let res = '';

  const digitMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  const eleKeypad = document.getElementById('keypad');
  eleKeypad.addEventListener('click', function(event) {
    const btnValue = event.target.closest('button').value;
    incrementClicks(btnValue, 300);
  });

  let timerId;
  function incrementClicks(value, wait) {
    clicks++;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      if (value == '7' || value == '9') clicks = (clicks - 1) % 4;
      else clicks = (clicks - 1) % 3;

      res += digitMap[value][clicks];
      eleInput.setAttribute('value', res);
      clicks = 0;
    }, wait);
  }
})();
