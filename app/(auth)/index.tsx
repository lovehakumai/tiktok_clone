
import { View, Text, TouchableOpacity } from 'react-native';
import "../../global.css";
import { Link, useRouter } from 'expo-router';

export default function () {
  const router = useRouter();

  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='font-bold text-3xl'>Login</Text>
      <TouchableOpacity 
        className='bg-black p-4 rounded-lg'
        onPress={() => router.push('/(tabs)')}
      >
          <Text className='text-white'>This is a button</Text>
      </TouchableOpacity>
      
    </View>
  );
}