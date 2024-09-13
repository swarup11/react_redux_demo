import React from 'react'
import { buyBurger } from '../redux'
import { connect } from 'react-redux'

function BurgerContainer(props) {
  return (
    <div>
        <h2>Number of Burger {props.numOfBurger}</h2>
        <button onClick={props.dispatch}>Buy Burger</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfBurger: state.burger.numOfBurger
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch: () => dispatch(buyBurger())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerContainer)