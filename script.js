function change() {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 1000);
    }).then(function() {
        document.getElementById("para").innerHTML = "Successfully used promise and .then";
    });
}

function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 1000);
  });
}

async function demo() {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  return a+b
}

function change1() {
  demo().then((sum)=>{
    document.getElementById('para1').innerHTML = sum;
  })
}

function change2() {
  Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 1000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 1000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(function(values) {
    alert(values);
});
}
