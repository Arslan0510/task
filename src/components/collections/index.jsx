import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBreed } from '../../redux/actions';
import ImgMediaCard from '../common/imgMediaCard';
import { Grid } from '@material-ui/core';

export class index extends Component {
  state = {
    breed: '',
  };

  removeBreed(breedName) {
    this.props.deleteBreed(breedName);
  }

  render() {
    const { breed } = this.props;
    return (
      <div className='container'>
        <Grid container spacing={4}>
          {breed.map((br) => (
            <Grid item xs={6} sm={4}>
              <ImgMediaCard
                key={br.name}
                data={br}
                removeBreed={(name) => this.removeBreed(name)}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    breed: state,
  };
}

export default connect(mapStateToProps, { deleteBreed })(index);
