import {useRoute} from '@react-navigation/core';
import {inject, observer} from 'mobx-react';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';

const UsersDetails = inject('usersStore')(
  observer(props => {
    const {usersStore} = props;

    //Get params from route
    const route = useRoute();
    const id = route.params?.id ?? 0;

    //find particular user details from mobx users data
    const userDetails = usersStore.users.find(data => data.id === id);

    const {first_name, last_name, email, avatar} = userDetails;

    return (
      <SafeAreaView style={styles.container}>
        <Image source={{uri: avatar}} style={styles.userImage} />
        <Text>{'Name: ' + first_name + ' ' + last_name}</Text>
        <Text>{'Email: ' + email}</Text>
      </SafeAreaView>
    );
  }),
);

export default UsersDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  userImage: {
    height: 100,
    width: 100,
    marginBottom: 20,
    resizeMode: 'cover',
  },
});
