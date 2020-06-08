import React from 'react';
import { connect } from 'react-redux';
import { repoSearch } from './actions';
import { Layout, Menu, Breadcrumb, Input, Select, Typography } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, GithubOutlined, CodeOutlined } from '@ant-design/icons';
import RepoItem from './components/RepoItem';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
const { Option } = Select;
const { Title } = Typography;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'i love react',
      language: 'JavaScript'
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

    const options = [].map(d => <Option key={d.value}>{d.text}</Option>);

    return (
      // <div className="App">
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <input type='text' name='title' value={text}
      //     onChange={event => this.setState({ text: event.target.value })} />

      //   <input type='text' name='language' value={language}
      //     onChange={event => this.setState({ language: event.target.value })} />
      //   <button onClick={this._onClick}>Search</button>

      //   {
      //     isLoading ? <div>loading...</div> :
      //       repos.map(r => <RepoItem key={r.id} {...r} />)
      //   }
      // </div>

      <Layout>
        <Header className="header">
          {/* <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> */}
          <div className="logo" />
          {/* <Input size="default" placeholder="repo search" prefix={<GithubOutlined />} /> */}
          <Input
            prefix={<GithubOutlined />}
            placeholder="respository search"
            value={text}
            onChange={event => this.setState({ text: event.target.value })}
            //onSearch={this._onClick}
            style={{ width: '60%' }}
          />

          <Search
            prefix={<CodeOutlined />}
            placeholder="language"
            value={language}
            onChange={event => this.setState({ language: event.target.value })}
            onSearch={this._onClick}
            style={{ marginLeft: '1%', width: '39%' }}
          />
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <Content className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 280 }}>
            <Title level={3}>Search</Title>

            {
              isLoading ? <div>loading...</div> :
                repos.length === 0 ? <div>not found </div>
                  :
                  repos.map(r => <RepoItem key={r.id} {...r} />)
            }
          </Content>
        </Content>
        <Footer style={{ textAlign: 'center' }}>GitHub Repository Search · 2020</Footer>
      </Layout>
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