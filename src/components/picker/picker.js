import React from 'react';
import RecordList from '../record/list.js';

class PickModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modelSelect: null
    };
  }

  handleModel = (model) => {
    this.setState({ modelSelect: model });
  }

  conditionalRender = () => {
    if (this.state.modelSelect === null) {
      return (
        <div>
          <button onClick={() => this.handleModel('players')}>Players</button>
          <button onClick={() => this.handleModel('teams')}>Teams</button>
          <button onClick={() => this.handleModel('categories')}>Categories</button>
          <button onClick={() => this.handleModel('products')}>Products</button>
        </div>
      )
    } else {
      return (
        <div className='conditional'>
          <button onClick={() => this.handleModel(null)}>Back</button>
          <RecordList model={this.state.modelSelect} />
        </div>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.conditionalRender()}
      </React.Fragment>
    )
  }
}

export default PickModel;