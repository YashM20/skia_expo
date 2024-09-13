import { Stack } from 'expo-router';

export default function ExamplesLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          // backgroundColor: '#f4511e',
        },
        headerShown: false,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
    </Stack>
  );
}
