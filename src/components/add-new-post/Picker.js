import React from 'react'
import PropTypes from 'prop-types'
import { CirclePicker } from 'react-color'
import { identity } from 'ramda'

class PalettePopup extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func
  }

  static defaultProps = {
    onClose: identity
  }
  
  style = {
    position: 'absolute',
    top: '-3px',
    right: '-3px',

    boxSizing: 'content-box',
    background: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px'
  }

  invokeOnClose = () =>
    this.props.onClose()

  componentDidMount = () =>
    window.addEventListener('click', this.invokeOnClose)

  componentWillUnmount = () =>
    window.removeEventListener('click', this.invokeOnClose)

  render(){
    return (
      <div style={ this.style }>
        <CirclePicker
          onChange={ this.props.onChange }
        />
      </div>
    )
  }
}

const ColorIndicator = ({ color, onClick, ...props }) => {
  const style = {
    background: color
  }
  return (
    <div
      className="color-indicator"
      style={ style }
      onClick={ onClick }
      { ...props }
    />
  )
}
ColorIndicator.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func
}
ColorIndicator.defaultProps = {
  onClick: identity
}


class Picker extends React.Component {
  state = {
    paletteOpened: false,
    color: 'red'
  }

  handleColorChange = ({ hex }) =>
    this.setState({
      paletteOpened: false,
      color: hex
    })

  handleOpenPalette = e => {
    /* !!! */
    e.stopPropagation()

    this.setState({ 
      paletteOpened: true 
    })
  }

  handlePaletteClose = () =>
    this.setState({
      paletteOpened: false
    })

  style = {
    position: 'relative'
  }

  render(){
    return (
      <div style={ this.style }>
        <ColorIndicator
          color={ this.state.color }
          onClick={ this.handleOpenPalette }
        />
        { 
          this.state.paletteOpened && 
            <PalettePopup
              onChange={ this.handleColorChange }
              onClose={ this.handlePaletteClose }
            />
        }
      </div>
    )
  }
}

export default Picker;
