const Country = (props) => {
    const styleObj={
        color:'red'
    }
    return (
<>
Country : <span style={styleObj}>{props.country}</span>
</>

    )
}
export default Country