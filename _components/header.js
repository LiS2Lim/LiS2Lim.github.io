class newClass extends HTMLElement {
  connectedCallback() {
    let newLabel = document.createElement('label') // 방법1 html 생성 속도가 좀 더 빠름
    this.appendChild(newLabel)
    
    this.innerHTML = `<label>안뇨오옹</label><input>`
  }
}

customElements.define('custom-input', newClass)
