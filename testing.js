// Dummy data untuk username dan password
const dummyData = {
    username: 'user123',
    password: 'password123'
  };
  
  // Fungsi untuk memeriksa username dan password
  function checkCredentials(username, password) {
    return new Promise((resolve, reject) => {
      if (username === dummyData.username && password === dummyData.password) {
        resolve('Credentials are valid');
      } else {
        reject(new Error('Invalid username or password'));
      }
    });
  }

// Fungsi untuk memeriksa saldo
function checkBalance(balance, requiredAmount) {
    return new Promise((resolve, reject) => {
      if (balance >= requiredAmount) {
        resolve('Sufficient balance');
      } else {
        reject(new Error('Insufficient balance'));
      }
    });
  }
// Dummy balance
const userBalance = 1000;
const requiredAmount = 500;

// Memeriksa kredensial dan saldo
checkCredentials('user123', 'password123')
  .then(message => {
    console.log(message); // Output: Credentials are valid
    return checkBalance(userBalance, requiredAmount);
  })
  .then(balanceMessage => {
    console.log(balanceMessage); // Output: Sufficient balance
    console.log("Selamat Anda berhasil");
  })
  .catch(error => {
    console.log(error.message);
  });

// Contoh dengan kredensial salah
checkCredentials('user123', 'wrongpassword')
  .then(message => {
    console.log(message);
    return checkBalance(userBalance, requiredAmount);
  })
  .then(balanceMessage => {
    console.log(balanceMessage);
    console.log("Selamat Anda berhasil");
  })
  .catch(error => {
    console.log(error.message); // Output: Invalid username or password
  });

// Contoh dengan saldo tidak cukup
checkCredentials('user123', 'password123')
  .then(message => {
    console.log(message);
    return checkBalance(userBalance, 1500);
  })
  .then(balanceMessage => {
    console.log(balanceMessage);
    console.log("Selamat Anda berhasil");
  })
  .catch(error => {
    console.log(error.message); // Output: Insufficient balance
  });