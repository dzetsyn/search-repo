import React from 'react';
import { connect } from 'react-redux';
import { repoSearch } from './actions';
import { Layout, Input, Typography, Pagination, Spin, Select, Button, AutoComplete } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import numeral from 'numeral';
import RepoItem from './components/RepoItem';
import { languages } from './config';

const { Header, Content, Footer } = Layout;
const { Option } = Select;
const { Title } = Typography;


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      language: '',
      getStarted: true
    }
  }

  _onClick = (page, pageSize) => {
    const { text, language } = this.state;
    if (!text || !language) return alert('Please input repo name and programming language!');

    const itemsPerPage = pageSize ? pageSize : this.props.itemsPerPage;
    const currentPage = page ? page : 1;
    this.props.onClick({ itemsPerPage, currentPage, text, language });
    this.setState({ getStarted: false });
  }

  render() {
    const { text, language, getStarted } = this.state;
    const { isLoading, repos, totalCount, itemsPerPage, currentPage } = this.props;
    const title = totalCount ? `Search (${numeral(totalCount).format('0,0')} repositories found):` : 'Search';

    return (
      <Layout>

        {/* // HEADER */}
        <Header className="header" style={{ display: 'flex', alignItems: 'center' }}>

          {/* // SEARCH STRING */}
          <Input
            data-testid="searchInput"
            allowClear
            prefix={<GithubOutlined />}
            placeholder="Respository name"
            value={text}
            onChange={event => this.setState({ text: event.target.value })}
            style={{ width: '60%' }}
          />

          {/* // LANGUAGE */}
          <AutoComplete
            data-testid="languageInput"
            allowClear
            style={{ marginLeft: '1%', width: '28%' }}
            value={language}
            placeholder="Type to search a language"
            onChange={language => this.setState({ language })}
            filterOption={(inputValue, option) => option.children.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0}
          >
            {languages.map(l => <Option key={l} value={l}>{l}</Option>)}
          </AutoComplete>

          <Button data-testid="searchButton" style={{ marginLeft: '1%', width: '10%' }} onClick={event => this._onClick()}>Search</Button>

        </Header>

        {/* // MAIN CONTENT */}
        <Content style={{ padding: '0 50px' }}>
          <Content className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: '300px' }}>

            {/* // TITLE */}
            <Title level={3}>{title}</Title>
            <div style={{ display: 'flex', minHeight: '300px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

              {/* // LOADING SPINNER & REPO LIST*/}
              {
                isLoading ?
                  <Spin size="large" />
                  :
                  getStarted ?
                    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                      <img alt='empty list' src={process.env.PUBLIC_URL + '/empty.png'} width={200} height={200} />
                      <Title level={4} style={{ color: 'grey' }}>To get started, enter repo and programming language!</Title>
                    </div>
                    :
                    repos.length === 0 ?
                      <Title level={4} style={{ color: 'grey' }}>Not found</Title>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)