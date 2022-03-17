const nums = []
while(nums.length < 5){
    const num = Math.round(Math.random() * 10)
    if(nums.includes(num) === false){
        nums.push(num)
    }
}
const display = nums.join(",")