import React, { useState, useEffect } from 'react';

const App = () => {
  const initialState = {
    score: 0,
    bonusCost: 20,
    bonusMultiplier: 1,
    clickCooldown: 800,
    cooldownBonus: 0,
    cooldownBonusCost: 50,
    customScore: '',
    bonusCount: 0,
    showWinner: false,
    password: '',
    setPassword: false,
    isAdmin: false,
  };

  const [state, setState] = useState(() => {
    const storedState = JSON.parse(localStorage.getItem('clickerState'));
    return storedState || initialState;
  });

  const saveStateToLocalStorage = () => {
    localStorage.setItem('clickerState', JSON.stringify(state));
  };

  const handleClick = () => {
    setState((prevState) => {
      if (prevState.clickCooldown === 0) {
        const clickPoints = 1 + prevState.bonusCount;
        return {
          ...prevState,
          score: prevState.score + clickPoints,
          clickCooldown: 800 - prevState.cooldownBonus,
          showWinner: prevState.score + clickPoints >= 9999,
        };
      }
      return prevState;
    });
  };

  const handleBuyBonus = () => {
    if (state.score >= state.bonusCost) {
      setState((prevState) => ({
        ...prevState,
        score: prevState.score - prevState.bonusCost,
        bonusMultiplier: prevState.bonusMultiplier + 30,
        bonusCost: prevState.bonusCost + 30,
        bonusCount: prevState.bonusCount + 1,
        clickCooldown: Math.max(200, prevState.clickCooldown - 100),
      }));
    } else {
      alert("Not enough points to buy the bonus!");
    }
  };

  const handleBuyCooldownBonus = () => {
    if (state.score >= state.cooldownBonusCost) {
      setState((prevState) => ({
        ...prevState,
        score: prevState.score - prevState.cooldownBonusCost,
        cooldownBonus: prevState.cooldownBonus + 100,
        cooldownBonusCost: prevState.cooldownBonusCost + 100,
      }));
    } else {
      alert("Not enough points to buy the cooldown bonus!");
    }
  };

  const handleSetCustomScore = () => {
    if (state.isAdmin) {
      setState((prevState) => ({
        ...prevState,
        setPassword: true,
      }));
    } else {
      alert('You are not in admin mode');
    }
  };

  const handleReset = () => {
    setState(initialState);
  };

  const handleLogout = () => {
    setState((prevState) => ({
      ...prevState,
      isAdmin: false,
      setPassword: false,
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prevState) => ({
        ...prevState,
        clickCooldown: Math.max(0, prevState.clickCooldown - 100),
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    saveStateToLocalStorage();
  }, [state]);

  return (
    <div className="app-container">
    <h1 className="app-title">Clicker App</h1>
    <p className="score">Score: {state.score}</p>
    <p className="cooldown">Click Cooldown: {state.clickCooldown / 1000} seconds</p>
    <button className="click-button" onClick={handleClick} disabled={state.clickCooldown > 0}>
      Click me!
    </button>
    <button className="buy-bonus-button" onClick={handleBuyBonus}>
      Buy Bonus (Cost: {state.bonusCost})
    </button>
    <button className="buy-cooldown-bonus-button" onClick={handleBuyCooldownBonus}>
      Buy Cooldown Bonus (Cost: {state.cooldownBonusCost})
    </button>

    {state.setPassword ? (
      <div className="set-custom-score-container">
        <div>
          <label>Set Custom Score: </label>
          <input
            type="text"
            className="custom-score-input"
            value={state.customScore || ''}
            onChange={(e) =>
              setState((prevState) => ({ ...prevState, customScore: e.target.value }))
            }
          />
          <button className="set-custom-score-button" onClick={handleSetCustomScore}>
            Set
          </button>
        </div>
      </div>
    ) : (
      <div className="admin-mode-container">
        {state.isAdmin ? (
          <div>
            <label>Password: </label>
            <input
              type="password"
              className="password-input"
              value={state.password || ''}
              onChange={(e) =>
                setState((prevState) => ({ ...prevState, password: e.target.value }))
              }
            />
            <button className="submit-password-button" onClick={handleSetCustomScore}>
              Submit
            </button>
          </div>
        ) : (
          <div>
            <button
              className="enter-admin-mode-button"
              onClick={() => setState((prevState) => ({ ...prevState, isAdmin: true }))}
            >
              Enter Admin Mode
            </button>
          </div>
        )}
      </div>
    )}

    {state.showWinner && (
      <div className="winner-container">
        <h2>Congratulations! You are the winner!</h2>
      </div>
    )}

    {state.isAdmin && (
      <div className="admin-logout-container">
        <button className="admin-logout-button" onClick={handleLogout}>
          Logout from Admin Mode
        </button>
      </div>
    )}

    <div className="reset-all-container">
      <button className="reset-all-button" onClick={handleReset}>
        Reset All
      </button>
    </div>
  </div>
  );
};

export default App;
