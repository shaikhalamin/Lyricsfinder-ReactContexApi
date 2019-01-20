import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layouts/Spinner';
import Track from '../tracks/Track';

class Tracks extends Component {
  render() {
    return (
        <Consumer>
            { value=>{
                const { track_list,heading_value } = value;
                if(track_list === undefined || track_list.length === 0){
                    return <Spinner />
                }else{
                    return (
                        <React.Fragment>
                            <h3 className="text-center mb-4">{ heading_value }</h3>
                            <div className="row">
                                { track_list.map((item)=>{
                                    console.log(item)
                                    return <Track key={item.track.track_id} track={item.track} />
                                }) }
                            </div>
                           
                        </React.Fragment>
                    )
                }
                
            }}
        </Consumer>
    )
  }
}

export default Tracks;