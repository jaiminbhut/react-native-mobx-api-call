import {inject, observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const getUsers = async (usersStore, recall) => {
  usersStore.getUsersList(recall);
};

const UserListItem = ({
  id,
  avatar,
  first_name,
  last_name,
  email,
  navigation,
}) => {
  return (
    <Pressable
      style={styles.itemContainer}
      onPress={() => navigation.navigate('UsersDetails', {id: id})}>
      <Image source={{uri: avatar}} style={styles.userImage} />
      <View>
        <Text>{'Name: ' + first_name + ' ' + last_name}</Text>
        <Text>{'Email: ' + email}</Text>
      </View>
    </Pressable>
  );
};

const LoadMoreButton = ({usersStore}) => {
  const {page, total_pages} = usersStore;
  const buttonText = page === total_pages ? 'No More Data' : 'LoadMore';
  return (
    <Pressable
      style={styles.loadMoreButton}
      onPress={() => getUsers(usersStore, true)}>
      <Text style={styles.loadMoreText}>{buttonText}</Text>
    </Pressable>
  );
};

const Users = inject('usersStore')(
  observer(props => {
    const {usersStore} = props;

    useEffect(() => {
      getUsers(usersStore, false);
    }, []);

    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          data={usersStore.users}
          ListFooterComponent={() => <LoadMoreButton {...props} />}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={({}, index) => index.toString()}
          renderItem={({item}) => <UserListItem {...item} {...props} />}
        />
      </SafeAreaView>
    );
  }),
);
export default Users;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  userImage: {
    height: 70,
    width: 70,
    resizeMode: 'cover',
    marginEnd: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  loadMoreButton: {
    padding: 10,
    backgroundColor: '#187AEC',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  loadMoreText: {
    color: '#ffffff',
  },
});
