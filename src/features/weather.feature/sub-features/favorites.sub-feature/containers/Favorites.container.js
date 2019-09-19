import React ,{Component} from 'react';
import {connect} from "react-redux";
import {LoadFavoritesAction,RemoveFavoriteAction} from '../redux/Favorites.actions'
import CityItem from '../components/CityItem.component'
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Favorites extends Component{
    componentDidMount() {
        const { dispatch  } = this.props;
        dispatch(LoadFavoritesAction())


    }

    RemoveFavorite=(id)=>{
        const { dispatch  } = this.props;

        console.log(id)
        dispatch(RemoveFavoriteAction(id))
    }
    render(){
        const { favItems  } = this.props;
        return(
            <div className="root">
                <Container>
                    <Row>
                        {favItems &&
                        // weatherData.fData.DailyForecasts
                        favItems.map((data, index) => (

                            <Col sm={2}>
                                <CityItem parentMethod={(id) => this.RemoveFavorite(id)} temp={data.current[0].Temperature.Metric.Value} cityName={data.city} />
                            </Col>
                        ))}

                    </Row>
                </Container>
            <div>fav</div>

            </div>

        )}


}

const mapStateToProps = state => {
    //const weatherData = state.WeatherReducer;
    console.log(state.FavoritesReducer.favItems)
    return {
        favItems: state.FavoritesReducer.favItems
    };
};
export default connect(mapStateToProps)(Favorites);
