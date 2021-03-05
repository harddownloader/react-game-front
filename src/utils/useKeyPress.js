import { useState, useEffect, useRef } from 'react';

// https://usehooks.com/useKeyPress/
// Usage
function App() {
  // Call our hook for each key that we'd like to monitor
  const happyPress = useKeyPress('h');
  const sadPress = useKeyPress('s');
  const robotPress = useKeyPress('r');
  const foxPress = useKeyPress('f');

  return (
    <div>
      <div>h, s, r, f</div>
      <div>
        {happyPress && '😊'}
        {sadPress && '😢'}
        {robotPress && '🤖'}
        {foxPress && '🦊'}
      </div>
    </div>
  );
}

// Hook
function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);
  // let keyPressed = useRef(false)

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
      // keyPressed.current = true
      console.log('down');
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
      // keyPressed.current = false
      console.log('up');
    }
  };

  // Add event listeners
  useEffect(() => {
    // console.log('redner userkeypress useEffect')
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  // return keyPressed.current;
  return keyPressed;
}

export default useKeyPress;
