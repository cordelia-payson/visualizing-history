import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  align-items: center;
`;

const TitleText = styled.div`
  font-size: 2.5em;
  text-align: center;
  margin-top: 20px;
`;

function Title() {
  return (
    <div>

      <TopBar>
        <TitleText>Visualizing History</TitleText>
      </TopBar>

    </div>
  );
}

export default Title;
