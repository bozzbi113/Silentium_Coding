function convertSilentium(i){
  if(i%7===0){
    return `IO `;
  }    
  else if(i%3===0 && i%5===0){
    return `SilentiumIO `;
  } else if(i%4===0){
    return `Silentium `;
  } else {
    return `${i} `
  }
};

function silentium(start, end){
  let temp = '';
  for(let i=start; i<= end; i++){
      temp += convertSilentium(i)
  }
  return temp;
}



describe("silentium", function() {
  it("Should return like expect from 1 to 100", function() {
    expect(`1 2 3 Silentium 5 6 IO Silentium 9 10 11 Silentium 13 IO SilentiumIO Silentium 17 18 19 Silentium IO 22 23 Silentium 25 26 27 IO 29 SilentiumIO 31 Silentium 33 34 IO Silentium 37 38 39 Silentium 41 IO 43 Silentium SilentiumIO 46 47 Silentium IO 50 51 Silentium 53 54 55 IO 57 58 59 SilentiumIO 61 62 IO Silentium 65 66 67 Silentium 69 IO 71 Silentium 73 74 SilentiumIO Silentium IO 78 79 Silentium 81 82 83 IO 85 86 87 Silentium 89 SilentiumIO IO Silentium 93 94 95 Silentium 97 IO 99 Silentium `).toBe(silentium(1,100));
  });
});


describe("convertSilentium", function() {
  it("Should return Silentium if i equals 4", function() {
    expect(`Silentium `).toBe(convertSilentium(4));
  });
  it("Should return SilentiumIO if i equals 15", function() {
    expect(`SilentiumIO `).toBe(convertSilentium(15));
  });
  it("Should return IO if i equals 7", function() {
    expect(`IO `).toBe(convertSilentium(7));
  });
  it("Should return Silentium if i equals 1", function() {
    expect(`1 `).toBe(convertSilentium(1));
  });
});



