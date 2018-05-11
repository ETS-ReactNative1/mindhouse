// @flow
import * as React from 'react'
import { Row } from "antd"
import TeamMember from "./TeamMember"

import BaranPhoto from '../assets/images/team/baran.png'
import GaszynskiPhoto from '../assets/images/team/gaszynski.png'
import MisztalPhoto from '../assets/images/team/misztal.png'

type Props = {}

class Team extends React.PureComponent<Props> {
  static defaultProps = {}

  render() {
    return (
      <section>
        <h2 className="section-title">Team</h2>
        <p className="section-description">
          We connect our passion of bringing the best ideas to life
          with a mindful, nomadic & joyful way of living.
        </p>
        <Row gutter={30} type="flex">
          <TeamMember
            name="Adrian Baran"
            description="React Front-end"
            photo={BaranPhoto}
          />
          <TeamMember
            name="Chris Gaszynski"
            description="React & Crypto Front-end"
            photo={GaszynskiPhoto}
          />
          <TeamMember
            name="Kris Misztal"
            description="Android & Solidity"
            photo={MisztalPhoto}
          />
        </Row>
      </section>
    )
  }
}

export { Team }
