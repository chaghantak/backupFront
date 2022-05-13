import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCampaigns } from "../../redux/actions/DomainActions";
import {Button, Card} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";

const mapDispatchToProps = {
  getCampaigns
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    campaigns: state.domain.campaigns
  }
};

const styles = (theme) => {
  console.log(theme);

  return {
    table: {
      'border': '1px solid black',
    }
  }
}

class AttackDomainViewTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaign: {},
      campaigns: []
    }
  }

  componentDidMount() {
    this.props.getCampaigns();
  }

  render() {
    console.log(this.props);
    return (
        <>
          <div className="allMargin">
            <h5>공격 캠페인 분류 ▶ 도메인 변환</h5>
            <div className="MaxHeight hei15">
              <div>
                <main>
                  <table>
                    <tbody>
                    {this.props.campaigns.map((data) => {
                      return (
                          <tr>
                            <td>{data.index}</td>
                            <td>{data.attack_group}</td>
                          </tr>
                      );
                    })}
                    </tbody>
                  </table>
                </main>
              </div>
            </div>
          </div>
        </>
    );
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AttackDomainViewTest));
