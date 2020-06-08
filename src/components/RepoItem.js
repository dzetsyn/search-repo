import React from 'react';
import { Typography, Tag, Row, Col } from 'antd';
import dayjs from 'dayjs';
import numeral from 'numeral';
import { ReactComponent as StarIcon } from './star.svg';
import { ReactComponent as WatchIcon } from './watch.svg';

const { Title } = Typography;

const style = { background: '#0092ff', padding: '8px 0' };

const RepoItem = props => {
    const updatedDateTime = dayjs(props.updated_at).format('MMM D, YYYY');
    const stars = props.stargazers_count ? numeral(props.stargazers_count).format('0,0') : null;
    const watchers = props.watchers_count ? numeral(props.watchers_count).format('0,0') : null;

    return (
        // <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        //     {/* // AVATAR */}
        //     <img src={props.owner.avatar_url} style={{ borderRadius: 8 }} width={85} height={85} />

        //     <div className="site-layout-background" style={{ padding: 20 }}>
        //         {/* // TITLE */}
        //         <a href={props.html_url} target="_blank" rel="noopener noreferrer"><Title level={3}>{props.name}</Title></a>

        //         {/* // DESCRIPTION */}
        //         <div>{props.description}</div>

        //         <div style={{ display: 'flex', marginTop: 10 }}>
        //             {/* // STARS */}
        //             {
        //                 stars ?
        //                     <span style={{ marginRight: 15, display: 'flex', alignItems: 'center' }}>
        //                         <StarIcon />&nbsp;{stars}
        //                     </span>
        //                     : <div />
        //             }

        //             {/* // LANGUAGE BADGE */}
        //             {
        //                 props.language ?
        //                     <span style={{ marginRight: 15 }}>
        //                         <Tag color="green">{props.language}</Tag>
        //                     </span>
        //                     : <div />
        //             }

        //             {/* // WATCHERS */}
        //             {
        //                 watchers ?
        //                     <span style={{ marginRight: 15, display: 'flex', alignItems: 'center' }}>
        //                         <WatchIcon />&nbsp;{watchers}
        //                     </span>
        //                     :
        //                     <div />
        //             }

        //             {/* // UPDATED */}
        //             <span style={{ fontSize: 12, display: 'flex', alignItems: 'center' }}>
        //                 Updated {updatedDateTime}
        //             </span>
        //         </div>
        //     </div>
        // </div>

        <Row>
            <Col xs={0} sm={4}>
                <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }} >
                    <img src={props.owner.avatar_url} style={{ borderRadius: 8 }} width={85} height={85} />
                </div>
            </Col>
            <Col xs={24} sm={20}>

                <div className="site-layout-background" style={{ padding: 20 }}>
                    {/* // TITLE */}
                    <a href={props.html_url} target="_blank" rel="noopener noreferrer"><Title level={3}>{props.name}</Title></a>

                    {/* // DESCRIPTION */}
                    <div>{props.description}</div>

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
                </div>
            </Col>
        </Row >
    );
}

export default RepoItem;