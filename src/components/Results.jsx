import React from 'react';

class Results extends React.PureComponent {

    getPair() {
        return this.props.pair || [];
    }

    getVotes(entry) {
        if (this.props.tally && this.props.tally.has(entry)) {
            return this.props.tally.get(entry);
        }
        return 0;
    }

    render() {
        return (
          <div className="Results">
            {this.getPair().map(entry =>
              <div key={entry} className="entry">
                <h1>{entry}</h1>
                <div className="voteCounte">
                  {this.getVotes(entry)}
                </div>
              </div>)}
          </div>
        );
    }
}

export default Results;
