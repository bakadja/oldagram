function count(btnEl: HTMLButtonElement, spanEl: HTMLSpanElement) {
  const prevCounter = Number(spanEl.innerHTML) 
  let counter = prevCounter

  const setCounter = (count: number) => {
    counter = count
    spanEl.innerHTML = `${counter}`
  }
  btnEl.addEventListener('click', () => setCounter(counter + 1))
}

export function setupCounter(btnEls: NodeListOf<HTMLButtonElement>, spanEls: NodeListOf<HTMLSpanElement> ) {
  for (let index = 0; index < btnEls.length; index++) {
    count(btnEls[index], spanEls[index])
  }
}

