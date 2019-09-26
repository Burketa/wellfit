import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import api from '../services/api';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Le App',
  };

  state = {
    appointmentInfo: {},
    docs: [],
    page: 1,
  };

  componentDidMount() {
    this.loadAppointments();
  }

  loadAppointments = async (page = 1) => {
    const response = await api.get(`/appointments?page=${page}`);

    const {docs, ...appointmentInfo} = response.data;

    console.log(docs);

    this.setState({docs: [...this.state.docs, ...docs], appointmentInfo, page});
  };

  renderItem = ({item}) => (
    <View style={styles.appointmentContainer}>
      <Text style={styles.appointmentTitle}>{item.clientName}</Text>
      <Text style={styles.appointmentDescription}>{item.appointmentDate}</Text>
      <TouchableOpacity
        style={styles.appointmentButton}
        onPress={() => {
          this.props.navigation.navigate('Appointment', {product: item});
        }}>
        <Text style={styles.appointmentButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  loadMore = () => {
    const {page, appointmentInfo} = this.state;

    if (page === appointmentInfo.page) {
      return;
    }

    const pageNumber = page + 1;
    this.loadAppointments(pageNumber);
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.3}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },

  list: {
    padding: 20,
  },

  appointmentContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },

  appointmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  appointmentDescription: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24,
  },

  appointmentButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#DA552F',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  appointmentButtonText: {
    fontSize: 16,
    color: '#DA552F',
    fontWeight: 'bold',
  },
});
