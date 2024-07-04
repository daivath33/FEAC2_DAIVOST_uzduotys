import PropTypes from "prop-types"
import classes from"./Card.module.css"

function Card({src, votesCount, background}) {
  return (
    <div className={classes.card} style={{background: background}}>
        <img src={src} className={classes.cardImage}/>
        <div className={classes.infoContainer} >
            <p className={classes.infoText}>VOTES: {votesCount}</p>
        </div>
    
  </div>
  )
}

export default Card;
Card.propTypes={
src: PropTypes.node,
votesCount:PropTypes.number,
background: PropTypes.string
}