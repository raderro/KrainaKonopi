document.addEventListener('DOMContentLoaded', function() {
    let balance = parseFloat(localStorage.getItem('balance')) || 100.00;
    let betAmount = parseFloat(localStorage.getItem('betAmount')) || 1.00;

    const symbols = ["🍒", "🔔", "🍋", "🍉", "7️⃣", "📚"];
    const slots = [];
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 3; j++) {
            slots.push(document.getElementById(`slot${i}-${j}`));
        }
    }

    const balanceDisplay = document.getElementById('balance');
    const betAmountDisplay = document.getElementById('betAmount');
    const messageDisplay = document.getElementById('message');
    const bigWinDisplay = document.getElementById('bigWin');
    const countingWinDisplay = document.getElementById('countingWin');
    const userBalanceDisplay = document.getElementById('userBalance');

    const updateBalanceDisplay = () => {
        balanceDisplay.textContent = balance.toFixed(2);
        userBalanceDisplay.textContent = balance.toFixed(2);
        localStorage.setItem('balance', balance.toFixed(2));
    };

    const updateBetAmountDisplay = () => {
        betAmountDisplay.textContent = betAmount.toFixed(2);
        localStorage.setItem('betAmount', betAmount.toFixed(2));
    };

    const clearWinningSlots = () => {
        slots.forEach(slot => slot.classList.remove('winning-slot'));
    };

    updateBalanceDisplay();
    updateBetAmountDisplay();

    document.getElementById('increaseBet').addEventListener('click', () => {
        if (betAmount < balance) {
            betAmount += 1.00;
            updateBetAmountDisplay();
        }
    });

    document.getElementById('decreaseBet').addEventListener('click', () => {
        if (betAmount > 1.00) {
            betAmount -= 1.00;
            updateBetAmountDisplay();
        }
    });

    document.getElementById('spinButton').addEventListener('click', () => {
        if (balance >= betAmount) {
            clearWinningSlots();
            balance -= betAmount;
            updateBalanceDisplay();

            let results = [];
            let bookCount = 0;
            const spinDuration = 1500;

            slots.forEach((slot, index) => {
                setTimeout(() => {
                    const result = symbols[Math.floor(Math.random() * symbols.length)];
                    results.push(result);
                    slot.style.transform = `translateY(-100%)`;
                    setTimeout(() => {
                        slot.textContent = result;
                        slot.style.transform = `translateY(0)`;

                        if (result === "📚") {
                            bookCount++;
                        }
                    }, 250);
                }, (index % 5) * 200);
            });

            setTimeout(() => {
                let payout = 0;
                const winningSlots = [];

                if (bookCount >= 7) {
                    alert("Wygrałeś 20 darmowych obrotów!");
                    let freeSpins = 20;
                    
                    const runFreeSpins = () => {
                        if (freeSpins > 0) {
                            freeSpins--;
                            spin();
                        }
                    };
    
                    runFreeSpins();
                }
    

                for (let i = 0; i < 3; i++) {
                    const rowStart = i * 5;
                    if (results[rowStart] === results[rowStart + 1] && results[rowStart + 1] === results[rowStart + 2] &&
                        results[rowStart + 2] === results[rowStart + 3] && results[rowStart + 3] === results[rowStart + 4]) {
                        payout += (results[rowStart] === "7️⃣" ? betAmount * 15 : betAmount * 10);
                        winningSlots.push(rowStart, rowStart + 1, rowStart + 2, rowStart + 3, rowStart + 4);
                    }
                }

                for (let i = 0; i < 5; i++) {
                    if (results[i] === results[i + 5] && results[i + 5] === results[i + 10]) {
                        payout += (results[i] === "7️⃣" ? betAmount * 10 : betAmount * 5);
                        winningSlots.push(i, i + 5, i + 10);
                    }
                }

                if (payout > 0) {
                    winningSlots.forEach(index => slots[index].classList.add('winning-slot'));

                    balance += payout;

                    if (payout >= betAmount * 10) {
                        bigWinDisplay.style.display = 'block';
                        countingWinDisplay.textContent = "0.00";

                        let currentCount = 0.00;
                        const increment = payout / 100;
                        const counterInterval = setInterval(() => {
                            currentCount += increment;
                            if (currentCount >= payout) {
                                currentCount = payout;
                                clearInterval(counterInterval);
                                setTimeout(() => {
                                    bigWinDisplay.style.display = 'none';
                                    updateBalanceDisplay();
                                }, 3000);
                            }
                            countingWinDisplay.textContent = currentCount.toFixed(2) + " zł";
                        }, 20);
                    } else {
                        updateBalanceDisplay();
                    }

                    messageDisplay.textContent = `Wygrałeś ${payout.toFixed(2)} zł!`;
                } else {
                    messageDisplay.textContent = "Spróbuj ponownie!";
                }
            }, spinDuration + 500);
        } else {
            messageDisplay.textContent = "Niewystarczające saldo!";
        }
    });
});

document.getElementById('loginButton').addEventListener('click', function() {
    const nickname = document.getElementById('nickname').value;
    if (nickname) {
        localStorage.setItem('nickname', nickname);
        localStorage.setItem('balance', 100.00);
        updateUI();
    }
});

function updateUI() {
    const nickname = localStorage.getItem('nickname');
    const balance = parseFloat(localStorage.getItem('balance')).toFixed(2);
    if (nickname) {
        document.querySelector('.login-form').classList.add('hidden');
        document.getElementById('userNickname').textContent = nickname;
        document.getElementById('userBalance').textContent = balance;
        document.getElementById('userInfo').classList.remove('hidden');
        document.getElementById('gameSelection').classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', updateUI);

let freeSpins = 0;

function spin() {
    if (freeSpins > 0) {
        freeSpins--;
        spin();
    }
}

document.getElementById('spinButton').addEventListener('click', spin);

function updateFreeSpinsDisplay() {
    const freeSpinsDisplay = document.getElementById('freeSpins');
    if (freeSpinsDisplay) {
        freeSpinsDisplay.textContent = `Darmowe obroty: ${freeSpins}`;
    }
}
