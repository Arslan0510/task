import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../common/input';
import { fetchURLData, fetchRandomURLData } from '../../redux/actions';

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breed: '',
      breedImage: '',
      showData: false,
      errors: false,
    };
  }

  handleChange = ({ currentTarget: input }) => {
    var breed = { ...this.state.breed };
    breed = input.value;
    this.setState({ breed, errors: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { breed } = this.state;
    if (breed.trim() === '') {
      this.setState({ errors: true });
      return;
    } else {
      this.props.fetchURLData(breed);
    }
  };
  handleRandom = (e) => {
    e.preventDefault();

    this.props.fetchRandomURLData();
  };

  BreedSearched() {
    const { breed } = this.props;
    console.log('props form App', breed);
    return (
      <ul className='list-group col-sm-4'>
        {breed.map((br) => {
          return (
            <li key={br.name} className='list-group-item block-items mt-2'>
              <div className='list-item'>
                {br.name}
                <center>
                  <img
                    alt='dog'
                    src={br.image}
                    style={{ height: 200, width: 200 }}
                  />
                </center>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    const { breed, errors } = this.state;
    return (
      <div>
        <h1>Let's Search</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='breed'
            label='Breed Name'
            value={breed}
            onChange={this.handleChange}
            error={errors}
          />
          <button className='btn btn-success'>Search</button>
        </form>
        <button className='btn btn-success mt-2' onClick={this.handleRandom}>
          Random Search
        </button>
        {this.BreedSearched()}
        {/* {showData && (
          <div className='row'>
            <div className='col-2'>
              <h2>{breed}</h2>
            </div>
            <div className='col mt-2'>
              <img
                alt='dog'
                src={breedImage}
                style={{ height: 200, width: 200 }}
              />
              <button className='btn btn-primary m-2'>Add to collection</button>
            </div>
          </div>
        )} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    breed: state,
  };
}

export default connect(mapStateToProps, { fetchURLData, fetchRandomURLData })(
  index
);
