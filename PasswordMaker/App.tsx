import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
//Validation Schema 
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length is required')
})
export default function App() {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatedPasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
    const digiChar = '0123456789';
    const specialChar = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChar
    }

    if (lowerCase) {
      characterList += lowerCaseChar
    }

    if (numbers) {
      characterList += digiChar
    }

    if (symbols) {
      characterList += specialChar
    }
    const passwordResult = createPassword(characterList,
      passwordLength)
    setPassword(passwordResult)
  }
  const createPassword = (characters: string,
    passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(charIndex)
    }
    return result

  }
  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
  }

  return (
    <View>
      <Text>App is working perfectly fine </Text>
    </View>
  )
}

const styles = StyleSheet.create({})