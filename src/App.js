import React, { useState } from "react";

function App() {

  const kickLottery = () => {
    console.log(`SID:${process.env.REACT_APP_TWILIO_ACCOUNT_SID} AUTH-TOKEN:${process.env.REACT_APP_TWILIO_AUTH_TOKEN}`);
    console.log(`FlowID:${process.env.REACT_APP_TWILIO_FLOW_ID}  ToNumber:${process.env.REACT_APP_TWILIO_TO_NUMBER} FromNumber:${process.env.REACT_APP_TWILIO_FROM_NUMBER}`);


    const client = require('twilio')(
      process.env.REACT_APP_TWILIO_ACCOUNT_SID,
      process.env.REACT_APP_TWILIO_AUTH_TOKEN
    )

    try {
      client.studio.flows(process.env.REACT_APP_TWILIO_FLOW_ID)
        .executions.create({
          from: process.env.REACT_APP_TWILIO_FROM_NUMBER,
          to: process.env.REACT_APP_TWILIO_TO_NUMBER
        })
        .then(flow => {
          console.log(flow)
          alert("リクエストが送信されました")
        })
        .catch(err => {
          console.log(err)
          alert("エラーが発生しました")
        })
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <React.Fragment>
      <header id="header">
        <div id="headerWrap">
          <nav id="mainnav">
            <p id="menuWrap">
              <span id="menu"><span id="menuBtn"></span></span>
            </p>
            <div className="panel">
              <ul>
                <li>Twilio Lottery Kicker</li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <section id="sec01">
        <header>
          <h2><span>Description</span></h2>
        </header>
        <div className="innerS">
          抽選を開始する場合は下のボタンを押してください
        </div>

        <form method="POST" className="form" name='lottery'>
          {/* <p>Flow ID<br />
            <input type="text" name="flowId" style={{ width: "300px" }} value={flowId} onChange={(event) => setFlowId(event.target.value)} />
          </p>
          <p>To Number (E.164)<br />
            <input type="text" name="toNumber" value={toNumber} onChange={(event) => setToNumber(event.target.value)} />
          </p> */}

          <div className="innerS">
            <label className="button" onClick={() => {
              kickLottery()
            }}>
              <span>START</span>
              <span>LOTTERY</span>
            </label>

          </div>
        </form>

      </section>

      <footer id="footer">
        Copyright(c) 2020 GeekFeed Inc. All Rights Reserved.
      </footer>
    </React.Fragment>
  );
}

export default App;
