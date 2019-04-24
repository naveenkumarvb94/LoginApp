import React, { Component } from 'react';
import { connect } from 'react-redux'
import {View,FlatList,Text}  from 'react-native';
import { getEmployeeData } from '../redux/actions'


class TableData extends Component {
	componentDidMount() {
		this.props.getEmployeeData();
	}
	render() {
    
    return(
      <View style={{flex: 1, flexDirection: 'column'}}>
      <Text >
        Employee List
      </Text>
      <FlatList
        data={this.props.getEmployeeData()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>
           <View >
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
            <Text>{item.gender}</Text>
            <Text>{item.email}</Text>
            <Text>{item.phoneNo}</Text>
           </View>
        }
        keyExtractor={(item, index) => index.toString()}
      />
   </View>
);
  }
}

const mapStateToProps = state => ({
  employeeData: state.tableJson.user
})

const mapDispatchToProps = dispatch => ({
  getEmployeeData: () => dispatch(getEmployeeData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableData)

