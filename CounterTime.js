
import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const Timer = () => {
  const [seconds, setSeconds] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, seconds]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setSeconds(60);
    setIsRunning(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{seconds}</Text>
      <View>
        <Button
          title={isRunning ? "Pause" : "Start"}
          onPress={handleStartPause}
        />
        <Button title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
};
export default Timer;
