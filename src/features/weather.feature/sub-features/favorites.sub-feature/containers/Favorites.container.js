import React, { Component } from "react";
import { connect } from "react-redux";
import {
  LoadFavoritesAction,
  RemoveFavoriteAction
} from "../redux/Favorites.actions";
import CityItem from "../components/CityItem.component";
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Favorites extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(LoadFavoritesAction());
  }

/*  RemoveFavorite = id => {
    const { dispatch } = this.props;
    dispatch(RemoveFavoriteAction(id));
  };*/

  ChooseFavorite = (id, city) => {
    const { history } = this.props;
    history.push(`/home?id=${id}&city=${city}&fav=true`);
    //history.push('/home?fav=true')
  };

  render() {
    const { favItems } = this.props;
    return (
      <div className="root">
        <Container>
          <Row>
            {favItems &&
              favItems.map(data => (
                <Col sm={2}>
                  <CityItem
                    /*RemoveFavorite={this.RemoveFavorite}*/
                    ChooseFavorite={this.ChooseFavorite}
                    temp={data.current[0].Temperature.Metric.Value}
                    cityName={data.city}
                    id={data.idKey}
                  />
                </Col>
              ))}
          </Row>
        </Container>
        <div>fav</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    favItems: state.FavoritesReducer.favItems
  };
};
export default connect(mapStateToProps)(Favorites);
