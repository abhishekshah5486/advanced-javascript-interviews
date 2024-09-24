// // let obj = {
// //     a: 10,
// //     b: {
// //         c: 20
// //     }
// // }

// // const createClone = (obj) => {
// //     let clonedObj = {};
// //     for (let key in obj) {
// //         if (typeof obj[key] === 'object') {
// //             clonedObj[key] = createClone(obj[key]);
// //         } else {
// //             clonedObj[key] = obj[key];
// //         }
// //     }
// //     return clonedObj;
// // }

// // console.log(createClone(obj));



// // const fn = (fn, n) => {

// // }

// // function take(fn, num) {
// //     return function() {
// //         return fn(num);
// //     };
// // }


// function bankAccount(openingBalance) {
//     let balance = openingBalance;
  
//     return {
//       deposit: function(amount) {
//         if (amount > 0) {
//           balance += amount;
//           return `Deposited ${amount}. New balance: ${balance}`;
//         } else {
//           return "Invalid deposit amount";
//         }
//       },
  
//       withdraw: function(amount) {
//         if (amount > 0) {
//           if (amount <= balance) {
//             balance -= amount;
//             return `Withdrawn ${amount}. New balance: ${balance}`;
//           } else {
//             return "Insufficient funds";
//           }
//         } else {
//           return "Invalid withdrawal amount";
//         }
//       },
  
//       getBalance: function() {
//         return balance;
//       }
//     };
//   }


 // ChessPiece constructor function
function ChessPiece(name, color, position) {
    this.name = name;
    this.color = color;
    this.position = position;
  }
  
  ChessPiece.prototype.moveTo = function(newPosition) {
    this.position = newPosition;
    console.log(`${this.color} ${this.name} moved to ${newPosition}`);
  };
  
  // Rook constructor function
  function Rook(color, position) {
    ChessPiece.call(this, 'Rook', color, position);
  }
  
  // Inherit from ChessPiece
  Rook.prototype = Object.create(ChessPiece.prototype);
  Rook.prototype.constructor = Rook;
  
  // Override moveTo for Rook
  Rook.prototype.moveTo = function(newPosition) {
    const [currentFile, currentRank] = this.position.split('');
    const [newFile, newRank] = newPosition.split('');
  
    if (currentFile === newFile || currentRank === newRank) {
      ChessPiece.prototype.moveTo.call(this, newPosition);
    } else {
      console.log(`Invalid move for ${this.color} ${this.name}: ${this.position} to ${newPosition}`);
    }
  };
  
  // Bishop constructor function
  function Bishop(color, position) {
    ChessPiece.call(this, 'Bishop', color, position);
  }
  
  // Inherit from ChessPiece
  Bishop.prototype = Object.create(ChessPiece.prototype);
  Bishop.prototype.constructor = Bishop;
  
  // Override moveTo for Bishop
  Bishop.prototype.moveTo = function(newPosition) {
    const [currentFile, currentRank] = this.position.split('');
    const [newFile, newRank] = newPosition.split('');
  
    if (Math.abs(currentFile.charCodeAt(0) - newFile.charCodeAt(0)) === 
        Math.abs(currentRank - newRank)) {
      ChessPiece.prototype.moveTo.call(this, newPosition);
    } else {
      console.log(`Invalid move for ${this.color} ${this.name}: ${this.position} to ${newPosition}`);
    }
  };
  
  // Test scenarios
  const whiteRook = new Rook('White', 'A1');
  whiteRook.moveTo('A4');  // Valid move
  whiteRook.moveTo('D1');  // Valid move
  whiteRook.moveTo('C3');  // Invalid move
  
  const blackBishop = new Bishop('Black', 'C1');
  blackBishop.moveTo('E3');  // Valid move
  blackBishop.moveTo('C3');  // Invalid move
  blackBishop.moveTo('A4');  // Invalid move