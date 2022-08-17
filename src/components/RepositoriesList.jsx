import React from 'react'
import { FlatList } from 'react-native'

import RepositoryItem from './RepositoryItem'

import useRepositories from '../hooks/useRepositories'

const RepositoriesList = () => {
  const {repositories} = useRepositories() 

  return (
    <FlatList
      data={repositories}
      renderItem={({item: repository}) => 
        <RepositoryItem {...repository}/>
      }
    />
  )
}

export default RepositoriesList