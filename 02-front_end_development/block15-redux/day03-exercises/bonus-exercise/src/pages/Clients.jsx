import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { remClient } from '../redux/actions';

class Clients extends Component {
  constructor() {
    super();

    this.state = {
      clients: [],
      original: [],
      isSorted: false,
    };
  }

  componentDidMount() {
    const { clients } = this.props;
    const original = [...clients];
    this.setState({ clients, original });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.clients !== this.props.clients) {
      const { clients } = this.props;
      const original = [...clients];
  
      this.setState({ clients, original });
    }
  }

  orderByName = () => {
    const { clients, isSorted, original } = this.state;

    const sorted = clients.sort(({ name: nameA }, { name: nameB }) => {
      if(nameA > nameB) return 1;
      if (nameA < nameB) return -1;
      return 0;
    });
    this.setState({
      clients: isSorted ? [...original] : sorted,
      isSorted: !isSorted
    });
  };

  deleteEntry = (index) => {
    const { remClientAction } = this.props;
    remClientAction(index);
  }

  render() {
    const { user } = this.props;
    const { clients } = this.state;

    return user === undefined ? (
      <p>Login não efetuado</p>
    ) : (
      <div>
        <h1>Clientes Cadastrados</h1>
        {clients.length === 0 ? (
          <p>Nenhum cliente cadastrado</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th><button onClick={ this.orderByName }>Nome</button></th>
                <th>Idade</th>
                <th>Email</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(({ name, age, email }, idx) => (
                  <tr key={ name }>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                    <td><button type="button" onClick={ () => this.deleteEntry(idx) }>X</button></td>
                  </tr>
              ))}
            </tbody>
          </table>
        )}
        <button type="button">
          <Link to="/clientsRegister">Cadastrar Clientes</Link>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.loginReducer.user,
  clients: state.clientReducer.clients,
});

const mapDispatchToProps = (dispatch) => ({
  remClientAction: (idx) => dispatch(remClient(idx))
})

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
