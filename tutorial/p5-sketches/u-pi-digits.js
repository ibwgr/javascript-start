function setup() {
    createCanvas(200, 200)
    background('beige')
  
    const pi = "3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360"
    const len = pi.length
    let idx = 0
    let x = 0
    let y = 10
    let lineIdx = 0
    const charWidth = 10
  
    while(idx < len){
      const nr = Number(pi[idx])
  
      if(nr === 1){
        fill('red')
      }else{
        fill('black')
      }
  
      text(pi[idx], x, y)
      idx = idx + 1
      lineIdx = floor((idx * charWidth) / width) + 1
      x = (x + charWidth) % width
      y = lineIdx * 10
    }
  }