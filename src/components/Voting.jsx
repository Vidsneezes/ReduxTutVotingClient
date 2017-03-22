import React from 'react';

class Voting extends React.Component {

    getPair() {
        return this.props.pair || [];
    }

    isDisabled() {
        return !!this.props.hasVoted;
    }

    render() {
        return (
          <div className="voting">
            {this.getPair().map(entry =>
              <button
                key={entry}
                disabled={this.isDisabled()}
                onClick={() => this.props.vote(entry)}
              >
                <h1>{entry}</h1>
              </button>
            )}
          </div>
        );
    }

}

export default Voting;
