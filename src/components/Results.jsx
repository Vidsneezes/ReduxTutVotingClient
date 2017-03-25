import React from 'react';

class Results extends React.PureComponent {

    getPair() {
        return this.props.pair || [];
    }

    render() {
        return (
          <div className="Results">
            {this.getPair().map(entry =>
              <div key={entry} className="entry">
                <h1>{entry}</h1>
              </div>)}
          </div>
        );
    }
}

export default Results;
