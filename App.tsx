import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'
import ProfileSection from './components/ProfileSection'
import StoriesSection from './components/StoriesSection'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <FlatCards/>
        <ElevatedCard/>
        <FancyCard/>
        <ActionCard/>
        <ContactList/> */}
        <ProfileSection/>
        <StoriesSection/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App