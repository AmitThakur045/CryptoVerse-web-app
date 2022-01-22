import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetCryptosQuery(50);
  const exchangesList = data?.data?.coins;

  if(isFetching) return <Loader />

  return (
    <>
    <Row>
      <Col span={6}>Exchanges</Col>
      <Col span={6}>Rank</Col>
      <Col span={6}>Markets</Col>
      <Col span={6}>Changes</Col>
    </Row>
    <Row> 
      {exchangesList?.map((exchange) => (
        <Col span={24} style={{ margin: 10 }}>
            <Panel
              key={exchange.uuid}
              showArrow={false}
              header={(
                <Row key={exchange.uuid}>
                  <Col span={6}>
                    <Text><strong>{exchange.rank}</strong></Text>
                    <Avatar className="exchange-image" src={exchange?.iconUrl} />
                    <Text><strong>{exchange?.name}</strong></Text>
                  </Col>
                  <Col span={6}>{exchange.rank}</Col>
                  <Col span={6}>{millify(exchange.marketCap)}</Col>
                  <Col span={6}>${millify(exchange.price)}</Col>
                </Row>
              )}
            >
            </Panel>
        </Col>
      ))}
    </Row>
    </>
  )
};

export default Exchanges;
