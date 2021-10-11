import { Component } from 'react';
import Curriculum from './components/jobData/Curriculum';
import Job from './components/jobData/Job';
import JobDescription from './components/jobData/JobDescription';
import Address from './components/personalData/Address';
import City from './components/personalData/City';
import Cpf from './components/personalData/Cpf';
import Email from './components/personalData/Email';
import Name from './components/personalData/Name';
import State from './components/personalData/State';
import Type from './components/personalData/Type';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: 'AC',
      type: 'Casa',
      curriculum: '',
      job: '',
      jobDescription: '',
    };
  }

  onChange = ({ id, value }) => {
    this.setState({
      [id]: value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.setData(this.state, true);
  };

  clean = (e) => {
    e.preventDefault();
    this.props.setData('', false);

    Object.keys(this.state).forEach((key) => {
      this.setState({
        [key]: '',
      });
    this.setState({
      state: 'AC',
      type: 'Casa',
    })
    });
  };

  render() {
    return (
      <form>
        <fieldset>
          <Name key='name' onChange={this.onChange} value={this.state.name} />
          <Email key='email' onChange={this.onChange} value={this.state.email} />
          <Cpf key='cpf' onChange={this.onChange} value={this.state.cpf} />
          <Address key='address' onChange={this.onChange} value={this.state.address} />
          <City key='city' onChange={this.onChange} value={this.state.city} />
          <State key='state' onChange={this.onChange} value={this.state.state} />
          <Type key='type' onChange={this.onChange} value={this.state.type} />
        </fieldset>
        <fieldset>
          <Curriculum key='curriculum' onChange={this.onChange} value={this.state.curriculum} />
          <Job key='job' onChange={this.onChange} value={this.state.job} />
          <JobDescription key='jobDescription' onChange={this.onChange} value={this.state.jobDescription} />
        </fieldset>
        <button onClick={this.submit}>Enviar</button>
        <button onClick={this.clean}>Limpar</button>
      </form>
    );
  }
}

export default Form;
