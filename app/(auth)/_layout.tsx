import {  Slot, Stack } from 'expo-router';

export default function AuthenticatedLayout() {
  return <Stack>
    <Stack.Screen name="home" />
  </Stack>
}