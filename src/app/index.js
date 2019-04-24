import React,{Component} from 'react';
import {View,TouchableOpacity,Text,TextInput,Keyboard,StyleSheet}  from 'react-native';
import {connect} from 'react-redux';
import Table from './Table';
import { login } from '../redux/actions';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
        name: '',
        password: ''    
      }
  }

  onSubmit = () => {
   

    const {name,password} = this.state;
    if(name ==""){
      
      this.setState({Error: 'please fill the first name'});
    }
    else if(password ==""){
  
        this.setState({Error: 'please fill the password'});
    }
    else {
        this.props.onLogin(this.state.name, this.state.password);
    }

    Keyboard.dismiss();

    if(this.props.loginStatus === 'wrongPassword'){
        
             this.setState({Error: 'Ur USerName or Password is wrong'});
            
    }else if(this.props.loginStatus !== 'wrongPassword' && this.props.loginStatus){

        <Table/>
    }
  }

  render() {
    
    return (
        
        <View style={styles.container}>

        <Text style={{color:'red', textAlign:'center'}}>
        {this.state.Error}
        </Text>

        <TextInput autoCapitalize="none" keyboardType="UserName" style={styles.myText} placeholder="Enter name" value={this.state.name} onChangeText={name => this.setState({name})}/>
        <TextInput autoCapitalize="none" secureTextEntry style={styles.myText} placeholder="Enter password" value={this.state.password} onChangeText={password => this.setState({password})}/>
        <TouchableOpacity onPress={() => this.onSubmit()}>
          <Text style={{marginTop:20,color:'black',textAlign:'center'}}>
            Login
          </Text>
        </TouchableOpacity>

      </View>
  
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    myText:{
      borderWidth:1,
      borderColor:'#ccc',
      margin:10, 
      padding:10, 
      width:'90%'
    }
  });

const mapStateToProps = state => ({
  loginStatus: state.login.loginStatus
})

const mapDispatchToProps = dispatch => ({
  onLogin: (name,password) => dispatch(login(name,password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
