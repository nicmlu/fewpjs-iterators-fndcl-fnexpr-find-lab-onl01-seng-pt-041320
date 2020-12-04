const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(record) {
  const winner = record.find(w => {
    return w.result === "W";
  });

  if (winner) {
    return winner.year;
  }
}
