import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const CounterTime = () => {
  const [sec, setsec] = useState(60);
  const [start, end] = useState(false);

  useEffect(() => {
    let interval;

    if (start) {
        interval = setInterval(()=>setsec((prev)=>prev-1))
    }
    return () => {};
  }, []);

  const handlereset = () => {
    sec(60);
    start(flase);
  };

  const handleStart = () => {
    end(!start);
  };
  return (
    <View>
      <Text>{sec}</Text>
      <Button onPress={handlereset} title="start" />
      <Button onPress={handleStart} title="reset" />
    </View>
  );
};

export default CounterTime;

const styles = StyleSheet.create({});
