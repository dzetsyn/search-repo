import React from 'react';
import { Typography, Tag } from 'antd';
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
                <span style={{ marginRight: 15 }}>
                    <Tag color="green">{props.language}</Tag>
                </span>

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
        </div >
    );
}

export default RepoItem;