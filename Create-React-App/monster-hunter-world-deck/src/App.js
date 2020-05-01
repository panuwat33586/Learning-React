import React from 'react';
import { Card } from './components/basic/Card';
import { Row, Col } from './components/basic/Container'

function App() {
  return (
    <div>
      <h1>Monster Hunter World</h1>
      <Row>
        <Col
        span={24}
        >
          <Card
            Img='https://i.ytimg.com/vi/Sd1QBwBHIJk/maxresdefault.jpg'
          >
            <h1>Negigante</h1>
          </Card>
        </Col>
      </Row>

    </div>
  );
}

export default App;
