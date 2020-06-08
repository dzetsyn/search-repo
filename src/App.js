import React from 'react';
import { connect } from 'react-redux';
import { repoSearch } from './actions';
import RepoItem from './components/RepoItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'tetris',
      language: 'js'
    }
  }

  _onClick = () => {
    const { text, language } = this.state;
    this.props.onClick({ text, language });
  }

  render() {
    console.log(this.state, this.props)
    const { text, language } = this.state;
    const { isLoading, repos } = this.props

    return (
      <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type='text' name='title' value={text}
          onChange={event => this.setState({ text: event.target.value })} />

        <input type='text' name='language' value={language}
          onChange={event => this.setState({ language: event.target.value })} />
        <button onClick={this._onClick}>Search</button>

        {
          isLoading ? <div>loading...</div> :
            repos.map(r => <RepoItem key={r.id} {...r} />)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  onClick: props => dispatch(repoSearch(props))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)