import React from 'react';
import { connect } from 'react-redux';
import { repoSearch } from './actions';
import { Layout, Input, Typography, Pagination, Spin } from 'antd';
import { GithubOutlined, CodeOutlined } from '@ant-design/icons';
import numeral from 'numeral';
import RepoItem from './components/RepoItem';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Title } = Typography;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'react',
      language: 'JavaScript'
    }
  }

  _onClick = (page, pageSize) => {
    const { text, language } = this.state;
    if (!text || !language) return alert('Please input repo name and programming language!');

    const itemsPerPage = pageSize ? pageSize : this.props.itemsPerPage;
    const currentPage = page ? page : 1;
    this.props.onClick({ itemsPerPage, currentPage, text, language });
  }

  render() {
    const { text, language } = this.state;
    const { isLoading, repos, totalCount, itemsPerPage, currentPage } = this.props;
    const title = totalCount ? `Search (${numeral(totalCount).format('0,0')} repositories found):` : 'Search';

    return (
      <Layout>

        {/* // HEADER */}
        <Header className="header">

          {/* // SEARCH STRING */}
          <Input
            prefix={<GithubOutlined />}
            placeholder="respository search"
            value={text}
            onChange={event => this.setState({ text: event.target.value })}
            style={{ width: '60%' }}
          />

          {/* // LANGUAGE */}
          <Search
            prefix={<CodeOutlined />}
            placeholder="language"
            value={language}
            onChange={event => this.setState({ language: event.target.value })}
            onSearch={value => this._onClick()}
            style={{ marginLeft: '1%', width: '39%' }}
          />
        </Header>

        {/* // MAIN CONTENT */}
        <Content style={{ padding: '0 50px' }}>
          <Content className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: '300px' }}>

            {/* // TITLE */}
            <Title level={3}>{title}</Title>
            <div style={{ display: 'flex', minHeight: '280px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

              {/* // LOADING SPINNER */}
              {
                isLoading ?
                  <Spin size="large" />
                  :
                  repos.length === 0 ? <Title level={4} style={{ color: 'grey' }}>Not found</Title>
                    :
                    <div style={{ width: '100%' }}>
                      {repos.map(r => <RepoItem key={r.id} {...r} />)}
                    </div>

              }

              {/* // PAGINATION */}
              {
                !isLoading ? <Pagination
                  hideOnSinglePage
                  onShowSizeChange={(current, newSize) => this._onClick(1, newSize)}
                  total={totalCount}
                  showSizeChanger
                  pageSizeOptions={[10, 30, 50, 100]}
                  showLessItems={true}
                  pageSize={itemsPerPage}
                  current={currentPage}
                  onChange={(currentPage, itemsPerPage) => this._onClick(currentPage, itemsPerPage)}
                /> : <div />
              }

            </div>
          </Content>
        </Content>

        {/* // FOOTER */}
        <Footer style={{ textAlign: 'center' }}>GitHub Repository Search · 2020</Footer>
      </Layout >
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