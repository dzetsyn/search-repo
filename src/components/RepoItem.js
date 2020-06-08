import React from 'react';
import { Typography, Tag, Row, Col } from 'antd';
import dayjs from 'dayjs';
import numeral from 'numeral';
import { ReactComponent as StarIcon } from './star.svg';
import { ReactComponent as WatchIcon } from './watch.svg';

const { Title } = Typography;

const RepoItem = props => {
    const updatedDateTime = dayjs(props.updated_at).format('MMM D, YYYY');
    const stars = props.stargazers_count ? numeral(props.stargazers_count).format('0,0') : null;
    const watchers = props.watchers_count ? numeral(props.watchers_count).format('0,0') : null;

    return (
        <Row>
            {/* // HIDE AVATAR IF XS SCREEN */}
            <Col xs={0} sm={4}>
                <div style={{ display: 'flex', height: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <a href={props.owner.html_url} target="_blank" rel="noopener noreferrer">
                        <img alt={props.owner.login} src={props.owner.avatar_url} style={{ borderRadius: 8 }} width={85} height={85} />
                    </a>
                </div>
            </Col>

            <Col xs={24} sm={20}>
                <Row>
                    <div className="site-layout-background" style={{ padding: 20, width: '100%' }}>
                        {/* // TITLE */}
                        <a href={props.html_url} target="_blank" rel="noopener noreferrer"><Title level={3}>{props.name}</Title></a>

                        {/* // DESCRIPTION */}
                        <div>{props.description}</div>


                        {/* // HIDE THIS PART IF XS SCREEN */}
                        <Col xs={0} sm={20}>
                            <div style={{ display: 'flex', marginTop: 10 }}>
                                {/* // STARS */}
                                {
                                    stars ?
                                        <span style={{ marginRight: 15, display: 'flex', alignItems: 'center' }}>
                                            <StarIcon />&nbsp;{stars}
                                        </span>
                                        : <div />
                                }

                                {/* // LANGUAGE BADGE */}
                                {
                                    props.language ?
                                        <span style={{ marginRight: 15, display: 'flex', alignItems: 'center' }}>
                                            <Tag color="green">{props.language}</Tag>
                                        </span>
                                        : <div />
                                }

                                {/* // WATCHERS */}
                                {
                                    watchers ?
                                        <span style={{ marginRight: 15, display: 'flex', alignItems: 'center' }}>
                                            <WatchIcon />&nbsp;{watchers}
                                        </span>
                                        :
                                        <div />
                                }

                                {/* // UPDATED */}
                                <span style={{ fontSize: 12, display: 'flex', alignItems: 'center' }}>
                                    Updated {updatedDateTime}
                                </span>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Col>
        </Row >
    );
}

export default RepoItem;