import PropTypes from "prop-types";


const Name = ({name='user'})=>{
    const styleObj={
        color:'red'
    }
    return(
        <h3> Name : <span style={styleObj}>{name}</span>  </h3>
    )
    
}
Name.propTypes={
    name: PropTypes.string,
}
export default Name