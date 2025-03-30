
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import "../../global.css";
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';

export default function () {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log(email, password);
    
  }

  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <View className='w-full p-4'>
        <Text className='text-black font-bold text-3xl text-center mb-4'>Signup</Text>
        <TextInput 
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            className='bg-white p-4 rounded-lg border border-gray-300 w-full mb-4'
        />
        <TextInput 
            secureTextEntry={true}
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            className='bg-white p-4 rounded-lg border border-gray-300 w-full mb-4'
        />
        <TouchableOpacity 
          className='bg-black px-4 py-2 rounded-lg'
          onPress={handleSignup}
        >
          <Text className='text-white font-bold text-lg text-center'>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}