import { Component } from 'react';
import {
  Curriculum,
  Job,
  JobDescription,
  Address,
  City,
  Cpf,
  Email,
  Name,
  State,
  Type,
} from './components/personalData/personalData';

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
      });
    });
  };

  render() {
    return (
      <form>
        <fieldset>
          <Name key="name" onChange={this.onChange} value={this.state.name} />
          <Email key="email" onChange={this.onChange} value={this.state.email} />
          <Cpf key="cpf" onChange={this.onChange} value={this.state.cpf} />
          <Address key="address" onChange={this.onChange} value={this.state.address} />
          <City key="city" onChange={this.onChange} value={this.state.city} />
          <State key="state" onChange={this.onChange} value={this.state.state} />
          <Type key="type" onChange={this.onChange} value={this.state.type} />
        </fieldset>
        <fieldset>
          <Curriculum key="curriculum" onChange={this.onChange} value={this.state.curriculum} />
          <Job key="job" onChange={this.onChange} value={this.state.job} />
          <JobDescription
            key="jobDescription"
            onChange={this.onChange}
            value={this.state.jobDescription}
          />
        </fieldset>
        <button onClick={this.submit}>Enviar</button>
        <button onClick={this.clean}>Limpar</button>
      </form>
    );
  }
}

export default Form;
